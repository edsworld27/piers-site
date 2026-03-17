"use client";

import { createContext, useContext, useState, useCallback } from "react";

const VideoPlayerContext = createContext(null);

export function VideoPlayerProvider({ children }) {
  const [activeVideo, setActiveVideo]     = useState(null);
  const [anchorEl, setAnchorEl]           = useState(null);
  const [anchorVisible, setAnchorVisible] = useState(false);

  const playVideo  = (videoId, title, tag) => setActiveVideo({ videoId, title, tag });
  const dismissVideo = () => {
    setActiveVideo(null);
    setAnchorEl(null);
    setAnchorVisible(false);
  };

  const attachAnchor = useCallback((el) => {
    setAnchorEl(el);
    setAnchorVisible(true);
  }, []);

  const detachAnchor = useCallback(() => {
    setAnchorEl(null);
    setAnchorVisible(false);
  }, []);

  const updateAnchorVisibility = useCallback((visible) => {
    setAnchorVisible(visible);
  }, []);

  return (
    <VideoPlayerContext.Provider value={{
      activeVideo, playVideo, dismissVideo,
      anchorEl, anchorVisible,
      attachAnchor, detachAnchor, updateAnchorVisibility,
    }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}
