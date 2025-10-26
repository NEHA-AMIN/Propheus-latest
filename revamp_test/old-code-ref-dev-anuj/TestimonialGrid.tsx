import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type TestimonialCard = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  companyLogo: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  position: { row: number; col: number };
};

const testimonialData: TestimonialCard[] = [
  {
    id: 1,
    quote: "This platform transformed our retail strategy completely. ROI increased by 340% in just 6 months.",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "RetailMax",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    companyLogo: "🏪",
    size: 'small',
    position: { row: 0, col: 0 }
  },
  {
    id: 2,
    quote: "The demand planning accuracy went from 65% to 94%. This is the future of retail intelligence and data-driven decision making.",
    name: "Marcus Rodriguez",
    title: "Chief Analytics Officer",
    company: "GlobalMart",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    companyLogo: "🌐",
    size: 'large',
    position: { row: 0, col: 1 }
  },
  {
    id: 3,
    quote: "Finally, a solution that understands our industry. Site selection has never been this precise.",
    name: "Elena Vasquez",
    title: "Director of Expansion",
    company: "FoodChain Plus",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    companyLogo: "🍔",
    size: 'medium',
    position: { row: 0, col: 2 }
  },
  {
    id: 4,
    quote: "Market potential insights are incredibly accurate. We've optimized our entire supply chain.",
    name: "David Kim",
    title: "Head of Strategy",
    company: "CPG Innovations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    companyLogo: "📦",
    size: 'small',
    position: { row: 0, col: 3 }
  },
  {
    id: 5,
    quote: "Dynamic pricing recommendations increased our profit margins by 28% while maintaining customer satisfaction.",
    name: "Lisa Thompson",
    title: "Revenue Operations Manager",
    company: "TravelTech Solutions",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    companyLogo: "✈️",
    size: 'small',
    position: { row: 1, col: 0 }
  },
  {
    id: 6,
    quote: "Game-changing platform for retail analytics and business intelligence.",
    name: "Alex Johnson",
    title: "CEO",
    company: "Smart Retail Co",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    companyLogo: "🛍️",
    size: 'medium',
    position: { row: 1, col: 1 }
  },
  {
    id: 7,
    quote: "The physical observability features give us insights we never had before. Every store location decision is now data-driven and profitable, leading to unprecedented growth.",
    name: "Rachel Park",
    title: "VP of Real Estate",
    company: "Fashion Forward",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    companyLogo: "👗",
    size: 'wide',
    position: { row: 1, col: 2 }
  },
  {
    id: 8,
    quote: "Implementation was seamless and the results were immediate. Our customer satisfaction scores have never been higher.",
    name: "Michael Chang",
    title: "Customer Experience Director",
    company: "Tech Retail",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    companyLogo: "💻",
    size: 'small',
    position: { row: 1, col: 3 }
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialCard; index: number }) {
  const sizeClasses = {
    small: 'w-[180px] h-[180px]',
    medium: 'w-[210px] h-[210px]', 
    large: 'w-[260px] h-[260px]',
    wide: 'w-[420px] h-[300px]'
  };

  return (
    <motion.div
      className={`${sizeClasses[testimonial.size]} relative overflow-hidden rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 shadow-lg`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1 
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }}
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)'
      }}
    >
      <motion.div
        className="absolute -inset-[2px] rounded-2xl opacity-0 z-0"
        style={{
          background: 'radial-gradient(220px 140px at 50% 50%, rgba(45, 212, 191, 0.12), transparent 60%)',
          filter: 'blur(8px)'
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      />
      
      <div className="relative z-10 p-4 h-full flex flex-col gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 border border-white/8 overflow-hidden flex-shrink-0">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <p className="text-slate-200 text-sm leading-snug font-medium">
            {testimonial.quote}
          </p>
        </div>
        
        <div className="mt-auto">
          <p className="text-slate-200 text-xs font-semibold">{testimonial.name}</p>
          <p className="text-slate-400 text-xs">{testimonial.title}</p>
          <p className="text-sky-300 text-xs font-medium uppercase tracking-wider">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const topRow = testimonialData.filter(t => t.position.row === 0);
  const bottomRow = testimonialData.filter(t => t.position.row === 1);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 bg-slate-950 relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="mx-auto max-w-3xl text-center" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-start gap-4 mb-[-56px] z-10">
          {topRow.map((testimonial, index) => (
            <div 
              className={`
                ${index === 0 ? 'block' : ''} 
                ${index === 1 ? 'md:block hidden' : ''} 
                ${index === 2 ? 'lg:block hidden' : ''} 
                ${index === 3 ? 'xl:block hidden' : ''}
              `} 
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-start gap-4 z-20 mt-4">
          {bottomRow.map((testimonial, index) => (
            <div 
              className={`
                ${index === 0 ? 'block' : ''} 
                ${index === 1 ? 'md:block hidden' : ''} 
                ${index === 2 ? 'lg:block hidden' : ''} 
                ${index === 3 ? 'xl:block hidden' : ''}
              `} 
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} index={index + topRow.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
