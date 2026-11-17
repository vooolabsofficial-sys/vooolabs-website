import React from 'react';
import { ArrowRight } from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';

export default function ServicesClosingBand() {
  return (
    <section 
      className="bg-[#0A0F1E] text-white py-16 sm:py-24 px-6 relative overflow-hidden select-none border-t border-slate-800"
      aria-label="Start Your Technical Inquiry"
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
        <div>
          {/* STUDIO PHILOSOPHY (MATCHING HOMEPAGE SLIDE4 STYLE & FONTS) */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
            <span className="font-bold text-white">
              First make it work,
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-300">
              then make it
            </span>
            <span className="font-extrabold text-blue-400">
              beautiful.
            </span>
          </div>

          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
            DIRECT ARCHITECT DISCOVERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            Not sure which system fits your business best? <br className="hidden sm:inline" />
            <span className="shimmer-text">Let's map it out together.</span>
          </h2>
        </div>

        <div className="shrink-0">
          <LiquidButton
            to="/contact"
            variant="gradient"
            rounded="pill"
            size="lg"
            magnetic={true}
            className="whitespace-nowrap"
          >
            <span>See what your project will cost</span>
            <ArrowRight size={16} />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
