/**
 * Case Studies Data Store
 * Grounded in verified project data and actual repository source code.
 */

export const booCaseStudyData = {
  slug: 'boo',
  number: '01',
  title: 'BOO! Ice Cream',
  tagline: 'NOT YOUR ORDINARY ICE CREAM.',
  eyebrow: '01 / PROJECT',
  description:
    'A dark product experience built around bold visual storytelling, immersive scrolling and a distinctive blackcurrant identity.',
  liveUrl: 'https://boo-icecream.vercel.app/',
  githubUrl: 'https://github.com/Abhioswald/boo-icecream',
  mainImage: '/assets/projects/optimized/boo.webp',
  heroImage: '/assets/case-studies/boo/boo-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Product Landing Experience' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'React · Vite · Tailwind CSS · GSAP · ScrollTrigger' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'Built to Taste Different.',
    paragraphs: [
      'BOO explores a darker direction for an ice-cream product website.',
      'Its identity is built around blackcurrant and berry flavor, charcoal cone, deep-black surfaces, violet highlights, and bold visual storytelling.',
    ],
    featureCards: [
      {
        title: 'DARK IDENTITY',
        description: 'Deep black surfaces with electric purple highlights.',
      },
      {
        title: 'PRODUCT FOCUS',
        description: 'The product remains the visual center of the experience.',
      },
      {
        title: 'SCROLL STORYTELLING',
        description: 'Each section reveals another part of the product personality.',
      },
      {
        title: 'RESPONSIVE EXPERIENCE',
        description: 'The layout adapts across desktop and mobile.',
      },
    ],
  },

  experience: {
    marker: '03 / EXPERIENCE',
    heading: 'The Full Experience',
    description:
      'The complete landing experience is structured as a continuous vertical showcase—progressing seamlessly from the cinematic opening to origin stories, berry splash dynamics, tactile waffle cone details, and the final conversion drop.',
    fullImage: '/assets/projects/optimized/boo.webp',
    fullImageOriginal: '/assets/projects/boo.png',
    keyMoments: [
      'NOT YOUR ORDINARY ICE CREAM',
      'BLACK BY NATURE',
      'BERRY EXPLOSION',
      'CRUNCH IN THE DARK',
      'ONE PRODUCT. ZERO BORING ANGLES.',
      'DARE TO TASTE THE DARK?',
    ],
  },

  visualLanguage: {
    marker: '04 / VISUAL LANGUAGE',
    heading: 'Dark by Design.',
    description:
      "BOO's visual language deliberately diverges from conventional pastel ice cream aesthetics, creating an intense, atmospheric identity that lets the black charcoal cone and vivid berry colors stand out with dramatic clarity.",
    blocks: [
      {
        number: '01',
        name: 'BLACK',
        description: 'Minimal black surfaces create contrast and drama.',
        accent: '#8a42ff',
        image: '/assets/case-studies/boo/boo-black-by-nature.webp',
        alt: 'BOO black botanical charcoal and slow-churned cream presentation',
      },
      {
        number: '02',
        name: 'PURPLE',
        description: "Electric violet establishes BOO's distinctive flavor identity.",
        accent: '#d629ff',
        image: '/assets/case-studies/boo/boo-berry-explosion.webp',
        alt: 'BOO berry explosion splash with electric violet accents',
      },
      {
        number: '03',
        name: 'PRODUCT',
        description: 'Large product imagery keeps attention on the ice cream itself.',
        accent: '#c58bff',
        image: '/assets/case-studies/boo/boo-crunch.webp',
        alt: 'Close-up macro of BOO waffle cone texture and glaze',
      },
    ],
  },

  moments: {
    marker: '05 / WEBSITE MOMENTS',
    heading: 'One Product.\nZero Boring Angles.',
    description:
      'Direct crops from the real website demonstrate how each section highlights a distinct angle of the product narrative.',
    items: [
      {
        id: 'A',
        title: 'Hero / NOT YOUR ORDINARY ICE CREAM',
        tag: '01 // OPENING',
        image: '/assets/case-studies/boo/boo-hero.webp',
        alt: 'Hero section with NOT YOUR ORDINARY ICE CREAM',
      },
      {
        id: 'B',
        title: 'BLACK BY NATURE',
        tag: '02 // ORIGIN',
        image: '/assets/case-studies/boo/boo-black-by-nature.webp',
        alt: 'BLACK BY NATURE product visual with activated charcoal cone',
      },
      {
        id: 'C',
        title: 'BERRY EXPLOSION',
        tag: '03 // TASTE',
        image: '/assets/case-studies/boo/boo-berry-explosion.webp',
        alt: 'BERRY EXPLOSION splash with Nordic blackcurrant and cranberry',
      },
      {
        id: 'D',
        title: 'CRUNCH IN THE DARK',
        tag: '04 // TACTILE',
        image: '/assets/case-studies/boo/boo-crunch.webp',
        alt: 'CRUNCH IN THE DARK macro waffle cone and drizzle details',
      },
      {
        id: 'E',
        title: 'ONE PRODUCT. ZERO BORING ANGLES.',
        tag: '05 // PERSPECTIVE',
        image: '/assets/case-studies/boo/boo-product-angle.webp',
        alt: 'ONE PRODUCT ZERO BORING ANGLES top perspective showcase',
      },
      {
        id: 'F',
        title: 'DARE TO TASTE THE DARK?',
        tag: '06 // FINALE',
        image: '/assets/case-studies/boo/boo-final-cta.webp',
        alt: 'DARE TO TASTE THE DARK final conversion CTA',
      },
    ],
  },

  motion: {
    marker: '06 / MOTION',
    heading: 'Built Around Scroll.',
    description:
      'Interactions are bound directly to the user viewport progression, creating a tactile and cinematic pacing without hijacking native scroll behavior.',
    points: [
      {
        title: 'Scroll-Linked Transitions',
        description: 'GSAP ScrollTrigger drives seamless section-by-section reveals tied directly to user scrolling.',
      },
      {
        title: 'Smooth Section Reveals',
        description: 'Text elements and product cards utilize hardware-accelerated transforms to enter the viewport without jank.',
      },
      {
        title: 'Product-Focused Motion',
        description: 'Animations keep the central product pack and cone locked in visual focus throughout the transition flow.',
      },
      {
        title: 'Responsive Motion Behavior',
        description: 'Scroll choreography dynamically adapts to desktop, tablet, and mobile viewport constraints.',
      },
    ],
    visualCrop: '/assets/case-studies/boo/boo-hero.webp',
  },

  process: {
    marker: '07 / PROCESS',
    heading: 'From Visual Idea\nto Interactive Experience.',
    phases: [
      {
        number: '01',
        title: 'DIRECTION',
        description: 'Dark, bold product-first visual concept.',
      },
      {
        number: '02',
        title: 'STRUCTURE',
        description: 'Responsive sections and content hierarchy.',
      },
      {
        number: '03',
        title: 'MOTION',
        description: 'Scroll interaction and visual transitions.',
      },
      {
        number: '04',
        title: 'POLISH',
        description: 'Performance, responsive behavior and production refinement.',
      },
    ],
  },

  challenges: {
    marker: '08 / CHALLENGES',
    heading: 'Making Heavy Visuals\nFeel Smooth.',
    items: [
      {
        challenge: 'iPhone Safari Scroll Video Initialization',
        happened:
          'iOS Safari power management and autoplay security policies prevented smooth video seeking during scroll-scrub gestures on mobile.',
        solution:
          'Implemented inline playback attributes, explicit loadeddata/canplay readiness listeners, and graceful poster fallbacks to ensure instant responsiveness.',
        result:
          'Seamless scroll scrubbing and zero-delay visual initialization across iOS and mobile devices.',
      },
      {
        challenge: 'Heavy Video Asset Payloads',
        happened:
          'Initial uncompressed media assets added excessive payload weight, causing delayed page loads and potential mobile bandwidth strain.',
        solution:
          'Re-encoded the hero sequence into an optimized H.264 stream (boo-scroll-ios.mp4) and removed redundant heavy video assets from the build pipeline.',
        result:
          'Substantial asset footprint reduction and rapid First Contentful Paint without sacrificing visual fidelity.',
      },
      {
        challenge: 'High-Density Scroll Scrub Synchronization',
        happened:
          'Triggering frequent layout updates during rapid user scrolling caused micro-stuttering on lower-powered GPUs.',
        solution:
          'Constrained all animated properties to GPU-promoted transforms and opacity, leveraging GSAP scrub smoothing to decouple scroll velocity from rendering frame rate.',
        result:
          'Fluid 60fps scroll transitions and responsive visual feedback across desktop and mobile screens.',
      },
      {
        challenge: 'Mobile Viewport Scaling & Text Fit',
        happened:
          'Oversized editorial headlines and multi-column product specs risked clipping or horizontal overflow on narrow mobile screens.',
        solution:
          'Employed fluid clamp() typography, responsive grid auto-fitting, and custom touch margins.',
        result:
          'Consistent aesthetic presentation from 390px mobile screens to 4K displays with zero horizontal overflow.',
      },
    ],
  },

  learnings: {
    marker: '09 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Balancing cinematic visuals with real-world performance requires ruthless asset optimization.',
      'Scroll-driven interfaces demand careful attention to browser rendering lifecycles and hardware acceleration.',
      'Mobile testing on real devices—particularly iOS Safari—reveals edge cases desktop emulators easily overlook.',
      'High-contrast dark design works best when negative space and typography are treated with editorial precision.',
    ],
  },

  techStack: {
    marker: '10 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'React 19', role: 'Component Architecture & State' },
      { name: 'Vite', role: 'Next-Generation Build Tooling' },
      { name: 'Tailwind CSS v4', role: 'Utility-First Styling System' },
      { name: 'GSAP', role: 'High-Performance Animation Core' },
      { name: 'ScrollTrigger', role: 'Scroll-Linked Interactions' },
      { name: 'Lucide React', role: 'Accessible Iconography' },
    ],
  },

  cta: {
    headline: 'TASTE\nTHE\nDARK.',
    description: 'Explore the live BOO! Ice Cream website or inspect the source code on GitHub.',
    primaryBtn: { text: 'Visit BOO! →', url: 'https://boo-icecream.vercel.app/' },
    secondaryBtn: { text: 'View Source Code ↗', url: 'https://github.com/Abhioswald/boo-icecream' },
  },

  nextProject: {
    marker: 'NEXT PROJECT',
    title: 'Gajanand Vada Pav',
    description: 'A Gujarati-inspired restaurant experience built around bold food visuals and local identity.',
    image: '/assets/projects/optimized/gajanand.webp',
    targetUrl: '/#projects',
  },
};
