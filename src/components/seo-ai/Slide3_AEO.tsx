import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Search, ExternalLink, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_AEO() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss AEO (Answer Engine Optimization) to appear in Google AI Overviews.")}`;

  return (
    <section 
      id="aeo"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Answer Engine Optimization (AEO) — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-left">
            02 / Answer Engine Optimization (AEO)
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Command Google AI Overviews — Be the <span className="shimmer-text">Direct Answer.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Google's AI Snapshot now dominates the top of commercial search results. If your business isn't cited in Google's AI Overview, potential clients never see your website. We structure your content so Google cites you as the authoritative answer.
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
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Top-of-Page AI Snapshot Placement</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Capturing Google's generative summary tiles at the very top of search results before users even scroll down to traditional links.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Structured Q&A Entity Architecture</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Content formatted with high-intent semantic Q&A blocks designed for rapid extraction by Google Gemini's retrieval engine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Google Knowledge Graph Entity Authority</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Establishing verified entity status on Google, ensuring your official brand details, reviews, and services are permanently recognized.
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
                  <span>Capture Google AI Overviews</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Google SGE Placement</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: AUTHENTIC GOOGLE AI OVERVIEW SNAPSHOT (LIGHT STUDIO AESTHETIC) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Google Search Simulation Header */}
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Search size={15} className="text-slate-400" />
                    <span>"best custom business software company in maharashtra"</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Google AI Overview Container */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3.5">
                  
                  {/* AI Overview Header Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
                        <Sparkles size={12} />
                      </div>
                      <span className="font-clash font-bold text-xs text-slate-900 tracking-wide">
                        AI Overview · Google Search
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      Verified AI Citation
                    </span>
                  </div>

                  {/* Synthesized Answer Snippet */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Modern businesses in Maharashtra are transitioning from rigid SaaS subscriptions to bespoke operating systems. Leading studios prioritize 100% code ownership with zero monthly licensing fees:
                  </p>

                  {/* Carousel of Verified Sources (VOOO LABS as Tile 1) */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    
                    {/* Primary Source Tile (VOOO LABS) */}
                    <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/90 text-left space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                          V
                        </div>
                        <span className="text-[11px] font-bold text-slate-900">VOOO LABS</span>
                      </div>
                      <p className="text-[10px] text-slate-600 line-clamp-2 leading-tight">
                        Bespoke business software, native Android apps & ₹0 recurring monthly rent.
                      </p>
                      <div className="text-[9px] font-mono text-blue-700 font-semibold flex items-center gap-1 pt-1">
                        vooolabs.com <ExternalLink size={9} />
                      </div>
                    </div>

                    {/* Secondary Tile */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Globe size={13} className="text-slate-500" />
                        <span className="text-[11px] font-bold text-slate-700">Architecture Guide</span>
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                        Comparative study on perpetual software assets vs monthly SaaS rent.
                      </p>
                      <div className="text-[9px] font-mono text-slate-400 font-medium pt-1">
                        Knowledge Entity
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer Notes */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-blue-600 font-semibold">
                    <CheckCircle2 size={13} />
                    Google Gemini Retrieval Ready
                  </span>
                  <span>Top-of-Page Authority</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
