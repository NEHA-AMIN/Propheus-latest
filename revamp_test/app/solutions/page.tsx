'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Solution = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  metrics: { label: string; value: string }[];
};

const SOLUTIONS: Solution[] = [
  {
    id: 'digital-atlas',
    title: 'Digital Atlas',
    description: 'A living map that continuously ingests, validates, and fuses multimodal signals to power AI agents that reason about the world through location, data, and context.',
    icon: '🗺️',
    features: [
      'Real-time data fusion from multiple sources',
      'Context-aware signal processing',
      'Multimodal data integration',
      'Automated validation pipelines',
      'Domain-specific tuning capabilities'
    ],
    metrics: [
      { label: 'Data Points', value: '100M+' },
      { label: 'Update Frequency', value: 'Near Real-Time' },
      { label: 'Signal Types', value: '50+' }
    ]
  },
  {
    id: 'demand-intelligence',
    title: 'Demand Intelligence',
    description: 'Predict customer demand with precision using location intelligence, footfall analytics, and behavioral patterns to optimize inventory and pricing.',
    icon: '📊',
    features: [
      'Predictive demand forecasting',
      'Footfall pattern analysis',
      'Seasonal trend detection',
      'Dynamic pricing recommendations',
      'Inventory optimization'
    ],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Forecast Window', value: '90 Days' },
      { label: 'Data Sources', value: '25+' }
    ]
  },
  {
    id: 'site-selection',
    title: 'Site Selection AI',
    description: 'Find optimal locations for your business with AI-powered analysis of competitor density, demographics, accessibility, and market potential.',
    icon: '📍',
    features: [
      'Competitor density mapping',
      'Demographic analysis',
      'Accessibility scoring',
      'Market gap identification',
      'ROI projection modeling'
    ],
    metrics: [
      { label: 'ROI Increase', value: '340%' },
      { label: 'Analysis Speed', value: '<5 min' },
      { label: 'Factors Analyzed', value: '100+' }
    ]
  },
  {
    id: 'movement-analytics',
    title: 'Movement Analytics',
    description: 'Understand human movement patterns to optimize routes, predict traffic, and enhance customer experiences with real-time mobility insights.',
    icon: '🚶',
    features: [
      'Real-time movement tracking',
      'Pattern recognition algorithms',
      'Route optimization',
      'Crowd density prediction',
      'Event impact analysis'
    ],
    metrics: [
      { label: 'Coverage', value: 'Global' },
      { label: 'Prediction Accuracy', value: '91%' },
      { label: 'Update Latency', value: '<1 min' }
    ]
  }
];

const SolutionCard: React.FC<{ solution: Solution; index: number }> = ({ solution, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="h-full bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-6xl mb-6"
        >
          {solution.icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {solution.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {solution.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2">
            {solution.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-3 shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          {solution.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-bold text-teal-400 mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-full transition-colors duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function SolutionsPage() {
  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 dark:from-teal-900/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              <span className="animated-teal-gradient">Solutions</span> That Transform
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Discover our suite of AI-powered solutions designed to give you unprecedented insights into the physical world
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Let us show you how our solutions can transform your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-teal-500/50"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
