import React, { useRef, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from './pages/HomePage';
import RouteLoader from './components/RouteLoader/RouteLoader';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Lazy-loaded Case Study Routes
const BooCaseStudy = lazy(() => import('./pages/BooCaseStudy'));
const GajanandCaseStudy = lazy(() => import('./pages/GajanandCaseStudy'));
const AzuraCaseStudy = lazy(() => import('./pages/AzuraCaseStudy'));
const TheWeekndCaseStudy = lazy(() => import('./pages/TheWeekndCaseStudy'));
const CakeeCaseStudy = lazy(() => import('./pages/CakeeCaseStudy'));
const CoffitooCaseStudy = lazy(() => import('./pages/CoffitooCaseStudy'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
        <Route
          path="/projects/boo"
          element={
            <Suspense fallback={<RouteLoader />}>
              <BooCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/projects/gajanand"
          element={
            <Suspense fallback={<RouteLoader />}>
              <GajanandCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/projects/azura"
          element={
            <Suspense fallback={<RouteLoader />}>
              <AzuraCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/projects/the-weeknd"
          element={
            <Suspense fallback={<RouteLoader />}>
              <TheWeekndCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/projects/cakee"
          element={
            <Suspense fallback={<RouteLoader />}>
              <CakeeCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/projects/coffitoo"
          element={
            <Suspense fallback={<RouteLoader />}>
              <CoffitooCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
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
