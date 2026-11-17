import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion';
import { Globe, Laptop, Cpu, Smartphone, Search, ArrowRight } from 'lucide-react';
import { COMPANY } from '../../content/company';
import LiquidButton from '../shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

const CAPABILITIES = [
  'Business Websites',
  'Custom Web Apps',
  'Business Software',
  'AI Search & AI Ads',
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
      <span className="g-text font-bold">{displayText}</span>
      <span className="typewriter-cursor ml-0.5 bg-blue-600" aria-hidden="true" />
    </span>
  );
}

export default function Slide1_Hero() {
  // Cursor-reactive ambient Studio Blue glow physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.35);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const bgGradient = useMotionTemplate`radial-gradient(750px circle at ${useTransform(smoothX, (v) => `${v * 100}%`)} ${useTransform(smoothY, (v) => `${v * 100}%`)}, rgba(66, 133, 244, 0.06), transparent 75%)`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80 pt-32 sm:pt-36 pb-8"
      aria-label="Hero — VOOO LABS Introduction"
    >
      {/* CURSOR-REACTIVE STUDIO BLUE AMBIENT LIGHT GRADIENT */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: bgGradient }}
        aria-hidden="true"
      />

      {/* SUBTLE CORNER AMBIENT LIGHTING */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-radial from-purple-500/[0.03] to-transparent blur-[80px] pointer-events-none z-0" aria-hidden="true" />

      {/* HERO EDITORIAL CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto py-2 w-full">
        
        {/* LINE 1: PURE EDITORIAL TEXT (STARTS FROM LEFT OF HEADLINE, MATCHED INTER FONT) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASING }}
          className="w-full max-w-4xl text-left mb-3.5 px-1 sm:px-2"
        >
          <span className="font-sans text-xs sm:text-sm font-medium text-slate-500 tracking-wide select-none">
            First make it work, then make it beautiful.
          </span>
        </motion.div>

        {/* LINES 2 & 3: CRISP CENTERED HEADLINE (ZERO BLUR, SHARP VECTOR FONT) */}
        <motion.h1 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.14] mb-5 max-w-4xl mx-auto text-center w-full"
        >
          <span>Engineering Digital Products</span> <br />
          <span className="shimmer-text">with Obsession & Scale.</span>
        </motion.h1>

        {/* SUBHEADING WITH ROTATING TYPEWRITER IN THE MIDDLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: EASING }}
        >
          <p className="font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
            <span className="font-light text-slate-500">We build high-performance</span> <CleanTypewriter />
          </p>
        </motion.div>

        {/* DUAL LIQUID CTAS WITH MAGNETIC ATTRACTION */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.40, ease: EASING }}
          className="flex flex-wrap gap-3.5 justify-center items-center"
        >
          <LiquidButton
            to="/contact"
            variant="gradient"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>See what your project will cost</span>
            <ArrowRight size={16} />
          </LiquidButton>

          <LiquidButton
            to="/services"
            variant="secondary"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>See how it can help your business</span>
          </LiquidButton>
        </motion.div>
      </div>

      {/* CAPABILITIES STRIP — OPEN ARCHITECTURAL (NO HEAVY BOXY BORDERS) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-10 mb-2">
        <div className="w-full max-w-6xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: EASING }}
            className="py-3 border-y border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-center"
          >
            <Link 
              to="/services#web-apps" 
              className="group relative flex items-center gap-2.5 py-1 text-left transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe size={14} />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-xs text-slate-900 block truncate group-hover:text-blue-600 transition-colors">Web Apps</span>
                <span className="text-[10px] text-slate-500 block truncate font-normal">SaaS & Portals</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>

            <Link 
              to="/services#websites" 
              className="group relative flex items-center gap-2.5 py-1 text-left transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Laptop size={14} />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-xs text-slate-900 block truncate group-hover:text-purple-600 transition-colors">Websites</span>
                <span className="text-[10px] text-slate-500 block truncate font-normal">High Converting</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-purple-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>

            <Link 
              to="/services#custom-software" 
              className="group relative flex items-center gap-2.5 py-1 text-left transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Cpu size={14} />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-xs text-slate-900 block truncate group-hover:text-emerald-600 transition-colors">Software</span>
                <span className="text-[10px] text-slate-500 block truncate font-normal">Automation & APIs</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>

            <Link 
              to="/services#web-apps" 
              className="group relative flex items-center gap-2.5 py-1 text-left transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Smartphone size={14} />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-xs text-slate-900 block truncate group-hover:text-orange-600 transition-colors">Mobile Ready</span>
                <span className="text-[10px] text-slate-500 block truncate font-normal">PWA & Responsive</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-orange-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>

            <Link 
              to="/seo-ai" 
              className="col-span-2 sm:col-span-1 group relative flex items-center gap-2.5 py-1 text-left transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Search size={14} />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-xs text-slate-900 block truncate group-hover:text-indigo-600 transition-colors">SEO & AI</span>
                <span className="text-[10px] text-slate-500 block truncate font-normal">AEO · GEO Ranking</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-indigo-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM STUDIO QUOTE STRIP — 100% CLEAN ENGLISH */}
      <div className="relative z-20 px-6 pb-2 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 w-full max-w-6xl mx-auto border-t border-slate-100 pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest leading-relaxed flex items-center gap-2 text-center sm:text-left"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>
            <span className="text-slate-500 font-normal">First make it work, </span>
            <span className="text-slate-700 font-medium">then make it </span>
            <span className="text-blue-600 font-bold">beautiful. </span>
            <span className="text-slate-400 font-normal">· BUILD BOLD. SHIP SMART. LIVE DIFFERENT.</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="font-mono text-[11px] text-slate-400 text-center sm:text-right"
        >
          © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
        </motion.div>
      </div>

    </section>
  );
}
