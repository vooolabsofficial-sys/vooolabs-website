import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { PRODUCTS, STATUS_META } from '../../content/products';

const COUNT_WORDS: Record<number, string> = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
};

const PILL_STYLES: Record<string, { emoji: string; border: string; shadow: string }> = {
  'vooo-files': {
    emoji: '📁',
    border: 'border-[#4285F4]/30 hover:border-[#4285F4]',
    shadow: 'hover:shadow-[0_12px_30px_rgba(66,133,244,0.2)]',
  },
  'smaran-ai': {
    emoji: '🧠',
    border: 'border-[#7C3AED]/30 hover:border-[#7C3AED]',
    shadow: 'hover:shadow-[0_12px_30px_rgba(124,58,237,0.2)]',
  },
  callmind: {
    emoji: '📞',
    border: 'border-[#10B981]/30 hover:border-[#10B981]',
    shadow: 'hover:shadow-[0_12px_30px_rgba(16,185,129,0.2)]',
  },
  workspace: {
    emoji: '🗂️',
    border: 'border-slate-300 hover:border-slate-400',
    shadow: 'hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]',
  },
};

export default function Slide1_ProductsHero() {
  // The heading used to read "Three Apps. One Vision." while this page listed
  // four, so the count comes from the product list now.
  const pills = PRODUCTS.map((product) => ({
    product,
    style: PILL_STYLES[product.id],
  }));

  return (
    <section id="products-top" className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 pt-28 text-center relative overflow-hidden select-none">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] animate-blob-1 pointer-events-none z-0" />
      <div className="absolute top-[-100px] right-[-200px] w-[500px] h-[500px] rounded-full bg-radial from-purple-500/8 to-transparent blur-[80px] animate-blob-2 pointer-events-none z-0" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-orange-500/6 to-transparent blur-[80px] animate-blob-3 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4">
            Our Products
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="font-clash text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0A0F1E] leading-none mb-6">
            {COUNT_WORDS[PRODUCTS.length] ?? PRODUCTS.length} Apps. <br className="sm:hidden" />
            <span className="shimmer-text">One Studio.</span>
          </h2>
        </FadeIn>

        {/* SUBTEXT */}
        <FadeIn delay={0.2} y={20}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Each app solves a distinct real-world problem — beautifully, privately, powerfully.
          </p>
        </FadeIn>

        {/* QUICK VIEW PILLS */}
        <FadeIn delay={0.3} y={15}>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {pills.map(({ product, style }) => (
              <a
                key={product.id}
                href={`#${product.slug}`}
                className={`rounded-full border-2 bg-white px-6 py-3 font-clash font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.04] flex items-center gap-2.5 ${style.border} ${style.shadow}`}
              >
                <span aria-hidden="true">{style.emoji}</span>
                <span className={product.gradientClass}>{product.name}</span>
                <span className="font-kanit font-medium text-[10px] text-slate-400 uppercase tracking-wide">
                  {STATUS_META[product.status].label}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="font-kanit text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-slate-400"
        />
      </div>

    </section>
  );
}
