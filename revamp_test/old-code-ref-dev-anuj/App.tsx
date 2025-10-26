import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ValuePropositionSection from './ValuePropositionSection';
import HowItWorksSection from './HowItWorksSection';
import CommandCenterSection from './CommandCenterSection';
import IndustriesSection from './IndustriesSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudySection from './CaseStudySection';
import SignalSection from './SignalSection';
import IndustriesPage from './IndustriesPage';
import './App.css';

function Home() {
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
    </>
  );
}

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
