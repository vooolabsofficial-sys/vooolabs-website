import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

type PhilosophyMode = 'beautiful' | 'work';

const CORE_CAPABILITIES = [
  { index: '01', title: 'Business Websites', path: '/services/websites', note: 'Fast, search-ready & conversion-focused' },
  { index: '02', title: 'Custom Web Apps & Portals', path: '/services/web-apps', note: 'Progressive web apps with zero store friction' },
  { index: '03', title: 'Custom Business Software', path: '/services/business-software', note: 'Replaces messy spreadsheets & manual follow-ups' },
  { index: '04', title: 'Google SEO, AI Search & Ads', path: '/seo-ai', note: 'Structured authority for Google & AI citations' },
] as const;

export default function AboutPage() {
  const [mode, setMode] = useState<PhilosophyMode>('beautiful');
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initial GSAP reveal
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.editorial-reveal',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle GSAP micro-pulse when toggling between Work and Beautiful
  const handleModeChange = (newMode: PhilosophyMode) => {
    if (newMode === mode) return;
    setMode(newMode);

    if (containerRef.current) {
      gsap.fromTo(
        '.mode-pulse-target',
        { opacity: 0.8 },
        { opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Vrushabh, I would like to discuss a project with VOOO LABS.'
  )}`;

  const isWork = mode === 'work';

  return (
    <div 
      ref={containerRef} 
      className={`page-wrap min-h-screen bg-white text-slate-900 select-none relative overflow-hidden transition-colors duration-500 ${
        isWork ? 'bg-[#FCFCFD]' : 'bg-white'
      }`}
    >
      {/* 2PX STUDIO BRAND PROGRESS GRADIENT LINE */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-20" 
        aria-hidden="true" 
      />

      {/* SUBTLE AMBIENT STUDIO GLOW */}
      <div 
        className={`absolute top-0 left-1/3 w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-700 ${
          isWork ? 'bg-slate-400/[0.04] opacity-50' : 'bg-blue-500/[0.03] opacity-100'
        }`} 
        aria-hidden="true" 
      />

      {/* SUBTLE ARCHITECTURAL WIREFRAME GRID (ONLY IN WORK MODE) */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 ${
          isWork ? 'opacity-100 bg-grid-light' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10">

        {/* ══════════════════════════════════════════════════════
            PHASE 2: INTERACTIVE "WORK ↔ BEAUTIFUL" HERO
           ══════════════════════════════════════════════════════ */}
        <section 
          className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-14 text-left"
          aria-label="Studio Philosophy & Architectural Mode Switch"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-slate-200/80">
            
            {/* LEFT — SIGNATURE STATEMENT */}
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4285F4] font-semibold block mb-3 transition-colors duration-300">
                {isWork ? 'MODE 01 · STRUCTURAL LOGIC & ARCHITECTURE' : 'STUDIO PHILOSOPHY · VOOO LABS'}
              </span>

              <h1 className="mt-3 text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.04] transition-colors duration-500">
                <span className="text-slate-950 block">First Make It Work.</span>
                <span 
                  className={`block mt-1 sm:mt-2 transition-all duration-500 ${
                    isWork 
                      ? 'text-slate-300 line-through decoration-slate-300/80' 
                      : 'text-[#4285F4]'
                  }`}
                >
                  Then Make It Beautiful.
                </span>
              </h1>
            </div>

            {/* RIGHT — TACTILE 2-STATE PHILOSOPHY SWITCH */}
            <div className="inline-flex items-center p-1 rounded-full border border-slate-200/90 bg-[#F8F9FC] self-start md:self-end shadow-2xs">
              <button
                type="button"
                onClick={() => handleModeChange('work')}
                className={`min-h-[44px] px-5 py-2.5 rounded-full font-mono text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  isWork
                    ? 'bg-[#0A0F1E] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={isWork}
              >
                01. Work
              </button>

              <button
                type="button"
                onClick={() => handleModeChange('beautiful')}
                className={`min-h-[44px] px-5 py-2.5 rounded-full font-mono text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  !isWork
                    ? 'bg-[#0A0F1E] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={!isWork}
              >
                02. Beautiful
              </button>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            PHASE 3: EDITORIAL MAGAZINE SPLIT (12 COLUMNS)
           ══════════════════════════════════════════════════════ */}
        <section 
          className="max-w-6xl mx-auto px-6 py-12 lg:py-16 text-left"
          aria-label="Editorial Split — Leadership & Engineering Systems"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ──────────────────────────────────────────────────
                LEFT COLUMN (lg:col-span-5 lg:sticky lg:top-28):
                CLEAN, UNOBSTRUCTED FOUNDER PORTRAIT + MUSEUM NAMEPLATE
               ────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 mode-pulse-target">
              
              {/* STUDIO PORTRAIT FRAME (ZERO TEXT OVERLAYS) */}
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  isWork 
                    ? 'rounded-md border border-dashed border-slate-400 shadow-none bg-slate-50' 
                    : 'rounded-2xl shadow-[0_24px_54px_rgba(10,15,30,0.10)] border border-slate-200/90 bg-[#F8F9FC]'
                }`}
              >
                <picture>
                  <source srcSet="/images/vrushabh-shinde.webp" type="image/webp" />
                  <img 
                    src="/images/vrushabh-shinde.jpg" 
                    alt="Vrushabh Shinde — Founder & CEO, VOOO LABS" 
                    width={400} 
                    height={500} 
                    decoding="async" 
                    className={`w-full aspect-[4/5] object-cover object-top transition-all duration-700 ${
                      isWork ? 'grayscale contrast-110' : 'contrast-[1.04] saturate-[1.03]'
                    }`} 
                  />
                </picture>
              </div>

              {/* MUSEUM-STYLE NAMEPLATE DIRECTLY BELOW PORTRAIT */}
              <div className="pt-5 flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                  <div className="text-xl font-semibold tracking-tight text-slate-950">
                    Vrushabh Shinde
                  </div>
                  <div className="mt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-[#4285F4] font-medium">
                    Founder & CEO · VOOO LABS
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-medium text-slate-700">
                    Maharashtra, India
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    Pune · Nashik · Satara · Kolhapur
                  </div>
                </div>
              </div>

              {/* WORK MODE METRIC STAMP */}
              {isWork && (
                <div className="pt-3 font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center justify-between">
                  <span>[ENTITY: ACTIVE_LEAD_ARCHITECT]</span>
                  <span>[REPO_OWNER]</span>
                </div>
              )}

            </div>


            {/* ──────────────────────────────────────────────────
                RIGHT COLUMN (lg:col-span-7 divide-y divide-slate-200/80):
                CRISP EDITORIAL STORY, ZERO THEORY BLOAT
               ────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 divide-y divide-slate-200/80 mode-pulse-target">
              
              {/* BLOCK 01 — SHORT EXECUTIVE NOTE */}
              <div className="pb-10 editorial-reveal">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold block">
                  {isWork ? '[01: FOUNDER_NOTE]' : 'DIRECT LEADERSHIP'}
                </span>

                <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 leading-snug">
                  Built Directly With the Founder. Zero Agency Layers.
                </h2>

                <p className="mt-4 text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                  When you work with VOOO LABS, you do not get handed off from a sales pitch to a junior queue. As Founder & CEO, I architect your system directly—combining disciplined software workflows with modern AI-assisted speed so your website, portal, or internal tool works reliably from day one.
                </p>
              </div>


              {/* BLOCK 02 — THREE OVERSIZED ARCHITECTURAL PROOF ROWS */}
              <div className="py-10 space-y-9 editorial-reveal">
                {isWork && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold block -mb-3">
                    [02: ARCHITECTURAL_METRICS]
                  </span>
                )}

                {/* ROW 1: 40-30-30 MILESTONE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950 font-mono">
                    40 · 30 · 30
                  </div>
                  <div className="sm:col-span-8">
                    <div className="text-base text-slate-900 font-semibold mb-1">
                      Live Prototype Early.
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Start with a 40% kickoff advance to review a working frontend early, followed by 30% backend engineering and 30% launch handover.
                    </p>
                    {isWork && (
                      <div className="mt-2 font-mono text-[10px] text-slate-400 tracking-wider">
                        PROTOCOL: [STAGING_PREVIEW → API_ENGINE → GIT_TRANSFER]
                      </div>
                    )}
                  </div>
                </div>

                {/* ROW 2: 100% OWNERSHIP */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950 font-mono">
                    100%
                  </div>
                  <div className="sm:col-span-8">
                    <div className="text-base text-slate-900 font-semibold mb-1">
                      Client Source Code Ownership.
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Upon final settlement, the complete GitHub repository and database architecture transfer directly to your company.
                    </p>
                    {isWork && (
                      <div className="mt-2 font-mono text-[10px] text-slate-400 tracking-wider">
                        SPEC: [ZERO_ROYALTIES · NO_VENDOR_LOCKIN · PRIVATE_REPO]
                      </div>
                    )}
                  </div>
                </div>

                {/* ROW 3: 0 LOCK-IN */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#4285F4] font-mono">
                    0 Lock-In
                  </div>
                  <div className="sm:col-span-8">
                    <div className="text-base text-slate-900 font-semibold mb-1">
                      At-Actuals Infrastructure.
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Your domain, cloud hosting, and APIs stay under your own business account at exact provider rates—no middleman rent.
                    </p>
                    {isWork && (
                      <div className="mt-2 font-mono text-[10px] text-slate-400 tracking-wider">
                        HOSTING: [DIRECT_PROVIDER_BILLING · CLIENT_TENANT_ID]
                      </div>
                    )}
                  </div>
                </div>

              </div>


              {/* BLOCK 03 — FOUR CORE ENGINEERING PILLARS */}
              <div className="py-10 editorial-reveal">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold block">
                  {isWork ? '[03: CAPABILITIES_INDEX]' : 'WHAT WE ENGINEER'}
                </span>

                <nav 
                  aria-label="Capabilities Directory" 
                  className="mt-5 divide-y divide-slate-200/70 border-y border-slate-200/70"
                >
                  {CORE_CAPABILITIES.map((cap) => (
                    <Link
                      key={cap.index}
                      to={cap.path}
                      className="min-h-[48px] py-4 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-blue-600">
                          {cap.index}
                        </span>
                        <div>
                          <span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {cap.title}
                          </span>
                          <span className="hidden sm:inline-block ml-3 text-xs text-slate-400 font-normal">
                            — {cap.note}
                          </span>
                        </div>
                      </div>

                      <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 flex items-center gap-1 font-mono text-xs">
                        <span className="hidden sm:inline text-[11px]">Explore</span>
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>


              {/* BLOCK 04 — CALM CLOSING CTA */}
              <div className="pt-10 editorial-reveal">
                {isWork && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold block mb-3">
                    [04: DIRECT_CONTACT_DISPATCH]
                  </span>
                )}

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                  Have a real business problem to solve?
                </h3>

                <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
                  Skip the formal pitch deck—share what you want to build directly with Vrushabh.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <LiquidButton
                    to="/contact"
                    variant="primary"
                    rounded="pill"
                    size="md"
                    magnetic={true}
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight size={14} />
                  </LiquidButton>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-6 py-2.5 rounded-full border border-slate-200/90 hover:border-slate-300 text-xs sm:text-sm font-medium text-slate-900 hover:text-slate-950 bg-white hover:bg-slate-50 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight size={14} className="text-emerald-600" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
