import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Smartphone, Search, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const CAPABILITIES = [
  'Web Applications',
  'Mobile Applications',
  'Custom Software Systems',
  'AI & Digital Products',
];

function CleanTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = CAPABILITIES[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % CAPABILITIES.length);
        }
      }
    }, isDeleting ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="g-text font-semibold">{displayText}</span>
      <span className="typewriter-cursor ml-0.5 bg-blue-600" aria-hidden="true" />
    </span>
  );
}

export default function Slide1_Hero() {
  return (
    <section 
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80"
      aria-label="Hero — VOOO LABS Introduction"
    >
      {/* VIBRANT AMBIENT GLOW BACKDROP */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/10 to-transparent blur-[90px] animate-blob-1 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-200px] w-[500px] h-[500px] rounded-full bg-radial from-purple-500/10 to-transparent blur-[90px] animate-blob-2 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-orange-500/8 to-transparent blur-[90px] animate-blob-3 pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[95px] sm:h-[110px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto py-2">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0.02} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/60 px-4 py-1.5 mb-5 text-blue-700 font-sans font-medium text-xs tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Independent Software & Digital Systems Studio</span>
          </div>
        </FadeIn>

        {/* HEADLINE */}
        <FadeIn delay={0.08} y={25}>
          <h1 className="font-clash text-[8.5vw] sm:text-[5.5vw] md:text-[4.2rem] lg:text-[4.7rem] font-bold text-[#0A0F1E] leading-[1.04] tracking-tight mb-5">
            Engineering Digital Products <br />
            <span className="shimmer-text">with Obsession & Scale.</span>
          </h1>
        </FadeIn>

        {/* SUBHEADING WITH TYPEWRITER */}
        <FadeIn delay={0.2} y={18}>
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed mb-4">
            We build high-performance <CleanTypewriter />
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/[0.03] border border-black/10 text-xs sm:text-sm font-kanit text-slate-700 mx-auto mb-8 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>"पहले बनाते हैं कुछ, फिर उसे सुंदर बनाते हैं" · First make it work, then make it beautiful.</span>
          </div>
        </FadeIn>

        {/* CTA ROW */}
        <FadeIn delay={0.35} y={15}>
          <div className="flex flex-wrap gap-3.5 justify-center items-center">
            <Link
              to="/services"
              className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 py-3.5 font-kanit font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:scale-[1.03] shadow-[0_4px_20px_rgba(66,133,244,0.3)] hover:shadow-[0_8px_28px_rgba(66,133,244,0.4)] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Explore Business Solutions</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white/90 backdrop-blur-sm px-8 py-3.5 font-kanit font-semibold text-sm sm:text-base text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xs"
            >
              Start a Project
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* CAPABILITIES BAR — REFINED & COHESIVE */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-6 mb-2">
        <div className="w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl bg-slate-50/90 backdrop-blur-xl border border-slate-200/80 p-2 sm:p-2.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 items-center shadow-xs">
            
            <Link to="/services#web-apps" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left group">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe size={15} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-bold text-xs text-[#0A0F1E] block truncate group-hover:text-blue-600 transition-colors">Web Apps</span>
                <span className="font-sans text-[10px] text-slate-500 block truncate">SaaS & Portals</span>
              </div>
            </Link>

            <Link to="/services#websites" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left group">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Laptop size={15} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-bold text-xs text-[#0A0F1E] block truncate group-hover:text-purple-600 transition-colors">Websites</span>
                <span className="font-sans text-[10px] text-slate-500 block truncate">High Converting</span>
              </div>
            </Link>

            <Link to="/services#software" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Cpu size={15} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-bold text-xs text-[#0A0F1E] block truncate group-hover:text-emerald-600 transition-colors">Software</span>
                <span className="font-sans text-[10px] text-slate-500 block truncate">Automation & APIs</span>
              </div>
            </Link>

            <Link to="/services#web-apps" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left group">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Smartphone size={15} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-bold text-xs text-[#0A0F1E] block truncate group-hover:text-orange-600 transition-colors">Mobile Ready</span>
                <span className="font-sans text-[10px] text-slate-500 block truncate">PWA & Responsive</span>
              </div>
            </Link>

            <Link to="/seo-ai" className="col-span-2 sm:col-span-1 flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left group">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Search size={15} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-bold text-xs text-[#0A0F1E] block truncate group-hover:text-indigo-600 transition-colors">SEO & AI</span>
                <span className="font-sans text-[10px] text-slate-500 block truncate">AEO · GEO Ranking</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* BOTTOM ROW BANNER */}
      <div className="relative z-20 px-6 sm:px-12 pb-5 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 w-full max-w-7xl mx-auto border-t border-slate-100 pt-4">
        <FadeIn delay={0.45} y={10}>
          <div className="font-kanit text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest leading-relaxed flex items-center gap-2 text-center sm:text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>पहले बनाते हैं कुछ, फिर उसे सुंदर बनाते हैं · BUILD BOLD. SHIP SMART. LIVE DIFFERENT.</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.45} y={10}>
          <div className="font-mono text-[11px] text-slate-400 text-center sm:text-right">
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
