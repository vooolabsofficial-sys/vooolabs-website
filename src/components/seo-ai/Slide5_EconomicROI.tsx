import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Clock, Check } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_EconomicROI() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss the Economic ROI of building a permanent AI search presence for my business.")}`;

  return (
    <section 
      id="economic-roi"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Economic Analysis: Rented Ads vs Permanent Generative AI Equity"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <FadeIn delay={0.05} y={15}>
            <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3">
              05 / ECONOMIC ANALYSIS & RETURN ON ASSET
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15] mb-4">
              Stop Renting Visibility: <span className="shimmer-text">Rented Clicks vs. Permanent Equity.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              Paid Google and Meta ads vanish the exact second your daily budget exhausts. A generative search presence is a permanent business asset that delivers compounding inbound inquiries with ₹0 monthly ad spend.
            </p>
          </FadeIn>
        </div>

        {/* 2-COLUMN FINANCIAL CONTRAST MATRIX */}
        <FadeIn delay={0.25} y={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
            
            {/* CARD 1: PAID GOOGLE & META ADS (RENTED ASSET) */}
            <div className="rounded-3xl bg-[#FAFAFC] border border-rose-200/90 p-6 sm:p-8 text-left shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    Traditional Paid Ads (Google & Meta)
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
                    <span>Traffic stops immediately the second your ad budget runs out.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Bidding wars with competitors push cost-per-click higher every quarter.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>0% business equity — you rent visibility, you never own it.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Asset Status: Ephemeral (Zero Equity)</span>
                <span className="text-rose-600 font-semibold">Budget Dependent</span>
              </div>
            </div>

            {/* CARD 2: VOOO LABS GENERATIVE SEARCH ENGINE (OWNED ASSET) */}
            <div className="rounded-3xl bg-white border border-emerald-300 p-6 sm:p-8 text-left shadow-lg shadow-emerald-500/5 relative overflow-hidden flex flex-col justify-between">
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
                    <span>Compounding organic authority that gets stronger month after month.</span>
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

        {/* ECONOMIC TAKEAWAY BANNER */}
        <FadeIn delay={0.32} y={15}>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>A single upfront investment creates a permanent inbound sales channel that pays for itself.</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <span>Calculate Your ROI Potential</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
