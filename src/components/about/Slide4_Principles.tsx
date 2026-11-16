import React from 'react';
import { Sparkles, Zap, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const PRINCIPLES = [
  {
    num: '01',
    title: 'First Make It Work, Then Make It Beautiful',
    summary: 'We engineer robust architecture, clean databases, and rock-solid logic before applying aesthetic polish.',
    icon: Sparkles,
    accent: '#3B82F6',
    deliverable: 'Zero bloated templates',
  },
  {
    num: '02',
    title: 'Speed Is A Non-Negotiable Core Feature',
    summary: 'Sub-0.4s instant page loads on mobile networks. If a site is slow, visitors leave before they read your offer.',
    icon: Zap,
    accent: '#8B5CF6',
    deliverable: 'Sub-second mobile speed',
  },
  {
    num: '03',
    title: 'Software Is Owned, Never Rented',
    summary: 'Replace endless monthly SaaS subscriptions with custom software built specifically for your business workflow.',
    icon: ShieldCheck,
    accent: '#10B981',
    deliverable: '₹0 monthly seat licensing',
  },
  {
    num: '04',
    title: 'Direct Lead Architect Access',
    summary: 'No commission-hungry salespeople or junior handoffs. You work directly with the lead engineer writing your code.',
    icon: HeartHandshake,
    accent: '#F59E0B',
    deliverable: 'Direct founder accountability',
  },
];

export default function Slide4_Principles() {
  return (
    <section 
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none border-b border-zinc-200 relative overflow-hidden"
      aria-label="Studio Engineering Principles"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              STUDIO PHILOSOPHY
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-zinc-950 tracking-wide leading-tight uppercase">
              Our 4 Engineering Principles
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-lg mx-auto mt-3 font-normal leading-relaxed">
              Inspired by Google's philosophy: clear, uncompromising rules that govern every line of code we write.
            </p>
          </FadeIn>
        </div>

        {/* 4 PRINCIPLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {PRINCIPLES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 h-full flex flex-col justify-between hover:border-zinc-300 hover:shadow-sm transition-all duration-200 group">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                      <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
                        {item.num} / PRINCIPLE
                      </span>
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3 className="font-anton text-xl sm:text-2xl text-zinc-950 uppercase tracking-wide mb-2.5 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700">
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
