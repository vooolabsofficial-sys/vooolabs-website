/**
 * Brand marks, defined once.
 *
 * These are hand-drawn rather than imported from lucide-react because lucide
 * dropped its brand icons -- so each component that needed a GitHub glyph
 * pasted its own copy of the path. There were six copies of this file's
 * contents scattered across the footer, the bottom bar, two contact sections
 * and two founder cards.
 */

interface IconProps {
  size?: number;
  className?: string;
}

const base = (className: string) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
});

export const GithubIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} {...base(className)}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} {...base(className)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} {...base(className)}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const InstagramIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} {...base(className)}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsappIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} {...base(className)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ReactIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
  </svg>
);

export const TypeScriptIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={1.75} />
    <path d="M7 8h6M10 8v8" strokeLinecap="round" />
    <path d="M14 13.5c.8.8 1.8 1.2 2.8.8.7-.3 1.2-1 1.2-1.8 0-1.8-3-1.4-3-3.2 0-.8.5-1.5 1.5-1.8 1.1-.3 2.1.2 2.8.8" strokeLinecap="round" />
  </svg>
);

export const NextjsIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 8.5v7M15 8.5v4M9 10l6 5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TailwindIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <path d="M6 10c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 8 4.5-2 1.5-4 2.5-6.5 2.5-4 0-5.5-2.5-9-2.5zm-3.5 6c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 8 4.5-2 1.5-4 2.5-6.5 2.5-4 0-5.5-2.5-9-2.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const KotlinIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 3l9 9-9 9M12 12l9-9M12 12l9 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PythonIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <path d="M12 3c-4 0-4 1.8-4 1.8v2.7h4v.9H6.5S3 8 3 12.5s3 4.5 3 4.5h1.5v-2.2s0-2.8 2.8-2.8h4.5s2.7 0 2.7-2.7V6.5S17.5 3 12 3zm-2.2 2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21c4 0 4-1.8 4-1.8v-2.7h-4v-.9h5.5s3.5.4 3.5-4.1-3-4.5-3-4.5h-1.5v2.2s0 2.8-2.8 2.8H9.2S6.5 12 6.5 14.7v3.1s0 3.2 5.5 3.2zm2.2-2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PostgresIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

export const DockerIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <path d="M3 13.5h18c-.5 4-4.5 6.5-9 6.5s-8.5-2.5-9-6.5z" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="10" width="2.5" height="2.5" rx="0.5" />
    <rect x="10.5" y="10" width="2.5" height="2.5" rx="0.5" />
    <rect x="14" y="10" width="2.5" height="2.5" rx="0.5" />
    <rect x="10.5" y="6.5" width="2.5" height="2.5" rx="0.5" />
    <rect x="14" y="6.5" width="2.5" height="2.5" rx="0.5" />
  </svg>
);

export const SupabaseIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
    <path d="M13.5 2L4 13.5h7.5L10.5 22l9.5-11.5h-7.5L13.5 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
