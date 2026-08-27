import React from 'react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_AboutHero() {
  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 pt-28 text-center relative overflow-hidden select-none">
      
      {/* BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] animate-blob-1 pointer-events-none z-0" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-radial from-purple-500/8 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BIG HEADING */}
        <FadeIn delay={0} y={40}>
          <h1 className="font-clash text-[12vw] sm:text-[9vw] md:text-[7.5rem] font-bold text-[#0A0F1E] leading-[0.9] tracking-tighter mb-8">
            About <br className="sm:hidden" />
            <span className="shimmer-text">VOOO LABS</span>
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.15} y={20}>
          <p className="font-kanit font-light text-lg sm:text-xl md:text-2xl text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
            One founder. Three apps. <br className="xs:hidden" /> Unlimited ambition.
          </p>
        </FadeIn>

        {/* LARGE MADE IN INDIA BADGE */}
        <FadeIn delay={0.3} y={15}>
          <div 
            className="rounded-2xl border border-black/10 bg-slate-50 px-7 py-3 font-kanit font-medium text-sm sm:text-base text-slate-800 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform inline-flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm" />
            <span>Crafted with pride in India</span>
          </div>
        </FadeIn>

      </div>

      {/* BOUNCING SCROLL DOT */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-kanit text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">
          Read our story
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
      </div>

    </section>
  );
}
