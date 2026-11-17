import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import LiquidButton from '../shared/LiquidButton';
import { DuotoneCheckIcon } from '../shared/StudioIcons';
import { WebsitePanoramaSvg } from './ServiceSchematics';
import { COMPANY } from '../../content/company';

const JOURNEY_STAGES = [
  {
    id: '01',
    label: '01 Discovers via Google & AI',
    headline: 'Multi-Engine Organic & AI Assistant Discovery',
    description:
      'Structured Technical SEO and AEO schema ensure your business surfaces accurately when buyers search Google, Maps, or AI assistants like ChatGPT and Perplexity.',
    tag: 'Search & Generative Indexation',
  },
  {
    id: '02',
    label: '02 Explores Tailored Pages',
    headline: 'Instant Mobile First Paint & Frictionless Flow',
    description:
      'Clean, mobile-first pages load instantaneously without bloated plugins—guiding visitors straight to the exact service or product they need.',
    tag: 'Sub-Second Edge Rendering',
  },
  {
    id: '03',
    label: '03 Form-Free Intent Capture',
    headline: 'Zero-Friction Context & Source Attribution',
    description:
      'Without forcing long forms, the system identifies which page, search source, or campaign brought the visitor and what caught their interest.',
    tag: 'Privacy-Preserving Attribution',
  },
  {
    id: '04',
    label: '04 Context-Rich WhatsApp Lead',
    headline: 'Direct, Contextual Lead Routing to Your Phone',
    description:
      'When the visitor taps WhatsApp or Call, your team receives a pre-contextualized inquiry showing the exact service page they viewed.',
    tag: 'Instant Sales Ingress',
  },
];

const CORE_CAPABILITIES = [
  {
    title: 'Built-In Technical SEO & AEO',
    description:
      'Clean semantic code, metadata, and JSON-LD schema engineered from day one so Google and ChatGPT/AI search read your business clearly.',
  },
  {
    title: 'Form-Free Visitor Source Intelligence',
    description:
      'Know which page, referral link, or campaign generated each inquiry—without slowing buyers down with tedious forms.',
  },
  {
    title: 'Context-Rich WhatsApp & Call Routing',
    description:
      '1-tap mobile inquiry triggers that automatically carry page context directly to your sales or front-desk team.',
  },
  {
    title: 'Edge-Fast, Bloat-Free Architecture',
    description:
      'Modern cloud deployment built for instant mobile responsiveness and strong security—zero fragile WordPress plugin bloat.',
  },
  {
    title: 'Complete Technical Setup & Ownership',
    description:
      'Domain configuration, DNS routing, SSL security, 24/7 cloud hosting, and 100% source code transferred to your accounts.',
  },
];

export default function Slide4_Websites() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const navigate = useNavigate();

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello VOOO LABS, I want to discuss an Intelligent Business Website with built-in SEO, AEO, and visitor intent tracking.'
  )}`;

  const activeStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <section 
      id="websites"
      className="snap-section bg-white py-24 sm:py-28 border-t border-slate-200/80 relative overflow-hidden select-none"
      aria-label="01 Intelligent Business Websites — VOOO LABS"
    >
      {/* SUBTLE AMBIENT BLUE ACCENT */}
      <div 
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-left">
        
        {/* TOP EDITORIAL HEADER (LEFT-ALIGNED, MAX-W-3XL) */}
        <div className="max-w-3xl">
          <FadeIn delay={0.05} y={15}>
            <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              01 / INTELLIGENT BUSINESS WEBSITES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[-0.02em] leading-tight">
              Websites Engineered with Built-In SEO, AEO &amp; Visitor Intent Intelligence.
            </h2>
          </FadeIn>

          {/* REAL INTERNET BOTTLENECK VS. VOOO LABS SYSTEM (2 CLEAN ACCENT LINES, ZERO BOXES) */}
          <FadeIn delay={0.18} y={15}>
            <div className="mt-6 space-y-3">
              <div className="border-l-2 border-slate-300 pl-4 py-0.5">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-0.5">
                  The Real Problem Outside
                </span>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Most agency websites are static digital brochures—slow on mobile, invisible to Google and AI search, and blind to where visitors come from or what they actually want.
                </p>
              </div>

              <div className="border-l-2 border-[#4285F4] pl-4 py-0.5">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-0.5">
                  The VOOO LABS System
                </span>
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  We engineer modern, edge-fast business websites with built-in Technical SEO &amp; AEO structure, privacy-first visitor intent attribution, and context-rich WhatsApp lead routing.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* MIDDLE VISUAL STAGE: ARCHITECTURAL PANORAMIC SCHEMATIC (ZERO OUTER BOX) */}
        <FadeIn delay={0.25} y={20} className="w-full my-12">
          <WebsitePanoramaSvg />
        </FadeIn>

        {/* INTERACTIVE "HOW A VISITOR BECOMES A QUALIFIED LEAD" JOURNEY STRIP */}
        <FadeIn delay={0.3} y={20} className="w-full my-10">
          <div className="border-y border-slate-200/80 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">
                  INTERACTIVE LIFECYCLE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  How a Visitor Becomes a Qualified Lead.
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400 self-start sm:self-auto">
                Select a stage below to inspect the mechanics
              </span>
            </div>

            {/* STAGE SELECTOR TABS (CLEAN HORIZONTAL STRIP) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-slate-100 pb-2">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative py-3 px-3 sm:px-4 text-left transition-colors duration-200 rounded-lg cursor-pointer ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-[13px] block leading-snug">
                      {stage.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="website-journey-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* STAGE DETAIL DISPLAY (OPEN TYPOGRAPHY WITH FLUID TRANSITION) */}
            <div className="pt-6 min-h-[96px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row md:items-baseline justify-between gap-3"
                >
                  <div className="max-w-2xl">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {activeStage.headline}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {activeStage.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full shrink-0 self-start md:self-auto">
                    {activeStage.tag}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* 5 CORE CAPABILITIES BUILT INTO EVERY WEBSITE (OPEN GRID, ZERO INNER BOXES) */}
        <FadeIn delay={0.35} y={20} className="w-full pt-4">
          <div className="mb-6">
            <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">
              ENGINEERED BASELINE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Five Capabilities Built Into Every Website.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 pt-2">
            {CORE_CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="shrink-0 mt-0.5">
                  <DuotoneCheckIcon size={20} accentColor="#4285F4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {cap.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ACTION ROW */}
        <FadeIn delay={0.42} y={15} className="mt-12 pt-6 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-4">
            <LiquidButton
              onClick={() => navigate('/contact', { state: { selectedService: 'Business Websites' } })}
              variant="primary"
              rounded="apple"
              size="md"
              className="font-medium text-sm group"
              ariaLabel="See what your project will cost"
            >
              <span>See what your project will cost</span>
              <ArrowRight 
                size={15} 
                className="ml-2 inline-block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" 
              />
            </LiquidButton>

            <LiquidButton
              href={whatsappUrl}
              target="_blank"
              variant="secondary"
              rounded="apple"
              size="md"
              className="font-medium text-sm group"
              ariaLabel="See how it can help your business on WhatsApp"
            >
              <MessageSquare size={15} className="mr-2 inline-block text-emerald-600" />
              <span>See how it can help your business</span>
            </LiquidButton>

            <div className="w-full sm:w-auto inline-flex items-center gap-2 text-xs font-mono text-slate-500 pt-2 sm:pt-0 sm:ml-2">
              <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
              <span>100% Client Code Ownership · Direct Lead Architect Access</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
