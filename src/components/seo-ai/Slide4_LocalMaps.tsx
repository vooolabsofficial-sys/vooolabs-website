import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Star, Phone, Search, Navigation } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_LocalMaps() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss Local GEO and Google Maps 3-Pack ranking for my business.")}`;

  return (
    <section 
      id="local-maps"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Local GEO & Google Maps 3-Pack — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3 text-left">
            03 / Local GEO · Spatial Search & Proximity
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Dominate Local Search & Inbound Calls on <span className="shimmer-text">Google Maps.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                When nearby customers search for what you offer on Google Maps, Siri, or mobile search, ensure your business stands out #1. We optimize your local footprint so nearby clients call and visit without spending a rupee on daily ads.
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
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Google Maps Local 3-Pack Dominance</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Securing top 3 placement when local customers search "near me" or specific city services on mobile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Direct Customer Calls & Driving Directions</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      High-intent buyers connect with your team directly via 1-tap calling or open GPS driving directions to your location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Automated 5-Star Review Funnels</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Systematic customer review collection workflows that build unshakeable 5-star reputation and Google local authority.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGER */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dominate Google Maps</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Google Business Profile</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: AUTHENTIC GOOGLE MAPS 3-PACK CARD (LIGHT STUDIO AESTHETIC) */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Search Simulation Header */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Search size={15} className="text-slate-400" />
                    <span>"best software company near me" (Google Maps)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Google Maps Local Card */}
                <div className="bg-[#FAFAFC] rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3.5">
                  
                  {/* Top Business Name & Rank Badge */}
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
                        <span className="text-slate-500">(120+ Verified Reviews)</span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Rank #1 Local 3-Pack
                    </span>
                  </div>

                  {/* Proximity & Business Hours */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">Open</span>
                      <span className="text-slate-400">·</span>
                      <span>Closes 8:00 PM</span>
                      <span className="text-slate-400">·</span>
                      <span>High Inbound Call Volume</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin size={13} className="text-slate-400" />
                      <span>Verified Google Maps Street Coordinates</span>
                    </div>
                  </div>

                  {/* 3 Real Google Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/80">
                    <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-center flex flex-col items-center justify-center gap-1">
                      <Phone size={14} className="text-blue-600" />
                      <span className="text-[11px] font-bold text-blue-700">Call Now</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center gap-1">
                      <Navigation size={14} className="text-slate-700" />
                      <span className="text-[11px] font-bold text-slate-800">Directions</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center gap-1">
                      <Search size={14} className="text-slate-700" />
                      <span className="text-[11px] font-bold text-slate-800">Website</span>
                    </div>
                  </div>

                </div>

                {/* Footer Notes */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 size={13} />
                    Active Local 3-Pack Pin
                  </span>
                  <span>₹0 Ongoing Ad Fees</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
