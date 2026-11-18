import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Minus, 
  Search, 
  MapPin, 
  Bot, 
  Laptop, 
  ShieldCheck, 
  FileText, 
  Globe, 
  Clock, 
  Share2, 
  Headphones, 
  Code2 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { DuotoneCheckIcon } from '../components/shared/StudioIcons';

const EASING = [0.22, 1, 0.36, 1] as const;

type ChannelType = 'search' | 'maps' | 'ai';

interface StepFlow {
  num: string;
  stage: string;
  heading: string;
  detail: string;
}

const CHANNEL_FLOWS: Record<ChannelType, StepFlow[]> = {
  search: [
    {
      num: '01',
      stage: 'Buyer Discovery',
      heading: 'High-Intent Google Search',
      detail: 'A buyer searches your specific service or commercial specialization (e.g., "industrial laser cutting manufacturer" or "diagnostic center near me").',
    },
    {
      num: '02',
      stage: 'Instant Mobile Load',
      heading: 'Zero Plugin Lag Edge Delivery',
      detail: 'Your custom web platform opens instantaneously on cellular mobile with direct, uncluttered positioning and zero heavy page-builder lag.',
    },
    {
      num: '03',
      stage: 'Form-Free Context Capture',
      heading: 'Silent Intent Attribution',
      detail: 'The system quietly tags the visitor’s incoming search source and exact service page viewed—without forcing them to complete long, friction-heavy forms.',
    },
    {
      num: '04',
      stage: 'Pre-Contextualized Inquiry',
      heading: 'Direct 1-Tap WhatsApp Lead',
      detail: '1-tap WhatsApp inquiry opens with the exact product or service context pre-filled, so your team immediately knows what the client wants.',
    },
  ],
  maps: [
    {
      num: '01',
      stage: 'Buyer Discovery',
      heading: 'Local Google Maps Proximity',
      detail: 'A local commercial client or patient searches for nearby providers and discovers your verified, high-authority Google Maps presence.',
    },
    {
      num: '02',
      stage: 'Instant Mobile Load',
      heading: 'Direct Location Verification',
      detail: 'The buyer clicks through from Maps directly to your clinic, plant, or office page with embedded directions and verified operational hours.',
    },
    {
      num: '03',
      stage: 'Form-Free Context Capture',
      heading: 'Geographic Intent Tracking',
      detail: 'The architecture recognizes the local Maps referral and immediately prioritizes quick location confirmations and department contacts.',
    },
    {
      num: '04',
      stage: 'Pre-Contextualized Inquiry',
      heading: '1-Tap Call or WhatsApp Directions',
      detail: 'The visitor connects directly via phone or WhatsApp with their branch or visit requirement already identified.',
    },
  ],
  ai: [
    {
      num: '01',
      stage: 'Buyer Discovery',
      heading: 'AI Synthesis & Recommendation',
      detail: 'A corporate founder or buyer queries ChatGPT, Perplexity, or Google AI Overviews for verified, reputable service providers in your domain.',
    },
    {
      num: '02',
      stage: 'Instant Mobile Load',
      heading: 'Structured Entity Verification',
      detail: 'AI models cite and link your website because your architecture includes structured JSON-LD schema, clean entity graph, and crawlable authority.',
    },
    {
      num: '03',
      stage: 'Form-Free Context Capture',
      heading: 'High-Trust Commercial Journey',
      detail: 'The buyer lands with high intent on your technical credibility page, case studies, or catalog without navigating confusing menus.',
    },
    {
      num: '04',
      stage: 'Pre-Contextualized Inquiry',
      heading: 'Direct Executive Engagement',
      detail: 'The inquiry reaches your lead architect or director with specific project context, bypassing generic inquiry black holes.',
    },
  ],
};

const COMPARISONS = [
  {
    capability: 'Code & Mobile Speed',
    typical: 'Heavy page-builder themes and bloated plugins that lag on mobile connections.',
    vooo: 'Custom, lightweight code engineered for instantaneous mobile responsiveness.',
  },
  {
    capability: 'Search & AI Discovery',
    typical: 'Basic meta tags added as an afterthought; invisible to ChatGPT and AI search engines.',
    vooo: 'Built-in Technical SEO and structured JSON-LD schema for Google, Maps & AI discovery.',
  },
  {
    capability: 'Lead Attribution',
    typical: 'Generic "Contact Us" forms with no clue which page, channel, or campaign generated the lead.',
    vooo: 'Form-free visitor source attribution routed directly to WhatsApp & direct phone calls.',
  },
  {
    capability: 'Content & Brochure Updates',
    typical: 'Dependent on external developers for every minor text, image, or PDF catalog edit.',
    vooo: 'Clean self-service admin control to update notices, media & PDF brochures safely.',
  },
  {
    capability: 'Ownership & Continuity',
    typical: 'Locked inside proprietary agency accounts, builder subscriptions, or shared hosting traps.',
    vooo: '100% source code, GitHub repository, domain & cloud infrastructure in your company name.',
  },
];

const CAPABILITIES = [
  {
    num: '01',
    title: 'Custom, Production-Ready Web Architecture',
    desc: 'Engineered from scratch around your company’s offerings, positioning, and buyer journey—never cloned from generic templates.',
  },
  {
    num: '02',
    title: 'Edge-Fast & Fluid Mobile Performance',
    desc: 'Lightweight, modern frontend architecture built to open smoothly even on slower cellular mobile connections.',
  },
  {
    num: '03',
    title: 'Built-In Google SEO & AI Search (AEO) Foundation',
    desc: 'Clean semantic HTML, metadata, sitemaps, and structured entity schema so Google Search, Maps, and AI assistants read your business accurately.',
  },
  {
    num: '04',
    title: 'Form-Free Visitor Source & Intent Attribution',
    desc: 'Understand which service page, search source, or campaign generated each inquiry without slowing buyers down with long forms.',
  },
  {
    num: '05',
    title: 'Unified WhatsApp, Call, Maps & Social Integration',
    desc: '1-tap WhatsApp leads, department-wise routing, Google Maps integration, Instagram/LinkedIn/YouTube links, and rich OpenGraph share previews.',
  },
  {
    num: '06',
    title: 'Self-Service Content & PDF Brochure Updates',
    desc: 'Update product catalogs, company profile PDFs, announcements, and key page visuals cleanly without breaking the design.',
  },
  {
    num: '07',
    title: 'Complete Domain, DNS, SSL & Cloud Hosting Setup',
    desc: 'Domain registration or migration, secure DNS routing, HTTPS/SSL certificates, and 24/7 cloud deployment handled end-to-end.',
  },
  {
    num: '08',
    title: 'Anti-Spam Protection & Corporate Legal Readiness',
    desc: 'Automated spam filtering, hardened security headers, and clean Privacy Policy & Terms structure expected by enterprise clients.',
  },
  {
    num: '09',
    title: '24/7 Cloud Uptime Monitoring & Priority Tech Support',
    desc: 'Continuous automated uptime monitoring so your website stays live around the clock, backed by priority technical support.',
  },
  {
    num: '10',
    title: '100% Source Code, GitHub & Domain Ownership',
    desc: 'Full codebase, private GitHub repository, domain, and cloud infrastructure transferred cleanly to your company’s ownership.',
  },
];

const SECTORS = [
  {
    title: 'Manufacturing & Industrial B2B',
    desc: 'Product specifications, downloadable PDF catalogs, ISO credential displays, and direct bulk-inquiry routing.',
  },
  {
    title: 'Hospitals, Clinics & Diagnostics',
    desc: 'Doctor schedules, treatment clarity, Google Maps authority, and instant patient WhatsApp booking.',
  },
  {
    title: 'Institutes, Colleges & Academies',
    desc: 'Program architecture, admission inquiries, brochure downloads, and parent/student trust validation.',
  },
  {
    title: 'Real Estate & Commercial Brands',
    desc: 'Project walkthroughs, floor-plan brochures, location advantages, and high-intent site-visit leads.',
  },
];

export default function WebsiteServicePage() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>('search');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss a custom Business Website for my company.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: ASYMMETRIC EDITORIAL HERO + INTENT VISUALIZER
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-16 bg-white border-b border-slate-200/80 relative overflow-hidden text-left"
        aria-label="01 Business Websites Overview"
      >
        {/* SUBTLE AMBIENT STUDIO GLOW */}
        <div 
          className="absolute top-0 left-1/3 w-[550px] h-[550px] rounded-full bg-blue-500/[0.04] blur-[140px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* BREADCRUMB BACK LINK */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="mb-6"
          >
            <Link 
              to="/services" 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>All Services</span>
            </Link>
          </motion.div>

          {/* 12-COLUMN ASYMMETRIC SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN (lg:col-span-7): EDITORIAL HEADLINE & VALUE */}
            <div className="lg:col-span-7">
              {/* STUDIO PHILOSOPHY TAG */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04, ease: EASING }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
              >
                <span className="font-bold text-slate-950">First make it work,</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                <span className="font-medium text-slate-600">then make it</span>
                <span className="font-extrabold text-blue-600">beautiful.</span>
              </motion.div>

              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
              >
                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
                  01 / BUSINESS WEBSITES
                </span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-2xl"
              >
                <span>Websites Engineered to</span> <br className="hidden sm:inline" />
                <span className="shimmer-text">Turn Visitors into Direct Inquiries.</span>
              </motion.h1>

              {/* SUBHEADLINE */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
                className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
              >
                Most business websites act as slow digital brochures that bury key information on mobile and leave you guessing where inquiries come from. We engineer custom, edge-fast websites with built-in Google SEO & AI Search (AEO), form-free visitor intent intelligence, and direct WhatsApp & call routing.
              </motion.p>

              {/* ACTION ROW */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <LiquidButton
                  to="/contact?service=websites"
                  variant="gradient"
                  rounded="pill"
                  size="lg"
                  magnetic={true}
                >
                  <span>See what your project will cost</span>
                  <ArrowRight size={16} />
                </LiquidButton>

                <LiquidButton
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  variant="secondary"
                  rounded="pill"
                  size="lg"
                  magnetic={true}
                >
                  <span>Discuss on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </LiquidButton>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (lg:col-span-5): INTERACTIVE INTENT VISUALIZER */}
            <div className="lg:col-span-5 lg:border-l lg:border-slate-200/80 lg:pl-10 w-full pt-4 lg:pt-0">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 block">
                HOW VISITOR INTENT WORKS (LIVE FLOW)
              </span>
              
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Select a discovery channel to see how a buyer reaches your team without filling tedious forms:
              </p>

              {/* 3 INTERACTIVE UNDERLINE TABS */}
              <div className="mt-4 flex items-center gap-6 border-b border-slate-200/80 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => setActiveChannel('search')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeChannel === 'search'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Search size={14} className={activeChannel === 'search' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>Google Search</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel('maps')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeChannel === 'maps'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <MapPin size={14} className={activeChannel === 'maps' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>Google Maps</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel('ai')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeChannel === 'ai'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Bot size={14} className={activeChannel === 'ai' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>ChatGPT / AI</span>
                </button>
              </div>

              {/* 4-STEP VERTICAL HAIRLINE SIGNAL FLOW */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChannel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASING }}
                  className="mt-4 divide-y divide-slate-200/80 border-b border-slate-200/80"
                >
                  {CHANNEL_FLOWS[activeChannel].map((step) => (
                    <div key={step.num} className="py-3.5 flex items-start gap-3.5">
                      <span className="font-mono text-xs font-bold text-blue-600 shrink-0 mt-0.5 w-6">
                        {step.num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                            {step.stage}
                          </span>
                          <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-950 truncate">
                            {step.heading}
                          </h4>
                        </div>
                        <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: SIDE-BY-SIDE COMPARISON TABLE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 border-b border-slate-200/80 bg-white text-left"
        aria-label="Why Serious Companies Move Beyond Template Websites"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            THE ARCHITECTURAL DIFFERENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Why Serious Companies Move Beyond Template Websites.
          </h2>

          {/* 3-COLUMN HAIRLINE TABLE */}
          <div className="mt-10 border-t border-slate-200/80 divide-y divide-slate-200/80">
            {/* TABLE HEADER */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <div className="md:col-span-3">Capability</div>
              <div className="md:col-span-4">Typical Brochure Website</div>
              <div className="md:col-span-5 text-blue-600 font-bold">VOOO LABS Engineered System</div>
            </div>

            {/* TABLE ROWS */}
            {COMPARISONS.map((row, idx) => (
              <div 
                key={idx} 
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start hover:bg-slate-50/60 transition-colors"
              >
                <div className="md:col-span-3 font-bold text-sm sm:text-base text-slate-950 leading-snug">
                  {row.capability}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                  <Minus size={15} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>{row.typical}</span>
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-slate-900 leading-relaxed flex items-start gap-2 font-medium">
                  <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{row.vooo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: 10-POINT ARCHITECTURE CAPABILITIES MATRIX
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="Everything Included in VOOO LABS Website Architecture"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            EVERYTHING INCLUDED IN THE ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight max-w-2xl">
            Built End-to-End—From Code Architecture to Domain, Cloud & Support.
          </h2>

          {/* 10-ITEM 2-COLUMN OPEN HAIRLINE GRID */}
          <div className="mt-10 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 divide-y divide-slate-200/80">
            {CAPABILITIES.map((item, idx) => (
              <div 
                key={item.num}
                className={`py-6 md:px-6 ${
                  idx % 2 === 0 ? 'md:pl-0' : 'md:pr-0 md:border-l md:border-slate-200/80'
                } flex flex-col justify-start`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {item.num}
                  </span>
                  <DuotoneCheckIcon size={16} accentColor="#4285F4" />
                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: INDUSTRY FIT STRIP + NEXT-SYSTEM BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#F8F9FC] border-t border-slate-200/80 py-16 sm:py-20 select-none text-left relative overflow-hidden"
        aria-label="Built for High-Trust Commercial Sectors"
      >
        {/* TOP 2PX STUDIO BRAND PROGRESS LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: EASING }}
          className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            BUILT FOR HIGH-TRUST SECTORS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Engineered for the Real Commercial Demands of Your Sector.
          </h2>

          {/* 4 OPEN COLUMNS */}
          <div className="mt-8 border-y border-slate-200/80 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 grid grid-cols-1 md:grid-cols-4">
            {SECTORS.map((sector, idx) => (
              <div 
                key={idx}
                className="py-6 md:py-7 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-start"
              >
                <span className="font-mono text-xs font-bold text-blue-600 mb-2 tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          {/* NEXT-SYSTEM BRIDGE */}
          <div className="mt-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/80">
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Need client logins, student dashboards, or self-service bookings on top of your website?
            </p>
            <Link 
              to="/services/web-apps" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>Explore 02 Custom Web Apps & Portals</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 5: CLOSING CONVERSION BAND
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-24 px-6 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Start Your Business Website Project"
      >
        {/* AMBIENT GLOW BACKDROP */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            {/* STUDIO PHILOSOPHY TAG */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
              <span className="font-bold text-white">First make it work,</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-300">then make it</span>
              <span className="font-extrabold text-blue-400">beautiful.</span>
            </div>

            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
              NEXT STEPS FOR YOUR BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Ready to Build a Website That <br className="hidden sm:inline" />
              <span className="shimmer-text">Actively Brings Qualified Inquiries?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <LiquidButton
              to="/contact?service=websites"
              variant="gradient"
              rounded="pill"
              size="lg"
              magnetic={true}
              className="whitespace-nowrap"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </LiquidButton>

            <Link
              to="/services"
              className="text-sm font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors px-2 py-2"
            >
              <ArrowLeft size={15} />
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
