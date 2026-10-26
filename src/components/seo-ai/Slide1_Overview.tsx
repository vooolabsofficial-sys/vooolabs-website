import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Bot, Sparkles, MapPin, Search, Cpu, CheckCircle2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const DISCIPLINES = [
  {
    id: 'geo',
    number: '01',
    category: 'Generative Search',
    title: 'GEO · ChatGPT & Perplexity',
    shortDesc: 'Get recommended when potential clients ask ChatGPT, SearchGPT, and Perplexity for business solutions.',
    accent: '#8B5CF6',
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    accentText: 'text-purple-600',
    icon: Bot,
    highlights: ['Brand entity structuring in knowledge graphs', 'Direct AI citations as the verified source', 'Zero pay-per-click ongoing ad costs'],
    previewMetric: 'AI Cited',
    previewBadge: 'SearchGPT Verified'
  },
  {
    id: 'aeo',
    number: '02',
    category: 'Answer Engine',
    title: 'AEO · Google AI Overviews',
    shortDesc: 'Capture top-of-page real estate in Google AI Overviews (SGE) so you become the direct answer, not just a link.',
    accent: '#3B82F6',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-600',
    icon: Sparkles,
    highlights: ['Google AI Snapshot top carousel placement', 'Structured Q&A entities for instant extraction', 'Google Knowledge Graph brand validation'],
    previewMetric: 'Top Carousel',
    previewBadge: 'Google SGE Verified'
  },
  {
    id: 'local-maps',
    number: '03',
    category: 'Spatial & Proximity',
    title: 'Local GEO · Google Maps 3-Pack',
    shortDesc: 'Dominate local "near me" searches and voice queries with an authoritative Google Maps pin and direct phone calls.',
    accent: '#10B981',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentText: 'text-emerald-600',
    icon: MapPin,
    highlights: ['Google Maps Top 3 local pin ranking', 'Direct 1-tap phone calls & driving directions', 'Automated 5-star customer review funnels'],
    previewMetric: 'Rank #1 Local',
    previewBadge: '5.0 ★ Verified'
  },
  {
    id: 'technical-engine',
    number: '04',
    category: 'Speed & Indexing',
    title: 'Technical Core · Speed & Schema',
    shortDesc: 'Sub-0.4s load speed and Schema.org JSON-LD built so AI scrapers and Google bots index your site in milliseconds.',
    accent: '#0284C7',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    accentText: 'text-sky-600',
    icon: Cpu,
    highlights: ['Sub-0.4s mobile FCP (100/100 Lighthouse)', 'Structured Schema.org 5-star rich snippets', 'Automated XML sitemaps & GPTBot access'],
    previewMetric: '< 0.4s FCP',
    previewBadge: '100/100 Lighthouse'
  },
];

export default function Slide1_Overview() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="seo-overview"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none pt-24 pb-12"
      aria-label="SEO & AI Growth Overview — VOOO LABS"
    >
      {/* REFINED AMBIENT RADIAL GLOWS */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-radial from-purple-500/6 to-transparent blur-[90px] animate-blob-1 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-180px] w-[600px] h-[600px] rounded-full bg-radial from-blue-500/5 to-transparent blur-[90px] animate-blob-2 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-radial from-emerald-500/4 to-transparent blur-[90px] animate-blob-3 pointer-events-none z-0" aria-hidden="true" />

      {/* ULTRA-SUBTLE ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A0F1E 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-6">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-center">
              VOOO LABS ENGINEERING · GENERATIVE DISCOVERY 2026
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0F1E] leading-[1.12] mb-5">
              Beyond 10 Blue Links: The Future of Search is <span className="shimmer-text">Generative & Instant.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Search is no longer about scrolling pages of links. Over 60% of modern buyers ask ChatGPT, Gemini, and Google AI for direct recommendations. We engineer your digital presence so AI engines cite your brand first.
            </p>
          </FadeIn>
        </div>

        {/* $10,000 EDITORIAL INTELLIGENCE COCKPIT (CLEAN, SOPHISTICATED, NO CHEESY GRAPHICS) */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="bg-[#FAFAFC] border border-slate-200/90 rounded-3xl p-4 sm:p-7 shadow-sm">
            
            {/* Top Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
              {DISCIPLINES.map((item, idx) => {
                const IconComp = item.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 border cursor-pointer ${
                      isActive 
                        ? 'bg-white border-slate-300 shadow-sm shadow-slate-200/50' 
                        : 'bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-transform ${
                          isActive ? 'scale-105' : 'opacity-70'
                        }`}
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        <IconComp size={15} />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-slate-400">
                        {item.number}
                      </span>
                    </div>
                    <div className={`font-clash font-bold text-sm leading-snug line-clamp-1 ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Editorial Breakdown & Live Preview */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {(() => {
                  const current = DISCIPLINES[activeTab];
                  const IconComp = current.icon;
                  return (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Left Column: Description & Highlights */}
                      <div className="lg:col-span-7 space-y-4 text-left">
                        <div className="flex items-center gap-2">
                          <span 
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                            style={{ backgroundColor: `${current.accent}12`, color: current.accent }}
                          >
                            {current.category}
                          </span>
                          <span className="text-xs font-mono text-slate-400">2026 Generative Framework</span>
                        </div>

                        <h2 className="font-clash text-2xl sm:text-3xl font-bold text-[#0A0F1E]">
                          {current.title}
                        </h2>

                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                          {current.shortDesc}
                        </p>

                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {current.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: current.accent }} />
                              <span className="leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3">
                          <button
                            onClick={() => scrollToSection(current.id)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm hover:shadow-md cursor-pointer group"
                            style={{ backgroundColor: current.accent }}
                          >
                            <span>Explore Full Breakdown</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Architectural Benchmark Card (Light, High-Fidelity) */}
                      <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-slate-200/90 bg-[#F8F9FC] p-5 sm:p-6 text-left relative overflow-hidden shadow-xs">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <span className="text-[10px] font-mono text-slate-400 ml-1">intelligence.engine / 2026</span>
                            </div>
                            <span 
                              className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase border"
                              style={{ backgroundColor: `${current.accent}12`, borderColor: `${current.accent}30`, color: current.accent }}
                            >
                              {current.previewBadge}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-xs">
                              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Search Ingestion Benchmark</div>
                              <div className="text-2xl font-clash font-bold text-slate-900 mt-0.5" style={{ color: current.accent }}>
                                {current.previewMetric}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-1 font-sans">
                                Structured knowledge graphs & verified citations built for conversational LLM indexing.
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1 pt-1">
                              <span>Ad Spend: ₹0 / Month</span>
                              <span className="text-emerald-600 font-bold">100% Owned Equity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

          </div>
        </FadeIn>

        {/* BOTTOM AUTHORITY METRIC STRIP */}
        <FadeIn delay={0.35} y={15}>
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              ChatGPT & Perplexity Citation Engine
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              Google AI Overviews (SGE) Placement
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Google Maps 3-Pack Local Dominance
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              ₹0 Ongoing Pay-Per-Click Ad Costs
            </span>
          </div>
        </FadeIn>

        {/* SMOOTH SCROLL CUE */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => scrollToSection('geo')}
            className="flex flex-col items-center text-xs font-semibold text-slate-400 hover:text-purple-600 transition-colors group cursor-pointer"
            aria-label="Scroll to Generative Engine Optimization"
          >
            <span className="tracking-wider uppercase text-[10px] mb-1">Explore 2026 Disciplines</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-purple-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
