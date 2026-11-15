import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide2_Story() {
  const comparisons = [
    {
      metric: 'Speed & Mobile Conversion',
      traditional: 'Slow 4 to 8 second mobile load times caused by unmaintained WordPress themes, bloated visual builders, and dozens of third-party plugins.',
      vooolabs: 'Instant mobile page loads engineered with clean, modern web standards and high-speed cloud hosting across India.',
    },
    {
      metric: 'Source Code & Data Ownership',
      traditional: 'Proprietary platform locks, forced monthly per-seat licensing fees, and refusal to grant database access or export source code.',
      vooolabs: '100% intellectual property ownership. You receive full domain control, hosting access, and full repository handover with zero vendor locks.',
    },
    {
      metric: 'Lead & Inquiry Funnels',
      traditional: 'Passive email forms that get buried in spam folders while interested customers give up and contact competing businesses.',
      vooolabs: 'Direct 1-tap WhatsApp lead funnels and phone calling buttons that deliver high-intent customer inquiries directly to your team.',
    },
    {
      metric: 'Technical Leadership',
      traditional: 'Polished sales representatives who promise features they cannot build, then hand your project off to junior contractors.',
      vooolabs: 'Direct collaboration with our lead software architect with weekly working staging previews on your smartphone and PC.',
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* EDITORIAL HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-zinc-200">
          <div className="lg:col-span-5 text-left">
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                ORIGIN & STUDIO ETHOS
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl text-zinc-950 leading-[1.08] tracking-tight">
                Why We Built <br />
                VOOO LABS.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-4 text-left">
            <FadeIn delay={0.08} y={15}>
              <p className="font-sans text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Growing businesses in Maharashtra and across India need web platforms and operational software that load instantly, handle real volume without breaking, and turn website traffic into paying clients.
              </p>
              <p className="font-sans text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Yet most agencies continue selling fragile, pre-made website templates that break after six months and leave clients locked out of their own systems. We founded <strong>VOOO LABS</strong> to provide a disciplined engineering alternative: <strong>honest planning, instant loading speed, automated WhatsApp leads, and 100% client code and hosting ownership.</strong>
              </p>
            </FadeIn>
          </div>
        </div>

        {/* COMPARATIVE GRID */}
        <FadeIn delay={0.16} y={20}>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-2xs">
            <div className="p-6 sm:p-8 border-b border-zinc-200 bg-zinc-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-left">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                  INDUSTRY BENCHMARK
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-zinc-950">
                  Generic Agency Templates vs. VOOO LABS Engineering
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-lg self-start sm:self-auto font-medium">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Deterministic Standard</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-200 text-left">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 hover:bg-zinc-50/70 transition-colors duration-150 gap-4 items-center"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                      Standard 0{idx + 1}
                    </span>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-zinc-950">
                      {item.metric}
                    </h4>
                  </div>

                  <div className="md:col-span-4 p-4 rounded-xl bg-zinc-100 border border-zinc-200 text-xs sm:text-sm text-zinc-700">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-bold block mb-1.5">
                      Generic Agency Template
                    </span>
                    <span className="font-sans leading-relaxed">{item.traditional}</span>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-xl bg-white border border-zinc-300 text-xs sm:text-sm text-zinc-950 shadow-2xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-bold block mb-1.5">
                      VOOO LABS Studio Standard
                    </span>
                    <span className="font-sans leading-relaxed font-medium">{item.vooolabs}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
