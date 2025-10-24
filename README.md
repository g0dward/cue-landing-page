# Cue Landing Page

A pixel-perfect, responsive landing page for Cue - an AI-powered meeting notes application. Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🎨 Design Source

- **Figma**: [Luke's Playground](https://www.figma.com/design/ECiUvJtGpKZpl6QhBZK96P/%F0%9F%8E%A8-Luke-s-Playground?node-id=698-41606)
- **Node ID**: 698-41606

## ✨ Features

- ✅ **Pixel-perfect implementation** - Matches Figma design specifications exactly
- 📱 **Fully responsive** - Mobile (360px), Tablet (768px), Desktop (1440px)
- ⚡ **Performance optimized** - Next.js Image optimization, lazy loading
- 🎬 **Smooth animations** - Framer Motion fade-in and scroll-triggered
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- 🔒 **Type-safe** - Built with TypeScript
- 🚀 **Modern stack** - Next.js 16 App Router with Tailwind CSS v4

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @theme inline
- **Animation**: Framer Motion
- **Font**: Inter (Google Fonts via next/font)
- **Image Optimization**: next/image

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
cue-landing/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles + Figma tokens
├── components/
│   ├── Header.tsx          # Fixed header with logo & CTA
│   ├── HeroSection.tsx     # Hero with headline & mockup
│   ├── FeaturesSection.tsx # Three-column features grid
│   └── TrustmarkCard.tsx   # Individual feature card
├── public/
│   └── images/             # All image assets from Figma
└── README.md
```

## 🎨 Design Tokens (from Figma)

Defined in `app/globals.css`:

```css
/* Colors */
--color-text-primary: #09090b      /* Main text (zinc-950) */
--color-text-tertiary: #71717a     /* Secondary text (zinc-500) */
--color-surface-default: #ffffff   /* White background */
--color-surface-inverse: #09090b   /* Dark buttons */
--color-border-default: #e4e4e7    /* Borders (zinc-200) */

/* Typography */
--font-sans: "Inter", sans-serif

/* Breakpoints */
360px  - Mobile (xs)
768px  - Tablet (sm)
1024px - Desktop small (md)
1280px - Desktop medium (lg)
1440px - Desktop large (xl)
```

## 📱 Components

### Header
- Fixed position with backdrop blur
- Logo (104×32px desktop, 78×24px mobile)
- CTA button (194×56px desktop, 150×44px mobile)

### HeroSection
- Gradient background (1440×1200px)
- App Store badge (98×40px)
- Headline: "Stay in the conversation. Never miss a detail." (72px Inter Black)
- Subheading (18px Inter Regular)
- Primary CTA + "No credit card required" subtext
- Hero mockup image (1440×480px)
- Fade-in animation on load

### FeaturesSection
- Section heading: "Stop choosing between taking notes and being present"
- Three trustmark cards in responsive grid
- Staggered scroll animations

### TrustmarkCard
- Icon (40×40px)
- Title (16px Inter Bold)
- Description (16px Inter Regular)
- Rounded corners (20px), white background, border

## 🎯 Typography Scale

| Element | Desktop | Mobile | Weight | Line Height |
|---------|---------|--------|--------|-------------|
| H1 (Hero) | 72px | 36-48px | Black (900) | 80px / 40-56px |
| H2 (Section) | 24px | 20-22px | Bold (700) | 32px / 28-30px |
| H3 (Card) | 16px | 16px | Bold (700) | 24px |
| Body Large | 18px | 16px | Regular (400) | 28px / 24px |
| Body Medium | 16px | 15px | Regular (400) | 24px / 22px |
| Body Small | 12px | 12px | Regular (400) | 20px |

## 🖼 Image Assets

Located in `public/images/`:

| File | Purpose | Size |
|------|---------|------|
| `background-desktop.png` | Hero gradient background | 1440×1200px |
| `hero-temporary.png` | iPhone mockup | 1440×480px |
| `logo-gradient.svg` | Cue logo | 104×32px |
| `app-store-badge.svg` | Featured badge | 98×40px |
| `illustration-trustmark-blue.png` | Full Presence icon | 40×40px |
| `illustration-trustmark-red.png` | Zero Friction icon | 40×40px |
| `illustration-trustmark-purple.png` | Instant Clarity icon | 40×40px |

## 🎬 Animations (Framer Motion)

### Hero Section
- **Effect**: Fade-in from below
- **Duration**: 0.6s
- **Trigger**: Page load
- **Properties**: `opacity: 0 → 1`, `y: 20 → 0`

### Feature Cards
- **Effect**: Staggered fade-in
- **Duration**: 0.5s per card
- **Stagger**: 0.1s delay
- **Trigger**: Scroll into viewport (whileInView)

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Visible focus states (ring-2 ring-offset-2)
- ✅ Descriptive alt text for images
- ✅ Color contrast ≥ 4.5:1 (WCAG AA)

## 📊 Performance Targets

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90
- **LCP**: ≤ 2.5s
- **CLS**: ≤ 0.1

### Optimizations
- Next.js Image with priority loading for hero
- Lazy loading for below-fold images
- Automatic font optimization (next/font)
- Code splitting via App Router
- Turbopack for fast dev builds

## 🔧 Development Notes

### Tailwind CSS v4
Uses the new `@theme inline` syntax with CSS custom properties instead of a traditional config file.

### Client Components
Components using Framer Motion require `"use client"` directive (HeroSection, FeaturesSection).

### Image Paths
All images must be in `public/images/` and referenced as `/images/filename.ext`.

## 📄 PRD & Tasks

See project documentation:
- `cue-hero-prd.md` - Complete product requirements
- `cue-hero-tasks.md` - Detailed implementation tasks

---

**Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion**
