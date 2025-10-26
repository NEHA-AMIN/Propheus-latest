# Color Palette Documentation

This document defines the strict color system used throughout the Propheus application.

## Color System Overview

Our design system uses a carefully curated color palette with semantic naming to ensure consistency and maintainability across all components.

### Primary Colors - Teal (Brand Color)

Teal is our primary brand color, used for:
- Primary CTAs and interactive elements
- Brand logo and identity
- Links and navigation highlights
- Key UI accents

```css
primary-50:  #f0fdfa  /* Lightest tint */
primary-100: #ccfbf1
primary-200: #99f6e4
primary-300: #5eead4
primary-400: #2dd4bf  ← Main brand color (use this most often)
primary-500: #14b8a6
primary-600: #0d9488
primary-700: #0f766e
primary-800: #115e59
primary-900: #134e4a  /* Darkest shade */
```

**Usage Guidelines:**
- `primary-400` for buttons, links, and interactive elements
- `primary-500/600` for hover states
- `primary-300` for light backgrounds and highlights
- `primary-700/800` for dark mode accents

### Secondary Colors - Cyan (Complementary)

Cyan complements teal and is used for:
- Secondary CTAs
- Gradient combinations with primary
- Subtle accents and borders

```css
secondary-50:  #ecfeff
secondary-100: #cffafe
secondary-200: #a5f3fc
secondary-300: #67e8f9
secondary-400: #22d3ee  ← Main secondary color
secondary-500: #06b6d4
secondary-600: #0891b2
secondary-700: #0e7490
secondary-800: #155e75
secondary-900: #164e63
```

**Usage Guidelines:**
- Use with `primary` in gradients: `bg-gradient-to-r from-primary-400 to-secondary-400`
- Secondary buttons and less prominent CTAs
- Decorative elements and subtle highlights

### Neutral Colors - Slate (Main Palette)

Slate serves as our primary neutral color for:
- Backgrounds (light and dark modes)
- Text and content
- Borders and dividers
- UI containers and surfaces

```css
slate-50:  #f8fafc  ← Light mode background
slate-100: #f1f5f9
slate-200: #e2e8f0
slate-300: #cbd5e1  ← Light mode borders
slate-400: #94a3b8
slate-500: #64748b  ← Mid-tone for secondary text
slate-600: #475569
slate-700: #334155  ← Dark mode borders
slate-800: #1e293b  ← Dark mode surfaces
slate-900: #0f172a  ← Dark mode backgrounds
slate-950: #020617  ← Deepest dark mode background
```

**Light Mode:**
- Background: `bg-slate-50`
- Text: `text-slate-900`
- Secondary text: `text-slate-600`
- Borders: `border-slate-300`

**Dark Mode:**
- Background: `bg-slate-950` or `bg-slate-900`
- Text: `text-slate-100`
- Secondary text: `text-slate-400`
- Borders: `border-slate-700`

### Accent Colors - Orange (Highlights & CTAs)

Orange is reserved for:
- Special promotions or alerts
- High-priority notifications
- Alternative CTA highlighting

```css
accent-50:  #fff7ed
accent-100: #ffedd5
accent-200: #fed7aa
accent-300: #fdba74
accent-400: #fb923c
accent-500: #f97316  ← Main accent color
accent-600: #ea580c
accent-700: #c2410c
accent-800: #9a3412
accent-900: #7c2d12
```

**Usage Guidelines:**
- Use sparingly for maximum impact
- Special announcements or promotions
- Error states or warnings (when appropriate)

---

## Usage Examples

### Buttons

**Primary Button:**
```tsx
<button className="bg-primary-400 hover:bg-primary-500 text-white px-6 py-3 rounded-full transition-colors">
  Primary Action
</button>
```

**Secondary Button:**
```tsx
<button className="bg-transparent border border-slate-400 dark:border-slate-500 hover:border-primary-400 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full transition-all">
  Secondary Action
</button>
```

### Text

**Headings:**
```tsx
<h1 className="text-slate-900 dark:text-slate-100 font-bold">Main Heading</h1>
```

**Body Text:**
```tsx
<p className="text-slate-600 dark:text-slate-400">Body content goes here</p>
```

**Links:**
```tsx
<a className="text-primary-400 hover:text-primary-500 underline">Learn More</a>
```

### Cards & Surfaces

**Light Surface:**
```tsx
<div className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-6">
  Card Content
</div>
```

### Gradients

**Brand Gradient:**
```tsx
<div className="bg-gradient-to-r from-primary-400 to-secondary-400 text-white">
  Gradient Background
</div>
```

---

## Implementation Rules

### DO ✅

- Always use Tailwind's color utility classes (`primary-400`, `slate-900`, etc.)
- Include dark mode variants: `dark:bg-slate-800`
- Use semantic naming (primary, secondary, accent, not color names)
- Apply transitions when changing colors: `transition-colors duration-300`

### DON'T ❌

- Hardcode hex values directly in components
- Use `gray` instead of `slate`
- Mix color systems (stick to our defined palette)
- Forget dark mode support

---

## Aliases

For backward compatibility, `teal` is aliased to `primary`:

```tsx
/* Both work identically */
<div className="text-primary-400">...</div>
<div className="text-teal-400">...</div>
```

---

## Typography

**Font Family:**
- Primary: `font-sans` → Inter (Google Fonts)
- Monospace: `font-mono` → JetBrains Mono, Fira Code

**Recommended Font Weights:**
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

---

## Dark Mode

All components must support dark mode via Tailwind's `dark:` prefix.

**Template:**
```tsx
<div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
  Content that adapts to theme
</div>
```

The theme is controlled via `ThemeProvider` and persists in localStorage.

---

## Quick Reference

| Use Case | Light Mode | Dark Mode |
|----------|-----------|-----------|
| Page Background | `bg-slate-50` | `bg-slate-950` |
| Card Background | `bg-slate-100` | `bg-slate-800` |
| Primary Text | `text-slate-900` | `text-slate-100` |
| Secondary Text | `text-slate-600` | `text-slate-400` |
| Borders | `border-slate-300` | `border-slate-700` |
| Primary Button | `bg-primary-400` | `bg-primary-400` |
| Link | `text-primary-400` | `text-primary-400` |

---

**Last Updated:** 2025-10-22
