import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ExternalLink } from 'lucide-react';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySectionMarker from '../components/CaseStudy/CaseStudySectionMarker';
import CaseStudyNextProject from '../components/CaseStudy/CaseStudyNextProject';
import { booCaseStudyData } from '../data/caseStudies';
import '../components/CaseStudy/caseStudy.css';
import './BooCaseStudy.css';

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

export default function BooCaseStudy() {
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

    const newTitle = 'BOO! Ice Cream — Case Study | Arjun Dabhi';
    const newDesc =
      'A case study of BOO! Ice Cream, a dark cinematic product website focused on bold visual storytelling, scroll interaction and responsive frontend development.';
    const newCanonical = 'https://arjun-dabhi-portfolio.vercel.app/projects/boo';
    const newOgImage = 'https://arjun-dabhi-portfolio.vercel.app/assets/case-studies/boo/boo-hero.webp';

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

  // 2. GSAP Animations and Parallax
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const heroTexts = heroRef.current?.querySelectorAll(
        '.boo-hero-eyebrow, .boo-hero-title, .boo-hero-desc, .boo-hero-actions, .boo-hero-facts'
      );
      if (heroTexts && heroTexts.length > 0) {
        heroTl.fromTo(
          heroTexts,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.1 }
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
      const sections = rootRef.current?.querySelectorAll('.boo-section');
      if (sections) {
        sections.forEach((sec) => {
          const marker = sec.querySelector('.cs-marker');
          const title = sec.querySelector('.boo-section-title');
          const cards = sec.querySelectorAll(
            '.boo-overview-card, .boo-visual-block, .boo-moment-card, .boo-challenge-card, .boo-stack-card'
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
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
              0.2
            );
          }
        });
      }

      // Desktop subtle parallax (min-width: 769px)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (heroVisualRef.current) {
          gsap.to(heroVisualRef.current.querySelector('img'), {
            y: 16,
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
            { y: -15 },
            {
              y: 25,
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

  const d = booCaseStudyData;

  return (
    <div className="boo-case-study" ref={rootRef}>
      {/* Ambient Project Atmosphere */}
      <div className="boo-ambient-bg" aria-hidden="true">
        <div className="boo-glow-orb-1" />
        <div className="boo-glow-orb-2" />
        <div className="boo-glow-orb-3" />
        <div className="boo-grid-overlay" />
      </div>

      {/* Minimal Case Study Navbar */}
      <CaseStudyHeader liveUrl={d.liveUrl} projectName={d.title} />

      <main>
        {/* ============================================================
            01 — HERO SECTION
            ============================================================ */}
        <section className="boo-hero-section" ref={heroRef} aria-label="Project Hero">
          <div className="boo-container">
            <div className="boo-hero-grid">
              {/* Left Column: Title & Actions */}
              <div className="boo-hero-content">
                <div className="boo-hero-eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{d.eyebrow}</span>
                </div>

                <h1 className="boo-hero-title">
                  BOO!<br />
                  <span className="boo-hero-title-accent">ICE CREAM</span>
                </h1>

                <p className="boo-hero-desc">{d.description}</p>

                <div className="boo-hero-actions">
                  <a
                    href={d.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boo-btn-primary"
                    aria-label="View live BOO! Ice Cream website in new tab"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>

                  <a
                    href={d.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boo-btn-secondary"
                    aria-label="View BOO! Ice Cream source code on GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>

                {/* Mobile Hero Visual Crop: appears early in first viewport */}
                <div className="boo-hero-visual-wrap boo-hero-visual-mobile" aria-hidden="true">
                  <img
                    src={d.heroImage}
                    alt=""
                    className="boo-hero-visual-img"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="boo-hero-visual-vignette" />
                </div>

                {/* Verified Facts Row */}
                <div className="boo-hero-facts">
                  {d.facts.map((fact) => (
                    <div key={fact.label} className="boo-fact-item">
                      <span className="boo-fact-label">{fact.label}</span>
                      <span className="boo-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Visual on Desktop (8-12% larger visual presence) */}
              <div className="boo-hero-visual-wrap boo-hero-visual-desktop" ref={heroVisualRef}>
                <img
                  src={d.heroImage}
                  alt="BOO! Ice Cream hero preview showing NOT YOUR ORDINARY ICE CREAM with blackcurrant product packaging"
                  className="boo-hero-visual-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="boo-hero-visual-vignette" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — PROJECT OVERVIEW
            ============================================================ */}
        <section id="overview" className="boo-section" aria-label="Project Overview">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.overview.marker} />
              <h2 className="boo-section-title">{d.overview.heading}</h2>
              {d.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="boo-section-intro">
                  {p}
                </p>
              ))}
            </div>

            {/* Overview 4 Feature Cards */}
            <div className="boo-overview-grid">
              {d.overview.featureCards.map((card) => (
                <div key={card.title} className="boo-overview-card">
                  <h3 className="boo-card-title">{card.title}</h3>
                  <p className="boo-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — FULL WEBSITE EXPERIENCE
            ============================================================ */}
        <section id="experience" className="boo-experience-section" aria-label="Full Website Experience">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.experience.marker} />
              <h2 className="boo-section-title">{d.experience.heading}</h2>
              <p className="boo-section-intro">{d.experience.description}</p>
            </div>

            <div className="boo-experience-showcase-wrap">
              <div className="boo-experience-frame">
                {/* Browser Frame Chrome */}
                <div className="boo-frame-chrome" aria-hidden="true">
                  <div className="boo-frame-dots">
                    <span className="boo-frame-dot" />
                    <span className="boo-frame-dot" />
                    <span className="boo-frame-dot" />
                  </div>
                  <span className="boo-frame-url">boo-icecream.vercel.app</span>
                  <div style={{ width: 40 }} />
                </div>

                {/* Vertical Full Webpage Screenshot Container */}
                <div className="boo-full-screenshot-container" ref={fullScreenshotRef}>
                  <img
                    src={d.experience.fullImage}
                    alt="Full-page vertical preview of BOO! Ice Cream website showcasing all sections from hero to final order"
                    className="boo-full-screenshot-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Key Moments Checklist */}
              <div className="boo-experience-moments-list" aria-label="Sections included in website">
                {d.experience.keyMoments.map((moment) => (
                  <span key={moment} className="boo-moment-pill">
                    <span className="boo-moment-pill-dot" aria-hidden="true" />
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
        <section className="boo-section" aria-label="Visual Language">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.visualLanguage.marker} />
              <h2 className="boo-section-title">{d.visualLanguage.heading}</h2>
              <p className="boo-section-intro">{d.visualLanguage.description}</p>
            </div>

            <div className="boo-visual-lang-grid">
              {d.visualLanguage.blocks.map((block) => (
                <article key={block.number} className="boo-visual-block">
                  <div className="boo-visual-block-crop">
                    <img
                      src={block.image}
                      alt={block.alt}
                      className="boo-visual-block-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="boo-visual-block-copy">
                    <span className="boo-visual-num">{block.number}</span>
                    <h3 className="boo-visual-name">{block.name}</h3>
                    <p className="boo-visual-desc">{block.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — WEBSITE MOMENTS (MOSAIC)
            ============================================================ */}
        <section id="moments" className="boo-section" aria-label="Website Moments Mosaic">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.moments.marker} />
              <h2 className="boo-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.moments.heading}
              </h2>
              <p className="boo-section-intro">{d.moments.description}</p>
            </div>

            <div className="boo-moments-grid">
              {d.moments.items.map((item) => (
                <div key={item.id} className="boo-moment-card">
                  <div className="boo-moment-crop-wrap">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="boo-moment-crop-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="boo-moment-card-body">
                    <span className="boo-moment-tag">{item.tag}</span>
                    <h3 className="boo-moment-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — MOTION & INTERACTION
            ============================================================ */}
        <section className="boo-section" aria-label="Motion and Interaction">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.motion.marker} />
              <h2 className="boo-section-title">{d.motion.heading}</h2>
              <p className="boo-section-intro">{d.motion.description}</p>
            </div>

            <div className="boo-motion-grid">
              <div className="boo-motion-list">
                {d.motion.points.map((pt) => (
                  <div key={pt.title} className="boo-motion-item">
                    <h3 className="boo-motion-item-title">{pt.title}</h3>
                    <p className="boo-motion-item-desc">{pt.description}</p>
                  </div>
                ))}
              </div>

              <div className="boo-motion-visual-wrap">
                <div className="boo-motion-visual-inner">
                  <img
                    src={d.motion.visualCrop}
                    alt="BOO! motion visual demonstrating scroll trigger coordination"
                    className="boo-motion-visual-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="boo-motion-path-ornament" aria-hidden="true">
                    <span>GSAP / SCROLL</span>
                    <div style={{ width: 24, height: 2, background: 'var(--cs-purple-bright)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — DEVELOPMENT PROCESS
            ============================================================ */}
        <section id="process" className="boo-section" aria-label="Development Process">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.process.marker} />
              <h2 className="boo-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.process.heading}
              </h2>
            </div>

            <div className="boo-process-grid">
              {d.process.phases.map((ph) => (
                <div key={ph.number} className="boo-process-card">
                  <span className="boo-process-num">{ph.number}</span>
                  <h3 className="boo-process-title">{ph.title}</h3>
                  <p className="boo-process-desc">{ph.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — CHALLENGES
            ============================================================ */}
        <section className="boo-section" aria-label="Development Challenges">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.challenges.marker} />
              <h2 className="boo-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.challenges.heading}
              </h2>
            </div>

            <div className="boo-challenges-grid">
              {d.challenges.items.map((item, idx) => (
                <div key={idx} className="boo-challenge-card">
                  <div className="boo-challenge-header">
                    <span>CHALLENGE 0{idx + 1}</span>
                  </div>
                  <h3 className="boo-challenge-title">{item.challenge}</h3>

                  <div className="boo-challenge-step">
                    <span className="boo-step-label">WHAT HAPPENED</span>
                    <p className="boo-step-content">{item.happened}</p>
                  </div>

                  <div className="boo-challenge-step">
                    <span className="boo-step-label">SOLUTION</span>
                    <p className="boo-step-content">{item.solution}</p>
                  </div>

                  <div className="boo-challenge-step">
                    <span className="boo-step-label">RESULT</span>
                    <p className="boo-step-content result">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            09 — LEARNINGS
            ============================================================ */}
        <section id="learnings" className="boo-section" aria-label="Key Learnings">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.learnings.marker} />
              <h2 className="boo-section-title" style={{ whiteSpace: 'pre-line' }}>
                {d.learnings.heading}
              </h2>
            </div>

            <div className="boo-learnings-grid">
              {d.learnings.items.map((item, idx) => (
                <div key={idx} className="boo-learning-item">
                  <span className="boo-learning-bullet" aria-hidden="true" />
                  <p className="boo-learning-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10 — TECH STACK
            ============================================================ */}
        <section className="boo-section" aria-label="Technology Stack">
          <div className="boo-container">
            <div className="boo-section-header">
              <CaseStudySectionMarker marker={d.techStack.marker} />
              <h2 className="boo-section-title">{d.techStack.heading}</h2>
            </div>

            <div className="boo-stack-grid">
              {d.techStack.items.map((tech) => (
                <div key={tech.name} className="boo-stack-card">
                  <h3 className="boo-stack-name">{tech.name}</h3>
                  <span className="boo-stack-role">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11 — PROJECT CLOSING CTA
            ============================================================ */}
        <section className="boo-closing-cta-section" aria-label="Visit Project Links">
          <div className="boo-closing-cta-container">
            <h2 className="boo-closing-headline" style={{ whiteSpace: 'pre-line' }}>
              <span className="boo-closing-headline-gradient">{d.cta.headline}</span>
            </h2>
            <p className="boo-closing-desc">{d.cta.description}</p>

            <div className="boo-closing-actions">
              <a
                href={d.cta.primaryBtn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="boo-btn-primary"
                aria-label="Visit BOO! Ice Cream live site in new tab"
              >
                <span>{d.cta.primaryBtn.text}</span>
              </a>

              <a
                href={d.cta.secondaryBtn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="boo-btn-secondary"
                aria-label="View BOO! Ice Cream source code on GitHub"
              >
                <GithubIcon size={16} />
                <span>{d.cta.secondaryBtn.text}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            12 — NEXT PROJECT
            ============================================================ */}
        <CaseStudyNextProject nextData={d.nextProject} />
      </main>
    </div>
  );
}
