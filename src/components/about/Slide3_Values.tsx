import React from 'react';
import { Zap, ShieldCheck, MessageSquare, Compass } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_Values() {
  const pillars = [
    {
      num: '01',
      title: 'Zero Bloated Templates',
      desc: 'We refuse fragile website builders and unmaintained plugin stacks. Every interface is handcrafted with pure web code for sub-0.4s load times and zero crashes.',
      icon: Zap,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
      metric: '<0.4s Speed',
      label: 'Performance Standard',
    },
    {
      num: '02',
      title: '100% Client Code Ownership',
      desc: 'You hold full intellectual property rights to every line of code, database schema, and design asset. Full GitHub repository handover with zero vendor locks.',
      icon: ShieldCheck,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
      metric: '100% Client IP',
      label: 'Autonomy Guarantee',
    },
    {
      num: '03',
      title: 'Direct Lead Generation Funnels',
      desc: 'We build digital products to solve real commercial problems — routing incoming customer inquiries directly into your WhatsApp and CRM in under 2 seconds.',
      icon: MessageSquare,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-200',
      metric: 'Sub-2s Routing',
      label: 'Conversion Architecture',
    },
    {
      num: '04',
      title: 'Direct Architect Collaboration',
      desc: 'You work directly with the software architect designing and writing your codebase. No account executives, sales reps, or outsourced third-party teams.',
      icon: Compass,
      iconColor: 'text-amber-700',
      iconBg: 'bg-amber-50 border-amber-200',
      metric: 'Direct Access',
      label: 'Delivery Model',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-10 border-b border-slate-200/80">
          <div>
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 leading-tight">
                Our 4 Studio Principles
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-md">
            <FadeIn delay={0.08} y={15}>
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                The non-negotiable engineering principles that govern every application, system architecture, and interface we ship for our clients.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* 4 PILLARS IN SWISS EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div
                  className="rounded-3xl p-7 bg-[#FAFAFD] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {pillar.num}
                      </span>
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${pillar.iconBg} group-hover:scale-105 transition-transform duration-200`}>
                        <IconComp size={17} className={pillar.iconColor} />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-clash font-semibold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* BOTTOM METRIC BADGE */}
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-500">{pillar.label}</span>
                    <span className="font-semibold text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                      {pillar.metric}
                    </span>
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
