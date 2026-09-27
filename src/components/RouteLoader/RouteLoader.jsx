import React from 'react';
import './RouteLoader.css';

export default function RouteLoader() {
  return (
    <div
      className="route-loader-container"
      role="status"
      aria-live="polite"
      aria-label="Loading project…"
    >
      <div className="route-loader-card">
        <span className="route-loader-logo" aria-hidden="true">AD.</span>
        <span className="route-loader-label">LOADING PROJECT</span>
        <div className="route-loader-line" aria-hidden="true">
          <div className="route-loader-bar" />
        </div>
        <span className="route-loader-sr-text">Loading project…</span>
      </div>
    </div>
  );
}
