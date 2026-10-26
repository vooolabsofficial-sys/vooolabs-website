import React from 'react';
import { ShieldCheck, Target, Heart, Sparkles, Zap, Code2, MessageSquare, Award } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_Values() {
  const values = [
    {
      num: '01',
      title: 'Performance First Architecture',
      desc: 'We refuse to use heavy template builders. Every interface is handcrafted with pure React 19 and typed code, maintaining sub-0.4s load speeds.',
      icon: Zap,
      accentText: 'text-blue-600',
      accentBg: 'bg-blue-50/80',
      accentBorder: 'border-blue-200/60',
      metric: '0.38s Load Time',
    },
    {
      num: '02',
      title: '100% Source Code Ownership',
      desc: 'You own every line of code, database schema, and design asset. Full GitHub repository handover on day 1 with zero monthly platform lock-ins.',
      icon: ShieldCheck,
      accentText: 'text-purple-600',
      accentBg: 'bg-purple-50/80',
      accentBorder: 'border-purple-200/60',
      metric: '100% Client IP',
    },
    {
      num: '03',
      title: 'Direct Lead Generation',
      desc: 'We engineer websites to solve real business challenges — routing inquiries directly to your WhatsApp and phone with zero friction.',
      icon: MessageSquare,
      accentText: 'text-emerald-600',
      accentBg: 'bg-emerald-50/80',
      accentBorder: 'border-emerald-200/60',
      metric: '1-Tap Routing',
    },
    {
      num: '04',
      title: 'Proudly Built in Maharashtra',
      desc: 'Demonstrating that world-class software engineering, cutting-edge design, and reliable technology can emerge straight from Maharashtra, India.',
      icon: Award,
      accentText: 'text-orange-600',
      accentBg: 'bg-orange-50/80',
      accentBorder: 'border-orange-200/60',
      metric: 'Global Standard',
    },
  ];

  return (
    <section className="bg-[#F6F7FB] py-16 sm:py-20 px-4 sm:px-6 select-none antialiased border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2">
              ENGINEERING FOUNDATION
            </span>
            <h2 className="font-clash font-semibold text-2xl sm:text-4xl text-slate-800 mb-2">
              Our 4 Core Studio Pillars
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
              The fundamental engineering values that guide every product, website, and app we build.
            </p>
          </FadeIn>
        </div>

        {/* 4 DRIBBLE-STYLE PILLAR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {values.map((v, idx) => {
            const VIcon = v.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.05} y={15}>
                <div className="h-full p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentText}`}>
                        <VIcon size={17} />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-slate-400">
                        {v.num}
                      </span>
                    </div>

                    <h3 className="font-sans font-semibold text-base text-slate-800 mb-2">
                      {v.title}
                    </h3>

                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal mb-5">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">Standard</span>
                    <span className={`text-xs font-semibold ${v.accentText}`}>
                      {v.metric}
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
