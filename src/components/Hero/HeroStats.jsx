import React from 'react';
import './Hero.css';

export default function HeroStats({ statsRef }) {
  const stats = [
    { value: '10+', label: 'PROJECTS' },
    { value: '2+', label: 'YEARS LEARNING' },
    { value: '100%', label: 'PASSION' },
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
