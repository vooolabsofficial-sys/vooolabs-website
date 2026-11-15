import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Check, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide6_TechnicalLive() {
  const [activeTab, setActiveTab] = useState<'status' | 'structure'>('status');

  const botCrawlers = [
    { name: 'OpenAI (ChatGPT & SearchGPT)', status: 'Verified', latency: 'Fast', state: 'Recommended' },
    { name: 'Google (Search & AI Overviews)', status: 'Verified', latency: 'Fast', state: 'Top Indexed' },
    { name: 'Perplexity (Research Synthesis)', status: 'Verified', latency: 'Fast', state: 'Cited Source' },
    { name: 'Anthropic (Claude Assistant)', status: 'Verified', latency: 'Fast', state: 'Indexed' }
  ];

  const businessPillars = [
    {
      title: 'Verified Business Profile Structure',
      description: 'Clean organization of company legal name, operating hubs, service catalog, and contact points so search engines never confuse your identity.'
    },
    {
      title: 'Clear Service & Pricing Answers for AI Assistants',
      description: 'Direct answers to client questions formatted so conversational AI engines understand your capabilities, service areas, and value proposition.'
    },
    {
      title: 'Fast Mobile Loading & Local City Signals',
      description: 'Sub-second mobile rendering across Maharashtra networks paired with regional city tags that anchor your local market dominance.'
    },
    {
      title: 'Machine-Readable Company Verification',
      description: 'Structured business data that gives AI engines 100% confidence to cite and recommend your business over unverified competitors.'
    }
  ];

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to audit my website speed and AI search readiness.")}`;

  return (
    <section 
      id="technical-live"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Technical Verification and AI Readiness"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 flex items-center gap-2 font-mono">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span>05 / AI ENGINE INGESTION & SUB-SECOND SPEED</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                AI Crawlers Read in Milliseconds. <span className="text-purple-600">Slow Websites Get Skipped.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                OpenAI, Google, and Perplexity crawlers spend fractions of a second reading your web pages. If your site is built on heavy, bloated templates that take seconds to respond, AI engines skip it. We engineer clean, ultra-fast websites that serve structured answers in sub-seconds.
              </p>
            </FadeIn>

            {/* THREE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Sub-Second Mobile Load Times</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Instant mobile page rendering across 4G and 5G networks, eliminating visitor bounce and search crawler timeouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Verified Business Profile Structure</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Embeds machine-readable data so AI bots understand your exact services, service hubs, and client ratings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Zero Fragile Plugin Bloat</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Bespoke software architecture completely eliminates fragile third-party plugins that break, get hacked, or slow down servers.
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
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Honest Speed & Verification Standards</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: BUSINESS STRUCTURE & CRAWLER STATUS */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/80 shadow-xs overflow-hidden flex flex-col text-left">
                
                {/* INSPECTOR HEADER */}
                <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-purple-600" />
                      <span>AI Engine Ingestion & Readiness Status</span>
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                    Sample Discovery Preview
                  </span>
                </div>

                {/* TABS */}
                <div className="flex border-b border-slate-200 bg-[#FAFAFD] px-4 pt-2">
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-4 py-2 font-mono text-xs font-bold transition-all border-b-2 cursor-pointer ${
                      activeTab === 'status'
                        ? 'border-purple-600 text-purple-700 bg-white rounded-t-lg'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    AI Engine Index Status
                  </button>
                  <button
                    onClick={() => setActiveTab('structure')}
                    className={`px-4 py-2 font-mono text-xs font-bold transition-all border-b-2 cursor-pointer ${
                      activeTab === 'structure'
                        ? 'border-purple-600 text-purple-700 bg-white rounded-t-lg'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Business Profile Structure
                  </button>
                </div>

                {/* TAB CONTENT */}
                <div className="p-5 sm:p-6">
                  {activeTab === 'status' ? (
                    <div className="space-y-3">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">
                        Verified Crawler Ingestion Checklist
                      </div>
                      
                      {botCrawlers.map((bot, idx) => (
                        <div key={idx} className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200 flex items-center justify-between shadow-2xs">
                          <div>
                            <div className="font-bold text-xs text-slate-900 font-sans">{bot.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono mt-0.5">Response: {bot.latency} · Fast Delivery</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                              <CheckCircle2 size={11} />
                              {bot.state}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">
                        Behind-The-Scenes Setup (Plain English)
                      </div>

                      {businessPillars.map((pillar, idx) => (
                        <div key={idx} className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200 shadow-2xs">
                          <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5 font-sans">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                            <span>{pillar.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-sans">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
