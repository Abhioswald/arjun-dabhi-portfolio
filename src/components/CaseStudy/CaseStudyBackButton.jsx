import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudyBackButton({ className = '', label = 'Back to Projects' }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/#projects', { state: { scrollTo: 'projects' } });
  };

  return (
    <a
      href="/#projects"
      onClick={handleClick}
      className={`cs-back-link ${className}`}
      aria-label="Return to portfolio projects section"
    >
      <ArrowLeft size={15} className="cs-back-arrow" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
