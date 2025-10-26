# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
React-based marketing website for Propheus, built with TypeScript, Tailwind CSS, and Framer Motion. The site features a dark theme with teal accent colors and sophisticated animations.

## Essential Commands

### Development
```bash
npm start                 # Start dev server at http://localhost:3000
npm run build            # Production build
npm test                 # Run tests with react-scripts
```

### Testing
```bash
# Run tests in watch mode (default)
npm test

# Run tests with coverage
npm test -- --coverage --watchAll=false

# Run specific test file
npm test -- FileName.test
```

## Architecture

### Component Structure
The app uses a **single-page, section-based layout** where `App.tsx` orchestrates all major sections:
- Section components are self-contained and render in order
- Each section handles its own animations, state, and interactions
- No routing—all navigation is scroll-based

### Key Architectural Patterns

#### 1. Animation System
**Framer Motion** is used throughout for sophisticated animations:
- **Card flip effects**: `IndustriesSection.tsx` uses 3D transforms with `preserveStyle: '3d'`
- **Scroll-based reveals**: `motion` components with `useInView` for staggered entrance animations
- **Interactive effects**: Mouse tracking for tilt effects and magnetic glows

#### 2. Styling Architecture
**Tailwind CSS** provides the base with extensive customizations:
- Custom teal/slate color palettes defined in `tailwind.config.js`
- Custom animations: `glow`, `shimmer`, `pulse-glow` defined in both Tailwind config and `App.css`
- Complex gradient animations for text effects (see `.animated-teal-gradient` in `App.css`)

#### 3. Interactive Components
**Reusable interaction patterns**:
- `TealShinyButton`: Mouse-tracking radial gradient effect that follows cursor
- `FlipCard`: Generic flip card with front/back content and hover detection
- `CaseStudyCarousel`: Horizontal scroll carousel with auto-scroll and performance monitoring

#### 4. Performance Considerations
Components implement performance optimizations:
- **Reduced motion checks**: `prefersReducedMotion()` utility respects user accessibility preferences
- **FPS monitoring**: `CaseStudyCarousel` dynamically disables blur effects if frame rate drops below 30fps
- **Ref-based DOM access**: Heavy use of `useRef` to avoid unnecessary re-renders

## Code Patterns

### Component Patterns
When creating new components:
- Use functional components with TypeScript interfaces for props
- Export props interface for reusability (e.g., `FlipCardProps`)
- Include `aria-label` props for accessibility
- Wrap complex animations in reduced motion checks

### Animation Patterns
```typescript
// Prefer Framer Motion for complex animations
<motion.div
  variants={itemVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
```

### Styling Patterns
- Use Tailwind utility classes for layout and base styles
- Use custom CSS in `App.css` for complex animations (gradients, keyframes)
- Maintain dark theme: backgrounds use `slate-950`, `slate-900`, `slate-800`
- Accent color is teal: `teal-400`, `teal-500`, `teal-600`

### Mouse Tracking Pattern
For interactive hover effects:
```typescript
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent) => {
  const rect = element.getBoundingClientRect();
  setMousePosition({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  });
};
```

## File Organization

### Project Structure
```
src/
├── components/       # Reusable UI components
│   ├── FlipCard.tsx
│   ├── TealShinyButton.tsx
│   ├── TealGlowButton.tsx
│   ├── TestimonialGrid.tsx
│   ├── CaseStudyCarousel.tsx
│   ├── StoryBlock.tsx
│   └── Navbar.tsx
├── sections/         # Page sections
│   ├── HeroSection.tsx
│   ├── IndustriesSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── CommandCenterSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CaseStudySection.tsx
│   ├── ValuePropositionSection.tsx
│   └── SignalSection.tsx
├── utils/            # Utility components and helpers
│   └── SplitText.tsx
├── styles/           # CSS files and images
│   ├── App.css
│   ├── flipCard.css
│   └── [images]
├── App.tsx           # Main orchestrator
├── IndustriesPage.tsx
└── index.tsx

docs/                 # Documentation files
├── audit/            # Audit and verification docs
├── migration/        # Migration-related docs
└── development/      # Development notes and fixes
```

### Documentation Organization
**IMPORTANT**: Always place markdown documentation files in the `docs/` folder with proper subfolders:
- `docs/audit/` - Audit reports, component verification
- `docs/migration/` - Migration logs, completion reports
- `docs/development/` - Development notes, fixes, checklists
- Root level - Only `WARP.md` and `README.md` should remain in the root

### Import Paths
When importing components, use proper relative paths:
- Sections import components: `import Component from '../components/Component'`
- Sections import utils: `import Util from '../utils/Util'`
- App.tsx imports sections: `import Section from './sections/Section'`
- App.tsx imports components: `import Component from './components/Component'`
- Styles: `import './styles/App.css'`

## Development Guidelines

### Adding New Sections
1. Create section component in `src/sections/` (e.g., `NewSection.tsx`)
2. Import and add to `App.tsx` in desired order: `import NewSection from './sections/NewSection'`
3. Use consistent dark theme styling (slate backgrounds, teal accents)
4. Implement entrance animations using Framer Motion

### Adding New Components
1. Create component in `src/components/` for reusable UI elements
2. Create component in `src/utils/` for utility/helper components
3. Use TypeScript interfaces for props
4. Export both the component and its props interface for reusability

### Modifying Animations
- Custom keyframes go in `App.css` 
- Tailwind animation utilities go in `tailwind.config.js`
- Use `duration-300` or similar for smooth transitions
- Always implement reduced motion fallbacks

### Working with Images
- Section backgrounds go in `public/`
- Content images go in `src/styles/`
- Reference with relative paths from component location

### TypeScript Usage
- Strict mode enabled in `tsconfig.json`
- Always define interfaces for component props
- Use `React.FC<PropsType>` for function components

## Technical Stack
- **React 18.2** with TypeScript
- **Framer Motion 10.16** for animations
- **Tailwind CSS 3.3** for styling
- **react-scripts 5.0** for build tooling
- **PostCSS & Autoprefixer** for CSS processing

## Browser Support
Targets modern browsers with focus on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
Production builds support >0.2% usage browsers
