import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Star, Phone, ArrowRight, MessageSquare, Check, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_GooglePresence() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a project (Custom Software / Mobile App / Website / Google SEO).")}`;
  const phoneCallUrl = `tel:+${COMPANY.whatsapp}`;

  return (
    <section 
      id="google-presence"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Google Business Presence & Local Growth — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3 text-left">
            04 / Local Discovery & Search Growth
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Get Discovered by <span className="shimmer-text">Local Customers</span> on Google.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                When nearby customers search for what you offer, ensure your business stands out first on Google Maps and Search. We set up, optimize, and rank your digital presence so you get direct customer phone calls without spending a fortune on daily ads.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Google Business Profile (Maps 3-Pack)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Accurate map pin, verified address, professional photos, operating hours, and 1-tap driving directions for nearby local clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Organic Google Search Visibility (SEO)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Optimized so your brand appears when potential buyers search for services in your city or region.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Continuous Inbound Calls with ₹0 Ad Spend</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      A permanent digital footprint that delivers high-intent inbound customer inquiries month after month without draining ad budgets.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: AUTHENTIC GOOGLE BUSINESS & MAP CARD (LIGHT STUDIO AESTHETIC) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Search Simulation Bar */}
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Search size={15} className="text-slate-400" />
                    <span>"best [your service] near me"</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Google Business Profile Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3.5">
                  
                  {/* Top Header & Rating */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-clash font-bold text-lg text-slate-900">Your Business Name</h4>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-100">
                          VERIFIED
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-xs">
                        <div className="flex items-center text-amber-500">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                        </div>
                        <span className="font-bold text-slate-800">5.0</span>
                        <span className="text-slate-500">(120+ Verified Client Reviews)</span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Rank #1 Local
                    </span>
                  </div>

                  {/* Business Details */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">Open</span>
                      <span className="text-slate-400">·</span>
                      <span>Closes 8:00 PM</span>
                      <span className="text-slate-400">·</span>
                      <span>Fast Inquiries Confirmed</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin size={13} className="text-slate-400" />
                      <span>Verified Google Maps Coordinates & Directions</span>
                    </div>
                  </div>

                  {/* 3 Real Google Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-center flex flex-col items-center justify-center gap-1">
                      <Phone size={14} className="text-blue-600" />
                      <span className="text-[11px] font-bold text-blue-700">Call Now</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center justify-center gap-1">
                      <MapPin size={14} className="text-slate-700" />
                      <span className="text-[11px] font-bold text-slate-800">Directions</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center justify-center gap-1">
                      <Search size={14} className="text-slate-700" />
                      <span className="text-[11px] font-bold text-slate-800">Website</span>
                    </div>
                  </div>

                </div>

                {/* Footer Notes */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 size={13} />
                    Google Maps 3-Pack Authority
                  </span>
                  <span>₹0 Ongoing Ad Fees</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════
            PROJECT KICKOFF ACTION (REFINED STUDIO CONTAINER)
            ═══════════════════════════════════════════════ */}
        <FadeIn delay={0.3} y={20}>
          <div className="relative rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-md p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden">
            
            {/* Top Brand Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />

            <div className="max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/80">
                <Sparkles size={13} />
                <span>Ready to Build or Scale?</span>
              </div>

              <h3 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0F1E] tracking-tight">
                Let's Build the Exact Digital System Your Business Deserves.
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                Tell us your requirement — whether it's custom software, a native mobile app, a high-converting website, or local Google presence. We'll provide a clear architecture, timeline, and exact quote within 2 hours.
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
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowRight size={14} className="ml-0.5" />
                </a>

                <a
                  href={phoneCallUrl}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Phone size={15} className="text-blue-600" />
                  <span>Call +91 76202 36178</span>
                </a>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  100% IP & Code Ownership
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check size={14} className="text-blue-600" />
                  ₹0 Hidden Monthly Fees
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check size={14} className="text-purple-600" />
                  Direct Architect Communication
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
