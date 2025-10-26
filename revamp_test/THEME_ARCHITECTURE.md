# Theme Architecture Documentation

## Overview

This document outlines the comprehensive theme system implemented for the website, providing seamless dark/light mode switching with system preference detection, accessibility features, and performance optimizations.

## Architecture Components

### 1. ThemeProvider (`app/providers/ThemeProvider.tsx`)

The core theme management system that handles:

- **Theme States**: `light`, `dark`, `system`
- **Theme Resolution**: Automatically resolves `system` to actual light/dark based on user's OS preference
- **Persistence**: Saves user preference to localStorage with key `theme-preference`
- **System Detection**: Listens to `prefers-color-scheme` media query changes
- **Flicker Prevention**: Applies theme before React hydration

#### Key Functions:

```typescript
// Theme resolution logic
const resolveTheme = (theme: Theme, systemTheme: 'light' | 'dark'): 'light' | 'dark'

// System preference detection
const getSystemTheme = (): 'light' | 'dark'

// Initial theme loading with fallbacks
const getInitialTheme = (): { theme: Theme; resolvedTheme: 'light' | 'dark' }
```

#### Context Interface:

```typescript
interface ThemeContextType {
  theme: Theme;                    // User's selected theme preference
  resolvedTheme: 'light' | 'dark'; // Actual applied theme
  systemTheme: 'light' | 'dark';   // Current system preference
  setTheme: (theme: Theme) => void; // Theme setter function
  toggleTheme: () => void;          // Cycles through system → light → dark
}
```

### 2. ThemeScript (`app/components/ThemeScript.tsx`)

Prevents flash of incorrect theme (FOIT) by:

- Running before React hydration
- Reading theme from localStorage
- Detecting system preference
- Applying theme to document immediately
- Setting up system preference listener

### 3. ThemeToggle (`app/components/ThemeToggle.tsx`)

Interactive theme switcher with:

- **Dropdown Interface**: Shows all three options (System, Light, Dark)
- **Visual Feedback**: Icons change based on resolved theme
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Current State Display**: Shows resolved theme when "System" is selected

#### Icons:
- **System**: Computer monitor icon
- **Light**: Sun icon
- **Dark**: Moon icon

### 4. CSS Variables System (`app/globals.css`)

Comprehensive color system using CSS custom properties:

#### Core Theme Variables:
```css
:root {
  /* Base colors */
  --background: <hsl-values>;
  --foreground: <hsl-values>;
  --card: <hsl-values>;
  --card-foreground: <hsl-values>;
  
  /* Interactive elements */
  --primary: <hsl-values>;
  --primary-foreground: <hsl-values>;
  --secondary: <hsl-values>;
  --secondary-foreground: <hsl-values>;
  
  /* UI states */
  --muted: <hsl-values>;
  --muted-foreground: <hsl-values>;
  --accent: <hsl-values>;
  --accent-foreground: <hsl-values>;
  
  /* Feedback colors */
  --destructive: <hsl-values>;
  --destructive-foreground: <hsl-values>;
  
  /* Form elements */
  --border: <hsl-values>;
  --input: <hsl-values>;
  --ring: <hsl-values>;
}
```

#### Extended Variables:
- **Surfaces**: `--surface`, `--surface-variant`, `--on-surface`
- **Navigation**: `--nav-background`, `--nav-foreground`
- **Buttons**: `--button-primary`, `--button-secondary`
- **Forms**: `--form-background`, `--form-border`
- **Feedback**: `--success`, `--warning`, `--error`, `--info`
- **Teal Palette**: `--teal-50` through `--teal-900`

#### Dark Mode Overrides:
```css
[data-theme="dark"] {
  /* All variables redefined for dark theme */
}
```

### 5. Layout Integration (`app/layout.tsx`)

- **ThemeScript**: Embedded in `<head>` for immediate execution
- **ThemeProvider**: Wraps the entire application
- **Meta Tags**: Theme-color for mobile browsers
- **Viewport**: Responsive design support

## Features

### 1. Theme Persistence
- Uses `localStorage` with key `theme-preference`
- Fallback to system preference if no stored preference
- Maintains preference across browser sessions

### 2. System Preference Detection
- Listens to `prefers-color-scheme` media query
- Automatically updates when system theme changes
- Respects user's OS-level dark mode setting

### 3. Flicker Prevention
- `ThemeScript` runs before React hydration
- Applies theme synchronously to prevent flash
- Uses `data-theme` attribute for immediate CSS application

### 4. Smooth Transitions
```css
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
```

### 5. Accessibility Features
- **High Contrast Support**: Automatic adjustments for `prefers-contrast: high`
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Visible focus rings with proper contrast

### 6. Print Styles
- Optimized for printing in both themes
- Forces light theme for print to save ink
- Hides non-essential elements (navigation, buttons)
- Ensures proper contrast ratios

## Usage Examples

### Basic Theme Usage
```tsx
import { useTheme } from '@/app/providers/ThemeProvider';

function MyComponent() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  return (
    <div className="bg-background text-foreground">
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
}
```

### CSS Variable Usage
```css
.my-component {
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
}

.my-button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

### Tailwind Classes
```tsx
<div className="bg-background text-foreground border-border">
  <button className="bg-primary text-primary-foreground hover:bg-primary/90">
    Primary Button
  </button>
</div>
```

## Testing Guidelines

### 1. Theme Persistence Testing
- [ ] Switch themes and refresh page
- [ ] Verify theme persists across browser sessions
- [ ] Test with localStorage disabled
- [ ] Check fallback to system preference

### 2. System Preference Testing
- [ ] Change OS theme while app is open
- [ ] Verify automatic theme updates
- [ ] Test "System" theme option behavior
- [ ] Check initial load with different system themes

### 3. Visual Testing
- [ ] All UI elements in both themes
- [ ] Proper contrast ratios (WCAG AA compliance)
- [ ] No layout shifts during theme changes
- [ ] Smooth transitions without flickering

### 4. Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] High contrast mode support
- [ ] Reduced motion preferences
- [ ] Focus indicators visibility

### 5. Performance Testing
- [ ] No flash of incorrect theme (FOIT)
- [ ] Fast theme switching
- [ ] No JavaScript errors in console
- [ ] Memory usage during theme changes

### 6. Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### 7. Print Testing
- [ ] Print preview in both themes
- [ ] Proper contrast in print mode
- [ ] Hidden elements (navigation, buttons)
- [ ] Page break handling

## Maintenance Guidelines

### Adding New Colors
1. Define in both light and dark theme sections
2. Follow HSL format: `hue saturation lightness`
3. Ensure proper contrast ratios
4. Add to Tailwind config if needed

### Extending Theme Options
1. Update `Theme` type in ThemeProvider
2. Add new option to theme cycling logic
3. Update ThemeToggle component
4. Add corresponding CSS variables

### Performance Optimization
- Keep CSS variables minimal and semantic
- Use CSS custom properties for dynamic values
- Avoid inline styles for theme-dependent properties
- Leverage CSS cascade for inheritance

### Debugging Theme Issues
1. Check browser console for errors
2. Verify localStorage values
3. Inspect CSS custom properties in DevTools
4. Test system preference detection
5. Validate theme script execution order

## Browser Support

- **Modern Browsers**: Full support (Chrome 49+, Firefox 31+, Safari 9.1+)
- **CSS Custom Properties**: Required for theme system
- **localStorage**: Required for persistence
- **matchMedia**: Required for system preference detection

## Security Considerations

- No sensitive data stored in localStorage
- Theme preference is client-side only
- No server-side theme processing required
- Safe for CSP (Content Security Policy) environments

## Future Enhancements

### Potential Additions
- **Multiple Theme Variants**: Beyond light/dark (e.g., high contrast, colorblind-friendly)
- **Theme Scheduling**: Automatic switching based on time of day
- **Custom Theme Builder**: User-defined color schemes
- **Theme Animations**: Enhanced transition effects
- **Theme Presets**: Predefined theme combinations

### API Extensions
```typescript
// Potential future API
interface ExtendedThemeContext {
  // Current API
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  
  // Future additions
  customThemes: CustomTheme[];
  createCustomTheme: (theme: CustomTheme) => void;
  scheduleTheme: (schedule: ThemeSchedule) => void;
  themeHistory: ThemeHistoryEntry[];
}
```

## Conclusion

This theme architecture provides a robust, accessible, and performant foundation for dark/light mode functionality. It follows modern web standards, ensures excellent user experience, and is designed for easy maintenance and future enhancements.

For questions or contributions, refer to the component files and this documentation for implementation details.