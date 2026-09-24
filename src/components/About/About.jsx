import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lightbulb,
  Code2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  FileCode,
  Cpu,
  Layers,
  Palette,
  GitBranch,
  Terminal,
  Mail,
} from 'lucide-react';
import { statsData, cardsData, skillsData, socialData } from './aboutData';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

// Helper for Lucide icon lookup for pillar cards
function getPillarIcon(iconName) {
  switch (iconName) {
    case 'Lightbulb':
      return <Lightbulb size={20} strokeWidth={1.8} />;
    case 'Code2':
      return <Code2 size={20} strokeWidth={1.8} />;
    case 'TrendingUp':
      return <TrendingUp size={20} strokeWidth={1.8} />;
    default:
      return <Sparkles size={20} strokeWidth={1.8} />;
  }
}

// Helper for skill icons
function getSkillIcon(iconName) {
  switch (iconName) {
    case 'FileCode':
      return <FileCode size={15} strokeWidth={1.75} />;
    case 'Cpu':
      return <Cpu size={15} strokeWidth={1.75} />;
    case 'Layers':
      return <Layers size={15} strokeWidth={1.75} />;
    case 'Palette':
      return <Palette size={15} strokeWidth={1.75} />;
    case 'Sparkles':
      return <Sparkles size={15} strokeWidth={1.75} />;
    case 'GitBranch':
      return <GitBranch size={15} strokeWidth={1.75} />;
    case 'Terminal':
      return <Terminal size={15} strokeWidth={1.75} />;
    default:
      return <Code2 size={15} strokeWidth={1.75} />;
  }
}

// Inline Crisp Monochrome SVG Icons for Brand Socials
function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function getSocialIcon(type) {
  switch (type) {
    case 'github':
      return <GithubIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'email':
      return <Mail size={17} strokeWidth={2} aria-hidden="true" />;
    default:
      return null;
  }
}

export default function About() {
  const sectionRef = useRef(null);
  const portraitWrapRef = useRef(null);
  const markerRef = useRef(null);
  const headlineRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);
  const quoteRef = useRef(null);
  const rightIntroRef = useRef(null);
  const cardsRef = useRef(null);
  const skillsRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline triggered as About scrolls into view
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
          portraitWrapRef.current,
          bioRef.current,
          statsRef.current,
          quoteRef.current,
          rightIntroRef.current,
          actionsRef.current,
        ],
        { opacity: 0 }
      );

      // Section Marker: Label upward, Number follows, Line grows downward
      const markerLabel = markerRef.current?.querySelector('.about-marker-label');
      const markerNumber = markerRef.current?.querySelector('.about-marker-number');
      const markerLine = markerRef.current?.querySelector('.about-marker-line');

      if (markerLabel && markerNumber && markerLine) {
        gsap.set([markerLabel, markerNumber], { opacity: 0, y: 18 });
        gsap.set(markerLine, { scaleY: 0, opacity: 0, transformOrigin: 'top center' });

        enterTl.to(markerLabel, { opacity: 1, y: 0, duration: 0.7 }, 0.05);
        enterTl.to(markerNumber, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
        enterTl.to(markerLine, { scaleY: 1, opacity: 1, duration: 0.8 }, 0.18);
      }

      // Portrait: rise & scale subtly into place
      enterTl.fromTo(
        portraitWrapRef.current,
        { opacity: 0, y: 38, scale: 1.025 },
        { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'power3.out' },
        0.1
      );

      // Headline lines: sequential masked upward reveal
      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines && headlineLines.length > 0) {
        enterTl.fromTo(
          headlineLines,
          { opacity: 0, y: 38 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          0.18
        );
      }

      // Biography copy
      enterTl.fromTo(
        bioRef.current,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.36
      );

      // Stats row
      enterTl.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.46
      );

      // Quote
      enterTl.fromTo(
        quoteRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.56
      );

      // Right column intro
      enterTl.fromTo(
        rightIntroRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.32
      );

      // Pillar cards: stagger fade-up
      const cards = cardsRef.current?.querySelectorAll('.pillar-card');
      if (cards && cards.length > 0) {
        enterTl.fromTo(
          cards,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          0.46
        );
      }

      // Skills: sequential reveal and progress bars expanding
      const skillRows = skillsRef.current?.querySelectorAll('.skill-row');
      const skillFills = skillsRef.current?.querySelectorAll('.skill-fill');
      if (skillRows && skillRows.length > 0) {
        enterTl.fromTo(
          skillRows,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0.6
        );
      }

      if (skillFills && skillFills.length > 0) {
        enterTl.fromTo(
          skillFills,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.85, stagger: 0.08, ease: 'power2.out' },
          0.65
        );
      }

      // Actions row (CTA + Socials)
      enterTl.fromTo(
        actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.75
      );

      // 2. Desktop Parallax & Decorative Movement (strictly disabled on mobile <= 768px)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        if (portraitWrapRef.current) {
          gsap.to(portraitWrapRef.current, {
            y: 16,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

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

        if (quoteRef.current) {
          gsap.to(quoteRef.current, {
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

        const amberGlow = sectionRef.current?.querySelector('.about-glow-amber');
        if (amberGlow) {
          gsap.to(amberGlow, {
            y: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Cinematic Atmospheric Lighting Gradients */}
      <div className="about-ambient-background" aria-hidden="true">
        <div className="about-glow-residual" />
        <div className="about-glow-amber" />
        <div className="about-ambient-vignette" />
      </div>

      <div className="about-container about-inner">
        <div className="about-grid">
          {/* ============================================================
              LEFT COLUMN: Marker + Portrait
              ============================================================ */}
          <div className="about-col-left about-left">
            <div className="about-marker-block" ref={markerRef}>
              <span className="about-marker-label">ABOUT</span>
              <span className="about-marker-number">02</span>
              <div className="about-marker-line" aria-hidden="true" />
            </div>

            <div className="about-portrait-wrapper" ref={portraitWrapRef}>
              <img
                src="/assets/about-portrait.png"
                alt="Portrait of Arjun Dabhi"
                className="about-portrait-img"
                loading="lazy"
                decoding="async"
              />
              <div className="about-portrait-fade-top" aria-hidden="true" />
              <div className="about-portrait-fade-bottom" aria-hidden="true" />
              <div className="about-portrait-side-vignette" aria-hidden="true" />
              <div className="about-portrait-glow" aria-hidden="true" />
            </div>
          </div>

          {/* ============================================================
              CENTER COLUMN: Label, Headline, Bio, Stats, Quote
              ============================================================ */}
          <div className="about-col-center about-center">
            <span className="about-meta-label">ABOUT ME</span>

            <h2 className="about-headline" ref={headlineRef}>
              <span className="headline-line headline-line-1">Curious Mind</span>
              <span className="headline-line headline-line-2">Creative Soul</span>
              <span className="headline-line headline-line-3">Always Building</span>
            </h2>

            <div className="about-bio-text" ref={bioRef}>
              <p>
                I'm Arjun Dabhi, a Computer Engineering student and a passionate
                developer who enjoys creating meaningful digital experiences.
              </p>
              <p>
                I enjoy turning ideas into real projects, exploring new technologies,
                and continuously learning to improve my skills and the things I build.
              </p>
            </div>

            <div className="about-stats-row" ref={statsRef}>
              {statsData.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                  <div className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  {idx < statsData.length - 1 && (
                    <div className="stat-divider" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="about-quote-card" ref={quoteRef}>
              <Sparkles className="quote-sparkle-icon" size={18} aria-hidden="true" />
              <blockquote className="quote-text">
                “Better Projects<br />
                A Brighter Tomorrow.”
              </blockquote>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Ideas to Impact, Cards, Skills, Action CTA
              ============================================================ */}
          <div className="about-col-right about-right">
            <div className="about-intro-group" ref={rightIntroRef}>
              <div className="impact-header-row">
                <h3 className="impact-heading">FROM IDEAS TO IMPACT</h3>
                <div className="impact-rule" aria-hidden="true" />
              </div>

              <div className="impact-intro-copy">
                <p>
                  I believe in continuous learning, creative problem solving, and building things that make a difference.
                </p>
                <p style={{ marginTop: '0.6rem' }}>
                  Whether it's a web experience, an idea, or a long-term goal, I'm always working towards growth.
                </p>
              </div>
            </div>

            {/* Learn / Build / Grow Interactive Cards */}
            <div className="pillar-cards-group" ref={cardsRef}>
              {cardsData.map((card) => (
                <div key={card.id} className="pillar-card">
                  <div className="pillar-card-icon">
                    {getPillarIcon(card.iconName)}
                  </div>
                  <h4 className="pillar-card-title">{card.title}</h4>
                  <p className="pillar-card-text">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Skills & Tools */}
            <div className="skills-block" ref={skillsRef}>
              <div className="skills-header-row">
                <h3 className="skills-title">MY SKILLS</h3>
                <span className="skills-subtitle">TOOLS I WORK WITH</span>
              </div>

              <div className="skills-list">
                {skillsData.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-info">
                      <span className="skill-icon-wrap" aria-hidden="true">
                        {getSkillIcon(skill.iconName)}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-track" aria-hidden="true">
                      <div
                        className="skill-fill"
                        style={{ width: `${Math.round(skill.strength * 100)}%` }}
                      />
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row: CTA Button + Social Icons */}
            <div className="about-actions-row" ref={actionsRef}>
              <a href="#contact" className="about-cta-btn">
                <span>LET'S CONNECT</span>
                <ArrowRight size={15} className="cta-arrow" aria-hidden="true" />
              </a>

              <div className="about-socials-group">
                {socialData.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-social-icon-btn"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.type)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
