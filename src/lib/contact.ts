/**
 * The one place a form on this site hands a message to the outside world.
 *
 * Three forms used to do three different things. The waitlist form on the
 * products page did the worst of them: it set a flag, told the visitor "You
 * are on the VIP waitlist! We'll reach out soon", and dropped the address on
 * the floor -- no request, no storage, nothing. Every address typed into it
 * was lost.
 *
 * All three now call `submitEnquiry`, and all three report what actually
 * happened. Today that means composing a message in the visitor's own mail
 * client, which is honest but depends on them pressing send. To collect
 * addresses without that step, fill in `ENQUIRY_ENDPOINT` -- the transport
 * swaps underneath and no caller changes.
 */

import { COMPANY } from '../content/company';

/**
 * A form endpoint that accepts a POST and stores the submission.
 *
 * Leave empty to keep using the mail client. When set, it should point at
 * something that already exists and accepts JSON -- a Formspree/Web3Forms form
 * id, or a Supabase edge function. Anything here is public: it ships in the
 * browser bundle, so it must be an endpoint that is safe to call from anywhere
 * and rate-limited on the server side. Never put a service key here.
 */
const ENQUIRY_ENDPOINT = '';

export type EnquiryKind =
  | 'General'
  | 'Partnership'
  | 'Beta'
  | 'Press'
  | 'Other';

export interface Enquiry {
  name?: string;
  email: string;
  message?: string;
  kind: EnquiryKind;
  /** Which form this came from, so replies have context. */
  source: string;
}

export type SubmitResult =
  | { ok: true; delivered: 'stored' }
  | { ok: true; delivered: 'mail-client' }
  | { ok: false; error: string };

const buildMailto = (enquiry: Enquiry): string => {
  const subject = `[${enquiry.kind}] ${enquiry.source}${
    enquiry.name ? ` — ${enquiry.name}` : ''
  }`;

  const body = [
    enquiry.name ? `Name: ${enquiry.name}` : null,
    `Email: ${enquiry.email}`,
    `Enquiry type: ${enquiry.kind}`,
    enquiry.message ? `\n${enquiry.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};

export async function submitEnquiry(enquiry: Enquiry): Promise<SubmitResult> {
  if (!enquiry.email.includes('@')) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  if (ENQUIRY_ENDPOINT) {
    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry),
      });

      // A failed post must surface. Silently falling back to the mail client
      // would hide a broken endpoint for as long as nobody checked the inbox.
      if (!response.ok) {
        return {
          ok: false,
          error: `Could not send that (${response.status}). Please email ${COMPANY.email} directly.`,
        };
      }

      return { ok: true, delivered: 'stored' };
    } catch {
      return {
        ok: false,
        error: `Could not reach the server. Please email ${COMPANY.email} directly.`,
      };
    }
  }

  // Navigating rather than window.open: opening a mailto in a new tab is what
  // popup blockers stop, and when it works it leaves an empty tab behind.
  window.location.href = buildMailto(enquiry);
  return { ok: true, delivered: 'mail-client' };
}

/**
 * What to tell the visitor afterwards. Deliberately different per transport --
 * "Message sent" is a lie when all that happened is a draft opening.
 */
export const resultCopy = (result: SubmitResult): string => {
  if (!result.ok) return result.error;
  return result.delivered === 'stored'
    ? "Got it. We'll be in touch."
    : 'Your mail app is opening with the message ready — press send to finish.';
};
