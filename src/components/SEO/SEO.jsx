import { useEffect } from 'react';

/**
 * Reusable SEO & Social Metadata Component
 * Updates document.title, description, canonical, Open Graph, and Twitter metadata
 * synchronously upon route render, preventing duplicate tags and stale metadata in SPA navigation.
 */
export default function SEO({
  title = 'Arjun Dabhi — Computer Engineer & Developer',
  description = 'Arjun Dabhi is a computer engineering student and developer building interactive web experiences with React, GSAP, JavaScript, and modern frontend tools.',
  canonical = 'https://arjun-dabhi-portfolio.vercel.app/',
  ogImage = 'https://arjun-dabhi-portfolio.vercel.app/og-image.png',
  ogImageAlt = 'Arjun Dabhi — Portfolio Social Preview',
  ogType = 'website',
  noindex = false,
  jsonLd = null,
}) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper: update or create <meta> tag with single instance guarantee
    const setMeta = (attr, name, content) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: update or create <link> tag with single instance guarantee
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Core Search Engine Directives
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', canonical);

    // 3. Open Graph Metadata
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'Arjun Dabhi Portfolio');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    if (ogImageAlt) {
      setMeta('property', 'og:image:alt', ogImageAlt);
    }

    // 4. Twitter / X Card Metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 5. Structured Data (JSON-LD)
    let scriptEl = document.getElementById('person-schema');
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.id = 'person-schema';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonical, ogImage, ogImageAlt, ogType, noindex, jsonLd]);

  return null;
}
