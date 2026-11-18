import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtle GSAP entrance choreography: calm, executive and editorial
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.editorial-reveal',
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
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none relative overflow-hidden">
      
      {/* 2PX STUDIO BRAND PROGRESS GRADIENT LINE */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-20" 
        aria-hidden="true" 
      />

      {/* SUBTLE AMBIENT STUDIO GLOW */}
      <div 
        className="absolute top-0 left-1/3 w-[650px] h-[650px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div 
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-20"
      >
        
        {/* ══════════════════════════════════════════════════════
            SECTION 1: CALM STUDIO THESIS HEADER
           ══════════════════════════════════════════════════════ */}
        <header className="editorial-reveal max-w-3xl pb-16 text-left">
          {/* STUDIO PHILOSOPHY TAG */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
            <span className="font-bold text-slate-950">First make it work,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">then make it</span>
            <span className="font-extrabold text-blue-600">beautiful.</span>
          </div>

          {/* EYEBROW */}
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            ABOUT VOOO LABS · STUDIO MANIFESTO
          </span>

          {/* H1 HEADLINE WITH VIBRANT SHIMMER-TEXT */}
          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12]">
            <span>Practical Business Software,</span>
            <span className="shimmer-text block mt-1">Engineered Without Enterprise Bloat.</span>
          </h1>

          {/* OPENING THESIS */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Modern AI has changed how fast software can be built—but reliable systems still require clear architectural thinking. We build custom websites, portals, and internal software shaped strictly around how your business operates.
          </p>
        </header>


        {/* ══════════════════════════════════════════════════════
            SECTION 2: FOUNDER PORTRAIT & DIRECT NOTE
           ══════════════════════════════════════════════════════ */}
        <section 
          className="editorial-reveal border-y border-slate-200/80 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left"
          aria-label="Founder Note and Studio Philosophy"
        >
          {/* LEFT: FOUNDER PORTRAIT FRAME (OPTIMIZED WEBP FORMAT) */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full max-w-[340px] rounded-[18px] overflow-hidden bg-[#F8F9FC] border border-slate-200/80 relative shadow-sm">
              <picture>
                <source srcSet="/images/vrushabh-shinde.webp" type="image/webp" />
                <img 
                  src="/images/vrushabh-shinde.jpg" 
                  alt="Vrushabh Shinde — Founder, VOOO LABS" 
                  loading="eager"
                  className="w-full h-full object-cover object-top" 
                />
              </picture>
            </div>

            {/* CLEAN CAPTION */}
            <div className="mt-4 space-y-0.5 text-left">
              <div className="text-base font-bold text-slate-950">
                Vrushabh Shinde
              </div>
              <div className="font-mono text-xs text-blue-600 font-semibold">
                Founder & Systems Architect, VOOO LABS
              </div>
            </div>
          </div>

          {/* RIGHT: DIRECT NOTE (4 AUTHENTIC PARAGRAPHS) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-[17px] text-slate-600 leading-[1.75]">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block">
              A DIRECT NOTE ON HOW WE WORK
            </span>

            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              For years, growing businesses faced an unfair choice: buy rigid off-the-shelf software that forces your team to change how they work, or pay inflated enterprise agency quotes for basic custom tools.
            </p>

            <p>
              AI-assisted engineering has changed that equation—when used with discipline. Writing code is faster today, yet dependable business software cannot be built by blind prompting alone. It requires mapping real workflows, user permissions, and clean data structures before a single screen is designed.
            </p>

            <p>
              At VOOO LABS, we approach every business requirement from all angles. Instead of saying "this is too complex" or selling bloated modules you will never open, we engineer only what solves real operational friction.
            </p>

            <p>
              We also believe in complete financial transparency. You pay fairly for our engineering build, while direct essentials like your domain name and cloud hosting are set up under your own company account at actual provider cost—with <strong className="text-slate-950 font-bold">100% source code ownership</strong> in your name.
            </p>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION 3: THREE EDITORIAL PRINCIPLES (MARGIN-NUMBERED)
           ══════════════════════════════════════════════════════ */}
        <section 
          className="editorial-reveal pt-16 sm:pt-20 text-left"
          aria-label="Our Engineering Principles"
        >
          {/* SECTION LABEL */}
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-10 block">
            OUR ENGINEERING PRINCIPLES
          </span>

          {/* 3 HORIZONTAL MARGIN-NUMBERED ROWS (ZERO CLUNKY BOXES) */}
          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            
            {/* PRINCIPLE 01 (STUDIO BLUE ACCENT) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <div className="md:col-span-2">
                <span className="font-mono text-sm font-bold text-[#4285F4]">
                  01
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  Workflow Depth Over Blind Prompting
                </h3>
              </div>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We study your daily operations, roles, and edge cases first—using AI to accelerate clean engineering, never to cut corners.
              </p>
            </div>

            {/* PRINCIPLE 02 (STUDIO PURPLE ACCENT) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <div className="md:col-span-2">
                <span className="font-mono text-sm font-bold text-[#7C3AED]">
                  02
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  Right-Sized Scope & Honest Infrastructure
                </h3>
              </div>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We build exactly what your business needs today without enterprise price inflation, keeping domain and cloud billing transparent at actual cost.
              </p>
            </div>

            {/* PRINCIPLE 03 (STUDIO ORANGE ACCENT) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <div className="md:col-span-2">
                <span className="font-mono text-sm font-bold text-[#F97316]">
                  03
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  Direct Builder Communication & Full Ownership
                </h3>
              </div>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                You speak directly with the engineer building your system, and receive complete GitHub source code and database ownership on handover.
              </p>
            </div>

          </div>

          {/* CLEAN, MINIMAL STUDIO FOOTNOTE */}
          <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div>
              VOOO LABS · SYSTEMS ARCHITECTURE STUDIO
            </div>
            <div className="flex items-center gap-6">
              <Link to="/services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Explore Services →
              </Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact Studio →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
