import React from 'react';
import { ArrowRight } from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';

export default function ServicesClosingBand() {
  return (
    <section 
      className="bg-[#0A0F1E] text-white py-20 px-6 relative overflow-hidden select-none border-t border-slate-800"
      aria-label="Start Your Technical Inquiry"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
        <div>
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            DIRECT ARCHITECT DISCOVERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] max-w-2xl text-white leading-tight">
            Not sure which system fits your business best? Let's map it out together.
          </h2>
        </div>

        <div className="shrink-0">
          <LiquidButton
            to="/contact"
            variant="primary"
            rounded="apple"
            size="md"
            className="font-medium text-sm group"
            ariaLabel="See what your project will cost"
          >
            <span>See what your project will cost</span>
            <ArrowRight 
              size={15} 
              className="ml-2 inline-block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" 
            />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
