import React from 'react';
import { ArrowRight, Check, Code2, Zap, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide2_Story() {
  const highlights = [
    {
      title: 'The Problem with Generic Agencies',
      desc: 'Most traditional agencies sell bloated WordPress themes with 30+ unmaintained plugins. They load in 4 to 7 seconds, crash after updates, and trap founders into ongoing monthly hostage retainers.',
      icon: Zap,
      accent: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-200/60',
    },
    {
      title: 'Our Software Engineering Philosophy',
      desc: 'We write pure, typed React 19, TypeScript, and native mobile code. Our pages load in under 0.4 seconds, never crash from third-party plugin updates, and convert visitors directly into WhatsApp chats.',
      icon: Code2,
      accent: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200/60',
    },
  ];

  return (
    <section className="bg-[#F6F7FB] py-16 sm:py-20 px-4 sm:px-6 select-none antialiased border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: STORY NARRATIVE */}
          <div className="lg:col-span-6 text-left">
            <FadeIn delay={0} y={15}>
              <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                STUDIO ORIGIN & VISION
              </span>
              <h2 className="font-clash font-semibold text-2xl sm:text-4xl text-slate-800 leading-tight mb-4">
                Why We Built <br />
                <span className="shimmer-text font-bold">VOOO LABS.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                Indian businesses are modernizing faster than ever, but most web development agencies are still stuck in 2015 — charging excessive fees for slow, bloated templates that don't generate leads.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                VOOO LABS was founded to set a new standard: <strong>sub-second loading speeds, tailored operational software, direct 1-tap WhatsApp lead funnels, and 100% intellectual property handover.</strong>
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-xs font-semibold text-slate-800">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>The VOOO LABS Commitment</span>
                </div>
                <p className="font-sans text-xs text-slate-500 font-normal leading-relaxed">
                  Every product we deliver comes with full GitHub source code ownership, zero proprietary lock-in, and transparent milestone pricing.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: DRIBBLE-STYLE COMPARISON VISUAL */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((h, idx) => {
              const HIcon = h.icon;
              return (
                <FadeIn key={idx} delay={0.1 * idx} y={15}>
                  <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl ${h.bg} border flex items-center justify-center ${h.accent}`}>
                        <HIcon size={18} />
                      </div>
                      <h3 className="font-sans font-semibold text-base text-slate-800">
                        {h.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {h.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
