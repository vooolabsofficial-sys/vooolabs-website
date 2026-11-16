import React from 'react';
import { Sparkles, ShieldCheck, Zap, Layers, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_AboutHero() {
  const pills = [
    { text: 'Custom Websites & Web Apps', icon: Layers },
    { text: 'Instant Mobile Performance', icon: Zap },
    { text: '100% Code & Data Ownership', icon: ShieldCheck },
    { text: 'Direct Founder Collaboration', icon: Sparkles },
  ];

  return (
    <section className="bg-white flex flex-col justify-center items-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20 text-center relative overflow-hidden select-none antialiased border-b border-zinc-200">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-50 border border-zinc-200 px-4 py-1.5 mb-6 text-zinc-700 font-mono text-xs tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>ABOUT VOOO LABS • PUNE • NASHIK • SATARA</span>
          </div>
        </FadeIn>

        {/* HEADING & SUBHEADLINE */}
        <FadeIn delay={0.08} y={20}>
          <h1 className="font-clash font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-950 leading-[1.15] tracking-tight mb-6">
            Enterprise-Grade Websites, Web Apps & Software—Built Around <span className="shimmer-text">Real Business Workflows.</span>
          </h1>
          <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto font-normal mb-10">
            Based in Maharashtra, VOOO LABS helps small, mid-sized, and growing businesses leverage AI-era engineering to launch custom digital systems that were previously out of budget.
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
                  className="px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 flex items-center gap-2 text-xs font-mono text-zinc-800 shadow-2xs"
                >
                  <IconComp size={13} className="text-zinc-600" />
                  <span>{pill.text}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* SCROLL CUE */}
        <FadeIn delay={0.24} y={10}>
          <div className="flex flex-col items-center gap-1.5 text-zinc-400 text-xs font-mono uppercase tracking-widest">
            <span>Explore Studio Standards</span>
            <ArrowDown size={13} className="animate-bounce mt-1 text-zinc-400" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
