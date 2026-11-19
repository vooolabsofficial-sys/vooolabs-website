import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Search, 
  Bot, 
  MapPin, 
  Sparkles, 
  Check, 
  Minus,
  Globe,
  FileCode,
  Share2,
  Phone,
  MessageSquare,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

interface DiscoveryChannel {
  num: string;
  badge: string;
  title: string;
  tagline: string;
  desc: string;
  link: string;
  linkLabel: string;
  specs: string[];
}

const CHANNELS: DiscoveryChannel[] = [
  {
    num: '01',
    badge: 'ORGANIC SEARCH ARCHITECTURE',
    title: 'Google Search (Technical SEO)',
    tagline: 'Structure every service page so Google understands exact buyer intent.',
    desc: 'Dedicated service pages, clean semantic HTML, and sub-second cellular speed so high-intent buyers discover your offerings organically without paying for every click.',
    link: '/seo-ai/google-seo',
    linkLabel: 'Explore Technical SEO Architecture',
    specs: ['Semantic Hierarchy', 'Granular URLs', 'XML Sitemaps', 'Speed Optimization'],
  },
  {
    num: '02',
    badge: 'AI & LLM DISCOVERY (AEO)',
    title: 'ChatGPT & AI Search (AEO)',
    tagline: 'Make your business machine-readable for AI assistants and LLMs.',
    desc: 'Structured JSON-LD schema graphs and llms.txt knowledge protocols so ChatGPT, Google AI, and Perplexity extract accurate, factual summaries of your capabilities.',
    link: '/seo-ai/ai-search',
    linkLabel: 'Explore ChatGPT & AI Search System',
    specs: ['Schema.org JSON-LD', 'llms.txt Protocol', 'Entity Disambiguation', 'AI Citation Feeds'],
  },
  {
    num: '03',
    badge: 'LOCAL PROXIMITY & AUTHORITY',
    title: 'Google Maps & Local Presence',
    tagline: 'Capture local regional searches with verified business profile authority.',
    desc: 'Standardized Google Business Profile optimization paired with a frictionless 1-tap WhatsApp review collection link for genuine customer reputation.',
    link: '/seo-ai/google-maps',
    linkLabel: 'Explore Google Maps & Local Setup',
    specs: ['Standardized NAP', 'WhatsApp Review Links', 'Geotagged Assets', 'Local Intent Routing'],
  },
  {
    num: '04',
    badge: 'PAID CAMPAIGNS & LANDING SYSTEMS',
    title: 'Google Search Ads & Landing Pages',
    tagline: 'Direct commercial traffic into focused, sub-second conversion funnels.',
    desc: 'High-intent search keyword targeting connected to dedicated, fast landing pages—eliminating wasted clicks with pre-tagged WhatsApp attribution.',
    link: '/seo-ai/google-ads',
    linkLabel: 'Explore Google Ads & Landing Architecture',
    specs: ['Exact Match Keywords', 'Dedicated Landing Pages', 'WhatsApp Attribution', 'Negative Keyword Lists'],
  },
];

const COMPARISONS = [
  {
    dimension: 'Landing Page Speed',
    traditional: 'Sending ad traffic to slow, bloated templates with broken mobile layouts.',
    vooo: 'Dedicated, lightweight landing pages built for instantaneous cellular speed.',
  },
  {
    dimension: 'Schema & AI Readiness',
    traditional: 'Ignoring structured schema and machine-readable data for AI models.',
    vooo: 'Full JSON-LD and llms.txt integration so search engines and AI read your services.',
  },
  {
    dimension: 'WhatsApp Attribution',
    traditional: 'Relying on generic contact forms where inquiry sources get lost.',
    vooo: 'Form-free direct WhatsApp routing with campaign and page context pre-attached.',
  },
  {
    dimension: 'Account Ownership',
    traditional: 'Agencies withholding ad account access, analytics data, or pixel control.',
    vooo: '100% ownership of your Google Search Console, Analytics, and ad accounts in your name.',
  },
];

export default function SeoAiPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP subtle stagger on channel rows
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.channel-row',
        { opacity: 0, y: 16 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.12, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Google SEO, AI Search & Ads visibility for our business.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: WIDE EDITORIAL HEADER (ARCHITECTURAL HUB)
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-14 bg-white relative overflow-hidden text-left"
        aria-label="04 Google SEO, AI Search and Ads Hub Overview"
      >
        {/* SUBTLE AMBIENT GLOW */}
        <div 
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* BREADCRUMB BACK LINK */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="mb-8"
          >
            <Link 
              to="/services" 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>All Services</span>
            </Link>
          </motion.div>

          {/* EDITORIAL BANNER */}
          <div className="max-w-4xl">
            {/* STUDIO PHILOSOPHY TAG */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04, ease: EASING }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
            >
              <span className="font-bold text-slate-950">Be visible to buyers,</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-600">cited by</span>
              <span className="font-extrabold text-blue-600">AI.</span>
            </motion.div>

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
            >
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
                04 / GOOGLE SEO, AI SEARCH & ADS
              </span>
            </motion.div>

            {/* H1 HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12]"
            >
              <span>Four Distinct Ways Buyers Find You—</span>
              <span className="shimmer-text block mt-1">Each Engineered Differently.</span>
            </motion.h1>

            {/* HONEST SUBHEADLINE */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl"
            >
              Search engines, AI assistants, local maps, and paid search ads each work on different rules. Explore each system below to see how we structure your business for clear visibility and direct WhatsApp inquiries.
            </motion.p>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: 4 SPACIOUS VISUAL CHANNEL ROWS
         ══════════════════════════════════════════════════════ */}
      <section 
        ref={containerRef}
        className="py-6 sm:py-10 bg-white text-left border-y border-slate-200/80"
        aria-label="4 Discovery Channels"
      >
        <div className="max-w-6xl mx-auto px-6 divide-y divide-slate-200/80">
          
          {/* ── ROW 1: GOOGLE TECHNICAL SEO ─────────────────── */}
          <div className="channel-row py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: TEXT & EDITORIAL EXPLORATION */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {CHANNELS[0].num}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {CHANNELS[0].badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {CHANNELS[0].title}
              </h2>

              <p className="text-base font-semibold text-slate-800 leading-relaxed">
                {CHANNELS[0].tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                {CHANNELS[0].desc}
              </p>

              {/* SPECIFICATION TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {CHANNELS[0].specs.map((spec, i) => (
                  <span key={i} className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>

              {/* DIRECT EXPLORATION LINK */}
              <div className="pt-3">
                <Link 
                  to={CHANNELS[0].link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>{CHANNELS[0].linkLabel}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT: BESPOKE MINI SCHEMATIC (URL HIERARCHY TREE) */}
            <div className="lg:col-span-5 bg-[#F8F9FC] border border-slate-200/90 rounded-[18px] p-5 sm:p-6 relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>URL HIERARCHY BLUEPRINT</span>
                <span className="text-emerald-600 font-bold">100% CRAWLABLE</span>
              </div>

              {/* ROOT DOMAIN NODE */}
              <div className="p-3 bg-white border border-slate-200/90 rounded-lg shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Globe size={14} className="text-blue-600 shrink-0" />
                  <span className="font-mono">yourdomain.in</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">HTTP 200 · 84ms</span>
              </div>

              {/* CONNECTING STEM */}
              <div className="w-px h-4 bg-slate-300 ml-6 my-1" />

              {/* GRANULAR SERVICE LEAF NODES */}
              <div className="space-y-2 pl-4 border-l border-slate-200/90 ml-6">
                <div className="p-2.5 bg-white border border-slate-200/80 rounded-md flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileCode size={13} className="text-slate-400" />
                    <span className="font-mono font-medium text-slate-800">/industrial-valves</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Indexed</span>
                </div>

                <div className="p-2.5 bg-white border border-slate-200/80 rounded-md flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileCode size={13} className="text-slate-400" />
                    <span className="font-mono font-medium text-slate-800">/boiler-tubes</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Indexed</span>
                </div>

                <div className="p-2.5 bg-white border border-slate-200/80 rounded-md flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileCode size={13} className="text-slate-400" />
                    <span className="font-mono font-medium text-slate-800">/flanges-fittings</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Indexed</span>
                </div>
              </div>
            </div>
          </div>


          {/* ── ROW 2: CHATGPT & AI SEARCH (AEO) ─────────────── */}
          <div className="channel-row py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: TEXT & EDITORIAL EXPLORATION */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {CHANNELS[1].num}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  {CHANNELS[1].badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {CHANNELS[1].title}
              </h2>

              <p className="text-base font-semibold text-slate-800 leading-relaxed">
                {CHANNELS[1].tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                {CHANNELS[1].desc}
              </p>

              {/* SPECIFICATION TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {CHANNELS[1].specs.map((spec, i) => (
                  <span key={i} className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>

              {/* DIRECT EXPLORATION LINK */}
              <div className="pt-3">
                <Link 
                  to={CHANNELS[1].link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>{CHANNELS[1].linkLabel}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT: BESPOKE MINI SCHEMATIC (ENTITY CITATION FLOW) */}
            <div className="lg:col-span-5 bg-[#F8F9FC] border border-slate-200/90 rounded-[18px] p-5 sm:p-6 relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>AI CITATION FLOW</span>
                <span className="text-purple-600 font-bold">LLM-READY</span>
              </div>

              {/* STEP 1: STRUCTURED SCHEMA */}
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-900 text-[11px]">JSON-LD Entity Graph</span>
                  <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">schema.org</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">
                  &#123; "@type": "Organization", "knowsAbout": ["Custom Valves"] &#125;
                </p>
              </div>

              {/* ARROW */}
              <div className="flex justify-center my-1.5 text-slate-400">
                <span className="text-[10px] font-mono tracking-widest text-slate-400">↓ EXTRACTED FACT</span>
              </div>

              {/* STEP 2: AI CITATION PREVIEW */}
              <div className="p-3 bg-white border border-purple-200 rounded-lg text-xs space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-purple-700 font-semibold text-[11px]">
                  <Bot size={13} />
                  <span>ChatGPT / Perplexity Answer</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug">
                  "<strong>yourdomain.in</strong> is an established manufacturer providing custom industrial valves with full technical documentation."
                </p>
                <div className="pt-0.5 text-[10px] font-mono text-purple-600 underline">
                  Source: yourdomain.in/products
                </div>
              </div>
            </div>
          </div>


          {/* ── ROW 3: GOOGLE MAPS & LOCAL AUTHORITY ─────────── */}
          <div className="channel-row py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: TEXT & EDITORIAL EXPLORATION */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {CHANNELS[2].num}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {CHANNELS[2].badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {CHANNELS[2].title}
              </h2>

              <p className="text-base font-semibold text-slate-800 leading-relaxed">
                {CHANNELS[2].tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                {CHANNELS[2].desc}
              </p>

              {/* SPECIFICATION TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {CHANNELS[2].specs.map((spec, i) => (
                  <span key={i} className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>

              {/* DIRECT EXPLORATION LINK */}
              <div className="pt-3">
                <Link 
                  to={CHANNELS[2].link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>{CHANNELS[2].linkLabel}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT: BESPOKE MINI SCHEMATIC (PROXIMITY PIN & ACTION STRIP) */}
            <div className="lg:col-span-5 bg-[#F8F9FC] border border-slate-200/90 rounded-[18px] p-5 sm:p-6 relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>GOOGLE MAPS AUTHORITY</span>
                <span className="text-emerald-600 font-bold">VERIFIED</span>
              </div>

              {/* SIMULATED GOOGLE MAPS CARD */}
              <div className="p-3.5 bg-white border border-slate-200/90 rounded-lg shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-950">Your Business Location</span>
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                    Local 3-Pack Presence
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 leading-snug">
                  Commercial & Industrial Hub · Western Industrial Corridor
                </p>

                {/* 1-TAP ACTION PILLS */}
                <div className="pt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                    <Phone size={10} className="text-blue-600" />
                    <span>Call Direct</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                    <MessageSquare size={10} className="text-emerald-600" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                    <Share2 size={10} className="text-purple-600" />
                    <span>Review Link</span>
                  </span>
                </div>
              </div>

              {/* 1-TAP REVIEW CONVERSION STRIP */}
              <div className="mt-3 p-2 bg-emerald-50/80 border border-emerald-200/80 rounded-md text-[11px] text-emerald-800 flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span>1-Tap WhatsApp review link for verified customer feedback.</span>
              </div>
            </div>
          </div>


          {/* ── ROW 4: GOOGLE SEARCH ADS & LANDING PAGES ─────── */}
          <div className="channel-row py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: TEXT & EDITORIAL EXPLORATION */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {CHANNELS[3].num}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
                  {CHANNELS[3].badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {CHANNELS[3].title}
              </h2>

              <p className="text-base font-semibold text-slate-800 leading-relaxed">
                {CHANNELS[3].tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                {CHANNELS[3].desc}
              </p>

              {/* SPECIFICATION TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {CHANNELS[3].specs.map((spec, i) => (
                  <span key={i} className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>

              {/* DIRECT EXPLORATION LINK */}
              <div className="pt-3">
                <Link 
                  to={CHANNELS[3].link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>{CHANNELS[3].linkLabel}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT: BESPOKE MINI SCHEMATIC (AD -> LANDING -> WHATSAPP CONVERSION) */}
            <div className="lg:col-span-5 bg-[#F8F9FC] border border-slate-200/90 rounded-[18px] p-5 sm:p-6 relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>PAID CONVERSION PIPELINE</span>
                <span className="text-orange-600 font-bold">ATTRIBUTED</span>
              </div>

              {/* AD CLICK */}
              <div className="p-2.5 bg-white border border-slate-200/90 rounded-md text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] font-bold text-slate-900 bg-slate-100 px-1 py-0.5 rounded">Ad</span>
                  <span className="font-medium text-slate-800 truncate">Exact Match: "Commercial Solar EPC"</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">Click</span>
              </div>

              <div className="w-px h-3 bg-slate-300 ml-6 my-1" />

              {/* DEDICATED LANDING PAGE */}
              <div className="p-2.5 bg-white border border-blue-200 rounded-md text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-blue-600" />
                  <span className="font-medium text-slate-900">Dedicated Fast Landing Page</span>
                </div>
                <span className="font-mono text-[10px] text-blue-600 font-semibold">Sub-Second</span>
              </div>

              <div className="w-px h-3 bg-slate-300 ml-6 my-1" />

              {/* ATTRIBUTED WHATSAPP SIGNAL */}
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-md text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare size={13} className="text-emerald-600" />
                  <span className="font-medium text-emerald-900">Pre-Tagged WhatsApp Lead</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 font-bold">UTM Verified</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: DARK TECHNICAL COMPARISON BAND
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-20 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Generic Ad Agencies vs VOOO LABS Technical Setup"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2.5">
            TECHNICAL COMPARISON
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Generic Ad Agencies vs. VOOO LABS Technical Setup.
          </h2>

          {/* 4 CRISP HAIRLINE COMPARISON ROWS */}
          <div className="mt-10 border-t border-white/15 divide-y divide-white/15">
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4">Generic Ad Agencies</div>
              <div className="md:col-span-5 text-orange-400 font-bold">VOOO LABS Technical Setup</div>
            </div>

            {COMPARISONS.map((row, idx) => (
              <div 
                key={idx} 
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-3 font-bold text-sm sm:text-base text-white leading-snug">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                  <Minus size={15} className="text-slate-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-2 font-medium">
                  <Check size={16} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>{row.vooo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: CLOSING CONVERSION BAND
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-24 px-6 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Start Your Search and AI Visibility Project"
      >
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
              <span className="font-bold text-white">High-intent discovery,</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-300">zero leaked</span>
              <span className="font-extrabold text-blue-400">budget.</span>
            </div>

            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
              ENGINEERED VISIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Ready to Make Your Business Easy to Find <br className="hidden sm:inline" />
              <span className="shimmer-text">on Google, Maps and AI Search?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <LiquidButton
              to="/contact?service=seo-ai"
              variant="white"
              rounded="pill"
              size="lg"
              magnetic={true}
              className="whitespace-nowrap"
            >
              <span>Configure Growth Blueprint</span>
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
