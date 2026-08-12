import React from 'react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_Values() {
  const values = [
    {
      emoji: '🔒',
      title: 'Privacy First',
      description: 'We design privacy right into the code. Sensitive data auto-purges, vaults use biometric protection, and files are encrypted locally. Zero analytics tracking.',
      bgColor: 'bg-[#4285F4]/[0.04]',
      borderColor: 'border-[#4285F4]/10',
    },
    {
      emoji: '🎯',
      title: 'Built for Real People',
      description: 'We develop apps for real-world scenarios. We build for the elder managing prescriptions, the student organizing classes, or the solo salesperson tracking leads.',
      bgColor: 'bg-[#7C3AED]/[0.04]',
      borderColor: 'border-[#7C3AED]/10',
    },
    {
      emoji: '🇮🇳',
      title: 'Proudly Indian',
      description: 'Handcrafted from rural Maharashtra, demonstrating that technical expertise, world-class design, and premium software can emerge from any corner of India.',
      bgColor: 'bg-[#F97316]/[0.04]',
      borderColor: 'border-[#F97316]/10',
    },
    {
      emoji: '♾️',
      title: 'Relentless Quality',
      description: 'We refuse to compromise. We obsessed over fast launch times, responsive touch feedbacks, modern layouts, and codebases built to stand the test of time.',
      bgColor: 'bg-[#10B981]/[0.04]',
      borderColor: 'border-[#10B981]/10',
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
          {values.map((val, idx) => (
            <FadeIn key={idx} delay={idx * 0.12} y={35} className="w-full">
              <div 
                className={`rounded-[28px] p-8 sm:p-10 border ${val.bgColor} ${val.borderColor} hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-start text-left`}
              >
                <span className="text-[3rem] leading-none mb-6 select-none">{val.emoji}</span>
                <h3 className="font-clash font-semibold text-xl sm:text-2xl text-[#0A0F1E] mb-3">
                  {val.title}
                </h3>
                <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
