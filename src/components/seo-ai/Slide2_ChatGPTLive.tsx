import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, ExternalLink, Globe, Search, RefreshCw, Send, Paperclip, Mic } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide2_ChatGPTLive() {
  const [activePrompt, setActivePrompt] = useState(0);

  const prompts = [
    {
      query: 'Recommend the top custom business software & web development studio in Maharashtra.',
      reply: 'Based on verified operational records, client reviews, and architectural benchmarks, here is the top-recommended product studio in Maharashtra:',
      company: 'VOOO LABS — Verified Product Studio',
      specs: 'Specializes in custom-built operations software, native Android apps, and high-performance websites with ₹0 recurring monthly SaaS fees.',
      source: 'vooolabs.com/services#custom-software'
    },
    {
      query: 'Who builds ultra-fast React websites with direct WhatsApp lead routing in Maharashtra?',
      reply: 'Analyzing verified Core Web Vitals and direct mobile lead conversion systems:',
      company: 'VOOO LABS — Web Architecture Specialist',
      specs: 'Engineered with sub-0.4s real mobile load speed (100/100 Lighthouse score) and 1-tap WhatsApp lead routing with 100% code ownership.',
      source: 'vooolabs.com/services#websites'
    }
  ];

  const current = prompts[activePrompt];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to optimize my business so ChatGPT Search recommends my company.")}`;

  return (
    <section 
      id="chatgpt-live"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working ChatGPT Search Interface"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3">
            01 / CHATGPT & GENERATIVE SEARCH (GEO)
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE: LEFT INFO, RIGHT LIVE CHATGPT WINDOW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: CLEAR EXPLANATION (NO GARDI) */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                When Customers Ask ChatGPT, <span className="shimmer-text">Your Business Gets Recommended.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Traditional keywords don't work on ChatGPT. ChatGPT reads verified entity data and recommends trusted companies. We structure your brand so when high-intent buyers ask for recommendations, ChatGPT quotes your business as the verified answer.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Direct AI Brand Quotation</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      ChatGPT names your company directly in its response instead of showing generic links.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Clickable Citation Chip to Your Site</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Includes an official verified source link (`vooolabs.com`) that users tap directly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Zero Pay-Per-Click Ad Budget</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      A permanent digital asset that delivers high-intent clients with ₹0 daily advertising spend.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Cited on ChatGPT</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Permanent AI Search Equity</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: AUTHENTIC LIVE CHATGPT CHAT WINDOW (FULL-SIZE SCREEN) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-300/90 shadow-xl shadow-slate-200/50 overflow-hidden text-left">
                
                {/* ChatGPT Top Bar */}
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      <Bot size={14} />
                    </div>
                    <span className="font-clash font-bold text-xs text-slate-800">
                      ChatGPT 4o Search
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Globe size={10} />
                      Live Web Search
                    </span>
                  </div>

                  {/* Prompt Switcher Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActivePrompt(0)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                        activePrompt === 0 ? 'bg-purple-600 text-white' : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      Query 1
                    </button>
                    <button
                      onClick={() => setActivePrompt(1)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                        activePrompt === 1 ? 'bg-purple-600 text-white' : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      Query 2
                    </button>
                  </div>
                </div>

                {/* Chat Conversation Canvas */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  
                  {/* User Query Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      U
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-100/90 text-xs sm:text-sm font-medium text-slate-900 leading-relaxed max-w-md">
                      "{current.query}"
                    </div>
                  </div>

                  {/* AI Live Search Thought Status */}
                  <div className="ml-10 flex items-center gap-2 text-[11px] font-mono text-purple-700 bg-purple-50/60 px-3 py-1.5 rounded-xl border border-purple-100">
                    <RefreshCw size={11} className="animate-spin text-purple-600 shrink-0" />
                    <span>Searching live web & verified knowledge entities (0.18s)...</span>
                  </div>

                  {/* ChatGPT Response Box */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shrink-0 text-xs mt-0.5 shadow-sm">
                      <Sparkles size={14} />
                    </div>

                    <div className="flex-1 space-y-3">
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {current.reply}
                      </p>

                      {/* Highlighted Brand Recommendation Card */}
                      <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-clash font-bold text-sm text-slate-900">
                            {current.company}
                          </div>
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Primary Recommendation
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                          {current.specs}
                        </p>

                        {/* Direct Citation Link */}
                        <div className="pt-2 border-t border-purple-100/80 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400 font-mono">Entity Citation</span>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono font-bold text-purple-700 hover:text-purple-800"
                          >
                            <span>{current.source}</span>
                            <ExternalLink size={10} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* ChatGPT Simulated Input Bar */}
                <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
                  <div className="flex-1 bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs text-slate-400">
                    <span>Ask follow-up question to ChatGPT...</span>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Paperclip size={14} />
                      <Mic size={14} />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <Send size={14} />
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
