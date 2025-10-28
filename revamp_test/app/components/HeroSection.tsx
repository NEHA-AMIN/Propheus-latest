'use client';
import React from 'react';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  
  return (
    <section
      className="h-screen w-full relative overflow-hidden"
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Video Background with key to force proper mounting */}
      <VideoBackground
        key={`hero-video-${Date.now()}`} // Force remount with unique key
        src="/hero-background.mp4"
        className="z-10"
      />
      
      {/* Empty content container - video only */}
      <div className="relative z-[2] h-full w-full">
        {/* No text content as requested */}
      </div>
    </section>
  );
};

export default HeroSection;