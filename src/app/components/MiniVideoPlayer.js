"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { useVideoPlayer } from "./VideoPlayerContext";

const DEFAULT_W = 360;
const MIN_W     = 200;

export default function MiniVideoPlayer() {
  const { activeVideo, dismissVideo, anchorEl, anchorVisible, isFloating } = useVideoPlayer();

  const [pos, setPos]               = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth]           = useState(DEFAULT_W);
  const [isResizing, setIsResizing] = useState(false);

  const dragOrigin   = useRef(null);
  const resizeOrigin = useRef(null);
  const widthRef     = useRef(DEFAULT_W);
  const playerRef    = useRef(null);

  // Keep widthRef in sync with state (avoids stale closures in drag/resize)
  useEffect(() => { widthRef.current = width; }, [width]);

  // Reset size/position when a new video opens
  useEffect(() => {
    setPos(null);
    setWidth(DEFAULT_W);
    widthRef.current = DEFAULT_W;
  }, [activeVideo?.videoId]);

  // Inline when anchor is visible AND player hasn't been floated yet
  const isInline = anchorVisible && anchorEl && !isFloating;

  // ── Inline tracking ──────────────────────────────────────────────────
  // While inline, continuously follow the anchor element's viewport
  // position so the player scrolls WITH the page content rather than
  // staying fixed in the viewport while the anchor drifts.
  useLayoutEffect(() => {
    const el = playerRef.current;

    if (!isInline || !anchorEl || !el) {
      // Leaving inline mode — clear any directly-applied styles
      if (el) {
        el.style.transition = "";
        el.style.position   = "";
        el.style.top        = "";
        el.style.left       = "";
        el.style.width      = "";
        el.style.height     = "";
        el.style.right      = "";
        el.style.bottom     = "";
      }
      return;
    }

    // Snap-to-anchor transition on first entry into inline mode
    el.style.transition =
      "top 0.32s cubic-bezier(0.4,0,0.2,1)," +
      "left 0.32s cubic-bezier(0.4,0,0.2,1)," +
      "width 0.32s cubic-bezier(0.4,0,0.2,1)," +
      "height 0.32s cubic-bezier(0.4,0,0.2,1)";

    const applyRect = () => {
      if (!anchorEl || !playerRef.current) return;
      const r = anchorEl.getBoundingClientRect();
      const e = playerRef.current;
      e.style.position = "fixed";
      e.style.top      = r.top    + "px";
      e.style.left     = r.left   + "px";
      e.style.width    = r.width  + "px";
      e.style.height   = r.height + "px";
      e.style.right    = "auto";
      e.style.bottom   = "auto";
    };

    applyRect(); // initial render — animates from last known position

    // After the snap animation finishes, drop the transition so scroll
    // tracking updates are instant (no perceived lag while scrolling)
    const clearTransition = setTimeout(() => {
      if (playerRef.current) playerRef.current.style.transition = "";
    }, 360);

    // Scroll/resize tracking via rAF-batched handler
    let raf = null;
    const onMove = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(applyRect);
    };

    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove, { passive: true });

    return () => {
      clearTimeout(clearTransition);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
    };
  }, [isInline, anchorEl]);

  // ── Mouse drag ───────────────────────────────────────────────────────
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
      const x = Math.max(0, Math.min(window.innerWidth  - w,  elX + e.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - 60, elY + e.clientY - mouseY));
      setPos({ x, y });
    };
    const up = () => setIsDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [isDragging]);

  // ── Touch drag ───────────────────────────────────────────────────────
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
      const x = Math.max(0, Math.min(window.innerWidth  - w,  elX + t.clientX - mouseX));
      const y = Math.max(0, Math.min(window.innerHeight - 60, elY + t.clientY - mouseY));
      setPos({ x, y });
    };
    const end = () => setIsDragging(false);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend",  end);
    return () => { window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
  }, [isDragging]);

  // ── Mouse resize ─────────────────────────────────────────────────────
  const onResizeMouseDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    resizeOrigin.current = { mouseX: e.clientX, startW: widthRef.current };
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;
    const move = (e) => {
      const dx   = e.clientX - resizeOrigin.current.mouseX;
      const maxW = window.innerWidth;
      const newW = Math.max(MIN_W, Math.min(maxW, resizeOrigin.current.startW + dx));
      setWidth(newW);
      widthRef.current = newW;
    };
    const up = () => setIsResizing(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [isResizing]);

  // ── Touch resize ─────────────────────────────────────────────────────
  const onResizeTouchStart = useCallback((e) => {
    e.stopPropagation();
    const t = e.touches[0];
    resizeOrigin.current = { mouseX: t.clientX, startW: widthRef.current };
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;
    const move = (e) => {
      const t    = e.touches[0];
      const dx   = t.clientX - resizeOrigin.current.mouseX;
      const maxW = window.innerWidth;
      const newW = Math.max(MIN_W, Math.min(maxW, resizeOrigin.current.startW + dx));
      setWidth(newW);
      widthRef.current = newW;
    };
    const end = () => setIsResizing(false);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend",  end);
    return () => { window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
  }, [isResizing]);

  if (!activeVideo) return null;

  // Floating style — only applied when NOT inline (inline is handled by the
  // useLayoutEffect above via direct DOM manipulation)
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
      style={floatStyle}
      role="region"
      aria-label="Mini video player"
    >
      {/* Drag handle — floating mode only */}
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
