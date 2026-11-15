import React from 'react';
import { MapPin, Globe, Clock } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { LOCATION } from '../../content/company';

export default function Slide5_Location() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-zinc-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* SECTION HEADER */}
        <div className="mb-14 max-w-2xl mx-auto">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
              GEOGRAPHIC ORIGIN & REACH
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-zinc-950 mb-3 tracking-tight">
              Engineered in Maharashtra, <br />
              Shipped Across India & Globally
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal">
              High-caliber software craft from Maharashtra, delivering production web systems for growing businesses nationwide.
            </p>
          </FadeIn>
        </div>

        {/* 3 TECHNICAL LOCATION TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12 text-left">
          
          {/* TILE 1: REGION */}
          <FadeIn delay={0.06} y={15} className="w-full">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 h-full flex flex-col justify-between hover:bg-white hover:border-zinc-300 transition-all shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4 shadow-2xs">
                  <MapPin size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Studio Hubs
                </span>
                <h3 className="font-sans font-bold text-lg text-zinc-950 mb-2">
                  {LOCATION.hubs.join(' • ')}
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal">
                  {LOCATION.region}, {LOCATION.country}. Serving small, mid-sized, and enterprise clients with complete commercial accountability.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-200 font-mono text-[11px] text-emerald-700 font-semibold">
                HQ Verified
              </div>
            </div>
          </FadeIn>

          {/* TILE 2: TIMEZONE */}
          <FadeIn delay={0.12} y={15} className="w-full">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 h-full flex flex-col justify-between hover:bg-white hover:border-zinc-300 transition-all shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4 shadow-2xs">
                  <Clock size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Operating Timezone
                </span>
                <h3 className="font-sans font-bold text-lg text-zinc-950 mb-2">
                  IST (UTC+05:30)
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal">
                  Direct founder access with convenient working hours across Indian, Middle Eastern, and European business windows.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-200 font-mono text-[11px] text-zinc-700 font-semibold">
                Mon – Sat • Direct Scoping
              </div>
            </div>
          </FadeIn>

          {/* TILE 3: GLOBAL DISTRIBUTION */}
          <FadeIn delay={0.18} y={15} className="w-full">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 h-full flex flex-col justify-between hover:bg-white hover:border-zinc-300 transition-all shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4 shadow-2xs">
                  <Globe size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Fast Cloud Hosting
                </span>
                <h3 className="font-sans font-bold text-lg text-zinc-950 mb-2">
                  24/7 High-Speed Cloud
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal">
                  Every website and software platform runs on fast, resilient cloud infrastructure with automated SSL and edge caching.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-200 font-mono text-[11px] text-zinc-700 font-semibold">
                Included with Every Project
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
