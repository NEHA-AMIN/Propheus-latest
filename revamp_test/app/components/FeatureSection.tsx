'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-black"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 border-y border-slate-900 dark:border-slate-800"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Three Column Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Context Tuning Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Context Tuning
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Align data to your industry, domain, and question — whether it's retail demand, site selection, neighborhood enrichment, or network planning.
            </p>
          </div>

          {/* Continuous Curation Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2"/>
                  <line x1="3" y1="15" x2="21" y2="15" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Continuous Curation
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Assemble live signals into Walkability, Safety, Neighborhood Vibe, Visit Momentum, and more — ready to plug into models and workflows. Keep signals fresh and near real-time.
            </p>
          </div>

          {/* Driving ROI with AI Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Driving ROI with AI
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              A cross-functional crew works with the Digital Atlas to combine AI mastery and deep domain expertise — deploying fast and driving measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;