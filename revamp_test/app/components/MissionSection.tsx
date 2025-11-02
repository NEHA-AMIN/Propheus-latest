'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-black">
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-800"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left column - Heading */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Physical AI
            </h2>
          </motion.div>
          
          {/* Right column - Paragraph */}
          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Delivering the most comprehensive understanding of the real world - enabling humans and autonomous systems (robots, AVs, and software agents) to perceive, act, and deliver outcomes with confidence.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;

// Made with Bob
