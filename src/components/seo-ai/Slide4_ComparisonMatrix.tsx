import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, ArrowRight, MessageSquare, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const COMPARISON_ROWS = [
  {
    feature: 'AI Engine Visibility',
    subtext: 'ChatGPT, Perplexity & Claude citations',
    generic: 'Completely invisible. AI models cannot recognize unverified text.',
    genericStatus: false,
    vooo: 'Featured primary source citation with verified brand entity data.',
    voooStatus: true,
  },
  {
    feature: 'Google AI Overview (SGE)',
    subtext: 'Top-of-page generative summary',
    generic: 'Pushed down below the fold. Loses 60%+ organic traffic.',
    genericStatus: false,
    vooo: 'Top carousel placement as an authoritative recommendation tile.',
    voooStatus: true,
  },
  {
    feature: 'Mobile Page Speed (FCP)',
    subtext: 'Real 4G/5G mobile user experience',
    generic: 'Slow 3.2s – 4.5s load times (bloated WordPress plugins & themes).',
    genericStatus: false,
    vooo: 'Sub-0.4s real mobile speed (pure React 19 & edge caching).',
    voooStatus: true,
  },
  {
    feature: 'Structured Data Schema',
    subtext: 'Semantic Schema.org JSON-LD',
    generic: 'Missing or broken tags. Google displays flat, plain blue links.',
    genericStatus: false,
    vooo: 'Validated JSON-LD schema enabling 5-star rich search snippets.',
    voooStatus: true,
  },
  {
    feature: 'Ongoing Marketing Cost',
    subtext: 'Monthly customer acquisition budget',
    generic: '₹30,000 to ₹1,00,000 every month on rented ads (stops if budget ends).',
    genericStatus: false,
    vooo: '₹0 ongoing ad spend. Permanent compounding digital equity.',
    voooStatus: true,
  },
];

export default function Slide4_ComparisonMatrix() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to upgrade my website from Invisible to an AI-Engineered Brand.")}`;

  return (
    <section 
      id="comparison-matrix"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Visibility Audit: Invisible Website vs AI-Engineered Brand"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3">
              THE 2026 VISIBILITY AUDIT
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15] mb-4">
              Your Website Today vs. <span className="shimmer-text">A VOOO LABS AI Brand.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              Most business websites built before 2025 are completely invisible to conversational AI. Here is what separates a traditional website from a generative digital asset:
            </p>
          </FadeIn>
        </div>

        {/* COMPARISON AUDIT MATRIX (AIRY, SOPHISTICATED TABLE CARDS) */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="rounded-3xl bg-white border border-slate-300/80 shadow-lg shadow-slate-200/40 overflow-hidden">
            
            {/* Table Header Bar */}
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200/90 text-xs font-bold uppercase tracking-wider py-4 px-6 text-slate-500">
              <div className="col-span-12 md:col-span-4">Evaluation Metric</div>
              <div className="hidden md:block col-span-4 text-rose-600">Traditional Website</div>
              <div className="hidden md:block col-span-4 text-emerald-700">VOOO LABS AI Platform</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-slate-50/50 transition-colors">
                  
                  {/* Feature & Subtext */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-clash font-bold text-sm sm:text-base text-slate-900">
                      {row.feature}
                    </div>
                    <div className="font-sans text-xs text-slate-500 mt-0.5">
                      {row.subtext}
                    </div>
                  </div>

                  {/* Traditional Generic Website */}
                  <div className="col-span-12 md:col-span-4 p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100 md:bg-transparent md:border-none md:p-0">
                    <div className="md:hidden text-[10px] font-bold uppercase text-rose-600 mb-1">
                      Traditional Website
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        ✕
                      </span>
                      <span className="leading-snug">{row.generic}</span>
                    </div>
                  </div>

                  {/* VOOO LABS AI Engineered Brand */}
                  <div className="col-span-12 md:col-span-4 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 md:bg-transparent md:border-none md:p-0">
                    <div className="md:hidden text-[10px] font-bold uppercase text-emerald-700 mb-1">
                      VOOO LABS AI Platform
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{row.vooo}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Matrix Footer Action Strip */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Transform Your Invisible Website into a Verified AI Authority</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>Upgrade to AI-Engineered Brand</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
