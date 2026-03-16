"use client";

import { createContext, useContext, useState } from "react";

const VideoPlayerContext = createContext(null);

export function VideoPlayerProvider({ children }) {
  const [activeVideo, setActiveVideo] = useState(null);
  // activeVideo: { videoId, title, tag } | null

  const playVideo = (videoId, title, tag) => setActiveVideo({ videoId, title, tag });
  const dismissVideo = () => setActiveVideo(null);

  return (
    <VideoPlayerContext.Provider value={{ activeVideo, playVideo, dismissVideo }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}
