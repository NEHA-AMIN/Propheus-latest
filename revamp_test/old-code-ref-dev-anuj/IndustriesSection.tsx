import React, { useEffect, useId, useRef, useState } from 'react';
// NEW: Import motion and related hooks from framer-motion
import { motion, useInView } from 'framer-motion';

type UseCase = {
  label: string;
};

type IndustryCardProps = {
  title: string;
  tagline: string;
  imageSrc?: string;
  useCases: UseCase[];
  ctaHref?: string;
  className?: string;
  // NEW: Accept variants from the parent for the entry animation
  variants?: any; 
};

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

function IndustryCard({ title, tagline, imageSrc, useCases, ctaHref, className = '', variants }: IndustryCardProps) {
  const id = useId();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLDivElement | null>(null); // NEW: Ref for text area only
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const reduceMotion = prefersReducedMotion();
  
  // State to manage the magnetic glow style - now relative to text area
  const [glowStyle, setGlowStyle] = useState({
    background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0), transparent 40%)',
  });
  
  // State for the dynamic border glow position - now for text area only
  const [borderGlowPosition, setBorderGlowPosition] = useState({ x: 0, y: 0 });
  
  // Animation interval for the dynamic border glow - now constrained to text area
  useEffect(() => {
    if (reduceMotion) return;
    
    const animateBorderGlow = () => {
      const time = Date.now() / 3000; // Slow movement
      // Create circular motion within the text area bounds
      const x = 50 + 35 * Math.cos(time);
      const y = 50 + 35 * Math.sin(time);
      setBorderGlowPosition({ x, y });
    };
    
    const intervalId = setInterval(animateBorderGlow, 50);
    return () => clearInterval(intervalId);
  }, [reduceMotion]);

  useEffect(() => {
    const el = cardRef.current;
    const textEl = textAreaRef.current;
    if (!el || !textEl || reduceMotion) return;
    
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const textRect = textEl.getBoundingClientRect();
      const x = (e.clientX - rect.left);
      const y = (e.clientY - rect.top);
      
      // Calculate relative position within the text area
      const textX = e.clientX - textRect.left;
      const textY = e.clientY - textRect.top;
      
      const max = 6;
      setTilt({ rx: (rect.height / 2 - y) / (rect.height / 2) * max, ry: (x - rect.width / 2) / (rect.width / 2) * max });
      
      // Only update glow if mouse is within the text area bounds
      if (textX >= 0 && textX <= textRect.width && textY >= 0 && textY <= textRect.height) {
        setGlowStyle({
          background: `radial-gradient(circle at ${textX}px ${textY}px, rgba(20, 184, 166, 0.15), transparent 40%)`,
        });
      } else {
        // Reset glow when outside text area
        setGlowStyle({
          background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0), transparent 40%)',
        });
      }
    };
    
    const handleLeave = () => {
      setTilt({ rx: 0, ry: 0 });
      // Reset glow on mouse leave
      setGlowStyle({
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0), transparent 40%)',
      });
    };
    
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [reduceMotion]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  // Typing effect state for each use case
  const [typedTexts, setTypedTexts] = useState<string[]>([]);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1);

  // Start typing effect when card flips
  useEffect(() => {
    if (!flipped) {
      // Reset when card flips back
      setTypedTexts([]);
      setCurrentTypingIndex(-1);
      return;
    }

    // Initialize empty typed texts array
    setTypedTexts(new Array(useCases.length).fill(''));
    
    let timeouts: NodeJS.Timeout[] = [];
    let currentDelay = 350; // Initial delay after flip animation

    useCases.forEach((useCase, index) => {
      const text = useCase.label;
      const typingSpeed = 15; // 15ms per character
      const lineTypingTime = text.length * typingSpeed;

      const startTimeout = setTimeout(() => {
        setCurrentTypingIndex(index);
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex < text.length) {
            setTypedTexts(prev => {
              const newTexts = [...prev];
              newTexts[index] = text.substring(0, charIndex + 1);
              return newTexts;
            });
            charIndex++;
            const charTimeout = setTimeout(typeChar, typingSpeed);
            timeouts.push(charTimeout);
          } else {
            // Finished typing this use case
            if (index === useCases.length - 1) {
              setCurrentTypingIndex(-1); // All done
            }
          }
        };
        
        typeChar();
      }, currentDelay);
      
      timeouts.push(startTimeout);
      
      // Next line starts immediately after this line finishes
      currentDelay += lineTypingTime;
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [flipped, useCases]);

  // NEW: Variants for the sequenced reveal on the back of the card
  const useCasesContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2, // Start animation after flip is mostly done
      },
    },
  };

  const useCaseItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
  };

  return (
    // MODIFIED: Converted the root div to a motion.div to accept variants
    <motion.div
      variants={variants}
      className={`relative h-full w-full ${className}`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => !reduceMotion && setFlipped(true)}
      onMouseLeave={() => !reduceMotion && setFlipped(false)}
      onClick={() => reduceMotion && handleFlip()}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: reduceMotion ? undefined : `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <article
            ref={cardRef}
            aria-labelledby={`${id}-title`}
            className="relative h-full overflow-hidden rounded-2xl bg-[#0B0F0E]/90 backdrop-blur-sm
                      border border-slate-800/50 shadow-lg
                      transition-all duration-300"
          >
            {/* Image Section - No glow effects */}
            {imageSrc && (
              <div className="overflow-hidden h-[180px] relative z-20">
                <img src={imageSrc} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            
            {/* Divider */}
            <div className="h-px w-full bg-slate-800/50" />
            
            {/* Text Area with Glow Effects */}
            <div 
              ref={textAreaRef}
              className="p-6 h-[calc(100%-180px)] flex flex-col relative"
            >
              {/* Dynamic Border Glow Effect - Only for text area */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[2px] rounded-b-2xl opacity-70 z-0"
                style={{
                  background: `radial-gradient(circle at ${borderGlowPosition.x}% ${borderGlowPosition.y}%, rgba(20, 184, 166, 0.6) 0%, transparent 70%)`,
                  filter: 'blur(8px)',
                }}
              />
              
              {/* Magnetic Glow Effect - Only for text area */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-b-2xl transition-all duration-300 z-10"
                style={glowStyle}
              />

              <div className="mb-2 flex items-center relative z-30">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-slate-200 uppercase">Industry</span>
              </div>
              <h3 id={`${id}-title`} className="text-slate-100 text-xl font-bold tracking-tight mb-2 relative z-30">
                {title}
              </h3>
              <p className="text-slate-300/90 text-sm leading-relaxed mb-auto relative z-30">{tagline}</p>
              <div className="mt-4 flex items-center justify-between relative z-30">
                <a href={ctaHref || '#'} className="inline-flex items-center gap-2 rounded-full bg-teal-500 text-white text-xs font-semibold px-4 py-2 shadow-md hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 focus:outline-none focus:ring-2 focus:ring-teal-400/40 transition-all duration-300">
                  Explore use cases
                </a>
                <button aria-label="Flip card" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/40 text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition-all duration-300" onClick={(e) => { e.stopPropagation(); handleFlip(); }}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6v12m6-6H6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" /></svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <article className="relative h-full overflow-hidden rounded-2xl bg-[#0B0F0E]/90 backdrop-blur-sm border border-teal-800/30 shadow-lg transition-all duration-300 will-change-transform">
            {/* Typing cursor CSS */}
            <style>{`
              .typing-cursor::after {
                content: '|';
                color: rgba(20, 184, 166, 0.8);
                animation: blink 1s infinite;
                margin-left: 2px;
              }
              
              @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
              }
            `}</style>
            {/* Dynamic Border Glow Effect for back side - full card */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-70 z-0"
              style={{
                background: `radial-gradient(circle at ${borderGlowPosition.x}% ${borderGlowPosition.y}%, rgba(20, 184, 166, 0.6) 0%, transparent 70%)`,
                filter: 'blur(8px)',
              }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-2xl z-10" style={{ background: 'radial-gradient(600px 400px at 50% 50%, rgba(20,184,166,0.2), transparent 60%)', filter: 'blur(20px)', opacity: 0.8,}}/>
            
            <div className="p-6 h-full flex flex-col relative z-20">
              <div className="mb-2 flex items-center">
                <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-teal-300 uppercase">Use Cases</span>
              </div>
              <h3 className="text-slate-100 text-xl font-bold tracking-tight mb-4">{title}</h3>
              
              <div className="flex-grow overflow-auto">
                {/* MODIFIED: Converted list to a motion.div for sequenced animations */}
                <motion.div 
                  className="grid gap-3 text-slate-300/90 text-sm"
                  variants={useCasesContainerVariants}
                  initial="hidden"
                  animate={flipped ? "visible" : "hidden"}
                >
                  {useCases.map((u, i) => (
                    // MODIFIED: Converted each list item to a motion.div with typing effect
                    <motion.div key={i} className="flex items-start gap-3" variants={useCaseItemVariants}>
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-400/80 flex-shrink-0" />
                      <span 
                        className={`${currentTypingIndex === i ? 'typing-cursor' : ''}`}
                        dangerouslySetInnerHTML={{ 
                          __html: (typedTexts[i] || '').replace(/\b([A-Za-z]+)\b/g, '<strong>$1</strong>')
                            .replace(/<strong>and<\/strong>/g, 'and')
                            .replace(/<strong>the<\/strong>/g, 'the')
                            .replace(/<strong>for<\/strong>/g, 'for')
                        }} 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a href={ctaHref || '#'} className="inline-flex items-center gap-2 rounded-full bg-teal-500 text-white text-xs font-semibold px-4 py-2 shadow-md hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 focus:outline-none focus:ring-2 focus:ring-teal-400/40 transition-all duration-300">More Details </a>
                <button aria-label="Flip card back" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/40 text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition-all duration-300" onClick={(e) => { e.stopPropagation(); handleFlip(); }}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m7-7l-7 7 7 7" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  // NEW: Ref for the section to trigger animation when it comes into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const INDUSTRIES: IndustryCardProps[] = [
    { title: 'Retail & Restaurants', tagline: 'Find the perfect spot for your next store and know what customers will buy.', imageSrc: 'src/styles/retail.jpeg', useCases: [ { label: 'Physical Observability (stores)' }, { label: 'Market Potential' }, { label: 'Site Selection' }, { label: 'Demand Planning' }, { label: 'Promotion Recommendation' }, ], },
    { title: 'CPG', tagline: 'Choose the right retail partners and predict which products will sell best.', imageSrc: 'src/styles/CPG.jpeg', useCases: [ { label: 'Market Potential' }, { label: 'Retailer Selection' }, { label: 'Demand Planning' }, { label: 'Product Recommendation' }, { label: 'Promotion Recommendation' }, ], },
    { title: 'Online to Offline', tagline: 'Optimize your delivery zones, pricing, and product mix in real time.', imageSrc: 'src/styles/property.jpeg', useCases: [ { label: 'Physical Observability (zones, stores, restaurants)' }, { label: 'Demand Planning' }, { label: 'Dynamic Pricing' }, { label: 'Product Assortment' }, ], },
    { title: 'Travel', tagline: 'Create personalized travel experiences and get recommend the right trips.', imageSrc: 'src/styles/travel.jpeg', useCases: [ { label: 'Physical Observability (properties)' }, { label: 'Personalized Discovery & Recommendations' }, { label: 'Dynamic Pricing & Bundling' }, ], },
  ];

  // NEW: Variants for the staggered grid entry animation
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
          {/* Animated heading with slide-in effect */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth motion
              delay: 0.2 
            }}
          >
            Is This For Me
            <motion.span
              className="inline-block ml-1"
              animate={isInView ? { rotateY: [0, 360] } : { rotateY: 0 }}
              transition={{
                duration: 2,
                ease: "linear", // Changed to linear for smooth continuous rotation
                delay: 1.2, // Start after text animation completes
                repeat: Infinity,
                repeatDelay: 0, // No pause between rotations - continuous loop
              }}
            >
              ?
            </motion.span>
          </motion.h2>
          
          {/* Animated subtitle with slide-in effect */}
          <motion.p 
            className="mt-4 text-lg text-slate-300/90"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1], 
              delay: 0.4 
            }}
          >
            Discover how our platform serves your industry's unique needs with tailored solutions.
          </motion.p>
        </div>

        {/* MODIFIED: Converted grid to a motion.div for entry animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className="h-[480px] w-full">
              <IndustryCard
                {...industry} // Spread props
                variants={cardVariants} // Pass down the child variant
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}