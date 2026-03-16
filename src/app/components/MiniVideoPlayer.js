"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useVideoPlayer } from "./VideoPlayerContext";

export default function MiniVideoPlayer() {
  const { activeVideo, dismissVideo } = useVideoPlayer();
  const [pos, setPos] = useState(null); // null = default bottom-right via CSS
  const [isDragging, setIsDragging] = useState(false);
  const [visible, setVisible] = useState(false);
  const dragOrigin = useRef(null);
  const playerRef = useRef(null);

  // Fade in when video becomes active
  useEffect(() => {
    if (activeVideo) {
      // Small delay so CSS transition fires
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      // Reset position when closed
      setPos(null);
    }
  }, [activeVideo]);

  // ── Mouse drag ──
  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const rect = playerRef.current.getBoundingClientRect();
    dragOrigin.current = {
      mouseX: e.clientX, mouseY: e.clientY,
      elX: rect.left,    elY: rect.top,
    };
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
    dragOrigin.current = {
      mouseX: t.clientX, mouseY: t.clientY,
      elX: rect.left,    elY: rect.top,
    };
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

  const posStyle = pos
    ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" }
    : {};

  return (
    <div
      ref={playerRef}
      className={`mini-player${visible ? " mini-player--visible" : ""}${isDragging ? " mini-player--dragging" : ""}`}
      style={posStyle}
      role="region"
      aria-label="Mini video player"
    >
      {/* Drag handle */}
      <div
        className="mini-player-handle"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
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
        <button
          className="mini-player-close"
          onClick={dismissVideo}
          aria-label="Close mini player"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M1 1L11 11M11 1L1 11"/>
          </svg>
        </button>
      </div>

      {/* Iframe */}
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
