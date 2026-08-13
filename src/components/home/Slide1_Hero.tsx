import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Folder, Brain, Phone } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { LOCATION } from '../../content/company';

const roles = ['File Manager', 'AI Memory', 'Smart CRM', 'AI Workspace'];

function TypewriterSubtitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="g-text font-semibold">{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto -mt-4">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.03] border border-black/10 px-4 py-1.5 mb-6 shadow-xs">
            <div className="w-2 h-2 rounded-full bg-[#4285F4] pulse-dot" aria-hidden="true" />
            <span className="font-kanit font-medium text-xs sm:text-sm text-slate-700 tracking-wide">
              Indie Software Studio · Made in {LOCATION.country} 🇮🇳
            </span>
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.15} y={35}>
          <h1 className="font-clash text-[10vw] sm:text-[6.5vw] md:text-[6.2rem] font-bold text-[#0A0F1E] leading-[0.95] tracking-tight mb-5">
            Software That <br />
            <span className="shimmer-text">Feels Alive.</span>
          </h1>
        </FadeIn>

        {/* TYPEWRITER SUBHEADING */}
        <FadeIn delay={0.3} y={25}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Crafting privacy-first Android & Web applications. Building:{' '}
            <TypewriterSubtitle />
          </p>
        </FadeIn>

        {/* CTA ROW */}
        <FadeIn delay={0.45} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/products"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-8 py-3.5 font-kanit font-medium text-sm sm:text-base text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(66,133,244,0.25)] active:scale-[0.98]"
            >
              Explore Products →
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-slate-200 bg-white px-8 py-3 font-kanit font-medium text-sm sm:text-base text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98] shadow-xs"
            >
              Studio Story
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* CLEAN MINIMAL PRODUCT PREVIEW STRIP */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-10">
        <div className="w-full max-w-5xl px-6">
          <div className="rounded-t-[32px] bg-white border-t border-x border-black/10 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* APP 1 BADGE */}
            <Link to="/products#vooo-files" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Folder size={20} />
              </div>
              <div className="text-left">
                <span className="font-clash font-bold text-sm text-[#0A0F1E] block">VOOO Files</span>
                <span className="font-kanit font-light text-xs text-slate-500">Android Storage Ecosystem</span>
              </div>
            </Link>

            <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />

            {/* APP 2 BADGE */}
            <Link to="/products#smaran-ai" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Brain size={20} />
              </div>
              <div className="text-left">
                <span className="font-clash font-bold text-sm text-[#0A0F1E] block">SMARAN AI</span>
                <span className="font-kanit font-light text-xs text-slate-500">AI Memory & Silent Alarms</span>
              </div>
            </Link>

            <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />

            {/* APP 3 BADGE */}
            <Link to="/products#callmind" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <span className="font-clash font-bold text-sm text-[#0A0F1E] block">CallMind CRM</span>
                <span className="font-kanit font-light text-xs text-slate-500">Mobile Sales CRM for SMBs</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* BOTTOM ROW BANNER */}
      <div className="relative z-20 px-6 sm:px-12 pb-6 sm:pb-8 flex justify-between items-end gap-6 w-full max-w-7xl mx-auto border-t border-slate-100 pt-6">
        <FadeIn delay={0.6} y={15}>
          <div className="font-kanit font-light text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest max-w-[220px] leading-relaxed">
            {LOCATION.hubs.join(' · ')} · {LOCATION.region}
          </div>
        </FadeIn>

        <FadeIn delay={0.7} y={15}>
          <Link
            to="/contact#waitlist"
            className="font-kanit font-medium text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors py-1 border-b border-blue-500/20"
          >
            Join waitlist →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
