import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Code2,
  Compass,
} from 'lucide-react';
import { contactInfo, bottomInfoBlocks } from './contactData';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

// Inline Monochrome GitHub Icon matching Skills and Projects convention
function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Inline Monochrome LinkedIn Icon matching About and SocialLinks convention
function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Icon helper for bottom info strip
function getInfoIcon(name) {
  switch (name) {
    case 'MessageSquare':
      return <MessageSquare size={18} strokeWidth={1.8} aria-hidden="true" />;
    case 'Code2':
      return <Code2 size={18} strokeWidth={1.8} aria-hidden="true" />;
    case 'Compass':
      return <Compass size={18} strokeWidth={1.8} aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles size={18} strokeWidth={1.8} aria-hidden="true" />;
    default:
      return <Sparkles size={18} strokeWidth={1.8} aria-hidden="true" />;
  }
}

export default function Contact() {
  const sectionRef = useRef(null);
  const markerRef = useRef(null);
  const headingColRef = useRef(null);
  const sideColRef = useRef(null);
  const methodsColRef = useRef(null);
  const formPanelRef = useRef(null);
  const visualColRef = useRef(null);
  const bottomStripRef = useRef(null);

  // Motion refs for subtle desktop parallax
  const envelopeSvgRef = useRef(null);
  const ringsGroupRef = useRef(null);
  const spheresGroupRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Assemble configured contact methods only (strict data adherence)
  const contactCards = [];

  if (contactInfo.email && contactInfo.email.trim()) {
    contactCards.push({
      id: 'email',
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: <Mail size={18} aria-hidden="true" />,
      isExternal: false,
      ariaLabel: `Send email to ${contactInfo.email}`,
    });
  }

  if (contactInfo.linkedin && contactInfo.linkedin.trim()) {
    const displayValue = contactInfo.linkedin
      .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, '')
      .replace(/\/$/, '');
    contactCards.push({
      id: 'linkedin',
      label: 'LinkedIn',
      value: displayValue || 'LinkedIn Profile',
      href: contactInfo.linkedin,
      icon: <LinkedinIcon size={18} />,
      isExternal: true,
      ariaLabel: "Visit Arjun Dabhi's LinkedIn profile",
    });
  }

  if (contactInfo.github && contactInfo.github.trim()) {
    const displayValue = contactInfo.github
      .replace(/^https?:\/\/(www\.)?github\.com\//i, '')
      .replace(/\/$/, '');
    contactCards.push({
      id: 'github',
      label: 'GitHub',
      value: displayValue ? `@${displayValue}` : 'GitHub Profile',
      href: contactInfo.github,
      icon: <GithubIcon size={18} />,
      isExternal: true,
      ariaLabel: "Visit Arjun Dabhi's GitHub profile",
    });
  }

  if (contactInfo.location && contactInfo.location.trim()) {
    contactCards.push({
      id: 'location',
      label: 'Location',
      value: contactInfo.location,
      href: null,
      icon: <MapPin size={18} aria-hidden="true" />,
      isExternal: false,
      ariaLabel: `Location: ${contactInfo.location}`,
    });
  }

  const isEmailConfigured = Boolean(contactInfo.email && contactInfo.email.trim());

  // GSAP Entrance and Parallax Setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Initial state
      gsap.set(
        [
          sideColRef.current,
          methodsColRef.current,
          formPanelRef.current,
          visualColRef.current,
          bottomStripRef.current,
        ],
        { opacity: 0 }
      );

      // Section Marker: Label upward, Number follows, Line grows downward
      const markerLabel = markerRef.current?.querySelector('.contact-marker-label');
      const markerNumber = markerRef.current?.querySelector('.contact-marker-number');
      const markerLine = markerRef.current?.querySelector('.contact-marker-line');

      if (markerLabel && markerNumber && markerLine) {
        gsap.set([markerLabel, markerNumber], { opacity: 0, y: 18 });
        gsap.set(markerLine, { scaleY: 0, opacity: 0, transformOrigin: 'top center' });

        enterTl.to(markerLabel, { opacity: 1, y: 0, duration: 0.7 }, 0.05);
        enterTl.to(markerNumber, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
        enterTl.to(markerLine, { scaleY: 1, opacity: 1, duration: 0.8 }, 0.18);
      }

      // Eyebrow
      const eyebrow = headingColRef.current?.querySelector('.contact-eyebrow');
      if (eyebrow) {
        enterTl.fromTo(
          eyebrow,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.1
        );
      }

      // Headline lines: sequential masked upward reveal
      const headlineLines = headingColRef.current?.querySelectorAll('.headline-line');
      if (headlineLines && headlineLines.length > 0) {
        enterTl.fromTo(
          headlineLines,
          { opacity: 0, y: 38 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          0.16
        );
      }

      // Intro copy
      const introCopy = headingColRef.current?.querySelector('.contact-intro-copy');
      if (introCopy) {
        enterTl.fromTo(
          introCopy,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.32
        );
      }

      // Side Quote
      enterTl.fromTo(
        sideColRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.26
      );

      // Contact Methods
      enterTl.fromTo(
        methodsColRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.36
      );

      // Contact Form Panel
      enterTl.fromTo(
        formPanelRef.current,
        { opacity: 0, y: 38, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85 },
        0.44
      );

      // Right Visual Area
      enterTl.fromTo(
        visualColRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.85 },
        0.52
      );

      // Bottom Info Strip
      enterTl.fromTo(
        bottomStripRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.62
      );

      // 2. Subtle Desktop Parallax on Scroll (min-width: 993px)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 993px)', () => {
        if (markerNumber) {
          gsap.to(markerNumber, {
            y: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4,
            },
          });
        }

        const quoteCard = sectionRef.current?.querySelector('.contact-quote-card');
        if (quoteCard) {
          gsap.to(quoteCard, {
            y: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4,
            },
          });
        }

        const purpleGlow = sectionRef.current?.querySelector('.contact-glow-purple-top');
        if (purpleGlow) {
          gsap.to(purpleGlow, {
            y: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        if (envelopeSvgRef.current) {
          gsap.to(envelopeSvgRef.current, {
            y: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }

        if (ringsGroupRef.current) {
          gsap.to(ringsGroupRef.current, {
            rotation: 8,
            transformOrigin: '190px 200px',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.0,
            },
          });
        }

        if (spheresGroupRef.current) {
          gsap.to(spheresGroupRef.current, {
            y: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    if (name === 'name' && !trimmed) {
      error = 'Please enter your name.';
    } else if (name === 'email') {
      if (!trimmed) {
        error = 'Please enter your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        error = 'Please provide a valid email format.';
      }
    } else if (name === 'message' && !trimmed) {
      error = 'Please enter a message.';
    }

    setFormErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If no email configured, submit is disabled per critical data rule
    if (!isEmailConfigured) return;

    // Validate all required fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (isNameValid && isEmailValid && isMessageValid) {
      const subject = formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`;
      const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
      const mailtoUrl = `mailto:${encodeURIComponent(contactInfo.email)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open user's native email client
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Ambient Lighting Gradients */}
      <div className="contact-ambient-background" aria-hidden="true">
        <div className="contact-glow-amber-bottom" />
        <div className="contact-glow-purple-top" />
        <div className="contact-ambient-vignette" />
      </div>

      <div className="contact-container">
        {/* ============================================================
            HEADER AREA: Marker + Headline/Intro + Quote
            ============================================================ */}
        <div className="contact-header-grid">
          {/* Section Marker CONTACT / 05 */}
          <div className="contact-marker-col">
            <div className="contact-marker-block" ref={markerRef}>
              <span className="contact-marker-label">CONTACT</span>
              <span className="contact-marker-number">05</span>
              <div className="contact-marker-line" aria-hidden="true" />
            </div>
          </div>

          {/* Center Column: Eyebrow + Headline + Intro */}
          <div className="contact-heading-col" ref={headingColRef}>
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot" aria-hidden="true" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="contact-headline">
              <span className="headline-line headline-white">Let’s Build</span>
              <span className="headline-line headline-amber">
                Something Amazing
              </span>
            </h2>

            <div className="contact-intro-copy">
              <p>
                I'm always interested in meaningful conversations, creative ideas,
                and opportunities to learn and build.
              </p>
              <p>
                If you have a project, an idea, or simply want to connect, feel
                free to send me a message.
              </p>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="contact-side-col" ref={sideColRef}>
            <div className="contact-quote-card">
              <Sparkles
                className="contact-sparkle-icon"
                size={18}
                aria-hidden="true"
              />
              <blockquote className="contact-quote-text">
                “Good ideas
                <br />
                start with
                <br />
                a simple
                <br />
                conversation.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* ============================================================
            MAIN CONTENT ASYMMETRIC 3-COLUMN COMPOSITION
            ============================================================ */}
        <div className="contact-main-grid">
          {/* LEFT: Contact Methods */}
          <div className="contact-col-methods" ref={methodsColRef}>
            <div className="contact-methods-header">
              <span className="contact-methods-eyebrow">CHANNELS</span>
              <h3 className="contact-methods-title">Direct Links</h3>
            </div>

            <div className="contact-methods-list">
              {contactCards.map((card) =>
                card.href ? (
                  <a
                    key={card.id}
                    href={card.href}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noopener noreferrer' : undefined}
                    className="contact-method-card"
                    aria-label={card.ariaLabel}
                  >
                    <div className="contact-method-left">
                      <div className="contact-method-icon-wrap">
                        {card.icon}
                      </div>
                      <div className="contact-method-info">
                        <span className="contact-method-label">{card.label}</span>
                        <span className="contact-method-value">{card.value}</span>
                      </div>
                    </div>
                    <div className="contact-method-arrow-btn" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                ) : (
                  <div key={card.id} className="contact-method-card">
                    <div className="contact-method-left">
                      <div className="contact-method-icon-wrap">
                        {card.icon}
                      </div>
                      <div className="contact-method-info">
                        <span className="contact-method-label">{card.label}</span>
                        <span className="contact-method-value">{card.value}</span>
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Graceful note when some channels are not yet configured */}
              {contactCards.length > 0 && contactCards.length < 3 && (
                <p className="contact-methods-note">
                  Additional channels will be connected as new profiles become active.
                </p>
              )}
            </div>
          </div>

          {/* CENTER: Contact Form */}
          <div className="contact-col-form" ref={formPanelRef}>
            <div className="contact-form-panel">
              <div className="contact-form-header">
                <div className="contact-form-title-wrap">
                  <span className="contact-form-dot" aria-hidden="true" />
                  <h3 className="contact-form-title">SEND A MESSAGE</h3>
                </div>
                <span className="contact-form-subtitle">
                  Let’s start a conversation.
                </span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="name"
                    />
                    {formErrors.name && (
                      <span className="form-error-msg" role="alert">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`form-input ${formErrors.email ? 'has-error' : ''}`}
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="email"
                    />
                    {formErrors.email && (
                      <span className="form-error-msg" role="alert">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Project Inquiry / Hello"
                    value={formData.subject}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>

                {/* Message field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={`form-textarea ${formErrors.message ? 'has-error' : ''}`}
                    placeholder="Tell me about your project, idea, or question..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.message && (
                    <span className="form-error-msg" role="alert">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Full-width CTA Send Button */}
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={!isEmailConfigured}
                  aria-label="Send Message"
                >
                  <span>Send Message</span>
                  <ArrowUpRight size={17} className="btn-arrow-icon" aria-hidden="true" />
                </button>

                {/* Neutral note when email is not yet configured */}
                {!isEmailConfigured && (
                  <div className="contact-unavailable-note" role="status">
                    <span className="contact-unavailable-dot" aria-hidden="true" />
                    <span>Contact email will be available soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT: Abstract Visual Composition & Wordmark Strip */}
          <div className="contact-col-visual" ref={visualColRef}>
            <div className="contact-visual-card">
              {/* Background ambient lighting glows */}
              <div className="visual-back-glow-amber" aria-hidden="true" />
              <div className="visual-back-glow-purple" aria-hidden="true" />

              {/* Futuristic SVG Abstract Contact Illustration */}
              <svg
                ref={envelopeSvgRef}
                className="contact-illustration-svg"
                viewBox="0 0 380 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  {/* Glass envelope gradient */}
                  <linearGradient id="envelopeBodyGrad" x1="50" y1="120" x2="330" y2="300" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1e1c2b" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#141320" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#0c0b14" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Envelope rim light gradient (amber to purple) */}
                  <linearGradient id="envelopeBorderGrad" x1="60" y1="120" x2="320" y2="300" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f3b76e" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#ffd494" stopOpacity="0.4" />
                    <stop offset="80%" stopColor="#8a42ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ff1a9b" stopOpacity="0.3" />
                  </linearGradient>

                  {/* Envelope flap gradient */}
                  <linearGradient id="flapGrad" x1="70" y1="130" x2="190" y2="230" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#252238" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#131220" stopOpacity="0.65" />
                  </linearGradient>

                  {/* Orbital ring gradients */}
                  <linearGradient id="ringGrad1" x1="30" y1="90" x2="350" y2="310" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f3b76e" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#8a42ff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.15" />
                  </linearGradient>

                  <linearGradient id="ringGrad2" x1="350" y1="110" x2="40" y2="290" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff1a9b" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#f3b76e" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#8a42ff" stopOpacity="0.15" />
                  </linearGradient>

                  {/* Floating sphere radial gradients */}
                  <radialGradient id="sphereAmber" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ffe4b8" />
                    <stop offset="40%" stopColor="#f3b76e" />
                    <stop offset="85%" stopColor="#964b15" />
                    <stop offset="100%" stopColor="#2a1205" />
                  </radialGradient>

                  <radialGradient id="spherePurple" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#d8baff" />
                    <stop offset="45%" stopColor="#8a42ff" />
                    <stop offset="85%" stopColor="#431485" />
                    <stop offset="100%" stopColor="#13052a" />
                  </radialGradient>

                  <radialGradient id="sphereCyan" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#c5f8ff" />
                    <stop offset="45%" stopColor="#00d2ff" />
                    <stop offset="85%" stopColor="#0b5e96" />
                    <stop offset="100%" stopColor="#031b2e" />
                  </radialGradient>
                </defs>

                {/* Glowing Orbital Rings */}
                <g ref={ringsGroupRef}>
                  {/* Outer Orbital Ellipse */}
                  <ellipse
                    cx="190"
                    cy="200"
                    rx="160"
                    ry="75"
                    transform="rotate(-24 190 200)"
                    stroke="url(#ringGrad1)"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    opacity="0.85"
                  />
                  {/* Inner Intersecting Orbital Ring */}
                  <ellipse
                    cx="190"
                    cy="200"
                    rx="145"
                    ry="62"
                    transform="rotate(32 190 200)"
                    stroke="url(#ringGrad2)"
                    strokeWidth="1.2"
                    strokeDasharray="6 6"
                    opacity="0.75"
                  />
                </g>

                {/* 3D Glass Stylized Envelope Body */}
                <g id="envelope-group">
                  {/* Envelope Base Shadow */}
                  <rect
                    x="75"
                    y="135"
                    width="230"
                    height="145"
                    rx="18"
                    fill="url(#envelopeBodyGrad)"
                    stroke="url(#envelopeBorderGrad)"
                    strokeWidth="1.5"
                  />

                  {/* Inner Letter Glow / Grid Pattern */}
                  <line x1="100" y1="165" x2="280" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="100" y1="185" x2="250" y2="185" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="100" y1="205" x2="220" y2="205" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Envelope Bottom Folds */}
                  <path
                    d="M76 270 L165 210 M304 270 L215 210"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.2"
                  />

                  {/* Envelope Top Triangular Flap */}
                  <path
                    d="M75 140 L190 225 L305 140"
                    fill="url(#flapGrad)"
                    stroke="url(#envelopeBorderGrad)"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />

                  {/* Central Glowing Seal Accent */}
                  <circle cx="190" cy="225" r="7" fill="#f3b76e" />
                  <circle cx="190" cy="225" r="14" stroke="rgba(243, 183, 110, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="190" cy="225" r="3" fill="#ffffff" />
                </g>

                {/* Floating Spheres */}
                <g ref={spheresGroupRef}>
                  {/* Sphere 1: Top-Left Amber */}
                  <circle cx="68" cy="95" r="14" fill="url(#sphereAmber)" filter="drop-shadow(0 0 10px rgba(243, 183, 110, 0.45))" />
                  <circle cx="64" cy="90" r="3" fill="#ffffff" opacity="0.6" />

                  {/* Sphere 2: Bottom-Right Purple */}
                  <circle cx="315" cy="305" r="17" fill="url(#spherePurple)" filter="drop-shadow(0 0 12px rgba(138, 66, 255, 0.5))" />
                  <circle cx="310" cy="299" r="4" fill="#ffffff" opacity="0.6" />

                  {/* Sphere 3: Small Cyan Accent */}
                  <circle cx="325" cy="115" r="9" fill="url(#sphereCyan)" filter="drop-shadow(0 0 8px rgba(0, 210, 255, 0.4))" />
                </g>

                {/* Subtle Decorative Star Sparks */}
                <g className="svg-sparkle">
                  {/* 4-point star near top */}
                  <path
                    d="M190 60 Q190 75 175 75 Q190 75 190 90 Q190 75 205 75 Q190 75 190 60 Z"
                    fill="#f3b76e"
                  />
                  <circle cx="190" cy="75" r="1.5" fill="#ffffff" />
                </g>

                <g className="svg-sparkle-delayed">
                  {/* Small spark near bottom-left */}
                  <path
                    d="M95 315 Q95 325 85 325 Q95 325 95 335 Q95 325 105 325 Q95 325 95 315 Z"
                    fill="#ffd494"
                  />
                </g>
              </svg>
            </div>

            {/* Decorative Vertical/Horizontal Wordmark Strip */}
            <div className="contact-wordmark-strip" aria-hidden="true">
              <span className="wordmark-item">
                <span className="wordmark-dot" />
                <span>IDEAS</span>
              </span>
              <span className="wordmark-item">
                <span className="wordmark-dot" />
                <span>PROJECTS</span>
              </span>
              <span className="wordmark-item">
                <span className="wordmark-dot" />
                <span>COLLABORATION</span>
              </span>
              <span className="wordmark-item">
                <span className="wordmark-dot" />
                <span>CONVERSATIONS</span>
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM INFO STRIP (4 Safe Factual Info Blocks)
            ============================================================ */}
        <div className="contact-bottom-strip" ref={bottomStripRef}>
          {bottomInfoBlocks.map((block) => (
            <div key={block.number} className="contact-info-card">
              <div className="contact-info-card-top">
                <span className="contact-info-card-number">{block.number}</span>
                <span className="contact-info-card-icon">
                  {getInfoIcon(block.iconName)}
                </span>
              </div>
              <div className="contact-info-card-body">
                <h4 className="contact-info-card-title">{block.title}</h4>
                <p className="contact-info-card-desc">{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
