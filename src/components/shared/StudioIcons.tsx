import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  accentColor?: string;
}

/**
 * Bespoke duotone SVGs with secondary tint fills and primary crisp strokes.
 * Designed to replace generic emojis and standard monochrome icons with studio-caliber craft.
 */

export function DuotoneCheckIcon({ size = 18, className = '', accentColor = '#4285F4' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill={accentColor} fillOpacity="0.12" />
      <path 
        d="M8 12.2L10.7 15L16 9.5" 
        stroke={accentColor} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function DuotoneProblemIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#EF4444" fillOpacity="0.12" />
      <path d="M12 8V12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="#EF4444" />
    </svg>
  );
}

export function DuotoneSolutionIcon({ size = 16, className = '', accentColor = '#4285F4' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill={accentColor} fillOpacity="0.14" />
      <path 
        d="M8.5 12.5L11 15L15.5 9.5" 
        stroke={accentColor} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
