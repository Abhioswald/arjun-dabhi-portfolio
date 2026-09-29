import React from 'react';
import './Hero.css';

export default function HeroStats({ statsRef }) {
  const stats = [
    { value: '06', label: 'FEATURED PROJECTS' },
    { value: 'FOCUS', label: 'FRONTEND & MOTION' },
    { value: 'MINDSET', label: 'ALWAYS LEARNING' },
  ];

  return (
    <div className="hero-stats-container" ref={statsRef}>
      {stats.map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="stat-card">
            <div className="stat-number">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
          {index < stats.length - 1 && <div className="stat-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}
