'use client';
import React from 'react';
import { motion } from 'framer-motion';
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
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-sm text-slate-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-teal-400 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;