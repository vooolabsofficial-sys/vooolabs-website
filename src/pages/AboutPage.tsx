import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

gsap.registerPlugin(ScrollTrigger);

type PhilosophyMode = 'beautiful' | 'work';

// Synthesized mechanical micro-click sound via Web Audio API
// Synthesized acoustic sound via Web Audio API: resonant liquid droplet for Beautiful, tactile relay click for Work
function playMechanicalClick(isWorkMode: boolean) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isWorkMode) {
      // Tactile relay mechanical click
      osc.type = 'square';
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } else {
      // Hydrodynamic resonant water droplet "blip/plop"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1380, ctx.currentTime + 0.022);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.065);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.075);
    }
  } catch {
    // AudioContext blocked or not allowed until interaction
  }
}

export default function AboutPage() {
  const [mode, setMode] = useState<PhilosophyMode>('beautiful');
  const containerRef = useRef<HTMLDivElement>(null);
  const scanBeamRef = useRef<HTMLDivElement>(null);
  const liquidRingRef = useRef<HTMLDivElement>(null);
  const liquidEchoRingRef = useRef<HTMLDivElement>(null);
  const liquidDropletRef = useRef<HTMLDivElement>(null);
  const toggleDeckRef = useRef<HTMLDivElement>(null);
  const fallbackCurtainRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP Entrance & ScrollTrigger line draws
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Masked hero headline reveal
      gsap.fromTo(
        '.hero-title-line',
        { yPercent: 105, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // Self-drawing 1px hairlines on scroll
      gsap.utils.toArray<HTMLElement>('.hairline-draw').forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });

      // Subtle stagger reveal for principles
      gsap.fromTo(
        '.principle-row',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.principles-container',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Clean GSAP fallback curtain if browser lacks View Transitions API
  const runFallbackCurtainTransform = (
    nextMode: PhilosophyMode,
    x: number,
    y: number,
    endRadius: number
  ) => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !fallbackCurtainRef.current) {
      flushSync(() => {
        setMode(nextMode);
      });
      return;
    }

    const curtain = fallbackCurtainRef.current;
    gsap.killTweensOf(curtain);
    gsap.set(curtain, {
      display: 'block',
      opacity: 1,
      backgroundColor: nextMode === 'work' ? '#F1F5F9' : '#FFFFFF',
      clipPath: `circle(0px at ${x}px ${y}px)`,
    });

    gsap.to(curtain, {
      clipPath: `circle(${endRadius}px at ${x}px ${y}px)`,
      duration: 0.85,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      onComplete: () => {
        flushSync(() => {
          setMode(nextMode);
        });
        gsap.to(curtain, {
          opacity: 0,
          duration: 0.25,
          ease: 'power1.out',
          onComplete: () => {
            gsap.set(curtain, { display: 'none' });
          },
        });
      },
    });
  };

  // Circular Clip-Path Transform Animation (View Transitions API + flushSync + fallback)
  const handleModeToggle = (
    nextMode: PhilosophyMode,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (nextMode === mode) return;

    // Play tactile mechanical / resonant water droplet sound
    playMechanicalClick(nextMode === 'work');

    // Fluid liquid squash-and-stretch on the toggle switch deck
    if (toggleDeckRef.current) {
      gsap.fromTo(
        toggleDeckRef.current,
        { scaleX: 0.93, scaleY: 0.91 },
        { scaleX: 1, scaleY: 1, duration: 0.55, ease: 'elastic.out(1.2, 0.35)' }
      );
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const isTargetWork = nextMode === 'work';

    // 1. Rebound Droplet Splash Ripple at origin (x, y)
    if (liquidDropletRef.current) {
      const droplet = liquidDropletRef.current;
      gsap.killTweensOf(droplet);
      gsap.set(droplet, {
        left: x,
        top: y,
        width: 0,
        height: 0,
        opacity: 0.95,
        border: isTargetWork
          ? '2px solid rgba(15, 23, 42, 0.8)'
          : '2px solid rgba(255, 255, 255, 0.95)',
        boxShadow: isTargetWork
          ? '0 0 16px rgba(15, 23, 42, 0.45)'
          : '0 0 22px rgba(66, 133, 244, 0.8)',
      });
      gsap.to(droplet, {
        width: 150,
        height: 150,
        duration: 0.5,
        ease: 'power2.out',
        opacity: 0,
      });
    }

    // 2. Primary Luminous Liquid Shockwave Meniscus across the screen
    if (liquidRingRef.current) {
      const ring = liquidRingRef.current;
      gsap.killTweensOf(ring);
      gsap.set(ring, {
        left: x,
        top: y,
        width: 0,
        height: 0,
        opacity: 1,
        borderColor: isTargetWork ? 'rgba(15, 23, 42, 0.85)' : 'rgba(66, 133, 244, 0.95)',
        boxShadow: isTargetWork
          ? '0 0 36px rgba(15, 23, 42, 0.5), inset 0 0 24px rgba(255, 255, 255, 0.35)'
          : '0 0 45px rgba(66, 133, 244, 0.75), inset 0 0 28px rgba(255, 255, 255, 0.75)',
        borderWidth: '3.5px',
        borderStyle: 'solid',
      });
      gsap.to(ring, {
        width: endRadius * 2.25,
        height: endRadius * 2.25,
        duration: 0.95,
        ease: 'cubic-bezier(0.2, 0.9, 0.28, 1)',
        opacity: 0,
      });
    }

    // 3. Trailing Secondary Liquid Echo Wave
    if (liquidEchoRingRef.current) {
      const echo = liquidEchoRingRef.current;
      gsap.killTweensOf(echo);
      gsap.set(echo, {
        left: x,
        top: y,
        width: 0,
        height: 0,
        opacity: 0.7,
        borderColor: isTargetWork ? 'rgba(15, 23, 42, 0.35)' : 'rgba(66, 133, 244, 0.5)',
        boxShadow: isTargetWork
          ? '0 0 22px rgba(15, 23, 42, 0.2)'
          : '0 0 28px rgba(66, 133, 244, 0.4)',
        borderWidth: '2px',
        borderStyle: 'solid',
      });
      gsap.to(echo, {
        width: endRadius * 2.05,
        height: endRadius * 2.05,
        duration: 1.05,
        delay: 0.05,
        ease: 'cubic-bezier(0.22, 0.95, 0.3, 1)',
        opacity: 0,
      });
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition || prefersReduced) {
      // Clean GSAP fallback curtain if browser lacks View Transitions API
      runFallbackCurtainTransform(nextMode, x, y, endRadius);
      return;
    }

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        setMode(nextMode);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 920,
          easing: 'cubic-bezier(0.2, 0.9, 0.28, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  // Desktop-only 3D Optical Tilt for portrait in Beautiful mode
  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode === 'work' || !portraitFrameRef.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = portraitFrameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(portraitFrameRef.current, {
      rotateY: x * 5, // ±2.5 deg max
      rotateX: -y * 5,
      duration: 0.35,
      ease: 'power1.out',
      transformPerspective: 1000,
    });
  };

  const handlePortraitMouseLeave = () => {
    if (!portraitFrameRef.current) return;
    gsap.to(portraitFrameRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const isWork = mode === 'work';

  return (
    <div
      ref={containerRef}
      className={`page-wrap min-h-screen text-slate-900 select-none relative overflow-hidden transition-colors duration-500 ${
        isWork ? 'bg-[#F1F5F9]' : 'bg-white'
      }`}
    >
      {/* 2PX STUDIO BRAND PROGRESS GRADIENT LINE */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-30"
        aria-hidden="true"
      />

      {/* GSAP OPTICAL SWEEP BEAM (FIRES ON MODE TOGGLE) */}
      <div
        ref={scanBeamRef}
        className="pointer-events-none fixed inset-x-0 top-0 h-[2px] z-40 opacity-0"
        style={{
          background: isWork
            ? 'linear-gradient(90deg, transparent, #0A0F1E, transparent)'
            : 'linear-gradient(90deg, transparent, #4285F4, transparent)',
          boxShadow: isWork
            ? '0 0 12px rgba(10, 15, 30, 0.4)'
            : '0 0 16px rgba(66, 133, 244, 0.5)',
        }}
        aria-hidden="true"
      />

      {/* 1. PRIMARY EXPANDING LIQUID SHOCKWAVE RING */}
      <div
        ref={liquidRingRef}
        className="pointer-events-none fixed rounded-full z-40 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'width, height, top, left, opacity',
        }}
        aria-hidden="true"
      />

      {/* 2. SECONDARY TRAILING LIQUID ECHO RIPPLE */}
      <div
        ref={liquidEchoRingRef}
        className="pointer-events-none fixed rounded-full z-40 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'width, height, top, left, opacity',
        }}
        aria-hidden="true"
      />

      {/* 3. REBOUND DROPLET SURFACE TENSION RIPPLE AT ORIGIN */}
      <div
        ref={liquidDropletRef}
        className="pointer-events-none fixed rounded-full z-40 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'width, height, top, left, opacity',
        }}
        aria-hidden="true"
      />

      {/* GSAP FALLBACK CURTAIN FOR BROWSERS WITHOUT VIEW TRANSITIONS API */}
      <div
        ref={fallbackCurtainRef}
        className="pointer-events-none fixed inset-0 z-50 hidden"
        aria-hidden="true"
      />

      {/* SUBTLE TOP AMBIENT STUDIO BLUE WASH (BEAUTIFUL MODE) */}
      <div
        className={`absolute top-0 inset-x-0 h-[550px] pointer-events-none z-0 transition-opacity duration-700 ${
          isWork ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background:
            'radial-gradient(ellipse 65% 40% at 50% 0%, rgba(66,133,244,0.065), transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* SUBTLE 40PX ARCHITECTURAL GRID BACKDROP (WORK MODE ONLY) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 ${
          isWork
            ? 'opacity-100 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px]'
            : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10">

        {/* ══════════════════════════════════════════════════════
            PHASE 2: ELEVATED HERO — ORIGINAL THESIS + DUAL-MODE SWITCH
           ══════════════════════════════════════════════════════ */}
        <section
          className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-14 text-left"
          aria-label="Studio Philosophy and Dual-Mode Toggle"
        >
          {/* TOP MICRO-BADGE (ORIGINAL MANIFESTO BADGE PRESERVED) */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-4 select-none">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                isWork ? 'bg-slate-900' : 'bg-blue-600'
              }`}
              aria-hidden="true"
            />
            <span className="font-bold text-slate-950">Engineering discipline,</span>
            <span className="font-medium text-slate-600">zero agency</span>
            <span
              className={`font-extrabold transition-colors duration-300 ${
                isWork ? 'text-slate-950 font-mono' : 'text-blue-600'
              }`}
            >
              bloat.
            </span>
          </div>

          {/* HEADER ROW */}
          <div
            className={`mt-2 pb-10 transition-all duration-300 ${
              isWork
                ? 'border-b border-dashed border-slate-300/80'
                : 'border-b border-slate-200/80'
            }`}
          >
            {/* MASKED KINETIC HEADLINE & ORIGINAL THESIS */}
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-3">
                {isWork
                  ? 'SYS_MANIFESTO // LOGIC FIRST'
                  : 'ABOUT VOOO LABS · STUDIO MANIFESTO'}
              </span>

              {/* OVERSIZED BOLD TWO-LINE H1 */}
              <h1 className="mt-2 text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.04]">
                <span className="overflow-hidden block">
                  <span className="hero-title-line block text-slate-950">
                    First Make It Work.
                  </span>
                </span>
                <span className="overflow-hidden block mt-1 sm:mt-2">
                  {isWork ? (
                    <span className="hero-title-line block text-slate-400 font-mono text-3xl sm:text-5xl lg:text-[3.6rem] tracking-tight">
                      Then Make It Beautiful.{' '}
                      <span className="text-xs sm:text-sm text-slate-500 tracking-widest font-normal inline-block ml-1">
                        [CRAFT_LAYER: OFF]
                      </span>
                    </span>
                  ) : (
                    <span className="hero-title-line block shimmer-text">
                      Then Make It Beautiful.
                    </span>
                  )}
                </span>
              </h1>

              {/* ORIGINAL OPENING THESIS PRESERVED */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Practical business software, engineered without enterprise bloat. Modern AI has changed how fast software can be built—but reliable systems still require clear architectural thinking. We build custom websites, portals, and internal software shaped strictly around how your business operates.
              </p>
            </div>
          </div>

          {/* DEDICATED INTERACTIVE MODE SWITCH BAR — POSITIONED DIRECTLY BELOW THE LINE */}
          <div className="pt-7 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  isWork ? 'bg-orange-500' : 'bg-blue-600 animate-pulse'
                }`}
                aria-hidden="true"
              />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                {isWork ? (
                  <span>
                    <strong className="text-slate-950 font-bold">MODE 02: WORK</strong> · ARCHITECTURAL SKELETON & RAW LOGIC
                  </span>
                ) : (
                  <span>
                    <strong className="text-slate-950 font-bold">MODE 01: BEAUTIFUL</strong> · FINISHED HIGH-CRAFT PRODUCTION
                  </span>
                )}
              </span>
            </div>

            {/* PRECISION LIQUID SLIDING TOGGLE SWITCH */}
            <div
              ref={toggleDeckRef}
              className="relative inline-flex items-center p-1.5 rounded-full border border-slate-200/90 bg-[#F8F9FC] shadow-sm backdrop-blur-sm self-start sm:self-auto"
            >
              {/* SMOOTH SLIDING ACTIVE INDICATOR PILL */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0A0F1E] shadow-sm transition-transform duration-300 ease-out"
                style={{
                  left: '6px',
                  width: 'calc(50% - 6px)',
                  transform: isWork ? 'translateX(100%)' : 'translateX(0)',
                }}
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={(e) => handleModeToggle('beautiful', e)}
                className={`relative z-10 min-h-[44px] px-6 font-mono text-xs font-semibold rounded-full transition-colors duration-300 flex items-center justify-center cursor-pointer ${
                  !isWork ? 'text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={!isWork}
              >
                01. Beautiful
              </button>

              <button
                type="button"
                onClick={(e) => handleModeToggle('work', e)}
                className={`relative z-10 min-h-[44px] px-6 font-mono text-xs font-semibold rounded-full transition-colors duration-300 flex items-center justify-center cursor-pointer ${
                  isWork ? 'text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={isWork}
              >
                02. Work
              </button>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            PHASE 3: STICKY FOUNDER PORTRAIT + DIRECT FOUNDER NOTE
           ══════════════════════════════════════════════════════ */}
        <section
          className="max-w-6xl mx-auto px-6 py-12 lg:py-16 text-left"
          aria-label="Leadership Profile and Direct Operational Note"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ──────────────────────────────────────────────────
                LEFT COLUMN (lg:col-span-5 lg:sticky lg:top-28):
                CLEAN, UNOBSTRUCTED FOUNDER PORTRAIT + BOLD NAMEPLATE
               ────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              
              {/* CAD CORNER REGISTRATION BRACKETS (WORK MODE ONLY — OUTSIDE FRAME) */}
              <div className="relative">
                {isWork && (
                  <>
                    <span
                      className="absolute -top-3.5 -left-3.5 font-mono text-xs font-bold text-slate-500 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      ┌
                    </span>
                    <span
                      className="absolute -top-3.5 -right-3.5 font-mono text-xs font-bold text-slate-500 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      ┐
                    </span>
                    <span
                      className="absolute -bottom-3.5 -left-3.5 font-mono text-xs font-bold text-slate-500 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      └
                    </span>
                    <span
                      className="absolute -bottom-3.5 -right-3.5 font-mono text-xs font-bold text-slate-500 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      ┘
                    </span>
                  </>
                )}

                {/* STUDIO PORTRAIT CONTAINER (ZERO TEXT OVERLAYS OVER PHOTO) */}
                <div
                  ref={portraitFrameRef}
                  onMouseMove={handlePortraitMouseMove}
                  onMouseLeave={handlePortraitMouseLeave}
                  className={`overflow-hidden transition-all duration-500 ${
                    isWork
                      ? 'rounded-sm border border-dashed border-slate-400 bg-slate-100 shadow-none'
                      : 'rounded-2xl shadow-[0_28px_64px_rgba(10,15,30,0.11)] border border-slate-200/90 bg-[#F8F9FC]'
                  }`}
                >
                  <picture>
                    <source srcSet="/images/vrushabh-shinde.webp" type="image/webp" />
                    <img
                      src="/images/vrushabh-shinde.jpg"
                      alt="Vrushabh Shinde — Founder & CEO, Systems Architect, VOOO LABS"
                      width={400}
                      height={500}
                      decoding="async"
                      className={`w-full aspect-[4/5] object-cover object-top transition-all duration-700 ${
                        isWork
                          ? 'grayscale contrast-[1.08]'
                          : 'contrast-[1.04] saturate-[1.03]'
                      }`}
                    />
                  </picture>
                </div>
              </div>

              {/* TECHNICAL CAD METADATA (WORK MODE ONLY) */}
              {isWork && (
                <div className="mt-2.5 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-between">
                  <span>ASSET: PORTRAIT_4X5 · WEBP/JPG</span>
                  <span>CLS: 0 // RESPONSIVE</span>
                </div>
              )}

              {/* BOLD EXECUTIVE NAMEPLATE (CLEANLY BELOW FRAME) */}
              <div
                className={`pt-6 pb-6 transition-all duration-300 ${
                  isWork
                    ? 'border-b border-dashed border-slate-400/80'
                    : 'border-b border-slate-200/80'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                  Vrushabh Shinde
                </div>
                <div
                  className={`mt-1.5 font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isWork ? 'text-slate-700' : 'text-[#4285F4]'
                  }`}
                >
                  FOUNDER & CEO · SYSTEMS ARCHITECT, VOOO LABS
                </div>
                <div className="mt-3 text-xs font-medium text-slate-500">
                  Maharashtra, India · Pune · Nashik · Satara · Kolhapur
                </div>
              </div>

            </div>


            {/* ──────────────────────────────────────────────────
                RIGHT COLUMN (lg:col-span-7):
                PRESERVED 4-PARAGRAPH DIRECT FOUNDER NOTE
               ────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* SECTION EYEBROW */}
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 block">
                {isWork ? 'NODE_02 // FOUNDER_DIRECT_NOTE' : 'A DIRECT NOTE ON HOW WE WORK'}
              </span>

              {/* HEADLINE */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug">
                Built Directly With the Founder. Shaped Around Your Real Workflow.
              </h2>

              {/* PRESERVED 4 AUTHENTIC PARAGRAPHS WITH SUBTLE SCANNING LEADS */}
              <div className="space-y-6 text-base sm:text-[17px] text-slate-600 leading-[1.75] pt-2">
                
                {/* PARAGRAPH 1: MARKET GAP */}
                <div className="relative">
                  {isWork && (
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                      [01: MARKET_GAP]
                    </span>
                  )}
                  <p>
                    <strong className="text-slate-900 font-semibold">The real market problem: </strong>
                    For years, growing businesses faced an unfair choice: buy rigid off-the-shelf software that forces your team to change how they work, or pay inflated enterprise agency quotes for basic custom tools. Both models fail the business owner.
                  </p>
                </div>

                {/* PARAGRAPH 2: AI DISCIPLINE */}
                <div className="relative">
                  {isWork && (
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                      [02: AI_DISCIPLINE]
                    </span>
                  )}
                  <p>
                    <strong className="text-slate-900 font-semibold">AI speed meets engineering discipline: </strong>
                    Modern AI has dramatically accelerated how fast code can be written, but blind prompting never creates durable business software. We design clean data structures, user roles, and operational workflows first—then use modern AI workflows to engineer reliably faster.
                  </p>
                </div>

                {/* PARAGRAPH 3: ZERO BLOAT */}
                <div className="relative">
                  {isWork && (
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                      [03: ZERO_BLOAT]
                    </span>
                  )}
                  <p>
                    <strong className="text-slate-900 font-semibold">Zero excuses, zero unused modules: </strong>
                    We never dismiss real operational needs as "too complex" and never pad projects with bloated enterprise modules you will never open. We engineer only what solves actual operational friction.
                  </p>
                </div>

                {/* PARAGRAPH 4: IP OWNERSHIP */}
                <div className="relative">
                  {isWork && (
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                      [04: IP_OWNERSHIP]
                    </span>
                  )}
                  <p>
                    <strong className="text-slate-900 font-semibold">Financial transparency & 100% ownership: </strong>
                    You pay fairly for our engineering build. Direct essentials like your domain name and cloud hosting stay under your own company account at actual provider cost—with{' '}
                    <strong className="text-slate-950 font-bold">100% GitHub Source Code Ownership</strong> transferred directly to you.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            PHASE 4: THREE SIGNATURE ENGINEERING PRINCIPLES
           ══════════════════════════════════════════════════════ */}
        <section
          className="max-w-6xl mx-auto px-6 py-14 text-left principles-container"
          aria-label="Our Engineering Principles"
        >
          {/* SECTION LABEL */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block">
              {isWork ? 'SPEC_INDEX // THREE_ENGINEERING_AXES' : 'OUR ENGINEERING PRINCIPLES'}
            </span>
            {isWork && (
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                [PARADIGM: ZERO_FLUFF]
              </span>
            )}
          </div>

          {/* 3 CLEAN MARGIN-NUMBERED EDITORIAL ROWS WITH GSAP SELFDRAWING HAIRLINES */}
          <div
            className={`divide-y transition-colors duration-300 ${
              isWork
                ? 'divide-slate-300/80 border-y border-dashed border-slate-400/80'
                : 'divide-slate-200/80 border-y border-slate-200/80'
            }`}
          >
            {/* PRINCIPLE 01 (STUDIO BLUE ACCENT) */}
            <div className="principle-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-9 items-baseline">
              <div className="md:col-span-2 flex items-center gap-2">
                <span
                  className={`font-mono text-base font-bold transition-colors duration-300 ${
                    isWork ? 'text-slate-950' : 'text-[#4285F4]'
                  }`}
                >
                  01
                </span>
                {isWork && (
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    SPEC_01
                  </span>
                )}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                  Workflow Depth Over Blind Prompting
                </h3>
              </div>

              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We study your daily operations, roles, and edge cases first—using AI strictly to accelerate clean engineering, never as a fragile shortcut.
              </p>
            </div>

            {/* PRINCIPLE 02 (STUDIO PURPLE ACCENT) */}
            <div className="principle-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-9 items-baseline">
              <div className="md:col-span-2 flex items-center gap-2">
                <span
                  className={`font-mono text-base font-bold transition-colors duration-300 ${
                    isWork ? 'text-slate-950' : 'text-[#7C3AED]'
                  }`}
                >
                  02
                </span>
                {isWork && (
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    SPEC_02
                  </span>
                )}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                  Right-Sized Scope & Honest Infrastructure
                </h3>
              </div>

              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                We build exactly what your business needs today without enterprise price inflation, keeping domain and cloud billing transparent at actual provider cost under your own account.
              </p>
            </div>

            {/* PRINCIPLE 03 (STUDIO ORANGE ACCENT) */}
            <div className="principle-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-9 items-baseline">
              <div className="md:col-span-2 flex items-center gap-2">
                <span
                  className={`font-mono text-base font-bold transition-colors duration-300 ${
                    isWork ? 'text-slate-950' : 'text-[#F97316]'
                  }`}
                >
                  03
                </span>
                {isWork && (
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    SPEC_03
                  </span>
                )}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                  Direct Builder Communication & Full Ownership
                </h3>
              </div>

              <p className="md:col-span-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                Zero sales reps or agency middlemen—you speak directly with the engineer architecting your system, and receive complete GitHub source code and database ownership on handover.
              </p>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            PHASE 5: STUDIO FOOTNOTE & CLOSING ACTIONS
           ══════════════════════════════════════════════════════ */}
        <section
          className="max-w-6xl mx-auto px-6 pt-8 pb-24 text-left"
          aria-label="Studio Navigation and Contact Dispatch"
        >
          <div
            className={`pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-300 ${
              isWork
                ? 'border-t border-dashed border-slate-400/80'
                : 'border-t border-slate-200/80'
            }`}
          >
            {/* LEFT: BRAND MONO IDENTITY */}
            <div className="font-mono text-xs font-semibold tracking-[0.16em] text-slate-500">
              VOOO LABS · SYSTEMS ARCHITECTURE STUDIO
            </div>

            {/* RIGHT: CLEAN ACTIONS */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                <span>Explore Services</span>
                <span className="ml-1" aria-hidden="true">→</span>
              </Link>

              <LiquidButton
                to="/contact"
                variant="primary"
                rounded="pill"
                size="md"
                magnetic={true}
              >
                <span>Contact Studio</span>
                <ArrowRight size={14} />
              </LiquidButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
