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
    targetUrl: '/projects/gajanand',
  },
};

export const gajanandCaseStudyData = {
  slug: 'gajanand',
  number: '02',
  title: 'Gajanand Vada Pav',
  tagline: 'ગુજરાતનો સ્વાદ. દરેક બાઇટમાં.',
  eyebrow: '02 / PROJECT',
  gujaratiTitle: 'ગજાનંદ',
  description:
    'A Gujarati-inspired restaurant experience built around bold food visuals, local identity and warm cinematic storytelling.',
  liveUrl: 'https://gajanand-six.vercel.app/',
  githubUrl: 'https://github.com/Abhioswald/gajanand',
  mainImage: '/assets/case-studies/gajanand/gajanand-hero.webp',
  heroImage: '/assets/case-studies/gajanand/gajanand-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Restaurant Website / Landing Experience' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'React 19 · Vite 8 · Tailwind CSS v4 · GSAP · ScrollTrigger' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'More Than Just Vada Pav.',
    paragraphs: [
      'Gajanand Vada Pav brings the authentic street flavor and cultural pride of Gujarat into a rich, modern digital experience.',
      'The site celebrates regional food culture—combining Gujarati typography, tactile street-food atmosphere, warm saffron tones, and responsive modern frontend craftsmanship.',
    ],
    featureCards: [
      {
        title: 'LOCAL IDENTITY',
        description: 'Rooted in Gujarati culture, regional language and authentic street heritage.',
      },
      {
        title: 'FOOD FOCUS',
        description: 'Vada pav remains the visual center of the experience with crisp, mouthwatering detail.',
      },
      {
        title: 'CINEMATIC STORYTELLING',
        description: 'Large food imagery, warm layouts and scroll pacing create a memorable flow.',
      },
      {
        title: 'RESPONSIVE EXPERIENCE',
        description: 'The design adapts fluidly across desktop, tablet and compact mobile viewports.',
      },
    ],
  },

  experience: {
    marker: '03 / EXPERIENCE',
    heading: 'The Full Experience',
    description:
      'The complete website journey is structured as a continuous vertical showcase—flowing seamlessly from the atmospheric Gujarati hero to origin stories from Petlad, exploded ingredient anatomy, order showcase, and regional location map.',
    fullImage: '/assets/case-studies/gajanand/gajanand-full.webp',
    keyMoments: [
      'ગજાનંદ • ગુજરાતનો સ્વાદ',
      'પેટલાદ વારસાગાથા (HERITAGE STORY)',
      'સ્વાદની અસલી ઓળખ (INGREDIENTS)',
      'ગરમાગરમ ઓર્ડર (VADA PAV SHOWCASE)',
      'આણંદ & પેટલાદ (LOCAL IDENTITY & LOCATIONS)',
      'ગુજરાતી સ્વાદ પરંપરા (CLOSING CTA)',
    ],
  },

  visualLanguage: {
    marker: '04 / VISUAL LANGUAGE',
    heading: 'Bold Flavors. Local Identity.',
    description:
      'Gajanand pairs warm culinary earth tones with authentic Gujarati editorial typography and rich food close-ups, creating a distinctly regional yet sophisticated digital brand presence.',
    blocks: [
      {
        number: '01',
        name: 'TYPOGRAPHY',
        description: 'Gujarati-led visual identity featuring Noto Serif & Noto Sans Gujarati scripts.',
        accent: '#f28b18',
        image: '/assets/case-studies/gajanand/gajanand-story.webp',
        alt: 'Gujarati typography and brand story layout from the real Gajanand website',
      },
      {
        number: '02',
        name: 'COLOR',
        description: 'Warm brown, cream and saffron/orange evoke street stall warmth and clay hearths.',
        accent: '#ff9b22',
        image: '/assets/case-studies/gajanand/gajanand-locations.webp',
        alt: 'Warm amber, brown and cream palette in Gajanand location showcase',
      },
      {
        number: '03',
        name: 'FOOD',
        description: 'Large product imagery remains the visual focus with crisp details and rich textures.',
        accent: '#e8750c',
        image: '/assets/case-studies/gajanand/gajanand-vadapav.webp',
        alt: 'Rich vada pav photography with spicy garlic crumble and mint chutney',
      },
    ],
  },

  localIdentity: {
    marker: '06 / IDENTITY',
    heading: 'Made for Gujarat.',
    description:
      'Unlike generic restaurant templates, Gajanand is deeply anchored in Charotar street food heritage—originating from Petlad and expanding into Anand with genuine Gujarati cultural pride.',
    features: [
      {
        label: 'પેટલાદ (PETLAD)',
        tag: 'મૂળ સ્થાન · ROOTS',
        detail:
          'The historic starting point of Gajanand taste, preserving traditional street-side recipes and authentic spice blends.',
      },
      {
        label: 'આણંદ (ANAND)',
        tag: 'કેન્દ્ર · HUB',
        detail:
          'The vibrant culinary center bringing freshly fried vada pav, toasted soft pav, and sharp garlic chutneys to everyday food lovers.',
      },
      {
        label: 'અસલી દેશી સ્વાદ',
        tag: 'AUTHENTIC RECIPE',
        detail:
          'Slow-simmered spiced potato filling, crunchy gram-flour coating, and fiery dry garlic chutney crafted with local pride.',
      },
      {
        label: 'સ્થાનિક ઓળખ',
        tag: 'REGIONAL PRIDE',
        detail:
          'Illustrated Gujarat geography and authentic Gujarati signage that speak directly to local culture without awkward translation.',
      },
    ],
    image: '/assets/case-studies/gajanand/gajanand-locations.webp',
    alt: 'Gajanand Gujarat locations map and authentic stall in Anand and Petlad',
  },

  moments: {
    marker: '05 / WEBSITE MOMENTS',
    heading: 'Built Around\nGujarati Flavor.',
    description:
      'Real screenshot crops demonstrate how each section carries forward the warm, authentic street atmosphere and product narrative.',
    items: [
      {
        id: 'A',
        title: 'Hero / ગુજરાતનો સ્વાદ. દરેક બાઇટમાં.',
        tag: '01 // HERO',
        image: '/assets/case-studies/gajanand/gajanand-hero.webp',
        alt: 'Hero section with steaming Vada Pav and Gujarati wordmark',
      },
      {
        id: 'B',
        title: 'Brand Story / પેટલાદની ધરોહર',
        tag: '02 // HERITAGE',
        image: '/assets/case-studies/gajanand/gajanand-story.webp',
        alt: 'Brand Story section highlighting Petlad street stall roots',
      },
      {
        id: 'C',
        title: 'Vada Pav Showcase / હવે તમારા સુધી',
        tag: '03 // PRODUCT',
        image: '/assets/case-studies/gajanand/gajanand-vadapav.webp',
        alt: 'High-contrast Vada Pav showcase with garlic crumble and chutney',
      },
      {
        id: 'D',
        title: 'Menu / સ્વાદની અસલી ઓળખ (Anatomy)',
        tag: '04 // INGREDIENTS',
        image: '/assets/case-studies/gajanand/gajanand-menu.webp',
        alt: 'Exploded ingredients anatomy highlighting pav, vada, chutney and masala',
      },
      {
        id: 'E',
        title: 'Locations / આણંદ & પેટલાદ',
        tag: '05 // LOCATIONS',
        image: '/assets/case-studies/gajanand/gajanand-locations.webp',
        alt: 'Gujarat map illustration and street food stall atmosphere',
      },
      {
        id: 'F',
        title: 'Final CTA / ગુજરાતનો સ્વાદ',
        tag: '06 // FINALE',
        image: '/assets/case-studies/gajanand/gajanand-final-cta.webp',
        alt: 'Final conversion and contact footer with traditional tagline',
      },
    ],
  },

  process: {
    marker: '07 / PROCESS',
    heading: 'From Flavor\nto Interface.',
    phases: [
      {
        number: '01',
        title: 'DIRECTION',
        description: 'Gujarati-inspired restaurant identity anchored in warm tones and regional food culture.',
      },
      {
        number: '02',
        title: 'STRUCTURE',
        description: 'Responsive content hierarchy leading from sensory hero to ingredients and locations.',
      },
      {
        number: '03',
        title: 'DEVELOPMENT',
        description: 'Interactive sections, GSAP ScrollTrigger reveals and lightweight video choreography.',
      },
      {
        number: '04',
        title: 'POLISH',
        description: 'Responsive refinement, mobile viewport tuning, cross-browser testing and performance.',
      },
    ],
  },

  motion: {
    marker: '08 / MOTION',
    heading: 'Food in Motion.',
    description:
      'Animations are purposeful and restrained—relying on GSAP ScrollTrigger to coordinate smooth reveals, scroll-driven visual choreography, and micro-interactions without disrupting natural native scrolling.',
    points: [
      {
        title: 'Section-by-Section Reveals',
        description:
          'GSAP ScrollTrigger drives subtle staggered reveals for typography, value badges, and cards as users scroll.',
      },
      {
        title: 'Scroll-Driven Visual Movement',
        description:
          'Parallax translations on desktop give food imagery and graphic badges depth without layout jitter.',
      },
      {
        title: 'Ingredient Anatomy Choreography',
        description:
          'Exploded vada pav layers animate smoothly into position, illustrating each culinary component clearly.',
      },
      {
        title: 'Micro-Interactions & Call to Action',
        description:
          'Interactive buttons feature fluid scale, gradient shifts, and directional arrow transitions on hover and tap.',
      },
      {
        title: 'Location & Map Animation',
        description:
          'Regional location tags and map markers gently pulse and highlight Anand and Petlad upon entering the viewport.',
      },
    ],
    visualCrop: '/assets/case-studies/gajanand/gajanand-menu.webp',
  },

  challenges: {
    marker: '09 / CHALLENGES',
    heading: 'Keeping It\nRich & Responsive.',
    items: [
      {
        challenge: 'iPhone Safari Hero Video Playback & Decoder Initialization',
        happened:
          'iOS WebKit enforces strict power and user-gesture policies on inline video playback, causing scroll-scrubbed media to remain blank or freeze on mobile Safari.',
        solution:
          'Engineered programmatic properties (muted, playsInline, defaultMuted), added a one-time touch-unlock handler for the WebKit decoder, and implemented a high-resolution poster fallback.',
        result:
          'Instant, reliable hero video initialization and seamless visual playback across iPhone Safari and all modern mobile browsers.',
      },
      {
        challenge: 'Large Food Imagery & Media Payloads',
        happened:
          'Steaming hero video clips and rich, uncompressed food photography risked high data transfer costs and sluggish initial paint times.',
        solution:
          'Re-encoded the video sequence into an optimized H.264 stream (gajanand-hero-final.mp4) under 2.1MB, converted all photographic assets to modern WebP, and implemented eager LCP preloading alongside lazy-loading for off-screen sections.',
        result:
          'Dramatically reduced bundle footprint, sub-second visual paint, and crisp image rendering across high-DPI screens.',
      },
      {
        challenge: 'Exploded Ingredients Presentation Across Viewports',
        happened:
          'The intricate 6-part exploded ingredients anatomy with annotations fit wide desktop monitors gracefully but caused visual congestion and text clipping on narrow mobile screens.',
        solution:
          'Created a responsive dual layout: a detailed multi-callout graphic on desktop, and a streamlined vertical ingredient stack with clear typography on mobile viewports.',
        result:
          'Flawless legibility and visual delight from 390px mobile screens to ultra-wide desktop monitors with zero horizontal overflow.',
      },
      {
        challenge: 'Gujarati Typography & Regional Cultural Nuance',
        happened:
          'Gujarati fonts (Noto Serif & Noto Sans Gujarati) have distinct vertical conjuncts and line-height requirements that easily clip when mixed with default Latin line-heights.',
        solution:
          'Calibrated fluid font scaling with clamp(), applied generous line-heights specifically for Gujarati script blocks, and verified text rendering across iOS, Android, and Windows systems.',
        result:
          'Authentic, culturally respectful Gujarati typography that renders crisp and legible without layout shifts or text cutoffs.',
      },
    ],
  },

  learnings: {
    marker: '10 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Regional identity and modern web aesthetics are not opposites—Gujarati culture can look intensely modern, cinematic, and premium.',
      'Mobile optimization for video and rich photography requires deep familiarity with browser-specific media lifecycles like WebKit decoder quirks.',
      'Complex graphics like exploded ingredient anatomies must be designed with responsive adaptation in mind, not just shrunk.',
      'GSAP and ScrollTrigger provide the greatest impact when restrained—guiding attention rather than overwhelming the content.',
      'Testing on constrained devices and mobile browsers is essential to validate that performance matches the visual ambition.',
    ],
  },

  techStack: {
    marker: '11 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'React 19', role: 'Component Architecture & State' },
      { name: 'Vite 8', role: 'Next-Generation Build Tooling' },
      { name: 'Tailwind CSS v4', role: 'Utility-First Styling System' },
      { name: 'GSAP 3', role: 'High-Performance Animation Core' },
      { name: 'ScrollTrigger', role: 'Scroll-Linked Interactions' },
      { name: 'Google Fonts', role: 'Noto Serif & Noto Sans Gujarati' },
    ],
  },

  cta: {
    headline: 'ગુજરાતનો સ્વાદ.',
    subHeadline: 'Taste Gujarat.',
    description: 'Explore the live Gajanand Vada Pav website or inspect the source code on GitHub.',
    primaryBtn: { text: 'Visit Gajanand ↗', url: 'https://gajanand-six.vercel.app/' },
    secondaryBtn: { text: 'View Source Code ↗', url: 'https://github.com/Abhioswald/gajanand' },
  },

  nextProject: {
    marker: 'NEXT PROJECT',
    title: 'BOO! Ice Cream',
    description:
      'A dark product experience built around bold visual storytelling, immersive scrolling and a distinctive blackcurrant identity.',
    image: '/assets/projects/optimized/boo.webp',
    targetUrl: '/projects/boo',
  },
};

