import React from 'react';
import { Zap, ShieldCheck, Globe, Clock } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_Values() {
  const pillars = [
    {
      num: '01',
      title: 'AI-Era Affordability, Professional Engineering',
      desc: 'In today’s AI era, custom websites and web applications that previously required months and lakhs of rupees are now practical and affordable for growing businesses—engineered cleanly with zero shortcuts.',
      icon: Zap,
      metric: 'Modern Craft',
      label: 'Core Standard',
    },
    {
      num: '02',
      title: 'All-Inclusive Launch',
      desc: 'Every project includes custom design, domain setup, DNS routing, 24/7 high-speed cloud hosting, SSL certificate, and direct WhatsApp and social integrations. Zero surprise invoices.',
      icon: Globe,
      metric: 'Turnkey Launch',
      label: 'Included Deliverable',
    },
    {
      num: '03',
      title: '100% Code & Data Ownership',
      desc: 'You hold full intellectual property rights to every line of code, database schema, and design asset. Zero per-user monthly SaaS subscription fees, zero vendor lock-in, full repository handover.',
      icon: ShieldCheck,
      metric: '100% Client IP',
      label: 'Autonomy Guarantee',
    },
    {
      num: '04',
      title: 'Honest Scoping & Timelines',
      desc: 'We study your exact business workflow and operational bottlenecks before quoting cost or delivery schedules. Transparent fixed milestones with zero false promises.',
      icon: Clock,
      metric: 'Deterministic Sprints',
      label: 'Delivery Model',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 px-6 sm:px-8 select-none antialiased border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-10 border-b border-zinc-200 text-left">
          <div>
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-zinc-950 leading-snug tracking-tight">
                Our 4 Studio Standards
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-md">
            <FadeIn delay={0.08} y={15}>
              <p className="font-sans text-base text-zinc-600 font-normal leading-relaxed">
                The non-negotiable engineering principles that govern every application, system architecture, and interface we build for our clients.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* 4 PILLARS IN SWISS EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div
                  className="rounded-2xl p-6 bg-zinc-50 border border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow-2xs transition-all duration-200 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
                      <span className="font-mono text-xs font-semibold text-zinc-400">
                        {pillar.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-800 shadow-2xs">
                        <IconComp size={16} />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-sans font-bold text-lg text-zinc-950 mb-3 tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* BOTTOM METRIC BADGE */}
                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-zinc-500">{pillar.label}</span>
                    <span className="font-semibold text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded-md">
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
