import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const CORE_SERVICES = [
  {
    number: '01',
    title: 'All-Inclusive Business Websites',
    tag: 'Web Platform & Leads',
    description: 'High-trust, ultra-fast websites designed for growing businesses to convert visitors into direct WhatsApp and phone inquiries. We handle custom design, domain setup, DNS routing, 24/7 cloud hosting, and SSL certificates end-to-end.',
    deliverables: [
      'Custom Design & Full Functional Build',
      'Domain & 24/7 Cloud Hosting Included',
      '1-Tap WhatsApp & Phone Lead Triggers',
      '100% Client Source Code Ownership',
    ],
    link: '/services#websites',
  },
  {
    number: '02',
    title: 'Custom Web Apps & Portals',
    tag: 'Customer & Member Accounts',
    description: 'Customer-facing portals, student and member dashboards, appointment booking systems, and interactive web applications. In today’s AI era, custom web apps that previously cost lakhs are now practical and affordable for growing businesses.',
    deliverables: [
      'Customer Portals & Secure Logins',
      'Role-Based Staff Access Controls',
      'Centralized Cloud Database',
      '₹0 Monthly Per-User Seat Fees',
    ],
    link: '/services#web-apps',
  },
  {
    number: '03',
    title: 'Custom Business Software',
    tag: 'GST Billing & Operations',
    description: 'Replace fragile spreadsheets and scattered WhatsApp messages with unified business software. Built around your exact daily workflow with 1-click GST tax invoicing, customer account ledgers, order pipelines, and staff task tracking boards.',
    deliverables: [
      '1-Click GST Invoicing Engine (PDF)',
      'Real-Time Order & Payment Pipelines',
      'Staff Task Assignment Board',
      '100% Owned Software · Zero Rent',
    ],
    link: '/services#custom-software',
  },
  {
    number: '04',
    title: 'AI Search Visibility & AI Ads',
    tag: 'Google SEO, AEO & Maps',
    description: 'Modern customers search on ChatGPT, Gemini, Perplexity, and Google Maps. We engineer your digital presence with structured entity schema and verified citations so your business gets recommended first when buyers ask for solutions.',
    deliverables: [
      'ChatGPT, Gemini & Perplexity Recommendations',
      'Google Maps 3-Pack Local Pin Ranking',
      'Google Search Technical SEO & Speed',
      'Targeted AI Platform Ad Campaigns',
    ],
    link: '/seo-ai',
  },
];

const ALL_INCLUSIVE_DELIVERABLES = [
  {
    title: 'Custom Visual Design & Full Functional Build',
    description: 'Bespoke layout and architecture crafted around your brand and offerings—zero generic templates or bloated plugins.',
  },
  {
    title: 'Domain Registration & Complete DNS Routing',
    description: 'Complete setup of your business domain, DNS records, business email routing, and SSL certificates handled end-to-end.',
  },
  {
    title: '24/7 Fast Cloud Hosting & SSL Security',
    description: 'Sub-second mobile speed hosted on enterprise-grade global edge infrastructure with continuous HTTPS security.',
  },
  {
    title: '1-Tap WhatsApp & Phone Lead Routing',
    description: 'Prominent, high-converting contact triggers routing mobile visitors directly into personal sales chats with zero friction.',
  },
  {
    title: 'WhatsApp, Social & Map Embed Integration',
    description: 'Direct links to your verified social profiles, interactive Google Maps directions, and automated chat links.',
  },
  {
    title: '100% Client Code & Data Ownership',
    description: 'Full intellectual property handover on day one. You own your code, database, and domain with zero monthly software rent or vendor lock-in.',
  },
];

export default function Slide3_CapabilitiesBento() {
  return (
    <section 
      className="bg-white py-20 lg:py-28 px-6 sm:px-8 select-none relative border-b border-slate-200/80"
      aria-label="Studio Core Capabilities & All-Inclusive Deliverables"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER (STRICT LEFT-ALIGNMENT & 4-TIER TYPOGRAPHY SCALE) */}
        <div className="max-w-3xl mb-14 text-left">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
              CORE CAPABILITIES & PILLARS
            </span>
          </FadeIn>
          <FadeIn delay={0.08} y={20}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900 mb-4">
              Bespoke Digital Systems. <span className="shimmer-text">Zero Technical Headaches.</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We design and engineer grounded digital platforms tailored around how your business actually operates. Every technical component is delivered all-inclusive with 100% client ownership.
            </p>
          </FadeIn>
        </div>

        {/* FULL-WIDTH ASYMMETRIC EDITORIAL LIST (SEPARATED BY SUBTLE 1PX DIVIDER LINES) */}
        <div className="border-t border-b border-slate-200/80 divide-y divide-slate-200/80 mb-20">
          {CORE_SERVICES.map((serv, idx) => (
            <FadeIn key={serv.number} delay={idx * 0.08} y={15}>
              <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline text-left">
                
                {/* LEFT COLUMN (40% - md:col-span-5): NUMBER (01-04) + BOLD SERVICE TITLE */}
                <div className="md:col-span-5 flex items-baseline gap-4">
                  <span className="font-mono text-sm font-semibold text-blue-600 shrink-0">
                    {serv.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">
                      {serv.title}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      {serv.tag}
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN (60% - md:col-span-7): CLEAN 16PX DESCRIPTION & DELIVERABLES ON OPEN SURFACE */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-base leading-relaxed text-slate-600">
                    {serv.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-600 pt-1">
                    {serv.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600/70" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={serv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Inspect Deliverables & Case Studies</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* ALL-INCLUSIVE DELIVERABLES (CLEAN 2-COLUMN TYPOGRAPHIC FEATURE LIST DIRECTLY ON SURFACE) */}
        <div className="text-left pt-4">
          <FadeIn delay={0.1} y={15}>
            <div className="max-w-2xl mb-8">
              <span className="font-mono text-xs font-medium text-emerald-600 uppercase tracking-wider block mb-2">
                ALL-INCLUSIVE DELIVERABLES SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">
                Every Standard Included. Zero Hidden Surcharges.
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                When you partner with VOOO LABS, there are no surprise fees for hosting setup, domain routing, or security certificates.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.18} y={15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {ALL_INCLUSIVE_DELIVERABLES.map((del, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 leading-snug">
                      {del.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-600 mt-1">
                      {del.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
