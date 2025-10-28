'use client';

import React from 'react';
import Image from 'next/image';

const DigitalAtlasSection = () => {
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Text */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/30 text-blue-400 text-sm font-medium">
              <span className="mr-1">⚡</span> Supersonic Data Processing
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight mt-6">
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

          {/* Right: Image */}
          <div className="flex-1 relative">
            {/* <div className="absolute top-6 right-8 text-teal-400 text-sm font-medium z-10">
              Digital Atlas USA
              <div className="text-xs text-gray-400">239,781 block groups</div>
            </div> */}

            <div className="relative mt-8 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(20,184,166,0.2)] border border-teal-500/10">
              {/* Using an online GIF for Digital Atlas visualization */}
              <div className="w-full aspect-video bg-black/30 backdrop-blur-sm relative">
                
                {/* Online GIF implementation */}
                <Image
                  src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif"
                  alt="Digital Atlas visualization"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAtlasSection;