import React from 'react';
import { GitCommit, Sparkles, Layers, ShieldCheck, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_RoadmapHero() {
  return (
    <section className="bg-white flex flex-col justify-center items-center px-4 sm:px-6 py-20 pt-28 sm:pt-36 text-center relative overflow-hidden select-none antialiased border-b border-slate-200/80">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-600/[0.03] blur-[120px] pointer-events-none" />

      {/* ULTRA-SUBTLE ARCHITECTURAL GRID */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-4 py-1.5 mb-6 text-blue-600 font-sans font-medium text-xs tracking-wider uppercase shadow-xs">
            <GitCommit size={14} className="text-blue-600" />
            <span>Process Blueprint & Delivery Milestones</span>
          </div>
        </FadeIn>

        {/* HERO TITLE */}
        <FadeIn delay={0.08} y={25}>
          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-6">
            How We Architect & <br />
            <span className="shimmer-text font-bold">Ship Client Software</span>
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.16} y={15}>
          <p className="font-sans text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Every product we build follows a transparent, phased engineering pipeline — from technical specification and prototype velocity to production cloud scale and 100% IP handover.
          </p>
        </FadeIn>

        {/* GUARANTEE PILLS */}
        <FadeIn delay={0.24} y={15}>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-2xl mx-auto">
            <div className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-1.5 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 shadow-2xs">
              <Layers size={13} className="text-blue-600" />
              <span>Predictable Sprint Cycles</span>
            </div>
            <div className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-1.5 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 shadow-2xs">
              <ShieldCheck size={13} className="text-emerald-600" />
              <span>Full Code & IP Ownership</span>
            </div>
            <div className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-1.5 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 shadow-2xs">
              <Sparkles size={13} className="text-purple-600" />
              <span>Sub-0.4s Speed Standard</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* TIMELINE CUE */}
      <div className="mt-14 flex flex-col items-center gap-1.5 text-slate-500">
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
          Scroll To Inspect Roadmap
        </span>
        <ArrowDown size={14} className="animate-bounce text-slate-500 mt-1" />
      </div>
    </section>
  );
}
