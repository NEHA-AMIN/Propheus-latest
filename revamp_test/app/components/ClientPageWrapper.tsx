'use client';

import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import HowItWorksSection from './HowItWorksSection';
import CommandCenterSection from './CommandCenterSection';
import CaseStudySection from './CaseStudySection';

import SignalSection from './SignalSection';
import ScrollToTop from './ScrollToTop';

export default function ClientPageWrapper() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <CaseStudySection />
      <SignalSection />
      <ScrollToTop />
    </>
  );
}
