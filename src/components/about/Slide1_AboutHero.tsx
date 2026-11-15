import React from 'react';
import { Sparkles, ShieldCheck, Zap, Layers, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_AboutHero() {
  const pills = [
    { text: 'Custom Web Applications', icon: Layers, color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    { text: 'Sub-0.4s Speed Standard', icon: Zap, color: 'text-purple-700', bg: 'bg-purple-50 border-purple-200' },
    { text: '100% Code & IP Ownership', icon: ShieldCheck, color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    { text: 'Direct Engineer Access', icon: Sparkles, color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
  ];

  return (
    <section className="bg-white flex flex-col justify-center items-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20 text-center relative overflow-hidden select-none antialiased border-b border-slate-200/80">
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-100px] w-[450px] h-[450px] rounded-full bg-purple-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-4 py-1.5 mb-6 text-slate-700 font-mono text-xs tracking-wider uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Studio Manifesto & Capabilities</span>
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h1 className="font-clash text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.12] tracking-tight mb-6">
            We Engineer Custom Web Software <br />
            <span className="shimmer-text font-bold">For Real Businesses.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal mb-10">
            VOOO LABS is an independent software engineering studio from Maharashtra. We replace fragile spreadsheets and bloated agency templates with fast, tailored web applications, business portals, and high-conversion company platforms.
          </p>
        </FadeIn>

        {/* PILLS */}
        <FadeIn delay={0.16} y={15}>
          <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-2xl mx-auto mb-10">
            {pills.map((pill, idx) => {
              const IconComp = pill.icon;
              return (
                <div 
                  key={idx}
                  className={`px-3.5 py-1.5 rounded-full border ${pill.bg} flex items-center gap-2 text-xs font-medium text-slate-700 shadow-2xs`}
                >
                  <IconComp size={13} className={pill.color} />
                  <span>{pill.text}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* SCROLL CUE */}
        <FadeIn delay={0.24} y={10}>
          <div className="flex flex-col items-center gap-1.5 text-slate-500 text-xs font-mono uppercase tracking-widest">
            <span>Explore Studio Principles</span>
            <ArrowDown size={13} className="animate-bounce mt-1 text-slate-500" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
