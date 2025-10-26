import React, { useRef, useState } from 'react';

interface TealShinyButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

const TealShinyButton: React.FC<TealShinyButtonProps> = ({ 
  text = "SEE IN ACTION", 
  onClick, 
  href, 
  className = "",
  disabled = false,
  'aria-label': ariaLabel
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonContent = (
    <>
      {/* Left edge glow - only on hover */}
      <div 
        className={`absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-full transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(ellipse 60px 100% at right center, rgba(20, 184, 166, 0.6) 0%, rgba(20, 184, 166, 0.3) 40%, transparent 70%)',
          filter: 'blur(15px)',
        }}
      />
      
      {/* Right edge glow - resting state */}
      <div 
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 60px 100% at left center, rgba(20, 184, 166, 0.6) 0%, rgba(20, 184, 166, 0.3) 40%, transparent 70%)',
          filter: 'blur(15px)',
        }}
      />
      
      {/* Base teal background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
      
      {/* Shiny radial gradient effect that follows mouse */}
      <div 
        className={`absolute inset-0 rounded-full transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 255, 255, 0.4) 0%, 
            rgba(255, 255, 255, 0.2) 30%, 
            rgba(255, 255, 255, 0.1) 60%, 
            transparent 100%)`,
          pointerEvents: 'none'
        }}
      />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-600/20 to-transparent"></div>
      
      {/* Button content */}
      <div className="relative flex items-center justify-center gap-2 px-8 py-4">
        <span className="text-white font-bold text-sm tracking-wider uppercase">
          {text}
        </span>
        <svg 
          className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    </>
  );

  const baseClasses = `
    group relative inline-block cursor-pointer select-none
    bg-transparent border-0 outline-none
    focus:outline-none focus:ring-4 focus:ring-teal-400/50 focus:ring-offset-2 focus:ring-offset-slate-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    transform transition-all duration-300 hover:scale-105 
    hover:shadow-[0_0_40px_rgba(20,184,166,0.4),0_0_80px_rgba(45,212,191,0.2)]
    overflow-visible
    ${className}
  `;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  };

  if (href && !disabled) {
    return (
      <a 
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href} 
        className={baseClasses}
        style={buttonStyle}
        aria-label={ariaLabel || text}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      className={baseClasses}
      style={buttonStyle}
      disabled={disabled}
      aria-label={ariaLabel || text}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
    </button>
  );
};

export default TealShinyButton;
