import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';
import {
  Smartphone, 
  Palette, 
  Layout, 
  Cog, 
  Database, 
  Tv, 
  ShieldCheck, 
  Laptop, 
  Atom,
  FileCode2,
  Wind,
  Zap, 
  Film, 
  Server, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Slide4_TechStack() {
  const androidStack = [
    { name: 'Kotlin', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Jetpack Compose', icon: Palette, color: 'text-purple-500' },
    { name: 'Material Design 3', icon: Layout, color: 'text-emerald-500' },
    { name: 'Hilt DI', icon: Cog, color: 'text-slate-600' },
    { name: 'Room Database', icon: Database, color: 'text-[#4285F4]' },
    { name: 'ExoPlayer', icon: Tv, color: 'text-[#7C3AED]' },
    { name: 'Biometric API', icon: ShieldCheck, color: 'text-[#10B981]' },
    { name: 'Android Studio', icon: Laptop, color: 'text-blue-600' },
  ];

  /**
   * Kept in step with what the products actually run on. Firebase used to be
   * listed here; CallMind is built on Supabase and Postgres with documents in
   * Cloudflare R2, so naming Firebase described a stack that is not in use.
   */
  const webStack = [
    { name: 'React 19', icon: Atom, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: FileCode2, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: Wind, color: 'text-teal-500' },
    { name: 'Vite', icon: Zap, color: 'text-purple-500' },
    { name: 'Framer Motion', icon: Film, color: 'text-pink-500' },
    { name: 'Supabase & Postgres', icon: Database, color: 'text-emerald-600' },
    { name: 'Cloudflare R2', icon: Server, color: 'text-orange-500' },
    { name: 'Gemini Flash', icon: Sparkles, color: 'text-indigo-500' },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              How We <span className="shimmer-text">Build</span>
            </h2>
          </FadeIn>
        </div>

        {/* ANDROID DEVELOPMENT STACK */}
        <div className="w-full mb-12 text-center">
          <FadeIn delay={0.1} y={15}>
            <h3 className="font-kanit font-semibold text-xs tracking-[0.25em] g-text uppercase mb-6">
              Android Development Architecture
            </h3>
          </FadeIn>
          <div className="flex flex-wrap gap-3 justify-center">
            {androidStack.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.04 + 0.15} y={15}>
                  <div 
                    className="rounded-2xl bg-white border border-black/[0.06] px-5 py-3.5 inline-flex items-center gap-2.5 shadow-sm font-kanit font-medium text-xs sm:text-sm text-slate-800 hover:border-blue-500/30 transition-colors"
                  >
                    <IconComp className={`w-4 h-4 ${tech.color}`} />
                    <span>{tech.name}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* WEB DEVELOPMENT STACK */}
        <div className="w-full text-center mt-4">
          <FadeIn delay={0.2} y={15}>
            <h3 className="font-kanit font-semibold text-xs tracking-[0.25em] g-text uppercase mb-6">
              Web & AI Development Ecosystem
            </h3>
          </FadeIn>
          <div className="flex flex-wrap gap-3 justify-center">
            {webStack.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.04 + 0.25} y={15}>
                  <div 
                    className="rounded-2xl bg-white border border-black/[0.06] px-5 py-3.5 inline-flex items-center gap-2.5 shadow-sm font-kanit font-medium text-xs sm:text-sm text-slate-800 hover:border-purple-500/30 transition-colors"
                  >
                    <IconComp className={`w-4 h-4 ${tech.color}`} />
                    <span>{tech.name}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* EVERYTHING SHIPS UNDER ONE NAME */}
        <FadeIn delay={0.4} y={20} className="w-full max-w-2xl mt-16">
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 border border-black/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="font-clash font-semibold text-sm text-[#0A0F1E] block">One studio, one name</span>
              <span className="font-kanit font-light text-xs text-slate-500">
                Every app, web app and site we build ships under {COMPANY.brandName}.
              </span>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 font-kanit font-medium text-xs text-blue-600 hover:text-blue-700 whitespace-nowrap"
            >
              <span>See what we build</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
