"use client";

import { createContext, useContext, useState, useCallback } from "react";

const VideoPlayerContext = createContext(null);

export function VideoPlayerProvider({ children }) {
  const [activeVideo, setActiveVideo]     = useState(null);
  const [anchorEl, setAnchorEl]           = useState(null);
  const [anchorVisible, setAnchorVisible] = useState(false);
  // true once the player has been "pushed" to floating mode by scrolling away
  const [isFloating, setIsFloating]       = useState(false);

  const playVideo = (videoId, title, tag) => {
    setActiveVideo({ videoId, title, tag });
    setIsFloating(false); // always start inline
  };

  const dismissVideo = () => {
    setActiveVideo(null);
    setAnchorEl(null);
    setAnchorVisible(false);
    setIsFloating(false);
  };

  const attachAnchor = useCallback((el) => {
    setAnchorEl(el);
    setAnchorVisible(true);
  }, []);

  const detachAnchor = useCallback(() => {
    setAnchorEl(null);
    setAnchorVisible(false);
  }, []);

  // Called by the IntersectionObserver in VideoEmbed
  const updateAnchorVisibility = useCallback((visible) => {
    setAnchorVisible(visible);
    // Anchor scrolled away → player enters floating/mini mode
    if (!visible) setIsFloating(true);
  }, []);

  // Called when user clicks "Resume here" on the anchor banner
  const exitMiniMode = useCallback(() => {
    setIsFloating(false);
  }, []);

  return (
    <VideoPlayerContext.Provider value={{
      activeVideo, playVideo, dismissVideo,
      anchorEl, anchorVisible,
      isFloating, exitMiniMode,
      attachAnchor, detachAnchor, updateAnchorVisibility,
    }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}
