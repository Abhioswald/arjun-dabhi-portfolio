import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FolderGit2 } from 'lucide-react';
import SEO from '../components/SEO/SEO';

export default function NotFoundPage() {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08090b',
        color: '#f3f4f6',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <SEO
        title="404: Page Not Found | Arjun Dabhi"
        description="The requested page could not be found. Explore Arjun Dabhi's portfolio and project case studies."
        noindex={true}
      />

      <span
        style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#ec4899',
          marginBottom: '1rem',
          display: 'inline-block',
        }}
      >
        Error 404
      </span>

      <h1
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '0 0 1rem 0',
          lineHeight: 1.1,
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '1rem',
          color: '#9ca3af',
          maxWidth: '460px',
          margin: '0 0 2.5rem 0',
          lineHeight: 1.6,
        }}
      >
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            backgroundColor: '#ffffff',
            color: '#08090b',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Return Home</span>
        </Link>

        <Link
          to="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: '#f3f4f6',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            fontWeight: 500,
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
        >
          <FolderGit2 size={16} aria-hidden="true" />
          <span>View Projects</span>
        </Link>
      </div>
    </main>
  );
}
