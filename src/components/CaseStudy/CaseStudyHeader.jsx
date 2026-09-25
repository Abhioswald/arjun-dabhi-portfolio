import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CaseStudyBackButton from './CaseStudyBackButton';

export default function CaseStudyHeader({
  liveUrl = 'https://boo-icecream.vercel.app/',
  projectName = 'BOO! Ice Cream',
}) {
  const sectionLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Process', href: '#process' },
    { name: 'Features', href: '#moments' },
    { name: 'Learnings', href: '#learnings' },
  ];

  return (
    <header className="cs-navbar" role="banner">
      <div className="cs-navbar-container">
        {/* Left: Back to Projects */}
        <CaseStudyBackButton />

        {/* Center: Small Section Links */}
        <nav className="cs-nav-sections" aria-label="Case Study Section Navigation">
          {sectionLinks.map((item) => (
            <a key={item.name} href={item.href} className="cs-nav-section-link">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Visit Project ↗ */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-nav-visit-btn"
          aria-label={`Visit live ${projectName} project in new tab`}
        >
          <span>Visit Project</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
