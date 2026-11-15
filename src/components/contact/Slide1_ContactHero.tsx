import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, whatsappLink } from '../../content/company';
import { WhatsappIcon } from '../shared/BrandIcons';

export default function Slide1_ContactHero() {
  return (
    <section className="bg-white flex flex-col justify-center items-center px-4 sm:px-6 py-20 pt-28 sm:pt-36 text-center relative overflow-hidden select-none antialiased border-b border-zinc-200">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-50 border border-zinc-200 px-4 py-1.5 mb-6 text-zinc-700 font-mono text-xs tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>START A CONVERSATION • PUNE • NASHIK • SATARA</span>
          </div>
        </FadeIn>

        {/* HERO TITLE */}
        <FadeIn delay={0.08} y={20}>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-zinc-950 leading-[1.1] tracking-tight mb-6">
            Tell Us About Your Business. <br className="hidden sm:inline" />
            Get an Honest Cost Estimate & Plan.
          </h1>
        </FadeIn>

        {/* SUBTITLE */}
        <FadeIn delay={0.16} y={15}>
          <p className="font-sans text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Whether you need an all-inclusive website, custom business software, or visibility on ChatGPT and Google AI—share what you are looking to build and we will review your requirements carefully.
          </p>
        </FadeIn>

        {/* QUICK DIRECT CONTACT PILLS */}
        <FadeIn delay={0.24} y={15}>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-2xl mx-auto">
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-full bg-zinc-50 border border-zinc-200 px-4 py-2 font-mono text-xs text-zinc-800 inline-flex items-center gap-2 hover:bg-white hover:border-zinc-300 shadow-2xs transition-colors"
            >
              <Mail size={14} className="text-zinc-600" />
              <span>{COMPANY.email}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 font-mono text-xs text-emerald-800 inline-flex items-center gap-2 hover:bg-emerald-100 shadow-2xs transition-colors"
            >
              <WhatsappIcon size={14} />
              <span>WhatsApp: +{COMPANY.whatsapp}</span>
            </a>
          </div>
        </FadeIn>

        {/* SCROLL ANCHOR */}
        <FadeIn delay={0.3} y={10}>
          <a
            href="#contact-form-section"
            className="mt-10 inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors"
          >
            <span>Fill Project Scope Form Below</span>
            <ArrowDown size={13} className="animate-bounce" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
