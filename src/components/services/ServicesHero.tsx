import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

export default function ServicesHero() {
  return (
    <section 
      className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-white text-left select-none relative overflow-hidden"
      aria-label="Services Overview"
    >
      {/* SUBTLE AMBIENT STUDIO GLOW */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 sm:pb-14 border-b border-slate-200/80">
        {/* PHILOSOPHY TAG (MATCHING HOMEPAGE STYLE & FONTS) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASING }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
        >
          <span className="font-bold text-slate-950">
            First make it work,
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
          <span className="font-medium text-slate-600">
            then make it
          </span>
          <span className="font-extrabold text-blue-600">
            beautiful.
          </span>
        </motion.div>

        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
        >
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            CORE ENGINEERING SYSTEMS
          </span>
        </motion.div>

        {/* H1 HEADLINE (MATCHING HOMEPAGE EDITORIAL TYPOGRAPHY & SHIMMER) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-4xl"
        >
          <span>Four Core Systems.</span> <br className="hidden sm:inline" />
          <span className="shimmer-text">Engineered Around How Your Business Works.</span>
        </motion.h1>

        {/* SUBHEADLINE (MATCHING HOMEPAGE TEXT COLORS & SIZES) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
        >
          Select a system below to explore its complete architecture—built from scratch with clean code, <span className="font-medium text-slate-900">100% source code ownership</span>, and zero rigid templates.
        </motion.p>

        {/* DUAL BUTTON CTAS (MATCHING HOMEPAGE LIQUID BUTTON STYLING & GRADIENT VARIANT) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <LiquidButton
            to="/contact"
            variant="primary"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>See what your project will cost</span>
            <ArrowRight size={16} />
          </LiquidButton>

          <LiquidButton
            to="/seo-ai"
            variant="secondary"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>Discover what you're missing</span>
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
}
