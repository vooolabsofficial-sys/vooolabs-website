import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/shared/FadeIn';
import { COMPANY } from '../content/company';

/**
 * Catch-all route. Without it, a mistyped URL rendered the chrome with an
 * empty page between the navbar and the footer, which reads as a broken site
 * rather than a wrong address.
 */
export default function NotFoundPage() {
  return (
    <div className="page-wrap bg-white min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-100px] w-[500px] h-[500px] rounded-full bg-radial from-purple-500/8 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10">
        <FadeIn delay={0} y={25}>
          <p className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4">
            404 — Not Found
          </p>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-[#0A0F1E] leading-tight mb-4">
            This page isn't here.
          </h1>
          <p className="font-kanit font-light text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed mb-10">
            The link may be old, or the address may have a typo in it.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={15}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-7 py-3 font-kanit font-medium text-sm text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(66,133,244,0.25)] min-h-[44px] inline-flex items-center"
            >
              Back to {COMPANY.brandName}
            </Link>
            <Link
              to="/products"
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-kanit font-medium text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px] inline-flex items-center shadow-xs"
            >
              See the products
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
