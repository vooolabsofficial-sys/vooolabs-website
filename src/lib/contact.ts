/**
 * The unified communication and enquiry gateway for VOOO LABS.
 * Handles client scoping requests, project inquiries, and consultation bookings.
 */

import { COMPANY } from '../content/company';

/**
 * A form endpoint that accepts a POST and stores the submission.
 * Leave empty to use client mail compose fallback.
 */
const ENQUIRY_ENDPOINT = '';

export type EnquiryKind =
  | 'Web App'
  | 'Website'
  | 'Software CRM'
  | 'SEO & AI'
  | 'Architecture Consulting'
  | 'General'
  | 'Partnership'
  | 'Other';

export interface Enquiry {
  name?: string;
  email: string;
  message?: string;
  kind: EnquiryKind;
  source: string;
  budget?: string;
  timeline?: string;
  honeypot?: string;
}

export type SubmitResult =
  | { ok: true; delivered: 'stored' }
  | { ok: true; delivered: 'mail-client' }
  | { ok: false; error: string };

const buildMailto = (enquiry: Enquiry): string => {
  const subject = `[Project Scoping: ${enquiry.kind}] ${
    enquiry.name ? `${enquiry.name}` : 'New Inquiry'
  }`;

  const body = [
    enquiry.name ? `Client Name: ${enquiry.name}` : null,
    `Email: ${enquiry.email}`,
    `Project Domain: ${enquiry.kind}`,
    enquiry.budget ? `Estimated Budget: ${enquiry.budget}` : null,
    enquiry.timeline ? `Target Timeline: ${enquiry.timeline}` : null,
    enquiry.source ? `Source: ${enquiry.source}` : null,
    enquiry.message ? `\n--- Project Scope & Requirements ---\n${enquiry.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};

export async function submitEnquiry(enquiry: Enquiry): Promise<SubmitResult> {
  // Honeypot spam trap: if hidden field is filled, silently ignore
  if (enquiry.honeypot && enquiry.honeypot.trim().length > 0) {
    return { ok: true, delivered: 'stored' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(enquiry.email)) {
    return { ok: false, error: 'Please enter a valid business email address.' };
  }

  if (ENQUIRY_ENDPOINT) {
    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        return {
          ok: false,
          error: `Could not transmit inquiry (${response.status}). Please email ${COMPANY.email} directly.`,
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

  // Fallback: Opens the visitor's mail client with pre-composed technical brief
  window.location.href = buildMailto(enquiry);
  return { ok: true, delivered: 'mail-client' };
}

/**
 * Technical status response copy.
 */
export const resultCopy = (result: SubmitResult): string => {
  if (!result.ok) return result.error;
  return result.delivered === 'stored'
    ? 'Inquiry received. Our lead software architect will review your project requirements and respond directly.'
    : 'Your email client is opening with your project brief — click Send to transmit your requirements directly.';
};
