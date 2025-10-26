import React from 'react';
import TealGlowButton from './TealGlowButton';

// Demo component showing the button in action
const TealGlowButtonDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="text-center space-y-12">
        <h1 className="text-4xl font-bold text-white mb-8">Premium Teal Glow Button Demo</h1>
        
        {/* Main button */}
        <TealGlowButton 
          text="SEE IN ACTION"
          onClick={() => alert('Button clicked!')}
        />
        
        {/* Variations */}
        <div className="space-y-6">
          <TealGlowButton 
            text="REQUEST DEMO"
            href="#demo"
          />
          
          <TealGlowButton 
            text="GET STARTED"
            onClick={() => console.log('Get started clicked')}
          />
          
          <TealGlowButton 
            text="DISABLED STATE"
            disabled={true}
          />
        </div>
        
        {/* Usage instructions */}
        <div className="mt-16 p-6 bg-slate-900 rounded-lg text-left max-w-2xl">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">How to use in your Hero Section:</h3>
          <pre className="text-sm text-slate-300 overflow-x-auto">
{`// Replace your existing button with:
<TealGlowButton 
  text="SEE IN ACTION"
  href="#demo"
/>

// Or with onClick handler:
<TealGlowButton 
  text="REQUEST A DEMO"
  onClick={() => {
    // Your action here
    window.open('#demo', '_self');
  }}
/>

// With accessibility features:
<TealGlowButton 
  text="SEE IN ACTION"
  href="#demo"
  aria-label="See our product in action - navigate to demo section"
/>`}
          </pre>
        </div>
        
        {/* Features showcase */}
        <div className="mt-8 p-6 bg-slate-900 rounded-lg text-left max-w-2xl">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">Premium Features:</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>✅ Rounded pill/capsule shape with glossy white/light gray gradient</li>
            <li>✅ Bold, uppercase, dark gray text with wide letter spacing</li>
            <li>✅ Right-pointing arrow that slides on hover</li>
            <li>✅ Animated teal glow with blur and pulse effects</li>
            <li>✅ Subtle scale-up on hover with enhanced glow</li>
            <li>✅ Smooth transitions with pulsing glow effect</li>
            <li>✅ Fully keyboard navigable (Tab, Enter, Space)</li>
            <li>✅ Screen reader friendly with proper ARIA labels</li>
            <li>✅ Focus indicators for accessibility</li>
            <li>✅ Disabled state support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TealGlowButtonDemo;
