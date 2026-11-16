import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Search, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const CAPABILITIES = [
  'Custom Web Applications',
  'Business Management Portals',
  'High-Conversion Websites',
  'Operations Software Systems',
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
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % CAPABILITIES.length);
        }
      }
    }, isDeleting ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="shimmer-text font-semibold">{displayText}</span>
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
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[20%] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-100px] left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[95px] sm:h-[110px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto py-4">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0.02} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/60 px-4 py-1.5 mb-6 text-blue-700 font-sans font-medium text-xs tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Web Software & Digital Systems Studio</span>
          </div>
        </FadeIn>

        {/* HEADLINE */}
        <FadeIn delay={0.08} y={25}>
          <h1 className="font-clash text-[8vw] sm:text-[5.5vw] md:text-[3.8rem] lg:text-[4.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
            We engineer custom web software <br />
            <span className="shimmer-text">that powers real businesses.</span>
          </h1>
        </FadeIn>

        {/* SUBHEADING WITH TYPEWRITER */}
        <FadeIn delay={0.2} y={18}>
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Replacing bloated agency templates with high-performance <br className="hidden sm:inline" />
            <CleanTypewriter />
          </p>
        </FadeIn>

        {/* CTA ROW */}
        <FadeIn delay={0.35} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 hover:bg-blue-600 text-white px-8 py-3.5 font-sans font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-slate-300 px-8 py-3.5 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xs"
            >
              Explore Capabilities
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* CAPABILITIES BAR */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-8 mb-4">
        <div className="w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl bg-slate-50/90 backdrop-blur-xl border border-slate-200/80 p-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center shadow-xs">
            
            <Link to="/services#web-apps" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-blue-600 transition-colors">Web Applications</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Portals & Custom Systems</span>
              </div>
            </Link>

            <Link to="/services#websites" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Laptop size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-purple-600 transition-colors">Business Websites</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Sub-0.4s Fast & High Converting</span>
              </div>
            </Link>

            <Link to="/services#custom-software" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Cpu size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-emerald-600 transition-colors">Operations Software</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Invoicing & Workflow Tools</span>
              </div>
            </Link>

            <Link to="/seo-ai" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Search size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-amber-600 transition-colors">SEO & AI Discovery</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Google Maps & ChatGPT Citations</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* FOOTER TICKER */}
      <div className="relative z-20 px-6 sm:px-12 pb-5 flex justify-between items-end gap-6 w-full max-w-7xl mx-auto border-t border-slate-100 pt-4">
        <FadeIn delay={0.45} y={10}>
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-relaxed">
            OBSESSIVE CRAFTSMANSHIP. 100% CODE OWNERSHIP.
          </div>
        </FadeIn>
        <FadeIn delay={0.45} y={10}>
          <div className="font-mono text-[11px] text-slate-400 text-right">
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
