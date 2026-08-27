import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';
import { PRODUCTS, AVAILABLE_PRODUCTS } from '../../content/products';

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

/**
 * Splits "₹699/mo" into the bits needed to count it up, or returns null when
 * there is no number to animate. Returning null rather than setting state for
 * the non-numeric case keeps the effect below free of synchronous setState.
 *
 * A year counts up from 25 years back so it reads as a year rather than
 * spinning through two millennia; anything else counts from zero.
 */
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
    // Without this the loop kept running and setting state after unmount.
    return () => window.cancelAnimationFrame(frame);
  }, [countable, isInView, duration]);

  // Before the animation starts, and for values with no number in them, the
  // literal value is what belongs on screen.
  const shown = countable
    ? counted ?? `${countable.prefix}${countable.start}${countable.suffix}`
    : value;

  return <span ref={ref}>{shown}</span>;
}

export default function Slide4_Innovation() {
  /**
   * Only figures that can be checked against something.
   *
   * The product count comes from content/products.ts and the founding year
   * from content/company.ts, so neither can drift from what the rest of the
   * site says. "100% Privacy Commitment" and "∞ Passion" are gone: a
   * percentage nobody can verify and a symbol standing in for enthusiasm are
   * not numbers, and putting them under a heading that says "By The Numbers"
   * made the two real figures look like decoration too.
   */
  const stats = [
    {
      value: String(PRODUCTS.length),
      label: 'Products built and in development',
      gradClass: 'g-files',
    },
    {
      value: String(COMPANY.foundedYear),
      label: `Year ${COMPANY.brandName} was founded`,
      gradClass: 'g-smaran',
    },
    {
      value: String(AVAILABLE_PRODUCTS.length),
      label: 'You can try today',
      gradClass: 'g-callmind',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.25em] g-text uppercase mb-4 text-center">
            By The Numbers
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0F1E] text-center leading-none mb-16 sm:mb-20">
            Where <span className="shimmer-text">{COMPANY.brandName}</span> stands.
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
                <div className="font-sans text-sm text-slate-600 font-medium tracking-wide mt-3 max-w-[200px] mx-auto leading-relaxed">
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
          <p className="font-sans font-normal italic text-lg sm:text-xl md:text-2xl text-slate-600 text-center mt-16 sm:mt-20 max-w-[550px] leading-relaxed">
            Small numbers, honestly counted. They will be bigger next year.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
