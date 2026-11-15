import React from 'react';
import { Mail, MapPin, Sparkles, PhoneCall, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION, whatsappLink } from '../../content/company';
import { WhatsappIcon } from '../shared/BrandIcons';

export default function Slide1_ContactHero() {
  return (
    <section className="bg-white flex flex-col justify-center items-center px-4 sm:px-6 py-20 pt-28 sm:pt-36 text-center relative overflow-hidden select-none antialiased border-b border-slate-200/80">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-600/[0.03] blur-[120px] pointer-events-none" />

      {/* ARCHITECTURAL GRID MASK */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-4 py-1.5 mb-6 text-blue-600 font-sans font-medium text-xs tracking-wider uppercase shadow-xs">
            <Sparkles size={13} className="text-blue-600" />
            <span>Studio Scoping & Architecture Consultation</span>
          </div>
        </FadeIn>

        {/* HERO TITLE */}
        <FadeIn delay={0.08} y={25}>
          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-6">
            Let's Engineer <br />
            <span className="shimmer-text font-bold">Your Next Product.</span>
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.16} y={15}>
          <p className="font-sans text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Collaborate directly with our lead software architect. Fixed sprint milestones, sub-second execution speeds, and complete source code ownership from day one.
          </p>
        </FadeIn>

        {/* QUICK CONTACT PILLS */}
        <FadeIn delay={0.24} y={15}>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-2xl mx-auto">
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-2 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 hover:border-blue-300 hover:text-blue-600 hover:bg-white shadow-2xs transition-colors"
            >
              <Mail size={14} className="text-blue-600" />
              <span>{COMPANY.email}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-2 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 hover:border-emerald-300 hover:text-emerald-700 hover:bg-white shadow-2xs transition-colors"
            >
              <WhatsappIcon size={14} className="text-emerald-600" />
              <span>Instant WhatsApp</span>
            </a>
            <div className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-2 font-sans font-medium text-xs text-slate-700 inline-flex items-center gap-2 shadow-2xs">
              <MapPin size={14} className="text-purple-600" />
              <span>{LOCATION.region}, {LOCATION.country}</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* FORM SCROLL CUE */}
      <div className="mt-14 flex flex-col items-center gap-1.5 text-slate-500">
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
          Scroll To Scoping Form
        </span>
        <ArrowDown size={14} className="animate-bounce text-slate-500 mt-1" />
      </div>
    </section>
  );
}
