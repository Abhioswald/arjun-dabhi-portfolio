import React from 'react';
import './Hero.css';

export default function HeroMedia({ mediaRef, videoRef, onVideoLoaded }) {
  return (
    <div className="hero-media-wrapper" ref={mediaRef}>
      {/* Dynamic Lighting Glows behind portrait */}
      <div className="media-glow-magenta" aria-hidden="true" />
      <div className="media-glow-blue" aria-hidden="true" />

      {/* Main Portrait Video Layer (Scroll-Scrubbed) */}
      <div className="hero-media-mask-container">
        <video
          ref={videoRef}
          className="hero-video-element"
          src="/assets/hero.mp4"
          poster="/assets/hero-portrait.png"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onVideoLoaded}
          aria-label="Arjun Dabhi scroll-scrubbed video portrait"
        >
          {/* Fallback image if video fails or is unsupported */}
          <img
            src="/assets/hero-portrait.png"
            alt="Arjun Dabhi - Computer Engineer"
            className="hero-fallback-image"
          />
        </video>

        {/* Cinematic atmospheric vignette overlays */}
        <div className="media-vignette-top" aria-hidden="true" />
        <div className="media-vignette-bottom" aria-hidden="true" />
        <div className="media-vignette-left" aria-hidden="true" />
        <div className="media-vignette-radial" aria-hidden="true" />
      </div>
    </div>
  );
}
