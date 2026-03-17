"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useVideoPlayer } from "./VideoPlayerContext";

const DEFAULT_W = 360;
const MIN_W     = 200;
const MAX_W     = 680;

export default function MiniVideoPlayer() {
  const { activeVideo, dismissVideo, anchorEl, anchorVisible } = useVideoPlayer();

  const [pos, setPos]               = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const [width, setWidth]           = useState(DEFAULT_W);
  const [isResizing, setIsResizing] = useState(false);

  const dragOrigin   = useRef(null);
  const resizeOrigin = useRef(null);
  const widthRef     = useRef(DEFAULT_W);  // avoids stale closure in callbacks
  const playerRef    = useRef(null);

  // Keep widthRef in sync
  useEffect(() => { widthRef.current = width; }, [width]);

  // Reset when a new video opens
  useEffect(() => {
    setPos(null);
    setWidth(DEFAULT_W);
    widthRef.current = DEFAULT_W;
  }, [activeVideo?.videoId]);

  // Capture anchor rect once when anchor becomes visible
  useEffect(() => {
    if (!anchorEl || !anchorVisible) { setAnchorRect(null); return; }
    setAnchorRect(anchorEl.getBoundingClientRect());
  }, [anchorEl, anchorVisible]);

  // ── Mouse drag (move) ──
  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const rect = playerRef.current.getBoundingClientRect();
    dragOrigin.current = { mouseX: e.clientX, mouseY: e.clientY, elX: rect.left, elY: rect.top };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const move = (e) => {
      const { mouseX, mouseY, elX, elY } = dragOrigin.current;
      const w = widthRef.current;
      const x = Math.max(0, Math.min(window.innerWidth  - w,   elX + e.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - 260, elY + e.clientY - mouseY));
      setPos({ x, y });
    };
    const up = () => setIsDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [isDragging]);

  // ── Touch drag (move) ──
  const onTouchStart = useCallback((e) => {
    const t = e.touches[0];
    const rect = playerRef.current.getBoundingClientRect();
    dragOrigin.current = { mouseX: t.clientX, mouseY: t.clientY, elX: rect.left, elY: rect.top };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const move = (e) => {
      const t = e.touches[0];
      const { mouseX, mouseY, elX, elY } = dragOrigin.current;
      const w = widthRef.current;
      const x = Math.max(0, Math.min(window.innerWidth  - w,   elX + t.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - 260, elY + t.clientY - mouseY));
      setPos({ x, y });
    };
    const end = () => setIsDragging(false);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend",  end);
    return () => { window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
  }, [isDragging]);

  // ── Mouse resize ──
  const onResizeMouseDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    resizeOrigin.current = { mouseX: e.clientX, startW: widthRef.current };
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;
    const move = (e) => {
      const dx  = e.clientX - resizeOrigin.current.mouseX;
      const newW = Math.max(MIN_W, Math.min(MAX_W, resizeOrigin.current.startW + dx));
      setWidth(newW);
      widthRef.current = newW;
    };
    const up = () => setIsResizing(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [isResizing]);

  // ── Touch resize ──
  const onResizeTouchStart = useCallback((e) => {
    e.stopPropagation();
    const t = e.touches[0];
    resizeOrigin.current = { mouseX: t.clientX, startW: widthRef.current };
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;
    const move = (e) => {
      const t = e.touches[0];
      const dx  = t.clientX - resizeOrigin.current.mouseX;
      const newW = Math.max(MIN_W, Math.min(MAX_W, resizeOrigin.current.startW + dx));
      setWidth(newW);
      widthRef.current = newW;
    };
    const end = () => setIsResizing(false);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend",  end);
    return () => { window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
  }, [isResizing]);

  if (!activeVideo) return null;

  const isInline = anchorVisible && anchorRect;

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

  const floatStyle = !isInline
    ? {
        width: width + "px",
        ...(pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : {}),
      }
    : {};

  return (
    <div
      ref={playerRef}
      className={`mini-player mini-player--visible${isInline ? " mini-player--inline" : ""}${isDragging || isResizing ? " mini-player--dragging" : ""}`}
      style={{ ...inlineStyle, ...floatStyle }}
      role="region"
      aria-label="Mini video player"
    >
      {/* Floating mode: drag handle + title + close */}
      {!isInline && (
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

      {/* Resize handle — floating mode only */}
      {!isInline && (
        <div
          className="mini-player-resize"
          onMouseDown={onResizeMouseDown}
          onTouchStart={onResizeTouchStart}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
