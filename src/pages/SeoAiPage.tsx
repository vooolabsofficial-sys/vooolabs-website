import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bot, MapPin, CheckCircle2, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';

export default function SeoAiPage() {
  const pillars = [
    {
      badge: 'LAYER 01',
      title: 'Google Search (SEO)',
      tagline: 'Page 1 organic rankings on Google for high-intent customer keywords.',
      description: 'When people in your city or industry search for what you offer, your website should be the first result they click. We build lightning-fast pages with structured meta tags and schema markup so Google ranks your business organically.',
      deliverables: [
        'Targeted local & national keyword optimization',
        'Sub-second page speeds (100/100 Core Web Vitals score)',
        'Structured schema.org markup for rich Google search snippets',
        'Clean technical architecture and automated XML sitemaps',
      ],
      icon: Search,
      accent: '#3B82F6',
    },
    {
      badge: 'LAYER 02',
      title: 'AI Engine Optimization (AEO)',
      tagline: 'Get recommended by ChatGPT, Perplexity, Gemini, and Claude.',
      description: 'Millions of modern customers now ask AI engines: "Who are the top providers in this industry?" We structure your digital profile with clear entity data so AI models cite and recommend your brand as a verified industry authority.',
      deliverables: [
        'Brand entity structuring across trusted knowledge bases',
        'Conversational query optimization for AI chatbots',
        'Direct answer snippets formatted for AI extraction',
        'Zero reliance on temporary paid advertising',
      ],
      icon: Bot,
      accent: '#8B5CF6',
    },
    {
      badge: 'LAYER 03',
      title: 'Google Maps & Local GEO Ranking',
      tagline: 'Capture nearby clients searching on Google Maps and mobile search.',
      description: 'Local customers want nearby trusted businesses. We optimize your Google Business Profile, Google Maps pin, operating hours, and customer review systems so nearby clients discover your location instantly.',
      deliverables: [
        'Google Business Profile setup and category optimization',
        'Google Maps pin ranking for high-intent local searches',
        'Review collection strategy to build high social trust',
        '1-tap direct phone call and navigation routing',
      ],
      icon: MapPin,
      accent: '#10B981',
    },
  ];

  return (
    <div className="page-wrap bg-[#FAFAFC] pt-32 sm:pt-36 pb-24 px-6 select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeIn delay={0} y={15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 mb-4 text-purple-700 font-sans font-semibold text-xs tracking-wider uppercase">
              <Sparkles size={13} />
              <span>Search Engine & AI Discovery</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-tight mb-4">
              Get Found on Google, <br className="hidden sm:inline" />
              <span className="shimmer-text">Maps & AI Search Engines.</span>
            </h1>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              We help potential customers discover your business across Google Search, Google Maps, ChatGPT, Perplexity, and Apple Maps without wasting money on expensive ads.
            </p>
          </FadeIn>
        </div>

        {/* 3 PILLARS CARDS */}
        <div className="space-y-8">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} y={25}>
                <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all text-left relative overflow-hidden">
                  
                  {/* TOP ACCENT */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                    >
                      <IconComp size={24} />
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E] mb-1">
                    {item.title}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-slate-500 mb-4">
                    {item.tagline}
                  </p>
                  <p className="font-sans font-normal text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* DELIVERABLES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-slate-100">
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CTA CARD */}
        <FadeIn delay={0.4} y={20}>
          <div className="mt-16 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-clash font-bold text-2xl text-[#0A0F1E]">
                Want your business to rank on Google & AI?
              </h3>
              <p className="font-sans text-sm text-slate-600 mt-1 max-w-xl">
                Get in touch for a free search discovery review of your existing business and online presence.
              </p>
            </div>
            <Link
              to="/contact?service=seo-ai"
              className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white font-sans font-semibold text-sm px-8 py-3.5 transition-colors shadow-sm flex-shrink-0 inline-flex items-center gap-2"
            >
              <span>Get Free Discovery Review</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
