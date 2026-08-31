import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, HeartHandshake, Zap, MessageSquare } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const GUIDANCE_POINTS = [
  {
    icon: Compass,
    title: 'Honest Consultation First',
    description: 'Not every business needs expensive software. We help you choose the simplest, most cost-effective digital tool for your specific goal.',
    accent: '#3B82F6',
  },
  {
    icon: Sparkles,
    title: 'Custom-Built For Your Workflow',
    description: 'We do not use bloated templates. Every website, software tool, or app is custom-coded to fit exactly how your business operates.',
    accent: '#8B5CF6',
  },
  {
    icon: ShieldCheck,
    title: '100% Full Ownership',
    description: 'You own your domain, your source code, and your data with zero vendor lock-in or surprise recurring agency fees.',
    accent: '#10B981',
  },
  {
    icon: HeartHandshake,
    title: 'Direct Engineer Support',
    description: 'No account managers or confusing middlemen. You communicate directly with the engineers building your solution.',
    accent: '#F59E0B',
  },
];

export default function Slide3_Guidance() {
  return (
    <section 
      className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 sm:py-24 select-none relative"
      aria-label="How We Help Businesses — Honest Digital Guidance"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-center">
            How We Work With You
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Honest Guidance. <span className="shimmer-text">Built for Real Growth.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-xl mx-auto mb-12 sm:mb-14 leading-relaxed">
            We guide you through every step of going digital — from picking the right tech to launching your live system.
          </p>
        </FadeIn>

        {/* 4 CLEAN GUIDANCE CARDS (SIMPLE, OPEN, SPACIOUS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full mb-10">
          {GUIDANCE_POINTS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full flex">
                <div className="w-full rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 sm:p-7 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 className="font-clash font-bold text-xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM ACTION ROW */}
        <FadeIn delay={0.35} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white bg-[#0A0F1E] hover:bg-blue-600 px-7 py-3 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={16} />
              <span>Discuss Your Project</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-slate-400 bg-white px-7 py-3 rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
