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
    targetUrl: '/projects/gajanand',
  },
}) {
  const navigate = useNavigate();
  const target = nextData.targetUrl || '/#projects';
  const isHash = target.startsWith('/#');

  const handleClick = (e) => {
    e.preventDefault();
    if (isHash) {
      navigate('/#projects', { state: { scrollTo: 'projects' } });
    } else {
      navigate(target);
    }
  };

  return (
    <section className="cs-next-section" aria-label="Next Project in Portfolio">
      <div className="cs-next-container">
        <a
          href={target}
          onClick={handleClick}
          className="cs-next-card"
          aria-label={`Next project: ${nextData.title}`}
        >
          <div className="cs-next-copy">
            <span className="cs-next-eyebrow">{nextData.marker}</span>
            <h2 className="cs-next-title">{nextData.title}</h2>
            <p className="cs-next-desc">{nextData.description}</p>
            <div className="cs-next-action-prompt">
              <span>Explore Project</span>
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
