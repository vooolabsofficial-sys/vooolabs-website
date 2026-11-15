import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Cpu, Laptop, Globe, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';

const DISCIPLINES = [
  {
    id: 'websites',
    number: '01',
    category: 'All-Inclusive Web Platform',
    title: 'All-Inclusive Business Websites',
    shortDesc: 'Custom design, domain setup, 24/7 cloud hosting & direct WhatsApp lead integration. Complete technical setup with zero headaches.',
    accent: '#0284C7',
    icon: Globe,
    highlights: ['Domain, DNS & 24/7 Hosting Included', '1-Tap WhatsApp & Phone Inquiries', '100% Client Code & Asset Ownership'],
    previewMetric: 'All-In-One',
    previewBadge: 'Complete Setup'
  },
  {
    id: 'web-apps',
    number: '02',
    category: 'Client & Member Portals',
    title: 'Custom Web Apps & Portals',
    shortDesc: 'Customer-facing portals, student dashboards & booking systems. In today’s AI era, custom web apps are practical and affordable for growing businesses.',
    accent: '#3B82F6',
    icon: Laptop,
    highlights: ['Affordable custom engineering', 'Secure client & member logins', '100% responsive cross-device'],
    previewMetric: '₹0 / mo',
    previewBadge: 'No Per-Seat Fees'
  },
  {
    id: 'custom-software',
    number: '03',
    category: 'Operations & Workflow Systems',
    title: 'Custom Business Software',
    shortDesc: 'Custom GST invoicing, inquiry pipelines, staff task tracking & operations dashboards that replace chaotic spreadsheets and WhatsApp notes.',
    accent: '#10B981',
    icon: Cpu,
    highlights: ['Tailored 100% to your routine', 'Replaces Excel & WhatsApp chaos', '100% Owned · Zero software rent'],
    previewMetric: '100% Owned',
    previewBadge: 'Perpetual Asset'
  },
  {
    id: 'google-presence',
    number: '04',
    category: 'Search & AI Discovery',
    title: 'AI Search, Ads & Google Presence',
    shortDesc: 'Google SEO, ChatGPT & Gemini recommendations (AEO), Google Maps 3-Pack (GEO), and targeted AI platform ad campaign setups.',
    accent: '#8B5CF6',
    icon: Sparkles,
    highlights: ['ChatGPT, Gemini & Perplexity citations', 'Google Maps 3-Pack local ranking', 'Targeted AI platform ad setup'],
    previewMetric: 'Multi-Engine',
    previewBadge: 'AI & Map Discovery'
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
      id="services-overview"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none pt-28 pb-12 border-b border-slate-200/80"
      aria-label="Services Overview — VOOO LABS"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-radial from-blue-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-180px] w-[600px] h-[600px] rounded-full bg-radial from-purple-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />

      {/* ULTRA-SUBTLE ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-6">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-center">
              VOOO LABS ENGINEERING · CORE DISCIPLINES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-5">
              Software, Web Platforms & <br />
              <span className="text-slate-900">AI Search Visibility.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We design and engineer grounded digital systems tailored around how your business actually operates. Complete ownership, zero rigid templates, and honest workflow-based delivery.
            </p>
          </FadeIn>
        </div>

        {/* EDITORIAL INTERACTIVE SHOWCASE */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="bg-[#FAFAFD] border border-slate-200/80 rounded-3xl p-4 sm:p-7 shadow-xs">
            
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
                        ? 'bg-white border-slate-300 shadow-xs' 
                        : 'bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-transform ${
                          isActive ? 'scale-105' : 'opacity-70'
                        }`}
                        style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                      >
                        <IconComp size={15} />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-slate-500">
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

            {/* Active Discipline Editorial Details & Live Preview */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {(() => {
                  const current = DISCIPLINES[activeTab];
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
                            style={{ backgroundColor: `${current.accent}15`, color: current.accent }}
                          >
                            {current.category}
                          </span>
                          <span className="text-xs font-mono text-slate-500">100% Client Ownership</span>
                        </div>

                        <h2 className="font-clash text-2xl sm:text-3xl font-bold text-slate-900">
                          {current.title}
                        </h2>

                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                          {current.shortDesc}
                        </p>

                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {current.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: current.accent }} />
                              <span className="leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => scrollToSection(current.id)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-xs hover:shadow-md cursor-pointer group"
                            style={{ backgroundColor: current.accent }}
                          >
                            <span>See how it can help your business</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </button>

                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                          >
                            <span>See what your project will cost</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Architectural Card Preview */}
                      <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-slate-200/80 bg-[#FAFAFD] p-5 sm:p-6 text-left relative overflow-hidden shadow-2xs">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                              <span className="text-[10px] font-mono text-slate-500 ml-1">vooo.architecture</span>
                            </div>
                            <span 
                              className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase border"
                              style={{ backgroundColor: `${current.accent}15`, borderColor: `${current.accent}40`, color: current.accent }}
                            >
                              {current.previewBadge}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Value Commitment</div>
                              <div className="text-2xl font-clash font-bold text-slate-900 mt-0.5" style={{ color: current.accent }}>
                                {current.previewMetric}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-1 font-sans">
                                Engineered for zero bloat, high reliability, and perpetual business ownership.
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1 pt-1">
                              <span>Honest Project Scope</span>
                              <span className="text-emerald-600 font-bold">100% Code Handover</span>
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

        {/* BOTTOM METRIC STRIP */}
        <FadeIn delay={0.35} y={15}>
          <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              100% Code & Data Ownership
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              ₹0 Monthly Per-User Seat Fees
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              All-In-One Domain, DNS & Hosting
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              Honest Workflow-Based Timelines
            </span>
          </div>
        </FadeIn>

        {/* SMOOTH SCROLL CUE */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => scrollToSection('websites')}
            className="flex flex-col items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer"
            aria-label="Scroll to Core Disciplines"
          >
            <span className="tracking-wider uppercase text-[10px] mb-1">Explore Disciplines</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-blue-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
