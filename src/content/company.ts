/**
 * VOOO LABS — the parent entity.
 *
 * Every name, address, handle and copyright line on this site reads from here.
 * Nothing else may hardcode them. The site previously carried two different
 * founder GitHub URLs and three different descriptions of the same company,
 * because each component wrote its own copy.
 *
 * `legalName` is what appears in the copyright notice and in the legal pages.
 * If the business is registered under a different name than the brand, change
 * `legalName` and leave `brandName` alone -- they are separate on purpose.
 */

export const COMPANY = {
  brandName: 'VOOO LABS',
  legalName: 'VOOO LABS',
  tagline: 'Engineering High-Performance Web Apps, Software & Mobile Apps',
  description:
    'Digital product studio from Maharashtra, India. We engineer custom Web Apps, high-converting Websites, B2B Software Suites, and native Android applications alongside flagship in-house tools.',
  foundedYear: 2025,
  domain: 'https://vooolabs.com',
  email: 'vooolabsofficial@gmail.com',
  /** Digits only, country code first -- used to build wa.me links. */
  whatsapp: '917620236178',
} as const;

export const LOCATION = {
  hubs: ['Pune', 'Nashik', 'Satara'],
  region: 'Maharashtra',
  country: 'India',
} as const;

/**
 * Company accounts.
 */
export const SOCIALS = {
  github: 'https://github.com/vooolabs',
  linkedin: 'https://linkedin.com/company/vooolabs',
  twitter: 'https://twitter.com/vooolabs',
} as const;

export const FOUNDER = {
  name: 'Vrushabh Santosh Shinde',
  role: 'Founder & Software Architect',
  initials: 'VS',
  bio: 'SaaS developer, Android software architect, and creative technologist from rural Maharashtra building digital experiences that feel five years ahead.',
  quote:
    "I build products that don't just work — they feel alive. VOOO LABS is built on clean architecture, relentless execution, and genuine business impact.",
  portfolio: 'https://share.google/CA0DOimc3VLYNbEwl',
  portfolioFallback: 'https://vrushabhshinde-portfolio.netlify.app/',
  github: 'https://github.com/vrushabh-shinde',
  linkedin: 'https://www.linkedin.com/in/vrushabh-shinde-43338125b/',
  instagram: 'https://www.instagram.com/vrushyxx',
} as const;

export const whatsappLink = `https://wa.me/${COMPANY.whatsapp}`;
export const mailtoLink = `mailto:${COMPANY.email}`;

/**
 * What we tell people about reply times.
 *
 * Deliberately not a number. The site previously promised a reply "within 24
 * hours" in three places, including a hard badge, for a studio staffed by one
 * person. A promise that cannot be kept costs more than a vague one.
 */
export const RESPONSE_COPY = 'Every message goes straight to the founder.';

export const copyrightLine = () =>
  `© ${new Date().getFullYear()} ${COMPANY.legalName}. All rights reserved.`;
