import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, Rocket, Code2, Bot, Layers } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const MILESTONES = [
  {
    year: '2025 Genesis',
    phase: 'Phase 01',
    title: 'The Rejection of Agency Templates',
    story: 'Founded in Maharashtra, India. Born from frustration seeing local businesses paying agencies lakhs for fragile, pre-made WordPress themes that broke after six months.',
    icon: Code2,
    accent: '#3B82F6',
    deliverables: ['Custom React & TypeScript architecture', 'Zero third-party theme dependencies', '100% client code ownership standard'],
  },
  {
    year: 'Core Engines',
    phase: 'Phase 02',
    title: 'Sub-0.4s Speed & Operations Software',
    story: 'Engineered specialized billing and portal architectures: sub-0.4s first contentful paint, automated WhatsApp lead routing, and custom GST tax invoicing engines.',
    icon: Layers,
    accent: '#8B5CF6',
    deliverables: ['Automated PDF GST invoicing', 'Sub-second mobile loading benchmarks', 'Zero monthly per-seat licensing model'],
  },
  {
    year: 'AI Search Era',
    phase: 'Phase 03',
    title: 'ChatGPT & Google AI Discoverability',
    story: 'Pioneered native entity schema optimization so clients get directly recommended when customers ask conversational engines like ChatGPT, Gemini, and Perplexity.',
    icon: Bot,
    accent: '#10B981',
    deliverables: ['Entity graph validation on Google Maps', 'Conversational AI citation structuring', 'Targeted AI platform ad funnels'],
  },
  {
    year: 'Today & Scale',
    phase: 'Phase 04',
    title: 'Pan-India Commercial Deployments',
    story: 'Delivering production digital systems for growing businesses across Pune, Nashik, Satara, and nationwide with fixed milestone delivery plans.',
    icon: Rocket,
    accent: '#F59E0B',
    deliverables: ['Direct founder engineering access', 'Full GitHub & cloud account handover', '24/7 edge cloud hosting support'],
  },
];

export default function Slide5_Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = MILESTONES[activeIndex];
  const IconComp = current.icon;

  return (
    <section 
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none border-b border-zinc-200 relative overflow-hidden"
      aria-label="Studio Journey & Milestones"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              STUDIO EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
              Our Journey & Milestones
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-lg mx-auto mt-3 font-normal leading-relaxed">
              Google-style interactive timeline: click through our roadmap from studio founding to current scale.
            </p>
          </FadeIn>
        </div>

        {/* INTERACTIVE TIMELINE STEPPER PILLS */}
        <FadeIn delay={0.1} y={15}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {MILESTONES.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  {item.year}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* ACTIVE MILESTONE CARD */}
        <FadeIn delay={0.18} y={20}>
          <div className="rounded-3xl bg-zinc-50 border border-zinc-200/90 p-7 sm:p-10 shadow-xs relative overflow-hidden text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* LEFT (8 COLS) */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${current.accent}14`, color: current.accent }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {current.phase} • {current.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {current.story}
                  </p>

                  <div className="pt-2 space-y-2">
                    {current.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT BADGE SPEC (4 COLS) */}
                <div className="md:col-span-4">
                  <div className="rounded-2xl bg-white border border-zinc-200 p-6 space-y-3 shadow-2xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">
                      Architectural Milestone
                    </span>
                    <div className="text-xl font-bold text-zinc-950 tracking-tight">
                      {current.phase} Standard
                    </div>
                    <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                      Deployed into our core codebase with permanent intellectual property handover.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
