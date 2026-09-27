import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Heart,
  ArrowLeft,
  Layers,
  Palette,
  Code2,
  Image as ImageIcon,
  Type,
  CheckCircle2,
  Clock,
  Sliders,
  Sparkles,
  ShoppingBag,
  Gift,
  Coffee,
} from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { cakeeCaseStudyData } from '../data/caseStudies';
import SEO from '../components/SEO/SEO';
import '../components/CaseStudy/caseStudy.css';
import './CakeeCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

// Verified Technology Icons Map
const TECH_ICON_MAP = {
  'HTML5': Layers,
  'CSS3': Palette,
  'Vanilla JavaScript': Code2,
  'Native Motion Layer': Sparkles,
  'WebP Media Pipeline': ImageIcon,
  'Georgia Serif': Type,
  'Responsive Layouts': Sliders,
};

export default function CakeeCaseStudy() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroVisualRef = useRef(null);
  const fullScreenshotRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. GSAP Animations & Gentle Soft Scroll Reveals
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            '.cakee-hero-title-group',
            '.cakee-hero-desc',
            '.cakee-hero-facts',
            '.cakee-hero-visual-card',
            '.cakee-section',
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      // Soft bakery hero reveal (0.7-0.9s, power2.out)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.cakee-hero-eyebrow',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          '.cakee-hero-title-group',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.cakee-hero-desc',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.cakee-hero-facts',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.cakee-hero-visual-card',
          { opacity: 0, y: 24, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          '-=0.6'
        );

      // Section-level reveals
      const sections = gsap.utils.toArray('.cakee-reveal-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Item-level stagger reveals
      const itemGrids = gsap.utils.toArray(
        '.cakee-overview-grid, .cakee-discovery-split, .cakee-bestsellers-concise-grid, .cakee-custom-split, .cakee-gifting-callouts, .cakee-proof-points, .cakee-store-split, .cakee-blog-asymmetric, .cakee-visual-grid, .cakee-mosaic-grid, .cakee-process-grid, .cakee-challenges-list, .cakee-learnings-grid, .cakee-stack-grid'
      );

      itemGrids.forEach((grid) => {
        const items = grid.querySelectorAll('.cakee-reveal-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Subtle desktop-only gentle image depth
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (heroVisualRef.current) {
          gsap.to(heroVisualRef.current.querySelector('img'), {
            y: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.3,
            },
          });
        }

        if (fullScreenshotRef.current) {
          gsap.fromTo(
            fullScreenshotRef.current,
            { y: -8 },
            {
              y: 12,
              ease: 'none',
              scrollTrigger: {
                trigger: fullScreenshotRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.4,
              },
            }
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const d = cakeeCaseStudyData;

  const sectionLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Products', href: '#products' },
    { name: 'Story', href: '#story' },
    { name: 'Learnings', href: '#learnings' },
  ];

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate('/#projects', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="cakee-case-study" ref={rootRef}>
      <SEO
        title="Cakee — Case Study | Arjun Dabhi"
        description="Pastel bakery e-commerce concept featuring product discovery, custom cakes, gifting, testimonials, and responsive editorial layouts."
        canonical="https://arjun-dabhi-portfolio.vercel.app/projects/cakee"
        ogImage="https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/cakee/cakee-hero.webp"
        ogImageAlt="Cakee bakery project case study preview"
      />

      {/* ============================================================
          01 — HEADER
          ============================================================ */}
      <CaseStudyHeader
        projectName="Cakee"
        liveUrl=""
        sectionLinks={sectionLinks}
      />

      <main id="main-content" className="cakee-main" tabIndex="-1">
        {/* ============================================================
            01 / HERO SECTION
            ============================================================ */}
        <section
          id="hero"
          className="cakee-hero-section"
          ref={heroRef}
          aria-labelledby="hero-title"
        >
          <div className="cakee-container">
            <div className="cakee-hero-grid">
              {/* Left Column: Copy & Facts (~45%) */}
              <div className="cakee-hero-copy">
                <div className="cakee-hero-eyebrow">
                  <CaseStudySectionMarker
                    marker={d.eyebrow}
                    className="cakee-custom-marker"
                  />
                </div>

                <div className="cakee-hero-title-group">
                  <span className="cakee-hero-tagline">{d.tagline}</span>
                  <h1 id="hero-title" className="cakee-hero-title">
                    {d.title}
                  </h1>
                  <p className="cakee-hero-subtitle">
                    Made with Love, <span className="cakee-highlight-raspberry">Just for You.</span>
                  </p>
                </div>

                <p className="cakee-hero-desc">{d.description}</p>

                {/* Hero Facts Grid */}
                <div
                  className="cakee-hero-facts"
                  role="region"
                  aria-label="Project Quick Facts"
                >
                  {d.facts.map((fact, idx) => (
                    <div key={idx} className="cakee-fact-item">
                      <span className="cakee-fact-label">{fact.label}</span>
                      <span className="cakee-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Real Visual (~55%) */}
              <div className="cakee-hero-visual-col" ref={heroVisualRef}>
                <div className="cakee-hero-visual-card">
                  <div className="cakee-hero-visual-frame">
                    <img
                      src={d.heroImage}
                      alt="Real Cakee website hero interface featuring signature strawberry cupcake and Made with Love headline"
                      className="cakee-hero-img"
                      loading="eager"
                      decoding="async"
                      width="1440"
                      height="925"
                    />
                  </div>
                  <div className="cakee-visual-badge">
                    <span className="cakee-badge-dot" />
                    <span>Real Website View · Hero Showcase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — OVERVIEW
            ============================================================ */}
        <section
          id="overview"
          className="cakee-section cakee-reveal-section cakee-overview-section"
          aria-labelledby="overview-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.overview.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="overview-heading" className="cakee-section-heading">
                Designed for <span className="cakee-highlight-raspberry">Sweet Moments.</span>
              </h2>
              <div className="cakee-section-intro">
                {d.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* 4 Overview Cards */}
            <div className="cakee-overview-grid" role="list">
              {d.overview.featureCards.map((card, idx) => (
                <div
                  key={idx}
                  className="cakee-overview-card cakee-reveal-item"
                  role="listitem"
                >
                  <div className="cakee-card-icon-wrap">
                    {idx === 0 && <ShoppingBag size={22} aria-hidden="true" />}
                    {idx === 1 && <Gift size={22} aria-hidden="true" />}
                    {idx === 2 && <Heart size={22} aria-hidden="true" />}
                    {idx === 3 && <Sliders size={22} aria-hidden="true" />}
                  </div>
                  <h3 className="cakee-card-title">{card.title}</h3>
                  <p className="cakee-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — THE FULL EXPERIENCE (Full Page Continuous Showcase)
            ============================================================ */}
        <section
          id="experience"
          className="cakee-section cakee-reveal-section cakee-experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.experience.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="experience-heading" className="cakee-section-heading">
                The Full <span className="cakee-highlight-raspberry">Experience.</span>
              </h2>
              <p className="cakee-section-desc">{d.experience.description}</p>
            </div>

            {/* Continuous Full Experience Frame */}
            <div className="cakee-full-showcase-wrap">
              <div
                className="cakee-full-frame cakee-reveal-item"
                ref={fullScreenshotRef}
              >
                <img
                  src={d.experience.fullImage}
                  alt="Full Cakee e-commerce website continuous page capture from hero to footer"
                  className="cakee-full-img"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="7183"
                />
              </div>

              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Continuous Webpage Capture · Full Storefront Architecture</span>
              </div>

              {/* Key Moments Tag Cloud */}
              <div className="cakee-moments-chips-wrap">
                <span className="cakee-chips-label">KEY EXPERIENCES IN THIS FLOW:</span>
                <div className="cakee-chips-row" role="list">
                  {d.experience.keyMoments.map((moment, idx) => (
                    <span
                      key={idx}
                      className="cakee-moment-chip cakee-reveal-item"
                      role="listitem"
                    >
                      {moment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — PRODUCT DISCOVERY (Catalog Split Layout)
            ============================================================ */}
        <section
          id="products"
          className="cakee-section cakee-reveal-section cakee-products-section"
          aria-labelledby="products-heading"
        >
          <div className="cakee-container">
            <div className="cakee-discovery-split">
              {/* Left Column: Dominant Real Catalog Crop (62%) */}
              <div className="cakee-discovery-visual cakee-reveal-item">
                <div className="cakee-media-frame">
                  <img
                    src={d.products.image}
                    alt="Cakee product categories section displaying cupcakes, chocolate cakes, fruit cakes and cheesecakes"
                    className="cakee-section-img"
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="945"
                  />
                  <div className="cakee-visual-badge">
                    <span className="cakee-badge-dot" />
                    <span>Real Website View · Category &amp; Product Discovery Carousel</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Explanation & 3 Points (38%) */}
              <div className="cakee-discovery-content cakee-reveal-item">
                <CaseStudySectionMarker
                  marker={d.products.marker}
                  className="cakee-custom-marker"
                />
                <div className="cakee-section-header">
                  <h2 id="products-heading" className="cakee-section-heading">
                    Something Sweet <span className="cakee-highlight-raspberry">for Every Moment.</span>
                  </h2>
                  <p className="cakee-section-desc">{d.products.description}</p>
                </div>

                <div className="cakee-discovery-points" role="list">
                  <div className="cakee-discovery-point cakee-reveal-item" role="listitem">
                    <span className="cakee-point-num">01</span>
                    <div>
                      <h3 className="cakee-point-title">Curated Collections</h3>
                      <p className="cakee-point-desc">Artisanal cakes, cupcakes, and desserts grouped into clear celebratory categories.</p>
                    </div>
                  </div>
                  <div className="cakee-discovery-point cakee-reveal-item" role="listitem">
                    <span className="cakee-point-num">02</span>
                    <div>
                      <h3 className="cakee-point-title">Visual Flavor Profiles</h3>
                      <p className="cakee-point-desc">High-definition bakery photography paired with delicate notes and eggless badges.</p>
                    </div>
                  </div>
                  <div className="cakee-discovery-point cakee-reveal-item" role="listitem">
                    <span className="cakee-point-num">03</span>
                    <div>
                      <h3 className="cakee-point-title">Frictionless Pathways</h3>
                      <p className="cakee-point-desc">Instant add-to-cart actions with synced cart drawers for smooth discovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — BESTSELLERS (Dominant Product Showcase + Max 3 Concise Cards)
            ============================================================ */}
        <section
          id="bestsellers"
          className="cakee-section cakee-reveal-section cakee-bestsellers-section"
          aria-labelledby="bestsellers-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.bestsellers.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="bestsellers-heading" className="cakee-section-heading">
                Most Loved. <span className="cakee-highlight-raspberry">Best Selling Cakes.</span>
              </h2>
              <p className="cakee-section-desc">{d.bestsellers.description}</p>
            </div>

            {/* Dominant Real Website Crop */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.bestsellers.image}
                alt="Cakee bestsellers grid showing Red Velvet Royale, Dark Chocolate Fudge, and Strawberry Delight cakes"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Verified Bestsellers Grid with INR Pricing</span>
              </div>
            </div>

            {/* 3 Concise Feature Highlights */}
            <div className="cakee-bestsellers-concise-grid" role="list">
              <div className="cakee-bestseller-concise-card cakee-reveal-item" role="listitem">
                <div className="cakee-concise-tag">ASSURANCE</div>
                <h3 className="cakee-concise-title">100% Eggless Favourites</h3>
                <p className="cakee-concise-desc">Every signature favourite is crafted eggless without compromising texture or richness.</p>
              </div>
              <div className="cakee-bestseller-concise-card cakee-reveal-item" role="listitem">
                <div className="cakee-concise-tag">FEEDBACK</div>
                <h3 className="cakee-concise-title">4.8★ Verified Ratings</h3>
                <p className="cakee-concise-desc">Customer ratings and real review counts give immediate confidence for every treat.</p>
              </div>
              <div className="cakee-bestseller-concise-card cakee-reveal-item" role="listitem">
                <div className="cakee-concise-tag">TRANSPARENCY</div>
                <h3 className="cakee-concise-title">Transparent INR Pricing</h3>
                <p className="cakee-concise-desc">Clear price points from ₹649 with transparent portion sizing and quick order access.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — CUSTOM CAKES (Editorial Split: Steps Left, Visual Right)
            ============================================================ */}
        <section
          id="custom"
          className="cakee-section cakee-reveal-section cakee-custom-section"
          aria-labelledby="custom-heading"
        >
          <div className="cakee-container">
            <div className="cakee-custom-split">
              {/* Left Column: Steps & Content */}
              <div className="cakee-custom-copy cakee-reveal-item">
                <CaseStudySectionMarker
                  marker={d.customCakes.marker}
                  className="cakee-custom-marker"
                />

                <div className="cakee-section-header">
                  <h2 id="custom-heading" className="cakee-section-heading">
                    Dream It. <span className="cakee-highlight-raspberry">We Bake It.</span>
                  </h2>
                  <p className="cakee-section-desc">{d.customCakes.description}</p>
                </div>

                {/* 3-Step Customization Flow */}
                <div className="cakee-custom-steps-v" role="list">
                  {d.customCakes.steps.map((st, i) => (
                    <div
                      key={i}
                      className="cakee-custom-step-row cakee-reveal-item"
                      role="listitem"
                    >
                      <span className="cakee-step-badge">{st.number}</span>
                      <div className="cakee-step-body">
                        <h3 className="cakee-step-title">{st.title}</h3>
                        <p className="cakee-step-detail">{st.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dominant Custom Visual */}
              <div className="cakee-custom-visual cakee-reveal-item">
                <div className="cakee-media-frame">
                  <img
                    src={d.customCakes.image}
                    alt="Cakee custom cake builder section with custom celebration cake photo and 3-step ordering process"
                    className="cakee-section-img"
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="945"
                  />
                  <div className="cakee-visual-badge">
                    <span className="cakee-badge-dot" />
                    <span>Real Website View · Custom Cake Consultation Interface</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — GIFTING (Wide Dominant Visual + Minimal Callouts)
            ============================================================ */}
        <section
          id="gifting"
          className="cakee-section cakee-reveal-section cakee-gifting-section"
          aria-labelledby="gifting-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.gifting.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="gifting-heading" className="cakee-section-heading">
                Wrap Their Day <span className="cakee-highlight-raspberry">in Something Sweet.</span>
              </h2>
              <p className="cakee-section-desc">{d.gifting.description}</p>
            </div>

            {/* Dominant Real Website Crop */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.gifting.image}
                alt="Cakee thoughtful gifting banner with celebration gift box packaging and note personalization"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Celebration Gifting Banner</span>
              </div>
            </div>

            {/* Minimal Airy Supporting Callouts (Max 3) */}
            <div className="cakee-gifting-callouts" role="list">
              <div className="cakee-gifting-callout cakee-reveal-item" role="listitem">
                <Gift size={18} className="cakee-callout-icon" aria-hidden="true" />
                <div>
                  <h3 className="cakee-callout-title">Celebratory Gift Packaging</h3>
                  <p className="cakee-callout-desc">Elegant presentation boxes designed to keep every confection fresh and photo-ready.</p>
                </div>
              </div>
              <div className="cakee-gifting-callout cakee-reveal-item" role="listitem">
                <Heart size={18} className="cakee-callout-icon" aria-hidden="true" />
                <div>
                  <h3 className="cakee-callout-title">Personalized Notes</h3>
                  <p className="cakee-callout-desc">Custom handwritten message cards to express heartfelt celebration wishes.</p>
                </div>
              </div>
              <div className="cakee-gifting-callout cakee-reveal-item" role="listitem">
                <Clock size={18} className="cakee-callout-icon" aria-hidden="true" />
                <div>
                  <h3 className="cakee-callout-title">Careful Delivery</h3>
                  <p className="cakee-callout-desc">Temperature-safe packaging handled with care from our bakery to their door.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — TESTIMONIALS (Social-Proof UI Architecture)
            ============================================================ */}
        <section
          id="testimonials"
          className="cakee-section cakee-reveal-section cakee-testimonials-section"
          aria-labelledby="testimonials-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.socialProof.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="testimonials-heading" className="cakee-section-heading">
                Smiles That <span className="cakee-highlight-raspberry">Make Our Day.</span>
              </h2>
              <p className="cakee-section-desc">
                UI card architecture structuring customer reviews with five-star ratings, buyer initials, city locations and quote bubbles to foster social proof and purchase confidence.
              </p>
            </div>

            {/* Dominant Real Website Crop */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.socialProof.image}
                alt="Cakee customer reviews and testimonials card carousel design"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Customer Review Card Architecture</span>
              </div>
            </div>

            {/* Concise UI Social-Proof Architecture Points (Max 3) */}
            <div className="cakee-proof-points" role="list">
              <div className="cakee-proof-point cakee-reveal-item" role="listitem">
                <span className="cakee-proof-tag">LAYOUT</span>
                <h3 className="cakee-proof-title">Star Ratings &amp; Buyer Avatars</h3>
                <p className="cakee-proof-desc">Presents five-star score badges and initials to make every piece of customer feedback scannable.</p>
              </div>
              <div className="cakee-proof-point cakee-reveal-item" role="listitem">
                <span className="cakee-proof-tag">CONTEXT</span>
                <h3 className="cakee-proof-title">Regional Location Badges</h3>
                <p className="cakee-proof-desc">Incorporates customer city locations (Ahmedabad, Surat, Vadodara) to build local community trust.</p>
              </div>
              <div className="cakee-proof-point cakee-reveal-item" role="listitem">
                <span className="cakee-proof-tag">STRUCTURE</span>
                <h3 className="cakee-proof-title">Carousel Flow Architecture</h3>
                <p className="cakee-proof-desc">Horizontal review card browsing allows buyers to explore authentic experiences without cluttering the page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            09 — STORE / EXPERIENCE DESIGN (Editorial Split Layout)
            ============================================================ */}
        <section
          id="store"
          className="cakee-section cakee-reveal-section cakee-store-section"
          aria-labelledby="store-heading"
        >
          <div className="cakee-container">
            <div className="cakee-store-split">
              {/* Left Column: Dominant Café / Storefront Visual */}
              <div className="cakee-store-visual cakee-reveal-item">
                <div className="cakee-media-frame">
                  <img
                    src={d.storeExperience.image}
                    alt="Cakee cafe interior photography and experiential dessert atmosphere"
                    className="cakee-section-img"
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="945"
                  />
                  <div className="cakee-visual-badge">
                    <span className="cakee-badge-dot" />
                    <span>Real Website View · Confectionery Environment &amp; Café Presentation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Copy & 3 Highlights */}
              <div className="cakee-store-copy cakee-reveal-item">
                <CaseStudySectionMarker
                  marker={d.storeExperience.marker}
                  className="cakee-custom-marker"
                />

                <div className="cakee-section-header">
                  <h2 id="store-heading" className="cakee-section-heading">
                    Step Into a <span className="cakee-highlight-raspberry">World of Sweetness.</span>
                  </h2>
                  <p className="cakee-section-desc">{d.storeExperience.description}</p>
                </div>

                <div className="cakee-store-highlights-v" role="list">
                  {d.storeExperience.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="cakee-store-highlight-row cakee-reveal-item"
                      role="listitem"
                    >
                      <div className="cakee-highlight-icon-small">
                        <Coffee size={18} aria-hidden="true" />
                      </div>
                      <div className="cakee-highlight-text">
                        <h3 className="cakee-highlight-title">{h.title}</h3>
                        <p className="cakee-highlight-desc">{h.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            10 — BRAND STORY (Brand Story Pause)
            ============================================================ */}
        <section
          id="story"
          className="cakee-section cakee-reveal-section cakee-story-section"
          aria-labelledby="story-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.story.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="story-heading" className="cakee-section-heading">
                Baked from <span className="cakee-highlight-raspberry">the Heart.</span>
              </h2>
              <p className="cakee-section-desc">{d.story.description}</p>
            </div>

            {/* Dominant Real Website Crop */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.story.image}
                alt="Cakee brand story with bakery kitchen photograph and our promise message"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Brand Story &amp; Confectionery Craft Presentation</span>
              </div>
            </div>

            <div className="cakee-promise-box cakee-reveal-item">
              <Heart size={20} className="cakee-promise-heart" aria-hidden="true" />
              <p className="cakee-promise-text">
                <strong>Our Promise:</strong> {d.story.promise}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            11 — BLOG / CONTENT (Asymmetrical 3-Card Layout)
            ============================================================ */}
        <section
          id="blog"
          className="cakee-section cakee-reveal-section cakee-blog-section"
          aria-labelledby="blog-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.blog.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="blog-heading" className="cakee-section-heading">
                Sweet Reads &amp; <span className="cakee-highlight-raspberry">Baking Inspiration.</span>
              </h2>
              <p className="cakee-section-desc">{d.blog.description}</p>
            </div>

            {/* Dominant Real Website Crop */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.blog.image}
                alt="Cakee blog cards presenting articles on chocolate cake, decorating ideas, and trends"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Editorial Content &amp; Recipe Articles</span>
              </div>
            </div>

            {/* Asymmetrical 3-Card Articles Grid */}
            <div className="cakee-blog-asymmetric" role="list">
              <div className="cakee-blog-card cakee-blog-card-featured cakee-reveal-item" role="listitem">
                <div className="cakee-blog-meta">
                  <span className="cakee-blog-tag">Featured · {d.blog.articles[0].tag}</span>
                  <span className="cakee-blog-time">{d.blog.articles[0].readTime}</span>
                </div>
                <h3 className="cakee-blog-title">{d.blog.articles[0].title}</h3>
                <p className="cakee-blog-excerpt">Practical culinary techniques for achieving deep chocolate richness, velvet crumb texture, and balanced sweetness in celebratory bakes.</p>
              </div>
              <div className="cakee-blog-card cakee-reveal-item" role="listitem">
                <div className="cakee-blog-meta">
                  <span className="cakee-blog-tag">{d.blog.articles[1].tag}</span>
                  <span className="cakee-blog-time">{d.blog.articles[1].readTime}</span>
                </div>
                <h3 className="cakee-blog-title">{d.blog.articles[1].title}</h3>
              </div>
              <div className="cakee-blog-card cakee-reveal-item" role="listitem">
                <div className="cakee-blog-meta">
                  <span className="cakee-blog-tag">{d.blog.articles[2].tag}</span>
                  <span className="cakee-blog-time">{d.blog.articles[2].readTime}</span>
                </div>
                <h3 className="cakee-blog-title">{d.blog.articles[2].title}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            12 — FAQ (Wide, Clean & Simple)
            ============================================================ */}
        <section
          id="faq"
          className="cakee-section cakee-reveal-section cakee-faq-section"
          aria-labelledby="faq-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.faq.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="faq-heading" className="cakee-section-heading">
                Questions, <span className="cakee-highlight-raspberry">Made Simple.</span>
              </h2>
              <p className="cakee-section-desc">{d.faq.description}</p>
            </div>

            {/* Dominant Real Website Crop showing Two-Column Interactive Accordion */}
            <div className="cakee-media-frame cakee-reveal-item">
              <img
                src={d.faq.image}
                alt="Cakee FAQ accordion layout showing answers for eggless cakes and ordering lead times"
                className="cakee-section-img"
                loading="lazy"
                decoding="async"
                width="1440"
                height="945"
              />
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Two-Column Interactive Accordion FAQ</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            13 — VISUAL LANGUAGE
            ============================================================ */}
        <section
          id="visual-language"
          className="cakee-section cakee-reveal-section cakee-visual-section"
          aria-labelledby="visual-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.visualLanguage.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="visual-heading" className="cakee-section-heading">
                Soft. Playful. <span className="cakee-highlight-raspberry">Delicious.</span>
              </h2>
              <p className="cakee-section-desc">{d.visualLanguage.description}</p>
            </div>

            {/* 3 Visual Language Blocks */}
            <div className="cakee-visual-grid" role="list">
              {d.visualLanguage.blocks.map((block, idx) => (
                <div
                  key={idx}
                  className="cakee-visual-block-card cakee-reveal-item"
                  role="listitem"
                >
                  <div className="cakee-block-media-frame">
                    <img
                      src={block.image}
                      alt={block.alt}
                      className="cakee-block-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="480"
                    />
                  </div>
                  <div className="cakee-block-body">
                    <span className="cakee-block-num">{block.number}</span>
                    <h3 className="cakee-block-name" style={{ color: block.accent }}>
                      {block.name}
                    </h3>
                    <p className="cakee-block-desc">{block.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            14 — WEBSITE MOMENTS (Editorial Mosaic)
            ============================================================ */}
        <section
          id="moments"
          className="cakee-section cakee-reveal-section cakee-moments-section"
          aria-labelledby="moments-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.moments.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="moments-heading" className="cakee-section-heading">
                A Celebration <span className="cakee-highlight-raspberry">in Every Section.</span>
              </h2>
              <p className="cakee-section-desc">{d.moments.description}</p>
            </div>

            {/* Editorial Mosaic Grid */}
            <div className="cakee-mosaic-grid" role="list">
              {d.moments.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`cakee-mosaic-item cakee-mosaic-${item.size} cakee-reveal-item`}
                  role="listitem"
                >
                  <div className="cakee-mosaic-frame">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="cakee-mosaic-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="cakee-mosaic-info">
                    <span className="cakee-mosaic-label">{item.label}</span>
                    <h3 className="cakee-mosaic-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            15 — PROCESS
            ============================================================ */}
        <section
          id="process"
          className="cakee-section cakee-reveal-section cakee-process-section"
          aria-labelledby="process-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.process.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="process-heading" className="cakee-section-heading">
                From Idea <span className="cakee-highlight-raspberry">to Celebration.</span>
              </h2>
            </div>

            <div className="cakee-process-grid" role="list">
              {d.process.phases.map((ph, idx) => (
                <div
                  key={idx}
                  className="cakee-process-card cakee-reveal-item"
                  role="listitem"
                >
                  <span className="cakee-phase-tag">{ph.phase}</span>
                  <h3 className="cakee-phase-title">{ph.title}</h3>
                  <p className="cakee-phase-detail">{ph.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            16 — CHALLENGES
            ============================================================ */}
        <section
          id="challenges"
          className="cakee-section cakee-reveal-section cakee-challenges-section"
          aria-labelledby="challenges-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.challenges.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="challenges-heading" className="cakee-section-heading">
                Keeping It <span className="cakee-highlight-raspberry">Sweet &amp; Usable.</span>
              </h2>
            </div>

            {/* Challenges List */}
            <div className="cakee-challenges-list" role="list">
              {d.challenges.items.map((item, idx) => (
                <div
                  key={idx}
                  className="cakee-challenge-card cakee-reveal-item"
                  role="listitem"
                >
                  <div className="cakee-challenge-header">
                    <span className="cakee-challenge-tag">CHALLENGE 0{idx + 1}</span>
                    <h3 className="cakee-challenge-title">{item.challenge}</h3>
                  </div>

                  <div className="cakee-challenge-grid">
                    <div className="cakee-challenge-col">
                      <div className="cakee-col-label cakee-label-problem">
                        <Clock size={14} aria-hidden="true" />
                        <span>WHAT HAPPENED</span>
                      </div>
                      <p className="cakee-col-text">{item.whatHappened}</p>
                    </div>

                    <div className="cakee-challenge-col">
                      <div className="cakee-col-label cakee-label-solution">
                        <Sliders size={14} aria-hidden="true" />
                        <span>SOLUTION</span>
                      </div>
                      <p className="cakee-col-text">{item.solution}</p>
                    </div>

                    <div className="cakee-challenge-col">
                      <div className="cakee-col-label cakee-label-result">
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>RESULT</span>
                      </div>
                      <p className="cakee-col-text">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            17 — LEARNINGS
            ============================================================ */}
        <section
          id="learnings"
          className="cakee-section cakee-reveal-section cakee-learnings-section"
          aria-labelledby="learnings-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.learnings.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="learnings-heading" className="cakee-section-heading">
                What This Project <span className="cakee-highlight-raspberry">Taught Me.</span>
              </h2>
            </div>

            <div className="cakee-learnings-grid" role="list">
              {d.learnings.items.map((item, i) => (
                <div
                  key={i}
                  className="cakee-learning-card cakee-reveal-item"
                  role="listitem"
                >
                  <span className="cakee-learning-num">0{i + 1}</span>
                  <p className="cakee-learning-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            18 — TECH STACK
            ============================================================ */}
        <section
          id="stack"
          className="cakee-section cakee-reveal-section cakee-stack-section"
          aria-labelledby="stack-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker={d.techStack.marker}
              className="cakee-custom-marker"
            />

            <div className="cakee-section-header">
              <h2 id="stack-heading" className="cakee-section-heading">
                Built <span className="cakee-highlight-raspberry">With.</span>
              </h2>
            </div>

            <div className="cakee-stack-grid" role="list">
              {d.techStack.items.map((tech) => {
                const IconComponent = TECH_ICON_MAP[tech.name] || Layers;
                return (
                  <div
                    key={tech.name}
                    className="cakee-stack-card cakee-reveal-item"
                    role="listitem"
                  >
                    <div className="cakee-stack-icon-wrap">
                      <IconComponent size={22} aria-hidden="true" />
                    </div>
                    <div className="cakee-stack-info">
                      <h3 className="cakee-stack-name">{tech.name}</h3>
                      <p className="cakee-stack-role">{tech.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            19 — FINALE / EDITORIAL ENDING
            ============================================================ */}
        <section
          id="finale"
          className="cakee-section cakee-reveal-section cakee-ending-section"
          aria-labelledby="finale-heading"
        >
          <div className="cakee-container">
            <CaseStudySectionMarker
              marker="19 / FINALE"
              className="cakee-custom-marker"
            />

            {/* Dominant Real Visual Frame */}
            <div className="cakee-ending-visual-frame cakee-reveal-item">
              <div className="cakee-ending-frame">
                <img
                  src={d.cta.image}
                  alt="Cakee signature dessert presentation in soft confectionery warmth"
                  className="cakee-ending-img"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="925"
                />
              </div>
              <div className="cakee-visual-badge">
                <span className="cakee-badge-dot" />
                <span>Real Website View · Finale Confectionery Outro</span>
              </div>
            </div>

            {/* Warm Typography & Action */}
            <div className="cakee-ending-signoff cakee-reveal-item">
              <span className="cakee-ending-badge">SWEET CLOSING</span>
              <h2 id="finale-heading" className="cakee-ending-title">
                Made with Love. <br />
                <span className="cakee-highlight-raspberry">Built with Care.</span>
              </h2>
              <p className="cakee-ending-desc">{d.cta.description}</p>

              <div className="cakee-ending-actions">
                <a
                  href="/#projects"
                  onClick={handleBackToProjects}
                  className="cakee-ending-back-btn"
                  aria-label="Return to portfolio projects showcase"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  <span>Explore More Work</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            20 — NEXT PROJECT (BOO! Ice Cream Loop)
            ============================================================ */}
        <CaseStudyNextProject nextData={d.nextProject} />
      </main>
    </div>
  );
}
