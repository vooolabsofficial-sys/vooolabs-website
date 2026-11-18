import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Navigation, 
  MessageSquare, 
  Star, 
  CheckCircle2, 
  Share2, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

type PhaseType = 'discovery' | 'reviewLoop';

const PILLARS = [
  {
    num: '01',
    title: 'Profile & Category Precision',
    desc: 'Accurate primary and secondary business categories, complete service listings, high-resolution location photos, and geo-aligned descriptions matching buyer searches.',
    tags: ['Category Mapping', 'Hours & Services', 'Geo Verification'],
  },
  {
    num: '02',
    title: 'Website & Local NAP Alignment',
    desc: 'Consistent Name, Address, Phone (NAP), and local schema connecting your website to Google Maps so search engines recognize your true physical service footprint.',
    tags: ['NAP Standardization', 'Local Schema', 'Zero Discrepancy'],
  },
  {
    num: '03',
    title: '1-Tap WhatsApp Review System',
    desc: 'Simple post-service WhatsApp review workflow that opens Google review dialog directly on the customer’s phone—helping satisfied clients share authentic feedback.',
    tags: ['1-Tap Routing', 'Zero Friction', 'Reputation Velocity'],
  },
];

export default function GoogleMapsPage() {
  const [activePhase, setActivePhase] = useState<PhaseType>('discovery');
  const stageRef = useRef<HTMLDivElement>(null);
  const radarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP animation on phase switch
  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
      );
    }, stageRef);

    return () => ctx.revert();
  }, [activePhase]);

  // Subtle GSAP radar pulse animation
  useEffect(() => {
    if (!radarRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.radar-pulse', {
        scale: 1.35,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        stagger: 0.7,
        ease: 'power1.out',
      });
    }, radarRef);

    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Google Maps optimization and local review setup for our business.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: BREADCRUMB & ASYMMETRIC HEADER
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-12 bg-white relative overflow-hidden text-left"
        aria-label="Google Maps and Local Authority Overview"
      >
        {/* SUBTLE AMBIENT GLOW */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="mb-8"
          >
            <Link 
              to="/seo-ai" 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>Back to SEO & AI Hub</span>
            </Link>
          </motion.div>

          {/* STUDIO PHILOSOPHY TAG */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04, ease: EASING }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
          >
            <span className="font-bold text-slate-950">First make it work,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">then make it</span>
            <span className="font-extrabold text-blue-600">beautiful.</span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
          >
            <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-3">
              03 / GOOGLE MAPS & LOCAL AUTHORITY
            </span>
          </motion.div>

          {/* H1 HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-4xl"
          >
            <span>Turn Nearby Local Searches into Direct</span>
            <span className="shimmer-text block mt-1">Calls, Visits & Authentic Reviews.</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl"
          >
            When buyers search nearby, an accurate Google Business Profile and a steady stream of genuine customer reviews decide who gets the call. We set up both cleanly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <LiquidButton
              to="/contact?service=seo-ai"
              variant="primary"
              rounded="pill"
              size="lg"
              magnetic={true}
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </LiquidButton>

            <LiquidButton
              href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              variant="whatsapp"
              rounded="pill"
              size="lg"
              magnetic={true}
            >
              <span>Discuss on WhatsApp</span>
              <ArrowUpRight size={16} />
            </LiquidButton>
          </motion.div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: BESPOKE 12-COLUMN LOCAL ECOSYSTEM STAGE (GSAP)
         ══════════════════════════════════════════════════════ */}
      <section 
        className="my-10 py-12 sm:py-16 bg-white border-y border-slate-200/80 text-left"
        aria-label="Interactive Local Ecosystem Stage"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT: ARCHITECTURAL PROXIMITY RADAR (NO CARTOON SVGS) */}
            <div ref={radarRef} className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-square max-w-[320px] rounded-full border border-slate-200/80 bg-[#F8F9FC] relative flex items-center justify-center p-6 overflow-hidden">
                
                {/* CONCENTRIC HAIRLINE RINGS */}
                <div className="absolute inset-8 rounded-full border border-slate-200/70 pointer-events-none" />
                <div className="absolute inset-16 rounded-full border border-slate-200/60 pointer-events-none" />
                <div className="absolute inset-24 rounded-full border border-slate-200/50 pointer-events-none" />

                {/* ANIMATING RADAR PULSES */}
                <div className="radar-pulse absolute w-14 h-14 rounded-full bg-emerald-500/20 pointer-events-none" />
                <div className="radar-pulse absolute w-14 h-14 rounded-full bg-blue-500/15 pointer-events-none" />

                {/* CENTER BEACON */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-1.5">
                    <MapPin size={18} />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-900 bg-white border border-slate-200/90 px-2 py-0.5 rounded shadow-xs">
                    Your Location
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 font-medium">Verified Profile</span>
                </div>

                {/* FLOATING DISTANCE PILLS */}
                <div className="absolute top-4 left-6 z-10 bg-white border border-slate-200/80 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-slate-700 shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>2 km · Direct Call</span>
                </div>

                <div className="absolute bottom-6 left-4 z-10 bg-white border border-slate-200/80 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-slate-700 shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>4 km · Directions Tap</span>
                </div>

                <div className="absolute top-12 right-4 z-10 bg-white border border-slate-200/80 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-slate-700 shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>6 km · WhatsApp Inquiry</span>
                </div>
              </div>

              <span className="font-mono text-[11px] text-slate-400 mt-3 text-center uppercase tracking-wider">
                PROXIMITY RADAR: LOCAL BUYER RADIUS
              </span>
            </div>

            {/* RIGHT: 2-PHASE LOCAL CYCLE SWITCHER */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* TWO CRISP UNDERLINE TABS */}
              <div className="flex items-center gap-6 border-b border-slate-200/80 pb-3">
                <button
                  type="button"
                  onClick={() => setActivePhase('discovery')}
                  className={`text-sm font-bold pb-3 -mb-3 transition-colors cursor-pointer border-b-2 ${
                    activePhase === 'discovery'
                      ? 'border-emerald-600 text-slate-950'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Phase 01 · Nearby Buyer Discovery
                </button>

                <button
                  type="button"
                  onClick={() => setActivePhase('reviewLoop')}
                  className={`text-sm font-bold pb-3 -mb-3 transition-colors cursor-pointer border-b-2 ${
                    activePhase === 'reviewLoop'
                      ? 'border-emerald-600 text-slate-950'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Phase 02 · 1-Tap WhatsApp Review Loop
                </button>
              </div>

              {/* DYNAMIC STAGE CONTENT (GSAP ANIMATED) */}
              <div ref={stageRef}>
                
                {/* PHASE 01: NEARBY BUYER DISCOVERY */}
                {activePhase === 'discovery' && (
                  <div className="p-6 sm:p-7 rounded-[18px] bg-[#F8F9FC] border border-slate-200/90 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                          VERIFIED GOOGLE BUSINESS PROFILE
                        </span>
                        <h3 className="text-base font-bold text-slate-950 mt-1">
                          Your Business Name
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-slate-500 bg-white border border-slate-200/80 px-2.5 py-1 rounded-md">
                        Open · Closes 8 PM
                      </span>
                    </div>

                    {/* METADATA ROWS */}
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span><strong>Primary Category:</strong> Industrial Equipment Supplier & Distributor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span><strong>Service Area:</strong> Serving Mumbai, Pune, Thane & Western Industrial Corridor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span><strong>Website & NAP Sync:</strong> Matched exact coordinates and phone number with domain schema</span>
                      </div>
                    </div>

                    {/* 3 INTERACTIVE ACTION INDICATORS */}
                    <div className="pt-2 flex flex-wrap gap-2.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-md text-xs font-semibold text-slate-800 shadow-2xs">
                        <Phone size={13} className="text-blue-600" />
                        <span>Call Direct</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-md text-xs font-semibold text-slate-800 shadow-2xs">
                        <MessageSquare size={13} className="text-emerald-600" />
                        <span>WhatsApp Chat</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-md text-xs font-semibold text-slate-800 shadow-2xs">
                        <Navigation size={13} className="text-purple-600" />
                        <span>Directions (Maps)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PHASE 02: 1-TAP WHATSAPP REVIEW LOOP */}
                {activePhase === 'reviewLoop' && (
                  <div className="p-6 sm:p-7 rounded-[18px] bg-white border border-emerald-300 shadow-xs space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          POST-SERVICE 1-TAP REVIEW PROTOCOL
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">Zero Customer Friction</span>
                    </div>

                    {/* SIMULATED WHATSAPP MESSAGE SENT TO CLIENT */}
                    <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between text-emerald-900 font-bold text-[11px]">
                        <span>WhatsApp Automation Message:</span>
                        <span className="font-mono text-[10px] text-emerald-700">Delivered</span>
                      </div>
                      <p className="text-slate-800 leading-relaxed font-sans">
                        "Hi Rajesh, thank you for choosing our engineering team today! If you had a great experience, could you spare 15 seconds to leave us a quick rating on Google? Tap here: <span className="text-blue-600 underline font-medium">yourdomain.in/review</span>"
                      </p>
                    </div>

                    {/* RESULTING DIRECT GOOGLE REVIEW PROMPT */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs space-y-1.5">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <span className="text-slate-800 font-bold ml-1.5">Direct 5-Star Dialog Opens</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">
                        Bypasses searching or navigating Google Maps manually. Customer directly taps rating and submits in 1 click.
                      </p>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: OPEN 3-COLUMN HORIZONTAL BREAKDOWN
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="3 Pillars of Local Authority"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
            LOCAL ENGINE SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            How We Build Real Physical Location Authority.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Google prioritizes verified accuracy and ongoing customer sentiment over keyword stuffing. Here is our exact setup.
          </p>

          {/* 3 OPEN COLUMNS WITH VERTICAL HAIRLINES (NO REPETITIVE BOXES) */}
          <div className="mt-12 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-emerald-600 block mb-3">
                    PILLAR {pillar.num}
                  </span>

                  <h3 className="text-lg font-bold text-slate-950 mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: DARK TECHNICAL CONTRAST & NEXT PAGE BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-20 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Next Step: Google Search Ads"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Now see how targeted Google Ads route high-intent buyers into fast landing funnels.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
                Discover why sending paid ad clicks to cluttered homepages wastes marketing budget—and how dedicated speed landing pages convert clicks into WhatsApp leads.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <LiquidButton
                to="/seo-ai/google-ads"
                variant="white"
                rounded="pill"
                size="lg"
                magnetic={true}
                className="whitespace-nowrap"
              >
                <span>Next: Targeted Ads & Landers</span>
                <ArrowRight size={16} />
              </LiquidButton>

              <Link
                to="/seo-ai"
                className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors pt-2"
              >
                <ArrowLeft size={13} />
                <span>Back to 4 Channels Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
