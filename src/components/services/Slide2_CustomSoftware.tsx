import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Check, ArrowRight, MessageSquare, Database, Layers, CheckCircle2, Lock, RefreshCw } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide2_CustomSoftware() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Custom Business Software tailored for my company.")}`;

  return (
    <section 
      id="custom-software"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Custom Business Software — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-left">
            01 / Operations & Automation
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE (REAL SOFTWARE FIDELITY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Software Built Around <span className="shimmer-text">Your Routine</span> — Not the Other Way Around.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Break free from generic, rigid SaaS templates that force you to change how you work. Whatever your business workflow or operational challenge, we engineer bespoke software tailored 100% to your daily habits.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">100% Tailored to Your Business Logic</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      No redundant menus or confusing buttons. Only the exact fields, calculations, and daily steps your team needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Permanent Asset · ₹0 Monthly Software Rent</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Never pay ₹1,500 to ₹3,000 per user every month to generic third-party SaaS. A one-time build that belongs to you forever.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Run From Any Phone, Tablet or Desktop</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Secure browser-based software with automated cloud backups. Your ground staff and managers stay synced in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGER */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Your Custom System</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Private Code Handover</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: HIGH-END LIGHT-MODE ENTERPRISE DASHBOARD MOCKUP */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">app.vooolabs.internal / operations</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live System · 100% Owned
                  </span>
                </div>

                {/* Dashboard Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">License Model</div>
                    <div className="text-lg font-clash font-bold text-slate-900 mt-0.5">₹0 Monthly Rent</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Perpetual Asset Ownership</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Sync Latency</div>
                    <div className="text-lg font-clash font-bold text-blue-600 mt-0.5">Real-Time</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">Phone & Desktop Linked</div>
                  </div>
                </div>

                {/* Tailored Business Modules (Clean Table Rows) */}
                <div className="space-y-2.5 mb-5">
                  <div className="p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Layers size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Custom Daily Workflow Module</div>
                        <div className="text-[11px] text-slate-500">Molded 100% to your staff habits</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100">
                      Active
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <RefreshCw size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Automated Financial & Stock Engine</div>
                        <div className="text-[11px] text-slate-500">Instant PDF reports & live balances</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Synced
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Lock size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Encrypted Cloud Database</div>
                        <div className="text-[11px] text-slate-500">Automated daily secure snapshots</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-100">
                      Encrypted
                    </span>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Database size={13} className="text-blue-500" />
                    Dedicated PostgreSQL Store
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Zero Agency Lock-In
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
