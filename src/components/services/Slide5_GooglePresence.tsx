import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Star, Phone, ArrowRight, MessageSquare, Check, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_GooglePresence() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a project (Custom Software / Web Platform / Local SEO).")}`;
  const phoneCallUrl = `tel:+${COMPANY.whatsapp}`;

  return (
    <section 
      id="google-presence"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Google Business Presence & Local Growth — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

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
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
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
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Google Business Profile (Maps 3-Pack)</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Accurate map pin, verified address, professional photos, operating hours, and 1-tap driving directions for nearby local clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Direct Phone Call & WhatsApp Conversion</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Turn casual searchers into confirmed inquiries. Direct click-to-call buttons eliminate all barriers between customers and your sales team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Permanent Organic Discovery · ₹0 Daily Ads</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Build long-term organic equity. Unlike pay-per-click ads that disappear the moment your budget runs out, optimized local SEO keeps generating leads.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Claim Your Free Local Audit</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Google Guidelines</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: GOOGLE SEARCH MOCKUP */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-md p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] font-mono text-slate-500">google.com/search / local-pack</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Rank #1 Local
                  </span>
                </div>

                {/* Google Maps Top Result Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-xs font-mono font-semibold text-emerald-600">Verified Profile</span>
                      </div>
                      <h4 className="font-clash font-bold text-lg text-slate-900">Your Business Name</h4>
                      <div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold ml-1 text-slate-900">5.0</span>
                        <span className="text-slate-500">(48+ verified reviews)</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2 font-sans flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Near you · Open now · Closes 8 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                    <div className="flex-1 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-2xs">
                      <Phone className="w-3 h-3 text-white" />
                      <span>Call Business</span>
                    </div>
                    <div className="flex-1 py-2 rounded-xl bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-1.5">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>Directions</span>
                    </div>
                  </div>
                </div>

                {/* Local Reach Insights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] font-semibold uppercase text-slate-500 tracking-wider">Search Impressions</div>
                    <div className="text-base font-clash font-bold text-slate-900 mt-0.5">+340%</div>
                    <div className="text-[11px] text-emerald-600 font-medium">30-day organic growth</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] font-semibold uppercase text-slate-500 tracking-wider">Direct Phone Calls</div>
                    <div className="text-base font-clash font-bold text-emerald-600 mt-0.5">High Intent</div>
                    <div className="text-[11px] text-slate-500 font-medium">₹0 per click cost</div>
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
