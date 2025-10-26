'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const SystemIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-5v1h3a1 1 0 110 2H6a1 1 0 110-2h3v-1H4a1 1 0 01-1-1V4zm1 1v6h12V5H4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for theme changes to provide transition feedback
  useEffect(() => {
    const handleThemeChange = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 500);
    };

    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-theme-toggle]')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isDropdownOpen]);

  if (!mounted) {
    return (
      <div className="relative">
        <button 
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
          disabled
          aria-label="Loading theme toggle"
        >
          <div className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const getThemeIcon = (themeType: string) => {
    switch (themeType) {
      case 'light':
        return <SunIcon className="w-5 h-5 text-amber-500" />;
      case 'dark':
        return <MoonIcon className="w-5 h-5 text-slate-400" />;
      case 'system':
        return <SystemIcon className="w-5 h-5 text-blue-500" />;
      default:
        return <SunIcon className="w-5 h-5 text-amber-500" />;
    }
  };

  const getThemeLabel = (themeType: string) => {
    switch (themeType) {
      case 'light':
        return 'Light mode';
      case 'dark':
        return 'Dark mode';
      case 'system':
        return 'System preference';
      default:
        return 'Light mode';
    }
  };

  const themeOptions = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: SystemIcon },
  ] as const;

  return (
    <div className="relative" data-theme-toggle>
      {/* Simple toggle button */}
      <button
        onClick={toggleTheme}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsDropdownOpen(!isDropdownOpen);
        }}
        className={`group relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          isTransitioning ? 'animate-pulse ring-2 ring-blue-400 dark:ring-blue-500' : ''
        }`}
        aria-label={`Current theme: ${getThemeLabel(theme)}. Click to toggle, right-click for options.`}
        aria-expanded={isDropdownOpen}
        aria-haspopup="menu"
        title={`${getThemeLabel(theme)} (Right-click for options)`}
        disabled={isTransitioning}
      >
        <div className="relative overflow-hidden">
          <div className="transform transition-transform duration-200 ease-in-out group-hover:scale-110">
            {getThemeIcon(theme)}
          </div>
          
          {/* Visual indicator for resolved theme when using system */}
          {theme === 'system' && (
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-current opacity-60">
              {resolvedTheme === 'dark' ? (
                <div className="w-full h-full bg-slate-400 rounded-full" />
              ) : (
                <div className="w-full h-full bg-amber-500 rounded-full" />
              )}
            </div>
          )}
        </div>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            Theme Preference
          </div>
          
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value);
                setIsDropdownOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                theme === value
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              role="menuitem"
            >
              <Icon className="w-4 h-4" />
              <span className="flex-1 text-left">{label}</span>
              {theme === value && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
          
          {theme === 'system' && (
            <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              Currently: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
