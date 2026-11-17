import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import LiquidButton from '../shared/LiquidButton';

/**
 * Bespoke duotone SVGs for the 4 core engineering systems.
 * Designed with Apple/Linear caliber precision: subtle tint fills + crisp primary geometry.
 */
function WebSystemIcon({ size = 20, accent = '#0284C7' }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="3" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.8" />
      <path d="M2 8H22" stroke={accent} strokeWidth="1.8" />
      <path d="M8 21H16" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 17V21" stroke={accent} strokeWidth="1.8" />
    </svg>
  );
}

function PortalSystemIcon({ size = 20, accent = '#4285F4' }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.8" />
      <circle cx="12" cy="10" r="3" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.8" />
      <path d="M7 18C7 15.5 9.2 14.5 12 14.5C14.8 14.5 17 15.5 17 18" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SoftwareSystemIcon({ size = 20, accent = '#10B981' }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.8" />
      <path d="M7 8L11 12L7 16" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 16H17" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SearchAiSystemIcon({ size = 20, accent = '#8B5CF6' }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="11" cy="11" r="7" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.8" />
      <path d="M20 20L16 16" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M11 8V14M8 11H14" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const SYSTEMS_INDEX = [
  {
    number: '01',
    targetId: 'websites',
    title: 'Business Websites',
    summary: 'Digital storefront built to turn visitors into direct calls & WhatsApp leads',
    accent: '#0284C7',
    icon: <WebSystemIcon size={20} accent="#0284C7" />,
  },
  {
    number: '02',
    targetId: 'web-apps',
    title: 'Custom Web Apps & Portals',
    summary: 'Self-service logins, bookings & live dashboards for clients and teams',
    accent: '#4285F4',
    icon: <PortalSystemIcon size={20} accent="#4285F4" />,
  },
  {
    number: '03',
    targetId: 'custom-software',
    title: 'Custom Business Software',
    summary: 'Tailored internal workflow, order & operations software built around your company',
    accent: '#10B981',
    icon: <SoftwareSystemIcon size={20} accent="#10B981" />,
  },
  {
    number: '04',
    targetId: 'google-presence',
    title: 'Google SEO, AI Search & Ads',
    summary: 'Get found on Google Search, Google Maps, ChatGPT & targeted ads',
    accent: '#8B5CF6',
    icon: <SearchAiSystemIcon size={20} accent="#8B5CF6" />,
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
      className="snap-section min-h-[92vh] bg-white flex flex-col justify-center relative overflow-hidden select-none border-b border-slate-200/80"
      aria-label="Core Capabilities — VOOO LABS"
    >
      {/* SUBTLE AMBIENT STUDIO GLOWS (NON-INTRUSIVE) */}
      <div 
        className="absolute top-[-160px] left-[-160px] w-[620px] h-[620px] rounded-full bg-blue-500/[0.05] blur-[140px] pointer-events-none z-0" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[-80px] right-[-160px] w-[560px] h-[560px] rounded-full bg-purple-500/[0.04] blur-[140px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-36 pb-20 w-full my-auto text-left">
        
        {/* EDITORIAL HERO */}
        <div className="max-w-4xl">
          <FadeIn delay={0.05} y={15}>
            <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              CORE CAPABILITIES
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={20}>
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.02em] text-slate-900 leading-[1.14] mb-5">
              Four Core Systems. Engineered Around How Your Business Works.
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} y={20}>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              We build fast business websites, custom client portals, internal business software, and Google SEO &amp; AI search visibility—crafted from scratch with 100% source code ownership and zero rigid templates.
            </p>
          </FadeIn>

          {/* PRIMARY & SECONDARY LIQUID CTAS */}
          <FadeIn delay={0.24} y={15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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

        {/* CLEAN 4-ROW HORIZONTAL INDEX (DIVIDE-Y SEPARATED BY 1PX HAIRLINES, ZERO BOX CARDS) */}
        <FadeIn delay={0.3} y={20} className="w-full mt-16">
          <div className="border-y border-slate-200/80 divide-y divide-slate-200/80">
            {SYSTEMS_INDEX.map((item) => (
              <button
                key={item.targetId}
                onClick={() => scrollToSection(item.targetId)}
                className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 sm:gap-6 text-left group transition-colors duration-200 hover:bg-slate-50/70 px-2 sm:px-4 cursor-pointer focus:outline-none focus-visible:bg-slate-50"
                aria-label={`Jump to ${item.number} ${item.title}`}
              >
                {/* LEFT: NUMBER + DUOTONE ICON + TITLE & POSITIONING SUMMARY */}
                <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                  {/* JETBRAINS MONO INDEX NUMBER */}
                  <span className="font-mono text-xs sm:text-sm font-semibold text-blue-600 shrink-0 w-6 sm:w-7">
                    {item.number}
                  </span>

                  {/* BESPOKE DUOTONE SVG ICON CONTAINER */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xs">
                    {item.icon}
                  </div>

                  {/* TITLE & POSITIONING SUMMARY */}
                  <div className="min-w-0 flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <h2 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 shrink-0">
                      {item.title}
                    </h2>
                    <span className="hidden md:inline text-slate-300" aria-hidden="true">
                      —
                    </span>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal truncate md:overflow-visible md:whitespace-normal">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* RIGHT: CRISP RIGHT ARROW GLIDING SMOOTHLY ON HOVER */}
                <div className="flex items-center gap-2 shrink-0 pl-2">
                  <span className="hidden lg:inline text-xs font-mono font-medium text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                    Inspect
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50/80 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <ArrowRight 
                      size={16} 
                      className="transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
