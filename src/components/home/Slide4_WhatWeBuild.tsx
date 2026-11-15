import { Check, X } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide4_WhatWeBuild() {
  const painPoints = [
    { title: 'Inquiries Lost in Personal WhatsApp Chats', desc: 'Customer inquiries are scattered across employee phones with zero centralized tracking or automated follow-up.' },
    { title: 'Fragile Excel Workbooks & Invoicing Errors', desc: 'Spreadsheet formulas break, order history gets lost, and invoices take hours to generate manually with frequent errors.' },
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
      className="bg-[#F8F9FC] py-20 lg:py-28 px-6 sm:px-8 select-none relative border-b border-slate-200/80"
      aria-label="Before vs After Contrast Ledger"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER (STRICT LEFT-ALIGNMENT & 4-TIER TYPOGRAPHY SCALE) */}
        <div className="max-w-3xl mb-14 text-left">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-medium text-purple-600 uppercase tracking-wider block mb-2">
              OPERATIONAL COMPARISON LEDGER
            </span>
          </FadeIn>
          <FadeIn delay={0.08} y={20}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900 mb-4">
              How Your Business Runs <span className="shimmer-text">With VOOO LABS.</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Compare how most businesses struggle with disconnected manual tools versus the operational clarity of a custom-engineered digital system.
            </p>
          </FadeIn>
        </div>

        {/* 2-COLUMN COMPARISON SPLIT PANEL (EQUAL-HEIGHT & GENEROUSLY PADDED) */}
        <FadeIn delay={0.16} y={20} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
            
            {/* LEFT COLUMN: HOW MOST BUSINESSES OPERATE TODAY */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-medium uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>How Most Businesses Operate Today</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-rose-50 text-rose-700 border border-rose-200">
                    Fragile & Disconnected
                  </span>
                </div>

                <div className="space-y-6">
                  {painPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200/70 mt-1">
                        <X size={14} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 leading-snug">{item.title}</h3>
                        <p className="text-base leading-relaxed text-slate-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono text-slate-500">
                Result: Lost customer inquiries, bookkeeping chaos, and escalating monthly subscription bills.
              </div>
            </div>

            {/* RIGHT COLUMN: HOW YOUR BUSINESS RUNS WITH VOOO LABS */}
            <div className="rounded-3xl border border-emerald-500/50 bg-white p-7 sm:p-9 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-medium uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>How Your Business Runs With VOOO LABS</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Unified & 100% Owned
                  </span>
                </div>

                <div className="space-y-6">
                  {studioOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                        <Check size={14} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 leading-snug">{item.title}</h3>
                        <p className="text-base leading-relaxed text-slate-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono text-emerald-700 font-medium">
                Result: 1-tap inquiries, error-free automated GST billing, and zero recurring seat rent.
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
