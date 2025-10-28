"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export default function VideoBackground({ src, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Handle video playback when component mounts
    if (videoRef.current) {
      const playVideo = () => {
        videoRef.current?.play().catch(error => {
          console.error("Video autoplay failed:", error);
          // Don't show error in console for power saving interruptions
          if (!error.message.includes("power")) {
            console.error("Video autoplay failed:", error);
          }
          // Set loaded state anyway to ensure UI renders properly
          setIsLoaded(true);
        });
      };
      
      playVideo();
      
      // Fallback for browsers with strict autoplay policies
      const handleUserInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleUserInteraction);
      };
      document.addEventListener('click', handleUserInteraction);
      
      // Try to play video again when tab becomes visible
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          playVideo();
        }
      });
    }

    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Fallback background gradient when video can't play */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0"></div>
      
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-[1] ${className}`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        style={{ opacity: 1 }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
