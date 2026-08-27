import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';
import {
  MessageSquare,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  PhoneCall,
  Clock,
  Sparkles
} from 'lucide-react';

export default function Slide4_TechStack() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Requirement Consultation',
      marathiTitle: 'गरज व कामाचे स्वरूप समजून घेणे',
      desc: 'We discuss your business model, current manual bottlenecks, and required features to design the exact software architecture you need.',
      icon: MessageSquare,
      accent: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200/80',
      pill: 'Free Consultation',
    },
    {
      num: '02',
      title: 'UI/UX Design & Interactive Prototype',
      marathiTitle: 'डिझाइन व लाइव्ह प्रिव्ह्यू',
      desc: 'You see exactly how the mobile app or website looks and feels before a single line of production code is written.',
      icon: Palette,
      accent: 'text-purple-600',
      bg: 'bg-purple-50 border-purple-200/80',
      pill: 'Visual Approval',
    },
    {
      num: '03',
      title: 'Clean Engineering & Quality Testing',
      marathiTitle: 'कोडिंग व प्रत्यक्ष टेस्टिंग',
      desc: 'We build your system with sub-second page speeds, secure databases, offline reliability, and automated alerts.',
      icon: Code2,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200/80',
      pill: 'Bug-Free Code',
    },
    {
      num: '04',
      title: 'Deployment, Training & Full Handover',
      marathiTitle: 'लाँच व पूर्ण कोड हँडओव्हर',
      desc: 'Live rollout on your domain, staff walkthrough session, and 100% intellectual property & source code transfer.',
      icon: Rocket,
      accent: 'text-orange-600',
      bg: 'bg-orange-50 border-orange-200/80',
      pill: '100% Code Ownership',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.25em] g-text uppercase mb-4 text-center">
            How We Deliver Your Projects
          </div>
        </FadeIn>

        {/* HEADING */}
        <div className="text-center mb-14">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-tight">
              Our 4-Step <span className="shimmer-text">Client Journey</span>
            </h2>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Transparent development milestones with zero technical confusion. We handle everything from design to final launch.
            </p>
          </FadeIn>
        </div>

        {/* 4-STEP CLIENT CARDS (2x2 GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <FadeIn key={step.num} delay={idx * 0.1 + 0.15} y={25}>
                <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.bg}`}>
                        <IconComp size={22} className={step.accent} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[11px] font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                          {step.pill}
                        </span>
                        <span className="font-clash font-bold text-xl text-slate-300">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-clash font-bold text-xl text-[#0A0F1E] mb-1">
                      {step.title}
                    </h3>
                    <span className="font-sans font-medium text-xs text-blue-600 block mb-3">
                      {step.marathiTitle}
                    </span>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* TRUST BANNER */}
        <FadeIn delay={0.4} y={20} className="w-full max-w-4xl">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <ShieldCheck size={18} />
                <span className="font-sans font-bold text-xs uppercase tracking-wider">Our Studio Guarantee</span>
              </div>
              <h4 className="font-clash font-bold text-lg sm:text-xl text-[#0A0F1E]">
                100% Source Code Ownership & No Hidden Fees
              </h4>
              <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                You own your complete software and database. No locked platforms, no surprise recurring vendor charges.
              </p>
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white px-7 py-3 font-sans font-semibold text-xs sm:text-sm flex-shrink-0 transition-colors shadow-2xs active:scale-98"
            >
              Discuss Your Project →
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
