import React from 'react';
import { ShieldCheck, Zap, Layers, Users } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide2_Story() {
  const comparisons = [
    {
      metric: 'Speed & Responsiveness',
      traditional: '4 to 8 second load times on mobile due to bloated themes and 30+ unmaintained third-party plugins.',
      vooolabs: 'Sub-0.4 second instant loads engineered with pure, compiled web code on high-speed global Edge CDNs.',
    },
    {
      metric: 'Code & Data Ownership',
      traditional: 'Proprietary platform lock-ins, hidden per-seat licensing, and monthly hostage maintenance fees.',
      vooolabs: '100% intellectual property ownership with full GitHub repository transfer upon final milestone delivery.',
    },
    {
      metric: 'Lead & Sales Capture',
      traditional: 'Passive email forms that get buried in spam folders and lose 70% of potential client inquiries.',
      vooolabs: 'Direct 1-tap WhatsApp lead funnels and automated alerts that reach your team in under 2 seconds.',
    },
    {
      metric: 'Communication & Delivery',
      traditional: 'Non-technical account managers who misinterpret requirements and outsource development.',
      vooolabs: 'Direct collaboration with our lead software architect with live staging previews every week.',
    },
  ];

  return (
    <section className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* EDITORIAL SWISS HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-slate-200/80">
          <div className="lg:col-span-5">
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                ORIGIN & MANIFESTO
              </span>
              <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 leading-[1.08]">
                Why We Built <br />
                <span className="shimmer-text font-bold">VOOO LABS.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <FadeIn delay={0.08} y={15}>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Modern businesses require web software that loads instantly, operates without crashes, and delivers measurable commercial outcomes. Yet, most traditional web agencies continue reselling bloated templates that fail to convert visitors or solve internal operational headaches.
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We founded <strong>VOOO LABS</strong> in Maharashtra to offer a disciplined engineering alternative: <strong>deterministic milestones, sub-second execution speeds, automated WhatsApp lead funnels, and uncompromised client source code ownership.</strong>
              </p>
            </FadeIn>
          </div>
        </div>

        {/* COMPARATIVE SWISS GRID */}
        <FadeIn delay={0.16} y={20}>
          <div className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8 border-b border-slate-200/80 bg-[#FAFAFD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  ARCHITECTURAL BENCHMARK
                </span>
                <h3 className="font-clash font-semibold text-xl sm:text-2xl text-slate-900">
                  Generic Agencies vs. VOOO LABS Engineering
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full self-start sm:self-auto font-medium">
                <ShieldCheck size={14} />
                <span>Deterministic Standard</span>
              </div>
            </div>

            <div className="divide-y divide-slate-200/80">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 hover:bg-slate-50/60 transition-colors duration-200 gap-4 items-center"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Standard 0{idx + 1}
                    </span>
                    <h4 className="font-clash font-semibold text-base sm:text-lg text-slate-900">
                      {item.metric}
                    </h4>
                  </div>

                  <div className="md:col-span-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rose-700 font-bold block mb-1.5">
                      Generic Agency Template
                    </span>
                    <span className="font-sans leading-relaxed">{item.traditional}</span>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
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
