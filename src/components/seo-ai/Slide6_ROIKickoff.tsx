import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare, Phone, ShieldCheck, Check, TrendingUp, DollarSign, CheckCircle2, Clock } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide6_ROIKickoff() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to claim a Free 2026 AI Search & SEO Audit for my business website.")}`;
  const phoneCallUrl = `tel:+${COMPANY.whatsapp}`;

  return (
    <section 
      id="roi-kickoff"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-between relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Economic ROI Comparison & Free AI Audit — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3 text-left">
            05 / Economic ROI & Project Kickoff
          </div>
        </FadeIn>

        {/* SECTION HEADING */}
        <div className="max-w-3xl text-left mb-12 sm:mb-14">
          <FadeIn delay={0.12} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15] mb-4">
              Stop Renting Visibility: <span className="shimmer-text">The Economic Reality.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              Paid Google and Meta ads vanish the exact second your daily budget exhausts. A generative search presence is a permanent business asset that delivers compounding inbound inquiries with ₹0 monthly ad spend.
            </p>
          </FadeIn>
        </div>

        {/* FINANCIAL CONTRAST MATRIX (CLEAN, SOPHISTICATED 2-COLUMN COMPARISON) */}
        <FadeIn delay={0.25} y={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            
            {/* CARD 1: PAID GOOGLE & META ADS (RENTED ASSET) */}
            <div className="rounded-3xl bg-white border border-rose-200/80 p-6 sm:p-8 text-left shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    Traditional Paid Ads
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    Rented Visibility
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Monthly Cost</div>
                  <div className="text-2xl font-clash font-bold text-slate-900">₹30,000 – ₹1,00,000 / mo</div>
                </div>

                <div className="space-y-3 pt-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Traffic stops immediately the second your ad spend ends.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Bidding wars with competitors push costs higher every quarter.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>0% business equity — you rent visibility, you never own it.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Asset Status: Ephemeral (Zero Equity)
              </div>
            </div>

            {/* CARD 2: VOOO LABS GENERATIVE SEARCH ENGINE (OWNED ASSET) */}
            <div className="rounded-3xl bg-white border border-emerald-300 p-6 sm:p-8 text-left shadow-md shadow-emerald-500/5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    VOOO LABS Search & AI Engine
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    100% Owned Equity
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Ongoing Monthly Ad Spend</div>
                  <div className="text-2xl font-clash font-bold text-emerald-600">₹0 / Month (Permanent)</div>
                </div>

                <div className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Continuous inbound calls from Google Maps, ChatGPT & Google AI.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Compounding organic authority that gets stronger over time.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>100% owned digital equity that belongs permanently to your company.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-semibold flex items-center justify-between">
                <span>Asset Status: Permanent Asset</span>
                <span>Compounding ROI</span>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* ═══════════════════════════════════════════════
            STUDIO ACTION KICKOFF CONTAINER (FREE AI AUDIT)
            ═══════════════════════════════════════════════ */}
        <FadeIn delay={0.3} y={20}>
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden">
            
            {/* Top Brand Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500" />

            <div className="max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200/80">
                <Sparkles size={13} />
                <span>Claim Your Free 2026 AI Search & SEO Audit</span>
              </div>

              <h3 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0F1E] tracking-tight">
                Find Out Where Your Business Ranks on ChatGPT & Google AI.
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                Send us your website URL or business name. We'll run a complete diagnostic scan on how your brand currently appears across ChatGPT, Google AI Overviews, and Google Maps within 2 hours.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Claim Free AI Audit on WhatsApp</span>
                  <ArrowRight size={14} className="ml-0.5" />
                </a>

                <a
                  href={phoneCallUrl}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold text-sm border border-slate-200 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Phone size={15} className="text-blue-600" />
                  <span>Call +91 76202 36178</span>
                </a>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  100% Free Diagnostic Scan
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock size={14} className="text-blue-600" />
                  Report Ready in 2 Hours
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check size={14} className="text-purple-600" />
                  Direct Architect Review
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
