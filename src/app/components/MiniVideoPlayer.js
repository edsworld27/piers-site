"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useVideoPlayer } from "./VideoPlayerContext";

export default function MiniVideoPlayer() {
  const { activeVideo, dismissVideo, anchorEl, anchorVisible } = useVideoPlayer();
  const [pos, setPos]             = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const dragOrigin = useRef(null);
  const playerRef  = useRef(null);

  // Reset drag position when a new video opens
  useEffect(() => {
    setPos(null);
  }, [activeVideo?.videoId]);

  // Capture the anchor rect once when the anchor attaches — never update on scroll
  useEffect(() => {
    if (!anchorEl || !anchorVisible) {
      setAnchorRect(null);
      return;
    }
    setAnchorRect(anchorEl.getBoundingClientRect());
  }, [anchorEl, anchorVisible]);

  // ── Mouse drag (floating mode only) ──
  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const rect = playerRef.current.getBoundingClientRect();
    dragOrigin.current = { mouseX: e.clientX, mouseY: e.clientY, elX: rect.left, elY: rect.top };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const W = 360, H = 240;
    const move = (e) => {
      const { mouseX, mouseY, elX, elY } = dragOrigin.current;
      const x = Math.max(0, Math.min(window.innerWidth  - W, elX + e.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - H, elY + e.clientY - mouseY));
      setPos({ x, y });
    };
    const up = () => setIsDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup",   up);
    };
  }, [isDragging]);

  // ── Touch drag ──
  const onTouchStart = useCallback((e) => {
    const t = e.touches[0];
    const rect = playerRef.current.getBoundingClientRect();
    dragOrigin.current = { mouseX: t.clientX, mouseY: t.clientY, elX: rect.left, elY: rect.top };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const W = 360, H = 240;
    const move = (e) => {
      const t = e.touches[0];
      const { mouseX, mouseY, elX, elY } = dragOrigin.current;
      const x = Math.max(0, Math.min(window.innerWidth  - W, elX + t.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - H, elY + t.clientY - mouseY));
      setPos({ x, y });
    };
    const end = () => setIsDragging(false);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend",  end);
    return () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend",  end);
    };
  }, [isDragging]);

  if (!activeVideo) return null;

  const isInline = anchorVisible && anchorRect;

  // Inline: overlay exactly on the thumbnail container
  const inlineStyle = isInline ? {
    position: "fixed",
    top:    anchorRect.top,
    left:   anchorRect.left,
    width:  anchorRect.width,
    height: anchorRect.height,
    right:  "auto",
    bottom: "auto",
    transition: "none",
  } : {};

  // Floating: use drag position or default corner
  const floatStyle = !isInline && pos
    ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" }
    : {};

  const style = { ...inlineStyle, ...floatStyle };

  return (
    <div
      ref={playerRef}
      className={`mini-player mini-player--visible${isInline ? " mini-player--inline" : ""}${isDragging ? " mini-player--dragging" : ""}`}
      style={style}
      role="region"
      aria-label="Mini video player"
    >
      {!isInline && (
        /* Floating mode: drag handle with title and close */
        <div className="mini-player-handle" onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
          <span className="mini-player-grip" aria-hidden="true">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
              <rect x="0" y="0" width="16" height="2" rx="1"/>
              <rect x="0" y="4" width="16" height="2" rx="1"/>
              <rect x="0" y="8" width="16" height="2" rx="1"/>
            </svg>
          </span>
          <span className="mini-player-handle-title">
            <span className="mini-player-tag">{activeVideo.tag}</span>
            {activeVideo.title}
          </span>
          <button className="mini-player-close" onClick={dismissVideo} aria-label="Close mini player">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M1 1L11 11M11 1L1 11"/>
            </svg>
          </button>
        </div>
      )}

      <div className="mini-player-iframe-wrap">
        <iframe
          src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={activeVideo.title}
        />
      </div>
    </div>
  );
}
