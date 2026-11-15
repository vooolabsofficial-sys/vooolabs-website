import React from 'react';
import { MapPin, Globe, Clock, ArrowUp, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { LOCATION, COMPANY } from '../../content/company';

export default function Slide5_Location() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* SECTION HEADER */}
        <div className="mb-14 max-w-2xl mx-auto">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest block mb-2">
              GEOGRAPHIC ORIGIN & REACH
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Engineered in Maharashtra, <br />
              <span className="shimmer-text font-bold">Shipped Globally</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              High-caliber software craft from the heart of India, deploying production systems for international clients.
            </p>
          </FadeIn>
        </div>

        {/* 3 TECHNICAL LOCATION TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          
          {/* TILE 1: REGION */}
          <FadeIn delay={0.06} y={15} className="w-full">
            <div className="p-7 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 text-left h-full flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                  <MapPin size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  Primary Jurisdiction
                </span>
                <h3 className="font-clash font-semibold text-xl text-slate-900 mb-2">
                  {LOCATION.region}, {LOCATION.country}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                  Operating hubs across {LOCATION.hubs.join(', ')} with full legal and commercial compliance.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 font-mono text-[11px] text-emerald-600 font-semibold">
                HQ Verified
              </div>
            </div>
          </FadeIn>

          {/* TILE 2: TIMEZONE */}
          <FadeIn delay={0.12} y={15} className="w-full">
            <div className="p-7 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 text-left h-full flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                  <Clock size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  Working Hours & Timezone
                </span>
                <h3 className="font-clash font-semibold text-xl text-slate-900 mb-2">
                  IST (UTC+05:30)
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                  Overlapping operational business windows for UK, European, Middle Eastern, and Asian client partners.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 font-mono text-[11px] text-blue-600 font-semibold">
                Daily 9:00 AM – 9:00 PM IST
              </div>
            </div>
          </FadeIn>

          {/* TILE 3: GLOBAL DISTRIBUTION */}
          <FadeIn delay={0.18} y={15} className="w-full">
            <div className="p-7 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 text-left h-full flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
                  <Globe size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  Global Edge Network
                </span>
                <h3 className="font-clash font-semibold text-xl text-slate-900 mb-2">
                  Multi-Region Deployments
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                  Edge caching, CDN routing, and low-latency databases deployed close to your customers worldwide.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 font-mono text-[11px] text-purple-600 font-semibold">
                Sub-40ms Edge Latency
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
