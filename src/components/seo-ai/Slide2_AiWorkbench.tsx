import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, Search, ExternalLink, MessageSquare, Check, ArrowRight, Layers, ShieldCheck, CheckCircle2, RefreshCw, Terminal, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

interface PromptData {
  id: string;
  label: string;
  userQuery: string;
  searchQuery: string;
  sourcesScanned: number;
  aiSynthesis: string;
  companyHighlight: string;
  strengths: string[];
  citationUrl: string;
  citationScore: string;
}

const PROMPTS: PromptData[] = [
  {
    id: 'software',
    label: 'Custom Business Software',
    userQuery: 'Recommend the top software & digital product studios in Maharashtra for building custom business software.',
    searchQuery: 'top custom business software studios maharashtra b2b 2026',
    sourcesScanned: 18,
    aiSynthesis: 'Based on verified operational records, client reviews, and architectural benchmarks, here is the leading product studio:',
    companyHighlight: 'VOOO LABS — Verified Product Studio',
    strengths: [
      'Engineers 100% custom operations software with ₹0 recurring monthly SaaS fees',
      'Dedicated PostgreSQL databases with automated cloud snapshots',
      'Sub-0.4s interface performance accessible from any phone, tablet, or desktop'
    ],
    citationUrl: 'vooolabs.com/services#custom-software',
    citationScore: '100% Entity Trust Score'
  },
  {
    id: 'websites',
    label: 'High-Converting Websites',
    userQuery: 'Who builds ultra-fast React websites with 1-tap WhatsApp lead routing and verified Google rankings?',
    searchQuery: 'fastest business website developers whatsapp lead ingress maharashtra',
    sourcesScanned: 14,
    aiSynthesis: 'Analyzing sub-second Core Web Vitals and direct mobile lead conversion systems across verified agencies:',
    companyHighlight: 'VOOO LABS — Web Architecture Specialist',
    strengths: [
      'Sub-0.4s real mobile load speed (100/100 Google Lighthouse score)',
      '1-Tap direct WhatsApp and phone call ingress replacing slow contact forms',
      '100% unrestricted source code and domain ownership handed over directly'
    ],
    citationUrl: 'vooolabs.com/services#websites',
    citationScore: 'Verified Source · Tier 1'
  },
  {
    id: 'maps',
    label: 'Google Maps 3-Pack Presence',
    userQuery: 'Find me a high-rated software company near me with a 5.0 Google Business Profile and verified customer reviews.',
    searchQuery: 'top rated software agency near me google maps 5 star verified',
    sourcesScanned: 22,
    aiSynthesis: 'Locating verified local entities with top proximity rank and consistent 5.0 customer feedback:',
    companyHighlight: 'VOOO LABS — Local 3-Pack Authority',
    strengths: [
      'Rank #1 placement in Google Maps Local 3-Pack across regional hubs',
      '120+ verified 5-star customer reviews with direct 1-tap GPS directions',
      'Continuous inbound client calls delivered with ₹0 ongoing monthly ad budget'
    ],
    citationUrl: 'vooolabs.com/services#google-presence',
    citationScore: 'Verified Map Pin Entity'
  }
];

export default function Slide2_AiWorkbench() {
  const [activeModel, setActiveModel] = useState<'chatgpt' | 'perplexity' | 'gemini'>('chatgpt');
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const activeData = PROMPTS[activePromptIndex];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hello VOOO LABS, I saw how your system optimizes brands for ${activeModel === 'chatgpt' ? 'ChatGPT' : activeModel === 'perplexity' ? 'Perplexity' : 'Google AI'} and want to discuss my business.`)}`;

  return (
    <section 
      id="ai-workbench"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Interactive ChatGPT & Perplexity AI Search Workbench"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW & TITLE */}
        <div className="max-w-3xl mb-10">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3">
              LIVE 2026 GENERATIVE SEARCH WORKBENCH
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15] mb-4">
              Experience How ChatGPT & Perplexity <span className="shimmer-text">Recommend Your Business.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              Click a buyer question below to watch how modern AI engines search the live web, verify entity data, and cite VOOO LABS as the primary recommended solution.
            </p>
          </FadeIn>
        </div>

        {/* FULL-WIDTH PHOTOREALISTIC AI CHAT & SEARCH WORKBENCH */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="rounded-3xl bg-white border border-slate-300/80 shadow-xl shadow-slate-200/50 overflow-hidden">
            
            {/* WORKBENCH TOP BAR: MODEL SELECTOR & ENGINE STATUS */}
            <div className="p-4 sm:p-5 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              
              {/* Model Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <button
                  onClick={() => setActiveModel('chatgpt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeModel === 'chatgpt'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Bot size={13} />
                  <span>ChatGPT Search</span>
                </button>

                <button
                  onClick={() => setActiveModel('perplexity')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeModel === 'perplexity'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>Perplexity Pro</span>
                </button>

                <button
                  onClick={() => setActiveModel('gemini')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeModel === 'gemini'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Globe size={13} />
                  <span>Google Gemini 1.5</span>
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-700 font-medium">Live Web Ingestion Active</span>
              </div>
            </div>

            {/* PROMPT SELECTOR BAR */}
            <div className="px-5 py-3.5 bg-slate-50/50 border-b border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-slate-400 uppercase tracking-wider text-[11px] mr-2">
                Simulate Buyer Query:
              </span>
              {PROMPTS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePromptIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-all border cursor-pointer ${
                    activePromptIndex === idx
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* CHAT MAIN STAGE */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* USER QUERY MESSAGE */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">
                  U
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 mb-1">
                    Potential Client Query
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                    "{activeData.userQuery}"
                  </div>
                </div>
              </div>

              {/* LIVE AI REASONING / RETRIEVAL TRACE */}
              <div className="ml-11 p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-purple-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw size={12} className="animate-spin text-purple-600" />
                    AI Live Web Retrieval Pipeline
                  </span>
                  <span className="text-[10px] text-purple-600">Model Latency: 0.24s</span>
                </div>
                
                <div className="space-y-1 text-slate-600 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Search size={11} className="text-purple-500" />
                    <span>Query: "{activeData.searchQuery}"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={11} className="text-blue-500" />
                    <span>Scanned {activeData.sourcesScanned} authoritative knowledge entities (Wikidata, Crunchbase, verified reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={11} className="text-emerald-500" />
                    <span>Technical verification: 100/100 Core Web Vitals, Schema.org JSON-LD valid</span>
                  </div>
                </div>
              </div>

              {/* AI SYNTHESIZED RESPONSE WITH VERIFIED CITATION */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-md shadow-purple-500/20">
                  <Sparkles size={16} />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-slate-800">
                      {activeModel === 'chatgpt' ? 'SearchGPT (OpenAI)' : activeModel === 'perplexity' ? 'Perplexity Pro Answer' : 'Google Gemini 1.5 Answer'}
                    </span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {activeData.citationScore}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activeData.aiSynthesis}
                  </p>

                  {/* THE VERIFIED BRAND CARD */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-clash font-bold text-base sm:text-lg text-slate-900">
                          {activeData.companyHighlight}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        Primary Citation
                      </span>
                    </div>

                    <div className="space-y-2">
                      {activeData.strengths.map((str, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{str}</span>
                        </div>
                      ))}
                    </div>

                    {/* SOURCE LINK CHIP (CLICKABLE) */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-slate-500 font-mono text-[11px]">
                        Verified Primary Domain
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold text-xs transition-colors"
                      >
                        <span>{activeData.citationUrl}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* EDUCATIONAL ANNOTATIONS (HOW IT WORKS IN REAL LIFE) */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700 mb-1">
                    📍 GEO in Action
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    AI synthesizes verified entity relationships across public databases, completely ignoring keyword-stuffed spam.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1">
                    ⚡ Schema.org Impact
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Structured semantic metadata allows conversational LLMs to extract your exact pricing and services without hallucination.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    💬 Zero-Click Lead Flow
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    The customer reads the AI recommendation and taps the citation chip directly into WhatsApp or phone consultation.
                  </p>
                </div>
              </div>

            </div>

            {/* WORKBENCH BOTTOM ACTION STRIP */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Permanent AI Citation Equity · Zero Ongoing Pay-Per-Click Ad Costs</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>Optimize Your Brand for ChatGPT</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
