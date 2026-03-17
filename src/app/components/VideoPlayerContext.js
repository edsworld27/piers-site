"use client";

import { createContext, useContext, useState, useCallback } from "react";

const VideoPlayerContext = createContext(null);

export function VideoPlayerProvider({ children }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isFloating, setIsFloating]   = useState(false);

  const playVideo = (videoId, title, tag) => {
    setActiveVideo({ videoId, title, tag });
    setIsFloating(false);
  };

  const dismissVideo = () => {
    setActiveVideo(null);
    setIsFloating(false);
  };

  // Called when the inline video scrolls off-screen or user presses the pop-out button
  const enterMiniMode = useCallback(() => setIsFloating(true), []);

  // Called when user clicks "Resume here" on the anchor banner
  const exitMiniMode  = useCallback(() => setIsFloating(false), []);

  return (
    <VideoPlayerContext.Provider value={{
      activeVideo, playVideo, dismissVideo,
      isFloating, enterMiniMode, exitMiniMode,
    }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}
