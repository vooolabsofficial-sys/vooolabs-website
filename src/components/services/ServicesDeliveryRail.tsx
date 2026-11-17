import React from 'react';
import { motion } from 'framer-motion';

const EASING = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    num: '01',
    title: 'Operational Discovery',
    desc: 'We map your exact workflow and goals before writing a line of code.',
  },
  {
    num: '02',
    title: 'Transparent Scope & Proposal',
    desc: 'Clear deliverables, architecture, and investment finalized upfront.',
  },
  {
    num: '03',
    title: 'Iterative Build & Live Previews',
    desc: 'Review real working staging builds at every milestone.',
  },
  {
    num: '04',
    title: 'Launch & 100% Ownership',
    desc: 'Full deployment, team walkthrough, and complete repository handover.',
  },
];

export default function ServicesDeliveryRail() {
  return (
    <section 
      className="bg-[#F8F9FC] border-t border-slate-200/80 py-16 px-6 select-none text-left"
      aria-label="How VOOO LABS Delivers Projects"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: EASING }}
        >
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            HOW WE DELIVER
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            A Clear, Grounded Process from First Scope to Launch.
          </h2>
        </motion.div>

        {/* 4 ALIGNED OPEN COLUMNS (DIVIDE-X ON DESKTOP, DIVIDE-Y ON MOBILE, ZERO BOX CARDS) */}
        <div className="mt-8 border-y border-slate-200/80 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 grid grid-cols-1 md:grid-cols-4">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASING }}
              className="py-7 md:px-6 lg:px-8 flex flex-col justify-start"
            >
              <span className="font-mono text-xs font-bold text-blue-600 mb-2.5 tracking-wider">
                {step.num}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
