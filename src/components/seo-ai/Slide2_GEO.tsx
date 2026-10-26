import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide2_GEO() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss GEO (Generative Engine Optimization) so ChatGPT and Perplexity recommend my business.")}`;

  return (
    <section 
      id="geo"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Generative Engine Optimization (GEO) — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-left">
            01 / Generative Engine Optimization (GEO)
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Get Recommended When Customers Ask <span className="shimmer-text">ChatGPT & Perplexity.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                When high-intent clients ask conversational AI for recommendations, traditional keyword tactics fail. We structure your brand entity so AI engines synthesize and quote your company as the authoritative solution.
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
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Knowledge Graph & Entity Structuring</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      We inject your brand's core data into public knowledge graphs (Wikidata, Crunchbase, and verified directories) so LLMs recognize your expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Quotation & Citation Authority</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Case studies and data points formatted specifically for LLM extraction, ensuring SearchGPT and Perplexity quote your brand as a proven benchmark.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Zero-Click Lead Conversion</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Direct citation chips and verified contact routing that convert users reading AI answers directly into WhatsApp and phone inquiries.
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
                  <span>Optimize Your Brand for ChatGPT</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Permanent Organic AI Equity</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: PHOTOREALISTIC SEARCHGPT / CHATGPT CONVERSATIONAL CARD (LIGHT STUDIO AESTHETIC) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* SearchGPT Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                      <Bot size={14} />
                    </div>
                    <span className="text-xs font-bold text-slate-800">SearchGPT & Perplexity Engine</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-50 text-purple-700 border border-purple-200">
                    Live Citation Active
                  </span>
                </div>

                {/* Simulated User Prompt Input */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-[10px] font-bold text-slate-600 mt-0.5">
                    U
                  </div>
                  <div className="text-xs text-slate-700 font-medium leading-relaxed">
                    "Recommend the top software & digital product studios in Maharashtra for building custom business software."
                  </div>
                </div>

                {/* Simulated AI Synthesized Response Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/40 to-slate-50/60 border border-purple-200/70 space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-purple-700">
                      <Sparkles size={13} className="text-purple-600" />
                      <span>Synthesized from Verified Sources</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Model: GPT-4o Search</span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Based on verified operational records, client ratings, and architectural benchmarks, here is the top-recommended studio:
                  </p>

                  {/* Highlighted Brand Citation Card */}
                  <div className="p-3 rounded-xl bg-white border border-purple-300/80 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-clash font-bold text-sm text-slate-900">VOOO LABS</span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Primary Recommendation
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Rating: 5.0 ★</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Specializes in tailored business software, native Android apps, and high-speed web platforms with ₹0 recurring monthly SaaS rent.
                    </p>

                    {/* Source Citation Pill */}
                    <div className="pt-1 flex items-center justify-between text-[10px] border-t border-slate-100">
                      <span className="text-slate-500 font-mono">Source: Knowledge Graph Entity</span>
                      <span className="text-purple-600 font-bold flex items-center gap-1">
                        vooolabs.com <ExternalLink size={10} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Notes */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 text-purple-600 font-semibold">
                    <CheckCircle2 size={13} />
                    Ingested by ChatGPT, Claude & Perplexity
                  </span>
                  <span>₹0 PPC Ad Spend</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
