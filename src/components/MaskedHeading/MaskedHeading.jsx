import React, { forwardRef } from 'react';
import './MaskedHeading.css';

/**
 * MaskedHeading Component
 * Reliable CSS background-clip: text implementation.
 * Renders semantic text with media texture and graceful fallback.
 * Completely decoupled from image loading and video readiness states,
 * ensuring a fixed, flicker-free presentation from first paint onward.
 */
const MaskedHeading = forwardRef(function MaskedHeading(
  {
    text = 'ARJUN',
    tag: Tag = 'h1',
    className = '',
    style = {},
    ...rest
  },
  ref
) {
  const isArjun = text.toUpperCase().includes('ARJUN');
  const isDabhi = text.toUpperCase().includes('DABHI');

  const variantClass = isArjun
    ? 'masked-heading--arjun'
    : isDabhi
    ? 'masked-heading--dabhi'
    : '';

  return (
    <Tag
      ref={ref}
      className={`masked-heading ${variantClass} ${className}`.trim()}
      style={style}
      aria-label={text}
      {...rest}
    >
      <span className="masked-heading__text">
        {text}
      </span>
    </Tag>
  );
});

export default MaskedHeading;
