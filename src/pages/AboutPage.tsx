import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import LiquidButton from '../components/shared/LiquidButton';

export default function AboutPage() {
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtle GSAP entrance choreography: calm and editorial, zero bounce
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
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      <div 
        ref={containerRef}
        className="max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24"
      >
        
        {/* ══════════════════════════════════════════════════════
            SECTION 1: CALM STUDIO THESIS HEADER
           ══════════════════════════════════════════════════════ */}
        <header className="editorial-reveal max-w-3xl pb-16 text-left">
          {/* EYEBROW */}
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4285F4] font-semibold block">
            ABOUT VOOO LABS · STUDIO MANIFESTO
          </span>

          {/* H1 HEADLINE */}
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-950 leading-[1.12]">
            Practical Business Software, Engineered Without Enterprise Bloat.
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
          {/* LEFT: FOUNDER PORTRAIT FRAME (4:5 RATIO) */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] w-full max-w-[320px] rounded-[16px] overflow-hidden bg-[#F8F9FC] border border-slate-200/80 relative flex items-center justify-center">
              {!imgError ? (
                <img 
                  src="/images/founder.jpg" 
                  alt="Vrushabh Shinde — Founder, VOOO LABS" 
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top" 
                />
              ) : (
                /* ARCHITECTURAL MONOGRAM FALLBACK (ZERO BROKEN-IMAGE ICONS) */
                <div className="flex flex-col items-center justify-center p-6 text-center select-none">
                  {/* SUBTLE SCHEMATIC GRID */}
                  <div 
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 font-mono text-3xl sm:text-4xl font-bold text-slate-400 tracking-wider">
                    VS
                  </span>
                  <span className="relative z-10 font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-3">
                    FOUNDER PORTRAIT
                  </span>
                  <span className="relative z-10 font-mono text-[10px] text-slate-400/80 mt-1">
                    VOOO LABS STUDIO
                  </span>
                </div>
              )}
            </div>

            {/* CLEAN CAPTION */}
            <div className="mt-4 space-y-0.5 text-left">
              <div className="text-base font-semibold text-slate-950">
                Vrushabh Shinde
              </div>
              <div className="font-mono text-xs text-slate-500">
                Founder & Systems Architect, VOOO LABS
              </div>
            </div>
          </div>

          {/* RIGHT: DIRECT NOTE (4 AUTHENTIC PARAGRAPHS) */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-[17px] text-slate-600 leading-[1.75]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 block font-semibold">
              A DIRECT NOTE ON HOW WE WORK
            </span>

            <p>
              For years, growing businesses faced an unfair choice: buy rigid off-the-shelf software that forces your team to change how they work, or pay inflated enterprise agency quotes for basic custom tools.
            </p>

            <p>
              AI-assisted engineering has changed that equation—when used with discipline. Writing code is faster today, yet dependable business software cannot be built by blind prompting alone. It requires mapping real workflows, user permissions, and clean data structures before a single screen is designed.
            </p>

            <p>
              At VOOO LABS, we approach every business requirement from all angles. Instead of saying "this is too complex" or selling bloated modules you will never open, we engineer only what solves real operational friction.
            </p>

            <p>
              We also believe in complete financial transparency. You pay fairly for our engineering build, while direct essentials like your domain name and cloud hosting are set up under your own company account at actual provider cost—with 100% source code ownership in your name.
            </p>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION 3: THREE EDITORIAL PRINCIPLES (MARGIN-NUMBERED)
           ══════════════════════════════════════════════════════ */}
        <section 
          className="editorial-reveal py-16 sm:py-20 text-left"
          aria-label="Our Engineering Principles"
        >
          {/* SECTION LABEL */}
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#4285F4] mb-10 block font-semibold">
            OUR ENGINEERING PRINCIPLES
          </span>

          {/* 3 HORIZONTAL MARGIN-NUMBERED ROWS */}
          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            
            {/* PRINCIPLE 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <span className="md:col-span-2 font-mono text-sm text-slate-400 font-semibold">
                01
              </span>
              <h3 className="md:col-span-4 text-lg font-semibold text-slate-950 leading-snug">
                Workflow Depth Over Blind Prompting
              </h3>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We study your daily operations, roles, and edge cases first—using AI to accelerate clean engineering, never to cut corners.
              </p>
            </div>

            {/* PRINCIPLE 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <span className="md:col-span-2 font-mono text-sm text-slate-400 font-semibold">
                02
              </span>
              <h3 className="md:col-span-4 text-lg font-semibold text-slate-950 leading-snug">
                Right-Sized Scope & Honest Infrastructure
              </h3>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We build exactly what your business needs today without enterprise price inflation, keeping domain and cloud billing transparent at actual cost.
              </p>
            </div>

            {/* PRINCIPLE 03 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
              <span className="md:col-span-2 font-mono text-sm text-slate-400 font-semibold">
                03
              </span>
              <h3 className="md:col-span-4 text-lg font-semibold text-slate-950 leading-snug">
                Direct Builder Communication & Full Ownership
              </h3>
              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                You speak directly with the engineer building your system, and receive complete GitHub source code and database ownership on handover.
              </p>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION 4: CALM, OPEN CLOSING INVITATION
           ══════════════════════════════════════════════════════ */}
        <section 
          className="editorial-reveal pt-16 pb-8 text-center max-w-2xl mx-auto"
          aria-label="Direct Project Inquiry"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 leading-tight">
            Have a Workflow or Website You Want Engineered Properly?
          </h2>

          <p className="mt-3 text-slate-600 leading-relaxed text-base">
            Share what your business needs—we will give you a clear, honest breakdown of scope and actual infrastructure costs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <LiquidButton
              to="/contact"
              variant="gradient"
              rounded="pill"
              size="lg"
              magnetic={true}
            >
              <span>Discuss your project</span>
              <ArrowRight size={16} />
            </LiquidButton>

            <Link
              to="/services"
              className="text-sm font-medium text-slate-700 hover:text-[#4285F4] transition-colors px-3 py-2 inline-flex items-center gap-1.5"
            >
              <span>Explore Our 4 Systems</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
