'use client';

import HeroSection from './HeroSection';
import IndustriesSection from './IndustriesSection';
import HowItWorksSection from './HowItWorksSection';
import CommandCenterSection from './CommandCenterSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudySection from './CaseStudySection';
import ValuePropositionSection from './ValuePropositionSection';
import SignalSection from './SignalSection';
import ScrollToTop from './ScrollToTop';

export default function ClientPageWrapper() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <TestimonialsSection />
      <CaseStudySection />
      <ValuePropositionSection />
      <SignalSection />
      <ScrollToTop />
    </>
  );
}
