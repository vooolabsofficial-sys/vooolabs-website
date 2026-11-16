import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../../content/company';

export default function Slide6_CTA() {
  return (
    <section className="bg-[#F8F9FC] py-24 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden select-none border-b border-slate-200/80">
      {/* SOFT RADIAL BACKDROP */}
      <div className="absolute inset-0 bg-radial from-blue-500/[0.04] via-purple-500/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-4 py-1.5 mb-6 text-slate-700 font-mono text-xs tracking-wider uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Ready To Start Your Project</span>
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.02] tracking-tight mb-6">
            Partner with <br />
            <span className="shimmer-text">VOOO LABS.</span>
          </h2>
        </FadeIn>

        {/* SUBTEXT */}
        <FadeIn delay={0.18} y={15}>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-10">
            Skip the bloated templates and confusing sales pitches. Speak directly with our lead software architect and get a deterministic milestone plan for your business platform.
          </p>
        </FadeIn>

        {/* ACTION BUTTONS */}
        <FadeIn delay={0.25} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 font-sans font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(15,23,42,0.15)] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Start Technical Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 px-8 py-4 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
            >
              Inspect All Services
            </Link>
          </div>
        </FadeIn>

        {/* TRUST BADGES */}
        <FadeIn delay={0.35} y={10}>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-slate-600 font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" /> 100% Code Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-blue-600" /> Sub-0.4s Speed Standard
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-purple-600" /> Zero Monthly Seat Fees
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
