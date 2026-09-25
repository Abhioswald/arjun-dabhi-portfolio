import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ExternalLink,
  MapPin,
  Zap,
  Layers,
  Palette,
  Activity,
  Move,
  Type,
} from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { gajanandCaseStudyData } from '../data/caseStudies';
import '../components/CaseStudy/caseStudy.css';
import './GajanandCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

// Inline Monochrome GitHub Icon
function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Verified Technology Icons
const TECH_ICON_MAP = {
  'React 19': Layers,
  'Vite 8': Zap,
  'Tailwind CSS v4': Palette,
  'GSAP 3': Activity,
  'ScrollTrigger': Move,
  'Google Fonts': Type,
};

export default function GajanandCaseStudy() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroVisualRef = useRef(null);
  const fullScreenshotRef = useRef(null);

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

    const newTitle = 'Gajanand Vada Pav — Case Study | Arjun Dabhi';
    const newDesc =
      'A case study of Gajanand Vada Pav, a Gujarati-inspired restaurant website combining local identity, bold food visuals, responsive design and cinematic frontend interactions.';
    const newCanonical = 'https://arjun-dabhi-portfolio.vercel.app/projects/gajanand';
    const newOgImage = 'https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/gajanand/gajanand-hero.webp';

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

  // 2. GSAP Animations and Parallax (Scoped, native scroll only)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const heroTexts = heroRef.current?.querySelectorAll(
        '.gajanand-hero-eyebrow, .gajanand-hero-gujarati-title, .gajanand-hero-secondary-title, .gajanand-hero-desc, .gajanand-hero-actions, .gajanand-hero-facts'
      );
      if (heroTexts && heroTexts.length > 0) {
        heroTl.fromTo(
          heroTexts,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, delay: 0.1 }
        );
      }

      if (heroVisualRef.current) {
        heroTl.fromTo(
          heroVisualRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
          0.2
        );
      }

      // Section Markers & Content Staggers across sections
      const sections = rootRef.current?.querySelectorAll('.gajanand-section');
      if (sections) {
        sections.forEach((sec) => {
          const marker = sec.querySelector('.cs-marker');
          const title = sec.querySelector('.gajanand-section-title');
          const cards = sec.querySelectorAll(
            '.gajanand-overview-card, .gajanand-visual-block, .gajanand-identity-card, .gajanand-moment-card, .gajanand-challenge-card, .gajanand-stack-card'
          );

          const secTl = gsap.timeline({
            scrollTrigger: {
              trigger: sec,
              start: 'top 82%',
              toggleActions: 'play none none none',
              once: true,
            },
            defaults: { ease: 'power3.out' },
          });

          if (marker) {
            secTl.fromTo(
              marker,
              { opacity: 0, y: 18 },
              { opacity: 1, y: 0, duration: 0.6 }
            );
          }

          if (title) {
            secTl.fromTo(
              title,
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.75 },
              0.1
            );
          }

          if (cards && cards.length > 0) {
            secTl.fromTo(
              cards,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
              0.2
            );
          }
        });
      }

      // Desktop subtle food image parallax: 8–18px max (Disabled on mobile)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (heroVisualRef.current) {
          gsap.to(heroVisualRef.current.querySelector('img'), {
            y: 14,
            scale: 1.015,
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
            { y: -12 },
            {
              y: 18,
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

  const d = gajanandCaseStudyData;

  return (
    <div className="gajanand-case-study" ref={rootRef}>
      {/* Ambient Warm Gujarati Saffron/Clay Background Atmosphere */}
      <div className="gajanand-ambient-bg" aria-hidden="true">
        <div className="gajanand-glow-orb-saffron" />
        <div className="gajanand-glow-orb-amber" />
        <div className="gajanand-glow-orb-cream" />
        <div className="gajanand-grid-overlay" />
      </div>

      {/* Case Study Navbar */}
      <CaseStudyHeader liveUrl={d.liveUrl} projectName={d.title} />

      <main>
        {/* ============================================================
            01 — HERO SECTION
            ============================================================ */}
        <section className="gajanand-hero-section" ref={heroRef} aria-label="Project Hero">
          <div className="gajanand-container">
            <div className="gajanand-hero-grid">
              {/* Left Column: Gujarati Title, English Subtitle & Actions */}
              <div className="gajanand-hero-content">
                <div className="gajanand-hero-eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{d.eyebrow}</span>
                </div>

                <div className="gajanand-hero-title-group">
                  <h1 className="gajanand-hero-gujarati-title" lang="gu">
                    {d.gujaratiTitle}
                  </h1>
                  <p className="gajanand-hero-secondary-title">{d.title}</p>
                </div>

                <p className="gajanand-hero-desc">{d.description}</p>

                <div className="gajanand-hero-actions">
                  <a
                    href={d.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gajanand-btn-primary"
                    aria-label="View live Gajanand Vada Pav website in new tab"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>

                  <a
                    href={d.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gajanand-btn-secondary"
                    aria-label="View Gajanand Vada Pav source code on GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>

                {/* Mobile Hero Visual Crop: appears early in first viewport */}
                <div className="gajanand-hero-visual-wrap gajanand-hero-visual-mobile" aria-hidden="true">
                  <img
                    src={d.heroImage}
                    alt=""
                    className="gajanand-hero-visual-img"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="gajanand-hero-visual-vignette" />
                </div>

                {/* Verified Facts Row (3-column horizontal on desktop) */}
                <div className="gajanand-hero-facts">
                  {d.facts.map((fact) => (
                    <div key={fact.label} className="gajanand-fact-item">
                      <span className="gajanand-fact-label">{fact.label}</span>
                      <span className="gajanand-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Visual on Desktop */}
              <div
                className="gajanand-hero-visual-wrap gajanand-hero-visual-desktop"
                ref={heroVisualRef}
              >
                <img
                  src={d.heroImage}
                  alt="Gajanand Vada Pav hero preview showing steaming fresh vada pav with spicy garlic crumble and Gujarati wordmark"
                  className="gajanand-hero-visual-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="gajanand-hero-visual-vignette" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — PROJECT OVERVIEW
            ============================================================ */}
        <section id="overview" className="gajanand-section" aria-label="Project Overview">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.overview.marker} />
              <h2 className="gajanand-section-title">
                More Than Just{' '}
                <span className="gajanand-title-accent">Vada Pav.</span>
              </h2>
              {d.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="gajanand-section-intro">
                  {p}
                </p>
              ))}
            </div>

            {/* 4 Feature Cards */}
            <div className="gajanand-overview-grid">
              {d.overview.featureCards.map((card) => (
                <div key={card.title} className="gajanand-overview-card">
                  <div className="gajanand-card-saffron-bar" aria-hidden="true" />
                  <h3 className="gajanand-card-title">{card.title}</h3>
                  <p className="gajanand-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — FULL WEBSITE EXPERIENCE
            ============================================================ */}
        <section id="experience" className="gajanand-experience-section" aria-label="Full Website Experience">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.experience.marker} />
              <h2 className="gajanand-section-title">{d.experience.heading}</h2>
              <p className="gajanand-section-intro">{d.experience.description}</p>
            </div>

            <div className="gajanand-experience-showcase-wrap">
              <div className="gajanand-experience-frame">
                {/* Browser Frame Chrome */}
                <div className="gajanand-frame-chrome" aria-hidden="true">
                  <div className="gajanand-frame-dots">
                    <span className="gajanand-frame-dot" />
                    <span className="gajanand-frame-dot" />
                    <span className="gajanand-frame-dot" />
                  </div>
                  <span className="gajanand-frame-url">gajanand-six.vercel.app</span>
                  <div style={{ width: 40 }} />
                </div>

                {/* Vertical Full Webpage Screenshot Container */}
                <div className="gajanand-full-screenshot-container" ref={fullScreenshotRef}>
                  <img
                    src={d.experience.fullImage}
                    alt="Full-page vertical preview of Gajanand Vada Pav website showcasing hero, Petlad heritage story, exploded ingredient anatomy, order CTA and Gujarat locations"
                    className="gajanand-full-screenshot-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Key Moments Checklist */}
              <div className="gajanand-experience-moments-list" aria-label="Sections included in website">
                {d.experience.keyMoments.map((moment) => (
                  <span key={moment} className="gajanand-moment-pill">
                    <span className="gajanand-moment-pill-dot" aria-hidden="true" />
                    {moment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — VISUAL LANGUAGE
            ============================================================ */}
        <section className="gajanand-section" aria-label="Visual Language">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.visualLanguage.marker} />
              <h2 className="gajanand-section-title">{d.visualLanguage.heading}</h2>
              <p className="gajanand-section-intro">{d.visualLanguage.description}</p>
            </div>

            <div className="gajanand-visual-lang-grid">
              {d.visualLanguage.blocks.map((block) => (
                <article key={block.number} className="gajanand-visual-block">
                  <div className="gajanand-visual-block-crop">
                    <img
                      src={block.image}
                      alt={block.alt}
                      className="gajanand-visual-block-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="gajanand-visual-block-copy">
                    <span className="gajanand-visual-num">{block.number}</span>
                    <h3 className="gajanand-visual-name">{block.name}</h3>
                    <p className="gajanand-visual-desc">{block.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — LOCAL IDENTITY (DEDICATED SECTION)
            ============================================================ */}
        <section id="identity" className="gajanand-section gajanand-identity-section" aria-label="Local Gujarat Identity">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.localIdentity.marker} />
              <h2 className="gajanand-section-title">{d.localIdentity.heading}</h2>
              <p className="gajanand-section-intro">{d.localIdentity.description}</p>
            </div>

            <div className="gajanand-identity-layout">
              {/* Left Column: Verified Regional Points */}
              <div className="gajanand-identity-cards-list">
                {d.localIdentity.features.map((item) => (
                  <div key={item.label} className="gajanand-identity-card">
                    <div className="gajanand-identity-header">
                      <div className="gajanand-identity-title-row">
                        <MapPin size={16} className="gajanand-identity-icon" aria-hidden="true" />
                        <h3 className="gajanand-identity-label">{item.label}</h3>
                      </div>
                      <span className="gajanand-identity-tag">{item.tag}</span>
                    </div>
                    <p className="gajanand-identity-detail">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Right Column: Real Locations & Gujarat Map Crop */}
              <div className="gajanand-identity-visual-wrap">
                <div className="gajanand-identity-image-frame">
                  <img
                    src={d.localIdentity.image}
                    alt={d.localIdentity.alt}
                    className="gajanand-identity-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gajanand-identity-badge-overlay" aria-hidden="true">
                    <span className="gajanand-badge-pulse-dot" />
                    <span>આણંદ • પેટલાદ • GUJARAT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — WEBSITE MOMENTS (MOSAIC)
            ============================================================ */}
        <section id="moments" className="gajanand-section" aria-label="Website Moments Mosaic">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.moments.marker} />
              <h2 className="gajanand-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.moments.heading}
              </h2>
              <p className="gajanand-section-intro">{d.moments.description}</p>
            </div>

            <div className="gajanand-moments-grid">
              {d.moments.items.map((item) => (
                <div key={item.id} className="gajanand-moment-card">
                  <div className="gajanand-moment-crop-wrap">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="gajanand-moment-crop-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="gajanand-moment-card-body">
                    <span className="gajanand-moment-tag">{item.tag}</span>
                    <h3 className="gajanand-moment-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — PROCESS
            ============================================================ */}
        <section id="process" className="gajanand-section" aria-label="Development Process">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.process.marker} />
              <h2 className="gajanand-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.process.heading}
              </h2>
            </div>

            <div className="gajanand-process-grid">
              {d.process.phases.map((ph) => (
                <div key={ph.number} className="gajanand-process-card">
                  <span className="gajanand-process-num">{ph.number}</span>
                  <h3 className="gajanand-process-title">{ph.title}</h3>
                  <p className="gajanand-process-desc">{ph.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — MOTION & INTERACTION
            ============================================================ */}
        <section className="gajanand-section" aria-label="Motion and Interaction">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.motion.marker} />
              <h2 className="gajanand-section-title">{d.motion.heading}</h2>
              <p className="gajanand-section-intro">{d.motion.description}</p>
            </div>

            <div className="gajanand-motion-grid">
              <div className="gajanand-motion-list">
                {d.motion.points.map((pt) => (
                  <div key={pt.title} className="gajanand-motion-item">
                    <h3 className="gajanand-motion-item-title">{pt.title}</h3>
                    <p className="gajanand-motion-item-desc">{pt.description}</p>
                  </div>
                ))}
              </div>

              <div className="gajanand-motion-visual-wrap">
                <div className="gajanand-motion-visual-inner">
                  <img
                    src={d.motion.visualCrop}
                    alt="Gajanand exploded ingredients motion and scroll choreography visual"
                    className="gajanand-motion-visual-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gajanand-motion-path-ornament" aria-hidden="true">
                    <span>GSAP / SCROLL</span>
                    <div style={{ width: 24, height: 2, background: 'var(--cs-saffron, #f28b18)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            09 — CHALLENGES
            ============================================================ */}
        <section className="gajanand-section" aria-label="Development Challenges">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.challenges.marker} />
              <h2 className="gajanand-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.challenges.heading}
              </h2>
            </div>

            <div className="gajanand-challenges-grid">
              {d.challenges.items.map((item, idx) => (
                <div key={idx} className="gajanand-challenge-card">
                  <div className="gajanand-challenge-header">
                    <span>CHALLENGE 0{idx + 1}</span>
                  </div>
                  <h3 className="gajanand-challenge-title">{item.challenge}</h3>

                  <div className="gajanand-challenge-step">
                    <span className="gajanand-step-label">WHAT HAPPENED</span>
                    <p className="gajanand-step-content">{item.happened}</p>
                  </div>

                  <div className="gajanand-challenge-step">
                    <span className="gajanand-step-label">SOLUTION</span>
                    <p className="gajanand-step-content">{item.solution}</p>
                  </div>

                  <div className="gajanand-challenge-step">
                    <span className="gajanand-step-label">RESULT</span>
                    <p className="gajanand-step-content result">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10 — LEARNINGS
            ============================================================ */}
        <section id="learnings" className="gajanand-section" aria-label="Key Learnings">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.learnings.marker} />
              <h2 className="gajanand-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.learnings.heading}
              </h2>
            </div>

            <div className="gajanand-learnings-grid">
              {d.learnings.items.map((item, idx) => (
                <div key={idx} className="gajanand-learning-item">
                  <span className="gajanand-learning-bullet" aria-hidden="true" />
                  <p className="gajanand-learning-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11 — TECH STACK
            ============================================================ */}
        <section className="gajanand-section" aria-label="Technology Stack">
          <div className="gajanand-container">
            <div className="gajanand-section-header">
              <CaseStudySectionMarker marker={d.techStack.marker} />
              <h2 className="gajanand-section-title">{d.techStack.heading}</h2>
            </div>

            <div className="gajanand-stack-grid">
              {d.techStack.items.map((tech) => {
                const IconComponent = TECH_ICON_MAP[tech.name] || Sparkles;
                return (
                  <div key={tech.name} className="gajanand-stack-card">
                    <div className="gajanand-stack-icon-wrap" aria-hidden="true">
                      <IconComponent size={22} className="gajanand-stack-icon" />
                    </div>
                    <div className="gajanand-stack-body">
                      <h3 className="gajanand-stack-name">{tech.name}</h3>
                      <span className="gajanand-stack-role">{tech.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            12 — PROJECT CLOSING CTA
            ============================================================ */}
        <section className="gajanand-closing-cta-section" aria-label="Visit Project Links">
          <div className="gajanand-closing-cta-container">
            <h2 className="gajanand-closing-headline" lang="gu">
              <span className="gajanand-closing-headline-gradient">{d.cta.headline}</span>
            </h2>
            <p className="gajanand-closing-subheadline">{d.cta.subHeadline}</p>
            <p className="gajanand-closing-desc">{d.cta.description}</p>

            <div className="gajanand-closing-actions">
              <a
                href={d.cta.primaryBtn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gajanand-btn-primary"
                aria-label="Visit Gajanand Vada Pav live site in new tab"
              >
                <span>{d.cta.primaryBtn.text}</span>
              </a>

              <a
                href={d.cta.secondaryBtn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gajanand-btn-secondary"
                aria-label="View Gajanand Vada Pav source code on GitHub"
              >
                <GithubIcon size={16} />
                <span>{d.cta.secondaryBtn.text}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            13 — NEXT PROJECT
            ============================================================ */}
        <CaseStudyNextProject nextData={d.nextProject} />
      </main>
    </div>
  );
}
