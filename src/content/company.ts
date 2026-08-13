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
  /** TODO(founder): confirm this matches the registered entity name exactly. */
  legalName: 'VOOO LABS',
  tagline: 'Build Bold. Ship Smart. Live Different.',
  description:
    'An independent software studio from Maharashtra, India, building privacy-first Android and web applications.',
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
 * Company accounts. These are distinct from the founder's personal accounts
 * below -- the site used to mix the two, linking a personal Instagram from a
 * row of otherwise-corporate icons.
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
  bio: 'B.Tech graduate, Android developer, and indie builder from rural Maharashtra.',
  quote:
    "I build products that don't just work — they feel alive. VOOO LABS is built on clean architecture and relentless execution.",
  portfolio: 'https://vrushabhshinde-portfolio.netlify.app/',
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
