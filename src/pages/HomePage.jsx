import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';
import { HOMEPAGE_JSON_LD } from '../components/SEO/seoData';

export default function HomePage() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // If navigating with a hash (e.g. /#contact, /#projects) or with scrollTo state
    const targetId = location.hash ? location.hash.replace('#', '') : location.state?.scrollTo;
    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          if (location.state?.scrollTo) {
            el.focus({ preventScroll: true });
          }
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="portfolio-homepage">
      <SEO jsonLd={HOMEPAGE_JSON_LD} />

      {/* Global Navigation Bar */}
      <Navbar navRef={navRef} />

      {/* Main Sections Landmark */}
      <main id="main-content" tabIndex="-1">
        <Hero heroRef={heroRef} navRef={navRef} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
