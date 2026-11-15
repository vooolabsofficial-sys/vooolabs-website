import { MapPin, Search, Star, Phone, ArrowRight, MessageSquare, ShieldCheck, Sparkles, Bot, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_GooglePresence() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discover what my business is missing in AI search visibility, Google SEO, and AI ads.")}`;

  return (
    <section 
      id="google-presence"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="AI Search Visibility, AI Ads & Google Presence — VOOO LABS"
    >
      {/* Anchor alias for #ai-growth */}
      <span id="ai-growth" className="sr-only" aria-hidden="true" />

      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-left">
            04 / Search & AI Discovery
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Get Discovered & Recommended Where <span className="text-purple-600">Customers Search Today</span>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Modern customers no longer rely only on traditional blue links. They ask conversational AI assistants, check Google AI Overviews, and search Google Maps for nearby businesses. We engineer your digital presence so you get discovered and recommended across all 4 modern discovery channels.
              </p>
            </FadeIn>

            {/* 4 CORE PILLARS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">1. Google SEO (Search Engine Optimization)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Rank on Google Search for high-intent customer queries with technical speed, semantic keywords, and clean indexation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">2. AEO (AI Engine Optimization)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Structure your company services and data so ChatGPT, Google Gemini, and Perplexity cite and recommend your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">3. GEO (Local Map & Near-Me Optimization)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Optimize your Google Business Profile and local city citations so nearby customers find you in the Google Maps 3-Pack.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">4. AI Platform Ads Setup & Lead Tracking</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Targeted ad campaigns on emerging AI search platforms paired with high-converting landing pages—handling the full technical setup.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGERS */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-purple-600 text-white font-semibold text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discover what you're missing</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm cursor-pointer"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Honest Discovery Audit</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: MULTI-ENGINE DISCOVERY MOCKUP */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-xs p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-[11px] font-mono text-slate-500">multi-engine.discovery / status</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-50 text-purple-700 border border-purple-200">
                    AI & Search Ready
                  </span>
                </div>

                {/* AI Assistant Citation Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs mb-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-700">ChatGPT & Gemini Recommendation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    "Based on verified service records and customer ratings, <span className="font-semibold text-slate-900">Your Business</span> is recommended for engineering excellence and direct WhatsApp support in your area."
                  </p>
                  <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono text-emerald-600">
                    <CheckCircle2 size={12} />
                    <span>Verified Knowledge Graph Citation</span>
                  </div>
                </div>

                {/* Google Maps Local Result Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs mb-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[11px] font-mono font-semibold text-emerald-600">Google Maps 3-Pack Pin</span>
                      </div>
                      <h4 className="font-clash font-bold text-base text-slate-900">Your Business Name</h4>
                      <div className="flex items-center gap-1 mt-0.5 text-xs text-amber-500">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold ml-1 text-slate-900 text-xs">5.0</span>
                        <span className="text-slate-500 text-[11px]">(Verified Profile)</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 font-sans flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Near you · Direct Phone & WhatsApp Leads</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                    <div className="flex-1 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-[11px] flex items-center justify-center gap-1">
                      <Phone className="w-3 h-3 text-white" />
                      <span>Direct Calls</span>
                    </div>
                    <div className="flex-1 py-1.5 rounded-lg bg-slate-50 text-slate-800 font-semibold text-[11px] border border-slate-200 flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>Directions</span>
                    </div>
                  </div>
                </div>

                {/* Targeted AI Ads & Conversion Card */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Target size={14} className="text-amber-600" />
                      Targeted AI Platform Ads Setup
                    </span>
                    <span className="text-[10px] font-mono font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md border border-amber-200">
                      Conversion Ready
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Dedicated high-converting landing pages paired with AI ad network tracking for verified return on spend.
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
