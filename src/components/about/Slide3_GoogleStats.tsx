import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

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

function Counter({ value, duration = 1.4 }: CounterProps) {
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

export default function Slide3_GoogleStats() {
  const stats = [
    {
      value: '<0.4s',
      label: 'First Contentful Paint',
      desc: 'Sub-second mobile speed standard',
      accent: 'text-blue-600',
    },
    {
      value: '₹0',
      label: 'Monthly Software Rent',
      desc: 'Zero recurring per-user seat fees',
      accent: 'text-emerald-600',
    },
    {
      value: '100%',
      label: 'Code & Asset Ownership',
      desc: 'Transferred directly to your accounts',
      accent: 'text-purple-600',
    },
    {
      value: String(COMPANY.foundedYear),
      label: `Founded in ${LOCATION.region}`,
      desc: 'Engineering for ambitious businesses',
      accent: 'text-amber-600',
    },
  ];

  return (
    <section 
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none border-b border-zinc-200 relative overflow-hidden"
      aria-label="By The Numbers — Measured Studio Benchmarks"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              MEASURED BENCHMARKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
              By The Numbers
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-lg mx-auto mt-3 font-normal leading-relaxed">
              Real engineering metrics, honestly counted and backed by verified deliverables.
            </p>
          </FadeIn>
        </div>

        {/* 4 STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 h-full flex flex-col justify-between hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold ${stat.accent} mb-3 tracking-tight`}>
                  <Counter value={stat.value} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-zinc-900 mb-1">
                    {stat.label}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500 leading-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
