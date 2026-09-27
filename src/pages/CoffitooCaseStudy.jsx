import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Coffee,
  Sparkles,
  Layers,
  Palette,
  Code2,
  Sliders,
  Wind,
  CheckCircle2,
  ArrowLeft,
  Star,
  Award,
  Flame,
  Compass,
} from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { coffitooCaseStudyData } from '../data/caseStudies';
import '../components/CaseStudy/caseStudy.css';
import './CoffitooCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

// Verified Technology Icons Map
const TECH_ICON_MAP = {
  'React 19': Layers,
  'Vite': Flame,
  'Framer Motion': Sparkles,
  'GSAP': Sliders,
  'Lenis': Wind,
  'React Icons': Code2,
  'WebP Media Pipeline': Palette,
  'Responsive Layouts': Compass,
};

export default function CoffitooCaseStudy() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroVisualRef = useRef(null);
  const fullScreenshotRef = useRef(null);
  const navigate = useNavigate();

  const data = coffitooCaseStudyData;

  // 1. Dynamic SEO Management
  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl?.getAttribute('content') || '';
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute('href') || '';
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleEl?.getAttribute('content') || '';
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescEl?.getAttribute('content') || '';
    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlEl?.getAttribute('content') || '';
    const ogImageEl = document.querySelector('meta[property="og:image"]');
    const prevOgImage = ogImageEl?.getAttribute('content') || '';

    const newTitle = 'Coffitoo Coffee — Case Study | Arjun Dabhi';
    const newDesc =
      'A case study of Coffitoo Coffee, a warm, atmospheric café product experience celebrating artisanal brewing, rich espresso aesthetics, and modern web motion.';
    const newCanonical = 'https://arjun-dabhi-portfolio.vercel.app/projects/coffitoo';
    const newOgImage =
      'https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/coffitoo/coffitoo-hero.webp';

    document.title = newTitle;
    if (descEl) descEl.setAttribute('content', newDesc);
    if (canonicalEl) canonicalEl.setAttribute('href', newCanonical);
    if (ogTitleEl) ogTitleEl.setAttribute('content', newTitle);
    if (ogDescEl) ogDescEl.setAttribute('content', newDesc);
    if (ogUrlEl) ogUrlEl.setAttribute('content', newCanonical);
    if (ogImageEl) ogImageEl.setAttribute('content', newOgImage);

    // Scroll window to top on mount
    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (descEl) descEl.setAttribute('content', prevDesc);
      if (canonicalEl) canonicalEl.setAttribute('href', prevCanonical);
      if (ogTitleEl) ogTitleEl.setAttribute('content', prevOgTitle);
      if (ogDescEl) ogDescEl.setAttribute('content', prevOgDesc);
      if (ogUrlEl) ogUrlEl.setAttribute('content', prevOgUrl);
      if (ogImageEl) ogImageEl.setAttribute('content', prevOgImage);
    };
  }, []);

  // 2. GSAP Animations & Atmospheric Dark Roast Reveals
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            '.coffitoo-hero-title-group',
            '.coffitoo-hero-desc',
            '.coffitoo-hero-facts',
            '.coffitoo-hero-visual-card',
            '.coffitoo-section',
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      // Smooth hero reveal timeline (power2.out)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.coffitoo-hero-eyebrow',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.05 }
      )
        .fromTo(
          '.coffitoo-hero-title',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.35'
        )
        .fromTo(
          '.coffitoo-hero-tagline',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.35'
        )
        .fromTo(
          '.coffitoo-hero-desc',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.35'
        )
        .fromTo(
          '.coffitoo-fact-pill',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
          '-=0.3'
        )
        .fromTo(
          heroVisualRef.current,
          { opacity: 0.2, y: 16, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55 },
          '-=0.45'
        );

      // Scroll reveals for sections
      const sections = gsap.utils.toArray('.coffitoo-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const headerLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#featured-coffee' },
    { name: 'Story', href: '#brand-story' },
    { name: 'Process', href: '#process' },
    { name: 'Architecture', href: '#architecture' },
  ];

  return (
    <div className="coffitoo-case-study" ref={rootRef}>
      {/* GLOBAL CASE STUDY HEADER */}
      <CaseStudyHeader
        liveUrl={data.liveUrl}
        projectName={data.title}
        sectionLinks={headerLinks}
      />

      {/* SECTION 01: HERO */}
      <section
        id="hero"
        className="coffitoo-hero"
        ref={heroRef}
        aria-label="Coffitoo Project Overview & Introduction"
      >
        <div className="coffitoo-container">
          <div className="coffitoo-hero-content">
            <span className="coffitoo-hero-eyebrow">{data.eyebrow}</span>
            <h1 className="coffitoo-hero-title">{data.title}</h1>
            <p className="coffitoo-hero-tagline">{data.tagline}</p>
            <p className="coffitoo-hero-desc">{data.description}</p>

            <div
              className="coffitoo-hero-facts"
              role="list"
              aria-label="Project Metadata"
            >
              {data.facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="coffitoo-fact-pill"
                  role="listitem"
                >
                  <span className="coffitoo-fact-label">{fact.label}</span>
                  <span className="coffitoo-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="coffitoo-hero-visual-card"
            ref={heroVisualRef}
            aria-label="Coffitoo Hero Screenshot"
          >
            <div className="coffitoo-visual-frame">
              <img
                src={data.heroImage}
                alt="Coffitoo hero banner showcasing warm café aesthetic and signature coffee presentation"
                className="coffitoo-visual-img"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="coffitoo-visual-caption">
              <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
              <span className="coffitoo-caption-text">
                Hero opening: "Experience Coffee Like Never Before" with dark roast aesthetics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: OVERVIEW */}
      <section
        id="overview"
        className="coffitoo-section coffitoo-overview-section"
        aria-label="Project Purpose & Architectural Overview"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.overview.marker}
            title={data.overview.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-overview-grid">
            <div className="coffitoo-overview-narrative">
              {data.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="coffitoo-overview-p">
                  {p}
                </p>
              ))}

              {/* Data-Integrity Phrased Demo Stats */}
              <div
                className="coffitoo-demo-stats-grid"
                role="list"
                aria-label="Metrics Showcased in Demo UI"
              >
                {data.overview.demoStats.map((stat, idx) => (
                  <div key={idx} className="coffitoo-demo-stat-card" role="listitem">
                    <span className="coffitoo-stat-num">{stat.value}</span>
                    <span className="coffitoo-stat-label">{stat.label}</span>
                    <span className="coffitoo-stat-note">{stat.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="coffitoo-overview-cards" role="list">
              {data.overview.featureCards.map((card, idx) => (
                <div key={idx} className="coffitoo-feature-card" role="listitem">
                  <div className="coffitoo-card-sparkle">
                    <Coffee size={18} aria-hidden="true" />
                  </div>
                  <h3 className="coffitoo-card-title">{card.title}</h3>
                  <p className="coffitoo-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: FULL EXPERIENCE (Continuous Real Showcase) */}
      <section
        id="experience"
        className="coffitoo-section coffitoo-full-exp-section"
        aria-label="Complete Continuous Full-Page Landing Experience"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.experience.marker}
            title={data.experience.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-full-exp-wrapper">
            <p className="coffitoo-full-exp-desc">{data.experience.description}</p>

            <div
              className="coffitoo-full-device-frame"
              ref={fullScreenshotRef}
              tabIndex={0}
              role="region"
              aria-label="Full length scrollable capture of the Coffitoo website"
            >
              <div className="coffitoo-device-header">
                <div className="coffitoo-dot red" aria-hidden="true" />
                <div className="coffitoo-dot yellow" aria-hidden="true" />
                <div className="coffitoo-dot green" aria-hidden="true" />
                <span className="coffitoo-device-url">coffitoo.cafe — Full Landing Experience</span>
              </div>
              <div className="coffitoo-device-scroll-container">
                <img
                  src={data.experience.fullImage}
                  alt="Complete vertical landing page showcase of Coffitoo from hero to footer"
                  className="coffitoo-full-screenshot"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="coffitoo-full-exp-legend">
              <span className="coffitoo-legend-title">KEY VISUAL MILESTONES IN DEMO UI:</span>
              <div className="coffitoo-moments-chips" role="list">
                {data.experience.keyMoments.map((moment, idx) => (
                  <span key={idx} className="coffitoo-moment-chip" role="listitem">
                    {moment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: FEATURED COFFEE MENU */}
      <section
        id="featured-coffee"
        className="coffitoo-section coffitoo-featured-section"
        aria-label="Featured Coffee Menu Presentation"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.featuredCoffee.marker}
            title={data.featuredCoffee.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-featured-layout">
            <div className="coffitoo-featured-visual">
              <img
                src={data.featuredCoffee.image}
                alt="Coffitoo featured coffee menu UI showing espresso varieties and price cards"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  Our Featured Coffee: Six signature roasts with dedicated price points and order CTAs
                </span>
              </div>
            </div>

            <div className="coffitoo-featured-content">
              <p className="coffitoo-section-desc">{data.featuredCoffee.description}</p>

              <div className="coffitoo-menu-grid" role="list">
                {data.featuredCoffee.items.map((item, idx) => (
                  <div key={idx} className="coffitoo-menu-item-card" role="listitem">
                    <div className="coffitoo-menu-item-header">
                      <h3 className="coffitoo-menu-item-name">{item.name}</h3>
                      <span className="coffitoo-menu-item-price">{item.price}</span>
                    </div>
                    <p className="coffitoo-menu-item-notes">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: BRAND EXPERIENCE */}
      <section
        id="brand-story"
        className="coffitoo-section coffitoo-brand-section"
        aria-label="Brand Story and Experience Ethos"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.brandStory.marker}
            title={data.brandStory.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-brand-layout">
            <div className="coffitoo-brand-content">
              <p className="coffitoo-section-desc">{data.brandStory.description}</p>

              <div className="coffitoo-badge-callout">
                <Award size={20} className="coffitoo-badge-icon" aria-hidden="true" />
                <span className="coffitoo-badge-label">{data.brandStory.badgeText}</span>
              </div>

              <div className="coffitoo-brand-highlights" role="list">
                {data.brandStory.highlights.map((h, idx) => (
                  <div key={idx} className="coffitoo-highlight-card" role="listitem">
                    <h3 className="coffitoo-highlight-title">{h.title}</h3>
                    <p className="coffitoo-highlight-detail">{h.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="coffitoo-brand-visual">
              <img
                src={data.brandStory.image}
                alt="Coffitoo About Section showcasing More Than Just Coffee with experience badge"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  Brand storytelling presenting roasting heritage, ambience, and artisan values
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: PROCESS (Farm to Cup) */}
      <section
        id="process"
        className="coffitoo-section coffitoo-journey-section"
        aria-label="Bean Sourcing and Brewing Process"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.processJourney.marker}
            title={data.processJourney.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-journey-layout">
            <div className="coffitoo-journey-visual">
              <img
                src={data.processJourney.image}
                alt="Coffitoo From Farm to Cup 5-step visual roadmap diagram"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  From Farm to Cup: A 5-step roadmap tracing the origin journey
                </span>
              </div>
            </div>

            <div className="coffitoo-journey-steps" role="list">
              {data.processJourney.steps.map((step, idx) => (
                <div key={idx} className="coffitoo-step-card" role="listitem">
                  <span className="coffitoo-step-num">{step.step}</span>
                  <div className="coffitoo-step-body">
                    <h3 className="coffitoo-step-title">{step.title}</h3>
                    <p className="coffitoo-step-detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: OFFER DESIGN */}
      <section
        id="offer-design"
        className="coffitoo-section coffitoo-offer-section"
        aria-label="Promotional Incentive and Offer Design"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.offerDesign.marker}
            title={data.offerDesign.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-offer-layout">
            <div className="coffitoo-offer-content">
              <p className="coffitoo-section-desc">{data.offerDesign.description}</p>

              <div className="coffitoo-promo-tag-pill">
                <Sparkles size={16} aria-hidden="true" />
                <span>{data.offerDesign.discountNote}</span>
              </div>

              <div className="coffitoo-offer-features" role="list">
                {data.offerDesign.features.map((f, idx) => (
                  <div key={idx} className="coffitoo-offer-feat-card" role="listitem">
                    <h3 className="coffitoo-feat-title">{f.title}</h3>
                    <p className="coffitoo-feat-detail">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="coffitoo-offer-visual">
              <img
                src={data.offerDesign.image}
                alt="Coffitoo promotional banner card displaying Buy 2 Coffees Get 1 Free offer"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  Promotional incentive card: Buy 2 Coffees Get 1 Free with caramel button
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: PEOPLE (Baristas) */}
      <section
        id="people"
        className="coffitoo-section coffitoo-people-section"
        aria-label="Barista Team and Craftsmanship Roster"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.people.marker}
            title={data.people.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-people-layout">
            <div className="coffitoo-people-visual">
              <img
                src={data.people.image}
                alt="Coffitoo Expert Baristas section showcasing four barista team member cards"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  Expert Baristas: Editorial portrait cards detailing coffee craft roles
                </span>
              </div>
            </div>

            <div className="coffitoo-team-roster" role="list">
              <p className="coffitoo-section-desc">{data.people.description}</p>
              <div className="coffitoo-team-grid">
                {data.people.team.map((member, idx) => (
                  <div key={idx} className="coffitoo-member-card" role="listitem">
                    <div className="coffitoo-member-badge">
                      <span>0{idx + 1}</span>
                    </div>
                    <h3 className="coffitoo-member-role">{member.role}</h3>
                    <p className="coffitoo-member-spec">{member.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: SOCIAL PROOF (Testimonials) */}
      <section
        id="social-proof"
        className="coffitoo-section coffitoo-proof-section"
        aria-label="Social Proof and Customer Testimonials"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.socialProof.marker}
            title={data.socialProof.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-proof-layout">
            <div className="coffitoo-proof-content">
              <p className="coffitoo-section-desc">{data.socialProof.description}</p>

              <div className="coffitoo-reviews-grid" role="list">
                {data.socialProof.reviews.map((rev, idx) => (
                  <div key={idx} className="coffitoo-review-card" role="listitem">
                    <div className="coffitoo-stars-row" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="coffitoo-star-icon" aria-hidden="true" />
                      ))}
                    </div>
                    <h3 className="coffitoo-review-highlight">{rev.highlight}</h3>
                    <p className="coffitoo-review-quote">{rev.quote}</p>
                    <span className="coffitoo-review-tag">{rev.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="coffitoo-proof-visual">
              <img
                src={data.socialProof.image}
                alt="Coffitoo What Coffee Lovers Say customer review cards with star ratings"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  What Coffee Lovers Say: Testimonial cards with 5-star rating presentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: VISUAL STORY (Gallery) */}
      <section
        id="gallery"
        className="coffitoo-section coffitoo-gallery-section"
        aria-label="Café Atmosphere and Visual Gallery"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.visualStory.marker}
            title={data.visualStory.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-gallery-layout">
            <div className="coffitoo-gallery-visual">
              <img
                src={data.visualStory.image}
                alt="Coffitoo Inside Coffitoo 6-photo masonry gallery capturing cafe ambience"
                className="coffitoo-section-img"
                loading="lazy"
                decoding="async"
              />
              <div className="coffitoo-visual-caption">
                <span className="coffitoo-caption-tag">REAL UI CAPTURE</span>
                <span className="coffitoo-caption-text">
                  Inside Coffitoo: A 6-moment masonry gallery capturing café warmth
                </span>
              </div>
            </div>

            <div className="coffitoo-gallery-details">
              <p className="coffitoo-section-desc">{data.visualStory.description}</p>
              <div className="coffitoo-moments-list" role="list">
                {data.visualStory.moments.map((item, idx) => (
                  <div key={idx} className="coffitoo-moment-item" role="listitem">
                    <CheckCircle2 size={16} className="coffitoo-check-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: VISUAL LANGUAGE */}
      <section
        id="visual-language"
        className="coffitoo-section coffitoo-vislang-section"
        aria-label="Color Palette, Typography, and Design Tokens"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.visualLanguage.marker}
            title={data.visualLanguage.heading}
            accent="#c89a6b"
          />

          <p className="coffitoo-vislang-desc">{data.visualLanguage.description}</p>

          <div className="coffitoo-vislang-grid" role="list">
            {data.visualLanguage.blocks.map((block) => (
              <div key={block.number} className="coffitoo-vislang-card" role="listitem">
                <div className="coffitoo-vislang-img-wrap">
                  <img
                    src={block.image}
                    alt={block.alt}
                    className="coffitoo-vislang-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className="coffitoo-vislang-accent-badge"
                    style={{ backgroundColor: block.accent }}
                    aria-hidden="true"
                  />
                </div>
                <div className="coffitoo-vislang-card-copy">
                  <span className="coffitoo-vislang-num">{block.number}</span>
                  <h3 className="coffitoo-vislang-name">{block.name}</h3>
                  <p className="coffitoo-vislang-text">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: WEBSITE MOMENTS (Editorial Mosaic) */}
      <section
        id="moments"
        className="coffitoo-section coffitoo-moments-section"
        aria-label="Editorial Highlight Mosaic of Website Moments"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.moments.marker}
            title={data.moments.heading}
            accent="#c89a6b"
          />

          <p className="coffitoo-moments-lead">{data.moments.description}</p>

          <div className="coffitoo-mosaic-grid" role="list">
            {data.moments.items.map((item, idx) => (
              <div
                key={idx}
                className={`coffitoo-mosaic-tile coffitoo-tile-${item.size}`}
                role="listitem"
              >
                <div className="coffitoo-tile-image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="coffitoo-tile-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="coffitoo-tile-gradient-overlay" aria-hidden="true" />
                </div>
                <div className="coffitoo-tile-info">
                  <span className="coffitoo-tile-label">{item.label}</span>
                  <h3 className="coffitoo-tile-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: PROCESS */}
      <section
        id="creative-process"
        className="coffitoo-section coffitoo-phases-section"
        aria-label="Design and Frontend Development Process"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.process.marker}
            title={data.process.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-phases-timeline" role="list">
            {data.process.phases.map((ph, idx) => (
              <div key={idx} className="coffitoo-phase-step" role="listitem">
                <div className="coffitoo-phase-marker-col">
                  <span className="coffitoo-phase-dot" aria-hidden="true" />
                  {idx < data.process.phases.length - 1 && (
                    <span className="coffitoo-phase-line" aria-hidden="true" />
                  )}
                </div>
                <div className="coffitoo-phase-copy">
                  <span className="coffitoo-phase-pill">{ph.phase}</span>
                  <h3 className="coffitoo-phase-title">{ph.title}</h3>
                  <p className="coffitoo-phase-detail">{ph.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: MOTION ARCHITECTURE & IMPLEMENTATION */}
      <section
        id="architecture"
        className="coffitoo-section coffitoo-arch-section"
        aria-label="Motion Architecture and Technical Implementation"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.challenges.marker}
            title={data.challenges.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-arch-grid" role="list">
            {data.challenges.items.map((item, idx) => (
              <div key={idx} className="coffitoo-arch-card" role="listitem">
                <div className="coffitoo-arch-header">
                  <span className="coffitoo-arch-badge">FOCUS 0{idx + 1}</span>
                  <h3 className="coffitoo-arch-title">{item.challenge}</h3>
                </div>

                <div className="coffitoo-arch-body">
                  <div className="coffitoo-arch-block">
                    <span className="coffitoo-arch-subhead">CONTEXT</span>
                    <p className="coffitoo-arch-text">{item.whatHappened}</p>
                  </div>

                  <div className="coffitoo-arch-block">
                    <span className="coffitoo-arch-subhead">ARCHITECTURAL SOLUTION</span>
                    <p className="coffitoo-arch-text">{item.solution}</p>
                  </div>

                  <div className="coffitoo-arch-block coffitoo-arch-result-block">
                    <span className="coffitoo-arch-subhead">RESULT</span>
                    <p className="coffitoo-arch-text">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: LEARNINGS */}
      <section
        id="learnings"
        className="coffitoo-section coffitoo-learnings-section"
        aria-label="Project Key Takeaways and Engineering Learnings"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.learnings.marker}
            title={data.learnings.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-learnings-list" role="list">
            {data.learnings.items.map((item, idx) => (
              <div key={idx} className="coffitoo-learning-card" role="listitem">
                <div className="coffitoo-learning-num">
                  <span>0{idx + 1}</span>
                </div>
                <p className="coffitoo-learning-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: TECH STACK */}
      <section
        id="stack"
        className="coffitoo-section coffitoo-stack-section"
        aria-label="Verified Technologies and Tooling"
      >
        <div className="coffitoo-container">
          <CaseStudySectionMarker
            marker={data.techStack.marker}
            title={data.techStack.heading}
            accent="#c89a6b"
          />

          <div className="coffitoo-stack-grid" role="list">
            {data.techStack.items.map((tech, idx) => {
              const IconComponent = TECH_ICON_MAP[tech.name] || Code2;
              return (
                <div key={idx} className="coffitoo-stack-item" role="listitem">
                  <div className="coffitoo-stack-icon-wrap">
                    <IconComponent size={22} aria-hidden="true" />
                  </div>
                  <div className="coffitoo-stack-copy">
                    <h3 className="coffitoo-stack-name">{tech.name}</h3>
                    <p className="coffitoo-stack-role">{tech.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 17: FINALE (CTA) */}
      <section
        id="finale"
        className="coffitoo-section coffitoo-finale-section"
        aria-label="Case Study Conclusion and Portfolio Navigation"
      >
        <div className="coffitoo-container">
          <div className="coffitoo-finale-card">
            <div className="coffitoo-finale-bg" aria-hidden="true" />
            <div className="coffitoo-finale-content">
              <span className="coffitoo-finale-eyebrow">PORTFOLIO CASE STUDY</span>
              <h2 className="coffitoo-finale-title">{data.cta.headline}</h2>
              <p className="coffitoo-finale-desc">{data.cta.description}</p>

              <div className="coffitoo-finale-actions">
                <button
                  type="button"
                  onClick={() => navigate('/#projects', { state: { scrollTo: 'projects' } })}
                  className="coffitoo-btn-primary"
                  aria-label="Return to portfolio projects gallery"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  <span>{data.cta.backText}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: NEXT PROJECT (Circular Loop back to BOO! Ice Cream) */}
      <CaseStudyNextProject nextData={data.nextProject} />
    </div>
  );
}
