import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import HeroMedia from './HeroMedia';
import HeroDetails from './HeroDetails';
import HeroStats from './HeroStats';
import SocialLinks from '../Social/SocialLinks';
import MaskedHeading from '../MaskedHeading/MaskedHeading';
import './Hero.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero({ heroRef, navRef }) {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // References for animated elements
  const introRef = useRef(null);
  const titleArjunRef = useRef(null);
  const titleDabhiRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const statsRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const detailsRef = useRef(null);
  const outlineRef = useRef(null);
  const socialRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const bgGlowRef = useRef(null);
  const modalVideoRef = useRef(null);

  // High precision target progress and smooth progress tracking refs
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const rafIdRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  // Video metadata loaded handler: pause immediately, set to exact first frame, refresh triggers
  const handleVideoLoaded = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0.001;
      targetProgressRef.current = 0;
      smoothProgressRef.current = 0;
      lastTimeRef.current = performance.now();
      ScrollTrigger.refresh();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0.001;
      targetProgressRef.current = 0;
      smoothProgressRef.current = 0;
    }

    lastTimeRef.current = performance.now();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth delta-time frame-rate-independent exponential interpolation engine
    const updateVideoFrame = (now) => {
      const last = lastTimeRef.current || now;
      const dt = Math.min((now - last) / 1000, 0.05);
      lastTimeRef.current = now;

      const isMobile = window.innerWidth <= 768;
      const speed = isMobile ? 15 : 12; // desktop: 12, mobile: 15
      const alpha = 1 - Math.exp(-speed * dt);

      const target = targetProgressRef.current;
      let smooth = smoothProgressRef.current + (target - smoothProgressRef.current) * alpha;

      const vid = videoRef.current;

      // 5. Exact Endpoint Snapping: guarantees exact first and final frames
      if (target <= 0.002) {
        smooth = 0;
        smoothProgressRef.current = 0;
        if (vid && vid.readyState >= 2 && vid.currentTime > 0.002) {
          vid.currentTime = 0.001;
        }
      } else if (target >= 0.998) {
        smooth = 1;
        smoothProgressRef.current = 1;
        if (vid && vid.readyState >= 2 && Number.isFinite(vid.duration) && vid.duration > 0) {
          const finalTime = Math.max(0, vid.duration - 0.01);
          if (Math.abs(vid.currentTime - finalTime) > 0.002) {
            vid.currentTime = finalTime;
          }
        }
      } else {
        smoothProgressRef.current = smooth;

        if (
          vid &&
          vid.readyState >= 2 &&
          Number.isFinite(vid.duration) &&
          vid.duration > 0
        ) {
          const wanted = smooth * vid.duration;
          // Performance write guard: Only write currentTime when difference exceeds 0.002s threshold
          if (Math.abs(vid.currentTime - wanted) > 0.002) {
            vid.currentTime = wanted;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(updateVideoFrame);
    };

    if (!prefersReducedMotion) {
      rafIdRef.current = requestAnimationFrame(updateVideoFrame);
    }

    // GSAP context & matchMedia for responsive ScrollTrigger setup
    const ctx = gsap.context(() => {
      // Entrance Timeline
      const introTl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.1 },
      });

      gsap.set(
        [
          introRef.current,
          titleArjunRef.current,
          titleDabhiRef.current,
          subtitleRef.current,
          descRef.current,
          ctaGroupRef.current,
          statsRef.current,
          detailsRef.current,
          socialRef.current,
          scrollIndicatorRef.current,
        ],
        { opacity: 0 }
      );

      gsap.set(mediaRef.current, { opacity: 0, scale: 1.05, force3D: true });
      if (titleArjunRef.current && titleDabhiRef.current) {
        gsap.set([titleArjunRef.current, titleDabhiRef.current], { force3D: true });
      }

      if (navRef?.current) {
        gsap.set(navRef.current, { y: -30, opacity: 0 });
        introTl.to(navRef.current, { y: 0, opacity: 1, duration: 0.9 });
      }

      introTl
        .to(introRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(
          titleArjunRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
          '-=0.4'
        )
        .fromTo(
          titleDabhiRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
          '-=0.96'
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaGroupRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .to(
          mediaRef.current,
          { opacity: 1, scale: 1.0, duration: 1.3, ease: 'power3.out' },
          '-=1.1'
        )
        .fromTo(
          detailsRef.current,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 1.0 },
          '-=0.9'
        )
        .fromTo(
          socialRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.8'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );

      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      // ======================================================================
      // 1. DESKTOP TIMELINE (min-width: 769px) - SMOOTH 0.55 SCRUB & FORCE3D
      // ======================================================================
      mm.add('(min-width: 769px)', () => {
        const desktopDistance = Math.min(
          3800,
          Math.max(2800, Math.round(window.innerHeight * 3.4))
        );

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: `+=${desktopDistance}`,
            scrub: 0.55,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              targetProgressRef.current = self.progress;
            },
          },
        });

        masterTl
          .to(scrollIndicatorRef.current, { opacity: 0, y: 15, duration: 0.08, ease: 'power1.out' }, 0)
          .to(
            [descRef.current, subtitleRef.current, introRef.current],
            { opacity: 0, y: -25, duration: 0.2, ease: 'power1.inOut' },
            0.15
          )
          .to(
            ctaGroupRef.current,
            { opacity: 0, y: -20, duration: 0.18, ease: 'power1.inOut' },
            0.18
          )
          .to(
            statsRef.current,
            { opacity: 0, y: -15, duration: 0.18, ease: 'power1.inOut' },
            0.20
          )
          .to(
            titleArjunRef.current,
            { x: -140, opacity: 0.15, duration: 0.35, ease: 'power1.inOut' },
            0.30
          )
          .to(
            titleDabhiRef.current,
            { x: -190, y: 40, opacity: 0.10, duration: 0.35, ease: 'power1.inOut' },
            0.32
          )
          .to(
            mediaRef.current,
            { scale: 1.04, x: -15, duration: 0.5, ease: 'none' },
            0
          )
          .to(
            mediaRef.current,
            { scale: 1.11, x: -35, duration: 0.5, ease: 'none' },
            0.5
          )
          .to(
            outlineRef.current,
            { opacity: 0.18, y: -65, duration: 0.25, ease: 'power1.out' },
            0.60
          )
          .to(
            bgGlowRef.current,
            { opacity: 0.85, scale: 1.10, duration: 0.25, ease: 'power1.out' },
            0.60
          );

        return () => {
          masterTl.kill();
        };
      });

      // ======================================================================
      // 2. MOBILE & TABLET TIMELINE (max-width: 768px) - RESPONSIVE 0.3 SCRUB
      // ======================================================================
      mm.add('(max-width: 768px)', () => {
        // Mobile scroll distance calculated from viewport height (~1900 - 2200px)
        const scrollDistance = Math.round(Math.max(1900, window.innerHeight * 2.8));

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: `+=${scrollDistance}`,
            scrub: 0.3,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              targetProgressRef.current = self.progress;
            },
          },
        });

        // Simplified Mobile UI Animation:
        // 0–20%: Full Hero visible
        // 20–45%: Description, CTA, stats fade
        // 45–70%: Titles move slightly upward (y: -20px/-30px), face dominant
        // 70–100%: Titles fade subtly, video approaches final frame
        // Media: scale 1.0 -> 1.025 -> 1.05, y: -4px, NO horizontal movement
        mobileTl
          .to(
            [descRef.current, subtitleRef.current, introRef.current],
            { opacity: 0, y: -15, duration: 0.25, ease: 'power1.inOut' },
            0.20
          )
          .to(
            ctaGroupRef.current,
            { opacity: 0, y: -12, duration: 0.22, ease: 'power1.inOut' },
            0.22
          )
          .to(
            statsRef.current,
            { opacity: 0, y: -10, duration: 0.20, ease: 'power1.inOut' },
            0.25
          )
          .to(
            titleArjunRef.current,
            { y: -20, opacity: 0.75, duration: 0.25, ease: 'power1.inOut' },
            0.45
          )
          .to(
            titleDabhiRef.current,
            { y: -30, opacity: 0.65, duration: 0.25, ease: 'power1.inOut' },
            0.48
          )
          .to(
            [titleArjunRef.current, titleDabhiRef.current],
            { opacity: 0.25, duration: 0.25, ease: 'power1.out' },
            0.75
          )
          .to(
            mediaRef.current,
            { scale: 1.025, x: 0, y: -2, duration: 0.5, ease: 'none' },
            0
          )
          .to(
            mediaRef.current,
            { scale: 1.05, x: 0, y: -4, duration: 0.5, ease: 'none' },
            0.5
          );

        return () => {
          mobileTl.kill();
        };
      });
    }, heroRef);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      ctx.revert();
    };
  }, [heroRef, navRef, handleVideoLoaded]);

  return (
    <>
      <section className="hero-section" ref={heroRef} id="home">
        {/* Background Atmospheric Lighting */}
        <div className="hero-ambient-background" ref={bgGlowRef}>
          <div className="ambient-blob-purple" />
          <div className="ambient-blob-magenta" />
          <div className="ambient-blob-blue" />
          <div className="ambient-vignette" />
        </div>

        {/* Center / Right Hero Media (Video + Fallback + Glows + Masks) */}
        <HeroMedia
          mediaRef={mediaRef}
          videoRef={videoRef}
          onVideoLoaded={handleVideoLoaded}
        />

        {/* Right Side Editorial Details (Keywords, Vertical PORTFOLIO, Quote, Location) */}
        <HeroDetails detailsRef={detailsRef} outlineRef={outlineRef} />

        {/* Left Hero Main Content */}
        <div className="hero-content-wrapper">
          {/* Small Intro Badge */}
          <div className="hero-intro-row" ref={introRef}>
            <span className="intro-text">HELLO, I'M</span>
            <span className="intro-dash">─────</span>
          </div>

          {/* Oversized Bold Editorial Masked Typography */}
          <div className="hero-heading-group">
            <MaskedHeading
              ref={titleArjunRef}
              text="ARJUN"
              src="/assets/hero-portrait.png"
              className="hero-title-arjun"
            />

            <MaskedHeading
              ref={titleDabhiRef}
              text="DABHI"
              src="/assets/hero-portrait.png"
              className="hero-title-dabhi"
            />
          </div>

          {/* Subtitle / Role */}
          <div className="hero-subtitle" ref={subtitleRef}>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>P</span>
            <span>U</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
            <span className="subtitle-gap">&nbsp;</span>
            <span>E</span>
            <span>N</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
            <span>E</span>
            <span>R</span>
          </div>

          {/* Editorial Description */}
          <p className="hero-description" ref={descRef}>
            I design and build digital experiences that blend creativity,
            technology and real-world impact.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-row" ref={ctaGroupRef}>
            <a href="#projects" className="hero-primary-btn">
              <span>Explore My Work</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>

            <button
              className="hero-secondary-btn"
              onClick={() => setShowreelOpen(true)}
              aria-label="Watch Showreel"
            >
              <div className="play-icon-circle">
                <Play size={14} fill="currentColor" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </div>

          {/* Stats Bar */}
          <HeroStats statsRef={statsRef} />
        </div>

        {/* Bottom Area: Social Icons on Left & Scroll Down in Center (Desktop) */}
        <div className="hero-bottom-bar">
          <SocialLinks socialRef={socialRef} />

          <div className="scroll-indicator" ref={scrollIndicatorRef}>
            <div className="mouse-icon">
              <div className="mouse-wheel" />
            </div>
            <span className="scroll-text">SCROLL DOWN</span>
            <div className="scroll-line" />
          </div>

          <div className="bottom-empty-spacer" aria-hidden="true" />
        </div>
      </section>

      {/* Showreel Video Modal */}
      {showreelOpen && (
        <div
          className="showreel-modal-backdrop"
          onClick={() => setShowreelOpen(false)}
        >
          <div
            className="showreel-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <span className="modal-title">Arjun Dabhi — Showreel 2026</span>
              <div className="modal-controls">
                <button
                  className="modal-mute-btn"
                  onClick={() => {
                    if (modalVideoRef.current) {
                      modalVideoRef.current.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }
                  }}
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  className="modal-close-btn"
                  onClick={() => setShowreelOpen(false)}
                  aria-label="Close Showreel Modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="modal-video-container">
              <video
                ref={modalVideoRef}
                src="/assets/hero.mp4"
                poster="/assets/hero-portrait.png"
                autoPlay
                controls
                playsInline
                className="modal-video-player"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
