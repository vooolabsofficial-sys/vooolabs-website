import { Globe, Laptop, Cpu, Sparkles, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';

const DISCIPLINES = [
  {
    id: 'websites',
    number: '01',
    category: 'All-Inclusive Web Platform',
    title: 'All-Inclusive Business Websites',
    description: 'High-trust, ultra-fast websites designed for small, mid-sized, and growing businesses to convert visitors into direct WhatsApp and phone inquiries. We handle the entire technical lifecycle: custom visual design, responsive build, domain registration, complete DNS configuration, 24/7 cloud hosting, and SSL certificates with 100% client code ownership.',
    deliverables: [
      'Custom Design & Responsive Build',
      'Domain & Complete DNS Setup',
      '24/7 Fast Cloud Hosting & SSL',
      '1-Tap WhatsApp Lead Ingress',
      '100% Code & Asset Ownership',
    ],
    anchor: '#websites',
  },
  {
    id: 'web-apps',
    number: '02',
    category: 'Client & Member Portals',
    title: 'Custom Web Apps & Portals',
    description: 'Self-service customer portals, student and member dashboards, appointment booking systems, and interactive operational tools. In today’s AI era, custom web applications that previously cost lakhs are now practical and affordable for growing businesses—built robustly without cutting corners.',
    deliverables: [
      'Customer Portals & Secure Logins',
      'Role-Based Staff Access Controls',
      'Centralized Cloud Database',
      'Affordable AI-Era Engineering',
      '₹0 Monthly Per-User Seat Fees',
    ],
    anchor: '#web-apps',
  },
  {
    id: 'custom-software',
    number: '03',
    category: 'Operations & Workflow Systems',
    title: 'Custom Business Software',
    description: 'Replace fragile spreadsheets, scattered WhatsApp notes, and expensive per-user monthly SaaS tools with unified business operations software. Custom-tailored to your exact daily workflow with 1-click GST tax invoicing, real-time order and payment tracking, and staff task boards.',
    deliverables: [
      '1-Click GST Invoicing Engine (PDF)',
      'Real-Time Order & Payment Pipelines',
      'Staff Task Assignment Board',
      'Automated Daily Cloud Backups',
      '100% Owned · Zero Software Rent',
    ],
    anchor: '#custom-software',
  },
  {
    id: 'google-presence',
    number: '04',
    category: 'Search & AI Discovery',
    title: 'AI Search Visibility & AI Ads',
    description: 'Modern customers search conversational AI engines, Google AI Overviews, and Google Maps. We engineer your digital presence with verified schema markup, local entity citations, and targeted AI platform ad campaign setups so your business gets recommended first when buyers search.',
    deliverables: [
      'ChatGPT, Gemini & Perplexity Recommendations',
      'Google Maps 3-Pack Local Pin Ranking',
      'Google Search Technical SEO & Speed',
      'Targeted AI Platform Ad Campaigns',
      'Multi-Engine Business Knowledge Entity',
    ],
    anchor: '#google-presence',
  },
];

const ALL_INCLUSIVE_DELIVERABLES = [
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
    title: '100% Client Code & Data Ownership',
    description: 'Full intellectual property handover on day one. You own your code, database, and domain with zero monthly software rent or vendor lock-in.',
  },
];

export default function Slide1_Overview() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services-overview"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none pt-32 sm:pt-36 pb-16 border-b border-slate-200/80"
      aria-label="Services Overview — VOOO LABS"
    >
      {/* ORIGINAL VIBRANT AMBIENT GLOWS */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-180px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-100px] left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-8">
        
        {/* EDITORIAL HEADER (STRICT LEFT-ALIGNMENT & 4-TIER TYPOGRAPHY SCALE) */}
        <div className="max-w-3xl mb-14 text-left">
          <FadeIn delay={0.05} y={15}>
            <div className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">
              VOOO LABS ENGINEERING · CORE DISCIPLINES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-5">
              Software, Web Platforms & <br />
              <span className="shimmer-text">AI Search Visibility.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="text-base leading-relaxed text-slate-600 max-w-2xl">
              We design and engineer grounded digital systems tailored around how your business actually operates. Complete code ownership, zero rigid templates, and honest workflow-based delivery.
            </p>
          </FadeIn>
        </div>

        {/* FULL-WIDTH ASYMMETRIC EDITORIAL LIST (DIVIDE-Y SEPARATED BY SUBTLE 1PX DIVIDERS) */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="border-t border-b border-slate-200/80 divide-y divide-slate-200/80 mb-16">
            {DISCIPLINES.map((item, idx) => (
              <div key={item.id} className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline text-left">
                
                {/* LEFT COLUMN (40% - md:col-span-5): NUMBER (01-04) + BOLD SERVICE TITLE */}
                <div className="md:col-span-5 flex items-baseline gap-4">
                  <span className="font-mono text-sm font-semibold text-blue-600 shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h2>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN (60% - md:col-span-7): CLEAN 16PX DESCRIPTION & DELIVERABLES ON OPEN BACKGROUND */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-600 pt-1">
                    {item.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600/70" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      <span>Jump to Detailed Blueprint & Deliverables</span>
                      <ArrowRight size={13} />
                    </button>
                    <span className="text-slate-300">•</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <span>Get Cost Estimate</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </FadeIn>

        {/* ALL-INCLUSIVE DELIVERABLES (2-COLUMN TYPOGRAPHIC FEATURE LIST DIRECTLY ON SURFACE) */}
        <div className="text-left pt-2 mb-12">
          <FadeIn delay={0.3} y={15}>
            <div className="max-w-2xl mb-8">
              <span className="font-mono text-xs font-medium text-emerald-600 uppercase tracking-wider block mb-2">
                ALL-INCLUSIVE TECHNICAL BASELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">
                Full-Stack Delivery Included With Every Engagement.
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                You receive fully configured infrastructure with no hidden recurring platform licenses.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
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

        {/* SCROLL CUE */}
        <div className="pt-6 flex justify-center">
          <button 
            onClick={() => scrollToSection('custom-software')}
            className="flex flex-col items-center text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer"
            aria-label="Scroll to Core Disciplines"
          >
            <span className="tracking-wider uppercase text-xs mb-1 font-mono">Inspect Individual Vertical Blueprints Below</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-blue-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
