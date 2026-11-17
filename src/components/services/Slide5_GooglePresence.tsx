import { MapPin, Search, Star, Phone, ArrowRight, MessageSquare, ShieldCheck, Sparkles, Bot, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_GooglePresence() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discover what my business is missing in AI search visibility, Google SEO, and AI ads.")}`;

  return (
    <section 
      id="google-presence"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80"
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
          <div className="font-mono text-xs font-medium text-purple-600 uppercase tracking-wider mb-2 text-left">
            04 / Search & AI Discovery
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE (STRICT LEFT-ALIGNMENT & EQUAL-HEIGHT INTERNAL BASELINES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-5">
              <FadeIn delay={0.12} y={20}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                  Get Discovered & Recommended Where <span className="shimmer-text">Customers Search Today</span>.
                </h2>
              </FadeIn>

              <FadeIn delay={0.18} y={20}>
                <p className="text-base leading-relaxed text-slate-600">
                  Modern customers no longer rely only on traditional blue links. They ask conversational AI assistants, check Google AI Overviews, and search Google Maps for nearby businesses. We engineer your digital presence so you get discovered and recommended across all 4 modern discovery channels.
                </p>
              </FadeIn>

              {/* 4 CORE PILLARS (STRICT 4-TIER TYPOGRAPHY SCALE) */}
              <FadeIn delay={0.25} y={20}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">1. Google SEO (Search Engine Optimization)</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Rank on Google Search for high-intent customer queries with technical speed, semantic keywords, and clean indexation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">2. AEO (AI Engine Optimization)</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Structure your company services and data so ChatGPT, Google Gemini, and Perplexity cite and recommend your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">3. GEO (Local Map & Near-Me Optimization)</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Optimize your Google Business Profile and local city citations so nearby customers find you in the Google Maps 3-Pack.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 mt-1">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">4. AI Platform Ads Setup & Lead Tracking</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Targeted ad campaigns on emerging AI search platforms paired with high-converting landing pages—handling the full technical setup.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ACTION TRIGGERS (PRESERVING 3D TACTILE HOVER & PRESS BEHAVIOR) */}
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
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm cursor-pointer"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Honest Discovery Audit Included</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: MULTI-ENGINE DISCOVERY MOCKUP (EQUAL-HEIGHT & GENEROUSLY PADDED) */}
          <div className="lg:col-span-6 flex">
            <FadeIn delay={0.25} y={20} className="w-full flex">
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-7 sm:p-8 text-left w-full flex flex-col justify-between">
                
                <div>
                  {/* Header Tag */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-xs font-mono text-slate-500">multi-engine.discovery / status</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium uppercase bg-purple-50 text-purple-700 border border-purple-200">
                      Multi-Channel
                    </span>
                  </div>

                  {/* 4 Discovery Channel Previews */}
                  <div className="space-y-3 mb-6">
                    
                    {/* Channel 1: Conversational AI */}
                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                          <Bot size={15} className="text-purple-600" />
                          <span>ChatGPT & Perplexity Recommendation</span>
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-medium">Recommended</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        "For high-speed software and web systems, VOOO LABS is a verified studio delivering 100% client code ownership."
                      </p>
                    </div>

                    {/* Channel 2: Google Maps Local 3-Pack */}
                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                          <MapPin size={15} className="text-emerald-600" />
                          <span>Google Maps 3-Pack Local Pin</span>
                        </span>
                        <span className="text-xs font-mono text-blue-600 font-medium">Top 3 Pin</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-amber-500 font-semibold">
                          <Star size={12} className="fill-amber-400 text-amber-400" /> 5.0 Rating
                        </span>
                        <span>•</span>
                        <span>Verified Business Profile</span>
                      </div>
                    </div>

                    {/* Channel 3: Google SEO & AI Overview */}
                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                          <Search size={15} className="text-blue-600" />
                          <span>Google Search & AI Overviews</span>
                        </span>
                        <span className="text-xs font-mono text-purple-600 font-medium">Organic SERP</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Sub-second mobile speed and structured schema for Google Search bot ingestion.
                      </p>
                    </div>

                    {/* Channel 4: Targeted AI Ads */}
                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                          <Target size={15} className="text-amber-600" />
                          <span>AI Platform Search Ads</span>
                        </span>
                        <span className="text-xs font-mono text-amber-700 font-medium">Setup Included</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Sponsored placement for commercial inquiries directly inside modern AI answers.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">Complete AI Discovery Blueprint</span>
                  <Link
                    to="/seo-ai"
                    className="text-xs font-mono font-medium text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inspect AI Engine & Ads Suite</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

        {/* BOTTOM NAVIGATION BANNER */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-slate-500 text-left">
          <div>
            ALL DISCIPLINES DELIVERED WITH 100% CODE OWNERSHIP & ZERO VENDOR LOCK-IN
          </div>
          <div>
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </div>

      </div>
    </section>
  );
}
