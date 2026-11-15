import React from 'react';
import { Search, Compass, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface ProcessStep {
  step: string;
  badge: string;
  title: string;
  role: string;
  description: string;
  deliverable: string;
  icon: typeof Search;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    badge: 'DISCOVERY',
    title: 'Understand Your Work',
    role: 'Workflow & Operations Review',
    description:
      'We examine your daily business operations, customer touchpoints, and operational bottlenecks before writing a single line of code.',
    deliverable: 'Clear Scope & Requirements Document',
    icon: Search,
  },
  {
    step: '02',
    badge: 'ARCHITECTURE',
    title: 'Honest Plan & Timeline',
    role: 'Fixed Milestones & Transparent Cost',
    description:
      'Deterministic delivery milestones, all-inclusive pricing, and a realistic schedule with zero hidden fees or false timeline promises.',
    deliverable: 'All-Inclusive Quote & Delivery Roadmap',
    icon: Compass,
  },
  {
    step: '03',
    badge: 'ENGINEERING',
    title: 'Live Build Preview',
    role: 'Weekly Working Milestones',
    description:
      'Transparent weekly review sessions where you interact with the working website, web app, or software on your own smartphone and PC.',
    deliverable: 'Private Staging Link & Interactive Testing',
    icon: Eye,
  },
  {
    step: '04',
    badge: 'HANDOVER',
    title: 'Launch & 100% Ownership',
    role: 'Deployment & Full Client IP',
    description:
      'Complete domain setup, DNS configuration, 24/7 cloud hosting, SSL, and 100% source code, database, and asset handover.',
    deliverable: 'Domain, Hosting, SSL & Full Source Code',
    icon: ShieldCheck,
  },
];

export default function Slide4_TechStack() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-10 border-b border-zinc-200">
          <div>
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                HOW WE DELIVER • 4-STEP ENGINEERING PROCESS
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl text-zinc-950 tracking-tight">
                Predictable, Step-by-Step Delivery
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-md">
            <FadeIn delay={0.08} y={15}>
              <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                From initial consultation to final production handover—every project follows a transparent engineering rail with zero middlemen and zero confusion.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* CONNECTED 4-STEP PROCESS RAIL */}
        <div className="relative">
          
          {/* HORIZONTAL CONNECTING RAIL (DESKTOP) */}
          <div 
            className="hidden lg:block absolute top-[28px] left-[60px] right-[60px] h-[1px] bg-zinc-200 z-0" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <FadeIn key={step.step} delay={idx * 0.08} y={20} className="w-full">
                  <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between h-full hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200 group">
                    <div>
                      {/* STEP NUMBER & ICON RAIL HEAD */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-mono text-xs font-bold text-zinc-900 shadow-2xs group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200">
                          {step.step}
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-600">
                          {step.badge}
                        </span>
                      </div>

                      {/* TITLE & ROLE */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <IconComp size={16} className="text-zinc-700" />
                        <h3 className="font-sans font-bold text-lg text-zinc-950">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-mono text-[11px] text-zinc-500 mb-3">
                        {step.role}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* DELIVERABLE SPEC BADGE */}
                    <div className="pt-4 border-t border-zinc-200 flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        Tangible Deliverable
                      </span>
                      <div className="flex items-center gap-1.5 text-zinc-800">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span className="font-sans text-xs font-medium leading-tight">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>

        {/* BOTTOM METRIC RAIL */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <p className="font-sans text-xs text-zinc-700">
              <strong className="font-semibold text-zinc-900">100% Client Ownership Guarantee:</strong> You receive complete administrative access, hosting credentials, DNS control, and repository handover.
            </p>
          </div>
          <span className="font-mono text-[11px] font-semibold text-zinc-700 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg flex-shrink-0">
            NO SUBSCRIPTIONS • ZERO LOCK-IN
          </span>
        </div>

      </div>
    </section>
  );
}
