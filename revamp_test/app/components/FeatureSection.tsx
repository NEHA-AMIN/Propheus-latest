'use client';

import React from 'react';

const FeatureSection = () => {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-black"
    >
      {/* Dark overlay for better text readability - matching HowItWorksSection */}
      <div className="absolute inset-0 border-y border-slate-900 dark:border-slate-800"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Digital Atlas orchestrates agents that continuously ingest, validate, and fuse multimodal signals in a domain-aware way - then convert them into action:
          </h2>
        </div>
        {/* Centered container with three horizontally aligned blocks */}
        <div className="flex flex-row justify-center items-start space-x-8 lg:space-x-16 overflow-x-auto pb-4">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center min-w-[250px] max-w-xs flex-shrink-0">
            {/* Icon */}
            <div className="mb-6 text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            
            {/* Title - matching HowItWorksSection typography */}
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-4">
              Context Tuning
            </h3>
            
            {/* Description - matching HowItWorksSection typography */}
            <p className="text-gray-200 dark:text-gray-200 text-lg leading-relaxed">
              Align data to your industry, domain, and question — whether it's retail demand, site selection, neighborhood enrichment, or network planning.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center min-w-[250px] max-w-xs flex-shrink-0">
            {/* Icon */}
            <div className="mb-6 text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="12" y2="18" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-4">
              Continuous Curation
            </h3>
            
            {/* Description */}
            <p className="text-gray-200 dark:text-gray-200 text-lg leading-relaxed">
              Assemble live signals into Walkability, Safety, Neighborhood Vibe, Visit Momentum, and more — ready to plug into models and workflows. Keep signals fresh and near real-time.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center min-w-[250px] max-w-xs flex-shrink-0">
            {/* Icon */}
            <div className="mb-6 text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-4">
              Driving ROI with AI
            </h3>
            
            {/* Description */}
            <p className="text-gray-200 dark:text-gray-200 text-lg leading-relaxed">
              A cross-functional crew works with the Digital Atlas to combine AI mastery and deep domain expertise — deploying fast and driving measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;