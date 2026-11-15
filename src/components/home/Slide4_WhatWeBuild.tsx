import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide4_WhatWeBuild() {
  const painPoints = [
    { title: 'Inquiries Lost in Personal WhatsApp Chats', desc: 'Customer inquiries scattered across employee phones with zero centralized tracking or automated follow-up.' },
    { title: 'Fragile Excel Workbooks & Invoicing Errors', desc: 'Formulas break, rows get deleted, and invoices take hours to generate manually with frequent calculation mistakes.' },
    { title: 'Zero ChatGPT & AI Search Discoverability', desc: 'When prospective buyers ask ChatGPT or Google AI for local recommendations, competitors get cited instead.' },
    { title: 'Escalating Per-User Monthly SaaS Fees', desc: 'Generic software companies charge steep recurring fees per employee for bloated menus you never use.' },
  ];

  const studioOutcomes = [
    { title: '1-Tap Direct WhatsApp Lead Capture', desc: 'Prominent, attractive inquiry triggers routing mobile visitors straight to your sales team with zero friction.' },
    { title: 'Automated GST Invoicing & Order Pipeline', desc: 'Generate compliant tax invoices in one click with real-time logs of paid, partial, and pending balances.' },
    { title: 'Multi-Engine Recommendation (SEO & AEO)', desc: 'Structured entity data ensuring ChatGPT, Gemini, and Google Maps actively cite and recommend your business.' },
    { title: '100% Code Ownership · ₹0 Monthly Rent', desc: 'Bespoke digital software engineered once around your exact routine and owned completely by your company.' },
  ];

  return (
    <section 
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none relative border-b border-slate-200/80"
      aria-label="Before vs After Contrast Ledger"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* EYEBROW */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2 text-center">
              OPERATIONAL COMPARISON LEDGER
            </span>
          </FadeIn>
          <FadeIn delay={0.08} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
              How Your Business Runs <span className="text-purple-600">With VOOO LABS.</span>
            </h2>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
              Compare how most businesses struggle with disconnected manual tools versus the operational clarity of a custom-engineered system.
            </p>
          </FadeIn>
        </div>

        {/* 2-COLUMN COMPARISON SPLIT PANEL */}
        <FadeIn delay={0.16} y={20} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch text-left">
            
            {/* LEFT COLUMN: HOW MOST BUSINESSES OPERATE TODAY (MUTED SURFACE) */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>How Most Businesses Operate Today</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Fragile & Disconnected
                  </span>
                </div>

                <div className="space-y-5">
                  {painPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200/70 mt-0.5">
                        <X size={14} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="font-clash font-bold text-sm text-slate-900">{item.title}</h3>
                        <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Result: Lost inquiries, bookkeeping chaos, and escalating monthly subscription bills.
              </div>
            </div>

            {/* RIGHT COLUMN: HOW YOUR BUSINESS RUNS WITH VOOO LABS (HIGH-CONTRAST PANEL) */}
            <div className="rounded-3xl border-2 border-emerald-500/60 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-emerald-500/5 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>How Your Business Runs With VOOO LABS</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Unified & 100% Owned
                  </span>
                </div>

                <div className="space-y-5">
                  {studioOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                        <Check size={14} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="font-clash font-bold text-sm text-slate-900">{item.title}</h3>
                        <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  Outcome: Predictable leads, clean operations, and zero monthly SaaS rent.
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* BOTTOM ACTION */}
        <FadeIn delay={0.25} y={15}>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-purple-600 px-7 py-3.5 rounded-full shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
