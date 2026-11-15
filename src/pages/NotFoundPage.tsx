import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/shared/FadeIn';
import { COMPANY } from '../content/company';

export default function NotFoundPage() {
  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden select-none">
      {/* AMBIENT BACKGROUND BLOBS */}
      <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-100px] w-[500px] h-[500px] rounded-full bg-purple-600/[0.03] blur-[120px] pointer-events-none z-0" />

      {/* SUBTLE GRID */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <FadeIn delay={0} y={25}>
          <p className="font-mono font-semibold text-xs tracking-[0.3em] text-blue-600 uppercase mb-4">
            404 — Not Found
          </p>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight mb-4">
            This page isn't here.
          </h1>
          <p className="font-sans font-light text-base text-slate-600 max-w-md mx-auto leading-relaxed mb-10">
            The link may be outdated, or the URL address may contain a typo.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={15}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="rounded-full bg-slate-900 hover:bg-blue-600 px-7 py-3 font-sans font-semibold text-xs text-white transition-all duration-200 shadow-md"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-7 py-3 font-sans font-medium text-xs text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
            >
              Explore Capabilities
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
