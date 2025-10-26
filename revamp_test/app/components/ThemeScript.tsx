/**
 * Theme Script Component
 * 
 * This script runs before React hydrates to prevent flash of incorrect theme (FOIT).
 * It reads the theme preference from localStorage and applies it immediately.
 */

export default function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const THEME_STORAGE_KEY = 'theme-preference';
        
        function getSystemTheme() {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function resolveTheme(theme, systemTheme) {
          return theme === 'system' ? systemTheme : theme;
        }
        
        function applyTheme(resolvedTheme, themePreference) {
          const root = document.documentElement;
          root.classList.remove('light', 'dark');
          root.classList.add(resolvedTheme);
          root.setAttribute('data-theme', resolvedTheme);
          root.setAttribute('data-theme-preference', themePreference || resolvedTheme);
          
          // Apply theme to body for additional styling hooks
          document.body.classList.remove('light', 'dark');
          document.body.classList.add(resolvedTheme);
          document.body.setAttribute('data-theme', resolvedTheme);
          
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
            metaViewport.setAttribute('content', currentContent + ', viewport-fit=cover');
          }
        }
        
        // Get stored theme preference
        let theme = 'system';
        try {
          const stored = localStorage.getItem(THEME_STORAGE_KEY);
          if (stored && ['light', 'dark', 'system'].includes(stored)) {
            theme = stored;
          }
        } catch (error) {
          console.warn('Failed to read theme from localStorage:', error);
        }
        
        // Resolve and apply theme
        const systemTheme = getSystemTheme();
        const resolvedTheme = resolveTheme(theme, systemTheme);
        applyTheme(resolvedTheme, theme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
          if (theme === 'system') {
            const newResolvedTheme = e.matches ? 'dark' : 'light';
            applyTheme(newResolvedTheme, 'system');
          }
        });
        
        // Listen for cross-tab theme changes
        window.addEventListener('storage', function(e) {
          if (e.key === THEME_STORAGE_KEY && e.newValue) {
            const newTheme = e.newValue;
            if (['light', 'dark', 'system'].includes(newTheme)) {
              theme = newTheme;
              const newSystemTheme = getSystemTheme();
              const newResolvedTheme = resolveTheme(newTheme, newSystemTheme);
              applyTheme(newResolvedTheme, newTheme);
            }
          }
        });
        
      } catch (error) {
        console.warn('Theme script error:', error);
        // Fallback to system preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.classList.add(systemTheme);
        document.documentElement.setAttribute('data-theme', systemTheme);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}