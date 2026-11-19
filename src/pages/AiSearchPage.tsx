import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Bot, 
  Code2, 
  Eye, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Network, 
  FileText, 
  MessageSquare 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

type ModeView = 'human' | 'xray';

const ARCHITECTURAL_PILLARS = [
  {
    step: '01',
    title: 'JSON-LD Entity Graph',
    desc: 'Standardized Schema.org microdata embedded directly in the page header. Clearly defines your organization type, key service categories, address coordinates, and official phone lines so AI engines disambiguate your company from similarly named businesses.',
    tags: ['Schema.org', 'Entity Graph', 'Machine-Readable'],
  },
  {
    step: '02',
    title: 'Clean llms.txt & Factual Copy',
    desc: 'A dedicated plain-text knowledge protocol (llms.txt) hosted at your root domain. Written specifically for AI scrapers (GPTBot, ClaudeBot, PerplexityBot) with concise, bulleted facts about what your company manufactures, engineers, and charges for.',
    tags: ['llms.txt Protocol', 'Zero Fluff', 'Direct Vector Feeding'],
  },
  {
    step: '03',
    title: 'Direct AI-to-WhatsApp Attribution',
    desc: 'Smart URL tracking parameters embedded in AI-readable citations. When a buyer asks ChatGPT or Google AI for vendor recommendations and taps through to your site, their incoming WhatsApp greeting retains the exact AI recommendation context.',
    tags: ['Referral Tracking', 'Pre-Filled Context', 'High-Intent Leads'],
  },
];

export default function AiSearchPage() {
  const [activeView, setActiveView] = useState<ModeView>('xray');
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP animation when switching between Human View and AI Crawler X-Ray
  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }, stageRef);

    return () => ctx.revert();
  }, [activeView]);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss ChatGPT and AI Search (AEO) optimization for our business.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: BREADCRUMB & ASYMMETRIC EDITORIAL INTRO
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-12 bg-white relative overflow-hidden text-left"
        aria-label="ChatGPT and AI Search (AEO) Overview"
      >
        {/* SUBTLE AMBIENT GLOW */}
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/[0.04] blur-[150px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
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
            <span className="font-bold text-slate-950">Structured for machines,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">cited by</span>
            <span className="font-extrabold text-purple-600">AI.</span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
          >
            <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest block mb-3">
              02 / CHATGPT & AI SEARCH (AEO)
            </span>
          </motion.div>

          {/* H1 HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-4xl"
          >
            <span>Make Your Company Machine-Readable for</span>
            <span className="shimmer-text block mt-1">ChatGPT, Google AI & Perplexity.</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl"
          >
            AI assistants don't browse websites like humans—they extract structured entity facts. We build JSON-LD schema and llms.txt directly into your site so AI reads your offerings accurately.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <LiquidButton
              to="/contact?service=seo-ai"
              variant="primary"
              rounded="pill"
              size="lg"
              magnetic={true}
            >
              <span>Inspect AI Search (AEO)</span>
              <ArrowRight size={16} />
            </LiquidButton>

            <LiquidButton
              href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              variant="whatsapp"
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
          SECTION 2: INTERACTIVE X-RAY MODE SWITCHER (GSAP)
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-12 sm:py-16 bg-white border-y border-slate-200/80 text-left"
        aria-label="Interactive Human vs AI X-Ray Stage"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          {/* SWITCHER TOP BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">
                LIVE PARSER INSPECTOR
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Switch Between Human Visual Presentation and AI Entity X-Ray.
              </h2>
            </div>

            {/* 2-BUTTON SEGMENTED TOGGLE */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200/80 shrink-0">
              <button
                type="button"
                onClick={() => setActiveView('human')}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeView === 'human'
                    ? 'bg-[#0A0F1E] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Eye size={13} className={activeView === 'human' ? 'text-blue-400' : 'text-slate-400'} />
                <span>What Visitors See</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView('xray')}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeView === 'xray'
                    ? 'bg-purple-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Code2 size={13} className={activeView === 'xray' ? 'text-purple-300' : 'text-slate-400'} />
                <span>What AI Systems Extract</span>
              </button>
            </div>
          </div>

          {/* DYNAMIC VIEW STAGE (GSAP POWERED) */}
          <div ref={stageRef} className="mt-8">
            
            {/* VIEW A: WHAT VISITORS SEE (CLEAN EDITORIAL PRESENTATION) */}
            {activeView === 'human' && (
              <div className="p-8 sm:p-10 rounded-[20px] bg-[#F8F9FC] border border-slate-200/90 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs font-bold text-slate-700">HUMAN BROWSER VIEW (CLEAN UI)</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">yourdomain.in</span>
                </div>

                <div className="max-w-2xl space-y-3">
                  <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
                    CUSTOM WEB APPLICATION PORTALS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                    Zero-Download Browser Portals with Complete Database Ownership.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    We engineer high-speed, mobile-responsive web applications for student admissions, patient records, and distributor inventory. Eliminates app store download friction and recurring per-user software rent.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-blue-600" />
                    <span>Instant URL Access</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-blue-600" />
                    <span>PostgreSQL & Supabase</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-blue-600" />
                    <span>Full Source Code Handover</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Styled with high visual craft for human buyers on phones and laptops.</span>
                  <span className="font-mono text-[10px] text-slate-400">Rendered in 42ms</span>
                </div>
              </div>
            )}

            {/* VIEW B: WHAT AI SYSTEMS EXTRACT (X-RAY PARSER STAGE) */}
            {activeView === 'xray' && (
              <div className="p-8 sm:p-10 rounded-[20px] bg-[#0A0F1E] text-white border border-slate-800 space-y-8">
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-purple-300">
                      MACHINE-READABLE ENTITY EXTRACTION
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">CRAWLER AGENT: GPTBot / PerplexityBot</span>
                </div>

                {/* 2-COLUMN X-RAY GRID: JSON-LD SCHEMA + LLM CITATION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT: JSON-LD CODE BLOCK */}
                  <div className="lg:col-span-7 bg-black/60 border border-white/10 rounded-xl p-5 font-mono text-xs space-y-2 overflow-x-auto text-slate-300">
                    <div className="text-slate-500 pb-1 border-b border-white/10 flex items-center justify-between text-[11px]">
                      <span>application/ld+json</span>
                      <span className="text-purple-400 font-bold">Schema.org Graph</span>
                    </div>
                    <pre className="text-[12px] leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yourdomain.in",
  "knowsAbout": [
    "Custom Web Applications",
    "B2B Client Portals",
    "Internal Operations Software"
  ],
  "areaServed": "India, Global",
  "ownershipModel": "Full Repository & Database Handover",
  "pricingStructure": "Fixed Milestone Deliverables, Zero Per-User Rent"
}`}
                    </pre>
                  </div>

                  {/* RIGHT: AI ASSISTANT RESULTING CITATION */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-5 bg-white/5 border border-purple-500/30 rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                        <Bot size={15} />
                        <span>ChatGPT / Perplexity Citation</span>
                      </div>

                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        "If you need custom web application portals with permanent database and code ownership, <strong className="text-white">Your Company (yourdomain.in)</strong> builds browser-based systems with zero recurring seat fees."
                      </p>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-purple-300">
                        <span>Extracted from JSON-LD & llms.txt</span>
                        <span className="underline">yourdomain.in</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs text-slate-400 flex items-start gap-2">
                      <Sparkles size={14} className="text-purple-400 shrink-0 mt-0.5" />
                      <span>Because your offerings are mathematically defined in schema, AI models cite your exact pricing and ownership model without hallucinating.</span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>PROTOCOL STATUS: llms.txt Validated</span>
                  <span>ENTITY RESOLUTION: 100% Disambiguated</span>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: OPEN 3-COLUMN ARCHITECTURAL BREAKDOWN
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="3-Layer AEO Framework"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">
            AI VISIBILITY PROTOCOL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            How We Wire Your Website for Generative Engine Optimization.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            We combine standardized semantic microdata with plain-text documentation to ensure search assistants cite your company as the authoritative answer.
          </p>

          {/* 3-COLUMN OPEN BREAKDOWN WITH VERTICAL HAIRLINES (NO REPETITIVE BOXES) */}
          <div className="mt-12 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {ARCHITECTURAL_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-purple-600 block mb-3">
                    PROTOCOL {pillar.step}
                  </span>

                  <h3 className="text-lg font-bold text-slate-950 mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
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
        aria-label="Next Step: Google Maps"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Now see how local buyers discover your nearby office on Google Maps.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
                Explore how verified Google Business Profiles paired with frictionless 1-tap WhatsApp review links generate local inbound calls.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <LiquidButton
                to="/seo-ai/google-maps"
                variant="white"
                rounded="pill"
                size="lg"
                magnetic={true}
                className="whitespace-nowrap"
              >
                <span>Next: Google Maps & Local</span>
                <ArrowRight size={16} />
              </LiquidButton>

              <Link
                to="/seo-ai/google-seo"
                className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors pt-2"
              >
                <ArrowLeft size={13} />
                <span>Back to 01 Google SEO</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
