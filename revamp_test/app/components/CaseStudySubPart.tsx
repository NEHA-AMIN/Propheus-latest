'use client';

import React from 'react';
import Image from 'next/image';

const CaseStudySubPart = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0b0e14]">
      {/* Grid pattern background matching Industries section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Left: Text */}
          <div className="flex-1 space-y-6 lg:sticky lg:top-24 self-start">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/30 text-blue-400 text-sm font-medium">
              <span className="mr-1">📈</span> Case Study
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-white leading-tight mt-6">
              Market expansion & store network planning for a leading affordable coffee chain:
            </h2>
            
            {/* <div className="flex flex-col space-y-2">
              <p className="text-3xl font-semibold text-teal-400">+23% more viable zones</p>
              <p className="text-3xl font-semibold text-teal-400">+15% revenue uplift</p>
            </div> */}

            <div className="space-y-5 mt-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                The coffee chain was able to see real demand at a micro-market level with Digital Atlas - identifying whitespace, reducing cannibalization, and prioritizing high-yield catchments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The coffee chain was able to turn those signals into a clear 2030 expansion plan with Digital Atlas - where to open next, in what order, and with confidence.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 relative">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-lg">
                {/* Case Study GIF implementation */}
                <Image
                  src="/casestudy.gif"
                  alt="Case Study metrics visualization"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySubPart;