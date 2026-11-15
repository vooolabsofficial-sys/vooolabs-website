import { Link } from 'react-router-dom';
import { MapPin, Star, Phone, ArrowRight, MessageSquare, Check, ShieldCheck, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

export default function Slide5_GoogleMapsLive() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to optimize my business so it ranks in the top Google Maps 3-Pack.")}`;

  return (
    <section 
      id="google-maps-live"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Google Maps 3-Pack Local Discovery"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-emerald-600 uppercase mb-3 flex items-center gap-2 font-mono">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>04 / GOOGLE MAPS 3-PACK & LOCAL NEAR-ME OPTIMIZATION</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SIMPLE HUMAN EXPLANATION */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                When High-Value Clients Search 'Near Me', <span className="text-emerald-600">You Own The Top Map Pin.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Local buyers, founders, and regional business owners rely on Google Maps to find established, trustworthy service providers nearby. We optimize your Google Business Profile entity data, local city signals, and verified review structures so you consistently rank in the coveted #1 Google Maps 3-Pack.
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
                    <h3 className="font-clash font-bold text-base text-slate-900">Direct 1-Tap Mobile Phone Calls & WhatsApp</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Customers immediately tap `[Call]`, `[Directions]`, or `[Website]` straight from your local map profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Voice Search & Mobile Assistant Prominence</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Google Assistant and smartphone voice searches cite your verified local business details when drivers query near-me services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Verified Customer Social Proof</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Structured review strategies establish high-trust social proof that turns searchers into immediate incoming inquiries.
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
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
                  <span>Verified Google Business Guidelines</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: PHOTOREALISTIC GOOGLE MAPS 3-PACK INTERFACE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.22} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] text-slate-900 border border-slate-200/80 shadow-xs overflow-hidden flex flex-col text-left">
                
                {/* MAP HEADER CONTAINER */}
                <div className="relative h-44 sm:h-48 bg-[#f1f5f9] overflow-hidden border-b border-slate-200">
                  
                  {/* SIMULATED STYLIZED LIGHT MAP VECTOR BACKDROP */}
                  <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f1f5f9" />
                    <path d="M0,40 Q150,20 300,70 T600,30 L600,0 L0,0 Z" fill="#bfdbfe" opacity="0.7" />
                    <path d="M-50,80 L650,80" stroke="#e2e8f0" strokeWidth="14" />
                    <path d="M-50,80 L650,80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                    <path d="M120,-20 L120,250" stroke="#e2e8f0" strokeWidth="12" />
                    <path d="M380,-20 L380,250" stroke="#e2e8f0" strokeWidth="16" />
                    <path d="M-20,160 Q200,120 620,180" stroke="#e2e8f0" strokeWidth="10" />
                    <rect x="420" y="20" width="140" height="90" rx="8" fill="#dcfce7" opacity="0.8" />
                    <rect x="30" y="110" width="70" height="60" rx="6" fill="#dcfce7" opacity="0.8" />
                  </svg>

                  {/* MAP PIN BEACON */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white z-10 relative">
                        <MapPin className="w-5 h-5 fill-white" />
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping" />
                    </div>

                    <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-slate-900 text-[10px] font-bold shadow-md flex items-center gap-1 border border-slate-200">
                      <span>VOOO LABS HQ</span>
                      <span className="text-amber-500 font-bold">★ 5.0</span>
                    </div>
                  </div>

                  {/* MAP TOP SEARCH BAR OVERLAY WITH SAMPLE DISCOVERY PREVIEW */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 flex items-center gap-2 backdrop-blur-md">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Google Maps · {LOCATION.hubs[0]}, {LOCATION.region}</span>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold shadow-2xs font-mono">
                      Sample Discovery Preview
                    </span>
                  </div>

                </div>

                {/* BUSINESS PROFILE CARD DETAILS */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-mono font-semibold text-emerald-600 mb-0.5">
                        Verified Business Profile · Top 3-Pack
                      </div>
                      <h4 className="font-clash font-bold text-lg text-slate-900">
                        {COMPANY.legalName}
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold ml-1 text-slate-900">5.0</span>
                        <span className="text-slate-500 text-[11px] font-sans">(Verified Client Reviews)</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2 font-sans flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Near you · {LOCATION.hubs.join(' • ')} · {LOCATION.region}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                    <div className="flex-1 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-2xs">
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>Direct Calls</span>
                    </div>
                    <div className="flex-1 py-2 rounded-xl bg-white text-slate-800 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-600" />
                      <span>Visit Website</span>
                    </div>
                    <div className="flex-1 py-2 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200 flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </div>
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
