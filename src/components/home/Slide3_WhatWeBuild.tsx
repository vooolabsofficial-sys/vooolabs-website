import React from 'react';
import { Link } from 'react-router-dom';
import { FolderLock, PhoneCall, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const FLAGSHIP_PRODUCTS = [
  {
    tag: 'Android App · Security',
    title: 'VOOO Files',
    description: 'A private, ultra-fast Android file manager with an encrypted biometric vault, auto-purge, and zero tracking.',
    status: 'Live on Google Play',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
    icon: FolderLock,
    accent: '#3B82F6',
    link: '/products/vooo-files',
  },
  {
    tag: 'Business Tool · CRM',
    title: 'CallMind',
    description: 'Smart call intelligence and customer management for business teams to capture leads and automate follow-ups.',
    status: 'Live Platform',
    statusColor: 'text-blue-700 bg-blue-50 border-blue-200/80',
    icon: PhoneCall,
    accent: '#8B5CF6',
    link: '/products/callmind',
  },
  {
    tag: 'AI Voice · Productivity',
    title: 'SMARAN AI',
    description: 'A context-aware voice memory assistant that transforms spoken thoughts into structured notes and action items.',
    status: 'Coming Soon · 2026',
    statusColor: 'text-purple-700 bg-purple-50 border-purple-200/80',
    icon: Brain,
    accent: '#F59E0B',
    link: '/products/smaran-ai',
  },
];

export default function Slide3_WhatWeBuild() {
  return (
    <section 
      className="snap-section bg-white flex flex-col justify-center items-center px-6 py-20 sm:py-24 select-none relative"
      aria-label="Flagship Products Built by VOOO LABS"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-center">
            Flagship Software
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Built by <span className="shimmer-text">VOOO LABS.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-xl mx-auto mb-12 sm:mb-14 leading-relaxed">
            Real digital products engineered in-house with speed, uncompromising privacy, and modern design.
          </p>
        </FadeIn>

        {/* 3 CLEAN PRODUCT CARDS (SIMPLE, OPEN, SPACIOUS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full mb-10">
          {FLAGSHIP_PRODUCTS.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} y={20} className="w-full flex">
                <Link
                  to={prod.link}
                  className="w-full rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 sm:p-7 hover:bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* TOP BADGES */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: `${prod.accent}12`, color: prod.accent }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className={`font-sans text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${prod.statusColor}`}>
                        {prod.status}
                      </span>
                    </div>

                    <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                      {prod.tag}
                    </span>
                    <h3 className="font-clash font-bold text-xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-2.5">
                      {prod.title}
                    </h3>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform mt-6 pt-3 border-t border-slate-200/60">
                    <span>View Product Details</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CTA LINK */}
        <FadeIn delay={0.35} y={15}>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-slate-400 bg-white px-6 py-2.5 rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore All Products & Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
