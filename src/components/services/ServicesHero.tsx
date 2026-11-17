import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASING }}
        >
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            CORE ENGINEERING SYSTEMS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-3xl"
        >
          Four Core Systems. <br className="hidden sm:inline" />
          Engineered Around How Your Business Works.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
          className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
        >
          Select a system below to explore its complete architecture—built from scratch with clean code, 100% source code ownership, and zero rigid templates.
        </motion.p>
      </div>
    </section>
  );
}
