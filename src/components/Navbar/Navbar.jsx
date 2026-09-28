import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ navRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileToggleRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Dynamic active link tracking without heavy scroll listeners
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for mobile drawer: close on Escape, return focus to toggle
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="navbar-container" ref={navRef}>
      <div className="navbar-inner">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" aria-label="Arjun Dabhi Home" onClick={() => setActiveSection('home')}>
          AD<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'true' : undefined}
              onClick={() => setActiveSection(link.id)}
            >
              {link.name}
              {activeSection === link.id && <span className="nav-link-indicator" />}
            </a>
          ))}
        </nav>

        {/* Far-Right CTA */}
        <div className="navbar-action">
          <a href="#contact" className="nav-cta-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} className="cta-icon" aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            ref={mobileToggleRef}
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={mobileDrawerRef}
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? true : undefined}
      >
        <nav className="mobile-links" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'true' : undefined}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
                mobileToggleRef.current?.focus();
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              mobileToggleRef.current?.focus();
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
