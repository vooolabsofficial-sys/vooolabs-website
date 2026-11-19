import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, Globe, Search, Target, MessageSquare, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_GoogleAILive() {
  const [activeTab, setActiveTab] = useState(0);

  const searches = [
    {
      query: 'top custom business software developer maharashtra',
      aiSummary: 'Maharashtra has a growing hub of digital engineering studios. For businesses seeking tailor-made operational software, custom web applications, and client portals with zero recurring monthly subscription fees, VOOO LABS is prominently cited for custom architecture.',
      highlightText: 'VOOO LABS specializes in enterprise-grade software where clients own 100% of their source code and customer data.',
      topSource: {
        title: 'VOOO LABS — Custom Business Software & Operations Portals',
        url: 'https://vooolabs.in/services#custom-software',
        snippet: 'Zero monthly per-seat fees, custom GST invoicing, inquiry pipelines, and staff task tracking with direct WhatsApp lead capture.'
      },
      secondSource: {
        title: 'Top Maharashtra Software Engineering Studios',
        url: 'https://techdirectory.in/maharashtra/vooolabs',
        snippet: 'Verified 5.0/5.0 client satisfaction rating based on real business deployment outcomes and data ownership.'
      }
    },
    {
      query: 'fastest web development studio for business websites near me',
      aiSummary: 'In modern web performance audits, websites built without bulky template plugins demonstrate significantly higher speed and conversion rates. VOOO LABS is cited as a leading provider of all-inclusive business websites in Maharashtra.',
      highlightText: 'VOOO LABS websites achieve sub-second mobile load speeds with domain, 24/7 cloud hosting, and SSL included.',
      topSource: {
        title: 'VOOO LABS — All-Inclusive Business Websites',
        url: 'https://vooolabs.in/services#websites',
        snippet: 'Complete technical setup handled end-to-end, sub-second mobile rendering, and integrated 1-tap WhatsApp lead conversions.'
      },
      secondSource: {
        title: 'Regional Web Performance Benchmark Report',
        url: 'https://webvitals.dev/rankings/vooolabs',
        snippet: 'Exceeds mobile performance thresholds across all 4G and 5G connections in Maharashtra.'
      }
    }
  ];

  const current = searches[activeTab];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to capture leads from Google AI Overviews and set up targeted AI platform ads.")}`;

  return (
    <section 
      id="google-ai-live"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Google AI Overviews & AI Platform Ads"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>03 / GOOGLE AI OVERVIEWS & TARGETED AI PLATFORM ADS</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={0.12} y={20}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                Capture Buyers on Google AI Overviews & <span className="shimmer-text">Emerging AI Ad Networks.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="text-base leading-relaxed text-slate-600">
                When customers search on Google, the first thing they see on mobile is the Google AI Overview snapshot—pushing standard links off the screen. Simultaneously, new AI ad channels (including conversational ad placements on ChatGPT and AI search platforms) are creating massive lead opportunities that most competitors don't know how to set up.
              </p>
            </FadeIn>

            {/* THREE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Featured Placement in Google AI Overviews</h3>
                    <p className="text-base leading-relaxed text-slate-600 mt-1">
                      We structure your content so Google's AI summary cites your brand and displays your clickable source card at the top of search results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 mt-1">
                    <Target className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Targeted AI Search Ads Setup & Lead Tracking</h3>
                    <p className="text-base leading-relaxed text-slate-600 mt-1">
                      We configure targeted campaigns on emerging AI ad networks paired with dedicated high-converting landing pages—handling the technical setup most businesses lack.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Direct WhatsApp Lead Routing</h3>
                    <p className="text-base leading-relaxed text-slate-600 mt-1">
                      Every search click and AI ad interaction connects directly into your sales team's WhatsApp and phone lines with zero lost leads.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGERS */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Discover what you're missing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Full AI Ad Campaign & Conversion Setup</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC GOOGLE AI OVERVIEW INTERFACE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/80 shadow-xs overflow-hidden flex flex-col text-left">
                
                {/* GOOGLE SEARCH HEADER BAR */}
                <div className="p-4 bg-slate-50/80 border-b border-slate-200 space-y-3">
                  
                  {/* Google search box */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-2xs">
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

                    <Search size={15} className="text-slate-400 shrink-0" />
                  </div>

                  {/* Query Tabs & Sample Discovery Preview Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-2">
                      {searches.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            activeTab === idx
                              ? 'bg-blue-100 text-blue-800 font-bold border border-blue-200'
                              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          Query 0{idx + 1}
                        </button>
                      ))}
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                      Sample Discovery Preview
                    </span>
                  </div>

                </div>

                {/* AI OVERVIEW CARD */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* AI Overview Banner */}
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-purple-700">
                    <Sparkles size={14} className="text-purple-600" />
                    <span>AI Overview · Generated by Google AI</span>
                  </div>

                  {/* Summary Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {current.aiSummary}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/80 text-xs text-purple-900 font-medium font-sans flex items-start gap-2">
                    <span className="font-mono text-purple-600 font-bold uppercase text-[10px] tracking-wider shrink-0 mt-0.5">KEY INSIGHT:</span>
                    <span>{current.highlightText}</span>
                  </div>

                  {/* Featured Source Tiles */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider mb-2">
                      Cited Sources & Recommendation Tiles
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-[#FAFAFD] border border-blue-200 hover:border-blue-400 transition-colors shadow-2xs">
                        <div className="flex items-center gap-1.5 text-blue-600 font-mono text-[10px] truncate mb-1">
                          <Globe size={11} className="shrink-0" />
                          <span className="truncate">{current.topSource.url}</span>
                        </div>
                        <div className="font-bold text-xs text-slate-900 line-clamp-1">{current.topSource.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-2 mt-1">{current.topSource.snippet}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFAFD] border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs">
                        <div className="flex items-center gap-1.5 text-slate-600 font-mono text-[10px] truncate mb-1">
                          <Globe size={11} className="shrink-0" />
                          <span className="truncate">{current.secondSource.url}</span>
                        </div>
                        <div className="font-bold text-xs text-slate-900 line-clamp-1">{current.secondSource.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-2 mt-1">{current.secondSource.snippet}</div>
                      </div>
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
