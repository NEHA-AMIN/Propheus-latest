import React from 'react';

interface TealGlowButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

const TealGlowButton: React.FC<TealGlowButtonProps> = ({ 
  text = "SEE IN ACTION", 
  onClick, 
  href, 
  className = "",
  disabled = false,
  'aria-label': ariaLabel
}) => {
  const buttonContent = (
    <>
      {/* Multi-layer glow effect background */}
      <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-xl scale-150 opacity-80 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/40 via-teal-300/50 to-cyan-400/40 rounded-full blur-lg scale-125 opacity-90"></div>
      <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-2xl scale-200 opacity-60 animate-pulse"></div>
      
      {/* Button container with premium glass-like appearance */}
      <div className="relative bg-gradient-to-r from-slate-200 via-white to-slate-200 rounded-full px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-teal-400/25 group border border-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          <span className="text-slate-800 font-bold text-sm tracking-wider uppercase">
            {text}
          </span>
          <svg 
            className="w-4 h-4 text-slate-700 transform transition-transform duration-300 group-hover:translate-x-1" 
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
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 rounded-full opacity-30 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </>
  );

  const baseClasses = `
    relative inline-block cursor-pointer select-none
    focus:outline-none focus:ring-4 focus:ring-teal-400/50 focus:ring-offset-2 focus:ring-offset-slate-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
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

  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        aria-label={ariaLabel || text}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={baseClasses}
      disabled={disabled}
      aria-label={ariaLabel || text}
      onKeyDown={handleKeyDown}
    >
      {buttonContent}
    </button>
  );
};

export default TealGlowButton;
