import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeIn from '../shared/FadeIn';

interface CounterProps {
  value: string;
  duration?: number;
}

function Counter({ value, duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(value.includes('∞') ? '∞' : '0');

  useEffect(() => {
    if (!isInView || value.includes('∞')) return;
    
    const numericPart = value.replace(/[^0-9]/g, '');
    const prefix = value.match(/^[^-0-9]+/)?.[0] || '';
    const suffix = value.match(/[^-0-9]+$/)?.[0] || '';
    
    if (!numericPart) {
      setDisplayValue(value);
      return;
    }

    const endVal = parseInt(numericPart, 10);
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const current = Math.floor(progress * endVal);
      
      if (value === '2025') {
        const startYear = 2000;
        const currentYear = startYear + Math.floor(progress * (2025 - startYear));
        setDisplayValue(`${currentYear}`);
      } else {
        setDisplayValue(`${prefix}${current}${suffix}`);
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, isInView, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Slide4_Innovation() {
  const stats = [
    {
      value: '4',
      label: 'Products Built & In Development',
      gradClass: 'g-files',
    },
    {
      value: '2025',
      label: 'Year VOOO LABS Was Founded',
      gradClass: 'g-smaran',
    },
    {
      value: '100%',
      label: 'Privacy Commitment — Zero Data Sold',
      gradClass: 'g-callmind',
    },
    {
      value: '∞',
      label: 'Passion for Building Great Software',
      gradClass: 'g-text',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4 text-center">
            By The Numbers
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0F1E] text-center leading-none mb-16 sm:mb-20">
            The <span className="shimmer-text">VOOO LABS</span> Impact.
          </h2>
        </FadeIn>

        {/* 4 STATS ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-4 mt-2">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              {/* Stat Column */}
              <FadeIn delay={idx * 0.1} y={30} className="flex-1 text-center py-6 px-4">
                <div className={`font-clash font-extrabold text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6.5rem] leading-none ${stat.gradClass}`}>
                  <Counter value={stat.value} />
                </div>
                <div className="font-kanit text-sm text-slate-500 font-medium tracking-wide mt-3 max-w-[200px] mx-auto leading-relaxed">
                  {stat.label}
                </div>
              </FadeIn>

              {/* Vertical Divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-24 bg-slate-200 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* BOTTOM QUOTE */}
        <FadeIn delay={0.5} y={20}>
          <p className="font-kanit font-light italic text-lg sm:text-xl md:text-2xl text-slate-500 text-center mt-16 sm:mt-20 max-w-[550px] leading-relaxed">
            "Engineering meets art — and the result is always something five years ahead."
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
