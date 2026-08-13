/**
 * The roadmap.
 *
 * Two things were wrong with the version this replaces, and both are designed
 * out here rather than fixed by hand:
 *
 * 1. It was stale and said so confidently -- "2025 Q3" carried a live pulsing
 *    "Active" badge well into 2026. `assertRoadmapIsCurrent()` below now warns
 *    in development the moment a phase marked `current` has run out of road,
 *    so the next person to run `npm run dev` finds out.
 *
 * 2. It invented progress. "70%", "40%", and a "100% On-Track" bar against a
 *    2030 goal were numbers with nothing behind them. Progress is a list of
 *    items that are done or not done -- there is no percentage field here, on
 *    purpose. Do not add one.
 */

export type PhaseStatus = 'shipped' | 'current' | 'next' | 'later';

export interface RoadmapPhase {
  id: string;
  /** Human label, e.g. "2026 Q3". */
  period: string;
  /** Last day this period covers, ISO. Used to detect a stale `current`. */
  endsOn: string;
  title: string;
  status: PhaseStatus;
  items: string[];
}

/**
 * TODO(founder): these statuses are the one thing here that cannot be derived.
 * Set them to match reality and re-check whenever a phase closes.
 */
export const ROADMAP: RoadmapPhase[] = [
  {
    id: 'foundation',
    period: '2025',
    endsOn: '2025-12-31',
    title: 'Foundation',
    status: 'shipped',
    items: [
      'VOOO Files core file browsing',
      'Media player integration',
      'CallMind lead pipeline',
      'Design system and brand',
    ],
  },
  {
    id: 'building',
    period: '2026 H1',
    endsOn: '2026-06-30',
    title: 'Building',
    status: 'shipped',
    items: [
      'CallMind private beta',
      'CallMind billing and plans',
      'VOOO Files biometric vault',
    ],
  },
  {
    id: 'launch',
    period: '2026 H2',
    endsOn: '2026-12-31',
    title: 'First public launch',
    status: 'current',
    items: [
      'VOOO Files on the Play Store',
      'CallMind opens to the public',
      'SMARAN AI architecture',
    ],
  },
  {
    id: 'expand',
    period: '2027',
    endsOn: '2027-12-31',
    title: 'Expanding the suite',
    status: 'next',
    items: [
      'SMARAN AI beta',
      'VOOO Workspace preview',
      'Multi-language support',
    ],
  },
  {
    id: 'ecosystem',
    period: '2028 onward',
    endsOn: '2030-12-31',
    title: 'One ecosystem',
    status: 'later',
    items: [
      'Cross-product sync',
      'Developer API',
      'Web alongside Android everywhere',
    ],
  },
];

export const STATUS_LABEL: Record<PhaseStatus, string> = {
  shipped: 'Shipped',
  current: 'In progress',
  next: 'Next',
  later: 'Later',
};

/**
 * Warns in development when a phase marked `current` has already ended, or
 * when nothing is marked `current` at all. Silent in production -- this is a
 * note to whoever is editing the site, not to a visitor.
 */
export function assertRoadmapIsCurrent(now: Date = new Date()): string | null {
  const current = ROADMAP.filter((p) => p.status === 'current');

  if (current.length === 0) {
    return 'No roadmap phase is marked `current`. Update src/content/roadmap.ts.';
  }

  const stale = current.filter((p) => new Date(p.endsOn) < now);
  if (stale.length > 0) {
    const names = stale.map((p) => `${p.period} (${p.title})`).join(', ');
    return `Roadmap phase marked \`current\` has already ended: ${names}. Update src/content/roadmap.ts.`;
  }

  return null;
}
