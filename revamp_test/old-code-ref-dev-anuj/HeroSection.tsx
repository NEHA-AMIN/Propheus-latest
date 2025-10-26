import React from 'react';
import TealShinyButton from './TealShinyButton';

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-full relative overflow-hidden bg-black"
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl">
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-6 leading-tight">
            <span className="animated-teal-gradient">We infer </span>
            the world , so 
            <span className="animated-teal-gradient"> you dominate</span>
          </h2>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
            We turn maps into meaning, enabling AI agents that reason about the world through location, data, and context. A living map where our product, <span className="text-teal-400 font-semibold">Digital Atlas</span>, can map the unseen connections between people, places, and possibilities.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
            {/* Primary CTA - Teal Shiny Button */}
            <a href="https://propheus.com/atlas-search" target="_blank" rel="noopener noreferrer">
              <TealShinyButton 
                text="SEE IN ACTION"
                aria-label="See in action"
              />
            </a>
            
            {/* Secondary CTA - Updated styling to match premium theme */}
            <a
              href="#how-it-works"
              className="bg-transparent border border-slate-700 hover:border-teal-400 hover:bg-slate-800/50 text-slate-300 hover:text-teal-400 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/10 focus:outline-none focus:ring-4 focus:ring-teal-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Learn how our product works - navigate to how it works section"
            >
              Book a Demo!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;