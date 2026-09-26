import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Flame,
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
} from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { theWeekndCaseStudyData } from '../data/caseStudies';
import '../components/CaseStudy/caseStudy.css';
import './TheWeekndCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

// Verified Technology Icons Map
const TECH_ICON_MAP = {
  'HTML5': Layers,
  'CSS3': Palette,
  'Vanilla JavaScript': Code2,
  'WebP Media Pipeline': ImageIcon,
  'Georgia Serif': Type,
  'Responsive Layouts': Sliders,
};

export default function TheWeekndCaseStudy() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroVisualRef = useRef(null);
  const fullScreenshotRef = useRef(null);
  const navigate = useNavigate();

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

    const newTitle = 'The Weeknd — Case Study | Arjun Dabhi';
    const newDesc =
      'A case study of a dark cinematic music website exploring dramatic typography, crimson visual language, immersive imagery and responsive frontend design.';
    const newCanonical = 'https://arjun-dabhi-portfolio.vercel.app/projects/the-weeknd';
    const newOgImage =
      'https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/the-weeknd/weeknd-hero.webp';

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

  // 2. GSAP Animations & Controlled Parallax Lifecycles
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            '.weeknd-hero-title-group',
            '.weeknd-hero-desc',
            '.weeknd-hero-facts',
            '.weeknd-hero-visual-card',
            '.weeknd-section',
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      // Dramatic cinematic hero reveal (0.8-1.1s, power3.out)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.weeknd-hero-eyebrow',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          '.weeknd-hero-title-group',
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.6'
        )
        .fromTo(
          '.weeknd-hero-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.weeknd-hero-facts',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.weeknd-hero-visual-card',
          { opacity: 0, y: 32, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          '-=0.8'
        );

      // Section scroll reveals across the case study
      const revealSections = rootRef.current?.querySelectorAll('.weeknd-reveal-section');
      revealSections?.forEach((sec) => {
        const marker = sec.querySelector('.cs-marker-row');
        const heading = sec.querySelector('.weeknd-section-heading');
        const desc = sec.querySelector('.weeknd-section-desc');
        const elements = sec.querySelectorAll('.weeknd-reveal-item');

        const secTl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });

        if (marker) {
          secTl.fromTo(
            marker,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
          );
        }
        if (heading) {
          secTl.fromTo(
            heading,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
            '-=0.5'
          );
        }
        if (desc) {
          secTl.fromTo(
            desc,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.6'
          );
        }
        if (elements.length > 0) {
          secTl.fromTo(
            elements,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.08,
              ease: 'power3.out',
            },
            '-=0.5'
          );
        }
      });

      // Desktop subtle parallax (min-width: 769px) - 6-14px max
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (heroVisualRef.current) {
          gsap.to(heroVisualRef.current.querySelector('img'), {
            y: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.4,
            },
          });
        }

        if (fullScreenshotRef.current) {
          gsap.fromTo(
            fullScreenshotRef.current,
            { y: -10 },
            {
              y: 14,
              ease: 'none',
              scrollTrigger: {
                trigger: fullScreenshotRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
              },
            }
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const d = theWeekndCaseStudyData;

  const sectionLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Ascension', href: '#ascension' },
    { name: 'Visuals', href: '#visual-language' },
    { name: 'Moments', href: '#moments' },
    { name: 'Process', href: '#process' },
  ];

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate('/#projects', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="weeknd-case-study" ref={rootRef}>
      {/* Ambient Crimson / Blood Red Atmospheric Void */}
      <div className="weeknd-ambient-bg" aria-hidden="true">
        <div className="weeknd-glow-orb-crimson" />
        <div className="weeknd-glow-orb-deep" />
        <div className="weeknd-glow-orb-void" />
        <div className="weeknd-grid-overlay" />
      </div>

      {/* Case Study Header (No Fake Live Button) */}
      <CaseStudyHeader
        liveUrl={d.liveUrl}
        projectName={d.title}
        sectionLinks={sectionLinks}
      />

      <main id="main-content">
        {/* ============================================================
            01 — HERO SECTION
            ============================================================ */}
        <section className="weeknd-hero-section" ref={heroRef} aria-label="Project Hero">
          <div className="weeknd-container">
            <div className="weeknd-hero-grid">
              {/* Left Column: Title, Subtitle, Description & Verified Facts */}
              <div className="weeknd-hero-content">
                <div className="weeknd-hero-eyebrow">
                  <Flame size={15} aria-hidden="true" />
                  <span>{d.eyebrow}</span>
                </div>

                <div className="weeknd-hero-title-group">
                  <h1 className="weeknd-hero-title">
                    <span className="weeknd-hero-title-main">THE</span>
                    <span className="weeknd-hero-title-weeknd">WEEKND</span>
                  </h1>
                  <p className="weeknd-hero-tagline">{d.tagline}</p>
                </div>

                <p className="weeknd-hero-desc">{d.description}</p>

                {/* Verified Project Facts */}
                <div className="weeknd-hero-facts" role="list" aria-label="Project Metadata">
                  {d.facts.map((fact) => (
                    <div key={fact.label} className="weeknd-fact-item" role="listitem">
                      <span className="weeknd-fact-label">{fact.label}</span>
                      <span className="weeknd-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dominant Real Weeknd Hero Visual */}
              <div className="weeknd-hero-visual-wrapper" ref={heroVisualRef}>
                <div className="weeknd-hero-visual-card">
                  <div className="weeknd-hero-visual-frame">
                    <img
                      src={d.heroImage}
                      alt="The Weeknd Hurry Up Tomorrow cinematic hero website screenshot with Abel Tesfaye portrait and crimson smoke"
                      className="weeknd-hero-img"
                      loading="eager"
                      decoding="async"
                      width="1440"
                      height="1080"
                    />
                  </div>
                  <div className="weeknd-visual-badge">
                    <span className="weeknd-badge-dot" />
                    <span>Real Website View · 01 Dawn & Hurry Up Tomorrow</span>
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
          className="weeknd-section weeknd-reveal-section weeknd-overview-section"
          aria-labelledby="overview-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="02"
              label="OVERVIEW"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="overview-heading" className="weeknd-section-heading">
                Music Beyond <span className="weeknd-highlight-crimson">the Screen.</span>
              </h2>
              <div className="weeknd-section-desc weeknd-overview-text">
                {d.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Four Overview Cards */}
            <div className="weeknd-overview-grid" role="list">
              {d.overview.featureCards.map((card, i) => (
                <div
                  key={card.title}
                  className="weeknd-overview-card weeknd-reveal-item"
                  role="listitem"
                >
                  <div className="weeknd-card-num">0{i + 1}</div>
                  <h3 className="weeknd-card-title">{card.title}</h3>
                  <p className="weeknd-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — THE FULL EXPERIENCE (Vertical Showcase)
            ============================================================ */}
        <section
          id="experience"
          className="weeknd-section weeknd-reveal-section weeknd-experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="03"
              label="EXPERIENCE"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="experience-heading" className="weeknd-section-heading">
                The Full <span className="weeknd-highlight-crimson">Experience.</span>
              </h2>
              <p className="weeknd-section-desc">{d.experience.description}</p>
            </div>

            {/* Streamlined Editorial Chapter Flow */}
            <div className="weeknd-experience-chapters weeknd-reveal-item" aria-label="Experience Progression">
              <span className="weeknd-chapter-label">Chapter Sequence:</span>
              <div className="weeknd-chapter-flow">
                {d.experience.chapters.map((ch, idx) => (
                  <React.Fragment key={ch}>
                    <span>{ch}</span>
                    {idx < d.experience.chapters.length - 1 && (
                      <span className="weeknd-chapter-sep">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Vertical Showcase Container (74–82% desktop width) */}
            <div className="weeknd-full-showcase-wrapper" ref={fullScreenshotRef}>
              <div className="weeknd-full-showcase-container">
                <div className="weeknd-browser-bar">
                  <div className="weeknd-browser-dots">
                    <span className="weeknd-dot weeknd-dot-1" />
                    <span className="weeknd-dot weeknd-dot-2" />
                    <span className="weeknd-dot weeknd-dot-3" />
                  </div>
                  <div className="weeknd-browser-url">
                    <span className="weeknd-url-lock">🔒</span>
                    <span>theweeknd-experience.com</span>
                  </div>
                  <div className="weeknd-browser-status">Full Experience</div>
                </div>

                <div className="weeknd-full-img-frame">
                  <img
                    src={d.experience.fullImage}
                    alt="The Weeknd complete vertical website showcase from opening hero to concert finale"
                    className="weeknd-full-img"
                    loading="lazy"
                    decoding="async"
                    width="1100"
                    height="5553"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — ASCENSION (Project-Specific Stage Moment)
            ============================================================ */}
        <section
          id="ascension"
          className="weeknd-section weeknd-reveal-section weeknd-ascension-section"
          aria-labelledby="ascension-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="04"
              label="ASCENSION"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="ascension-heading" className="weeknd-section-heading">
                Ascension. <span className="weeknd-highlight-crimson">Rise Through the Fire.</span>
              </h2>
              <p className="weeknd-section-desc">{d.ascension.description}</p>
            </div>

            {/* Ascension Large Showcase */}
            <div className="weeknd-ascension-visual weeknd-reveal-item">
              <div className="weeknd-ascension-frame">
                <img
                  src={d.ascension.image}
                  alt="Chapter 02 Ascension performance arena with Abel Tesfaye standing in red inferno light"
                  className="weeknd-ascension-img"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="1120"
                />
              </div>
              <div className="weeknd-visual-badge">
                <span className="weeknd-badge-dot" />
                <span>Real Website View · {d.ascension.badge}</span>
              </div>
            </div>

            {/* Manifesto Quote & Stage Details */}
            <div className="weeknd-ascension-meta-grid">
              <div className="weeknd-manifesto-card weeknd-reveal-item">
                <span className="weeknd-manifesto-kicker">CHAPTER MANIFESTO</span>
                <blockquote className="weeknd-manifesto-quote">
                  "{d.ascension.manifesto}"
                </blockquote>
                <span className="weeknd-manifesto-author">— Abel Tesfaye · Chapter 02</span>
              </div>

              <div className="weeknd-stage-details-list weeknd-reveal-item" role="list">
                {d.ascension.details.map((item) => (
                  <div key={item.label} className="weeknd-stage-detail-card" role="listitem">
                    <span className="weeknd-detail-label">{item.label}</span>
                    <p className="weeknd-detail-value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — VISUAL LANGUAGE
            ============================================================ */}
        <section
          id="visual-language"
          className="weeknd-section weeknd-reveal-section weeknd-visual-section"
          aria-labelledby="visual-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="05"
              label="VISUAL LANGUAGE"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="visual-heading" className="weeknd-section-heading">
                Black. <span className="weeknd-highlight-crimson">Crimson.</span> Cinema.
              </h2>
              <p className="weeknd-section-desc">{d.visualLanguage.description}</p>
            </div>

            {/* 3 Visual Language Blocks from Real Crops */}
            <div className="weeknd-visual-blocks-grid" role="list">
              {d.visualLanguage.blocks.map((block) => (
                <div
                  key={block.number}
                  className="weeknd-visual-block-card weeknd-reveal-item"
                  role="listitem"
                >
                  <div className="weeknd-visual-block-media">
                    <img
                      src={block.image}
                      alt={block.alt}
                      className="weeknd-visual-block-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="540"
                    />
                    <div className="weeknd-visual-block-overlay" />
                    <span className="weeknd-block-badge">{block.number}</span>
                  </div>
                  <div className="weeknd-visual-block-meta">
                    <div className="weeknd-visual-block-header">
                      <span
                        className="weeknd-color-indicator"
                        style={{ backgroundColor: block.accent }}
                      />
                      <h3 className="weeknd-block-name">{block.name}</h3>
                    </div>
                    <p className="weeknd-block-subtitle">{block.subtitle}</p>
                    <p className="weeknd-block-desc">{block.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — WEBSITE MOMENTS (Editorial Mosaic)
            ============================================================ */}
        <section
          id="moments"
          className="weeknd-section weeknd-reveal-section weeknd-moments-section"
          aria-labelledby="moments-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="06"
              label="WEBSITE MOMENTS"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="moments-heading" className="weeknd-section-heading">
                Frames From <span className="weeknd-highlight-crimson">the Experience.</span>
              </h2>
              <p className="weeknd-section-desc">{d.moments.description}</p>
            </div>

            {/* Editorial Mosaic Grid */}
            <div className="weeknd-mosaic-grid" role="list">
              {d.moments.items.map((m) => (
                <article
                  key={m.key}
                  className={`weeknd-mosaic-card weeknd-mosaic-${m.key.toLowerCase()} weeknd-reveal-item`}
                  role="listitem"
                >
                  <div className="weeknd-mosaic-media">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="weeknd-mosaic-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="500"
                    />
                    <span className="weeknd-mosaic-key">{m.key}</span>
                  </div>
                  <div className="weeknd-mosaic-info">
                    <span className="weeknd-mosaic-cat">
                      {m.key === 'C' && (
                        <span
                          className="weeknd-badge-dot"
                          style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }}
                          aria-hidden="true"
                        />
                      )}
                      {m.category}
                    </span>
                    <h3 className="weeknd-mosaic-title">{m.title}</h3>
                    <p className="weeknd-mosaic-caption">{m.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — LEGACY (Editorial Magazine Spread)
            ============================================================ */}
        <section
          id="legacy"
          className="weeknd-section weeknd-reveal-section weeknd-legacy-section"
          aria-labelledby="legacy-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="07"
              label="LEGACY"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="legacy-heading" className="weeknd-section-heading">
                Legacy. <span className="weeknd-highlight-crimson">Legends Never Fade.</span>
              </h2>
              <p className="weeknd-section-desc">{d.legacy.description}</p>
            </div>

            <div className="weeknd-legacy-layout">
              {/* Left Column: Real Legacy Screenshot Crop */}
              <div className="weeknd-legacy-preview weeknd-reveal-item">
                <div className="weeknd-legacy-frame">
                  <img
                    src={d.legacy.image}
                    alt="The Weeknd Legacy chapter featuring Abel Tesfaye in red suit with blue smoke and candles"
                    className="weeknd-legacy-img"
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="1080"
                  />
                </div>
                <div className="weeknd-visual-badge">
                  <span className="weeknd-badge-dot" />
                  <span>Real Website View · Chapter 04 Legacy</span>
                </div>
              </div>

              {/* Right Column: Three Editorial Pillars */}
              <div className="weeknd-legacy-pillars" role="list">
                <div className="weeknd-legacy-manifesto-box weeknd-reveal-item">
                  <span className="weeknd-pillar-step">CHAPTER 04 PHILOSOPHY</span>
                  <p className="weeknd-legacy-manifesto-text">"{d.legacy.manifesto}"</p>
                </div>

                {d.legacy.pillars.map((pil) => (
                  <div
                    key={pil.step}
                    className="weeknd-legacy-pillar-card weeknd-reveal-item"
                    role="listitem"
                  >
                    <div className="weeknd-pillar-header">
                      <span className="weeknd-pillar-num">{pil.step}</span>
                      <div>
                        <span className="weeknd-pillar-sub">{pil.subtitle}</span>
                        <h3 className="weeknd-pillar-title">{pil.title}</h3>
                      </div>
                    </div>
                    <p className="weeknd-pillar-desc">{pil.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — AFTERLIFE (Celestial Climax)
            ============================================================ */}
        <section
          id="afterlife"
          className="weeknd-section weeknd-reveal-section weeknd-afterlife-section"
          aria-labelledby="afterlife-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="08"
              label="AFTERLIFE"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="afterlife-heading" className="weeknd-section-heading">
                Afterlife. <span className="weeknd-highlight-crimson">The Other Side of the Void.</span>
              </h2>
              <p className="weeknd-section-desc">{d.afterlife.description}</p>
            </div>

            {/* Afterlife Visual Showcase */}
            <div className="weeknd-afterlife-showcase weeknd-reveal-item">
              <div className="weeknd-afterlife-frame">
                <img
                  src={d.afterlife.image}
                  alt="Chapter 05 Afterlife temple architecture with vertical beam of light and celestial sun portal"
                  className="weeknd-afterlife-img"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="1120"
                />
              </div>
              <div className="weeknd-visual-badge">
                <span className="weeknd-badge-dot" />
                <span>Real Website View · Chapter 05 Afterlife</span>
              </div>
            </div>

            <div className="weeknd-afterlife-quote-card weeknd-reveal-item">
              <span className="weeknd-manifesto-kicker">AFTERLIFE MANIFESTO</span>
              <p className="weeknd-afterlife-quote">"{d.afterlife.manifesto}"</p>
            </div>
          </div>
        </section>

        {/* ============================================================
            09 — MOTION
            ============================================================ */}
        <section
          id="motion"
          className="weeknd-section weeknd-reveal-section weeknd-motion-section"
          aria-labelledby="motion-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="09"
              label="MOTION"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="motion-heading" className="weeknd-section-heading">
                Built With <span className="weeknd-highlight-crimson">Atmosphere.</span>
              </h2>
              <p className="weeknd-section-desc">{d.motion.description}</p>
            </div>

            {/* Motion Traits */}
            <div className="weeknd-motion-grid" role="list">
              {d.motion.traits.map((trait) => (
                <div
                  key={trait.name}
                  className="weeknd-motion-card weeknd-reveal-item"
                  role="listitem"
                >
                  <div className="weeknd-motion-icon-wrap">
                    <Sparkles size={20} aria-hidden="true" />
                  </div>
                  <h3 className="weeknd-motion-title">{trait.name}</h3>
                  <p className="weeknd-motion-desc">{trait.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10 — PROCESS
            ============================================================ */}
        <section
          id="process"
          className="weeknd-section weeknd-reveal-section weeknd-process-section"
          aria-labelledby="process-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="10"
              label="PROCESS"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="process-heading" className="weeknd-section-heading">
                From Mood <span className="weeknd-highlight-crimson">to Experience.</span>
              </h2>
              <p className="weeknd-section-desc">{d.process.description}</p>
            </div>

            {/* Four Development Phases */}
            <div className="weeknd-process-grid" role="list">
              {d.process.phases.map((ph) => (
                <div
                  key={ph.phase}
                  className="weeknd-process-card weeknd-reveal-item"
                  role="listitem"
                >
                  <span className="weeknd-process-badge">{ph.phase}</span>
                  <h3 className="weeknd-process-title">{ph.title}</h3>
                  <p className="weeknd-process-desc">{ph.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11 — CHALLENGES & SOLUTIONS
            ============================================================ */}
        <section
          id="challenges"
          className="weeknd-section weeknd-reveal-section weeknd-challenges-section"
          aria-labelledby="challenges-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="11"
              label="CHALLENGES"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="challenges-heading" className="weeknd-section-heading">
                Keeping Darkness <span className="weeknd-highlight-crimson">Readable.</span>
              </h2>
            </div>

            {/* Challenges List */}
            <div className="weeknd-challenges-list" role="list">
              {d.challenges.items.map((item, idx) => (
                <div
                  key={idx}
                  className="weeknd-challenge-card weeknd-reveal-item"
                  role="listitem"
                >
                  <div className="weeknd-challenge-header">
                    <span className="weeknd-challenge-tag">CHALLENGE 0{idx + 1}</span>
                    <h3 className="weeknd-challenge-title">{item.challenge}</h3>
                  </div>

                  <div className="weeknd-challenge-grid">
                    <div className="weeknd-challenge-col">
                      <div className="weeknd-col-label weeknd-label-problem">
                        <Clock size={14} aria-hidden="true" />
                        <span>WHAT HAPPENED</span>
                      </div>
                      <p className="weeknd-col-text">{item.whatHappened}</p>
                    </div>

                    <div className="weeknd-challenge-col">
                      <div className="weeknd-col-label weeknd-label-solution">
                        <Sliders size={14} aria-hidden="true" />
                        <span>SOLUTION</span>
                      </div>
                      <p className="weeknd-col-text">{item.solution}</p>
                    </div>

                    <div className="weeknd-challenge-col">
                      <div className="weeknd-col-label weeknd-label-result">
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>RESULT</span>
                      </div>
                      <p className="weeknd-col-text">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            12 — LEARNINGS
            ============================================================ */}
        <section
          id="learnings"
          className="weeknd-section weeknd-reveal-section weeknd-learnings-section"
          aria-labelledby="learnings-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="12"
              label="LEARNINGS"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="learnings-heading" className="weeknd-section-heading">
                What This Project <span className="weeknd-highlight-crimson">Taught Me.</span>
              </h2>
            </div>

            <div className="weeknd-learnings-grid" role="list">
              {d.learnings.items.map((item, i) => (
                <div
                  key={i}
                  className="weeknd-learning-card weeknd-reveal-item"
                  role="listitem"
                >
                  <span className="weeknd-learning-num">0{i + 1}</span>
                  <p className="weeknd-learning-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            13 — TECH STACK
            ============================================================ */}
        <section
          id="stack"
          className="weeknd-section weeknd-reveal-section weeknd-stack-section"
          aria-labelledby="stack-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="13"
              label="STACK"
              color="#d31520"
            />

            <div className="weeknd-section-header">
              <h2 id="stack-heading" className="weeknd-section-heading">
                Built <span className="weeknd-highlight-crimson">With.</span>
              </h2>
            </div>

            <div className="weeknd-stack-grid" role="list">
              {d.techStack.items.map((tech) => {
                const IconComponent = TECH_ICON_MAP[tech.name] || Layers;
                return (
                  <div
                    key={tech.name}
                    className="weeknd-stack-card weeknd-reveal-item"
                    role="listitem"
                  >
                    <div className="weeknd-stack-icon-wrap">
                      <IconComponent size={24} aria-hidden="true" />
                    </div>
                    <div className="weeknd-stack-info">
                      <h3 className="weeknd-stack-name">{tech.name}</h3>
                      <p className="weeknd-stack-role">{tech.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            14 — FINALE / EDITORIAL ENDING
            ============================================================ */}
        <section
          id="finale"
          className="weeknd-section weeknd-reveal-section weeknd-ending-section"
          aria-labelledby="finale-heading"
        >
          <div className="weeknd-container">
            <CaseStudySectionMarker
              number="14"
              label="FINALE"
              color="#d31520"
            />

            {/* Dominant Real Visual Frame */}
            <div className="weeknd-ending-visual-frame weeknd-reveal-item">
              <div className="weeknd-ending-frame">
                <img
                  src={d.cta.image}
                  alt="The Weeknd final chapter artwork in atmospheric red and dark void"
                  className="weeknd-ending-img"
                  loading="lazy"
                  decoding="async"
                  width="1080"
                  height="810"
                />
              </div>
              <div className="weeknd-visual-badge">
                <span className="weeknd-badge-dot" />
                <span>Real Website View · Finale Outro</span>
              </div>
            </div>

            {/* Quiet, Atmospheric Typography & Single Action */}
            <div className="weeknd-ending-quiet-signoff weeknd-reveal-item">
              <span className="weeknd-ending-badge">THE FINAL CHAPTER</span>
              <h2 id="finale-heading" className="weeknd-ending-title">
                THE JOURNEY <br />
                <span className="weeknd-highlight-crimson">CONTINUES.</span>
              </h2>
              <p className="weeknd-ending-desc">{d.cta.description}</p>

              <div className="weeknd-ending-actions">
                <a
                  href="/#projects"
                  onClick={handleBackToProjects}
                  className="weeknd-ending-back-btn"
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
            15 — NEXT PROJECT (BOO! Ice Cream Loop)
            ============================================================ */}
        <CaseStudyNextProject nextData={d.nextProject} />
      </main>
    </div>
  );
}
