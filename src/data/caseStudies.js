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
      'The experience guides visitors through olfactory notes, material craftsmanship, an 8-fragrance collection wardrobe, and private client reflections.',
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
      'The complete digital experience is presented as a measured, atmospheric vertical showcase—flowing from the untamed hero reveal to philosophy, signature ingredient notes, collection catalog, French craftsmanship atelier, and private client reflections.',
    fullImage: '/assets/case-studies/azura/azura-full.webp',
    fullImageOriginal: '/assets/projects/azura.png',
    keyMoments: [
      '01 THE UNTAMED COLLECTION — WILD ESSENCE',
      '02 THE PHILOSOPHY — INSTINCT & DISCIPLINE',
      '03 FEATURED FRAGRANCE — A QUIET FORCE',
      '04 INGREDIENT STORY — THREE MATERIALS',
      '05 THE AZURA COLLECTION — WARDROBE OF MOODS',
      '06 CRAFTED WITH INTENTION — FROM RAW TO SIGNATURE',
      '07 WORN, REMEMBERED — PRIVATE TESTIMONIALS',
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
        category: 'CLIENT IMPRESSIONS',
        image: '/assets/case-studies/azura/azura-testimonial.webp',
        caption: 'Understated frosted-glass testimonials celebrating personal olfactory memory.',
      },
      {
        key: 'H',
        title: 'The Private List',
        category: 'ENGAGEMENT & FOOTER',
        image: '/assets/case-studies/azura/azura-final.webp',
        caption: 'Considered private list access accompanied by the iconic tiger artwork and client care navigation.',
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
      'Pure vanilla web technologies (HTML, CSS, modern ES6+) can deliver world-class interactive experiences without the overhead of heavy JavaScript frameworks.',
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
    { label: 'TYPE', value: 'Music / Artist Experience' },
    { label: 'ROLE', value: 'Design & Development' },
    { label: 'STACK', value: 'HTML5 · CSS3 · Vanilla JS' },
    { label: 'YEAR', value: '2026' },
  ],

  overview: {
    marker: '02 / OVERVIEW',
    heading: 'Music Beyond\nthe Screen.',
    paragraphs: [
      'The project explores a cinematic visual direction for a music-focused website, combining dark imagery, dramatic red lighting, oversized typography and immersive section transitions.',
      'Inspired by the dark, theatrical universe of The Weeknd’s Hurry Up Tomorrow era, the interface treats each webpage section as an independent visual chapter—balancing monumental scale with intimate detail.',
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
    title: 'BOO! Ice Cream',
    description:
      'A dark product experience built around bold visual storytelling, immersive scrolling and a distinctive blackcurrant identity.',
    image: '/assets/projects/optimized/boo.webp',
    targetUrl: '/projects/boo',
  },
};



