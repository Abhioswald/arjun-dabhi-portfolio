import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ArrowLeft,
  Layers,
  Palette,
  Code2,
  Database,
  Image as ImageIcon,
  Type,
  CheckCircle2,
  Clock,
  Sliders,
  Wind,
} from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { azuraCaseStudyData } from '../data/caseStudies';
import '../components/CaseStudy/caseStudy.css';
import './AzuraCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

// Verified Technology Icons Map
const TECH_ICON_MAP = {
  'HTML5': Layers,
  'CSS3': Palette,
  'JavaScript (ES6+)': Code2,
  'LocalStorage API': Database,
  'Responsive Media': ImageIcon,
  'Georgia Serif': Type,
};

export default function AzuraCaseStudy() {
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

    const newTitle = 'Azura Perfume — Case Study | Arjun Dabhi';
    const newDesc =
      'A case study of Azura, a luxury fragrance website combining tiger-inspired identity, refined editorial design, product storytelling and responsive frontend development.';
    const newCanonical = 'https://arjun-dabhi-portfolio.vercel.app/projects/azura';
    const newOgImage =
      'https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/azura/azura-hero.webp';

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

  // 2. GSAP Animations & Parallax Lifecycles
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Reduced-motion: direct visibility without translation
        gsap.set(
          [
            '.azura-hero-title-group',
            '.azura-hero-desc',
            '.azura-hero-facts',
            '.azura-hero-visual-card',
            '.azura-section',
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      // Calm, measured luxury hero sequence (0.8-1.1s, power3.out)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.azura-hero-eyebrow',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          '.azura-hero-title-group',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.6'
        )
        .fromTo(
          '.azura-hero-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.azura-hero-facts',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.azura-hero-visual-card',
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          '-=0.8'
        );

      // Section scroll reveals across the case study
      const revealSections = rootRef.current?.querySelectorAll('.azura-reveal-section');
      revealSections?.forEach((sec) => {
        const marker = sec.querySelector('.cs-marker-row');
        const heading = sec.querySelector('.azura-section-heading');
        const desc = sec.querySelector('.azura-section-desc');
        const elements = sec.querySelectorAll('.azura-reveal-item');

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
            { opacity: 0, y: 22 },
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

      // Desktop subtle parallax (min-width: 769px) - 6-12px max
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

  const d = azuraCaseStudyData;

  const sectionLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Visuals', href: '#visual-language' },
    { name: 'Process', href: '#process' },
    { name: 'Learnings', href: '#learnings' },
  ];

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate('/#projects', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="azura-case-study" ref={rootRef}>
      {/* Ambient Deep Teal / Gold Luxury Atmospheric Background */}
      <div className="azura-ambient-bg" aria-hidden="true">
        <div className="azura-glow-orb-teal" />
        <div className="azura-glow-orb-gold" />
        <div className="azura-glow-orb-ocean" />
        <div className="azura-grid-overlay" />
      </div>

      {/* Case Study Minimal Header (No Fake Live Button) */}
      <CaseStudyHeader
        liveUrl={d.liveUrl}
        projectName={d.title}
        sectionLinks={sectionLinks}
      />

      <main id="main-content">
        {/* ============================================================
            01 — HERO SECTION
            ============================================================ */}
        <section className="azura-hero-section" ref={heroRef} aria-label="Project Hero">
          <div className="azura-container">
            <div className="azura-hero-grid">
              {/* Left Column: Title, Subtitle, Description & Verified Facts */}
              <div className="azura-hero-content">
                <div className="azura-hero-eyebrow">
                  <Sparkles size={15} aria-hidden="true" />
                  <span>{d.eyebrow}</span>
                </div>

                <div className="azura-hero-title-group">
                  <h1 className="azura-hero-title">
                    <span className="azura-hero-title-main">{d.title.split(' ')[0]}</span>
                    <span className="azura-hero-title-editorial">{d.secondaryWord}</span>
                  </h1>
                  <p className="azura-hero-tagline">{d.tagline}</p>
                </div>

                <p className="azura-hero-desc">{d.description}</p>

                {/* Verified Project Facts */}
                <div className="azura-hero-facts" role="list" aria-label="Project Metadata">
                  {d.facts.map((fact) => (
                    <div key={fact.label} className="azura-fact-item" role="listitem">
                      <span className="azura-fact-label">{fact.label}</span>
                      <span className="azura-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Prominent Real Azura Hero Visual */}
              <div className="azura-hero-visual-wrapper" ref={heroVisualRef}>
                <div className="azura-hero-visual-card">
                  <div className="azura-hero-visual-frame">
                    <img
                      src={d.heroImage}
                      alt="Azura luxury fragrance homepage featuring wild tiger visual and signature perfume bottle"
                      className="azura-hero-img"
                      loading="eager"
                      decoding="async"
                      width="1440"
                      height="1080"
                    />
                  </div>
                  <div className="azura-visual-badge">
                    <span className="azura-badge-dot" />
                    <span>Real Website View · 01 The Untamed Collection</span>
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
          className="azura-section azura-reveal-section azura-overview-section"
          aria-labelledby="overview-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="02"
              label="OVERVIEW"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="overview-heading" className="azura-section-heading">
                More Than Just <span className="azura-highlight-gold">a Fragrance.</span>
              </h2>
              <div className="azura-section-desc azura-overview-text">
                {d.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Four Overview Cards */}
            <div className="azura-overview-grid" role="list">
              {d.overview.featureCards.map((card, i) => (
                <div
                  key={card.title}
                  className="azura-overview-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-card-num">0{i + 1}</div>
                  <h3 className="azura-card-title">{card.title}</h3>
                  <p className="azura-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — THE FULL EXPERIENCE
            ============================================================ */}
        <section
          id="experience"
          className="azura-section azura-reveal-section azura-experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="03"
              label="EXPERIENCE"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="experience-heading" className="azura-section-heading">
                The Full <span className="azura-highlight-gold">Experience.</span>
              </h2>
              <p className="azura-section-desc">{d.experience.description}</p>
            </div>

            {/* Streamlined Editorial Chapter Flow */}
            <div className="azura-experience-chapters azura-reveal-item" aria-label="Experience Progression">
              <span className="azura-chapter-label">Brand Sequence:</span>
              <div className="azura-chapter-flow">
                <span>01 Hero</span>
                <span className="azura-chapter-sep">·</span>
                <span>02 Philosophy</span>
                <span className="azura-chapter-sep">·</span>
                <span>03 Fragrance</span>
                <span className="azura-chapter-sep">·</span>
                <span>04 Materials</span>
                <span className="azura-chapter-sep">·</span>
                <span>05 Collection</span>
                <span className="azura-chapter-sep">·</span>
                <span>06 Atelier</span>
                <span className="azura-chapter-sep">·</span>
                <span>07 Notes</span>
              </div>
            </div>

            {/* Prominent Vertical Full-Page Showcase (76-82% width on desktop) */}
            <div className="azura-full-showcase-wrapper" ref={fullScreenshotRef}>
              <div className="azura-full-showcase-container">
                <div className="azura-browser-bar">
                  <div className="azura-browser-dots">
                    <span className="azura-dot azura-dot-1" />
                    <span className="azura-dot azura-dot-2" />
                    <span className="azura-dot azura-dot-3" />
                  </div>
                  <div className="azura-browser-url">
                    <span className="azura-url-lock">🔒</span>
                    <span>azura-fragrances.com</span>
                  </div>
                  <div className="azura-browser-status">Full Experience</div>
                </div>

                <div className="azura-full-img-frame">
                  <img
                    src={d.experience.fullImage}
                    alt="Azura luxury fragrance complete vertical webpage showcase from hero to footer"
                    className="azura-full-img"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="9320"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — VISUAL LANGUAGE
            ============================================================ */}
        <section
          id="visual-language"
          className="azura-section azura-reveal-section azura-visual-section"
          aria-labelledby="visual-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="04"
              label="VISUAL LANGUAGE"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="visual-heading" className="azura-section-heading">
                Wild. <span className="azura-highlight-gold">Elegant.</span> Distinctive.
              </h2>
              <p className="azura-section-desc">{d.visualLanguage.description}</p>
            </div>

            {/* 3 Visual Language Blocks from Real Crops */}
            <div className="azura-visual-blocks-grid" role="list">
              {d.visualLanguage.blocks.map((block) => (
                <div
                  key={block.number}
                  className="azura-visual-block-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-visual-block-media">
                    <img
                      src={block.image}
                      alt={block.alt}
                      className="azura-visual-block-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="500"
                    />
                    <div className="azura-visual-block-overlay" />
                    <span className="azura-block-badge">{block.number}</span>
                  </div>
                  <div className="azura-visual-block-meta">
                    <div className="azura-visual-block-header">
                      <span
                        className="azura-color-indicator"
                        style={{ backgroundColor: block.accent }}
                      />
                      <h3 className="azura-block-name">{block.name}</h3>
                    </div>
                    <p className="azura-block-desc">{block.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — WEBSITE MOMENTS (Editorial Mosaic)
            ============================================================ */}
        <section
          id="moments"
          className="azura-section azura-reveal-section azura-moments-section"
          aria-labelledby="moments-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="05"
              label="WEBSITE MOMENTS"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="moments-heading" className="azura-section-heading">
                A Story Told <span className="azura-highlight-gold">in Details.</span>
              </h2>
              <p className="azura-section-desc">{d.moments.description}</p>
            </div>

            {/* Editorial Mosaic Grid */}
            <div className="azura-mosaic-grid" role="list">
              {d.moments.items.map((m) => (
                <article
                  key={m.key}
                  className={`azura-mosaic-card azura-mosaic-${m.key.toLowerCase()} azura-reveal-item`}
                  role="listitem"
                >
                  <div className="azura-mosaic-media">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="azura-mosaic-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="480"
                    />
                    <span className="azura-mosaic-key">{m.key}</span>
                  </div>
                  <div className="azura-mosaic-info">
                    <span className="azura-mosaic-cat">{m.category}</span>
                    <h3 className="azura-mosaic-title">{m.title}</h3>
                    <p className="azura-mosaic-caption">{m.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — MATERIALS STORY (Project-Specific Feature)
            ============================================================ */}
        <section
          id="materials"
          className="azura-section azura-reveal-section azura-materials-section"
          aria-labelledby="materials-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="06"
              label="MATERIALS"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="materials-heading" className="azura-section-heading">
                Three Materials. <span className="azura-highlight-gold">One Evolving Memory.</span>
              </h2>
              <p className="azura-section-desc">{d.materials.description}</p>
            </div>

            <div className="azura-materials-layout">
              {/* Left Column: Real Section Screenshot Crop */}
              <div className="azura-materials-preview azura-reveal-item">
                <div className="azura-materials-frame">
                  <img
                    src={d.materials.image}
                    alt="Azura three materials ingredient showcase featuring Bergamot and Sea Salt on cream canvas"
                    className="azura-materials-img"
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="1400"
                  />
                </div>
                <div className="azura-visual-badge">
                  <span className="azura-badge-dot" />
                  <span>Real Website View · 04 Ingredient Story</span>
                </div>
              </div>

              {/* Right Column: Olfactory Note Evolution Progression */}
              <div className="azura-materials-timeline" role="list">
                {d.materials.stages.map((st) => (
                  <div
                    key={st.step}
                    className="azura-timeline-node azura-reveal-item"
                    role="listitem"
                  >
                    <div className="azura-node-header">
                      <div className="azura-node-step">{st.step}</div>
                      <div className="azura-node-phase-group">
                        <span className="azura-node-phase">{st.phase}</span>
                        <h3 className="azura-node-name">{st.name}</h3>
                      </div>
                    </div>

                    <p className="azura-node-detail">{st.detail}</p>

                    <div className="azura-note-pills" aria-label="Fragrance Notes">
                      {st.notes.map((note) => (
                        <span key={note} className="azura-note-pill">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — COLLECTION (Wardrobe of Moods)
            ============================================================ */}
        <section
          id="collection"
          className="azura-section azura-reveal-section azura-collection-section"
          aria-labelledby="collection-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="07"
              label="COLLECTION"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="collection-heading" className="azura-section-heading">
                A Wardrobe <span className="azura-highlight-gold">of Moods.</span>
              </h2>
              <p className="azura-section-desc">{d.collection.description}</p>
            </div>

            {/* Collection Visual Showcase */}
            <div className="azura-collection-visual azura-reveal-item">
              <div className="azura-collection-frame">
                <img
                  src={d.collection.image}
                  alt="Azura collection catalog showing Wild Essence, Oceanic, Nocturne and Lumière bottles"
                  className="azura-collection-img"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="1540"
                />
              </div>
              <div className="azura-visual-badge">
                <span className="azura-badge-dot" />
                <span>Real Website View · 05 The Azura Collection</span>
              </div>
            </div>

            {/* Verified Fragrance Cards */}
            <div className="azura-fragrance-cards-grid" role="list">
              {d.collection.items.map((item) => (
                <div
                  key={item.number}
                  className="azura-fragrance-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-fragrance-card-top">
                    <span className="azura-fragrance-num">{item.number}</span>
                    <span className="azura-fragrance-badge">{item.badge}</span>
                  </div>
                  <h3 className="azura-fragrance-name">{item.name}</h3>
                  <div className="azura-fragrance-price">{item.price}</div>
                  <div className="azura-fragrance-family">{item.family}</div>
                  <div className="azura-fragrance-notes">
                    <span className="azura-notes-label">Notes:</span> {item.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — BRAND & ATELIER STORY
            ============================================================ */}
        <section
          id="story"
          className="azura-section azura-reveal-section azura-story-section"
          aria-labelledby="story-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="08"
              label="STORY"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="story-heading" className="azura-section-heading">
                From Raw Material <span className="azura-highlight-gold">to Lasting Signature.</span>
              </h2>
              <p className="azura-section-desc">{d.story.description}</p>
            </div>

            {/* Atelier Graphic & Sourcing Narrative */}
            <div className="azura-story-showcase azura-reveal-item">
              <div className="azura-story-frame">
                <img
                  src={d.story.image}
                  alt="Azura craftsmanship section from raw material to lasting signature with Grasse atelier notes"
                  className="azura-story-img"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="1480"
                />
              </div>
              <div className="azura-visual-badge">
                <span className="azura-badge-dot" />
                <span>Real Website View · 06 Crafted With Intention</span>
              </div>
            </div>

            {/* Three Craftsmanship Pillars */}
            <div className="azura-story-pillars-grid" role="list">
              {d.story.pillars.map((pil) => (
                <div
                  key={pil.step}
                  className="azura-story-pillar azura-reveal-item"
                  role="listitem"
                >
                  <span className="azura-pillar-step">{pil.step}</span>
                  <div className="azura-pillar-label">{pil.title}</div>
                  <h3 className="azura-pillar-title">{pil.subtitle}</h3>
                  <p className="azura-pillar-desc">{pil.detail}</p>
                </div>
              ))}
            </div>

            {/* Verified Formulation Stats */}
            <div className="azura-story-stats-grid" role="list" aria-label="Atelier Metrics">
              {d.story.stats.map((st) => (
                <div
                  key={st.value}
                  className="azura-story-stat-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-stat-num">{st.value}</div>
                  <div className="azura-stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            09 — PROCESS
            ============================================================ */}
        <section
          id="process"
          className="azura-section azura-reveal-section azura-process-section"
          aria-labelledby="process-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="09"
              label="PROCESS"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="process-heading" className="azura-section-heading">
                From Concept <span className="azura-highlight-gold">to Experience.</span>
              </h2>
              <p className="azura-section-desc">{d.process.description}</p>
            </div>

            {/* Four Development Phases */}
            <div className="azura-process-grid" role="list">
              {d.process.phases.map((ph) => (
                <div
                  key={ph.phase}
                  className="azura-process-card azura-reveal-item"
                  role="listitem"
                >
                  <span className="azura-process-badge">{ph.phase}</span>
                  <h3 className="azura-process-title">{ph.title}</h3>
                  <p className="azura-process-desc">{ph.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10 — MOTION PHILOSOPHY
            ============================================================ */}
        <section
          id="motion"
          className="azura-section azura-reveal-section azura-motion-section"
          aria-labelledby="motion-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="10"
              label="MOTION"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="motion-heading" className="azura-section-heading">
                Motion With <span className="azura-highlight-gold">Restraint.</span>
              </h2>
              <p className="azura-section-desc">{d.motion.description}</p>
            </div>

            {/* Motion Traits */}
            <div className="azura-motion-grid" role="list">
              {d.motion.traits.map((trait) => (
                <div
                  key={trait.name}
                  className="azura-motion-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-motion-icon-wrap">
                    <Wind size={20} aria-hidden="true" />
                  </div>
                  <h3 className="azura-motion-title">{trait.name}</h3>
                  <p className="azura-motion-desc">{trait.detail}</p>
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
          className="azura-section azura-reveal-section azura-challenges-section"
          aria-labelledby="challenges-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="11"
              label="CHALLENGES"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="challenges-heading" className="azura-section-heading">
                Luxury Without <span className="azura-highlight-gold">Visual Noise.</span>
              </h2>
            </div>

            {/* Challenges List */}
            <div className="azura-challenges-list" role="list">
              {d.challenges.items.map((item, idx) => (
                <div
                  key={idx}
                  className="azura-challenge-card azura-reveal-item"
                  role="listitem"
                >
                  <div className="azura-challenge-header">
                    <span className="azura-challenge-tag">CHALLENGE 0{idx + 1}</span>
                    <h3 className="azura-challenge-title">{item.challenge}</h3>
                  </div>

                  <div className="azura-challenge-grid">
                    <div className="azura-challenge-col">
                      <div className="azura-col-label azura-label-problem">
                        <Clock size={14} aria-hidden="true" />
                        <span>WHAT HAPPENED</span>
                      </div>
                      <p className="azura-col-text">{item.whatHappened}</p>
                    </div>

                    <div className="azura-challenge-col">
                      <div className="azura-col-label azura-label-solution">
                        <Sliders size={14} aria-hidden="true" />
                        <span>SOLUTION</span>
                      </div>
                      <p className="azura-col-text">{item.solution}</p>
                    </div>

                    <div className="azura-challenge-col">
                      <div className="azura-col-label azura-label-result">
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>RESULT</span>
                      </div>
                      <p className="azura-col-text">{item.result}</p>
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
          className="azura-section azura-reveal-section azura-learnings-section"
          aria-labelledby="learnings-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="12"
              label="LEARNINGS"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="learnings-heading" className="azura-section-heading">
                What This Project <span className="azura-highlight-gold">Taught Me.</span>
              </h2>
            </div>

            <div className="azura-learnings-grid" role="list">
              {d.learnings.items.map((item, i) => (
                <div
                  key={i}
                  className="azura-learning-card azura-reveal-item"
                  role="listitem"
                >
                  <span className="azura-learning-num">0{i + 1}</span>
                  <p className="azura-learning-text">{item}</p>
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
          className="azura-section azura-reveal-section azura-stack-section"
          aria-labelledby="stack-heading"
        >
          <div className="azura-container">
            <CaseStudySectionMarker
              number="13"
              label="STACK"
              color="#d8b46b"
            />

            <div className="azura-section-header">
              <h2 id="stack-heading" className="azura-section-heading">
                Built <span className="azura-highlight-gold">With.</span>
              </h2>
            </div>

            <div className="azura-stack-grid" role="list">
              {d.techStack.items.map((tech) => {
                const IconComponent = TECH_ICON_MAP[tech.name] || Layers;
                return (
                  <div
                    key={tech.name}
                    className="azura-stack-card azura-reveal-item"
                    role="listitem"
                  >
                    <div className="azura-stack-icon-wrap">
                      <IconComponent size={24} aria-hidden="true" />
                    </div>
                    <div className="azura-stack-info">
                      <h3 className="azura-stack-name">{tech.name}</h3>
                      <p className="azura-stack-role">{tech.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            14 — PROJECT LINKS / EDITORIAL ENDING
            ============================================================ */}
        <section className="azura-ending-section" aria-label="Case Study Conclusion">
          <div className="azura-container">
            <div className="azura-ending-card">
              <div className="azura-ending-ambient" aria-hidden="true" />
              <div className="azura-ending-content">
                <span className="azura-ending-badge">AZURA PARFUMERIE</span>
                <h2 className="azura-ending-title">
                  Discover <br />
                  <span className="azura-highlight-gold">the Wild Essence.</span>
                </h2>
                <p className="azura-ending-desc">{d.cta.description}</p>

                <div className="azura-ending-actions">
                  <a
                    href="/#projects"
                    onClick={handleBackToProjects}
                    className="azura-ending-back-btn"
                    aria-label="Return to portfolio projects showcase"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>Back to Projects</span>
                  </a>
                </div>
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
