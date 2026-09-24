import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
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

        {/* Section 2: About Section */}
        <About />
      </main>
    </div>
  );
}
