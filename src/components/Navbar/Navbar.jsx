import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ navRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'Skills', href: '#skills', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <header className="navbar-container" ref={navRef}>
      <div className="navbar-inner">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" aria-label="Arjun Dabhi Home">
          AD<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${link.active ? 'active' : ''}`}
            >
              {link.name}
              {link.active && <span className="nav-link-indicator" />}
            </a>
          ))}
        </nav>

        {/* Far-Right CTA */}
        <div className="navbar-action">
          <a href="#contact" className="nav-cta-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} className="cta-icon" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-link ${link.active ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
