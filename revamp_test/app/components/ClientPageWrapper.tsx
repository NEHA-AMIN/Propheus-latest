'use client';

import HeroSection from './HeroSection';

import HowItWorksSection from './HowItWorksSection';
import CommandCenterSection from './CommandCenterSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudySection from './CaseStudySection';

import SignalSection from './SignalSection';
import ScrollToTop from './ScrollToTop';

export default function ClientPageWrapper() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <TestimonialsSection />
      <CaseStudySection />
      <SignalSection />
      <ScrollToTop />
    </>
  );
}
