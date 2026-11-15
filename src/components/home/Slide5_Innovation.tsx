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
    <section className="bg-white py-20 lg:py-28 px-6 sm:px-8 select-none border-b border-slate-200/80 relative overflow-hidden">
      {/* ORIGINAL VIBRANT AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        
        {/* EYEBROW & SECTION HEADING */}
        <div className="max-w-3xl mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
              THE AI-ERA ADVANTAGE
            </span>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900 mb-4">
              Where {COMPANY.brandName} <span className="shimmer-text">Stands.</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Clear benchmarks built around client ownership, radical speed, and honest software engineering.
            </p>
          </FadeIn>
        </div>

        {/* STATS ROW (EQUAL-HEIGHT & GENEROUSLY PADDED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 text-left h-full flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  <Counter value={stat.value} />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900 mb-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* BOTTOM QUOTE — PRESERVED INTACT FROM ORIGINAL GIT COMMITS */}
        <FadeIn delay={0.3} y={15}>
          <div className="max-w-3xl border-l-2 border-blue-600 pl-6 py-2">
            <p className="italic text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              "We don't resell bloated templates or outsource engineering. Every line of code is written with obsessive attention to performance, security, and real business utility."
            </p>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-2 block">
              VOOO LABS Core Engineering Standard
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
