import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check, Clock, Sparkles, Layers, ArrowRight } from 'lucide-react';
import {
  ROADMAP,
  STATUS_LABEL,
  assertRoadmapIsCurrent,
  type RoadmapPhase,
} from '../../content/roadmap';

const ACCENTS: Record<RoadmapPhase['status'], { dot: string; ring: string; chip: string; glow: string; text: string }> = {
  shipped: {
    dot: 'bg-emerald-600',
    ring: 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.2)]',
    chip: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    glow: 'hover:border-emerald-300 hover:shadow-md',
    text: 'text-emerald-700',
  },
  current: {
    dot: 'bg-blue-600',
    ring: 'border-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.3)] ring-4 ring-blue-100',
    chip: 'text-blue-700 bg-blue-50 border-blue-200',
    glow: 'border-blue-300 shadow-md',
    text: 'text-blue-700',
  },
  next: {
    dot: 'bg-purple-600',
    ring: 'border-purple-500 shadow-[0_0_12px_rgba(147,51,234,0.2)]',
    chip: 'text-purple-700 bg-purple-50 border-purple-200',
    glow: 'hover:border-purple-300 hover:shadow-md',
    text: 'text-purple-700',
  },
  later: {
    dot: 'bg-slate-400',
    ring: 'border-slate-300 shadow-2xs',
    chip: 'text-slate-600 bg-slate-100 border-slate-200',
    glow: 'hover:border-slate-300 hover:shadow-sm',
    text: 'text-slate-600',
  },
};

export default function Slide2_Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 20%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const problem = assertRoadmapIsCurrent();
    if (problem) console.warn(`[roadmap] ${problem}`);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 relative select-none antialiased border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            PHASED EXECUTION PIPELINE
          </span>
          <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
            Milestones & Delivery Cycle
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
            Every phase represents verifiable deliverables, transparent sprint reviews, and guaranteed code ownership.
          </p>
        </div>

        {/* VERTICAL TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* STATIC BASE LINE */}
          <div
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-slate-200 rounded-full"
            aria-hidden="true"
          />

          {/* SCROLL-LINKED VERTICAL PROGRESS BEAM */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 origin-top rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)] z-0"
            aria-hidden="true"
          />

          {/* TIMELINE NODES */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {ROADMAP.map((phase, idx) => {
              const accent = ACCENTS[phase.status];
              const isEven = idx % 2 === 0;
              const isCurrent = phase.status === 'current';

              return (
                <div
                  key={phase.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 pl-14 md:pl-0`}
                >
                  
                  {/* NODE PIN ON THE BEAM */}
                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-[3px] bg-white flex items-center justify-center z-20 ${accent.ring}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  </div>

                  {/* CONTENT CARD */}
                  <div className="w-full md:w-[calc(50%-24px)]">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 text-left hover:-translate-y-1 ${accent.glow}`}
                    >
                      {/* CARD HEADER */}
                      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                          )}
                          <span
                            className={`font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${accent.chip}`}
                          >
                            {STATUS_LABEL[phase.status]}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-medium text-slate-500">
                          {phase.period}
                        </span>
                      </div>

                      {/* PHASE TITLE */}
                      <h3 className="font-clash font-semibold text-xl sm:text-2xl text-slate-900 mb-4">
                        {phase.title}
                      </h3>

                      {/* DELIVERABLE CHECKLIST */}
                      <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-600">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            {phase.status === 'shipped' ? (
                              <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={11} className="text-emerald-600" />
                              </div>
                            ) : phase.status === 'current' ? (
                              <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Clock size={11} className="text-blue-600 animate-pulse" />
                              </div>
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-2 mx-1" />
                            )}
                            <span className={phase.status === 'shipped' ? 'text-slate-500' : 'text-slate-800'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
