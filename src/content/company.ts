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
  tagline: 'Enterprise-Grade Websites, Web Apps & Business Software — Built Practical for the AI Era',
  description:
    'Independent web and software engineering studio in Maharashtra, India. In the AI era, we build custom websites, web apps, business software, and AI search visibility for small, mid-sized, and growing businesses—complete with domain, 24/7 hosting, and 100% client ownership.',
  foundedYear: 2025,
  domain: 'https://vooolabs.in',
  email: 'hello@vooolabs.in',
  legalEmail: 'legal@vooolabs.in',
  billingEmail: 'billing@vooolabs.in',
  supportEmail: 'support@vooolabs.in',
  /** Digits only, country code first -- used to build wa.me links. */
  whatsapp: '917620236178',
} as const;

export const LOCATION = {
  hubs: ['Satara', 'Pune', 'Nashik', 'Kolhapur'],
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
  role: 'Founder & Lead Software Architect',
  initials: 'VS',
  bio: 'Full-stack software architect and creative technologist from Maharashtra building high-speed web applications, internal business systems, and digital platforms that deliver tangible commercial results.',
  quote:
    "We don't resell bloated templates or outsource engineering. Every line of code is written with obsessive attention to performance, security, and real business utility.",
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
export const RESPONSE_COPY =
  'Every inquiry goes straight to the founder. We review your work first and share an honest plan and realistic timeline.';

export const copyrightLine = () =>
  `© ${new Date().getFullYear()} ${COMPANY.legalName}. All rights reserved.`;
