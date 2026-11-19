import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  RotateCcw, 
  MousePointerClick, 
  Zap, 
  MessageSquare, 
  XCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Layers, 
  PieChart 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { DuotoneCheckIcon } from '../components/shared/StudioIcons';

const EASING = [0.22, 1, 0.36, 1] as const;

interface AdScenario {
  id: string;
  pillLabel: string;
  query: string;
  leakyAd: string;
  leakyHome: string;
  leakyExit: string;
  voooAd: string;
  voooLander: string;
  voooSignal: string;
}

const AD_SCENARIOS: AdScenario[] = [
  {
    id: 'machinery',
    pillLabel: '"Industrial Machinery Supplier"',
    query: 'cnc machinery manufacturer western india',
    leakyAd: 'Broad Match Ad: "All Machines & Factory Equipment"',
    leakyHome: 'Generic /home with 18 header links, slideshow banners & blog cards',
    leakyExit: 'Visitor leaves after 14 seconds without finding specific CNC specs',
    voooAd: 'Exact Match Ad: "High-Precision CNC Milling & Lathe Machines"',
    voooLander: 'Dedicated /cnc-machines speed lander: CAD specs, pricing tier & video demo in 450ms',
    voooSignal: 'WhatsApp message pre-tagged: "[Google Ads: CNC-West] Inquiring about 3-Axis Miller"',
  },
  {
    id: 'clinic',
    pillLabel: '"Dental & Skin Clinic"',
    query: 'invisalign clear aligners specialist pune',
    leakyAd: 'Broad Match Ad: "Dentist Near You - All Treatments"',
    leakyHome: 'Unfocused clinic homepage listing 40 general procedures and tooth extraction',
    leakyExit: 'Buyer looking specifically for clear aligners bounces to competitor',
    voooAd: 'High-Intent Ad: "Certified Invisible Aligners & 3D Smile Scan"',
    voooLander: 'Focused /clear-aligners landing page with doctor bio, before/after cases & 0% EMI table',
    voooSignal: 'WhatsApp booking: "[Google Ads: Aligners-Pune] Requesting 3D Consultation Slot"',
  },
  {
    id: 'interior',
    pillLabel: '"Corporate Interior Contractor"',
    query: 'turnkey office interior contractor mumbai',
    leakyAd: 'Broad Match Ad: "Home & Office Painting & Renovation"',
    leakyHome: 'Outdated contractor site with residential kitchen photos and broken contact form',
    leakyExit: 'Procurement manager closes tab due to lack of corporate credibility',
    voooAd: 'B2B Targeted Ad: "Turnkey Commercial Office Interiors (5,000+ sq ft)"',
    voooLander: 'Dedicated /commercial-fitouts lander with corporate case studies & BOM estimator',
    voooSignal: 'WhatsApp RFQ: "[Google Ads: Office-Mumbai] Requesting Site Visit & Portfolio PDF"',
  },
];

const ENGINEERING_POINTS = [
  {
    num: '01',
    title: 'Commercial-Intent Keyword Filtering',
    desc: 'Exclude irrelevant consumer and DIY searches with rigorous negative keyword lists so your ad budget focuses strictly on serious buyers.',
  },
  {
    num: '02',
    title: 'Dedicated High-Speed Ad Landing Pages',
    desc: 'Custom landing pages built specifically for your ad campaigns—zero template bloat, sub-second cellular speed, and 100% query relevance.',
  },
  {
    num: '03',
    title: 'Form-Free WhatsApp & Call Attribution',
    desc: 'Know exactly which keyword and ad group generated each incoming WhatsApp message or phone inquiry without guessing.',
  },
  {
    num: '04',
    title: '100% Ad Account & Billing Ownership',
    desc: 'Your Google Ads account, campaign structures, and billing stay completely in your company name with full administrative access.',
  },
];

export default function GoogleAdsPage() {
  const [activeScenario, setActiveScenario] = useState<AdScenario>(AD_SCENARIOS[0]);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP animation triggered on scenario change or replay button
  const triggerGsapAnimation = () => {
    if (!comparisonRef.current) return;

    gsap.fromTo(
      '.journey-step-vooo',
      { opacity: 0, x: 12 },
      { opacity: 1, x: 0, duration: 0.35, stagger: 0.12, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.journey-step-leaky',
      { opacity: 0, x: -8 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out' }
    );
  };

  useEffect(() => {
    triggerGsapAnimation();
  }, [activeScenario]);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Google Ads campaigns and dedicated high-speed landing pages.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: BREADCRUMB & CENTERED EDITORIAL HERO
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-14 bg-white text-center relative overflow-hidden"
        aria-label="Targeted Google Search Ads Overview"
      >
        {/* SUBTLE AMBIENT GLOW */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-orange-500/[0.03] blur-[150px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          
          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
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
            <span className="font-bold text-slate-950">Target high intent,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">eliminate</span>
            <span className="font-extrabold text-orange-600">wasted spend.</span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
          >
            <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-widest block mb-3">
              04 / TARGETED GOOGLE ADS & LANDING SYSTEMS
            </span>
          </motion.div>

          {/* H1 HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.14]"
          >
            <span>Stop Sending Paid Ad Clicks to</span>
            <span className="shimmer-text block mt-1">Slow, Distracting Homepages.</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Buying clicks is easy—turning those clicks into real WhatsApp and phone inquiries takes a fast, query-matched landing page and transparent source tracking.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
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
          SECTION 2: FULL-WIDTH AD CLICK JOURNEY COMPARATOR (GSAP)
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-12 sm:py-16 bg-white border-y border-slate-200/80 text-left"
        aria-label="Interactive Click Journey Comparator"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          {/* TOP CONTROL STRIP */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
                SCENARIO:
              </span>
              {AD_SCENARIOS.map((sc) => {
                const isSelected = activeScenario.id === sc.id;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setActiveScenario(sc)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A0F1E] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
                    }`}
                  >
                    {sc.pillLabel}
                  </button>
                );
              })}
            </div>

            {/* REPLAY ANIMATION BUTTON */}
            <button
              type="button"
              onClick={triggerGsapAnimation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200/80 text-xs font-mono font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Replay Click Journey ↻</span>
            </button>
          </div>

          {/* SIDE-BY-SIDE OPEN HAIRLINE COMPARISON STAGE */}
          <div ref={comparisonRef} className="pt-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            
            {/* LEFT COLUMN: TYPICAL AGENCY SETUP (LEAKY PATH) */}
            <div className="py-6 md:py-0 md:pr-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-bold">
                  WITHOUT DEDICATED LANDING PAGE
                </span>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Leaky Funnel
                </span>
              </div>

              {/* 3 SEQUENTIAL STEPS IN MUTED SLATE */}
              <div className="space-y-4">
                <div className="journey-step-leaky p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-1 opacity-80">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    01 · BROAD KEYWORD AD CLICK
                  </span>
                  <p className="text-xs font-medium text-slate-700">
                    {activeScenario.leakyAd}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Pays for vague, irrelevant searches alongside serious commercial buyers.
                  </p>
                </div>

                <div className="journey-step-leaky p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-1 opacity-80">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    02 · LANDS ON CLUTTERED HOMEPAGE
                  </span>
                  <p className="text-xs font-medium text-slate-700">
                    {activeScenario.leakyHome}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Visitor gets distracted by 12 navigation links and slow banner sliders.
                  </p>
                </div>

                <div className="journey-step-leaky p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-1 opacity-80">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    03 · VISITOR EXITS / UNTRACKED CALL
                  </span>
                  <p className="text-xs font-medium text-slate-700">
                    {activeScenario.leakyExit}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Zero clear record of which ad or keyword generated incoming inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: VOOO LABS ENGINEERED SETUP (DIRECT PATH) */}
            <div className="py-6 md:py-0 md:pl-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#4285F4] font-bold">
                  WITH FOCUSED LANDING & ATTRIBUTION
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  Direct Funnel
                </span>
              </div>

              {/* 3 GSAP-ANIMATED SEQUENTIAL STEPS WITH STUDIO BLUE LEFT ACCENT */}
              <div className="space-y-4">
                <div className="journey-step-vooo p-4 rounded-xl bg-white border border-slate-200/80 border-l-2 border-l-[#4285F4] shadow-2xs space-y-1">
                  <span className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-wider block">
                    01 · HIGH-INTENT COMMERCIAL AD
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    {activeScenario.voooAd}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Targets buyers actively searching for your exact offering using negative keyword filters.
                  </p>
                </div>

                <div className="journey-step-vooo p-4 rounded-xl bg-white border border-slate-200/80 border-l-2 border-l-[#4285F4] shadow-2xs space-y-1">
                  <span className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-wider block">
                    02 · FAST, QUERY-MATCHED LANDING PAGE
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    {activeScenario.voooLander}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Opens immediately with the exact service proof, technical specs, and clear 1-tap call-to-action.
                  </p>
                </div>

                <div className="journey-step-vooo p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 border-l-2 border-l-emerald-600 shadow-2xs space-y-1">
                  <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider block">
                    03 · 1-TAP WHATSAPP WITH SOURCE TAG
                  </span>
                  <p className="text-xs font-bold text-emerald-950 font-mono">
                    {activeScenario.voooSignal}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-sans">
                    Inquiry arrives directly in your WhatsApp inbox with exact referral context pre-attached.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: OPEN 4-POINT ENGINEERING GRID
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="4-Point Paid Architecture"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
            ENGINEERED AD DELIVERABLES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            How We Structure Paid Search Campaigns for Real Attribution.
          </h2>

          {/* 4-POINT OPEN GRID (1-LINE DESCRIPTIONS) */}
          <div className="mt-12 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 divide-y divide-slate-200/80">
            {ENGINEERING_POINTS.map((item, idx) => (
              <div 
                key={item.num}
                className={`py-8 md:px-8 ${
                  idx % 2 === 0 ? 'md:pl-0' : 'md:pr-0 md:border-l md:border-slate-200/80'
                } flex flex-col justify-start`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-orange-600">
                    {item.num}
                  </span>
                  <DuotoneCheckIcon size={16} accentColor="#EA580C" />
                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: DARK CONTRAST STRIP & FULL-CIRCLE BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-20 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Full-Circle Navigation and Closing CTA"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                COMPLETE VISIBILITY LOOP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Now connect your ad traffic to a fast, conversion-engineered website.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
                Paid search campaigns achieve their highest return when backed by a custom, sub-second business website that loads in under 500 milliseconds.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <LiquidButton
                to="/services/websites"
                variant="white"
                rounded="pill"
                size="lg"
                magnetic={true}
                className="whitespace-nowrap"
              >
                <span>Explore 01 Business Websites</span>
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
