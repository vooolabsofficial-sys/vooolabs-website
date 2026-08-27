import React from 'react';
import FadeIn from '../shared/FadeIn';
import AnimatedText from '../shared/AnimatedText';
import { Target, ShieldCheck, Globe } from 'lucide-react';

export default function Slide3_WhatWeBuild() {
  const pillars = [
    {
      icon: Target,
      iconColor: 'text-blue-500',
      title: 'Built for Real People',
      description: 'Not for investors, not for superficial metrics. Built for the student, the professional, and the elder who needs it most.',
      bgColor: 'bg-[#4285F4]/[0.03]',
      borderColor: 'border-[#4285F4]/[0.12]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(66,133,244,0.12)]',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-purple-500',
      title: 'Privacy First',
      description: 'We never sell your data. Auto-purge built-in, biometric vaults, and local encryption. Your privacy is not a feature — it\'s the foundation.',
      bgColor: 'bg-[#7C3AED]/[0.03]',
      borderColor: 'border-[#7C3AED]/[0.12]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]',
    },
    {
      icon: Globe,
      iconColor: 'text-emerald-500',
      title: 'Made in India',
      description: 'World-class quality crafted from rural Maharashtra. Proving geography does not limit greatness. Built in India, used worldwide.',
      bgColor: 'bg-[#10B981]/[0.03]',
      borderColor: 'border-[#10B981]/[0.12]',
      hoverGlow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]',
    },
  ];

  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0F1E] text-center leading-none mb-6">
            Apps That <span className="shimmer-text">Actually Matter.</span>
          </h2>
        </FadeIn>

        {/* SCROLL-REVEAL SUBTEXT */}
        <div className="w-full max-w-2xl text-center mb-16 sm:mb-20 font-sans font-medium text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed">
          <AnimatedText 
            text="We don't build apps to fill a portfolio. We build because real people — students who miss deadlines, sales teams who lose leads, and families who forget medicine — need tools that genuinely work."
          />
        </div>

        {/* 3 PHILOSOPHY PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.15} y={40} className="w-full">
                <div 
                  className={`rounded-[28px] p-8 border ${pillar.bgColor} ${pillar.borderColor} ${pillar.hoverGlow} hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 h-full flex flex-col items-start group`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="font-clash font-semibold text-xl text-[#0A0F1E] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans font-normal text-sm sm:text-base text-slate-600 leading-relaxed mt-auto">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
