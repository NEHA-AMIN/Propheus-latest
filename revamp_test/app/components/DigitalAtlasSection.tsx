'use client';

import React from 'react';
import Image from 'next/image';

const DigitalAtlasSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Grid pattern background matching Industries section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>
      
      {/* Bottom border line for consistency with MissionSection */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-800"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left: Text - using 5 columns for text (similar to MissionSection's 3:9 ratio) */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/30 text-blue-400 text-sm font-medium">
              <span className="mr-1">⚡</span> Supersonic Data Processing
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-6">
              Digital Atlas powered by Physical AI
            </h2>

            <div className="space-y-4 mt-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Digital Atlas is the foundational engine that fuses real-world signals - places, weather, people movement, demographics, and consumer sentiment - into the most comprehensive knowledge representation of every place on earth.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                It's not a data dump; it's decision-ready context.
              </p>
            </div>
          </div>

          {/* Right: Image - using 7 columns for image */}
          <div className="md:col-span-7">
            <div className="relative rounded-xl overflow-hidden max-w-[90%] mx-auto">
              {/* Local GIF implementation */}
              <Image
                src="/DA gif .gif"
                alt="Digital Atlas visualization"
                width={900}
                height={600}
                className="w-full h-auto opacity-90 rounded-xl"
                priority
                style={{
                  objectFit: 'contain',
                  aspectRatio: '16/9'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAtlasSection;