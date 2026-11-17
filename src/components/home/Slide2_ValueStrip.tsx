import React from 'react';
import { Server, Key, Code2, SlidersHorizontal } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const DIFFERENTIATORS = [
  {
    icon: Server,
    title: 'End-to-End Launch Setup',
    description: 'Domain registration, DNS routing, SSL, and 24/7 cloud hosting configured completely before handover.',
    accent: '#4285F4',
  },
  {
    icon: Key,
    title: 'One-Time Build, ₹0 Per-User Rent',
    description: 'Unlike off-the-shelf software charging per staff seat every month, your custom system runs with zero recurring license fees.',
    accent: '#10B981',
  },
  {
    icon: Code2,
    title: 'Full Repository & Data Handover',
    description: 'Complete source code transferred directly to your own GitHub and cloud accounts—zero vendor lock-in.',
    accent: '#7C3AED',
  },
  {
    icon: SlidersHorizontal,
    title: 'Tailored for Real Operations',
    description: 'Direct WhatsApp lead routing, custom GST billing, and AI-ready search structure built specifically for how you work.',
    accent: '#F97316',
  },
];

export default function Slide2_ValueStrip() {
  return (
    <section 
      className="bg-[#F8F9FC] py-16 sm:py-20 px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Why Businesses Switch to VOOO LABS"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              WHY BUSINESSES SWITCH TO VOOO LABS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-snug">
              Built Around Your Workflow. Owned by You.
            </h2>
          </FadeIn>
        </div>

        {/* 4 CLEAN COLUMNS (1PX DIVIDERS, ZERO NESTED BOXES) */}
        <FadeIn delay={0.1} y={20}>
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 sm:p-7 flex flex-col justify-start text-left">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mb-4"
                    style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                  >
                    <IconComp size={20} />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
