import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, MapPin, CheckCircle2, ArrowRight, ExternalLink, Star, Phone, Navigation, ShieldCheck, Database, Layers } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_ThreeEngines() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss the 3 Generative Engines (GEO, AEO, Local Maps) for my business.")}`;

  return (
    <section 
      id="three-engines"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="The Three Generative Engines: GEO, AEO, and Local Maps"
    >
      {/* AMBIENT RADIAL GLOWS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3">
              THE 3 GENERATIVE ENGINES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15] mb-4">
              How Modern Buyers Discover You Across <span className="shimmer-text">Every AI Platform.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              Depending on their habits, your prospective clients search on ChatGPT, Google AI Overviews, or Google Maps. We optimize your brand to dominate all three generative touchpoints simultaneously.
            </p>
          </FadeIn>
        </div>

        {/* 3 DISTINCT ARCHITECTURAL UI PARADIGMS (NON-REPETITIVE) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* ENGINE 1: GEO — THE ENTITY KNOWLEDGE GRAPH (CHATGPT / PERPLEXITY) */}
          <FadeIn delay={0.25} y={20} className="flex">
            <div className="w-full rounded-3xl bg-[#FAFAFC] border border-purple-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left hover:border-purple-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                      <Bot size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold text-purple-700">01 / GEO</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">SearchGPT & Claude</span>
                </div>

                <div>
                  <h3 className="font-clash font-bold text-xl text-slate-900 mb-1.5">
                    Generative Engine Optimization
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    AI bots don't crawl for keywords; they search for verified entity relationships. We structure your brand data across public knowledge graphs so conversational LLMs cite your company.
                  </p>
                </div>

                {/* Bespoke Mini Visual: Entity Graph Node Representation */}
                <div className="p-3.5 rounded-2xl bg-white border border-purple-100 space-y-2 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-100">
                    <span>Knowledge Source</span>
                    <span>Ingestion</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>Wikidata & Crunchbase</span>
                    <span className="text-emerald-600 font-bold">✓ Synced</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>LLM Citation Index</span>
                    <span className="text-purple-600 font-bold">100% Ingested</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>Ad Costs Required</span>
                    <span className="text-slate-900 font-bold">₹0 / mo</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100 text-xs font-semibold text-purple-700 flex items-center justify-between">
                <span>Result: Direct AI Recommendation</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </FadeIn>

          {/* ENGINE 2: AEO — GOOGLE AI OVERVIEW SERP (SGE SNAPSHOT) */}
          <FadeIn delay={0.32} y={20} className="flex">
            <div className="w-full rounded-3xl bg-[#FAFAFC] border border-blue-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left hover:border-blue-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                      <Sparkles size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-700">02 / AEO</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Google AI (SGE)</span>
                </div>

                <div>
                  <h3 className="font-clash font-bold text-xl text-slate-900 mb-1.5">
                    Answer Engine Optimization
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Google places an AI Snapshot above all organic search results. We format your content with structured Q&A entities so Google cites you as the #1 verified summary tile.
                  </p>
                </div>

                {/* Bespoke Mini Visual: Google AI Snapshot Carousel Tile */}
                <div className="p-3.5 rounded-2xl bg-white border border-blue-100 space-y-2 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-100">
                    <span>SERP Placement</span>
                    <span>Tile #1</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-200">
                    <div className="font-bold text-slate-900 text-xs">VOOO LABS Verified</div>
                    <div className="text-[10px] text-slate-500 font-sans mt-0.5">Primary Google AI Citation Tile</div>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 pt-1">
                    <span>Click-Through Share</span>
                    <span className="text-blue-600 font-bold">Top of Page</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100 text-xs font-semibold text-blue-700 flex items-center justify-between">
                <span>Result: Zero-Click Domination</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </FadeIn>

          {/* ENGINE 3: LOCAL GEO — GOOGLE MAPS 3-PACK & SPATIAL RADAR */}
          <FadeIn delay={0.4} y={20} className="flex">
            <div className="w-full rounded-3xl bg-[#FAFAFC] border border-emerald-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left hover:border-emerald-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      <MapPin size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700">03 / Local GEO</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Maps & Siri Proximity</span>
                </div>

                <div>
                  <h3 className="font-clash font-bold text-xl text-slate-900 mb-1.5">
                    Google Maps 3-Pack & Voice
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Captures nearby buyers searching "near me" on mobile or voice assistants. Optimizes your map pin, photos, and review velocity for immediate walk-ins and phone calls.
                  </p>
                </div>

                {/* Bespoke Mini Visual: Local Action Card */}
                <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 space-y-2 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-100">
                    <span>Maps Status</span>
                    <span className="text-emerald-600 font-bold">⭐ 5.0 (Top 3)</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                      📞 1-Tap Call
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-700 font-bold text-[10px]">
                      📍 Directions
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 pt-1">
                    <span>Inbound Lead Intent</span>
                    <span className="text-emerald-600 font-bold">Immediate Buyers</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100 text-xs font-semibold text-emerald-700 flex items-center justify-between">
                <span>Result: Direct Phone Calls</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
