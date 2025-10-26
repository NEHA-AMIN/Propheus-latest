# Website

This is a React website built with TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure

```
components-neha/
├── public/                  # Public assets
│   ├── how-it-works-bg.png  # Background image for HowItWorksSection
│   └── earth-hands-bg.png   # Background image for CaseStudyCarousel
├── src/                     # Source files
│   └── styles/              # Style files
│       ├── flipCard.css     # CSS for FlipCard component
│       ├── retail.jpeg      # Image for retail industry
│       ├── CPG.jpeg         # Image for CPG industry
│       ├── property.jpeg    # Image for property industry
│       └── travel.jpeg      # Image for travel industry
├── App.css                  # Main CSS file
├── App.tsx                  # Main App component
├── CaseStudyCarousel.tsx    # Case study carousel component
├── CaseStudySection.tsx     # Case study section component
├── CommandCenterSection.tsx # Command center section component
├── flipCard.css             # CSS for FlipCard component (root level)
├── FlipCard.tsx             # Flip card component
├── HeroSection.tsx          # Hero section component
├── HowItWorksSection.tsx    # How it works section component
├── IndustriesSection.tsx    # Industries section component
├── Navbar.tsx               # Navigation bar component
├── StoryBlock.tsx           # Story block component
├── TealGlowButton.tsx       # Teal glow button component
├── TealGlowButtonDemo.tsx   # Demo for teal glow button
├── TealShinyButton.tsx      # Teal shiny button component
├── TestimonialGrid.tsx      # Testimonial grid component
├── TestimonialsSection.tsx  # Testimonials section component
├── ValuePropositionSection.tsx # Value proposition section component
├── package.json             # NPM package configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the Project

```bash
npm start
# or
yarn start
```

This will start the development server at http://localhost:3000.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Dependencies

- React
- React DOM
- Framer Motion (for animations)
- React Type Animation (for typing effects)
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

## Notes

- You need to add your own images to the `src/styles/` and `public/` directories.
- The website uses Tailwind CSS for styling, with custom animations defined in App.css.
