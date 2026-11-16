import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, whatsappLink } from '../../content/company';

export default function Slide4_ClosingCTA() {
  return (
    <section 
      className="bg-[#0A0F1E] text-white py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none"
      aria-label="Start Your Project"
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* ORIGINAL PHILOSOPHY BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 mb-6 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>"First make it work, then make it beautiful."</span>
          </div>
        </FadeIn>

        {/* HEADLINE: UNDER 8 WORDS */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] mb-4">
            Build Bold. Ship Smart. <br />
            <span className="shimmer-text">Live Different.</span>
          </h2>
        </FadeIn>

        {/* SUBHEADLINE: 1 SHORT SENTENCE (MAX 15 WORDS) */}
        <FadeIn delay={0.15} y={15}>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Direct engineer access, fixed timelines, and full source code ownership from day one.
          </p>
        </FadeIn>

        {/* BUTTON CTAS: SEE WHAT YOUR PROJECT WILL COST & DISCOVER WHAT YOU'RE MISSING */}
        <FadeIn delay={0.22} y={15}>
          <div className="flex flex-wrap gap-3.5 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium text-sm sm:text-base px-7 py-3.5 shadow-md"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/seo-ai"
              className="btn-3d-base btn-3d-white inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-7 py-3.5 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span>Discover what you're missing</span>
            </Link>
          </div>
        </FadeIn>

        {/* TRUST SIGNALS */}
        <FadeIn delay={0.3} y={10}>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              100% Source Code Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-blue-400" />
              Sub-0.4s Fast Standard
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-orange-400 font-bold">₹0</span>
              Zero Monthly Platform Rent
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
