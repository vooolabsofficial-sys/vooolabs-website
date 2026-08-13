/**
 * Legal pages, one entry per document.
 *
 * ⚠️ These are drafts written to be structurally correct and honest about what
 * the products actually do -- they are not legal advice and have not been
 * reviewed by a lawyer. Before taking payments or submitting to the Play Store,
 * have a practising advocate or company secretary read them, particularly the
 * sections on refunds, GST and grievance redressal, which India's Consumer
 * Protection (E-Commerce) Rules and the DPDP Act 2023 both have opinions about.
 *
 * Anything marked TODO(founder) is a blank that only the founder can fill.
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
    summary: `How ${ENTITY} handles your information across every app and site we publish.`,
    updated: '2026-08-12',
    sections: [
      {
        heading: 'Who this covers',
        paragraphs: [
          `${ENTITY} is an independent software studio based in ${PLACE}. This policy applies to this website and to every application published under the ${COMPANY.brandName} name.`,
          `Individual applications collect different data, because they do different things. Where an app collects something this policy does not describe, its own listing and its entry under App Permissions says so.`,
        ],
      },
      {
        heading: 'What this website collects',
        paragraphs: [
          'This site runs no analytics, no advertising tags and no third-party trackers. It sets no cookies.',
          'The only information the site receives is what you type into a form and choose to send us: your name, your email address, and your message. That reaches us by email and is used to reply to you.',
        ],
      },
      {
        heading: 'What we do not do',
        paragraphs: [
          'We do not sell personal data. We do not share it with advertisers or data brokers, and we do not build advertising profiles.',
        ],
      },
      {
        heading: 'Data our applications handle',
        paragraphs: [
          'Our Android applications work primarily on your device. Where an app stores data on our servers, it is because a feature you turned on requires it — syncing between your own devices, or sharing with people you invite.',
        ],
        bullets: [
          'Files and documents you store in a vault stay encrypted on your device.',
          'CallMind stores your leads, notes and call history so that they survive a lost phone. Nobody outside your own company account can read them.',
          'None of our applications record the audio of your phone calls.',
        ],
      },
      {
        heading: 'Sub-processors',
        paragraphs: [
          'Where a product stores data for you, it uses these services and no others:',
        ],
        bullets: [
          'Supabase — application database and authentication.',
          'Cloudflare R2 — document and file storage.',
          'Google (Gemini) — AI features, where the product says an AI feature is running.',
        ],
      },
      {
        // TODO(founder): the DPDP Act requires a named Grievance Officer with
        // published contact details. Add the name and a postal address to this
        // section before launch.
        heading: 'Your rights',
        paragraphs: [
          `Under India's Digital Personal Data Protection Act 2023 you may ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to ${COMPANY.email} and we will act on it.`,
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'When this policy changes, the date at the top of this page changes with it.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    summary: `The terms you agree to when you use software published by ${ENTITY}.`,
    updated: '2026-08-12',
    sections: [
      {
        // TODO(founder): confirm COMPANY.legalName is the exact registered
        // entity name, and add the registration number and registered address
        // to this section once they exist.
        heading: 'Agreement',
        paragraphs: [
          `By using this website or any application published by ${ENTITY}, you agree to these terms. If you do not agree, please do not use them.`,
        ],
      },
      {
        heading: 'What you may do',
        paragraphs: [
          'You may use our software for your own purposes, personal or commercial, within the limits of the plan you hold.',
        ],
      },
      {
        heading: 'What you may not do',
        paragraphs: ['You may not:'],
        bullets: [
          'Resell or redistribute our software as your own.',
          'Attempt to bypass plan limits, authentication or billing.',
          'Use our software to break the law, or to send messages the recipient did not ask for.',
          'Reverse engineer our applications except where the law expressly permits it.',
        ],
      },
      {
        heading: 'Your content',
        paragraphs: [
          'Whatever you put into our software stays yours. We claim no ownership over your files, your leads or your notes. We access them only when you ask us to for support, and only as far as that request needs.',
        ],
      },
      {
        heading: 'Beta software',
        paragraphs: [
          'Software labelled alpha or beta is unfinished. It may lose data, change without notice, or stop working. Do not rely on it as the only copy of anything important to you.',
        ],
      },
      {
        // TODO(founder): add the GSTIN to this section once registered.
        // Charging GST without a GSTIN on the invoice is not permitted.
        heading: 'Payment and taxes',
        paragraphs: [
          'Paid plans are billed in advance for the term you choose. Prices shown are exclusive of GST unless stated otherwise; GST is added at the rate applicable at the time of purchase.',
        ],
      },
      {
        heading: 'Cancellation and refunds',
        paragraphs: [
          'You may cancel at any time and your plan runs to the end of the term you have paid for. See the Refund Policy for when money comes back.',
        ],
      },
      {
        heading: 'Liability',
        paragraphs: [
          'Our software is provided as it is. To the extent the law allows, our total liability to you is limited to what you paid us in the twelve months before the claim.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          `These terms are governed by the laws of India, and the courts of ${PLACE} have jurisdiction.`,
        ],
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'Refund Policy',
    summary: 'When we return money, and how long it takes.',
    updated: '2026-08-12',
    sections: [
      {
        heading: 'Trials come first',
        paragraphs: [
          'Every paid product has a free trial. The trial exists so you can find out whether the software suits you before any money moves. We would rather you used it than asked for a refund later.',
        ],
      },
      {
        heading: 'When we refund',
        paragraphs: ['We refund in full when:'],
        bullets: [
          'You were charged twice for the same period.',
          'You were charged after cancelling.',
          'A feature the plan page promised does not work and we cannot fix it for you.',
        ],
      },
      {
        heading: 'When we do not',
        paragraphs: [
          'We do not refund part-used terms simply because you stopped using the software, and we do not refund a term already substantially consumed.',
        ],
      },
      {
        heading: 'How to ask',
        paragraphs: [
          `Write to ${COMPANY.email} from the address on the account. Approved refunds return by the original payment method, and typically take five to seven working days to appear.`,
        ],
      },
    ],
  },
  {
    slug: 'app-permissions',
    title: 'App Permissions',
    summary:
      'Every Android permission our apps request, and the feature that needs it.',
    updated: '2026-08-12',
    sections: [
      {
        // TODO(founder): check each list below against the app manifest before
        // the Play Store listing goes live. A permission in the manifest that
        // is missing here is exactly the mismatch reviewers look for.
        heading: 'Why this page exists',
        paragraphs: [
          'An app that asks for a permission should be able to say plainly what it does with it. This page lists them so you can check before installing.',
        ],
      },
      {
        heading: 'VOOO Files',
        paragraphs: ['A file manager needs to reach your files.'],
        bullets: [
          'Storage access — to browse, move and open files. Files are never uploaded anywhere.',
          'Biometric — to unlock the vault. Your fingerprint never leaves the device and we never receive it.',
        ],
      },
      {
        heading: 'CallMind',
        paragraphs: [
          'CallMind logs which calls happened so you can track a lead. It does not record calls.',
        ],
        bullets: [
          'Call log — to match a call to a lead and show follow-up history. We read call metadata: number, time, duration.',
          'Contacts — to attach a name to a number you already have saved.',
          'Notifications — to remind you about follow-ups you scheduled.',
          'CallMind does not request microphone access and does not capture call audio.',
        ],
      },
      {
        heading: 'SMARAN AI',
        paragraphs: [
          'Reminders that arrive on time need permissions Android guards carefully.',
        ],
        bullets: [
          'Exact alarm — so a reminder fires at the minute you set rather than whenever the system next wakes.',
          'Notifications — to show the reminder.',
          'Location, only if you turn on location reminders — to trigger a reminder when you arrive somewhere.',
        ],
      },
    ],
  },
];

export const getLegalDocument = (slug: string): LegalDocument | undefined =>
  LEGAL_DOCUMENTS.find((doc) => doc.slug === slug);
