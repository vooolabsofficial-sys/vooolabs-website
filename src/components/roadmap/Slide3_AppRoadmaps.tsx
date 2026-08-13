import React from 'react';
import { Folder, Brain, Phone, CheckCircle2, Circle, HelpCircle } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_AppRoadmaps() {
  const milestoneList = [
    {
      app: 'VOOO Files',
      icon: <Folder size={20} className="text-blue-500" />,
      themeColor: 'border-[#4285F4]/15 bg-[#4285F4]/[0.03]',
      items: [
        { status: 'done', label: 'Core file browsing' },
        { status: 'done', label: 'Media player integrations' },
        { status: 'progress', label: 'Biometric vault' },
        { status: 'planning', label: 'Archive encryption' },
        { status: 'future', label: 'AI file suggestions' },
        { status: 'future', label: 'Cloud backup sync' },
      ],
    },
    {
      app: 'SMARAN AI',
      icon: <Brain size={20} className="text-purple-500" />,
      themeColor: 'border-[#7C3AED]/15 bg-[#7C3AED]/[0.03]',
      items: [
        { status: 'done', label: 'Concept & specifications' },
        { status: 'progress', label: 'Core architecture design' },
        { status: 'planning', label: 'Exact alarm background engine' },
        { status: 'future', label: 'Family Circle sync' },
        { status: 'future', label: 'Location reminders' },
        { status: 'future', label: 'Gemini assistant integration' },
      ],
    },
    {
      app: 'CallMind',
      icon: <Phone size={20} className="text-emerald-500" />,
      themeColor: 'border-[#10B981]/15 bg-[#10B981]/[0.03]',
      items: [
        { status: 'done', label: 'Dashboard visual UI' },
        { status: 'done', label: 'Lead status pipeline manager' },
        { status: 'progress', label: 'AI caller insights' },
        { status: 'planning', label: 'Official WhatsApp API connector' },
        { status: 'future', label: 'Cross-platform mobile apps' },
        { status: 'future', label: 'Enterprise multi-agent support' },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />;
      case 'progress':
        return <Circle size={16} className="text-amber-500 fill-amber-500/20 flex-shrink-0 mt-0.5 animate-pulse" />;
      case 'planning':
        return <Circle size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />;
      case 'future':
      default:
        return <HelpCircle size={16} className="text-slate-300 flex-shrink-0 mt-0.5" />;
    }
  };

  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              App <span className="shimmer-text">Milestones</span>
            </h2>
          </FadeIn>
        </div>

        {/* 3 APP CHECKLISTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          {milestoneList.map((list, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} y={35} className="w-full">
              <div 
                className={`rounded-[28px] p-8 border ${list.themeColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs">
                    {list.icon}
                  </div>
                  <h3 className="font-clash font-bold text-xl text-[#0A0F1E]">
                    {list.app}
                  </h3>
                </div>

                {/* Milestones list */}
                <ul className="flex flex-col gap-4 w-full">
                  {list.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-left items-start">
                      {getStatusIcon(item.status)}
                      <span className={`font-kanit text-sm sm:text-base leading-tight ${
                        item.status === 'done' ? 'text-slate-400 line-through font-light' : 'text-slate-700 font-normal'
                      }`}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
