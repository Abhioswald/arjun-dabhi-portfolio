import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

export default function HomePage() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // If navigating back to /#projects or with scrollTo state
    if (location.hash === '#projects' || location.state?.scrollTo === 'projects') {
      const timer = setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="portfolio-homepage">
      {/* Global Navigation Bar */}
      <Navbar navRef={navRef} />

      {/* Main Sections */}
      <main>
        <Hero heroRef={heroRef} navRef={navRef} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
