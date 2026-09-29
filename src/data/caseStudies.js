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
      'The complete landing experience is structured as a continuous vertical showcase—progressing seamlessly from the cinematic opening to origin stories, berry splash dynamics, tactile waffle cone details, and the closing call to action.',
    fullImage: '/assets/case-studies/boo/boo-full.webp',
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
    title: 'Azura Perfume',
    description:
      'A luxury fragrance website shaped around refined storytelling, distinctive tiger-inspired identity and elegant product presentation.',
    image: '/assets/projects/optimized/azura.webp',
    targetUrl: '/projects/azura',
  },
};

export const azuraCaseStudyData = {
  slug: 'azura',
  number: '03',
  title: 'Azura Perfume',
  tagline: 'WILD ESSENCE. REFINED.',
  eyebrow: '03 / PROJECT',
  secondaryWord: 'Perfume',
  description:
    'A luxury fragrance website shaped around refined storytelling, distinctive tiger-inspired identity and elegant product presentation.',
  caseStudyUrl: '/projects/azura',
  liveUrl: '',
  githubUrl: '',
  mainImage: '/assets/projects/optimized/azura.webp',
  heroImage: '/assets/case-studies/azura/azura-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Luxury Product Website' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'HTML5 · CSS3 · JavaScript · LocalStorage' },
    { label: 'YEAR', value: '2026' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'More Than Just a Fragrance.',
    highlight: 'a Fragrance.',
    paragraphs: [
      'Azura combines premium fragrance presentation with nature-inspired storytelling, deep teal surfaces, elegant typography and a distinctive tiger identity.',
      'The experience guides visitors through olfactory notes, material craftsmanship, an 8-fragrance collection wardrobe, and editorial review cards.',
    ],
    featureCards: [
      {
        title: 'DISTINCT IDENTITY',
        description: 'Tiger imagery and refined typography create a memorable visual language.',
      },
      {
        title: 'LUXURY EXPERIENCE',
        description: 'Premium spacing, restrained color and editorial composition.',
      },
      {
        title: 'PRODUCT FOCUS',
        description: 'The fragrance bottle remains central to the experience.',
      },
      {
        title: 'RESPONSIVE DESIGN',
        description: 'The experience adapts seamlessly across devices.',
      },
    ],
  },

  experience: {
    marker: '03 / EXPERIENCE',
    heading: 'The Full Experience.',
    description:
      'The complete digital experience is presented as a measured, atmospheric vertical showcase—flowing from the untamed hero reveal to philosophy, signature ingredient notes, collection catalog, French craftsmanship atelier, and editorial impressions.',
    fullImage: '/assets/case-studies/azura/azura-full.webp',
    keyMoments: [
      '01 THE UNTAMED COLLECTION — WILD ESSENCE',
      '02 THE PHILOSOPHY — INSTINCT & DISCIPLINE',
      '03 FEATURED FRAGRANCE — A QUIET FORCE',
      '04 INGREDIENT STORY — THREE MATERIALS',
      '05 THE AZURA COLLECTION — WARDROBE OF MOODS',
      '06 CRAFTED WITH INTENTION — FROM RAW TO SIGNATURE',
      '07 WORN, REMEMBERED — EDITORIAL IMPRESSIONS',
      '08 THE PRIVATE LIST — ATELIER INVITATIONS',
    ],
  },

  visualLanguage: {
    marker: '04 / VISUAL LANGUAGE',
    heading: 'Wild.\nElegant.\nDistinctive.',
    description:
      "Azura's aesthetic marries the raw majesty of untamed nature with high-perfumery precision, balancing deep oceanic teals with warm ivory canvas, muted metallic gold, and botanical illustration.",
    blocks: [
      {
        number: '01',
        name: 'TIGER',
        subtitle: 'Nature-inspired visual identity.',
        accent: '#d8b46b',
        image: '/assets/case-studies/azura/azura-instinct.webp',
        alt: 'Azura blue leopard emblem and philosophy presentation',
      },
      {
        number: '02',
        name: 'COLOR',
        subtitle: 'Deep teal, cream and muted gold.',
        accent: '#083b40',
        image: '/assets/case-studies/azura/azura-materials.webp',
        alt: 'Azura ivory ingredient showcase with metallic gold and deep teal typography',
      },
      {
        number: '03',
        name: 'PRODUCT',
        subtitle: 'Perfume bottle remains the focal object.',
        accent: '#b86d42',
        image: '/assets/case-studies/azura/azura-wild-essence.webp',
        alt: 'Azura Wild Essence perfume bottle on pedestal with orbital rings',
      },
    ],
  },

  moments: {
    marker: '05 / WEBSITE MOMENTS',
    heading: 'A Story Told\nin Details.',
    description:
      'Every touchpoint on the Azura website is shaped with deliberate restraint—where editorial hierarchy, subtle micro-motion, and tangible product details replace conventional e-commerce noise.',
    items: [
      {
        key: 'A',
        title: 'Wild Essence Opening',
        category: 'HERO PRESENTATION',
        image: '/assets/case-studies/azura/azura-hero.webp',
        caption: 'High-contrast typography paired with the luminous perfume bottle and tiger portrait.',
      },
      {
        key: 'B',
        title: 'Instinct Gives It Life',
        category: 'PHILOSOPHY & VISION',
        image: '/assets/case-studies/azura/azura-instinct.webp',
        caption: 'Editorial multi-column breakdown exploring emotion, material truth and quiet distinction.',
      },
      {
        key: 'C',
        title: 'A Quiet Force',
        category: 'PRODUCT SPECIFICATION',
        image: '/assets/case-studies/azura/azura-wild-essence.webp',
        caption: 'Tactile product staging with orbital rings, notes breakdown and direct bag interaction.',
      },
      {
        key: 'D',
        title: 'Three Materials',
        category: 'SENSORY EVOLUTION',
        image: '/assets/case-studies/azura/azura-materials.webp',
        caption: 'Time-evolving ingredient timeline transitioning to an ivory editorial background.',
      },
      {
        key: 'E',
        title: 'A Wardrobe of Moods',
        category: 'CURATED COLLECTION',
        image: '/assets/case-studies/azura/azura-collection.webp',
        caption: 'Interactive multi-fragrance carousel highlighting Wild Essence, Oceanic, Nocturne and Lumière.',
      },
      {
        key: 'F',
        title: 'Raw to Lasting Signature',
        category: 'ATELIER CRAFTSMANSHIP',
        image: '/assets/case-studies/azura/azura-story.webp',
        caption: 'Grasse formulation narrative with verified 18-month timeline and composition metrics.',
      },
      {
        key: 'G',
        title: 'Worn, Remembered',
        category: 'EDITORIAL IMPRESSIONS',
        image: '/assets/case-studies/azura/azura-testimonial.webp',
        caption: 'Understated frosted-glass review cards celebrating personal olfactory memory.',
      },
      {
        key: 'H',
        title: 'The Private List',
        category: 'ENGAGEMENT & FOOTER',
        image: '/assets/case-studies/azura/azura-final.webp',
        caption: 'Considered private list access accompanied by the iconic tiger artwork and customer care navigation.',
      },
    ],
  },

  materials: {
    marker: '06 / MATERIALS',
    heading: 'Three Materials.\nOne Evolving Memory.',
    image: '/assets/case-studies/azura/azura-materials.webp',
    description:
      'Wild Essence is formulated around a three-tier olfactory progression where raw elements evolve on the skin over twelve hours.',
    stages: [
      {
        step: '01',
        phase: 'TOP NOTES (0–20 MIN)',
        name: 'Bergamot & Sea Salt',
        notes: ['Bergamot', 'Sea Salt', 'Pink Pepper'],
        detail:
          'A bright mineral opening with fresh citrus energy and a cool, windswept marine character that awakens the senses.',
      },
      {
        step: '02',
        phase: 'HEART NOTES (20 MIN–4 HRS)',
        name: 'Midnight Jasmine',
        notes: ['Midnight Jasmine', 'Mineral Accord', 'Solar Notes'],
        detail:
          'A luminous, intoxicating floral core that tempers the opening salinity into a refined, radiant aura.',
      },
      {
        step: '03',
        phase: 'BASE NOTES (4–12+ HRS)',
        name: 'Dry Cedarwood & Amber',
        notes: ['Dry Cedarwood', 'Warm Amber', 'Skin Musk'],
        detail:
          'A grounding foundation of aged woods and amber that locks onto the wearer with understated warmth and enduring presence.',
      },
    ],
  },

  collection: {
    marker: '07 / COLLECTION',
    heading: 'A Wardrobe\nof Moods.',
    image: '/assets/case-studies/azura/azura-collection.webp',
    description:
      'Eight distinct signatures created for different hours, seasons and states of mind—united by clarity, depth and a restrained sense of luxury.',
    items: [
      {
        number: '01',
        name: 'Wild Essence',
        price: '$149',
        badge: 'SIGNATURE',
        family: 'Woody · Mineral · Amber',
        notes: 'Sea salt · Jasmine · Cedarwood',
      },
      {
        number: '02',
        name: 'Oceanic',
        price: '$129',
        badge: 'NEW',
        family: 'Fresh · Aquatic',
        notes: 'Marine air · Bergamot · Driftwood',
      },
      {
        number: '03',
        name: 'Nocturne',
        price: '$159',
        badge: 'BESTSELLER',
        family: 'Leather · Oud',
        notes: 'Saffron · Leather · Smoked oud',
      },
      {
        number: '04',
        name: 'Lumière',
        price: '$139',
        badge: 'LUMINOUS',
        family: 'Floral · Vanilla',
        notes: 'Neroli · White florals · Vanilla',
      },
    ],
  },

  story: {
    marker: '08 / STORY',
    heading: 'From Raw Material\nto Lasting Signature.',
    image: '/assets/case-studies/azura/azura-story.webp',
    description:
      'Every Azura fragrance moves through a measured process of sourcing, composing, resting and refining in Grasse, France. Nothing is rushed; every adjustment must earn its place.',
    pillars: [
      {
        step: '01',
        title: 'Source',
        subtitle: 'Materials with a clear identity.',
        detail:
          'Botanicals, woods and resins are selected for texture, radiance and evolution on skin with complete origin traceability.',
      },
      {
        step: '02',
        title: 'Compose',
        subtitle: 'Contrast creates emotion.',
        detail:
          'Bright and shadowed materials are balanced until the composition feels alive rather than conventionally arranged.',
      },
      {
        step: '03',
        title: 'Rest & Refine',
        subtitle: 'Time reveals what technique cannot.',
        detail:
          'Each concentrate matures through extended maceration before final evaluation, allowing rough edges to soften.',
      },
    ],
    stats: [
      { value: '18', label: 'Months from first brief to final formula' },
      { value: '42', label: 'Evaluations for every signature composition' },
      { value: '01', label: 'Final formula selected without compromise' },
    ],
  },

  process: {
    marker: '09 / PROCESS',
    heading: 'From Concept\nto Experience.',
    description:
      'Developing Azura required translating high-perfumery traditions into an interactive digital medium that feels physical, atmospheric, and unhurried.',
    phases: [
      {
        phase: '01',
        title: 'DIRECTION',
        detail:
          'Establishing the luxury editorial identity—combining rich dark teal, warm ivory canvas, restrained gold accents and classic serif typography.',
      },
      {
        phase: '02',
        title: 'STRUCTURE',
        detail:
          'Designing responsive sections that balance dramatic sensory imagery with structured ingredient timelines and catalog navigation.',
      },
      {
        phase: '03',
        title: 'DEVELOPMENT',
        detail:
          'Engineering interactive product storytelling, olfactory note progressions, and client-side consultation without heavy third-party framework dependencies.',
      },
      {
        phase: '04',
        title: 'POLISH',
        detail:
          'Fine-tuning responsive typography, optimizing WebP image assets, adding Save-Data video respect, and perfecting fluid mobile touch interactions.',
      },
    ],
  },

  motion: {
    marker: '10 / MOTION',
    heading: 'Motion With\nRestraint.',
    description:
      'Unlike fast-paced digital products, luxury perfume requires pacing that breathes. Azura employs calm, deliberate transitions that mirror the slow diffusion of fragrance notes.',
    traits: [
      {
        name: 'Measured Pacing',
        detail: 'Subtle 0.8–1.1s cubic-bezier reveals replace snappy consumer-app bounces.',
      },
      {
        name: 'Atmospheric Video Control',
        detail: 'A gentle background ambient film with custom pause controls and Save-Data awareness.',
      },
      {
        name: 'Sensory Progression',
        detail: 'Note evolution sliders and fragrance card transitions guide focus one detail at a time.',
      },
      {
        name: 'Full Accessibility',
        detail: 'Respects prefers-reduced-motion across all transitions while preserving clean typographic hierarchy.',
      },
    ],
  },

  challenges: {
    marker: '11 / CHALLENGES',
    heading: 'Luxury Without\nVisual Noise.',
    items: [
      {
        challenge: 'Maintaining Readability Over Rich Dark Visuals',
        whatHappened:
          'The rich dark-teal backgrounds and intricate tiger artwork risked obscuring critical editorial text and micro-labels.',
        solution:
          'Crafted precise opacity tiers and subtle radial vignettes, pairing high-contrast cream typography (#efe3c7) with restrained gold borders.',
        result:
          'Effortless editorial legibility while preserving the deep, mysterious atmosphere of the brand.',
      },
      {
        challenge: 'Multi-Step E-Commerce & Consultation Without a Backend',
        whatHappened:
          'The project required full shopping bag, wishlist, fragrance consultation and account flows without relying on server databases.',
        solution:
          'Engineered a unified vanilla JavaScript state layer backed by structured localStorage schemas and cross-component custom events (azura:cart-updated).',
        result:
          'Instantaneous client-side responsiveness with persistent cart quantities, wishlist state, and seamless page transitions.',
      },
      {
        challenge: 'Responsive Editorial Layouts & Media Performance',
        whatHappened:
          'Large high-resolution imagery and video backgrounds threatened mobile page speed and caused layout shifts on smaller viewports.',
        solution:
          'Implemented intrinsic image aspect ratios, WebP formats, async decoding, and network-aware media loading that disables autoplay on constrained connections.',
        result:
          'Zero layout shift (CLS), rapid paint times, and consistent luxury spacing from desktop down to 390px mobile screens.',
      },
    ],
  },

  learnings: {
    marker: '12 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Luxury web design is defined by what you omit—restraint in typography, pacing, and color creates far more authority than visual excess.',
      'Pure vanilla web technologies (HTML, CSS, modern ES6+) can deliver rich, responsive interactive experiences without the overhead of heavy JavaScript frameworks.',
      'Sensory storytelling in digital interfaces succeeds when visual structure mirrors the real-world product journey (top, heart, and base notes).',
      'True responsiveness in editorial layouts means redesigning spatial relationships for vertical mobile screens rather than simply shrinking desktop grids.',
    ],
  },

  techStack: {
    marker: '13 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'HTML5', role: 'Semantic Structure & Accessibility' },
      { name: 'CSS3', role: 'Custom Design System & CSS Grid' },
      { name: 'JavaScript (ES6+)', role: 'Interactive Engine & Custom Events' },
      { name: 'LocalStorage API', role: 'Client-Side Cart & Wishlist State' },
      { name: 'Responsive Media', role: 'Optimized WebP & Video Elements' },
      { name: 'Georgia Serif', role: 'Editorial Luxury Typography' },
    ],
  },

  cta: {
    headline: 'DISCOVER\nTHE WILD ESSENCE.',
    description:
      'A study in refined product storytelling, visual identity and interactive frontend design.',
    backText: '← Back to Projects',
    backUrl: '/#projects',
  },

  nextProject: {
    marker: 'NEXT PROJECT',
    title: 'The Weeknd',
    description:
      'A dark cinematic music experience built around dramatic typography, immersive imagery and atmospheric visual storytelling.',
    image: '/assets/case-studies/the-weeknd/weeknd-hero.webp',
    targetUrl: '/projects/the-weeknd',
  },
};

export const theWeekndCaseStudyData = {
  slug: 'the-weeknd',
  number: '04',
  title: 'The Weeknd',
  secondaryWord: 'Experience',
  tagline: 'HURRY UP TOMORROW · CINEMATIC ARCHIVE',
  eyebrow: '04 / PROJECT',
  description:
    'A dark cinematic music experience built around dramatic typography, immersive imagery and atmospheric visual storytelling.',
  liveUrl: '',
  githubUrl: '',
  mainImage: '/assets/projects/optimized/the-weeknd.webp',
  heroImage: '/assets/case-studies/the-weeknd/weeknd-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Concept Experience · Fan Tribute' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'HTML5 · CSS3 · Vanilla JS' },
    { label: 'YEAR', value: '2026' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'Music Beyond\nthe Screen.',
    paragraphs: [
      'An unofficial, self-directed conceptual tribute exploring a cinematic visual direction for music-focused web experiences.',
      'Inspired by the theatrical atmosphere of The Weeknd’s Hurry Up Tomorrow era, the interface treats each section as an independent visual chapter—balancing bold typography, red lighting, and atmospheric staging.',
    ],
    featureCards: [
      {
        title: 'CINEMATIC IDENTITY',
        description: 'Near-black surfaces and saturated crimson lighting establish an intense visual atmosphere.',
      },
      {
        title: 'ARTIST FOCUS',
        description: 'Portraiture, theatrical silhouettes and performance imagery remain the visual center.',
      },
      {
        title: 'EDITORIAL TYPOGRAPHY',
        description: 'Oversized display typography gives each section a dramatic, poster-like presence.',
      },
      {
        title: 'IMMERSIVE PACING',
        description: 'Expansive negative space and controlled visual reveals create cinematic rhythm.',
      },
    ],
  },

  experience: {
    marker: '03 / EXPERIENCE',
    heading: 'The Full\nExperience.',
    description:
      'The complete digital experience is structured as a continuous vertical showcase—progressing from dawn into fiery ascension, congregation rebirth, legacy sanctum, and transcendental afterlife.',
    fullImage: '/assets/case-studies/the-weeknd/weeknd-full-compressed.webp',
    chapters: [
      '01 Dawn / Hero',
      '02 Ascension',
      '03 Rebirth',
      '04 Legacy',
      '05 Afterlife',
      'Finale Outro',
    ],
  },

  ascension: {
    marker: '04 / ASCENSION',
    heading: 'Ascension.',
    subtitle: 'Rise Through the Fire.',
    description:
      'A monumental performance arena filled with fiery red lighting, smoke columns, and a reflective stage floor. Abel Tesfaye stands centered with open arms beneath an inferno sky.',
    manifesto:
      'I broke the silence. I lit the sky. Every scar became a signal. Every fall became fuel. Now I ascend. Higher than the dark. This is not the end. This is ASCENSION.',
    image: '/assets/case-studies/the-weeknd/weeknd-ascension.webp',
    stageImage: '/assets/case-studies/the-weeknd/weeknd-cinematic-stage.webp',
    badge: 'CHAPTER 02 · ASCENSION',
    details: [
      { label: 'ATMOSPHERE', value: 'Blazing inferno smoke & flame columns' },
      { label: 'PERSPECTIVE', value: 'Low-angle stage depth reflection' },
      { label: 'COMPOSITION', value: 'Isolated central performer with open silhouette' },
    ],
  },

  visualLanguage: {
    marker: '05 / VISUAL LANGUAGE',
    heading: 'Black.\nCrimson.\nCinema.',
    description:
      'Three core visual pillars define the project aesthetic, abandoning conventional bright web design in favor of visceral stage lighting and stark graphic contrast.',
    blocks: [
      {
        number: '01',
        name: 'CONTRAST',
        subtitle: 'Near-black surfaces with saturated red light.',
        detail:
          'Deep void tones (#020202, #050303) contrast with razor-sharp crimson beams and radiant smoke glows.',
        accent: '#d31520',
        image: '/assets/case-studies/the-weeknd/weeknd-red-portrait.webp',
        alt: 'High contrast red lighting on Abel portrait',
      },
      {
        number: '02',
        name: 'TYPOGRAPHY',
        subtitle: 'Oversized titles behave like poster graphics.',
        detail:
          'High-impact editorial display lettering creates monumentality, functioning as architectural elements within each scene.',
        accent: '#b80f18',
        image: '/assets/case-studies/the-weeknd/weeknd-hero.webp',
        alt: 'Oversized THE WEEKND red editorial headline',
      },
      {
        number: '03',
        name: 'ATMOSPHERE',
        subtitle: 'Smoke, silhouettes and stage imagery create depth.',
        detail:
          'Layered atmospheric haze, floating particles, and rim lighting give flat screens the physical depth of a stadium concert.',
        accent: '#ef1e2c',
        image: '/assets/case-studies/the-weeknd/weeknd-afterlife.webp',
        alt: 'Atmospheric light beam and temple columns in Afterlife',
      },
    ],
  },

  moments: {
    marker: '06 / WEBSITE MOMENTS',
    heading: 'Frames From\nthe Experience.',
    description:
      'An editorial mosaic capturing the shifting visual moods across chapters—from intimate close-ups to monumental stadium compositions.',
    items: [
      {
        key: 'A',
        title: 'Hurry Up Tomorrow',
        category: '01 HERO / DAWN',
        caption: 'Dramatic scarlet title lockup with dark portrait and atmospheric red haze.',
        image: '/assets/case-studies/the-weeknd/weeknd-hero.webp',
      },
      {
        key: 'B',
        title: 'Rise Through the Fire',
        category: '02 ASCENSION',
        caption: 'Theatrical arena staging with central silhouette rising through fire columns.',
        image: '/assets/case-studies/the-weeknd/weeknd-ascension.webp',
      },
      {
        key: 'C',
        title: 'The Transformation',
        category: '03 REBIRTH',
        caption: 'Masked red-robed congregation under an eclipse against a dystopian skyline.',
        image: '/assets/case-studies/the-weeknd/weeknd-crowd.webp',
      },
      {
        key: 'D',
        title: 'Legends Never Fade',
        category: '04 LEGACY',
        caption: 'Seated portrait in crimson blazer with swirling blue smoke and cathedral candles.',
        image: '/assets/case-studies/the-weeknd/weeknd-legacy.webp',
      },
      {
        key: 'E',
        title: 'Into the Light',
        category: '05 AFTERLIFE',
        caption: 'Temple architecture, celestial portal beam, and transcendental ritual ascent.',
        image: '/assets/case-studies/the-weeknd/weeknd-afterlife.webp',
      },
      {
        key: 'F',
        title: 'The Journey Continues',
        category: 'FINALE / OUTRO',
        caption: 'Orbital depth stars and minimal signature signoff in the infinite void.',
        image: '/assets/case-studies/the-weeknd/weeknd-final.webp',
      },
    ],
  },

  legacy: {
    marker: '07 / LEGACY',
    heading: 'Legacy.',
    subtitle: 'Legends Never Fade.',
    description:
      'Chapter 04 takes inspiration from classic editorial magazine spreads. Abel Tesfaye appears seated in a tailored red suit with dark sunglasses, enveloped in spiraling blue smoke that cuts against the deep crimson circular eclipse.',
    manifesto:
      'I came from the shadows. I built my empire in silence. This is not the end. This is what I leave behind. This is LEGACY.',
    image: '/assets/case-studies/the-weeknd/weeknd-legacy.webp',
    pillars: [
      {
        step: '01',
        title: 'CATHEDRAL LIGHTING',
        subtitle: 'Atmospheric Pillars',
        detail: 'Towering neo-gothic pillar silhouettes and warm candlelight flank the frame.',
      },
      {
        step: '02',
        title: 'COLOR DUALITY',
        subtitle: 'Cerulean & Crimson',
        detail: 'Cool blue cigarette smoke cutting across warm saturated crimson blazer fabric.',
      },
      {
        step: '03',
        title: 'CIRCULAR SANCTUM',
        subtitle: 'Architectural Authority',
        detail: 'Concentric eclipse rings framing the artist in quiet, commanding authority.',
      },
    ],
  },

  afterlife: {
    marker: '08 / AFTERLIFE',
    heading: 'Afterlife.',
    subtitle: 'The Other Side of the Void.',
    description:
      'The narrative culmination moves from earthly stadium flames into a celestial temple. A solitary vertical light beam pierces from the heavens onto a sun-wheel portal, as ritual figures reach upward toward an ascending silhouette.',
    manifesto:
      'I lived in the dark. I loved in the dark. I gave you my darkness. Now I walk into the light, not to be seen — but to be free. This is AFTERLIFE.',
    image: '/assets/case-studies/the-weeknd/weeknd-afterlife.webp',
    focalImage: '/assets/case-studies/the-weeknd/weeknd-final.webp',
  },

  motion: {
    marker: '09 / MOTION',
    heading: 'Built With\nAtmosphere.',
    description:
      'Grounded in the source architecture: pure CSS3 and native vanilla JavaScript coordinate multi-layer depth transitions and atmospheric visual shifts without third-party physics engines.',
    traits: [
      {
        name: 'Multi-Depth Parallax',
        detail:
          'Calculates viewport offsets on background layers, smoke planes, and character cutouts with native RAF loops.',
      },
      {
        name: 'Atmospheric Fog Drifts',
        detail:
          'CSS keyframe animations shift smoke and haze layers at differing speeds to simulate natural volume.',
      },
      {
        name: 'Transition Veil Curtain',
        detail:
          'Deep black-and-crimson gradient wipes mask hard section cuts, preserving continuous cinematic flow.',
      },
      {
        name: 'Master Journey Progress',
        detail:
          'Global hairline progress indicator and interactive rail tracking the viewer through all 5 chapters.',
      },
    ],
  },

  process: {
    marker: '10 / PROCESS',
    heading: 'From Mood\nto Experience.',
    description:
      'Translating the sensory drama of an album era into a responsive, performant digital destination.',
    phases: [
      {
        phase: 'PHASE 01',
        title: 'Visual Direction',
        detail:
          'Establishing near-black palettes, saturated crimson light tokens, and moody concert lighting aesthetics.',
      },
      {
        phase: 'PHASE 02',
        title: 'Chapter Structure',
        detail:
          'Architecting 5 monumental sticky scenes with expansive negative space and theatrical pacing.',
      },
      {
        phase: 'PHASE 03',
        title: 'Frontend Engineering',
        detail:
          'Developing vanilla JavaScript parallax layers, custom audio visualizer states, and preloader sequences.',
      },
      {
        phase: 'PHASE 04',
        title: 'Performance Polish',
        detail:
          'Fine-tuning WebP image weights, reducing mobile render noise, and calibrating high-contrast text legibility.',
      },
    ],
  },

  challenges: {
    marker: '11 / CHALLENGES',
    heading: 'Keeping Darkness\nReadable.',
    items: [
      {
        challenge: 'Maintaining Text Legibility Over High-Contrast Imagery',
        whatHappened:
          'Deep black backgrounds and blinding crimson light blooms caused text elements to either disappear or clash with underlying image layers.',
        solution:
          'Created dedicated atmospheric vignette layers and semi-opaque scrim backdrops, pairing warm white typography (#f1ede7) with subtle dark drop shadows.',
        result:
          'Flawless readability across all chapters without compromising the intense dark cinematic mood.',
      },
      {
        challenge: 'Oversized Typography Sizing on Constrained Viewports',
        whatHappened:
          'Gigantic display titles like "THE WEEKND" and "TRANSFORMATION" clipped or wrapped awkwardly on mobile screens.',
        solution:
          'Engineered responsive CSS clamp() formulas with dynamic viewport-relative units and negative margin compensations for letterspacing.',
        result:
          'Monumental poster presence on ultra-wide screens, scaling smoothly down to 390px mobile viewports with zero horizontal overflow.',
      },
      {
        challenge: 'Performance With Massive Multi-Layered Stage Scenes',
        whatHappened:
          'Each chapter loaded multiple full-screen layered PNGs (backgrounds, characters, smoke planes), straining mobile memory and initial load times.',
        solution:
          'Implemented prioritized asset loading—preloading only the hero and Chapter 02 while deferring remaining chapters via async loading and optimized WebP compression.',
        result:
          'Instant initial interactivity with silky-smooth frame rates even on lower-powered devices.',
      },
    ],
  },

  learnings: {
    marker: '12 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Negative space is a storytelling instrument—leaving vast black gaps between chapters builds anticipation and elevates each reveal to a theatrical event.',
      'A strict two-tone color discipline (near-black and crimson) yields far higher visual impact and mood consistency than complex multi-hue schemes.',
      'Vanilla web standards (HTML5, modern CSS3, ES6+) can create deeply immersive parallax and atmospheric depth without bloated external frameworks.',
      'Designing for an artist universe demands respecting the emotional tone—every rule, badge, and transition must serve the cinematic narrative.',
    ],
  },

  techStack: {
    marker: '13 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'HTML5', role: 'Semantic Chapter Architecture & Accessibility' },
      { name: 'CSS3', role: 'Custom Lighting Tokens & Depth Layers' },
      { name: 'Vanilla JavaScript', role: 'Parallax Engine, Progress Rail & State' },
      { name: 'WebP Media Pipeline', role: 'Optimized Stage Assets & Frame Buffers' },
      { name: 'Georgia Serif', role: 'Editorial Film-Poster Typography' },
      { name: 'Responsive Layouts', role: 'Adaptive Mobile Viewports Down to 390px' },
    ],
  },

  cta: {
    headline: 'THE JOURNEY\nCONTINUES.',
    description:
      'A cinematic exploration of music, typography, atmosphere and interactive visual storytelling.',
    backText: 'Explore More Work',
    backUrl: '/#projects',
    image: '/assets/case-studies/the-weeknd/weeknd-final.webp',
  },

  nextProject: {
    marker: 'NEXT PROJECT',
    title: 'Cakee',
    description:
      'A bright cake and dessert shopping interface focused on product discovery, visual hierarchy and an inviting e-commerce experience.',
    image: '/assets/projects/optimized/cakee.webp',
    targetUrl: '/projects/cakee',
  },
};

export const cakeeCaseStudyData = {
  slug: 'cakee',
  number: '05',
  title: 'Cakee',
  tagline: 'MADE WITH LOVE, JUST FOR YOU.',
  eyebrow: '05 / PROJECT',
  description:
    'A bright bakery and dessert shopping experience built around playful product discovery, soft visual storytelling and celebration-focused design.',
  liveUrl: '',
  githubUrl: '',
  caseStudyUrl: '/projects/cakee',
  mainImage: '/assets/projects/optimized/cakee.webp',
  heroImage: '/assets/case-studies/cakee/cakee-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Bakery / E-commerce Experience' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'HTML5 · CSS3 · Vanilla JavaScript' },
    { label: 'YEAR', value: '2026' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'Designed for Sweet Moments.',
    paragraphs: [
      'Cakee uses soft pink tones, dessert photography, rounded components, product cards and celebration-focused content to create a friendly shopping experience.',
      'Structured as a comprehensive 12-page storefront, the platform pairs intuitive product exploration with browser-local cart persistence, custom cake builders and celebration gifting workflows.',
    ],
    featureCards: [
      {
        title: 'PRODUCT DISCOVERY',
        description: 'Cake cards and categories help users explore the catalog with clear pricing, ratings and dietary tags.',
      },
      {
        title: 'CELEBRATION FOCUS',
        description: 'Content is organized around cakes, gifting and occasions to simplify celebratory ordering.',
      },
      {
        title: 'SOFT VISUAL SYSTEM',
        description: 'Pink surfaces, rounded cards and dessert photography create a warm, friendly bakery mood.',
      },
      {
        title: 'RESPONSIVE EXPERIENCE',
        description: 'The layout adapts smoothly across screen sizes from desktop displays down to 390px mobile viewports.',
      },
    ],
  },

  experience: {
    marker: '03 / EXPERIENCE',
    heading: 'The Full\nExperience.',
    description:
      'The complete Cakee website continuous showcase—progressing smoothly from the celebratory hero cupcake to product categories, bestsellers, custom creations, thoughtful gifting, café atmosphere, brand values, customer reviews and interactive FAQ.',
    fullImage: '/assets/case-studies/cakee/cakee-full.webp',
    keyMoments: [
      'Made with Love, Just for You!',
      'Something Sweet for Every Moment',
      'Most Loved, Best Selling Cakes',
      'Dream It, We Bake It',
      'Wrap Their Day in Something Sweet',
      'Smiles That Make Our Day',
      'Step Into a World of Sweetness',
      'Baked from the Heart',
      'Sweet Reads & Baking Inspiration',
      'Frequently Asked Questions',
    ],
  },

  products: {
    marker: '04 / PRODUCTS',
    heading: 'Something Sweet\nfor Every Moment.',
    description:
      'An inviting category navigation system grouping artisanal baked goods into clear dessert collections—cupcakes, chocolate cakes, fruit cakes, cheesecakes, custom cakes, and macarons.',
    image: '/assets/case-studies/cakee/cakee-moments.webp',
    categories: [
      { name: 'Cupcakes', note: 'Delicate & delicious' },
      { name: 'Chocolate Cakes', note: 'Rich & indulgent' },
      { name: 'Fruit Cakes', note: 'Fresh & flavourful' },
      { name: 'Cheesecakes', note: 'Smooth & creamy' },
      { name: 'Custom Cakes', note: 'Your idea, our creation' },
      { name: 'Macarons', note: 'Light & delicate' },
    ],
  },

  bestsellers: {
    marker: '05 / BESTSELLERS',
    heading: 'Most Loved.\nBest Selling Cakes.',
    description:
      'A focused product grid highlighting customer favourites with crisp photography, INR pricing, star ratings, review counts, 100% eggless assurance, and one-click add-to-cart actions.',
    image: '/assets/case-studies/cakee/cakee-bestsellers.webp',
    items: [
      { name: 'Red Velvet Royale Cake', price: '₹699', rating: '4.8★', reviews: '128 reviews' },
      { name: 'Dark Chocolate Fudge Cake', price: '₹749', rating: '4.9★', reviews: '94 reviews' },
      { name: 'Strawberry Delight Cake', price: '₹699', rating: '4.8★', reviews: '156 reviews' },
      { name: 'Mango Sunshine Cake', price: '₹649', rating: '4.7★', reviews: '112 reviews' },
      { name: 'Blueberry Cheesecake', price: '₹699', rating: '4.9★', reviews: '89 reviews' },
      { name: 'Oreo Crunch Cake', price: '₹699', rating: '4.8★', reviews: '101 reviews' },
    ],
  },

  customCakes: {
    marker: '06 / CUSTOM CAKES',
    heading: 'Dream It.\nWe Bake It.',
    description:
      'A 3-step interactive customization flow allowing customers to select cake designs, specify custom flavours, layers and messages, and request personalized event bakes with consultation support.',
    image: '/assets/case-studies/cakee/cakee-custom.webp',
    steps: [
      { number: '01', title: 'Choose Design', detail: 'Pick a theme or share your inspiration.' },
      { number: '02', title: 'Customize', detail: 'Select flavour, size, icing and add-ons.' },
      { number: '03', title: 'We Bake & Deliver', detail: 'Freshly baked and delivered with love.' },
    ],
    pillars: [
      { title: 'Endless Designs', detail: 'From minimal to extravagant, we create a design that feels entirely yours.' },
      { title: 'Premium Ingredients', detail: 'Fresh cream, real fruit and carefully selected ingredients in every layer.' },
      { title: 'Perfect for Every Occasion', detail: 'Birthdays, anniversaries, weddings or any moment worth making sweeter.' },
    ],
  },

  gifting: {
    marker: '07 / GIFTING',
    heading: 'Wrap Their Day\nin Something Sweet.',
    description:
      'Thoughtful gifting presentation engineered with celebratory packaging options, custom handwritten notes, and carefully coordinated delivery scheduling.',
    image: '/assets/case-studies/cakee/cakee-gifting.webp',
    features: [
      { title: 'Beautiful Packaging', detail: 'Elegant, safe and ready to delight.' },
      { title: 'Personalized Notes', detail: 'Add your own heartfelt message.' },
      { title: 'Careful Delivery', detail: 'Handled with care from us to them.' },
    ],
  },

  socialProof: {
    marker: '08 / SOCIAL PROOF',
    heading: 'Smiles That\nMake Our Day.',
    description:
      'UI card design structuring customer reviews with five-star ratings, buyer initials, city locations and quote bubbles to foster social proof and purchase confidence.',
    image: '/assets/case-studies/cakee/cakee-testimonials.webp',
    reviews: [
      { name: 'Priya Sharma', city: 'Ahmedabad', quote: 'The Red Velvet Royale was beautifully soft, fresh and balanced—not overly sweet. It disappeared from the table in minutes.' },
      { name: 'Neha Patel', city: 'Vadodara', quote: 'I ordered a custom birthday cake for my daughter and it looked even better than the reference. Everyone loved the flavour.' },
      { name: 'Rohan Mehta', city: 'Surat', quote: 'Fresh ingredients, neat packaging and on-time delivery. Cakee has become our first choice for family celebrations.' },
      { name: 'Anjali Desai', city: 'Rajkot', quote: 'The fruit cake was light, fresh and genuinely packed with fruit. The presentation made it feel extra special.' },
    ],
  },

  storeExperience: {
    marker: '09 / EXPERIENCE DESIGN',
    heading: 'Step Into a\nWorld of Sweetness.',
    description:
      'Atmospheric visual storytelling presenting the warm bakery ambience—inviting customers to experience the cosy café, dessert counters, and celebration spaces.',
    image: '/assets/case-studies/cakee/cakee-store.webp',
    highlights: [
      { title: 'Freshly Baked, Every Day', detail: 'From familiar favourites to new creations, everything is prepared fresh each day.' },
      { title: 'Cosy, Aesthetic Ambience', detail: 'A relaxed place to meet, celebrate, work quietly or simply enjoy something sweet.' },
      { title: 'Events & Celebrations', detail: 'Birthday gatherings, anniversaries and private moments made more memorable.' },
    ],
  },

  story: {
    marker: '10 / STORY',
    heading: 'Baked from\nthe Heart.',
    description:
      'Brand narrative highlighting small-batch craftsmanship, uncompromised ingredients, and the bakery mission to turn simple pantry elements into celebratory memories.',
    image: '/assets/case-studies/cakee/cakee-heart.webp',
    promise: 'Freshly made, thoughtfully finished.',
  },

  blog: {
    marker: '11 / CONTENT',
    heading: 'Sweet Reads &\nBaking Inspiration.',
    description:
      'Editorial article cards providing recipes, seasonal decorating tips, and baking inspiration.',
    image: '/assets/case-studies/cakee/cakee-blog.webp',
    articles: [
      { title: '5 Tips for the Perfect Chocolate Cake', tag: 'Recipes', readTime: '5 min read' },
      { title: 'Easy Cake Decorating Ideas for Beginners', tag: 'Decoration', readTime: '4 min read' },
      { title: 'Top Cake Trends to Try This Year', tag: 'Trends', readTime: '3 min read' },
      { title: 'Choosing Better Ingredients for Your Cakes', tag: 'Ingredients', readTime: '4 min read' },
    ],
  },

  faq: {
    marker: '12 / FAQ',
    heading: 'Questions,\nMade Simple.',
    description:
      'Accessible, two-column interactive accordion addressing dietary questions (eggless options), ordering lead times, delivery coverage, and payment methods.',
    image: '/assets/case-studies/cakee/cakee-faq.webp',
    questions: [
      'Do you offer eggless cakes?',
      'How early should I place a custom cake order?',
      'Is same-day delivery available?',
      'Can I choose the cake size and flavour?',
      'Are delivery charges separate?',
      'Can I cancel or change my order?',
    ],
  },

  visualLanguage: {
    marker: '13 / VISUAL LANGUAGE',
    heading: 'Soft. Playful.\nDelicious.',
    description:
      'A harmonious design system tailored to evoke sweetness, warmth, and culinary craftsmanship.',
    blocks: [
      {
        number: '01',
        name: 'COLOR',
        description: 'Soft pink (#f8cbd9), cream (#fffaf8) and deep raspberry (#7b1734) create a welcoming confectionary palette.',
        accent: '#ee4b7a',
        image: '/assets/case-studies/cakee/cakee-hero.webp',
        alt: 'Cakee color palette showing soft blush surfaces and raspberry accents',
      },
      {
        number: '02',
        name: 'PRODUCT',
        description: 'Dessert photography remains central, framed by rounded surfaces and gentle drop shadows.',
        accent: '#c92f63',
        image: '/assets/case-studies/cakee/cakee-bestsellers.webp',
        alt: 'Cakee product photography with strawberry and chocolate cakes',
      },
      {
        number: '03',
        name: 'UI',
        description: 'Rounded cards (16px to 24px), pill buttons and generous whitespace create a friendly shopping flow.',
        accent: '#7b1734',
        image: '/assets/case-studies/cakee/cakee-custom.webp',
        alt: 'Cakee rounded card UI and interactive customization steps',
      },
    ],
  },

  moments: {
    marker: '14 / WEBSITE MOMENTS',
    heading: 'A Celebration\nin Every Section.',
    description:
      'An editorial mosaic celebrating the key visual highlights across the Cakee web experience—from hero confectionary to curated gifts and community stories.',
    items: [
      {
        label: 'HERO SHOWCASE',
        title: 'Made with Love, Just for You',
        image: '/assets/case-studies/cakee/cakee-hero.webp',
        size: 'large',
        alt: 'Cakee hero section featuring the signature strawberry cupcake',
      },
      {
        label: 'BESTSELLERS',
        title: 'Most Loved Cakes',
        image: '/assets/case-studies/cakee/cakee-bestsellers.webp',
        size: 'large',
        alt: 'Cakee bestsellers showcase with eggless cakes and ratings',
      },
      {
        label: 'CUSTOM CREATIONS',
        title: 'Dream It, We Bake It',
        image: '/assets/case-studies/cakee/cakee-custom.webp',
        size: 'medium',
        alt: 'Cakee custom cake builder section',
      },
      {
        label: 'CELEBRATION GIFTING',
        title: 'Wrap Their Day in Something Sweet',
        image: '/assets/case-studies/cakee/cakee-gifting.webp',
        size: 'medium',
        alt: 'Cakee gifting banner with gift box illustration and packaging details',
      },
      {
        label: 'EDITORIAL BAKING',
        title: 'Sweet Reads & Inspiration',
        image: '/assets/case-studies/cakee/cakee-blog.webp',
        size: 'medium',
        alt: 'Cakee recipe blog and baking tips article cards',
      },
      {
        label: 'CAFÉ AMBIENCE',
        title: 'Step Into a World of Sweetness',
        image: '/assets/case-studies/cakee/cakee-store.webp',
        size: 'wide',
        alt: 'Cakee cafe interior with pink aesthetic and bakery display counters',
      },
      {
        label: 'CUSTOMER ASSURANCE',
        title: 'Questions, Made Simple',
        image: '/assets/case-studies/cakee/cakee-faq.webp',
        size: 'wide',
        alt: 'Cakee interactive FAQ accordions and cupcake graphic',
      },
    ],
  },

  process: {
    marker: '15 / PROCESS',
    heading: 'From Idea\nto Celebration.',
    phases: [
      {
        phase: 'PHASE 01',
        title: 'Direction',
        detail:
          'Defining a warm bakery identity using blush pinks, cream backgrounds, and raspberry accents to create an inviting dessert mood.',
      },
      {
        phase: 'PHASE 02',
        title: 'Structure',
        detail:
          'Structuring product discovery into clear categories, occasion-based navigation, and a 3-step bespoke cake request flow.',
      },
      {
        phase: 'PHASE 03',
        title: 'Development',
        detail:
          'Crafting a robust vanilla HTML5, CSS3, and JavaScript frontend with localStorage state persistence, cart drawers, and accessible accordions.',
      },
      {
        phase: 'PHASE 04',
        title: 'Polish',
        detail:
          'Calibrating text contrast against WCAG AA standards, optimizing WebP asset weights, and ensuring responsive fluidity down to 390px viewports.',
      },
    ],
  },

  challenges: {
    marker: '16 / CHALLENGES',
    heading: 'Keeping It\nSweet & Usable.',
    items: [
      {
        challenge: 'Light Theme Contrast & Legibility Over Pastel Surfaces',
        whatHappened:
          'Soft blush pinks and pale pastel tones risked washing out body text and navigational elements, making reading strenuous.',
        solution:
          'Established a strict typography color tier using deep burgundy (#381722, #4b2631) for body text and bold raspberry (#7b1734) for headings, reserving pale pinks strictly for card backgrounds and decorative borders.',
        result:
          '100% readable, high-contrast typography meeting WCAG AA standards while preserving the tender confectionary warmth.',
      },
      {
        challenge: 'Browser-Local State Synchronization Across 12 Pages',
        whatHappened:
          'Without a server-side backend or database, cart additions, wishlist updates, and custom cake builder choices needed persistent synchronization across twelve distinct HTML pages.',
        solution:
          'Engineered a centralized localStorage v2 state manager with unified schema parsing, defensive JSON validation, and storage event listeners that update cart badges and totals across pages in real time.',
        result:
          'A dependable, zero-latency shopping demo where cart contents, coupons, and orders remain synchronized across sessions.',
      },
      {
        challenge: 'Balancing Rich Product Card Density with 60FPS Scroll Performance',
        whatHappened:
          'Dense product grids, high-resolution dessert photography, and continuous scroll animations caused compositor strain and frame jitter on mobile browsers.',
        solution:
          'Excluded product-card media from continuous parallax, converted all images into optimized WebP formats, and implemented native IntersectionObserver reveals with automatic mobile motion reduction.',
        result:
          'Buttery-smooth 60FPS native scrolling across mobile and desktop devices without importing monolithic animation libraries.',
      },
      {
        challenge: 'Multi-Step Custom Cake Builder Usability on Small Screens',
        whatHappened:
          'Gathering multi-tier options (cake themes, sponge flavours, fillings, tier counts, custom message, and delivery date) overwhelmed users within a single long form.',
        solution:
          'Partitioned the builder into a 3-step progressive disclosure interface with visual selection cards, live order summaries, and explicit step validation.',
        result:
          'An intuitive, playful customization workflow that simplifies custom celebration cake ordering on both mobile and desktop screens.',
      },
    ],
  },

  learnings: {
    marker: '17 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Light and pastel aesthetics demand rigorous contrast discipline—anchoring soft blush tones with rich burgundy and raspberry creates visual clarity without losing warmth.',
      'Component-level hierarchy is paramount in e-commerce: consistent badge positioning, clear currency pricing, and prominent CTA buttons guide user exploration and clear ordering workflows.',
      'Native web standards (HTML5 semantic landmarks, CSS Grid/Flexbox, IntersectionObserver, and localStorage) can deliver complete, responsive e-commerce experiences without external framework dependencies.',
      'Playful design and functional clarity can coexist seamlessly when rounded geometry and friendly typography are backed by structured information architecture.',
    ],
  },

  techStack: {
    marker: '18 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'HTML5', role: 'Semantic Multi-Page Architecture & Accessibility' },
      { name: 'CSS3', role: 'Confectionary Design System, Flexbox & CSS Grid' },
      { name: 'Vanilla JavaScript', role: 'Cart State, LocalStorage v2 & Dynamic Modals' },
      { name: 'Native Motion Layer', role: 'IntersectionObserver & RAF Scroll Reveals' },
      { name: 'WebP Media Pipeline', role: 'High-Fidelity Dessert Photography' },
      { name: 'Georgia Serif', role: 'Warm Editorial Bakery Headings' },
      { name: 'Responsive Layouts', role: 'Adaptive Mobile Viewports Down to 390px' },
    ],
  },

  cta: {
    headline: 'Made with Love.\nBuilt with Care.',
    description:
      'A playful exploration of bakery e-commerce, product storytelling and responsive interface design.',
    backText: 'Explore More Work',
    backUrl: '/#projects',
    image: '/assets/case-studies/cakee/cakee-hero.webp',
  },

  nextProject: {
    marker: 'NEXT PROJECT',
    title: 'Coffitoo Coffee',
    description:
      'A warm, atmospheric café product experience celebrating artisanal brewing, rich espresso aesthetics, and modern web motion.',
    image: '/assets/projects/optimized/coffitoo.webp',
    targetUrl: '/projects/coffitoo',
  },
};

export const coffitooCaseStudyData = {
  slug: 'coffitoo',
  number: '06',
  title: 'Coffitoo Coffee',
  tagline: 'EXPERIENCE COFFEE LIKE NEVER BEFORE.',
  eyebrow: '01 / PROJECT',
  description:
    'A warm, atmospheric café product experience celebrating artisanal brewing, rich espresso aesthetics, and modern web motion.',
  liveUrl: '',
  githubUrl: '',
  mainImage: '/assets/projects/optimized/coffitoo.webp',
  heroImage: '/assets/case-studies/coffitoo/coffitoo-hero.webp',

  facts: [
    { label: 'TYPE', value: 'Café Brand & Product Showcase' },
    { label: 'ROLE', value: 'Design & Frontend Engineering' },
    { label: 'STACK', value: 'React · Vite · Framer Motion · GSAP · Lenis' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'Crafted for\nCoffee Lovers.',
    paragraphs: [
      'Coffitoo explores an atmospheric, sensory-rich web experience tailored for an artisanal coffee roastery.',
      'Its visual world is constructed with deep espresso surfaces, warm roasted brown card containers, radiant caramel accents, and high-contrast cream typography.',
      'The interface presents signature coffee varieties, ethical farm-to-cup origin stories, barista craftsmanship, and community moments designed to evoke the tactile comfort of a modern café.',
    ],
    demoStats: [
      {
        value: '20+',
        label: 'Coffee Origins',
        note: 'Concept demo UI copy',
      },
      {
        value: '50K+',
        label: 'Happy Customers',
        note: 'Concept demo UI copy',
      },
      {
        value: '15+',
        label: 'Years Experience',
        note: 'Concept demo UI copy',
      },
    ],
    featureCards: [
      {
        title: 'ARTISANAL ROASTING',
        description: 'The interface presents small-batch roasting profiles calibrated for aroma and depth.',
      },
      {
        title: 'FARM-TO-CUP JOURNEY',
        description: 'The project includes a 5-step visual roadmap from ethical harvest to espresso extraction.',
      },
      {
        title: 'BARISTA CRAFTSMANSHIP',
        description: 'The UI showcases craftspeople behind the bar with specialized roles and brewing mastery.',
      },
      {
        title: 'RESPONSIVE CAFÉ UI',
        description: 'Smooth, fluid layout engineering adapts seamlessly across mobile, tablet, and desktop viewports.',
      },
    ],
  },

  experience: {
    marker: '03 / FULL EXPERIENCE',
    heading: 'The Continuous\nJourney.',
    description:
      'The complete Coffitoo digital experience is designed as an unbroken vertical showcase—guiding the visitor from the cinematic espresso hero down through signature roasts, brand ethos, bean origins, promotional incentives, team portraits, customer testimonials, and an ambience gallery.',
    fullImage: '/assets/case-studies/coffitoo/coffitoo-full.webp',
    keyMoments: [
      'EXPERIENCE COFFEE LIKE NEVER BEFORE',
      'OUR FEATURED COFFEE',
      'CRAFTED FOR COFFEE LOVERS',
      'MORE THAN JUST COFFEE',
      'FROM FARM TO CUP',
      'BUY 2 COFFEES GET 1 FREE',
      'EXPERT BARISTAS',
      'WHAT COFFEE LOVERS SAY',
      'INSIDE COFFITOO',
    ],
  },

  featuredCoffee: {
    marker: '04 / FEATURED COFFEE',
    heading: 'Our Featured\nCoffee.',
    description:
      'The interface presents a curated menu card grid featuring signature handcrafted coffees with pricing, taste attributes, and order prompts.',
    image: '/assets/case-studies/coffitoo/coffitoo-featured.webp',
    items: [
      {
        name: 'Signature Espresso',
        price: '$4.50',
        notes: 'Rich, concentrated shot with thick golden crema and dark chocolate undertones.',
      },
      {
        name: 'Caramel Macchiato',
        price: '$5.50',
        notes: 'Velvety steamed milk with double espresso mark and house-made caramel drizzle.',
      },
      {
        name: 'Artisan Cappuccino',
        price: '$5.00',
        notes: 'Equal thirds of robust espresso, steamed milk, and dense micro-foam.',
      },
      {
        name: 'Classic Americano',
        price: '$4.00',
        notes: 'Pure hot filtered water drawn over full-bodied double-shot espresso.',
      },
      {
        name: 'Cold Brew Reserve',
        price: '$6.00',
        notes: 'Slow cold-steeped for 18 hours yielding low-acidity smoothness.',
      },
      {
        name: 'Iced Latte',
        price: '$5.25',
        notes: 'Chilled espresso poured over ice with fresh organic milk.',
      },
    ],
  },

  brandStory: {
    marker: '05 / BRAND EXPERIENCE',
    heading: 'More Than\nJust Coffee.',
    description:
      'The UI showcases the Coffitoo philosophy—blending artisan café culture, cozy community gathering spaces, and sustainably sourced beans.',
    image: '/assets/case-studies/coffitoo/coffitoo-about.webp',
    badgeText: '15+ Years Experience (Featured in Demo UI)',
    highlights: [
      {
        title: 'Sustainably Sourced Beans',
        detail: 'The interface highlights direct-trade partnerships with independent family farms across high-altitude coffee belts.',
      },
      {
        title: 'Community Gathering Space',
        detail: 'Designed around warmth, ambient lighting, and quiet corners for conversation, creative work, or mindful pauses.',
      },
      {
        title: 'Artisan Bakery Pairings',
        detail: 'The project presents fresh daily bakes and confectionery crafted to complement distinct espresso roast profiles.',
      },
    ],
  },

  processJourney: {
    marker: '06 / PROCESS',
    heading: 'From Farm\nto Cup.',
    description:
      'The interface illustrates the bean lifecycle through a structured 5-step visual roadmap explaining bean selection, roasting, grinding, brewing, and final cup presentation.',
    image: '/assets/case-studies/coffitoo/coffitoo-journey.webp',
    steps: [
      {
        step: '01',
        title: 'Harvest & Selection',
        detail: 'Hand-picked ripe coffee cherries sourced from shade-grown, high-elevation single-origin estates.',
      },
      {
        step: '02',
        title: 'Precision Roasting',
        detail: 'Small-batch roasting calibrated with temperature-curve sensors to accentuate natural fruit and floral sweetness.',
      },
      {
        step: '03',
        title: 'Uniform Burr Grinding',
        detail: 'Micron-calibrated flat burr grinding immediately before extraction to preserve delicate aromatic volatiles.',
      },
      {
        step: '04',
        title: 'Pressure Extraction',
        detail: 'Nine bars of calibrated steam pressure extracting pure origin character and balanced crema density.',
      },
      {
        step: '05',
        title: 'The Perfect Pour',
        detail: 'Finished with velvety micro-foam and delicate latte art, served fresh to every patron.',
      },
    ],
  },

  offerDesign: {
    marker: '07 / OFFER DESIGN',
    heading: 'Crafting the\nConversion Moment.',
    description:
      'The project includes a dedicated promotional banner highlighting a "Buy 2 Coffees Get 1 Free" seasonal incentive paired with a 15% first-order discount code.',
    image: '/assets/case-studies/coffitoo/coffitoo-offer.webp',
    bannerCopy: 'Buy 2 Coffees, Get 1 Free',
    discountNote: 'Demo UI showcases 15% first-order discount code integration.',
    features: [
      {
        title: 'Warm Amber Gradient',
        detail: 'A glowing focal container anchors visual attention without disrupting the moody dark-roast theme.',
      },
      {
        title: 'Clear Benefit Messaging',
        detail: 'Prominent headline typography delivers instant incentive comprehension within one second of scroll.',
      },
      {
        title: 'Action-Driven Hierarchy',
        detail: 'High-contrast caramel pill buttons ensure an effortless pathway toward exploring seasonal drink packages.',
      },
    ],
  },

  people: {
    marker: '08 / PEOPLE',
    heading: 'Expert\nBaristas.',
    description:
      'The interface presents the craftspeople behind the coffee counter through editorial portrait cards detailing barista specializations and latte art expertise.',
    image: '/assets/case-studies/coffitoo/coffitoo-baristas.webp',
    team: [
      {
        role: 'Head Roaster & Cupping Specialist',
        specialty: 'Single-origin roast profiling and cupping evaluation.',
      },
      {
        role: 'Master Barista & Latte Artist',
        specialty: 'Signature pour techniques, foam density, and presentation.',
      },
      {
        role: 'Cold Brew & Extraction Specialist',
        specialty: 'Slow-steep extraction metrics and cold filtration.',
      },
      {
        role: 'Sensory Trainer & Hospitality Lead',
        specialty: 'Flavor identification, guest experience, and palate calibration.',
      },
    ],
  },

  socialProof: {
    marker: '09 / SOCIAL PROOF',
    heading: 'What Coffee\nLovers Say.',
    description:
      'The project UI showcases customer reviews with 5-star rating stars, customer quotes, and verified patron tags.',
    image: '/assets/case-studies/coffitoo/coffitoo-testimonials.webp',
    reviews: [
      {
        highlight: 'Rich Caramel Finish',
        quote:
          'The interface showcases customer praise for the balanced double-shot espresso, noting the smooth crema and subtle cocoa finish.',
        tag: 'Featured Review in Demo UI',
      },
      {
        highlight: 'Exceptional Cold Brew',
        quote:
          'The UI highlights feedback celebrating the 18-hour cold brew reserve for its low acidity and crisp, refreshing taste.',
        tag: 'Featured Review in Demo UI',
      },
      {
        highlight: 'Welcoming Atmosphere',
        quote:
          'The review cards emphasize the calm café ambience, skilled baristas, and comfortable seating that encourage relaxed visits.',
        tag: 'Featured Review in Demo UI',
      },
    ],
  },

  visualStory: {
    marker: '10 / VISUAL STORY',
    heading: 'Inside\nCoffitoo.',
    description:
      'The interface includes a 6-photo masonry gallery capturing the café ambience—steaming cups, pour-over drips, espresso machines, and cozy seating.',
    image: '/assets/case-studies/coffitoo/coffitoo-gallery.webp',
    moments: [
      'Gleaming chrome espresso portafilters',
      'Artisanal ceramic cups on dark wood surfaces',
      'Warm amber café counter lighting',
      'Delicate latte art rosettas and tulips',
      'Pour-over glass kettles in slow extraction',
      'Freshly roasted whole beans in burlap sacks',
    ],
  },

  visualLanguage: {
    marker: '11 / VISUAL LANGUAGE',
    heading: 'Dark Roast &\nWarm Caramel.',
    description:
      'The design system is drawn directly from the sensory world of coffee: near-black espresso grounds, rich roasted cacao surfaces, warm caramel accents, and velvety cream typography.',
    blocks: [
      {
        number: '01',
        name: 'ESPRESSO BLACK',
        description: 'Deep #070707 background sets a moody, intimate café atmosphere.',
        accent: '#c89a6b',
        image: '/assets/case-studies/coffitoo/coffitoo-hero.webp',
        alt: 'Coffitoo hero section showing dark espresso surfaces and glowing coffee cup',
      },
      {
        number: '02',
        name: 'CARAMEL ACCENTS',
        description: 'Warm #c89a6b caramel tones illuminate buttons, badges, and pricing.',
        accent: '#8b5a35',
        image: '/assets/case-studies/coffitoo/coffitoo-featured.webp',
        alt: 'Coffitoo featured menu showing caramel buttons and coffee drink cards',
      },
      {
        number: '03',
        name: 'EDITORIAL WARMTH',
        description: 'Warm cream typography (#ffffff / #bdbdbd) ensures effortless WCAG AA contrast.',
        accent: '#e6c299',
        image: '/assets/case-studies/coffitoo/coffitoo-about.webp',
        alt: 'Coffitoo brand story showing 15+ years experience badge and warm editorial copy',
      },
    ],
  },

  moments: {
    marker: '12 / WEBSITE MOMENTS',
    heading: 'Crafted in\nEvery Section.',
    description:
      'An editorial mosaic celebrating the key visual highlights across the Coffitoo web experience—from hero opening to artisanal roasts, barista craft, and community gallery.',
    items: [
      {
        label: 'HERO EXPERIENCE',
        title: 'Experience Coffee Like Never Before',
        image: '/assets/case-studies/coffitoo/coffitoo-hero.webp',
        size: 'large',
        alt: 'Coffitoo hero section with signature coffee cup and glowing ambiance',
      },
      {
        label: 'FEATURED MENU',
        title: 'Handcrafted Espresso & Brews',
        image: '/assets/case-studies/coffitoo/coffitoo-featured.webp',
        size: 'large',
        alt: 'Coffitoo featured coffee menu grid with prices and add-to-cart buttons',
      },
      {
        label: 'BRAND HERITAGE',
        title: 'More Than Just Coffee',
        image: '/assets/case-studies/coffitoo/coffitoo-about.webp',
        size: 'medium',
        alt: 'Coffitoo brand story card with 15+ years badge',
      },
      {
        label: 'BEAN JOURNEY',
        title: 'From Farm to Cup',
        image: '/assets/case-studies/coffitoo/coffitoo-journey.webp',
        size: 'medium',
        alt: 'Coffitoo 5-step bean journey diagram and roasting narrative',
      },
      {
        label: 'PROMOTIONAL OFFER',
        title: 'Buy 2 Coffees Get 1 Free',
        image: '/assets/case-studies/coffitoo/coffitoo-offer.webp',
        size: 'medium',
        alt: 'Coffitoo promotional discount card with warm amber background',
      },
      {
        label: 'BARISTA ROSTER',
        title: 'The Artisans Behind the Counter',
        image: '/assets/case-studies/coffitoo/coffitoo-baristas.webp',
        size: 'wide',
        alt: 'Coffitoo expert barista team member cards',
      },
      {
        label: 'CAFÉ AMBIENCE',
        title: 'Inside Coffitoo Atmosphere',
        image: '/assets/case-studies/coffitoo/coffitoo-gallery.webp',
        size: 'wide',
        alt: 'Coffitoo 6-photo masonry gallery showing cafe interior and latte art',
      },
    ],
  },

  process: {
    marker: '13 / PROCESS',
    heading: 'From Concept\nto Cup.',
    phases: [
      {
        phase: 'PHASE 01',
        title: 'Atmospheric Direction',
        detail:
          'Defining a warm café visual mood anchored in near-black espresso tones (#070707), roasted cacao surfaces (#15110e), and glowing caramel accents (#c89a6b).',
      },
      {
        phase: 'PHASE 02',
        title: 'Sensory Storytelling',
        detail:
          'Structuring the layout to lead visitors logically from aromatic hero opening down to product selection, roast education, and community social proof.',
      },
      {
        phase: 'PHASE 03',
        title: 'Motion Architecture',
        detail:
          'Integrating Lenis smooth scroll for momentum-driven scrolling, GSAP ScrollTrigger for pinned editorial sequences, and Framer Motion for local component micro-interactions.',
      },
      {
        phase: 'PHASE 04',
        title: 'Responsive Discipline',
        detail:
          'Calibrating typography clamps, ensuring zero horizontal overflow on small viewports (390px), and optimizing high-density coffee media into modern WebP formats.',
      },
    ],
  },

  challenges: {
    marker: '14 / MOTION ARCHITECTURE',
    heading: 'Motion Architecture &\nImplementation Focus.',
    items: [
      {
        challenge: 'Multi-Library Motion Architecture (Framer Motion + GSAP + Lenis)',
        whatHappened:
          'The frontend integrates three complementary motion libraries: Lenis for global inertial scrolling, GSAP ScrollTrigger for scroll-linked animations, and Framer Motion for declarative component transitions.',
        solution:
          'Established clear architectural responsibilities: Lenis governs the root window scroll physics, GSAP ScrollTrigger subscribes to the Lenis scroll ticker for synchronized scroll-based reveals, and Framer Motion handles isolated button hover states and card entrance gestures.',
        result:
          'A cohesive, high-performance motion experience where smooth scroll physics and component transitions operate in harmony without layout thrashing.',
      },
      {
        challenge: 'Dark Roast Color System & Text Contrast Hierarchy',
        whatHappened:
          'Deep espresso brown and black surfaces risk visual muddiness or low contrast if text and card borders lack deliberate luminance separation.',
        solution:
          'Formulated a strict semantic palette: `#070707` for canvas background, `#15110e` for card surfaces, subtle `rgba(200, 154, 107, 0.16)` caramel borders, and pure white (`#ffffff`) or high-contrast silver (`#bdbdbd`) for typography.',
        result:
          'Warm, inviting dark-mode aesthetics that satisfy WCAG AA contrast criteria across all body and caption text.',
      },
      {
        challenge: 'Responsive Menu Card Density Across Mobile Viewports',
        whatHappened:
          'A 6-item featured coffee menu and 4-member barista showcase require careful spatial adaptation to avoid squishing imagery or ballooning vertical height on narrow screens.',
        solution:
          'Implemented auto-fit CSS Grid layouts that transition smoothly from 3 columns at desktop (1440px) to 2 columns on tablet (768px) and a comfortable single-column card stack on mobile (390px).',
        result:
          'Effortless navigation and zero horizontal overflow across all mobile, tablet, and desktop breakpoints.',
      },
      {
        challenge: 'High-Fidelity Coffee Photography Asset Optimization',
        whatHappened:
          'Rich, high-resolution coffee and barista imagery can quickly cause network bloat and sluggish load times if uncompressed.',
        solution:
          'Processed all continuous captures and photography slices into modern WebP formats with optimized 88% quality compression, keeping section assets between 20KB and 135KB.',
        result:
          'Instantaneous asset delivery and crisp visual presentation without degrading tactile café photography.',
      },
    ],
  },

  learnings: {
    marker: '15 / LEARNINGS',
    heading: 'What This Project\nTaught Me.',
    items: [
      'Dark modes become significantly more immersive when anchored in organic undertones: using dark roast brown (#15110e) instead of neutral gray creates authentic warmth.',
      'Complex animation stacks require clear boundary delineation: delegating window physics to Lenis, scroll triggers to GSAP, and local gestures to Framer Motion prevents execution conflicts.',
      'Menu design succeeds through cognitive simplicity: clear price tags, succinct flavor notes, and prominent action buttons minimize friction for patrons.',
      'Fluid responsiveness built with CSS clamp() delivers superior cross-device elegance compared to disjointed media query overrides.',
    ],
  },

  techStack: {
    marker: '16 / STACK',
    heading: 'Built With.',
    items: [
      { name: 'React 19', role: 'Component-Driven UI Architecture' },
      { name: 'Vite', role: 'Modern Build Pipeline & Ultra-Fast HMR' },
      { name: 'Framer Motion', role: 'Fluid Component Gestures & Micro-Interactions' },
      { name: 'GSAP', role: 'ScrollTriggered Timelines & Coordinated Reveals' },
      { name: 'Lenis', role: 'Momentum-Based Inertial Smooth Scrolling' },
      { name: 'React Icons', role: 'Clean, Accessible Iconography' },
      { name: 'WebP Media Pipeline', role: 'Optimized Coffee & Barista Photography' },
      { name: 'Responsive Layouts', role: 'Fluid Mobile Scaling Down to 390px' },
    ],
  },

  cta: {
    headline: 'Brew Something\nMemorable.',
    description:
      'A warm café digital showcase celebrating craftsmanship, modern web motion, and atmospheric dark-mode design.',
    backText: 'Explore More Work',
    backUrl: '/#projects',
    image: '/assets/case-studies/coffitoo/coffitoo-hero.webp',
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
