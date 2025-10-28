'use client';

import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import DigitalAtlasSection from './DigitalAtlasSection';
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
      <DigitalAtlasSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <CaseStudySection />
      <SignalSection />
      <ScrollToTop />
    </>
  );
}
