import React from 'react';
import { Globe, Smartphone, Users, Layers, type LucideIcon } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface VisionItem {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
}

export default function Slide4_Vision2030() {
  const visions: VisionItem[] = [
    {
      icon: Globe,
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Global Reach',
      description: 'Apps used in 50+ countries. VOOO LABS recognized globally as a benchmark for indie design and engineering.',
    },
    {
      icon: Smartphone,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: '10+ Apps',
      description: 'A portfolio of 10+ highly specialized micro-utility applications across Android platforms and the web.',
    },
    {
      icon: Users,
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      title: '1M+ Users',
      description: 'One million active users whose daily routines and productivity are enriched by software crafted at VOOO LABS.',
    },
    {
      icon: Layers,
      iconColor: 'text-orange-400',
      iconBg: 'bg-orange-500/10 border-orange-500/20',
      title: 'VOOO Platform',
      description: 'A unified platform connecting all VOOO LABS products together, powered by local encryption and family synchronization.',
    },
  ];

  return (
    <section className="snap-section bg-[#0A0F1E] noise flex flex-col justify-center items-center px-6 py-24 text-center relative overflow-hidden select-none">
      
      {/* SHADOW & BLOBS */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-radial from-purple-500/8 to-transparent blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* HEADINGS */}
        <div className="mb-16">
          <FadeIn delay={0} y={35}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4 text-white">
              VOOO LABS <br />
              <span className="shimmer-text">Vision 2030</span>
            </h2>
            <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-300 mt-4 max-w-md mx-auto">
              Where we're headed in the next 5 years.
            </p>
          </FadeIn>
        </div>

        {/* 4 VISION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
          {visions.map((vision, idx) => {
            const IconComp = vision.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.12} y={30} className="w-full">
                <div 
                  className="rounded-3xl bg-white/[0.04] border border-white/[0.1] p-8 sm:p-10 backdrop-blur-md hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${vision.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <IconComp className={`w-7 h-7 ${vision.iconColor}`} />
                  </div>
                  <h3 className="font-clash font-semibold text-xl text-white mb-3">
                    {vision.title}
                  </h3>
                  <p className="font-kanit font-light text-sm sm:text-base text-slate-300 leading-relaxed">
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
