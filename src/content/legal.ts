/**
 * Legal documents for VOOO LABS software engineering studio.
 */

import { COMPANY, LOCATION } from './company';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  summary: string;
  /** ISO date this text last changed. Update it whenever the text changes. */
  updated: string;
  sections: LegalSection[];
}

const ENTITY = COMPANY.legalName;
const PLACE = `${LOCATION.region}, ${LOCATION.country}`;

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    summary: `How ${ENTITY} handles information across our client portal and web studio platforms.`,
    updated: '2026-10-24',
    sections: [
      {
        heading: 'Who this covers',
        paragraphs: [
          `${ENTITY} is an independent web software and digital engineering studio based in ${PLACE}. This policy applies to this website and to client scoping forms.`,
          `We believe in radical data privacy. We do not sell user data, we do not run third-party advertising tracking scripts, and we do not profile visitors.`,
        ],
      },
      {
        heading: 'What this website collects',
        paragraphs: [
          'This site runs zero intrusive third-party trackers, zero advertising tags, and sets zero cross-site tracking cookies.',
          'The only information we receive is what you voluntarily type into our project inquiry form: your name, business email, project requirements, and estimated budget. This information is transmitted securely to our lead architect exclusively to prepare your project proposal.',
        ],
      },
      {
        heading: 'Client business confidentiality',
        paragraphs: [
          'We execute mutual Non-Disclosure Agreements (NDAs) prior to reviewing proprietary business data, workflows, or architectural requirements.',
        ],
      },
      {
        heading: 'Data infrastructure & security',
        paragraphs: [
          'Client software and production web platforms use industry-standard enterprise cloud infrastructure:',
        ],
        bullets: [
          'PostgreSQL databases with Row-Level Security (RLS) and encrypted storage at rest.',
          'Cloudflare global edge network with TLS 1.3 encryption and automated DDoS mitigation.',
          'Zero-trust token handling and private environment variable isolation.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          `Under India's Digital Personal Data Protection Act 2023, you have the right to inspect, update, or request the deletion of any contact information we hold. Write to ${COMPANY.email} for immediate assistance.`,
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    summary: `Standard engagement and service terms for client engineering projects with ${ENTITY}.`,
    updated: '2026-10-24',
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          `By engaging ${ENTITY} for web development, custom software engineering, or technical consulting, you agree to these transparent engagement terms.`,
        ],
      },
      {
        heading: 'Deterministic project scoping',
        paragraphs: [
          'Every client project begins with an architectural specification outlining exact deliverables, tech stack choices, milestone dates, and investment brackets.',
          'Any additions beyond the approved technical specification are estimated and agreed upon in writing before engineering work commences.',
        ],
      },
      {
        heading: 'Direct architect collaboration',
        paragraphs: [
          'Clients collaborate directly with our lead software architect throughout the project lifecycle. Weekly sprint demonstrations and live preview URLs are provided at each milestone.',
        ],
      },
      {
        heading: 'Acceptable use',
        paragraphs: ['We do not engineer platforms intended to:'],
        bullets: [
          'Violate Indian law or international commerce regulations.',
          'Transmit unsolicited spam or deceptive marketing payloads.',
          'Facilitate unauthorized intrusion, credential harvesting, or malicious exploits.',
        ],
      },
    ],
  },
  {
    slug: 'ip-ownership',
    title: 'Code Ownership & IP Guarantee',
    summary: 'Our guarantee of 100% intellectual property and source code handover.',
    updated: '2026-10-24',
    sections: [
      {
        heading: '100% Client Intellectual Property',
        paragraphs: [
          'Upon final milestone payment, full intellectual property and copyright for the custom software, database schemas, and web application source code are transferred unconditionally to your organization.',
        ],
      },
      {
        heading: 'Full GitHub repository handover',
        paragraphs: [
          'We transfer primary ownership of the GitHub repository containing the complete commit history, automated CI/CD configurations, and documentation.',
        ],
        bullets: [
          '100% unminified, clean TypeScript and React source code.',
          'Production build scripts and automated deployment workflows.',
          'Database migration files, schema seeds, and configuration templates.',
          'Architectural documentation and deployment setup runbooks.',
        ],
      },
      {
        heading: 'Zero vendor lock-in',
        paragraphs: [
          'We use standard, industry-proven open-source frameworks and modern cloud platforms. There is zero proprietary licensing fee, zero mandatory retainer, and zero vendor lock-in.',
        ],
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'Milestone & Refund Policy',
    summary: 'Clear milestone review protocols and fair cancellation terms.',
    updated: '2026-10-24',
    sections: [
      {
        heading: 'Phased milestone delivery',
        paragraphs: [
          'To protect both client and studio, projects are structured into discrete milestones. Payments are tied to working staging demonstrations for each approved milestone.',
        ],
      },
      {
        heading: 'Sprint reviews & revisions',
        paragraphs: [
          'Each milestone includes a dedicated review period during which feedback is incorporated. In the unlikely event that a milestone deliverable does not match the approved technical specification, we revise it at no additional cost until it complies.',
        ],
      },
      {
        heading: 'Cancellation policy',
        paragraphs: [
          `Either party may terminate an active engagement with written notice. In such cases, the client receives all source code and assets completed up to the last paid milestone. Inquiries regarding invoices can be addressed directly to ${COMPANY.email}.`,
        ],
      },
    ],
  },
];

export const getLegalDocument = (slug: string): LegalDocument | undefined =>
  LEGAL_DOCUMENTS.find((doc) => doc.slug === slug);
