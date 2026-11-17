import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Operational Discovery',
    desc: 'We map your exact workflow, friction points, and goals before writing a line of code.',
  },
  {
    num: '02',
    title: 'Transparent Scope & Proposal',
    desc: 'Clear deliverables, architecture, and investment finalized upfront with zero hidden clauses.',
  },
  {
    num: '03',
    title: 'Iterative Build & Live Previews',
    desc: 'Review real working staging builds and test core flows at every delivery milestone.',
  },
  {
    num: '04',
    title: 'Launch & 100% Ownership',
    desc: 'Full production deployment, team walkthrough, and complete repository and account handover.',
  },
];

export default function ServicesDeliveryRail() {
  return (
    <section 
      className="bg-[#FAFAFA] border-t border-slate-200/80 py-20 px-6 select-none"
      aria-label="How VOOO LABS Delivers Projects"
    >
      <div className="max-w-6xl mx-auto text-left">
        
        {/* HEADER */}
        <div>
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            HOW WE DELIVER
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            A Clear, Grounded Process from First Scope to Launch.
          </h2>
        </div>

        {/* 4 OPEN COLUMNS (DIVIDE-X ON DESKTOP, DIVIDE-Y ON MOBILE, ZERO BOX CARDS) */}
        <div className="mt-10 border-y border-slate-200/80 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 grid grid-cols-1 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.num} className="py-8 md:px-6 lg:px-8 flex flex-col justify-start">
              <span className="font-mono text-xs font-bold text-blue-600 mb-3 tracking-wider">
                {step.num}
              </span>
              <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
