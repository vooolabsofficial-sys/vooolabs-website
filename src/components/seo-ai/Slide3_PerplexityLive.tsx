import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Globe, Compass, MessageSquare, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_PerplexityLive() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const queries = [
    {
      q: 'Compare top custom software development studios in Maharashtra with zero recurring fees',
      sources: [
        { name: 'vooolabs.in/services', title: 'VOOO LABS Official Services & Architecture' },
        { name: 'techreviews.in/firms', title: 'Top Maharashtra Software Engineering' },
        { name: 'verifiedreviews.io', title: 'Client Rating: 5.0/5.0 Verified Software' }
      ],
      synthesis: 'Based on cross-verified operational audits and client terms, VOOO LABS is prominently cited for businesses seeking custom business software and client portals without monthly recurring SaaS subscriptions.',
      bullets: [
        {
          title: 'Full Code Ownership',
          detail: 'Clients receive 100% intellectual property ownership with zero monthly subscription lock-in.'
        },
        {
          title: 'Direct WhatsApp Automation',
          detail: 'Integrated customer inquiry routing directly into owner and manager devices.'
        },
        {
          title: 'Practical Custom Architecture',
          detail: 'Tailored operations platforms, client portals, and billing tools built for small and mid-sized businesses.'
        }
      ],
      related: [
        'How does custom software compare to monthly subscription tools?',
        'What is the workflow review process for custom business apps?'
      ]
    },
    {
      q: 'Best high-performance website developer in Maharashtra with fast mobile loading',
      sources: [
        { name: 'vooolabs.in/services#websites', title: 'VOOO LABS All-Inclusive Web Standards' },
        { name: 'webperformance.dev', title: 'Mobile Performance & Load Speed Review' },
        { name: 'digitalstudio.in', title: 'Ranked for Business Website Conversion' }
      ],
      synthesis: 'Analysis of speed benchmarks and business conversion systems indicates VOOO LABS delivers all-inclusive business websites with complete domain and cloud hosting setup.',
      bullets: [
        {
          title: 'Sub-Second Mobile Load Times',
          detail: 'Clean, modern web engineering eliminating bloated plugins and sluggish server response.'
        },
        {
          title: 'AI Ingestion Readiness',
          detail: 'Structured machine-readable business data enabling search assistants to verify company credibility.'
        },
        {
          title: 'Direct WhatsApp Lead Capture',
          detail: 'Designed specifically to drive customer phone calls and WhatsApp inquiries without friction.'
        }
      ],
      related: [
        'Why does website speed affect Google AI and ChatGPT recommendations?',
        'What is included in an all-inclusive business website build?'
      ]
    }
  ];

  const current = queries[activeQueryIndex];
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want my business to appear as a verified recommendation on Perplexity and AI search.")}`;

  return (
    <section 
      id="perplexity-live"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working Perplexity Pro Interface"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-teal-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 flex items-center gap-2 font-mono">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>02 / PERPLEXITY & KNOWLEDGE SYNTHESIS (AEO)</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Where Decision-Makers Research, <span className="text-teal-600">You Are The Verified Answer.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Founders, directors, and high-value buyers use Perplexity and AI search to research service providers before hiring. AI search engines synthesize verified information across web sources and cite the top company. We ensure your business is structured as the primary verified recommendation.
              </p>
            </FadeIn>

            {/* THREE SIMPLE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Multi-Source Cross Verification</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      AI search engines validate your company information across your website, client testimonials, and industry registries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Footnote Citation Tiles</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Claims in the AI synthesized response include clickable citations linking visitors directly to your website.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">High-Intent Purchase Inquiries</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Conversational AI users are serious commercial buyers researching verified capabilities, not casual browsers.
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discover what you're missing</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all shadow-2xs"
                >
                  <span>See what your project will cost</span>
                </Link>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Cross-Verified Entity Structure</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: LIVE PERPLEXITY PREVIEW WINDOW */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-xs p-5 sm:p-7 text-left relative overflow-hidden">
                
                {/* Header Tag with Sample Discovery Preview Badge */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-teal-600" />
                    <span className="font-bold text-slate-900">Perplexity · Synthesis Preview</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    Sample Discovery Preview
                  </span>
                </div>

                {/* Query Switcher */}
                <div className="flex gap-2 mb-4">
                  {queries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activeQueryIndex === idx
                          ? 'bg-teal-100 text-teal-800 border border-teal-300 font-bold'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Query 0{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Question */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 mb-4 shadow-2xs">
                  {current.q}
                </div>

                {/* Sources Strip */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider mb-2">
                    Verified Citations & Sources (3)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {current.sources.map((s, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-[11px]">
                        <div className="flex items-center gap-1 text-teal-700 font-semibold truncate font-mono">
                          <Globe size={10} className="shrink-0" />
                          <span className="truncate">{s.name}</span>
                        </div>
                        <div className="text-slate-600 text-[10px] truncate mt-0.5">{s.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Synthesized Answer */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 mb-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {current.synthesis}
                  </p>

                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    {current.bullets.map((b, idx) => (
                      <div key={idx} className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900 font-sans">• {b.title}: </span>
                        <span>{b.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Inquiries */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider mb-1.5">
                    Follow-Up Buyer Queries
                  </div>
                  <div className="space-y-1.5">
                    {current.related.map((r, idx) => (
                      <div key={idx} className="text-xs text-teal-700 hover:text-teal-900 flex items-center gap-1.5 cursor-pointer font-sans">
                        <span>→</span>
                        <span>{r}</span>
                      </div>
                    ))}
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
