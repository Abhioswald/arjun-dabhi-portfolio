import React from 'react';
import { Compass, Globe } from 'lucide-react';
import './Hero.css';

export default function HeroDetails({ detailsRef, outlineRef }) {
  return (
    <div className="hero-details-layer" ref={detailsRef}>
      {/* 1. Upper Right: Glowing Vertical Line & Tracked Keywords */}
      <div className="details-pillar">
        <div className="pillar-glow-line" />
        <div className="pillar-keywords">
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>PROBLEM SOLVER</span>
          <span>LIFELONG LEARNER</span>
        </div>
      </div>

      {/* 2. Extreme Right: Vertical Giant Outline "PORTFOLIO" */}
      <div className="details-vertical-outline" ref={outlineRef} aria-hidden="true">
        <span>PORTFOLIO</span>
      </div>

      {/* 3. Lower Right Quote */}
      <div className="details-quote-block">
        <div className="quote-accent-bar" />
        <p className="quote-text">
          “TURNING IDEAS<br />INTO REALITY.”
        </p>
      </div>

      {/* 4. Bottom Right: Circular Minimal Graphic Badge */}
      <div className="details-location-badge">
        <div className="badge-orbit-ring">
          <Globe size={18} className="badge-center-icon" />
        </div>
        <div className="badge-text-group">
          <span className="badge-title">BASED IN INDIA</span>
          <span className="badge-sub">AVAILABLE WORLDWIDE</span>
        </div>
      </div>
    </div>
  );
}
