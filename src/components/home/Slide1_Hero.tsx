import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Smartphone, ArrowRight, Search } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const CAPABILITIES = [
  'Web Applications',
  'Custom Websites',
  'Software Systems',
  'Mobile Apps',
  'SEO & AI Ranking',
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
      <span className="typewriter-cursor ml-0.5" aria-hidden="true" />
    </span>
  );
}

export default function Slide1_Hero() {
  return (
    <section 
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none"
      aria-label="Hero — VOOO LABS Introduction"
    >
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-radial from-blue-500/8 to-transparent blur-[90px] animate-blob-1 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-200px] w-[500px] h-[500px] rounded-full bg-radial from-purple-500/6 to-transparent blur-[90px] animate-blob-2 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-orange-500/5 to-transparent blur-[90px] animate-blob-3 pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[96px] sm:h-[110px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto -mt-4">
        
        {/* HEADING */}
        <FadeIn delay={0.05} y={30}>
          <h1 className="font-clash text-[9.5vw] sm:text-[6.2vw] md:text-[5.4rem] font-bold text-[#0A0F1E] leading-[1.02] tracking-tight mb-6">
            Engineering Digital Products <br />
            <span className="shimmer-text">That Drive Business Growth.</span>
          </h1>
        </FadeIn>

        {/* SUBHEADING WITH CLEAN BRAND GRADIENT TYPEWRITER */}
        <FadeIn delay={0.2} y={20}>
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            We build high-performance <CleanTypewriter />
          </p>
        </FadeIn>

        {/* CTA ROW */}
        <FadeIn delay={0.45} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/products"
              className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 py-3.5 font-sans font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:scale-[1.03] shadow-[0_4px_20px_rgba(66,133,244,0.25)] hover:shadow-[0_8px_28px_rgba(66,133,244,0.35)] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 font-sans font-semibold text-sm sm:text-base text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xs"
            >
              Start a Project
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* 5 PILLARS PREVIEW STRIP */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-10">
        <div className="w-full max-w-6xl px-6">
          <div className="rounded-t-[32px] bg-white border-t border-x border-slate-200/90 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-center">
            
            {/* VERTICAL 1: WEB APPS */}
            <Link to="/products#web-apps" className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-blue-50/60 transition-all group border border-transparent hover:border-blue-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe size={18} />
              </div>
              <div className="text-left min-w-0">
                <span className="font-clash font-bold text-xs sm:text-sm text-[#0A0F1E] block group-hover:text-blue-600 transition-colors">Web Apps</span>
                <span className="font-sans font-normal text-[11px] text-slate-500 block">Custom Portals</span>
              </div>
            </Link>

            {/* VERTICAL 2: WEBSITES */}
            <Link to="/products#websites" className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-purple-50/60 transition-all group border border-transparent hover:border-purple-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Laptop size={18} />
              </div>
              <div className="text-left min-w-0">
                <span className="font-clash font-bold text-xs sm:text-sm text-[#0A0F1E] block group-hover:text-purple-600 transition-colors">Websites</span>
                <span className="font-sans font-normal text-[11px] text-slate-500 block">High Converting</span>
              </div>
            </Link>

            {/* VERTICAL 3: SOFTWARE SYSTEMS */}
            <Link to="/products#software" className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-emerald-50/60 transition-all group border border-transparent hover:border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Cpu size={18} />
              </div>
              <div className="text-left min-w-0">
                <span className="font-clash font-bold text-xs sm:text-sm text-[#0A0F1E] block group-hover:text-emerald-600 transition-colors">Software Systems</span>
                <span className="font-sans font-normal text-[11px] text-slate-500 block">Business Automation</span>
              </div>
            </Link>

            {/* VERTICAL 4: MOBILE APPS */}
            <Link to="/products#mobile-apps" className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-orange-50/60 transition-all group border border-transparent hover:border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Smartphone size={18} />
              </div>
              <div className="text-left min-w-0">
                <span className="font-clash font-bold text-xs sm:text-sm text-[#0A0F1E] block group-hover:text-orange-600 transition-colors">Mobile Apps</span>
                <span className="font-sans font-normal text-[11px] text-slate-500 block">Android & iOS</span>
              </div>
            </Link>

            {/* VERTICAL 5: SEO · AEO · GEO */}
            <Link to="/products#websites" className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2 rounded-2xl hover:bg-indigo-50/60 transition-all group border border-transparent hover:border-indigo-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Search size={18} />
              </div>
              <div className="text-left min-w-0">
                <span className="font-clash font-bold text-xs sm:text-sm text-[#0A0F1E] block group-hover:text-indigo-600 transition-colors">SEO · AEO · GEO</span>
                <span className="font-sans font-normal text-[11px] text-slate-500 block">Google & AI Ranking</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* BOTTOM ROW BANNER */}
      <div className="relative z-20 px-6 sm:px-12 pb-6 sm:pb-8 flex justify-between items-end gap-6 w-full max-w-7xl mx-auto border-t border-slate-100 pt-6">
        <FadeIn delay={0.6} y={15}>
          <div className="font-sans font-normal text-xs text-slate-500 uppercase tracking-widest max-w-[260px] leading-relaxed">
            BUILD BOLD. SHIP SMART. LIVE DIFFERENT.
          </div>
        </FadeIn>
        <FadeIn delay={0.6} y={15}>
          <div className="font-sans font-normal text-xs text-slate-500 text-right">
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
