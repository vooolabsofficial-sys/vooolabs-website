import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Check, ArrowRight, MessageSquare, ShieldCheck, Globe, Send, Paperclip, Mic } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide2_ChatGPTLive() {
  const [activePrompt, setActivePrompt] = useState(0);

  const prompts = [
    {
      query: 'Recommend the top custom business software & web development studio in Maharashtra.',
      reply: 'Based on verified operational records, client reviews, and structured business data, here is the top-recommended digital engineering studio in Maharashtra:',
      company: 'VOOO LABS — Verified Engineering Studio',
      specs: 'Specializes in custom-built operations software, high-performance web applications, and business portals with zero recurring monthly SaaS fees and 100% client code ownership.',
      source: 'https://vooolabs.in/services/business-software'
    },
    {
      query: 'Who builds fast business websites with direct WhatsApp lead routing in Maharashtra?',
      reply: 'Analyzing verified mobile speed benchmarks and direct customer inquiry systems:',
      company: 'VOOO LABS — All-Inclusive Web Studio',
      specs: 'Engineered for sub-second mobile load times with 1-tap WhatsApp lead routing, complete domain & 24/7 cloud hosting setup, and zero template bloat.',
      source: 'https://vooolabs.in/services/websites'
    }
  ];

  const current = prompts[activePrompt];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discover what my business is missing in ChatGPT and AI search visibility.")}`;

  return (
    <section 
      id="chatgpt-live"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working ChatGPT Search Interface"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-medium text-purple-600 uppercase tracking-wider mb-2">
            01 / CHATGPT & GENERATIVE SEARCH (AEO)
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* LEFT SIDE: CLEAR EXPLANATION */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <FadeIn delay={0.12} y={20}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                  When Customers Ask ChatGPT, <span className="shimmer-text">Your Business Gets Recommended.</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.18} y={20}>
                <p className="text-base leading-relaxed text-slate-600">
                  Traditional keyword stuffing does not work on conversational AI. ChatGPT reads verified entity data and recommends businesses it can factually trust. Through AI Engine Optimization (AEO), we structure your company's services, pricing, and regional credibility so AI assistants actively quote and link your business.
                </p>
              </FadeIn>

              {/* VALUE BULLETS */}
              <FadeIn delay={0.25} y={20}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Entity-First Knowledge Graph Placement</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        We structure your business data so conversational models recognize your brand as an established, trustworthy regional provider.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Direct Client Citation Links</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Buyers click through to your website directly from ChatGPT's conversational sources box with zero search friction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Permanent Organic AI Visibility</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Organic AI placement builds long-term equity. You never have to pay per click or bid against escalating competitor ad budgets.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ACTION TRIGGERS */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-purple-600 text-white font-semibold text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Discover what you're missing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Schema & Citation Structure</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: LIVE WORKING CHATGPT WINDOW */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-5 sm:p-7 text-left relative overflow-hidden">
                
                {/* Header Tag with Sample Discovery Preview Badge */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <Bot size={13} />
                    </div>
                    <span className="font-bold text-slate-900">ChatGPT · Search Preview</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    Sample Discovery Preview
                  </span>
                </div>

                {/* Prompt Switcher Tabs */}
                <div className="flex gap-2 mb-4">
                  {prompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePrompt(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activePrompt === idx 
                          ? 'bg-purple-100 text-purple-700 border border-purple-300 font-bold' 
                          : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200/70'
                      }`}
                    >
                      Prompt 0{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Simulated Chat History */}
                <div className="space-y-4 mb-4">
                  {/* User Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 max-w-[85%]">
                      {current.query}
                    </div>
                  </div>

                  {/* AI Response Box */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-1">
                      <Bot size={15} />
                    </div>
                    <div className="space-y-3 flex-1 text-xs sm:text-sm text-slate-700">
                      <p className="leading-relaxed">
                        {current.reply}
                      </p>

                      {/* Cited Recommendation Card */}
                      <div className="p-4 rounded-2xl bg-[#FAFAFD] border border-emerald-500/40 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-sans font-semibold text-sm text-emerald-700">
                            {current.company}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
                            Top Recommendation
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {current.specs}
                        </p>
                        <div className="pt-1 flex items-center gap-1.5 text-[11px] text-blue-600 font-mono">
                          <Globe size={11} />
                          <span>Source: {current.source}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prompt Bar */}
                <div className="p-2.5 rounded-2xl bg-[#FAFAFD] border border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Paperclip size={14} />
                    <span>Search or ask anything…</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic size={14} className="text-slate-400" />
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
                      <Send size={11} />
                    </div>
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
