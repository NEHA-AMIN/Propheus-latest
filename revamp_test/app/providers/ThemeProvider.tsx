'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  systemTheme: ResolvedTheme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Prevent flash of incorrect theme
const THEME_STORAGE_KEY = 'theme-preference';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error);
  }
  
  return 'system';
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(theme: Theme, systemTheme: ResolvedTheme): ResolvedTheme {
  return theme === 'system' ? systemTheme : theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with SSR-safe defaults
  const [theme, setThemeState] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('dark');
  const [mounted, setMounted] = useState(false);

  const resolvedTheme = mounted ? resolveTheme(theme, systemTheme) : 'dark';

  // Initialize theme on mount to prevent hydration mismatch
  useEffect(() => {
    // Add preload class to prevent transitions during initial load
    document.documentElement.classList.add('preload');

    const initialTheme = getInitialTheme();
    const initialSystemTheme = getSystemTheme();
    
    setThemeState(initialTheme);
    setSystemTheme(initialSystemTheme);
    setMounted(true);

    // Apply theme immediately
    const root = document.documentElement;
    const initialResolvedTheme = resolveTheme(initialTheme, initialSystemTheme);
    
    root.classList.remove('light', 'dark');
    root.classList.add(initialResolvedTheme);
    root.setAttribute('data-theme', initialResolvedTheme);

    // Remove preload class after a short delay to enable transitions
    setTimeout(() => {
      document.documentElement.classList.remove('preload');
    }, 100);
  }, []);

  // Handle cross-tab synchronization and page visibility changes
  useEffect(() => {
    if (!mounted) return;

    const handleStorageChange = (e: StorageEvent) => {
       if (e.key === THEME_STORAGE_KEY && e.newValue) {
         const newTheme = e.newValue as Theme;
         if (['light', 'dark', 'system'].includes(newTheme)) {
           setTheme(newTheme);
         }
       }
     };

    const handleVisibilityChange = () => {
       if (!document.hidden) {
         // Re-sync theme when page becomes visible
         const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
         if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme) && savedTheme !== theme) {
           setTheme(savedTheme);
         }
       }
     };

    const handleBeforeUnload = () => {
      // Ensure theme is saved before page unload
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        console.warn('Failed to save theme before unload:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [mounted, theme]);

  // Listen for system theme changes (only after mount)
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      
      // Dispatch custom event for other components to listen to
      window.dispatchEvent(new CustomEvent('theme-system-change', {
        detail: { systemTheme: newSystemTheme }
      }));
    };

    // Set initial system theme
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    
    // Use both addEventListener and addListener for broader browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [mounted]);

  // Apply theme to document and save to localStorage (only after mount)
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add the resolved theme class
    root.classList.add(resolvedTheme);
    
    // Update data attributes for comprehensive CSS targeting
    root.setAttribute('data-theme', resolvedTheme);
    root.setAttribute('data-theme-preference', theme);
    
    // Apply theme to body for additional styling hooks
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(resolvedTheme);
    document.body.setAttribute('data-theme', resolvedTheme);
    
    // Save preference to localStorage
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }

    // Update meta theme-color for mobile browsers with enhanced colors
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        resolvedTheme === 'dark' ? '#0f172a' : '#ffffff'
      );
    }

    // Update meta viewport-fit for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport && !metaViewport.getAttribute('content')?.includes('viewport-fit')) {
      const currentContent = metaViewport.getAttribute('content') || '';
      metaViewport.setAttribute('content', `${currentContent}, viewport-fit=cover`);
    }

    // Dispatch theme change event for other components
    window.dispatchEvent(new CustomEvent('theme-change', {
      detail: { 
        theme, 
        resolvedTheme, 
        systemTheme 
      }
    }));
  }, [theme, resolvedTheme, systemTheme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      if (prev === 'system') return 'light';
      if (prev === 'light') return 'dark';
      return 'system';
    });
  }, []);

  const contextValue: ThemeContextType = {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme,
    systemTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return consistent fallback for SSR
    return { 
      theme: 'system' as Theme, 
      resolvedTheme: 'dark' as ResolvedTheme,
      toggleTheme: () => {},
      setTheme: () => {},
      systemTheme: 'dark' as ResolvedTheme
    };
  }
  return context;
}
