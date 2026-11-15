import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import {
  ROADMAP,
  STATUS_LABEL,
  assertRoadmapIsCurrent,
  type RoadmapPhase,
} from '../../content/roadmap';

const ACCENTS: Record<RoadmapPhase['status'], { dot: string; ring: string; chip: string; glow: string; text: string }> = {
  shipped: {
    dot: 'bg-emerald-600',
    ring: 'border-emerald-600',
    chip: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    glow: 'hover:border-zinc-300 hover:shadow-sm',
    text: 'text-emerald-800',
  },
  current: {
    dot: 'bg-zinc-950',
    ring: 'border-zinc-950 ring-4 ring-zinc-100',
    chip: 'text-zinc-950 bg-zinc-100 border-zinc-300 font-semibold',
    glow: 'border-zinc-400 shadow-sm',
    text: 'text-zinc-950',
  },
  next: {
    dot: 'bg-zinc-400',
    ring: 'border-zinc-300',
    chip: 'text-zinc-600 bg-zinc-50 border-zinc-200',
    glow: 'hover:border-zinc-300 hover:shadow-2xs',
    text: 'text-zinc-700',
  },
  later: {
    dot: 'bg-zinc-300',
    ring: 'border-zinc-200',
    chip: 'text-zinc-500 bg-zinc-50 border-zinc-200',
    glow: 'hover:border-zinc-300',
    text: 'text-zinc-500',
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
      className="bg-zinc-50 py-20 sm:py-28 px-4 sm:px-6 relative select-none antialiased border-b border-zinc-200"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
            ENGINEERING MILESTONES & CAPABILITIES
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-zinc-950 tracking-tight mb-3">
            Studio Roadmap & Execution
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal">
            Every phase reflects concrete engineering capabilities, deterministic milestones, and complete client code ownership.
          </p>
        </div>

        {/* VERTICAL TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* STATIC BASE LINE */}
          <div
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[1px] bg-zinc-200"
            aria-hidden="true"
          />

          {/* SCROLL-LINKED VERTICAL PROGRESS BEAM */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-zinc-900 origin-top rounded-full z-0"
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
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center z-20 ${accent.ring}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                  </div>

                  {/* CONTENT CARD */}
                  <div className="w-full md:w-[calc(50%-24px)]">
                    <div
                      className={`p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 transition-all duration-200 text-left ${accent.glow}`}
                    >
                      {/* CARD HEADER */}
                      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200">
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          )}
                          <span
                            className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border ${accent.chip}`}
                          >
                            {STATUS_LABEL[phase.status]}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-medium text-zinc-500">
                          {phase.period}
                        </span>
                      </div>

                      {/* PHASE TITLE */}
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-zinc-950 mb-4 tracking-tight">
                        {phase.title}
                      </h3>

                      {/* DELIVERABLE CHECKLIST */}
                      <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-600">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            {phase.status === 'shipped' ? (
                              <div className="w-4 h-4 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={11} className="text-emerald-700" />
                              </div>
                            ) : phase.status === 'current' ? (
                              <div className="w-4 h-4 rounded-md bg-zinc-100 border border-zinc-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Clock size={11} className="text-zinc-900" />
                              </div>
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 flex-shrink-0 mt-2 mx-1" />
                            )}
                            <span className={phase.status === 'shipped' ? 'text-zinc-500' : 'text-zinc-800'}>
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
