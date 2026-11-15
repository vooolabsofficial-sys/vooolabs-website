import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, GitPullRequest, Laptop, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface CollaborationPillar {
  icon: typeof Calendar;
  iconColor: string;
  iconBg: string;
  title: string;
  desc: string;
  btnLabel: string;
  link: string;
}

export default function Slide5_OpenDev() {
  const pillars: CollaborationPillar[] = [
    {
      icon: Calendar,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
      title: 'Direct Architecture Call',
      desc: 'Discuss your product vision directly with our lead software architect — zero account managers or middlemen.',
      btnLabel: 'Book Architecture Call',
      link: '/contact',
    },
    {
      icon: GitPullRequest,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
      title: 'Deterministic Sprints',
      desc: 'Transparent milestones, clear weekly deliverables, and verifiable GitHub commit logs throughout every phase.',
      btnLabel: 'View Engagement Model',
      link: '/contact',
    },
    {
      icon: Laptop,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-200',
      title: 'Live Staging Previews',
      desc: 'Weekly deployed preview environments on global edge infrastructure so you test working software in real-time.',
      btnLabel: 'Start Your Project',
      link: '/contact',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 text-center select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest block mb-2">
              CLIENT-FIRST COLLABORATION
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Engineered With <span className="shimmer-text font-bold">Total Transparency</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              We eliminate agency uncertainty with structured weekly sprints, open repositories, and clear milestone deliverables.
            </p>
          </FadeIn>
        </div>

        {/* 3 COLLABORATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {pillars.map((col, idx) => {
            const IconComp = col.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div 
                  className="rounded-3xl p-7 sm:p-8 border border-slate-200/80 bg-[#FAFAFD] hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center group"
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${col.iconBg} group-hover:scale-105 transition-transform duration-200`}>
                    <IconComp className={`w-6 h-6 ${col.iconColor}`} />
                  </div>
                  
                  <h3 className="font-clash font-semibold text-xl text-slate-900 mb-3">
                    {col.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 flex-grow">
                    {col.desc}
                  </p>
                  
                  <Link
                    to={col.link}
                    className="rounded-full bg-slate-900 hover:bg-blue-600 text-white font-sans font-medium text-xs px-5 py-2.5 transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{col.btnLabel}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CONSULTATION CARD */}
        <FadeIn delay={0.25} y={15} className="w-full">
          <div className="rounded-3xl border border-slate-200/80 bg-[#FAFAFD] p-8 sm:p-10 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-blue-600 block mb-1">
                Zero Obligation Scoping
              </span>
              <h3 className="font-clash font-semibold text-2xl text-slate-900">
                Have an architecture or project requirement to review?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                We review technical specifications and provide detailed sprint breakdowns within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-sans font-medium text-xs hover:bg-blue-600 transition-colors flex-shrink-0 inline-flex items-center gap-2 shadow-sm"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
