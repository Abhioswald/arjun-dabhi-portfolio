import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Code2,
  Bot,
  FileCode,
  Palette,
  Cpu,
  Layers,
  Terminal,
  GitBranch,
  Zap,
} from 'lucide-react';
import { skillCategories, everydayTools } from './skillsData';
import './Skills.css';

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

// Icon helper for skill chips
function getSkillIcon(name) {
  switch (name) {
    case 'HTML':
      return <FileCode size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'CSS':
      return <Palette size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'JavaScript':
      return <Cpu size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'React':
      return <Layers size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'Tailwind CSS':
      return <Palette size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'Python':
      return <Terminal size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'GSAP':
      return <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'Git':
      return <GitBranch size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'GitHub':
      return <GithubIcon size={15} />;
    case 'Vite':
      return <Zap size={15} strokeWidth={1.8} aria-hidden="true" />;
    default:
      return <Code2 size={15} strokeWidth={1.8} aria-hidden="true" />;
  }
}

// Icon helper for everyday tools
function getToolIcon(iconName) {
  switch (iconName) {
    case 'Bot':
      return <Bot size={22} strokeWidth={1.75} aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles size={22} strokeWidth={1.75} aria-hidden="true" />;
    default:
      return <Code2 size={22} strokeWidth={1.75} aria-hidden="true" />;
  }
}

export default function Skills() {
  const sectionRef = useRef(null);
  const markerRef = useRef(null);
  const headerMainRef = useRef(null);
  const headerSideRef = useRef(null);
  const cardsRef = useRef(null);
  const toolsStripRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
          toolsStripRef.current,
        ],
        { opacity: 0 }
      );

      // Section Marker: Label upward, Number follows, Line grows downward
      const markerLabel = markerRef.current?.querySelector('.skills-marker-label');
      const markerNumber = markerRef.current?.querySelector('.skills-marker-number');
      const markerLine = markerRef.current?.querySelector('.skills-marker-line');

      if (markerLabel && markerNumber && markerLine) {
        gsap.set([markerLabel, markerNumber], { opacity: 0, y: 18 });
        gsap.set(markerLine, { scaleY: 0, opacity: 0, transformOrigin: 'top center' });

        enterTl.to(markerLabel, { opacity: 1, y: 0, duration: 0.7 }, 0.05);
        enterTl.to(markerNumber, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
        enterTl.to(markerLine, { scaleY: 1, opacity: 1, duration: 0.8 }, 0.18);
      }

      // Eyebrow
      const eyebrow = headerMainRef.current?.querySelector('.skills-eyebrow');
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
      const introCopy = headerMainRef.current?.querySelector('.skills-intro-copy');
      if (introCopy) {
        enterTl.fromTo(
          introCopy,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.32
        );
      }

      // Quote Side
      enterTl.fromTo(
        headerSideRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.26
      );

      // Skill Cards Stagger
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards && cards.length > 0) {
        enterTl.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          },
          0.38
        );
      }

      // Tools Strip
      enterTl.fromTo(
        toolsStripRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.52
      );

      // Desktop subtle parallax & decorative motion (Disabled on mobile <= 768px)
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

        const quoteCard = sectionRef.current?.querySelector('.skills-quote-card');
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

        const purpleGlow = sectionRef.current?.querySelector('.skills-glow-purple');
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
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Cinematic Ambient Background Gradients */}
      <div className="skills-ambient-background" aria-hidden="true">
        <div className="skills-glow-top" />
        <div className="skills-glow-purple" />
        <div className="skills-glow-amber-side" />
        <div className="skills-ambient-vignette" />
      </div>

      <div className="skills-container">
        {/* ============================================================
            HEADER AREA: Marker + Headline/Intro + Quote
            ============================================================ */}
        <div className="skills-header-grid">
          {/* Section Marker SKILLS / 04 */}
          <div className="skills-marker-col">
            <div className="skills-marker-block" ref={markerRef}>
              <span className="skills-marker-label">SKILLS</span>
              <span className="skills-marker-number">04</span>
              <div className="skills-marker-line" aria-hidden="true" />
            </div>
          </div>

          {/* Center / Main Column */}
          <div className="skills-heading-col" ref={headerMainRef}>
            <div className="skills-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>WHAT I WORK WITH</span>
            </div>

            <h2 className="skills-headline">
              <span className="headline-line headline-white">Tools & Skills</span>
              <span className="headline-line headline-amber">
                Powering My Ideas
              </span>
            </h2>

            <div className="skills-intro-copy">
              <p>
                I enjoy exploring technologies that help me turn ideas into
                interactive and meaningful digital experiences.
              </p>
              <p>
                My focus is on building modern web interfaces, experimenting with
                motion, and continuously improving the way I design and develop.
              </p>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="skills-side-col" ref={headerSideRef}>
            <div className="skills-quote-card">
              <Sparkles className="quote-sparkle-icon" size={18} aria-hidden="true" />
              <blockquote className="quote-text">
                “Better tools.<br />
                Bigger ideas.<br />
                Always learning.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* ============================================================
            TOP SKILL CARDS (3 Columns on Desktop)
            ============================================================ */}
        <div className="skills-cards-grid" ref={cardsRef}>
          {skillCategories.map((group) => (
            <article key={group.id} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-card-tag">{group.tag}</span>
                <h3 className="skill-card-title">{group.category}</h3>
                <p className="skill-card-desc">{group.description}</p>
              </div>

              <div className="skill-chips-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-chip-icon">
                      {getSkillIcon(skill.name)}
                    </span>
                    <div className="skill-chip-content">
                      <span className="skill-chip-name">{skill.name}</span>
                      <span className="skill-chip-type">{skill.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ============================================================
            EVERYDAY TOOLS & AI WORKFLOW STRIP
            ============================================================ */}
        <div className="skills-tools-strip" ref={toolsStripRef}>
          <div className="tools-strip-header">
            <div className="tools-strip-title-wrap">
              <span className="tools-strip-eyebrow">WORK ENVIRONMENT</span>
              <h3 className="tools-strip-title">Everyday Tools & AI Workflow</h3>
            </div>
            <div className="tools-strip-rule" aria-hidden="true" />
          </div>

          <div className="tools-strip-grid">
            {everydayTools.map((tool) => (
              <div key={tool.id} className="tool-strip-card">
                <div className="tool-strip-icon-wrap">
                  {getToolIcon(tool.iconName)}
                </div>
                <div className="tool-strip-content">
                  <div className="tool-strip-title-row">
                    <h4 className="tool-name">{tool.name}</h4>
                    <span className="tool-badge">{tool.badge}</span>
                  </div>
                  <p className="tool-detail">{tool.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
