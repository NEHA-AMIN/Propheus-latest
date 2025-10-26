import React from 'react';
import { motion } from 'framer-motion';

export interface FlipCardProps {
  frontIcon: React.ReactNode;
  frontTitle: string;
  frontDescription: string;
  backTitle?: string;
  backPoints: string[];
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontIcon,
  frontTitle,
  frontDescription,
  backTitle,
  backPoints,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full h-[300px] perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.02 : 1,
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.23, 1, 0.32, 1], // Cubic bezier for smooth yet snappy effect
          scale: {
            duration: 0.2,
            ease: "easeOut"
          }
        }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 h-full flex flex-col items-center shadow-lg transition-all duration-300 group-hover:border-teal-500/30 group-hover:shadow-teal-500/10">
            <motion.div
              animate={{ scale: isFlipped ? 0.8 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {frontIcon}
            </motion.div>
            <h4 className="text-xl font-semibold text-slate-100 mb-4 text-center transition-colors duration-300 group-hover:text-teal-300">
              {frontTitle}
            </h4>
            <p className="text-slate-400 text-center leading-relaxed">
              {frontDescription}
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 h-full shadow-lg transition-all duration-300 group-hover:border-teal-500/30 group-hover:shadow-teal-500/10">
            <h4 className="text-xl font-semibold text-teal-300 mb-6 text-center">
              {backTitle || frontTitle}
            </h4>
            <ul className="space-y-3">
              {backPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start text-slate-300"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-3 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;