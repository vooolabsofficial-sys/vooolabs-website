import { useEffect, useMemo, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

interface CounterProps {
  value: string;
  duration?: number;
}

interface Countable {
  prefix: string;
  suffix: string;
  start: number;
  end: number;
}

function parseCountable(value: string): Countable | null {
  const digits = value.replace(/[^0-9]/g, '');
  if (!digits) return null;

  const end = parseInt(digits, 10);
  return {
    prefix: value.match(/^[^-0-9]+/)?.[0] ?? '',
    suffix: value.match(/[^-0-9]+$/)?.[0] ?? '',
    start: end > 1900 ? end - 25 : 0,
    end,
  };
}

function Counter({ value, duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const countable = useMemo(() => parseCountable(value), [value]);
  const [counted, setCounted] = useState<string | null>(null);

  useEffect(() => {
    if (!isInView || !countable) return;

    const { prefix, suffix, start, end } = countable;
    let startTimestamp: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      const current = Math.floor(start + progress * (end - start));
      setCounted(`${prefix}${current}${suffix}`);

      if (progress < 1) frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [countable, isInView, duration]);

  const shown = countable
    ? counted ?? `${countable.prefix}${countable.start}${countable.suffix}`
    : value;

  return <span ref={ref}>{shown}</span>;
}

export default function Slide5_Innovation() {
  const stats = [
    {
      value: '4',
      label: 'Core Digital Verticals',
      sublabel: 'Websites · Web Apps · Software · AI Search',
    },
    {
      value: '100%',
      label: 'Client Code & Asset Ownership',
      sublabel: 'Zero vendor lock-in · Full IP handover',
    },
    {
      value: '₹0',
      label: 'Monthly Per-User Seat Fees',
      sublabel: 'Custom-built once · No seat penalties',
    },
    {
      value: 'All-In-One',
      label: 'Domain, DNS & 24/7 Hosting',
      sublabel: 'Complete technical setup included',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none border-b border-slate-200/80 relative overflow-hidden">
      {/* AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-blue-600/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2 text-center">
            THE AI-ERA ADVANTAGE
          </span>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 text-center leading-tight mb-16">
            Where {COMPANY.brandName} stands.
          </h2>
        </FadeIn>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
              <div className="p-8 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 text-center h-full flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
                <div className="font-clash font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-3">
                  <Counter value={stat.value} />
                </div>
                <div>
                  <div className="font-sans text-xs sm:text-sm text-slate-800 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* BOTTOM QUOTE — PRESERVED INTACT */}
        <FadeIn delay={0.35} y={15}>
          <p className="font-sans font-normal italic text-sm sm:text-base md:text-lg text-slate-600 text-center mt-16 max-w-xl leading-relaxed">
            "We don't resell bloated templates or outsource engineering. Every line of code is written with obsessive attention to performance, security, and real business utility."
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
