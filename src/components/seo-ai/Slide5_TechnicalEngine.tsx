import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Check, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Zap, Gauge, Monitor, FileCode } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_TechnicalEngine() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss Technical SEO, Sub-Second Speed, and Schema.org setup for my website.")}`;

  return (
    <section 
      id="technical-engine"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Technical SEO & Speed Engine — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sky-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-sky-600 uppercase mb-3 text-left">
            04 / The Technical Foundation & Speed Engine
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                The Zero-Latency Engine That <span className="shimmer-text">AI Scrapers & Google Love.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Both AI bots and human visitors abandon slow, bloated websites. We build pure, edge-cached React architecture that loads in under 0.4 seconds with validated Schema.org JSON-LD for instant indexing.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Sub-0.4s Real Mobile FCP (100/100 Score)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Loads instantaneously on real 4G/5G mobile connections. Zero visitor drop-off and optimal Google indexing signals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Structured Schema.org JSON-LD Data</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Semantic metadata configured out of the box so Google search results display 5-star rich snippets, pricing, and business credentials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Optimized AI Bot Ingestion Pipeline</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Robots.txt and dynamic sitemaps tuned specifically so GPTBot, PerplexityBot, and Googlebot ingest content without hitting crawl limits.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inspect Your Tech Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>100/100 Core Web Vitals</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: CORE WEB VITALS & BOT INGESTION CANVAS (LIGHT STUDIO AESTHETIC) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Browser Window Chrome */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">lighthouse.inspect / web-vitals</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Optimal Sub-0.4s
                  </span>
                </div>

                {/* Scorecard Metric Row */}
                <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Lighthouse</div>
                    <div className="text-xl font-clash font-bold text-emerald-600 mt-0.5">100/100</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Performance</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Load Latency</div>
                    <div className="text-xl font-clash font-bold text-sky-600 mt-0.5">0.38s</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Sub-Second FCP</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Schema.org</div>
                    <div className="text-xl font-clash font-bold text-slate-900 mt-0.5">Valid</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">5.0 ★ Snippets</div>
                  </div>
                </div>

                {/* Live Bot Ingestion Table */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pb-1.5 border-b border-slate-100">
                    <span>CRAWLER BOT / ENGINE</span>
                    <span>INGESTION STATUS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-bold text-slate-800">GPTBot (OpenAI Search)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      0.18s · Allowed
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-bold text-slate-800">PerplexityBot</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Entity Verified · Allowed
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-bold text-slate-800">Googlebot Smartphone</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Fast Index · Allowed
                    </span>
                  </div>
                </div>

                {/* Footer Notes */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <FileCode size={13} className="text-sky-500" />
                    Clean React 19 Architecture
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Zero WordPress Bloat
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
