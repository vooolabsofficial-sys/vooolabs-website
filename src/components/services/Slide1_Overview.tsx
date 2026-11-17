import React from 'react';
import { ArrowRight, ArrowDown, ArrowDownRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import LiquidButton from '../shared/LiquidButton';

const DISCIPLINES = [
  {
    number: '01',
    targetId: 'websites',
    title: 'Business Websites',
    summary: 'Custom web architecture, built-in SEO/AEO, visitor intent & direct WhatsApp leads',
  },
  {
    number: '02',
    targetId: 'web-apps',
    title: 'Custom Web Apps & Portals',
    summary: 'Self-service client logins, bookings & live operational dashboards',
  },
  {
    number: '03',
    targetId: 'custom-software',
    title: 'Custom Business Software',
    summary: 'Tailored internal workflow, order & multi-branch team systems',
  },
  {
    number: '04',
    targetId: 'google-presence',
    title: 'Google SEO, AI Search & Ads',
    summary: 'Get found on Google Search, Google Maps, ChatGPT & targeted ads',
  },
];

export default function Slide1_Overview() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section 
      id="services-overview"
      className="snap-section bg-white text-slate-900 border-b border-slate-200 select-none"
      aria-label="VOOO LABS Core Capabilities"
    >
      <div className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-20 text-left">
        
        {/* EDITORIAL HERO */}
        <div>
          <FadeIn delay={0.05} y={15}>
            <div className="font-mono text-xs tracking-[0.14em] uppercase text-blue-600 mb-3">
              VOOO LABS · CORE CAPABILITIES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-slate-950 max-w-4xl leading-[1.08]">
              Four Core Systems. Engineered Around How Your Business Works.
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              We design and build custom business websites, client portals, internal operations software, and Google SEO &amp; AI search visibility—clean code, complete ownership, and zero rigid templates.
            </p>
          </FadeIn>

          {/* ACTION BUTTONS */}
          <FadeIn delay={0.24} y={15}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LiquidButton
                to="/contact"
                variant="primary"
                rounded="apple"
                size="md"
                className="font-medium text-sm group"
                ariaLabel="See what your project will cost"
              >
                <span>See what your project will cost</span>
                <ArrowRight 
                  size={15} 
                  className="ml-2 inline-block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" 
                />
              </LiquidButton>

              <LiquidButton
                onClick={() => scrollToSection('websites')}
                variant="secondary"
                rounded="apple"
                size="md"
                className="font-medium text-sm group"
                ariaLabel="Explore the 4 Systems"
              >
                <span>Explore the 4 Systems</span>
                <ArrowDown 
                  size={15} 
                  className="ml-2 inline-block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5 text-blue-600" 
                />
              </LiquidButton>
            </div>
          </FadeIn>
        </div>

        {/* CLEAN 4-ROW HAIRLINE INDEX */}
        <FadeIn delay={0.3} y={20} className="w-full mt-16">
          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {DISCIPLINES.map((item) => (
              <button
                key={item.targetId}
                onClick={() => scrollToSection(item.targetId)}
                className="w-full py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group cursor-pointer transition-colors hover:bg-slate-50/70 px-2 text-left focus:outline-none focus-visible:bg-slate-50"
                aria-label={`Jump to ${item.number} ${item.title}`}
              >
                {/* LEFT: NUMBER + TITLE + SUBTITLE */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-sm font-medium text-blue-600 w-10 shrink-0">
                      {item.number}
                    </span>
                    <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                      ·
                    </span>
                    <h2 className="text-lg font-semibold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                    —
                  </span>
                  <p className="text-sm text-slate-600 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* RIGHT: CLEAN ARROW WITH FLUID GLIDE */}
                <div className="flex items-center gap-1.5 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors self-end sm:self-center pl-2">
                  <ArrowDownRight 
                    size={18} 
                    className="transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5" 
                  />
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
