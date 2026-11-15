import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, ArrowRight, Activity, Terminal, ShieldCheck, Cpu, Code2, Server } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide6_TechnicalLive() {
  const [activeTab, setActiveTab] = useState<'status' | 'schema'>('status');

  const botCrawlers = [
    { name: 'GPTBot (OpenAI SearchGPT)', status: '200 OK', latency: '18ms', state: 'Indexed' },
    { name: 'PerplexityBot (Perplexity Pro)', status: '200 OK', latency: '22ms', state: 'Synthesized' },
    { name: 'Googlebot Smartphone', status: '200 OK', latency: '15ms', state: 'Pass (Green)' },
    { name: 'ClaudeBot (Anthropic)', status: '200 OK', latency: '20ms', state: 'Indexed' }
  ];

  const jsonLdSample = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VOOO LABS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Cloud, Enterprise Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "Custom Software & Web Studio with Zero Recurring SaaS Fees"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "52"
  }
}`;

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to test my website speed and AI bot crawler readiness.")}`;

  return (
    <section 
      id="technical-live"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Technical Bot Crawler and Speed Engine"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span>05 / BOT CRAWLER INGESTION & SUB-0.4S SPEED</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                AI Bots Crawl in Milliseconds. <span className="shimmer-text">Slow Websites Get Skipped.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                OpenAI, Google, and Perplexity crawlers spend fractions of a second reading your web pages. If your site is built on heavy templates that take 3+ seconds to load, AI engines abandon it. We build clean, lightweight React code that serves structured answers in under 0.4 seconds.
              </p>
            </FadeIn>

            {/* THREE SIMPLE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">100/100 Google Lighthouse Speed</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Instant mobile rendering with sub-0.4s Largest Contentful Paint (LCP) and zero layout shift.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Structured JSON-LD Entity Schema</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Embeds machine-readable data so AI bots understand your exact services, pricing, and ratings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Zero Plugin Bloat & Vulnerabilities</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Modern React architecture eliminates fragile third-party plugins that break or slow down servers.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Audit My Website Speed on WhatsApp</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC TECHNICAL SPEED & BOT INSPECTOR */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/80 shadow-xl overflow-hidden flex flex-col text-left">
                
                {/* INSPECTOR HEADER */}
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-4 w-px bg-slate-200 mx-1" />
                    <span className="text-xs font-mono font-semibold text-purple-700 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>AI Ingestion & Core Web Vitals Engine</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono text-emerald-700 font-bold">Live 200 OK</span>
                  </div>
                </div>

                {/* LIGHTHOUSE SCORE METRICS BAR */}
                <div className="p-4 bg-slate-50/50 border-b border-slate-200 grid grid-cols-3 gap-3">
                  
                  {/* METRIC 1: LIGHTHOUSE SCORE */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                    <div className="w-11 h-11 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-clash font-bold text-sm shrink-0 shadow-xs">
                      100
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Lighthouse</div>
                      <div className="text-xs font-bold text-slate-900">Performance</div>
                    </div>
                  </div>

                  {/* METRIC 2: REAL MOBILE LCP */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Mobile LCP</div>
                    <div className="text-base font-clash font-bold text-emerald-600">0.34s</div>
                    <div className="text-[9px] text-slate-500 font-mono">Google Limit: 2.5s</div>
                  </div>

                  {/* METRIC 3: ZERO CLS */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Layout Shift</div>
                    <div className="text-base font-clash font-bold text-emerald-600">0.000</div>
                    <div className="text-[9px] text-slate-500 font-mono">Perfect Stability</div>
                  </div>

                </div>

                {/* TABS (BOT CRAWLERS vs JSON-LD SCHEMA) */}
                <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                      activeTab === 'status'
                        ? 'bg-purple-100 text-purple-800 border border-purple-300 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Bot Crawler Ingestion Status
                  </button>
                  <button
                    onClick={() => setActiveTab('schema')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                      activeTab === 'schema'
                        ? 'bg-purple-100 text-purple-800 border border-purple-300 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    JSON-LD Schema Preview
                  </button>
                </div>

                {/* BODY CONTENT */}
                <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto font-mono text-xs">
                  
                  {activeTab === 'status' ? (
                    <div className="space-y-2.5">
                      <div className="text-[11px] text-slate-500 flex items-center justify-between pb-1 border-b border-slate-200">
                        <span>AI Engine / Crawler User-Agent</span>
                        <span>HTTP / Latency / Index</span>
                      </div>

                      {botCrawlers.map((bot, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#FAFAFD] border border-slate-200 flex items-center justify-between hover:border-slate-300 transition-colors shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <Server className="w-4 h-4 text-purple-600 shrink-0" />
                            <span className="text-slate-900 font-medium">{bot.name}</span>
                          </div>

                          <div className="flex items-center gap-3 text-[11px]">
                            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {bot.status}
                            </span>
                            <span className="text-slate-500">{bot.latency}</span>
                            <span className="text-purple-700 font-sans font-semibold text-[10px] bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              {bot.state}
                            </span>
                          </div>
                        </div>
                      ))}

                      <div className="mt-4 p-3 rounded-xl bg-purple-50 border border-purple-200 text-slate-700 font-sans text-xs flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>All AI user-agents granted clean access in <code>robots.txt</code> without rate-limit errors.</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[11px] text-slate-600 mb-2 flex items-center gap-1.5 font-bold">
                        <Code2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>Semantic Machine Knowledge Entity (Injected in HTML &lt;head&gt;):</span>
                      </div>
                      <pre className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-[11px] text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
                        {jsonLdSample}
                      </pre>
                    </div>
                  )}

                </div>

                {/* BOTTOM INSPECTOR FOOTER */}
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between font-mono">
                  <span>Engine: Pure Vite + React + Edge CDN</span>
                  <span className="text-emerald-700 font-bold">Global TTFB &lt; 50ms</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
