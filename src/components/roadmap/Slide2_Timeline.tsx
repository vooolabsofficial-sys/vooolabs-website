import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  ROADMAP,
  STATUS_LABEL,
  assertRoadmapIsCurrent,
  type RoadmapPhase,
} from '../../content/roadmap';

const ACCENTS: Record<RoadmapPhase['status'], { dot: string; chip: string }> = {
  shipped: {
    dot: 'border-emerald-500',
    chip: 'text-emerald-600 bg-emerald-500/10',
  },
  current: { dot: 'border-[#4285F4]', chip: 'text-blue-600 bg-blue-500/10' },
  next: { dot: 'border-[#7C3AED]', chip: 'text-purple-600 bg-purple-500/10' },
  later: { dot: 'border-slate-300', chip: 'text-slate-500 bg-slate-100' },
};

export default function Slide2_Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['10vw', '-65vw']);

  /**
   * Shouts in the console when the roadmap has gone stale. The previous
   * timeline hardcoded "2025 Q3" with a live "Active" badge and was still
   * showing it most of a year later, because nothing anywhere noticed.
   */
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const problem = assertRoadmapIsCurrent();
    if (problem) console.warn(`[roadmap] ${problem}`);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F8F9FC] z-10 select-none"
      style={{ height: '320vh' }}
    >
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex flex-col justify-center">

        {/* HEADER LABEL */}
        <div className="absolute top-24 left-6 sm:left-12 md:left-20 z-20">
          <span className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase">
            Roadmap
          </span>
        </div>

        {/* HORIZONTAL CARDS TRACK */}
        <div className="relative flex flex-col justify-center w-full h-[650px] overflow-hidden">
          <motion.div style={{ x }} className="flex items-center relative py-12 pr-[40vw]">

            {/* CENTER LINE */}
            <div
              className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285F4] via-[#7C3AED] to-[#F97316] z-0"
              style={{ width: '400vw' }}
              aria-hidden="true"
            />

            {ROADMAP.map((phase, idx) => {
              const accent = ACCENTS[phase.status];
              const above = idx % 2 === 0;
              const isCurrent = phase.status === 'current';

              return (
                <div
                  key={phase.id}
                  className={`relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center ${
                    above ? 'pb-[180px]' : 'pt-[180px]'
                  }`}
                >
                  {!above && (
                    <div
                      className={`w-5 h-5 rounded-full border-[3px] bg-white absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md ${accent.dot}`}
                    />
                  )}

                  <div
                    className={`rounded-[32px] p-8 bg-white w-full text-left relative transition-all duration-300 hover:-translate-y-1 ${
                      isCurrent
                        ? 'border border-[#4285F4] shadow-[0_12px_40px_rgba(66,133,244,0.12)]'
                        : 'border border-slate-100 shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {isCurrent && (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                      )}
                      <span
                        className={`font-kanit font-medium text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full ${accent.chip}`}
                      >
                        {STATUS_LABEL[phase.status]}
                      </span>
                      <span className="font-kanit font-medium text-xs text-slate-400 ml-auto">
                        {phase.period}
                      </span>
                    </div>

                    <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                      {phase.title}
                    </h3>

                    {/*
                      A list, not a percentage. The bars this replaces read
                      "70%", "20%" and "100% On-Track" against a 2030 goal --
                      numbers with nothing behind them.
                    */}
                    <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          {phase.status === 'shipped' ? (
                            <Check
                              size={14}
                              className="text-emerald-500 flex-shrink-0 mt-1"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"
                            />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {above && (
                    <div
                      className={`w-5 h-5 rounded-full border-[3px] bg-white absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md ${accent.dot}`}
                    />
                  )}
                </div>
              );
            })}

          </motion.div>
        </div>

      </div>
    </div>
  );
}
