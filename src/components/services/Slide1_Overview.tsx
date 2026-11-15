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
    previewBadge: 'Complete Setup',
    specRows: [
      { label: 'Domain & Complete DNS Routing', val: 'INCLUDED' },
      { label: '24/7 Fast Cloud Hosting & SSL', val: 'INCLUDED' },
      { label: '1-Tap WhatsApp Ingress Funnel', val: 'INCLUDED' },
      { label: 'Monthly Website Hostage Fees', val: '₹0' },
    ]
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
    previewBadge: 'No Per-Seat Fees',
    specRows: [
      { label: 'Customer Accounts & Logins', val: 'INCLUDED' },
      { label: 'Role-Based Access Security', val: 'INCLUDED' },
      { label: 'Centralized Cloud Database', val: 'INCLUDED' },
      { label: 'Per-User Monthly Seat Fees', val: '₹0 FOREVER' },
    ]
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
    previewBadge: 'Perpetual Asset',
    specRows: [
      { label: 'Custom GST Invoicing Engine', val: '1-CLICK PDF' },
      { label: 'Inquiry & Order Pipeline', val: 'SYNCHRONIZED' },
      { label: 'Staff Task Tracking Board', val: 'INCLUDED' },
      { label: 'Source Code & Data Handover', val: '100% OWNED' },
    ]
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
    previewBadge: 'AI & Map Discovery',
    specRows: [
      { label: 'Google Search SEO Optimization', val: 'INCLUDED' },
      { label: 'ChatGPT & Gemini AEO Structuring', val: 'INCLUDED' },
      { label: 'Google Maps Top-3 Local Pin', val: 'OPTIMIZED' },
      { label: 'Targeted AI Ads & Landing Page', val: 'CONFIGURED' },
    ]
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

  const current = DISCIPLINES[activeTab];

  return (
    <section 
      id="services-overview"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none pt-28 pb-12 border-b border-slate-200/80"
      aria-label="Services Overview — VOOO LABS"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-radial from-blue-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-180px] w-[600px] h-[600px] rounded-full bg-radial from-purple-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-6">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-center font-mono">
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

        {/* NUMBERED EDITORIAL ROW LAYOUT (01 THROUGH 04) SPLIT WITH ARCHITECTURAL PREVIEW */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT 60%: NUMBERED EDITORIAL ROWS SEPARATED BY HAIRLINE DIVIDERS */}
            <div className="lg:col-span-7 space-y-2 text-left">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
                Editorial Service Index (Click to Inspect)
              </div>

              {DISCIPLINES.map((item, idx) => {
                const isActive = activeTab === idx;
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border cursor-pointer block relative ${
                      isActive
                        ? 'bg-white border-slate-300 shadow-xs ring-1 ring-slate-200'
                        : 'bg-[#FAFAFD] border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <span className={`font-mono text-sm font-bold ${
                          isActive ? 'text-slate-900' : 'text-slate-500'
                        }`}>
                          {item.number}
                        </span>
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                          style={{ backgroundColor: `${item.accent}14`, color: item.accent, borderColor: `${item.accent}30` }}
                        >
                          <IconComp size={16} />
                        </div>
                        <div>
                          <h2 className={`font-clash font-bold text-base sm:text-lg ${
                            isActive ? 'text-slate-900' : 'text-slate-700'
                          }`}>
                            {item.title}
                          </h2>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                            {item.category}
                          </div>
                        </div>
                      </div>

                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {isActive ? 'ACTIVE' : 'VIEW'}
                      </span>
                    </div>

                    {isActive && (
                      <p className="mt-3 pt-3 border-t border-slate-100 font-sans text-xs text-slate-600 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT 40%: ARCHITECTURAL PREVIEW FRAME & SPEC RECEIPT */}
            <div className="lg:col-span-5 text-left">
              <div className="rounded-3xl border border-slate-200/80 bg-[#FAFAFD] p-6 sm:p-7 shadow-xs relative overflow-hidden">
                
                {/* WINDOW HEADER */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                      Service Architecture Blueprint
                    </span>
                  </div>
                  <span 
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase border"
                    style={{ backgroundColor: `${current.accent}15`, borderColor: `${current.accent}40`, color: current.accent }}
                  >
                    {current.previewBadge}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Active Title Banner */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        Selected Discipline {current.number}
                      </div>
                      <h3 className="font-clash font-bold text-lg text-slate-900 mt-0.5">
                        {current.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                        {current.shortDesc}
                      </p>
                    </div>

                    {/* Dotted Architectural Spec Receipt */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Architectural Deliverables
                      </div>
                      {current.specRows.map((spec, i) => (
                        <div key={i} className="flex items-baseline justify-between gap-2 py-0.5">
                          <span className="text-slate-700 truncate">{spec.label}</span>
                          <div className="flex-1 border-b border-dotted border-slate-300 mx-1" aria-hidden="true" />
                          <span className="text-slate-900 font-bold shrink-0">{spec.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={() => scrollToSection(current.id)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white transition-all shadow-xs hover:shadow-md cursor-pointer"
                        style={{ backgroundColor: current.accent }}
                      >
                        <span>See how it can help your business</span>
                        <ArrowRight size={13} />
                      </button>

                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs"
                      >
                        <span>See what your project will cost</span>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </FadeIn>

        {/* BOTTOM VALUE COMMITMENTS */}
        <FadeIn delay={0.35} y={15}>
          <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-600 font-medium">
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
            <span className="tracking-wider uppercase text-[10px] mb-1">Explore Disciplines Below</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-blue-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
