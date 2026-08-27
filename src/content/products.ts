/**
 * The products VOOO LABS builds -- one entry each, read by every page.
 *
 * This file exists because the same product was described three different ways
 * on three different screens: CallMind was "Public Beta" on the home page and
 * in the products hero, but "private beta testing" in the FAQ; its price was
 * "Rs 499/mo" in three places and that figure appears nowhere in the product
 * itself. Stating a fact once is the only reliable way to stop it drifting.
 *
 * Before changing `status` or `pricing`, check the product's own repository --
 * this file describes software that exists elsewhere, and it is wrong the
 * moment that software moves without it.
 */

export type ProductStatus =
  | 'live'
  | 'private-beta'
  | 'alpha'
  | 'in-development'
  | 'planned';

/** Badge text and colour per status, so a status reads the same site-wide. */
export const STATUS_META: Record<
  ProductStatus,
  { label: string; badge: string; dot: string }
> = {
  live: {
    label: 'Live',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-500',
  },
  'private-beta': {
    label: 'Private Beta',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-500',
  },
  alpha: {
    label: 'Alpha',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    dot: 'bg-amber-500',
  },
  'in-development': {
    label: 'In Development',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    dot: 'bg-purple-500',
  },
  planned: {
    label: 'Planned',
    badge: 'bg-slate-100 text-slate-600 border-slate-200',
    dot: 'bg-slate-400',
  },
};

export interface Product {
  id: string;
  /** URL segment: /products#<slug> today, /<slug> once product pages land. */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  platforms: string;
  features: string[];
  /** Gradient utility class from index.css. */
  gradientClass: string;
  /** Where someone can actually get it. `null` means there is nothing to link. */
  downloadUrl: string | null;
  playStoreUrl: string | null;
  liveAppUrl?: string | null;
  vertical?: 'web-apps' | 'websites' | 'software' | 'mobile-apps';
  pricing: {
    /** Rupees per seat per month. `0` means free, `null` means not priced yet. */
    monthlyFrom: number | null;
    note: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'vooo-files',
    slug: 'vooo-files',
    name: 'VOOO Files',
    tagline: 'A complete storage ecosystem.',
    description:
      'Smart file management with a built-in gallery, music player, document viewer, biometric vault, and archive encryption.',
    status: 'alpha',
    platforms: 'Native Android',
    vertical: 'mobile-apps',
    features: [
      'Smart storage overview',
      'Biometric vault',
      'Built-in media player',
      'Archive encryption',
      'Material Design 3',
    ],
    gradientClass: 'g-files',
    downloadUrl: null,
    playStoreUrl: null,
    liveAppUrl: null,
    pricing: { monthlyFrom: 0, note: 'Free to use.' },
  },
  {
    id: 'smaran-ai',
    slug: 'smaran-ai',
    name: 'SMARAN AI',
    tagline: 'Your AI memory companion.',
    description:
      'Reminders that still reach you on silent mode, sensitive notes that purge themselves, and a shared Family Circle.',
    status: 'planned',
    platforms: 'Android & Web',
    vertical: 'mobile-apps',
    features: [
      'Exact alarms',
      'Auto-purge notes',
      'Family Circle sync',
      'Location reminders',
      'Student, Professional and Elder modes',
    ],
    gradientClass: 'g-smaran',
    downloadUrl: null,
    playStoreUrl: null,
    liveAppUrl: null,
    pricing: { monthlyFrom: null, note: 'Pricing not decided yet.' },
  },
  {
    id: 'callmind',
    slug: 'callmind',
    name: 'CallMind CRM',
    tagline: 'India\'s Premier SIM Telecalling & Lead CRM.',
    description:
      'Auto-capture leads in 2s from ads & webhooks, 1-click native mobile SIM dialing, multi-lingual interface (Marathi, Hindi, English), offline sync, and automated GST/ITC invoices with zero audio cloud storage.',
    status: 'live',
    platforms: 'Android & Web Cloud',
    vertical: 'software',
    features: [
      '2s Ad & Webhook Lead Capture',
      '1-Click Mobile SIM Dialing',
      'Offline Sync & Multilingual UI',
      'Instant WhatsApp Follow-ups',
      'Automated GST & ITC Invoices',
    ],
    gradientClass: 'g-callmind',
    downloadUrl: null,
    playStoreUrl: null,
    liveAppUrl: 'https://callmind-crm-app.onrender.com/',
    pricing: { monthlyFrom: 699, note: 'per seat / month, billed monthly' },
  },
  {
    id: 'workspace',
    slug: 'workspace',
    name: 'VOOO Workspace',
    tagline: 'One place for everything you keep.',
    description:
      'Unifying files, notes and reminders into an offline-first personal workspace.',
    status: 'in-development',
    platforms: 'Android & Web',
    features: ['Sync across devices', 'On-device processing', 'Automation'],
    gradientClass: 'g-text',
    downloadUrl: null,
    playStoreUrl: null,
    pricing: { monthlyFrom: null, note: 'Pricing not decided yet.' },
  },
];

export const getProduct = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id);

/** Products people can actually get hold of today, most-available first. */
export const AVAILABLE_PRODUCTS = PRODUCTS.filter((p) =>
  ['live', 'private-beta', 'alpha'].includes(p.status),
);

/** Formats a price for display. Returns null when there is nothing to show. */
export const formatPrice = (product: Product): string | null => {
  const { monthlyFrom, note } = product.pricing;
  if (monthlyFrom === null) return null;
  if (monthlyFrom === 0) return note;
  return `₹${monthlyFrom} ${note}`;
};
