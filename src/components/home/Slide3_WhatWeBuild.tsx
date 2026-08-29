import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Code2, Rocket, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_WhatWeBuild() {
  const steps = [
    {
      step: '01',
      badge: 'Discovery & Strategy',
      title: 'Architecture & Roadmap',
      description: 'We analyze your business goals, design the system architecture, and map out the exact product roadmap with no guesswork.',
      deliverables: ['System Architecture', 'UI/UX Wireframes', 'Tech Stack Selection'],
      icon: Compass,
      accentColor: '#3B82F6', // Blue
      bgGlow: 'from-blue-500/10 via-transparent to-transparent',
    },
    {
      step: '02',
      badge: 'Design & Engineering',
      title: 'Rapid Sprint Build',
      description: 'We craft world-class modern interfaces and write clean, scalable code with test-driven quality delivered in fast weekly milestones.',
      deliverables: ['Pixel-Perfect UI', 'Scalable Clean Code', 'Weekly Live Demos'],
      icon: Code2,
      accentColor: '#8B5CF6', // Purple
      bgGlow: 'from-purple-500/10 via-transparent to-transparent',
    },
    {
      step: '03',
      badge: 'Deployment & Growth',
      title: 'Launch, SEO & Scale',
      description: 'We deploy your product to global cloud infrastructure with sub-second load times, automated security, and built-in AI/Google SEO ranking.',
      deliverables: ['Cloud Deployment', 'Google & AI SEO', '100% Code Ownership'],
      icon: Rocket,
      accentColor: '#10B981', // Emerald
      bgGlow: 'from-emerald-500/10 via-transparent to-transparent',
    },
  ];

  return (
    <section 
      className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 sm:py-28 select-none relative overflow-hidden"
      aria-label="How We Work — Engineering Process"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-4 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase">
            <Sparkles size={13} />
            <span>Our 3-Step Execution Process</span>
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            From Concept to Launch <br className="hidden sm:inline" />
            <span className="shimmer-text">in Simple, Fast Steps.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            A transparent and agile engineering workflow designed to build, test, and ship high-impact digital products without agency delays.
          </p>
        </FadeIn>

        {/* 3 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.12} y={30} className="w-full flex">
                <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between h-full w-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* TOP ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div>
                    {/* CARD HEADER */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs"
                        style={{ backgroundColor: `${item.accentColor}12`, color: item.accentColor }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider">
                        STEP {item.step}
                      </span>
                    </div>

                    {/* BADGE & TITLE */}
                    <span 
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: item.accentColor }}
                    >
                      {item.badge}
                    </span>
                    <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-3">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-sans font-normal text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* DELIVERABLES LIST */}
                  <div className="pt-5 border-t border-slate-100 space-y-2">
                    <span className="font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CTA STRIP */}
        <FadeIn delay={0.4} y={20} className="w-full">
          <div className="mt-12 w-full rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="text-center sm:text-left">
              <h4 className="font-clash font-bold text-base sm:text-lg text-[#0A0F1E]">
                Ready to turn your idea into a live digital product?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-500 mt-0.5">
                Get a complete project roadmap, technical architecture, and transparent timeline.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 hover:bg-black text-white px-6 py-2.5 font-sans font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-sm inline-flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
