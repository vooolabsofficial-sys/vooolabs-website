import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION, RESPONSE_COPY } from '../../content/company';

export default function Slide1_ContactHero() {
  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 pt-28 text-center relative overflow-hidden select-none">
      
      {/* BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] animate-blob-1 pointer-events-none z-0" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-radial from-purple-500/8 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BIG HEADING */}
        <FadeIn delay={0} y={40}>
          <h1 className="font-clash text-[10vw] sm:text-[8vw] md:text-[6.5rem] font-bold text-[#0A0F1E] leading-[0.95] tracking-tighter mb-6">
            Let's <span className="shimmer-text">Connect.</span>
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.15} y={20}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed mb-10">
            {RESPONSE_COPY}
          </p>
        </FadeIn>

        {/* 3 QUICK INFO PILLS */}
        <FadeIn delay={0.3} y={15}>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-full bg-blue-500/5 border border-blue-500/15 px-5 py-2.5 font-kanit font-medium text-xs sm:text-sm text-blue-600 flex items-center gap-2 hover:bg-blue-500/10 transition-colors shadow-xs"
            >
              <Mail size={14} className="text-blue-600" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="rounded-full bg-orange-500/5 border border-orange-500/15 px-5 py-2.5 font-kanit font-medium text-xs sm:text-sm text-orange-600 flex items-center gap-2 shadow-xs">
              <MapPin size={14} className="text-orange-600" />
              <span>{LOCATION.region}, {LOCATION.country}</span>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* BOUNCING SCROLL DOT */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-kanit text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">
          Write to us
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
      </div>

    </section>
  );
}
