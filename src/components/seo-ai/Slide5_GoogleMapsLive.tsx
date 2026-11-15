import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Star, Phone, ArrowRight, MessageSquare, Check, ShieldCheck, Clock, Navigation, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide5_GoogleMapsLive() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to rank my business on Google Maps in the top 3-pack.")}`;

  return (
    <section 
      id="google-maps-live"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Live Working Google Maps 3-Pack Interface"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>04 / GOOGLE MAPS 3-PACK & LOCAL CITATION ACCURACY</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                When High-Value Clients Search 'Near Me', <span className="shimmer-text">You Own The Top Map Pin.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Local buyers, founders, and regional enterprises rely on Google Maps to find established software studios and trusted businesses nearby. We optimize your Google Business Profile entity data, local schema, and review signals so you consistently rank in the coveted #1 Google Maps 3-Pack.
              </p>
            </FadeIn>

            {/* THREE SIMPLE BENEFIT BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Direct 1-Tap Mobile Actions</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Customers immediately tap `[Call]`, `[Directions]`, or `[WhatsApp]` straight from the map card.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Voice Search Dominance</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Siri and Google Assistant read your verified business profile when drivers speak voice queries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Verified 5.0 Star Social Proof</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Structured review collection turns happy clients into continuous organic business magnets.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.32} y={20}>
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Rank My Business on Google Maps</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC GOOGLE MAPS 3-PACK INTERFACE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] text-slate-900 border border-slate-200/80 shadow-xl overflow-hidden flex flex-col text-left">
                
                {/* MAP HEADER CONTAINER WITH MAP VIEWPORT */}
                <div className="relative h-44 sm:h-48 bg-[#f1f5f9] overflow-hidden border-b border-slate-200">
                  
                  {/* SIMULATED STYLIZED LIGHT MAP VECTOR BACKDROP */}
                  <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f1f5f9" />
                    {/* Water body */}
                    <path d="M0,40 Q150,20 300,70 T600,30 L600,0 L0,0 Z" fill="#bfdbfe" opacity="0.7" />
                    {/* Roads */}
                    <path d="M-50,80 L650,80" stroke="#e2e8f0" strokeWidth="14" />
                    <path d="M-50,80 L650,80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                    <path d="M120,-20 L120,250" stroke="#e2e8f0" strokeWidth="12" />
                    <path d="M380,-20 L380,250" stroke="#e2e8f0" strokeWidth="16" />
                    <path d="M-20,160 Q200,120 620,180" stroke="#e2e8f0" strokeWidth="10" />
                    {/* Green parks */}
                    <rect x="420" y="20" width="140" height="90" rx="8" fill="#dcfce7" opacity="0.8" />
                    <rect x="30" y="110" width="70" height="60" rx="6" fill="#dcfce7" opacity="0.8" />
                  </svg>

                  {/* GLOWING PULSING MAP PIN BEACON */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg border-2 border-white z-10 relative">
                        <MapPin className="w-5 h-5 fill-white" />
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-rose-500/30 animate-ping" />
                    </div>

                    <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-slate-900 text-[10px] font-bold shadow-md flex items-center gap-1 border border-slate-200">
                      <span>VOOO LABS HQ</span>
                      <span className="text-amber-500 font-bold">★ 5.0</span>
                    </div>
                  </div>

                  {/* MAP TOP SEARCH BAR OVERLAY */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-2 backdrop-blur-md">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>Google Maps · Maharashtra, India</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      #1 Ranked 3-Pack
                    </div>
                  </div>

                </div>

                {/* BUSINESS PROFILE CARD DETAILS */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* TITLE & BADGE */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Google Business Profile</span>
                    </div>

                    <h3 className="font-clash font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                      VOOO LABS — Custom Software, Web Apps & Digital Studio
                    </h3>

                    {/* RATING ROW */}
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-600">
                      <span className="font-bold text-slate-900 text-sm">5.0</span>
                      <div className="flex text-amber-500">
                        {'★★★★★'.split('').map((s, i) => (
                          <span key={i} className="text-amber-500 text-sm">{s}</span>
                        ))}
                      </div>
                      <span className="text-slate-500">(52 Google reviews)</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Open Now (24 hrs)
                      </span>
                    </div>
                  </div>

                  {/* ADDRESS & SERVICE TAG */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1 font-sans">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Corporate Hub: Maharashtra, India · Available Worldwide</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-blue-600 font-mono">https://vooolabs.com</span>
                    </p>
                  </div>

                  {/* ACTION BUTTONS (CALL / DIRECTIONS / WHATSAPP) */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    <a
                      href={`tel:+${COMPANY.whatsapp}`}
                      className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-center transition-all flex flex-col items-center justify-center gap-1 text-slate-800 shadow-xs cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold">Call Now</span>
                    </a>

                    <a
                      href="https://maps.google.com/?q=VOOO+LABS+Maharashtra+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-center transition-all flex flex-col items-center justify-center gap-1 text-slate-800 shadow-xs cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold">Directions</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center transition-all flex flex-col items-center justify-center gap-1 text-emerald-800 shadow-xs cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold">WhatsApp</span>
                    </a>
                  </div>

                  {/* RECENT VERIFIED REVIEW SNIPPET */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                      <span className="font-semibold text-slate-700">Verified Client Review · 2 days ago</span>
                      <span className="text-amber-500 font-bold">★★★★★</span>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">
                      "VOOO LABS built our custom business management system with 100% code ownership. Their engineering is ultra-fast, and we eliminated ₹45k monthly SaaS subscriptions."
                    </p>
                  </div>

                </div>

                {/* BOTTOM MAP FOOTER */}
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span className="font-mono">Google Maps Engine · Local Entity Authority</span>
                  <span className="text-emerald-700 font-bold">100% Local Reach</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
