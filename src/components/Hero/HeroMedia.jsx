import React from 'react';
import './Hero.css';

export default function HeroMedia({
  mediaRef,
  videoRef,
  isVideoReady,
  onVideoReady,
  onVideoError,
}) {
  return (
    <div className="hero-media-wrapper" ref={mediaRef}>
      {/* Dynamic Lighting Glows behind portrait */}
      <div className="media-glow-magenta" aria-hidden="true" />
      <div className="media-glow-blue" aria-hidden="true" />

      {/* Main Portrait Video Layer (Scroll-Scrubbed) */}
      <div className="hero-media-mask-container">
        {/* Independent Poster Image Layer - guarantees immediate portrait render */}
        <img
          src="/assets/hero-portrait.png"
          className={`hero-video-poster ${isVideoReady ? 'video-ready' : ''}`}
          alt=""
          aria-hidden="true"
        />

        <video
          ref={videoRef}
          className={`hero-video-element ${isVideoReady ? 'video-ready' : ''}`}
          src="/assets/hero.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={onVideoReady}
          onCanPlay={onVideoReady}
          onError={onVideoError}
          aria-label="Arjun Dabhi scroll-scrubbed video portrait"
        />

        {/* Cinematic atmospheric vignette overlays */}
        <div className="media-vignette-top" aria-hidden="true" />
        <div className="media-vignette-bottom" aria-hidden="true" />
        <div className="media-vignette-left" aria-hidden="true" />
        <div className="media-vignette-radial" aria-hidden="true" />
      </div>
    </div>
  );
}
