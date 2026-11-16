import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/shared/FadeIn';

export default function NotFoundPage() {
  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden select-none">
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
          <p className="font-mono font-semibold text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">
            404 — Not Found
          </p>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-zinc-950 leading-tight mb-4 tracking-tight">
            This page isn't here.
          </h1>
          <p className="font-sans font-normal text-sm sm:text-base text-zinc-600 max-w-md mx-auto leading-relaxed mb-10">
            The link may be outdated, or the URL address may contain a typo.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={15}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="rounded-xl bg-zinc-950 hover:bg-zinc-800 px-6 py-3 font-sans font-semibold text-xs text-white transition-all duration-150 shadow-2xs"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 px-6 py-3 font-sans font-medium text-xs text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 transition-all shadow-2xs"
            >
              Explore Capabilities
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
