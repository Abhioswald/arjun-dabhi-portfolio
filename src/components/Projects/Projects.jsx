import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { projectsData, filterCategories } from './projectsData';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

// Inline Monochrome GitHub Icon
function GithubIcon({ size = 16 }) {
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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const markerRef = useRef(null);
  const headerMainRef = useRef(null);
  const headerSideRef = useRef(null);
  const filtersRef = useRef(null);
  const cardsGridRef = useRef(null);

  // Filtered projects list based on current activeFilter
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeFilter));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline triggered when Projects scrolls into view
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Initial state
      gsap.set(
        [
          headerSideRef.current,
          filtersRef.current,
        ],
        { opacity: 0 }
      );

      // Section Marker: Label upward, Number follows, Line grows downward
      const markerLabel = markerRef.current?.querySelector('.projects-marker-label');
      const markerNumber = markerRef.current?.querySelector('.projects-marker-number');
      const markerLine = markerRef.current?.querySelector('.projects-marker-line');

      if (markerLabel && markerNumber && markerLine) {
        gsap.set([markerLabel, markerNumber], { opacity: 0, y: 18 });
        gsap.set(markerLine, { scaleY: 0, opacity: 0, transformOrigin: 'top center' });

        enterTl.to(markerLabel, { opacity: 1, y: 0, duration: 0.7 }, 0.05);
        enterTl.to(markerNumber, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
        enterTl.to(markerLine, { scaleY: 1, opacity: 1, duration: 0.8 }, 0.18);
      }

      // Eyebrow
      const eyebrow = headerMainRef.current?.querySelector('.projects-eyebrow');
      if (eyebrow) {
        enterTl.fromTo(
          eyebrow,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.1
        );
      }

      // Headline lines: sequential masked upward reveal
      const headlineLines = headerMainRef.current?.querySelectorAll('.headline-line');
      if (headlineLines && headlineLines.length > 0) {
        enterTl.fromTo(
          headlineLines,
          { opacity: 0, y: 38 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          0.16
        );
      }

      // Copy
      const introCopy = headerMainRef.current?.querySelector('.projects-intro-copy');
      if (introCopy) {
        enterTl.fromTo(
          introCopy,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.32
        );
      }

      // Side Header (Quote + Count)
      enterTl.fromTo(
        headerSideRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.28
      );

      // Filters bar
      enterTl.fromTo(
        filtersRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.38
      );

      // Cards stagger entrance
      const cards = cardsGridRef.current?.querySelectorAll('.project-card');
      if (cards && cards.length > 0) {
        enterTl.fromTo(
          cards,
          { opacity: 0, y: 42, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
          },
          0.44
        );
      }

      // 2. Desktop subtle parallax & decorative motion (Disabled on mobile <= 768px)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (markerNumber) {
          gsap.to(markerNumber, {
            y: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4,
            },
          });
        }

        const quoteCard = sectionRef.current?.querySelector('.projects-quote-card');
        if (quoteCard) {
          gsap.to(quoteCard, {
            y: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4,
            },
          });
        }

        const purpleGlow = sectionRef.current?.querySelector('.projects-glow-purple');
        if (purpleGlow) {
          gsap.to(purpleGlow, {
            y: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        const images = cardsGridRef.current?.querySelectorAll(
          '.project-screenshot-img'
        );
        if (images && images.length > 0) {
          images.forEach((img) => {
            const cardEl = img.closest('.project-card');
            if (cardEl) {
              gsap.fromTo(
                img,
                { y: -6 },
                {
                  y: 6,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: cardEl,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6,
                  },
                }
              );
            }
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Cinematic Ambient Background Gradients */}
      <div className="projects-ambient-background" aria-hidden="true">
        {/* Subtle amber transition warmth at top inheriting from About */}
        <div className="projects-glow-top" />
        {/* Subtle purple atmospheric glow at right edge */}
        <div className="projects-glow-purple" />
        {/* Warm amber atmosphere on lower-left */}
        <div className="projects-glow-amber-side" />
        <div className="projects-ambient-vignette" />
      </div>

      <div className="projects-container">
        {/* ============================================================
            HEADER AREA: Marker + Headline/Intro + Quote/Count
            ============================================================ */}
        <div className="projects-header-grid">
          {/* Section Marker PROJECTS / 03 */}
          <div className="projects-marker-col">
            <div className="projects-marker-block" ref={markerRef}>
              <span className="projects-marker-label">PROJECTS</span>
              <span className="projects-marker-number">03</span>
              <div className="projects-marker-line" aria-hidden="true" />
            </div>
          </div>

          {/* Center / Main Column: Eyebrow, Headline, Intro */}
          <div className="projects-heading-col" ref={headerMainRef}>
            <div className="projects-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>FEATURED WORK</span>
            </div>

            <h2 className="projects-headline">
              <span className="headline-line headline-white">Projects That</span>
              <span className="headline-line headline-amber">
                Turn Ideas Into Reality
              </span>
            </h2>

            <div className="projects-intro-copy">
              <p>
                Each project reflects my curiosity, learning, and passion for
                creating meaningful digital experiences.
              </p>
              <p>
                From product-focused websites to creative landing pages, these
                projects helped me explore new technologies and turn ideas into
                real interactive experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Quote + Project Count */}
          <div className="projects-side-col" ref={headerSideRef}>
            <div className="projects-quote-card">
              <Sparkles className="quote-sparkle-icon" size={18} aria-hidden="true" />
              <blockquote className="quote-text">
                “Good design<br />
                turns ideas into<br />
                experiences people<br />
                actually remember.”
              </blockquote>
            </div>

            <div className="projects-count-wrap">
              <span className="projects-count-num">06 PROJECTS</span>
              <div className="projects-count-line" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ============================================================
            FILTER PILLS
            ============================================================ */}
        <div
          className="projects-filters-wrap"
          role="group"
          aria-label="Filter projects by category"
          ref={filtersRef}
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ============================================================
            PROJECTS GRID (3 Columns × 2 Rows on Desktop)
            ============================================================ */}
        <div className="projects-grid" ref={cardsGridRef}>
          {filteredProjects.map((project, idx) => (
            <article key={project.id} className="project-card">
              {/* Screenshot Container */}
              <div className="project-screenshot-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-screenshot-img"
                  style={{
                    objectPosition: project.objectPosition || 'center top',
                  }}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div
                  className="project-screenshot-gradient"
                  aria-hidden="true"
                />
                <span className="project-num-badge">{project.number}</span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-card-meta">
                  <div className="project-categories-list">
                    {project.categories.map((cat) => (
                      <span key={cat} className="project-category-tag">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                {/* Verified Tech Badges (Only rendered if verified) */}
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech-list">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Row: ONLY rendered if links exist */}
                {project.liveUrl || project.githubUrl ? (
                  <div className="project-card-actions">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-view-link"
                        aria-label={`View ${project.title} live project`}
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
