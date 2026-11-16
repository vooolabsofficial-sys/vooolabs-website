import React from 'react';
import { ShieldCheck, Cloud, Key, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const VALUES = [
  {
    icon: Cloud,
    title: 'Domain, DNS & 24/7 Hosting Included',
    description: 'Complete cloud infrastructure with automated SSL and edge performance.',
    badge: 'Zero Setup Hassle',
    accent: '#3B82F6',
  },
  {
    icon: Key,
    title: '₹0 Monthly Software Rent',
    description: 'No recurring per-user seat fees or surprise licensing lock-ins.',
    badge: 'Permanent Equity',
    accent: '#10B981',
  },
  {
    icon: ShieldCheck,
    title: '100% Source Code Ownership',
    description: 'Full intellectual property and GitHub repository transfer on day one.',
    badge: 'Total Control',
    accent: '#8B5CF6',
  },
];

export default function Slide2_ValueStrip() {
  return (
    <section 
      className="bg-[#F8F9FC] py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Core Engineering Standards"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER: UNDER 8 WORDS */}
        <div className="text-center mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              ENGINEERING ASSURANCE
            </span>
            <h2 className="font-anton text-2xl sm:text-4xl text-slate-900 tracking-wide leading-tight uppercase">
              Built for Reliability. Zero Vendor Rent.
            </h2>
          </FadeIn>
        </div>

        {/* FULL-WIDTH 3-POINT HORIZONTAL BAND (NOT GENERIC CARDS) */}
        <FadeIn delay={0.1} y={20}>
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs divide-y md:divide-y-0 md:divide-x divide-slate-200/80 grid grid-cols-1 md:grid-cols-3">
            {VALUES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    <span>Guaranteed deliverable standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
