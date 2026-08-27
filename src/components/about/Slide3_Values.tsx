import React from 'react';
import { ShieldCheck, Target, Heart, Sparkles, type LucideIcon } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface ValueItem {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  glow: string;
}

export default function Slide3_Values() {
  const values: ValueItem[] = [
    {
      icon: ShieldCheck,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Privacy First',
      description: 'We design privacy right into the code. Sensitive data auto-purges, vaults use biometric protection, and files are encrypted locally. Zero analytics tracking.',
      bgColor: 'bg-[#4285F4]/[0.03]',
      borderColor: 'border-[#4285F4]/15',
      glow: 'hover:shadow-[0_16px_40px_rgba(66,133,244,0.12)]',
    },
    {
      icon: Target,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Built for Real People',
      description: 'We develop apps for real-world scenarios. We build for the elder managing prescriptions, the student organizing classes, or the solo salesperson tracking leads.',
      bgColor: 'bg-[#7C3AED]/[0.03]',
      borderColor: 'border-[#7C3AED]/15',
      glow: 'hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)]',
    },
    {
      icon: Heart,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-500/10 border-orange-500/20',
      title: 'Proudly Indian',
      description: 'Handcrafted from rural Maharashtra, demonstrating that technical expertise, world-class design, and premium software can emerge from any corner of India.',
      bgColor: 'bg-[#F97316]/[0.03]',
      borderColor: 'border-[#F97316]/15',
      glow: 'hover:shadow-[0_16px_40px_rgba(249,115,22,0.12)]',
    },
    {
      icon: Sparkles,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      title: 'Relentless Quality',
      description: 'We refuse to compromise. We obsessed over fast launch times, responsive touch feedbacks, modern layouts, and codebases built to stand the test of time.',
      bgColor: 'bg-[#10B981]/[0.03]',
      borderColor: 'border-[#10B981]/15',
      glow: 'hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]',
    },
  ];

  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              What We <span className="shimmer-text">Stand For</span>
            </h2>
          </FadeIn>
        </div>

        {/* 4 VALUE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.12} y={35} className="w-full">
                <div 
                  className={`rounded-[28px] p-8 sm:p-10 border ${val.bgColor} ${val.borderColor} ${val.glow} hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-start text-left group`}
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${val.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                    <IconComp className={`w-7 h-7 ${val.iconColor}`} />
                  </div>
                  <h3 className="font-clash font-semibold text-xl sm:text-2xl text-[#0A0F1E] mb-3">
                    {val.title}
                  </h3>
                  <p className="font-sans font-normal text-sm sm:text-base text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
