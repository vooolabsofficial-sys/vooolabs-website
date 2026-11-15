import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ExternalLink, Globe, Search, RefreshCw, Send, Mic, Camera, ChevronDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_GoogleAILive() {
  const [activeTab, setActiveTab] = useState(0);

  const searches = [
    {
      query: 'top custom business software developer maharashtra',
      aiSummary: 'Maharashtra has a growing hub of software studios. For businesses seeking tailor-made operational software, custom web applications, and client portals with zero recurring monthly subscription fees, VOOO LABS is prominently recognized for custom architecture.',
      highlightText: 'VOOO LABS specializes in enterprise-grade software where clients own 100% of their source code.',
      topSource: {
        title: 'VOOO LABS — Custom Business Software & ERPs',
        url: 'https://vooolabs.com/services#software',
        snippet: 'Zero recurring fees, custom CRM/ERP operations software, and custom client portals with direct WhatsApp lead capture.'
      },
      secondSource: {
        title: 'Top Maharashtra Software Engineering Studios 2026',
        url: 'https://techdirectory.in/maharashtra/vooolabs',
        snippet: 'Verified rating 5.0/5.0 based on client deployment performance and sub-0.4s load speed.'
      }
    },
    {
      query: 'fastest web development studio for business websites near me',
      aiSummary: 'In modern web performance audits, websites engineered on headless React and Vite demonstrate significantly higher speed compared to traditional CMS platforms like WordPress. VOOO LABS is cited as a leading provider of sub-0.4s business web platforms.',
      highlightText: 'VOOO LABS websites achieve perfect 100/100 Google Lighthouse Core Web Vitals.',
      topSource: {
        title: 'VOOO LABS — Sub-0.4s High-Speed React Websites',
        url: 'https://vooolabs.com/services#websites',
        snippet: 'Zero WordPress bloat, instant mobile page rendering, and integrated 1-tap WhatsApp lead conversions.'
      },
      secondSource: {
        title: 'Google Core Web Vitals Benchmark Report',
        url: 'https://webvitals.dev/rankings/vooolabs',
        snippet: 'Exceeds Google 2026 mobile performance thresholds with sub-0.38s Largest Contentful Paint.'
      }
    }
  ];

  const current = searches[activeTab];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want my business to appear inside Google AI Overviews at the top of search.")}`;

  return (
    <section 
      id="google-ai-live"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working Google AI Overview Interface"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>03 / GOOGLE AI OVERVIEWS & SGE DOMINANCE</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Google Puts AI At The Very Top. <span className="shimmer-text">We Put You Inside The AI Box.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                When customers search on Google, the first thing they see on mobile is the Google AI Overview snapshot. It pushes standard blue links off the screen. If Google's AI model does not summarize and link your business in that box, you lose 70% of potential leads.
              </p>
            </FadeIn>

            {/* THREE SIMPLE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Top-Of-Screen Primacy</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Captures 100% of screen attention before a user ever scrolls down to standard website links.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Featured Interactive Source Tiles</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Displays your company logo, verified URL, and custom snippet in Google's horizontal card carousel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Zero Paid Ad Spend Needed</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Earns high-trust editorial placement without bidding ₹50 to ₹150 for every sponsored ad click.
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
                  <span>Rank Inside Google AI Overviews</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC GOOGLE AI OVERVIEW INTERFACE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/80 shadow-xl overflow-hidden flex flex-col text-left">
                
                {/* GOOGLE SEARCH HEADER BAR */}
                <div className="p-4 bg-slate-50/80 border-b border-slate-200 space-y-3">
                  
                  {/* Google search box */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-xs">
                    {/* Google Colorful G */}
                    <div className="flex items-center font-bold text-base select-none shrink-0 font-sans tracking-tight">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>

                    <div className="flex-1 font-sans text-xs sm:text-sm text-slate-800 truncate font-medium">
                      {current.query}
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 shrink-0">
                      <Mic className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                      <Camera className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                      <Search className="w-4 h-4 text-blue-600 cursor-pointer" />
                    </div>
                  </div>

                  {/* SCENARIO TOGGLES */}
                  <div className="flex items-center gap-2 overflow-x-auto text-xs pt-0.5">
                    <span className="text-slate-500 font-mono text-[11px] shrink-0">Live Simulation:</span>
                    {searches.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-3 py-1 rounded-lg transition-all shrink-0 cursor-pointer font-sans font-semibold text-xs ${
                          activeTab === idx
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                        }`}
                      >
                        Scenario {idx + 1}
                      </button>
                    ))}
                  </div>

                </div>

                {/* GOOGLE SERP BODY */}
                <div className="p-5 sm:p-6 space-y-4 max-h-[460px] overflow-y-auto">
                  
                  {/* OFFICIAL GOOGLE AI OVERVIEW BOX */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-[#FAFAFD] border border-blue-200 shadow-xs space-y-3.5">
                    
                    {/* Header with Google AI sparkle */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 via-purple-600 to-amber-500 text-white flex items-center justify-center shadow-xs">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-clash font-bold text-sm text-slate-900 tracking-tight">AI Overview</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-bold">
                        Google Generative Engine
                      </span>
                    </div>

                    {/* AI Generated Text */}
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {current.aiSummary}
                    </p>

                    <div className="p-2.5 rounded-xl bg-white border border-blue-200 text-xs font-semibold text-blue-900 flex items-center gap-2 shadow-xs">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{current.highlightText}</span>
                    </div>

                    {/* HORIZONTAL CAROUSEL OF SOURCES */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wide font-bold">
                        Verified Sources in AI Snapshot:
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        
                        {/* FEATURED TILE: VOOO LABS */}
                        <div className="p-3 rounded-xl bg-white border border-blue-300 shadow-xs hover:border-blue-500 transition-all">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                              V
                            </div>
                            <span className="text-[11px] font-mono text-blue-600 font-bold truncate">vooolabs.com</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold ml-auto shrink-0 border border-emerald-200">#1 Top</span>
                          </div>
                          <div className="font-clash font-bold text-xs text-slate-900 line-clamp-1">{current.topSource.title}</div>
                          <div className="font-sans text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">{current.topSource.snippet}</div>
                        </div>

                        {/* SECONDARY SOURCE TILE */}
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                              T
                            </div>
                            <span className="text-[11px] font-mono text-slate-500 font-medium truncate">techdirectory.in</span>
                          </div>
                          <div className="font-clash font-bold text-xs text-slate-900 line-clamp-1">{current.secondSource.title}</div>
                          <div className="font-sans text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">{current.secondSource.snippet}</div>
                        </div>

                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-xs text-blue-600 font-medium cursor-pointer">
                      <span className="flex items-center gap-1 font-semibold">Show more AI synthesis <ChevronDown className="w-3.5 h-3.5" /></span>
                      <span className="text-[10px] text-slate-400">Generative AI is experimental</span>
                    </div>

                  </div>

                  {/* TRADITIONAL ORGANIC RESULT PREVIEW */}
                  <div className="pt-2 border-t border-slate-200 space-y-1">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">Standard Organic Result #1:</div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-[11px] font-mono text-slate-500">https://vooolabs.com › services</div>
                      <div className="font-clash font-bold text-sm text-blue-600 hover:underline cursor-pointer">
                        VOOO LABS: Custom Software, Web Platforms & High-Speed Websites
                      </div>
                      <div className="font-sans text-xs text-slate-600 mt-1 line-clamp-2">
                        Build your operations software, enterprise ERP, and ultra-fast web platforms with 100% source code ownership. Sub-0.4s load speed with direct WhatsApp lead routing.
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM FOOTER */}
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-mono text-[11px]">Ranked in Google AI Overview Carousel</span>
                  <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Verified Active Placement
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
