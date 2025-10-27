'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Video Background - only render after component has mounted to prevent hydration mismatch */}
      {mounted && (
        <VideoBackground
          src="/hero-background.mp4"
          className=""
        />
      )}
      
      {/* Content Container - ensure no overlay */}
      <div className="relative z-[2] h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="text-left max-w-4xl">
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            <span className="animated-teal-gradient">We infer </span>
            the world , so 
            <span className="animated-teal-gradient"> you dominate</span>
          </h2>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed">
            We turn maps into meaning, enabling AI agents that reason about the world through location, data, and context. A living map where our product, <span className="text-teal-400 font-semibold">Digital Atlas</span>, can map the unseen connections between people, places, and possibilities.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
            <Button 
              variant="shiny"
              size="lg"
              href="https://propheus.com/atlas-search"
              icon={
                <svg className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
              aria-label="See in action"
            >
              See in Action
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              href="#how-it-works"
              aria-label="Learn how our product works - navigate to how it works section"
            >
              Book a Demo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;