import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from './pages/HomePage';
import BooCaseStudy from './pages/BooCaseStudy';
import GajanandCaseStudy from './pages/GajanandCaseStudy';
import AzuraCaseStudy from './pages/AzuraCaseStudy';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Global route change scroll handler
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // When navigating to a new page without a specific hash or scrollTo state, scroll to top
    if (!location.hash && !location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.state]);

  return null;
}

function GlobalLayout() {
  const progressBarRef = useRef(null);
  const location = useLocation();

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
  }, [location.pathname]);

  return (
    <div className="portfolio-app-root">
      {/* Subtle Top Ambient Scroll Progress Bar */}
      <div
        className="global-scroll-progress-bar"
        ref={progressBarRef}
        aria-hidden="true"
      />

      <ScrollHandler />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/boo" element={<BooCaseStudy />} />
        <Route path="/projects/gajanand" element={<GajanandCaseStudy />} />
        <Route path="/projects/azura" element={<AzuraCaseStudy />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalLayout />
    </BrowserRouter>
  );
}
