# Arjun Dabhi — Portfolio

A cinematic developer and computer engineering portfolio featuring scroll-driven interactions, immersive video scrubbing, responsive engineering, and detailed project case studies.

**Live Website:** [https://arjun-dabhi-portfolio.vercel.app/](https://arjun-dabhi-portfolio.vercel.app/)

---

## Overview

This portfolio showcases the engineering and creative work of **Arjun Dabhi**, focusing on high-performance web development, modern frontend architectures, and memorable interactive design. Built from the ground up with clean, native browser scrolling and precise scroll synchronization, it balances rich aesthetics with rigorous accessibility, performance, and search engine optimization.

---

## Features

- **Scroll-Scrubbed Cinematic Hero:** Seamlessly maps viewport scroll progress to video playback and layered masked typography.
- **Six Detailed Case Studies:** In-depth technical breakdowns covering design challenges, architectural decisions, and responsive visual showcases.
- **Circular Project Navigation:** Continuous project discovery loop enabling fluid transitions between case studies.
- **Static SEO Metadata Shells:** Build-time HTML prerendering ensuring rich search and social previews for search engines and crawlers.
- **Keyboard & Screen Reader Accessible:** Semantic landmark structure, accessible modal dialogs with focus trapping and restoration, and visible focus rings.
- **Native Scrolling Performance:** Pure browser scrolling integrated with GSAP ScrollTrigger without third-party smooth-scroll wrappers.
- **Mobile & Touch Optimized:** Full support for iOS Safari, dynamic viewport units, safe-area insets, and uniform touch targets ($\ge 44\times 44\text{px}$).

---

## Tech Stack

- **Core Framework:** React 19 + React Router 7
- **Build Tool:** Vite 8
- **Animation & Scroll:** GSAP 3 + ScrollTrigger
- **Styling:** Vanilla CSS (Modern CSS Custom Properties & Responsive Clamp Typography)
- **Icons:** Lucide React & Monochrome SVG Icons
- **Linting:** Oxlint
- **Hosting & Deployment:** Vercel

---

## Project Structure

```text
├── public/                     # Static production assets
│   ├── assets/                 # Video, optimized WebP imagery, case study media
│   ├── favicon.svg             # SVG site favicon
│   ├── og-image.png            # Default social preview card
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Canonical route sitemap
├── scripts/                    # Build and QA automation scripts
│   ├── generate-route-html.mjs # Build-time static SEO route shell generator
│   └── verify-route-html.mjs   # Route metadata and social asset validator
├── src/
│   ├── components/             # Reusable UI sections & components
│   │   ├── About/              # Editorial bio, statistics, and skill highlights
│   │   ├── CaseStudy/          # Shared case study header, back link, & navigation
│   │   ├── Contact/            # Contact interface & status notifications
│   │   ├── Hero/               # Video scrub canvas, typography, & Showreel modal
│   │   ├── MaskedHeading/      # Text-clip gradient masked heading component
│   │   ├── Navbar/             # Desktop navigation & mobile drawer
│   │   ├── Projects/           # Filterable project showcase grid
│   │   ├── RouteLoader/        # Lazy-route transition indicator
│   │   ├── SEO/                # Dynamic document title & Open Graph manager
│   │   └── Skills/             # Categorized technical competencies
│   ├── data/                   # Structured case study & project data
│   ├── pages/                  # Route views (HomePage, 6 Case Studies, NotFoundPage)
│   ├── styles/                 # Global motion & token definitions
│   ├── App.jsx                 # App root & route configuration
│   └── main.jsx                # Client entry point
├── index.html                  # HTML entry point shell
├── package.json                # Project dependencies & scripts
├── vercel.json                 # SPA rewrite configuration
└── vite.config.js              # Vite configuration
```

---

## Featured Projects

1. **BOO! Ice Cream** — Immersive product experience for an artisanal blackcurrant ice cream brand.  
   - [Live Demo](https://boo-icecream.vercel.app/)  
   - [GitHub Repository](https://github.com/Abhioswald/boo-icecream)
2. **Gajanand Vada Pav** — Authentic cultural dining showcase celebrating regional street food heritage with Gujarati typography.  
   - [Live Demo](https://gajanand-six.vercel.app/)  
   - [GitHub Repository](https://github.com/Abhioswald/gajanand)
3. **Azura Perfume** — Editorial luxury fragrance catalog built with bespoke dark aesthetic and refined typography.
4. **The Weeknd** — Chapter-driven cinematic tribute exploring visual storytelling and dark musical aesthetics.
5. **Cakee** — Contemporary bakery and dessert ordering concept with warm pastel branding.
6. **Coffitoo Coffee** — Artisanal café landing experience with rich espresso tones and craft brewing narratives.

---

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or compatible package manager

### Installation

```bash
git clone https://github.com/Abhioswald/arjun-dabhi-portfolio.git
cd arjun-dabhi-portfolio
npm install
```

### Development Server

```bash
npm run dev
```

To expose the development server on your local network (e.g. for physical mobile device testing):

```bash
npm run dev -- --host
```

### Production Build

```bash
npm run build
```

This compiles the Vite bundle and executes `scripts/generate-route-html.mjs` to generate prerendered static route shells in `dist/`.

### Route Verification

```bash
node scripts/verify-route-html.mjs
```

Validates that all generated route shells contain their expected titles, descriptions, canonical URLs, and social image assets.

### Linting

```bash
npm run lint
```

Runs Oxlint across the repository.

---

## Architecture Notes

### Native Browser Scrolling & GSAP ScrollTrigger

The portfolio uses standard browser momentum scrolling rather than hijacking scroll events with virtual-scroll libraries. GSAP ScrollTrigger integrates natively with the browser's scroll position, ensuring consistent tactile response on touchscreens, trackpads, and mousewheels.

### Scroll-Scrubbed Video Optimization

The Hero video scrub maps scroll progression directly to video playback:
- High-efficiency MP4 video encoded with short keyframe intervals for responsive bidirectional scrubbing.
- RequestAnimationFrame (RAF) coalescing prevents redundant seek operations during high-frequency scroll updates.
- An idle-freeze system ensures zero autonomous drift or battery drain when stationary.
- iOS Safari priming prevents media player takeover, icon overlays, or stuck poster frames.

### Code Splitting & Route Lazy Loading

All six project case study pages and the 404 page are lazily loaded via `React.lazy()` and `Suspense`, ensuring that the initial homepage payload remains lightweight and fast to load.

---

## Performance & Media Strategy

- **Optimized Media:** High-resolution photography is converted to WebP format, significantly reducing network payload without sacrificing visual quality.
- **On-Demand Video Loading:** Heavy video assets (such as the Showreel) are only fetched across the network when explicitly requested by the user.
- **Font & Asset Stability:** Preloaded portrait textures and font clamps prevent cumulative layout shifts (CLS) on initial paint.

---

## Accessibility Considerations

- **Semantic Landmarks:** Single primary `<main id="main-content">` landmark across all routes.
- **Heading Hierarchy:** Single semantic `<h1>` on every route.
- **Skip Navigation:** A visible skip link allows keyboard users to bypass navigation immediately.
- **Modal Dialog Focus Management:** Showreel modal traps focus while open, listens for the `Escape` key, and restores focus to the trigger button on close.
- **Touch Target Sizing:** Interactive buttons, navigation links, and project controls maintain an effective touch area of at least $44\times 44\text{px}$.
- **Reduced Motion:** Comprehensive `@media (prefers-reduced-motion: reduce)` rules disable decorative animations and provide immediate, steady visual presentations.

---

## SEO & Social Sharing

- **Static Metadata Shells:** Build-time script generates distinct HTML files for each route (`/`, `/projects/boo`, `/projects/gajanand`, `/projects/azura`, `/projects/the-weeknd`, `/projects/cakee`, `/projects/coffitoo`).
- **Crawler Compatibility:** Search engines and social media scrapers receive accurate `<title>`, `<meta description>`, Open Graph, and Twitter Card tags in raw server HTML without requiring client-side JavaScript execution.
- **Sitemap & Robots:** Valid `sitemap.xml` and `robots.txt` live at the site root.

---

## Deployment

The portfolio is deployed continuously on **Vercel** via GitHub integration:
- Production branch: `main`
- Automatic deployment on push with build-time route generation.
- Client-side routing supported via `vercel.json` rewrite rules.

---

## Verified Links

- **GitHub Profile:** [https://github.com/Abhioswald](https://github.com/Abhioswald)
- **Live Portfolio:** [https://arjun-dabhi-portfolio.vercel.app/](https://arjun-dabhi-portfolio.vercel.app/)

---

## Future Enhancements

- Dedicated $1200\times 630$ JPEG/PNG social cards for legacy social crawlers.
- Direct contact form backend integration.
- Downloadable resume / CV integration once finalized.
