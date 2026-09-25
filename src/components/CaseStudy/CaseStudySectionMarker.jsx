import React from 'react';

export default function CaseStudySectionMarker({ marker, className = '' }) {
  if (!marker) return null;

  return (
    <div className={`cs-marker ${className}`}>
      <div className="cs-marker-content">
        <span className="cs-marker-label">{marker}</span>
      </div>
      <div className="cs-marker-line" aria-hidden="true" />
    </div>
  );
}
