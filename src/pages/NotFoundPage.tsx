import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, ArrowUpRight, Compass, Layers, Search, Building2 } from 'lucide-react';
import LiquidButton from '../components/shared/LiquidButton';
import { COMPANY } from '../content/company';

export default function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.notfound-reveal',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-wrap bg-white min-h-[85vh] text-slate-900 select-none relative overflow-hidden flex flex-col justify-between">
      
      {/* 2PX STUDIO ACCENT PROGRESS LINE */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-20"
        aria-hidden="true" 
      />

      {/* ARCHITECTURAL 1PX GRID BACKDROP */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.12) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* AMBIENT STUDIO GLOW */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-500/[0.04] blur-[140px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div 
        ref={containerRef}
        className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-28 text-left w-full my-auto"
      >
        {/* EYEBROW & TELEMETRY */}
        <div className="notfound-reveal flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4285F4] font-bold">
            ERROR 404 · ENDPOINT NOT FOUND
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="notfound-reveal text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] mb-5 max-w-3xl">
          This Route Does Not Exist in Our Architecture.
        </h1>

        {/* SUBHEADLINE */}
        <p className="notfound-reveal text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10 font-normal">
          The link may have moved, expired, or been mistyped. Navigate directly to one of our core engineering destinations below or consult our live project blueprint.
        </p>

        {/* DUAL LIQUID CTAS */}
        <div className="notfound-reveal flex flex-wrap items-center gap-4 mb-14">
          <LiquidButton
            to="/"
            variant="primary"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>Back to Studio Home</span>
            <ArrowRight size={16} />
          </LiquidButton>

          <LiquidButton
            to="/contact"
            variant="secondary"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>Configure Project Blueprint</span>
          </LiquidButton>
        </div>

        {/* 3 QUICK HAIRLINE NAVIGATION DESTINATIONS */}
        <div className="notfound-reveal border-t border-slate-200/90 pt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold block mb-4">
            CORE ACTIVE DESTINATIONS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services"
              className="group p-4 rounded-xl border border-slate-200/80 bg-[#F8F9FC] hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-blue-600 font-semibold">01 · ARCHITECTURE</span>
                <Layers size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">Services & Capabilities</h3>
                <p className="text-xs text-slate-500 font-normal">Websites, web apps, and internal custom software.</p>
              </div>
            </Link>

            <Link
              to="/seo-ai"
              className="group p-4 rounded-xl border border-slate-200/80 bg-[#F8F9FC] hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-purple-600 font-semibold">02 · DISCOVERY</span>
                <Search size={14} className="text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">Google SEO & AI Search</h3>
                <p className="text-xs text-slate-500 font-normal">Machine-readable schema, Google Maps, and AI citations.</p>
              </div>
            </Link>

            <Link
              to="/about"
              className="group p-4 rounded-xl border border-slate-200/80 bg-[#F8F9FC] hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-orange-600 font-semibold">03 · STUDIO</span>
                <Building2 size={14} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">About VOOO LABS</h3>
                <p className="text-xs text-slate-500 font-normal">Lead architect access and 100% code ownership.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* BOTTOM TELEMETRY FOOTNOTE */}
        <div className="notfound-reveal mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Compass size={13} className="text-blue-600" />
            <span>VOOO LABS Client Routing Engine</span>
          </div>
          <span>Direct Desk: {COMPANY.email}</span>
        </div>

      </div>

    </div>
  );
}
