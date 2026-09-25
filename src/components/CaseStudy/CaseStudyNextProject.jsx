import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CaseStudyNextProject({
  nextData = {
    marker: 'NEXT PROJECT',
    title: 'Gajanand Vada Pav',
    description:
      'A Gujarati-inspired restaurant experience built around bold food visuals and local identity.',
    image: '/assets/projects/optimized/gajanand.webp',
    targetUrl: '/#projects',
  },
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/#projects', { state: { scrollTo: 'projects' } });
  };

  return (
    <section className="cs-next-section" aria-label="Next Project in Portfolio">
      <div className="cs-next-container">
        <a
          href="/#projects"
          onClick={handleClick}
          className="cs-next-card"
          aria-label={`Next project: ${nextData.title}. Return to portfolio projects.`}
        >
          <div className="cs-next-copy">
            <span className="cs-next-eyebrow">{nextData.marker}</span>
            <h2 className="cs-next-title">{nextData.title}</h2>
            <p className="cs-next-desc">{nextData.description}</p>
            <div className="cs-next-action-prompt">
              <span>View in Projects</span>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
          </div>

          <div className="cs-next-image-wrap">
            <img
              src={nextData.image}
              alt={`${nextData.title} preview`}
              className="cs-next-image"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-next-image-vignette" aria-hidden="true" />
          </div>
        </a>
      </div>
    </section>
  );
}
