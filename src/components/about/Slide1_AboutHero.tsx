import React from 'react';
import { Sparkles, MapPin, ShieldCheck, Zap, Code2, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_AboutHero() {
  const pills = [
    { text: 'Maharashtra, India', icon: MapPin, color: 'text-orange-600', bg: 'bg-orange-50/80 border-orange-200/60' },
    { text: 'React 19 & Native Apps', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50/80 border-blue-200/60' },
    { text: '100% Code Ownership', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50/80 border-purple-200/60' },
    { text: '0 Agency Bloat', icon: Code2, color: 'text-emerald-600', bg: 'bg-emerald-50/80 border-emerald-200/60' },
  ];

  return (
    <section className="bg-[#F6F7FB] flex flex-col justify-center items-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20 text-center relative overflow-hidden select-none antialiased">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/60 px-4 py-1.5 mb-5 text-blue-700 font-sans font-medium text-xs tracking-wider uppercase">
            <Sparkles size={13} className="text-blue-600" />
            <span>Studio Manifesto & Philosophy</span>
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h1 className="font-clash text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-800 leading-[1.12] tracking-tight mb-5">
            High-Performance Software, <br />
            <span className="shimmer-text font-bold">Built Without Agency Fluff.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            VOOO LABS is a software engineering and digital product studio founded in Maharashtra. We build fast websites, custom business tools, and mobile apps with pure code, zero monthly lock-ins, and 100% client code ownership.
          </p>
        </FadeIn>

        {/* LIVE STUDIO ATTRIBUTES */}
        <FadeIn delay={0.15} y={15}>
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

      </div>
    </section>
  );
}
