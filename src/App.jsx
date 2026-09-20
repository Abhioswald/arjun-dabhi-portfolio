import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

export default function App() {
  const heroRef = useRef(null);
  const navRef = useRef(null);

  return (
    <div className="portfolio-app-root">
      {/* Global Navigation Bar */}
      <Navbar navRef={navRef} />

      {/* Main Hero Section with Pinned GSAP ScrollTrigger Sequence */}
      <main>
        <Hero heroRef={heroRef} navRef={navRef} />

        {/* Minimal Scroll release container to test pinned hero unpinning */}
        <section className="hero-scroll-release-zone" id="about">
          <div className="release-content">
            <span className="release-tag">FUTURE TRANSITION POINT</span>
            <h2 className="release-title">Next Section Release Verified</h2>
            <p className="release-subtitle">
              The hero pinning sequence successfully completes and smoothly releases into the page flow.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
