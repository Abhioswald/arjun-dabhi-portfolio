import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Subtle Top Ambient Scroll Progress Bar */}
      <div
        className="global-scroll-progress-bar"
        ref={progressBarRef}
        aria-hidden="true"
      />

      {/* Global Navigation Bar */}
      <Navbar navRef={navRef} />

      {/* Main Hero Section with Pinned GSAP ScrollTrigger Sequence */}
      <main>
        <Hero heroRef={heroRef} navRef={navRef} />

        {/* Section 2: About Section */}
        <About />

        {/* Section 3: Projects Section */}
        <Projects />

        {/* Section 4: Skills Section */}
        <Skills />

        {/* Section 5: Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
