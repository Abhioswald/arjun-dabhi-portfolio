import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './MaskedHeading.css';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/**
 * MaskedHeading Component
 * Reliable CSS background-clip: text implementation.
 * Renders real semantic text with media texture and graceful fallback,
 * completely replacing the fragile SVG clipPath layer.
 */
const MaskedHeading = forwardRef(function MaskedHeading(
  {
    text = 'ARJUN',
    tag: Tag = 'h1',
    src = '/assets/hero-portrait.png',
    mediaType,
    reveal,
    trigger,
    fillScale,
    parallax,
    drift,
    brightness,
    saturation,
    align,
    weight,
    tracking,
    lineHeight,
    textScale,
    delay,
    duration,
    className = '',
    style = {},
    ...rest
  },
  ref
) {
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  // Connect forwarded ref to rootRef
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(rootRef.current);
    } else {
      ref.current = rootRef.current;
    }
  }, [ref]);

  // Image availability check: text is NEVER transparent before image is ready
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
    }
  }, [src]);

  const isArjun = text.toUpperCase().includes('ARJUN');
  const isDabhi = text.toUpperCase().includes('DABHI');
  const basePosX = '50%';
  const basePosY = isDabhi ? '28%' : '22%';

  // Subtle internal drift & pointer parallax (safe, only adjusts background-position)
  useEffect(() => {
    const textEl = textRef.current;
    const rootEl = rootRef.current;
    if (!textEl || !rootEl || !imageLoaded) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let raf = 0;
    let last = performance.now();
    let clock = 0;

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      clock += dt;

      const isMobile = window.innerWidth <= 768;
      const driftAmount = isMobile ? 3 : 6;
      const dx = Math.sin(clock * 0.22) * driftAmount;
      const dy = Math.cos(clock * 0.18) * (driftAmount * 0.6);

      const ease = 1 - Math.exp(-dt / 0.18);
      const off = offsetRef.current;
      off.x += (off.tx + dx - off.x) * ease;
      off.y += (off.ty + dy - off.y) * ease;

      textEl.style.backgroundPosition = `calc(${basePosX} + ${off.x.toFixed(1)}px) calc(${basePosY} + ${off.y.toFixed(1)}px)`;

      raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      if (window.innerWidth <= 768 || window.matchMedia('(hover: none)').matches) return;
      const r = rootEl.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      offsetRef.current.tx = clamp(nx, -1, 1) * -12;
      offsetRef.current.ty = clamp(ny, -1, 1) * -12;
    };

    const onLeave = () => {
      offsetRef.current.tx = 0;
      offsetRef.current.ty = 0;
    };

    rootEl.addEventListener('pointermove', onMove);
    rootEl.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      rootEl.removeEventListener('pointermove', onMove);
      rootEl.removeEventListener('pointerleave', onLeave);
    };
  }, [imageLoaded, basePosX, basePosY]);

  const variantClass = isArjun
    ? 'masked-heading--arjun'
    : isDabhi
    ? 'masked-heading--dabhi'
    : '';

  const loadedClass = imageLoaded ? 'is-loaded' : 'is-fallback';

  return (
    <Tag
      ref={rootRef}
      className={`masked-heading ${variantClass} ${className}`.trim()}
      style={style}
      aria-label={text}
      {...rest}
    >
      <span
        ref={textRef}
        className={`masked-heading__text ${loadedClass}`}
      >
        {text}
      </span>
    </Tag>
  );
});

export default MaskedHeading;
