import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';

const SignalSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Intentionally no backend hookup here; this is a design-first section.
  };

  const handleAnimationComplete = () => {
    console.log('Headline animation complete!');
  };

  return (
    <section
      id="signal"
      className="relative overflow-hidden bg-slate-950 py-28 sm:py-32"
      aria-label="Subscribe to The Signal monthly intelligence briefing"
    >
      {/* Atmospheric visual: subtle teal signal waves behind headline */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] opacity-25"
          style={{
            backgroundImage:
              'repeating-radial-gradient(circle at center, rgba(34,211,238,0.16) 0px, rgba(34,211,238,0.12) 2px, transparent 3px, transparent 42px)',
            filter: 'blur(12px)'
          }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-20"
          style={{
            background:
              'radial-gradient(closest-side, rgba(20,184,166,0.18), transparent 70%)',
            filter: 'blur(20px)'
          }}
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto text-center max-w-3xl">
          {/* Animated Headline with SplitText */}
          <SplitText
            text="If you've come this far, it means you found us..Interesting!"
            className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h4"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* Description */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
          >
            Subscribe to The Signal—our exclusive monthly intelligence briefing. We dissect emerging geospatial trends,
            deconstruct successful market strategies, and deliver the critical insights that will define the next decade
            of physical-world AI.
          </motion.p>

          {/* Form: single elegant line with integrated button */}
          <motion.form
            onSubmit={handleSubmit}
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 1.6, ease: "easeOut" }
            }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mx-auto max-w-2xl rounded-full bg-slate-900/50 backdrop-blur-sm shadow-lg shadow-teal-400/10">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Your Strategic Edge Awaits..."
                className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 px-6 py-4 outline-none"
                required
              />
              <button
                type="submit"
                className="m-1 px-6 py-2 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:from-teal-300 hover:to-cyan-300 active:scale-[0.99] transition-all"
                aria-label="Get The Signal"
              >
                Get The Signal
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-500">No spam. Only the signal.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default SignalSection;