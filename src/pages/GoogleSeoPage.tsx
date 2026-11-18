import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Search, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  FileCode, 
  Zap, 
  Layers, 
  Check, 
  Minus 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { DuotoneCheckIcon } from '../components/shared/StudioIcons';

const EASING = [0.22, 1, 0.36, 1] as const;

interface QueryScenario {
  id: string;
  pillLabel: string;
  query: string;
  genericUrl: string;
  genericH1: string;
  genericSnippet: string;
  voooSlug: string;
  voooH1: string;
  voooSnippet: string;
  voooSitelinks: string[];
}

const SCENARIOS: QueryScenario[] = [
  {
    id: 'valves',
    pillLabel: '"Industrial Valve Manufacturer"',
    query: 'industrial valve manufacturer india',
    genericUrl: 'generic-supplier.com/home#products',
    genericH1: 'Welcome to Our Engineering Company',
    genericSnippet: 'We offer all kinds of mechanical items, valves, pipes, fittings, and services. Call us for all your fabrication needs.',
    voooSlug: 'yourdomain.in/products/industrial-valves',
    voooH1: 'High-Pressure Industrial Valves & Flow Control Systems',
    voooSnippet: 'ISO 9001 certified precision gate, globe, and check valves engineered for petrochemical and power applications. Technical CAD and specifications available.',
    voooSitelinks: ['Gate Valves (Class 150-1500)', 'Technical Data Sheets', 'Material Test Certificates', 'Direct Quote Request'],
  },
  {
    id: 'coaching',
    pillLabel: '"12th Science Coaching Academy"',
    query: '12th science coaching classes near me',
    genericUrl: 'generic-classes.com/about-us',
    genericH1: 'Best Coaching for All Standards',
    genericSnippet: 'We teach 8th, 9th, 10th, 11th, 12th Arts, Commerce, Science and all subjects with experienced teachers.',
    voooSlug: 'yourdomain.in/admissions/12th-science-integrated',
    voooH1: '12th Science Integrated Coaching: JEE, NEET & Board Prep',
    voooSnippet: 'Dedicated physics, chemistry, mathematics, and biology batches with full-length weekly test series, doubt sessions, and digital parent attendance portal.',
    voooSitelinks: ['Batch Schedules & Fees', 'Previous Year Results', 'Faculty Profiles', 'Book Campus Visit'],
  },
  {
    id: 'software',
    pillLabel: '"Custom ERP Software India"',
    query: 'custom erp software development company',
    genericUrl: 'generic-it.com/index.html',
    genericH1: 'End-to-End IT Solutions Provider',
    genericSnippet: 'Mobile apps, websites, digital marketing, graphic design, and software for all businesses at low cost.',
    voooSlug: 'yourdomain.in/software/custom-erp-systems',
    voooH1: 'Custom Multi-Branch ERP & Inventory Systems with Source Code Ownership',
    voooSnippet: 'Tailored enterprise ERP software for manufacturers and distributors. Direct database ownership, zero per-seat subscription lock-in, and WhatsApp alerts.',
    voooSitelinks: ['Inventory & Order Module', 'Multi-Branch Billing', 'Architecture & Security', 'Request Tech Demo'],
  },
];

const BLUEPRINT_STAGES = [
  {
    step: '01',
    title: 'Clean Semantic HTML & Speed',
    detail: 'Native semantic markup (<main>, <article>, <nav>) paired with sub-second TTFB on lightweight modern React/Vite architecture. Crawlers parse the document hierarchy in milliseconds without JavaScript hydration delays.',
    metrics: '< 100ms TTFB · Valid HTML5',
  },
  {
    step: '02',
    title: 'Dedicated Service & City Pages',
    detail: 'Granular URL architecture ensuring every core product line, specialized service, and commercial operational hub receives its own indexed page. Eliminates query dilution from cramming everything into one homepage.',
    metrics: 'Granular Slugs · Exact Intent',
  },
  {
    step: '03',
    title: 'XML Sitemap & Search Console',
    detail: 'Automated canonical headers, clean XML sitemaps, robots.txt directives, and verified Google Search Console monitoring to ensure instant re-indexing upon updates and zero orphan page penalties.',
    metrics: 'Auto-Sitemap · Zero Orphans',
  },
];

export default function GoogleSeoPage() {
  const [activeScenario, setActiveScenario] = useState<QueryScenario>(SCENARIOS[0]);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP animation when user toggles query pill
  useEffect(() => {
    if (!comparisonRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-animate-target',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
      );
    }, comparisonRef);

    return () => ctx.revert();
  }, [activeScenario]);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Technical Google SEO architecture for our website.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: BREADCRUMB & CENTERED WIDE HERO
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-14 bg-white text-center relative overflow-hidden"
        aria-label="Technical Google SEO Overview"
      >
        {/* SUBTLE AMBIENT GLOW */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          
          {/* BREADCRUMB LINK */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="mb-8"
          >
            <Link 
              to="/seo-ai" 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>Back to SEO & AI Hub</span>
            </Link>
          </motion.div>

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
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              01 / TECHNICAL GOOGLE SEO
            </span>
          </motion.div>

          {/* H1 HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.14]"
          >
            <span>Structure Every Service Page So Google</span>
            <span className="shimmer-text block mt-1">Understands Exact Buyer Intent.</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            A single slow homepage rarely ranks for specific commercial searches. We engineer fast, semantically structured pages for each core service you offer.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <LiquidButton
              to="/contact?service=seo-ai"
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
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: FULL-WIDTH INTERACTIVE INTENT MATCHER (GSAP)
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-12 sm:py-16 bg-white border-y border-slate-200/80 text-left"
        aria-label="Interactive Search Intent Matcher"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          {/* HEADER & INTRO */}
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              INTERACTIVE DEMONSTRATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Compare How Google Crawlers See Generic vs. Search-Engineered Architecture.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select a commercial search query below to see why generic multi-purpose homepages get bypassed, while dedicated service URLs capture high-intent buyers.
            </p>
          </div>

          {/* INTERACTIVE BUYER QUERY PILLS */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
              SELECT QUERY:
            </span>
            {SCENARIOS.map((scenario) => {
              const isSelected = activeScenario.id === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenario(scenario)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A0F1E] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-950'
                  }`}
                >
                  {scenario.pillLabel}
                </button>
              );
            })}
          </div>

          {/* LIVE GSAP SPLIT COMPARISON STAGE */}
          <div ref={comparisonRef} className="mt-8 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT: GENERIC SINGLE-PAGE WEBSITE */}
            <div className="p-6 sm:p-7 rounded-[18px] bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                    GENERIC SINGLE-PAGE WEBSITE
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/70">
                    <AlertCircle size={11} />
                    <span>No Dedicated Match</span>
                  </span>
                </div>

                {/* SEARCH QUERY */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-3 py-2 rounded-md border border-slate-200/70">
                  <Search size={13} className="text-slate-400 shrink-0" />
                  <span>Google Query: "{activeScenario.query}"</span>
                </div>

                {/* VAGUE RESULT */}
                <div className="space-y-1.5 opacity-75">
                  <span className="font-mono text-xs text-slate-400 block truncate">
                    {activeScenario.genericUrl}
                  </span>
                  <h3 className="text-sm font-bold text-slate-700 line-through decoration-slate-400">
                    {activeScenario.genericH1}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {activeScenario.genericSnippet}
                  </p>
                </div>
              </div>

              {/* TECHNICAL FLAW NOTE */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 space-y-1">
                <strong className="text-slate-700 block font-semibold">Crawl Bottleneck:</strong>
                <p>Google views this as a general company profile with diluted relevance. It fails to match the buyer's specific commercial intent.</p>
              </div>
            </div>

            {/* RIGHT: VOOO LABS SEARCH-ENGINEERED ARCHITECTURE (GSAP ANIMATED) */}
            <div className="gsap-animate-target p-6 sm:p-7 rounded-[18px] bg-white border-2 border-blue-600/30 shadow-xs flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                    VOOO LABS SEARCH ARCHITECTURE
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 font-bold">
                    <CheckCircle2 size={11} />
                    <span>Exact Intent Match</span>
                  </span>
                </div>

                {/* BREADCRUMB URL */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Globe size={13} className="text-blue-600 shrink-0" />
                  <span className="font-mono font-medium text-blue-700">{activeScenario.voooSlug}</span>
                  <span className="font-mono text-[10px] text-slate-400 ml-auto bg-slate-100 px-1.5 py-0.5 rounded">HTTP 200 · 84ms</span>
                </div>

                {/* SPECIFIC INTENT H1 */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-blue-600 leading-snug">
                    {activeScenario.voooH1}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {activeScenario.voooSnippet}
                  </p>
                </div>

                {/* INDEXED SITELINKS */}
                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5">
                    INDEXED COMMERCIAL SITELINKS:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-blue-700 font-medium">
                    {activeScenario.voooSitelinks.map((link, idx) => (
                      <span key={idx} className="bg-blue-50/70 border border-blue-100 px-2 py-1 rounded truncate">
                        • {link}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* TECHNICAL ADVANTAGE NOTE */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-600 space-y-1">
                <strong className="text-slate-900 block font-semibold">Technical Advantage:</strong>
                <p>Google recognizes a dedicated semantic document matching exact commercial keyword syntax. Direct routing to WhatsApp quote request.</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: HORIZONTAL 3-STAGE CRAWL BLUEPRINT
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-[#F8F9FC] text-left relative overflow-hidden"
        aria-label="3-Stage Crawl Blueprint"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            ENGINEERING WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            The 3-Layer Crawlability Blueprint.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            We don't use heavy WordPress plugins that slow your server down. We build technical SEO directly into the clean codebase.
          </p>

          {/* HORIZONTAL TIMELINE (ZERO REPETITIVE CARDS) */}
          <div className="mt-12 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {BLUEPRINT_STAGES.map((stage, idx) => (
              <div 
                key={idx}
                className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm font-bold text-blue-600">
                      STAGE {stage.step}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded">
                      {stage.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: DARK TECHNICAL CONTRAST & NEXT PAGE BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-20 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Next Step: AI Search"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Search engines read HTML, but AI assistants extract structured knowledge graphs.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
                See how we implement JSON-LD schemas and llms.txt so ChatGPT, Perplexity, and Google AI cite your company accurately.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <LiquidButton
                to="/seo-ai/ai-search"
                variant="gradient"
                rounded="pill"
                size="lg"
                magnetic={true}
                className="whitespace-nowrap"
              >
                <span>Next: How AI Reads Your Site</span>
                <ArrowRight size={16} />
              </LiquidButton>

              <Link
                to="/seo-ai"
                className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors pt-2"
              >
                <ArrowLeft size={13} />
                <span>Back to 4 Channels Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
