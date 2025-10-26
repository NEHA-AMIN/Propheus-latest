'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StoryBlock from './StoryBlock';

interface Story {
  id: number;
  title: string;
  description: string;
}

const stories: Story[] = [
  { 
    id: 0, 
    title: "For Retail: Pinpoint Your Next Success", 
    description: "Finding the optimal location means seeing what others don't. We fuse competitor density with real-time footfall and demographic data to reveal market gaps with surgical precision." 
  },
  { 
    id: 1, 
    title: "For Travel: Predict the Demand Surge", 
    description: "An upcoming festival can overwhelm or enrich a city. Propheus models human movement to predict tourist flow, allowing you to prepare for demand and optimize pricing." 
  },
  { 
    id: 2, 
    title: "For Logistics: Optimize Every Route", 
    description: "Navigate urban complexity with confidence. Our engine analyzes real-time traffic, event schedules, and delivery constraints to chart the most efficient path from A to B." 
  },
];

// Retail Layers Component
const RetailLayers: React.FC = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <defs>
      <radialGradient id="heatmapGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
      </radialGradient>
    </defs>
    
    {/* Competitor locations */}
    {[
      { x: 200, y: 300 },
      { x: 400, y: 250 },
      { x: 600, y: 400 },
      { x: 300, y: 500 },
      { x: 500, y: 600 }
    ].map((pos, index) => (
      <motion.circle
        key={index}
        cx={pos.x}
        cy={pos.y}
        r={8}
        fill="#ef4444"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      />
    ))}
    
    {/* Heatmap area */}
    <motion.path
      d="M 200 200 Q 400 150 600 200 Q 700 300 600 500 Q 400 600 200 500 Q 100 400 200 200 Z"
      fill="url(#heatmapGradient)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    />
    
    {/* Recommended sites */}
    {[
      { x: 350, y: 350 },
      { x: 450, y: 450 },
      { x: 550, y: 300 }
    ].map((pos, index) => (
      <motion.circle
        key={index}
        cx={pos.x}
        cy={pos.y}
        r={20}
        fill="none"
        stroke="#2dd4bf"
        strokeWidth={3}
        initial={{ scale: 0, strokeOpacity: 0 }}
        animate={{ 
          scale: 1, 
          strokeOpacity: [0.3, 1, 0.3],
          r: [20, 30, 20]
        }}
        transition={{ 
          delay: 1 + index * 0.2, 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </motion.svg>
);

// Travel Layers Component
const TravelLayers: React.FC = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Travel routes */}
    {[
      "M 100 200 Q 300 150 500 200 Q 700 250 900 200",
      "M 100 400 Q 250 350 400 400 Q 550 450 700 400",
      "M 100 600 Q 200 550 300 600 Q 400 650 500 600",
      "M 200 100 Q 400 200 600 100 Q 800 150 1000 100"
    ].map((path, index) => (
      <motion.path
        key={index}
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth={4}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ 
          delay: index * 0.3, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Movement indicators */}
    {[
      { x: 300, y: 200 },
      { x: 500, y: 400 },
      { x: 400, y: 600 }
    ].map((pos, index) => (
      <motion.circle
        key={index}
        cx={pos.x}
        cy={pos.y}
        r={6}
        fill="#22d3ee"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{ 
          delay: 1 + index * 0.2, 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </motion.svg>
);

// Logistics Layers Component
const LogisticsLayers: React.FC = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Route optimization paths */}
    {[
      "M 150 200 L 300 250 L 450 200 L 600 300 L 750 250",
      "M 200 400 L 350 350 L 500 400 L 650 350 L 800 400",
      "M 100 600 L 250 550 L 400 600 L 550 550 L 700 600"
    ].map((path, index) => (
      <motion.path
        key={index}
        d={path}
        fill="none"
        stroke="#14b8a6"
        strokeWidth={3}
        strokeDasharray="10,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ 
          delay: index * 0.2, 
          duration: 1.2,
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Delivery points */}
    {[
      { x: 300, y: 250 },
      { x: 450, y: 200 },
      { x: 600, y: 300 },
      { x: 350, y: 350 },
      { x: 500, y: 400 }
    ].map((pos, index) => (
      <motion.rect
        key={index}
        x={pos.x - 8}
        y={pos.y - 8}
        width={16}
        height={16}
        fill="#14b8a6"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: 1, 
          rotate: 360
        }}
        transition={{ 
          delay: 0.8 + index * 0.1, 
          duration: 0.5
        }}
      />
    ))}
    
    {/* Traffic flow indicators */}
    {[
      { x: 200, y: 300 },
      { x: 400, y: 250 },
      { x: 600, y: 400 }
    ].map((pos, index) => (
      <motion.circle
        key={index}
        cx={pos.x}
        cy={pos.y}
        r={4}
        fill="#14b8a6"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{ 
          delay: 1.5 + index * 0.1, 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </motion.svg>
);

const CommandCenterSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderVisualLayers = () => {
    switch (activeIndex) {
      case 0:
        return <RetailLayers />;
      case 1:
        return <TravelLayers />;
      case 2:
        return <LogisticsLayers />;
      default:
        return <RetailLayers />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            Your Command Center for{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Real-World Decisions
            </span>
          </h3>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Scrolling Text */}
          <div className="space-y-96">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                onViewportEnter={() => setActiveIndex(story.id)}
                viewport={{ amount: 0.5, once: true }}
              >
                <StoryBlock title={story.title} description={story.description} />
              </motion.div>
            ))}
          </div>

          {/* Right Column - Sticky Visual */}
          <div>
            <div className="sticky top-24 h-[70vh] rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-200 dark:bg-slate-950 overflow-hidden">
              {/* Base Map */}
              <img
                src="https://placehold.co/1200x1200/020617/0f172a?text=Propheus+City+View"
                alt="Propheus City View"
                className="w-full h-full object-cover"
              />
              
              {/* Animated SVG Overlays */}
              <AnimatePresence mode="wait">
                {renderVisualLayers()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenterSection;
