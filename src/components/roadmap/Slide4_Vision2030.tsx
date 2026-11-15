import React from 'react';
import { Globe, Cpu, TrendingUp, Layers, type LucideIcon } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface VisionItem {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  glowHover: string;
  title: string;
  description: string;
}

export default function Slide4_Vision2030() {
  const visions: VisionItem[] = [
    {
      icon: Globe,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
      glowHover: 'hover:border-blue-300 hover:shadow-lg',
      title: 'Global Web Architecture Benchmark',
      description: 'Engineering bespoke web software, custom business portals, and cloud platforms for ambitious businesses across global markets.',
    },
    {
      icon: Cpu,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
      glowHover: 'hover:border-purple-300 hover:shadow-lg',
      title: 'Resilient Serverless Systems',
      description: 'Pioneering zero-maintenance serverless architectures with automated observability, fast edge caching, and scalable database schemas.',
    },
    {
      icon: TrendingUp,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-200',
      glowHover: 'hover:border-emerald-300 hover:shadow-lg',
      title: 'High-Impact Client Scalability',
      description: 'Architecting digital platforms engineered to handle millions of monthly transactions, inquiries, and user workflows with 99.9% uptime.',
    },
    {
      icon: Layers,
      iconColor: 'text-amber-700',
      iconBg: 'bg-amber-50 border-amber-200',
      glowHover: 'hover:border-amber-300 hover:shadow-lg',
      title: 'Open Engineering Standards',
      description: 'Publishing production-tested design tokens, performance recipes, and developer utilities that elevate the craft of software delivery.',
    },
  ];

  return (
    <section className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              LONG-TERM PERSPECTIVE
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Studio Engineering <span className="shimmer-text font-bold">Horizon</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              Where we are taking our engineering studio standards over the coming decade.
            </p>
          </FadeIn>
        </div>

        {/* 4 VISION CARDS IN EDITORIAL SWISS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visions.map((vision, idx) => {
            const IconComp = vision.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div 
                  className={`p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 h-full flex flex-col items-start text-left group hover:-translate-y-1 ${vision.glowHover}`}
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${vision.iconBg} group-hover:scale-105 transition-transform duration-200`}>
                    <IconComp className={`w-6 h-6 ${vision.iconColor}`} />
                  </div>
                  
                  <h3 className="font-clash font-semibold text-xl sm:text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {vision.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {vision.description}
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
