import React from 'react';
import { RefreshCw, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_RoadmapHero() {
  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 pt-28 text-center relative overflow-hidden select-none">
      
      {/* BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] animate-blob-1 pointer-events-none z-0" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-radial from-orange-500/8 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BIG HEADING */}
        <FadeIn delay={0} y={40}>
          <h1 className="font-clash text-[10vw] sm:text-[8vw] md:text-[6.5rem] font-bold text-[#0A0F1E] leading-[0.95] tracking-tighter mb-8">
            What's <br className="sm:hidden" /> Coming <span className="shimmer-text">Next</span>
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.15} y={20}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed mb-10">
            Updated regularly. Built transparently. <br className="xs:hidden" /> Delivered with care.
          </p>
        </FadeIn>

        {/* BADGES */}
        <FadeIn delay={0.3} y={15}>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="rounded-full bg-blue-500/10 border border-blue-500/20 px-5 py-2 font-kanit font-medium text-xs sm:text-sm text-blue-600 inline-flex items-center gap-2 shadow-xs">
              <RefreshCw size={14} className="animate-spin-slow text-blue-600" />
              <span>Live Roadmap</span>
            </div>
            <div className="rounded-full bg-purple-500/10 border border-purple-500/20 px-5 py-2 font-kanit font-medium text-xs sm:text-sm text-purple-600 inline-flex items-center gap-2 shadow-xs">
              <Sparkles size={14} className="text-purple-600" />
              <span>2025–2030 Vision</span>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* BOUNCING SCROLL DOT */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-kanit text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">
          Explore the timeline
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
      </div>

    </section>
  );
}
