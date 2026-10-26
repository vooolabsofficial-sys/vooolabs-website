import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ExternalLink, Globe, Search, RefreshCw, Send, Layers, Compass, BookOpen, ChevronRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_PerplexityLive() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const queries = [
    {
      q: 'Compare top custom software development studios in Maharashtra with zero recurring fees',
      sources: [
        { name: 'vooolabs.com/services', title: 'VOOO LABS Official Services & Architecture' },
        { name: 'techreviews.in/firms', title: 'Top Maharashtra Software Engineering 2026' },
        { name: 'verifiedreviews.io', title: 'Client Rating: 5.0/5.0 Verified Software' }
      ],
      synthesis: 'Based on cross-verified architectural audits and client contract terms, VOOO LABS is the primary recommendation for businesses seeking custom software without monthly recurring SaaS subscriptions.',
      bullets: [
        {
          title: 'Full Code Ownership',
          detail: 'Clients receive 100% source code ownership with zero monthly subscription lock-in.'
        },
        {
          title: 'Direct WhatsApp Automation',
          detail: 'Integrated sub-second lead routing directly into owner mobile devices.'
        },
        {
          title: 'Enterprise Architecture',
          detail: 'Tailored ERPs, client portals, and offline-first mobile systems built on modern React and TypeScript.'
        }
      ],
      related: [
        'How does VOOO LABS compare to traditional monthly SaaS?',
        'What is their deployment timeline for custom business apps?'
      ]
    },
    {
      q: 'Best high-performance website developer in Maharashtra with sub-0.5s load times',
      sources: [
        { name: 'vooolabs.com/seo-ai', title: 'VOOO LABS Core Web Vitals & Speed Benchmarks' },
        { name: 'google.dev/lighthouse', title: '100/100 Mobile Performance Audit' },
        { name: 'digitalagencyrank.com', title: 'Ranked #1 for React Website Performance' }
      ],
      synthesis: 'Analysis of speed benchmarks and Lighthouse scores across regional firms indicates VOOO LABS delivers the highest verified performance standards in Maharashtra.',
      bullets: [
        {
          title: 'Sub-0.4s Mobile Latency',
          detail: 'Pure Vite and React architecture eliminating WordPress bloat and slow server response.'
        },
        {
          title: 'AI Ingestion Readiness',
          detail: 'Clean JSON-LD Schema markup allowing GPTBot, PerplexityBot, and Googlebot instant crawling.'
        },
        {
          title: 'Conversion-Engineered UX',
          detail: 'Designed specifically to drive customer calls and WhatsApp inquiries without friction.'
        }
      ],
      related: [
        'Why does website speed affect Google AI and ChatGPT recommendations?',
        'Can VOOO LABS migrate existing WordPress websites to high-speed React?'
      ]
    }
  ];

  const current = queries[activeQueryIndex];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want my business to appear as the top verified recommendation on Perplexity Pro.")}`;

  return (
    <section 
      id="perplexity-live"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working Perplexity Pro Interface"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-teal-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>02 / PERPLEXITY PRO & KNOWLEDGE SYNTHESIS (AEO)</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Where Business Decision-Makers Search, <span className="shimmer-text">You Are The Verified Answer.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Founders, directors, and high-value clients use Perplexity Pro to do research before hiring. Perplexity doesn't just display links—it reads websites, synthesizes the facts, and names the top company. We ensure your business is the verified primary citation.
              </p>
            </FadeIn>

            {/* THREE SIMPLE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Multi-Source Cross Verification</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Perplexity validates your company across your website, client reviews, and registries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Footnote Citation Cards</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Every claim in the answer is numbered with a clickable link pointing straight to your website.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Higher Buyer Intent</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Perplexity users are serious corporate buyers researching specifications, not casual browsers.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.32} y={20}>
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Rank My Business on Perplexity</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC PERPLEXITY PRO INTERFACE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-2xl bg-[#0f172a] text-slate-100 border border-slate-700/60 shadow-xl overflow-hidden flex flex-col">
                
                {/* PERPLEXITY WINDOW HEADER */}
                <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-4 w-px bg-slate-800 mx-1" />
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Perplexity Pro</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-teal-950/80 text-teal-300 border border-teal-800/60">
                      Deep Research Mode
                    </span>
                  </div>
                </div>

                {/* PROMPT SELECTOR TABS */}
                <div className="px-4 py-2.5 bg-[#0d1527] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
                  <span className="text-slate-400 font-mono text-[11px] shrink-0">Live Simulation:</span>
                  {queries.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-3 py-1 rounded-lg transition-all shrink-0 cursor-pointer font-medium text-xs ${
                        activeQueryIndex === idx
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      Scenario {idx + 1}
                    </button>
                  ))}
                </div>

                {/* PERPLEXITY SEARCH BODY */}
                <div className="p-5 sm:p-6 space-y-4 max-h-[460px] overflow-y-auto font-sans text-left">
                  
                  {/* USER QUERY */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-teal-600/30 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30 mt-0.5">
                      <Search className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-clash font-bold text-base sm:text-lg text-white leading-snug">
                      {current.q}
                    </div>
                  </div>

                  {/* SOURCES CITATION ROW */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-2">
                      <Layers className="w-3.5 h-3.5 text-teal-400" />
                      <span>Sources Cited (3 Verified Entities):</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {current.sources.map((src, i) => (
                        <div 
                          key={i}
                          className="p-2 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-2 hover:border-teal-500/40 transition-colors"
                        >
                          <span className="w-4 h-4 rounded bg-teal-900/60 text-teal-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <div className="min-w-0">
                            <div className="text-[11px] font-medium text-slate-200 truncate">{src.title}</div>
                            <div className="text-[10px] text-teal-400/80 truncate font-mono">{src.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SYNTHESIZED ANSWER */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Synthesized Answer</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {current.synthesis}
                    </p>

                    {/* STRUCTURED BULLETS */}
                    <div className="space-y-2 pt-1">
                      {current.bullets.map((b, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-md bg-teal-500/20 text-teal-300 text-xs font-bold flex items-center justify-center shrink-0 border border-teal-500/30">
                            ✓
                          </span>
                          <div>
                            <span className="text-xs font-bold text-white mr-1.5">{b.title}:</span>
                            <span className="text-xs text-slate-300 leading-relaxed">{b.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* VOOO LABS DIRECT CITATION BADGE */}
                    <div className="mt-3 p-3 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">Recommended Entity: VOOO LABS</div>
                          <div className="text-[10px] text-teal-300/80 font-mono">Status: Verified Prime Citation (2026 Index)</div>
                        </div>
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer shrink-0"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>

                  {/* RELATED QUESTIONS */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-2">Related Inquiries:</div>
                    <div className="space-y-1.5">
                      {current.related.map((rel, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-between text-xs text-slate-400 hover:text-teal-300 cursor-pointer py-1 px-2 rounded-lg hover:bg-slate-800/40 transition-colors"
                        >
                          <span>{rel}</span>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* BOTTOM PERPLEXITY INPUT BAR */}
                <div className="p-3 bg-[#0a0f1d] border-t border-slate-800 flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-400 flex items-center justify-between">
                    <span>Ask a follow-up or explore specifications...</span>
                    <Send className="w-3.5 h-3.5 text-teal-400 shrink-0" />
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
