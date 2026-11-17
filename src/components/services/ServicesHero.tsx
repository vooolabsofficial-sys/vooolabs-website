import React from 'react';
import { motion } from 'framer-motion';

const EASING = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  {
    num: '01',
    title: 'Ground-Up Architecture',
    desc: 'Tailored strictly to your daily operations, never cloned from templates.',
  },
  {
    num: '02',
    title: '100% Client Ownership',
    desc: 'Full source code, domain, and cloud accounts handed over cleanly.',
  },
  {
    num: '03',
    title: 'Direct Architect Access',
    desc: 'Work directly with the engineers building your system.',
  },
];

export default function ServicesHero() {
  return (
    <section 
      id="services-overview"
      className="bg-white text-slate-900 border-b border-slate-200/80 select-none"
      aria-label="VOOO LABS Core Capabilities Overview"
    >
      <div className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-16 text-left">
        {/* 12-COLUMN ASYMMETRIC SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          {/* LEFT: EDITORIAL HEADLINE & POSITIONING */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              CORE ENGINEERING SYSTEMS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-slate-950 leading-[1.08] mb-6 max-w-2xl">
              Four Core Systems. Engineered Around How Your Business Works.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Select a system below to inspect its complete architecture—built from scratch with clean code, 100% source code ownership, and zero rigid templates.
            </p>
          </motion.div>

          {/* RIGHT: 3 OPEN TYPOGRAPHIC PRINCIPLES (ZERO BOX CARDS) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASING }}
            className="lg:col-span-5 border-t border-slate-200/80 divide-y divide-slate-200/80"
          >
            {PRINCIPLES.map((item) => (
              <div key={item.num} className="py-4 sm:py-4.5 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-blue-600">
                    {item.num}
                  </span>
                  <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
                  <h2 className="text-sm sm:text-base font-semibold text-slate-950">
                    {item.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
