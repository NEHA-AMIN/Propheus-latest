'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface StoryBlockProps {
  title: string;
  description: string;
}

const StoryBlock: React.FC<StoryBlockProps> = ({ title, description }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <>
      <style>{`
        .custom-type-animation-cursor::after {
          content: '|';
          animation: cursor 1.1s infinite step-start;
          color: #2dd4bf;
        }
        
        @keyframes cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      
      <motion.div
        ref={ref}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Headline with Typing Animation */}
        {isInView && (
          <TypeAnimation
            sequence={[title]}
            wrapper="h4"
            speed={50}
            cursor={true}
            repeat={0}
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight custom-type-animation-cursor"
            style={{ 
              display: 'block',
              minHeight: '3.5rem' // Prevent layout shift during typing
            }}
          />
        )}

        {/* Description with Fade Animation */}
        <motion.p
          className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5 // Wait for typing to complete
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </>
  );
};

export default StoryBlock;

