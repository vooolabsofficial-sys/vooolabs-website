import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  RotateCcw, 
  ShieldCheck, 
  Server,
  Zap, 
  Cpu, 
  Layers, 
  Globe,
  Sparkles,
  Search,
  MessageSquare,
  Lock,
  Compass
} from 'lucide-react';
import { COMPANY, FOUNDER } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { openStudioAi } from '../components/shared/StudioAiModal';

type SystemType = 
  | 'Business Websites'
  | 'Custom Web Apps & Portals'
  | 'Custom Business Software'
  | 'Google SEO, AI Search & Ads';

type StageType = 
  | 'Starting Fresh'
  | 'Upgrading Existing System'
  | 'Replacing Spreadsheets & Manual Work';

interface SystemSpec {
  code: string;
  badge: string;
  icon: React.ElementType;
  stack: string;
  coreFocus: string;
  handover: string;
  description: string;
}

const SYSTEM_SPECS: Record<SystemType, SystemSpec> = {
  'Business Websites': {
    code: 'SYS-01/WEB',
    badge: '01',
    icon: Globe,
    description: 'Fast, search-ready websites with sub-second load times and form-free WhatsApp inquiry tracking.',
    stack: 'Custom React / Vite + Edge CDN + Automated WhatsApp Attribution',
    coreFocus: 'Sub-Second Speed, Search Schema & Direct WhatsApp Conversions',
    handover: '100% GitHub Codebase + Direct Cloudflare/Vercel Account Handover',
  },
  'Custom Web Apps & Portals': {
    code: 'SYS-02/APP',
    badge: '02',
    icon: Layers,
    description: '1-tap browser portals for clients, students, or bookings with zero app store friction.',
    stack: '1-Tap Progressive Web App + OTP Mobile Auth + PostgreSQL Database',
    coreFocus: 'Zero App Store Friction + Separate Client & Staff Role Dashboards',
    handover: 'Private Cloud Database + Full Production Repository Ownership',
  },
  'Custom Business Software': {
    code: 'SYS-03/OPS',
    badge: '03',
    icon: Cpu,
    description: 'Role-based internal dashboards replacing messy Excel sheets and manual WhatsApp chaos.',
    stack: 'Role-Based Internal Operations Engine + Automated Alerts + GST Billing',
    coreFocus: 'Live Pipelines, Inventory Tracking & Automated WhatsApp Invoicing',
    handover: 'Dedicated Company Database + 100% Proprietary IP Transferred',
  },
  'Google SEO, AI Search & Ads': {
    code: 'SYS-04/DISC',
    badge: '04',
    icon: Search,
    description: 'Technical SEO, ChatGPT/AI readiness, Google Maps, and high-speed ad landing pages.',
    stack: 'Technical SEO + JSON-LD Semantic Schema + Targeted Ad Landing Systems',
    coreFocus: 'Google Search, Maps, ChatGPT Citations & WhatsApp Click Tracking',
    handover: '100% Ad Account, Search Console & Code Ownership in Your Name',
  },
};

const SYSTEMS: { id: SystemType; label: string; spec: SystemSpec }[] = [
  { id: 'Business Websites', label: 'Business Websites', spec: SYSTEM_SPECS['Business Websites'] },
  { id: 'Custom Web Apps & Portals', label: 'Custom Web Apps & Portals', spec: SYSTEM_SPECS['Custom Web Apps & Portals'] },
  { id: 'Custom Business Software', label: 'Custom Business Software', spec: SYSTEM_SPECS['Custom Business Software'] },
  { id: 'Google SEO, AI Search & Ads', label: 'Google SEO, AI Search & Ads', spec: SYSTEM_SPECS['Google SEO, AI Search & Ads'] },
];

const STAGES: StageType[] = [
  'Starting Fresh',
  'Upgrading Existing System',
  'Replacing Spreadsheets & Manual Work',
];

const SUGGESTED_GOALS: Record<SystemType, string[]> = {
  'Business Websites': [
    'Need high-speed corporate site that converts visitors directly to WhatsApp inquiries',
    'Current website is outdated, slow on mobile, and not ranking in local search',
    'Launching new product line and need an executive-grade landing platform',
  ],
  'Custom Web Apps & Portals': [
    'Need a private portal for 50+ clients to track project updates and invoices',
    'Want automated student/parent attendance and grade reports in one web app',
    'Require 1-tap booking and service scheduling without app store downloads',
  ],
  'Custom Business Software': [
    'Replace messy Excel sheets for tracking daily distributor orders and inventory',
    'Automate multi-tier GST challan creation and vendor payment ledgers',
    'Connect 3 branch locations into a single real-time operations dashboard',
  ],
  'Google SEO, AI Search & Ads': [
    'Get cited as top authority when buyers ask ChatGPT & Google AI about our sector',
    'Optimize Google Maps local pack visibility across our primary service regions',
    'Run high-intent Google search ads with dedicated, high-converting landing pages',
  ],
};

export default function ContactPage() {
  const location = useLocation();

  // Smart auto-detection from route state or URL search parameters
  const getInitialService = (): SystemType => {
    const stateService = (location.state as { selectedService?: string })?.selectedService;
    if (stateService) {
      if (stateService.includes('Website')) return 'Business Websites';
      if (stateService.includes('Web App') || stateService.includes('Portal')) return 'Custom Web Apps & Portals';
      if (stateService.includes('Software')) return 'Custom Business Software';
      if (stateService.includes('SEO') || stateService.includes('Search') || stateService.includes('Ads')) return 'Google SEO, AI Search & Ads';
    }
    const params = new URLSearchParams(location.search);
    const queryService = params.get('service');
    if (queryService === 'websites') return 'Business Websites';
    if (queryService === 'web-apps') return 'Custom Web Apps & Portals';
    if (queryService === 'software') return 'Custom Business Software';
    if (queryService === 'seo-ai' || queryService === 'ai-growth' || queryService === 'seo') return 'Google SEO, AI Search & Ads';
    return 'Business Websites';
  };

  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedSystem, setSelectedSystem] = useState<SystemType>(getInitialService);
  const [selectedStage, setSelectedStage] = useState<StageType>('Starting Fresh');
  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const [validationError, setValidationError] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);

  // GSAP Animation Refs
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const specBodyRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stepRailProgressRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Entrance GSAP Hero Choreography
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-item',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Animation when activeStep changes
  useEffect(() => {
    if (!stepContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepContainerRef.current,
        { opacity: 0, x: 18 },
        { opacity: 1, x: 0, duration: 0.42, ease: 'power3.out' }
      );
    }, stepContainerRef);

    // Animate the step progress bar rail
    if (stepRailProgressRef.current) {
      const targetScale = (activeStep - 1) / 2;
      gsap.to(stepRailProgressRef.current, {
        scaleX: targetScale,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    return () => ctx.revert();
  }, [activeStep]);

  // GSAP Morphing animation on specification changes
  useEffect(() => {
    if (!specBodyRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        specBodyRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.32, ease: 'power2.out' }
      );
    }, specBodyRef);

    return () => ctx.revert();
  }, [selectedSystem, selectedStage, companyName]);

  const currentSpec = SYSTEM_SPECS[selectedSystem];

  // Advance to next step with validation
  const handleNextStep = (targetStep: 1 | 2 | 3) => {
    setValidationError('');
    setActiveStep(targetStep);
  };

  // Direct fast WhatsApp fallback with selected system
  const directWhatsAppLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello VOOO LABS, I want to discuss ${selectedSystem} for our business.`
  )}`;

  // Main Submit Handler: Validates inputs, triggers GSAP progress animation and opens WhatsApp
  const handleTransmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError('');

    // If user is not on Step 3, or if required fields are missing, guide them to Step 3
    if (!name.trim()) {
      setActiveStep(3);
      setValidationError('Please provide your name so Vrushabh knows who to address.');
      return;
    }

    if (!phone.trim()) {
      setActiveStep(3);
      setValidationError('Please provide your WhatsApp or phone number.');
      return;
    }

    if (isTransmitting) return;
    setIsTransmitting(true);

    const clientDisplay = companyName.trim()
      ? `${companyName.trim()} (${name.trim()})`
      : name.trim();

    const waText = encodeURIComponent(
`Hello VOOO LABS Engineering Desk,

*PROJECT BLUEPRINT SPECIFICATION*
• Client / Entity: ${clientDisplay}
• Phone / WhatsApp: ${phone.trim()}
• Architecture: ${selectedSystem} (${currentSpec.code})
• Current Stage: ${selectedStage}
• Primary Goal: ${goal.trim() || 'Direct Technical Architecture Consultation'}

*TECHNICAL PARAMETERS*
• Target Stack: ${currentSpec.stack}
• Core Focus: ${currentSpec.coreFocus}
• Handover Model: ${currentSpec.handover}

*TRANSPARENCY MILESTONES*
• 40% Kickoff (Live Frontend) · 30% Backend · 30% Handover
• 100% Client-Owned GitHub Repository
• Direct Client Account at Actual Provider Cost

Ready to discuss scope, timeline, and exact infrastructure parameters.`
    );

    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waText}`;

    // Animate GSAP progress bar on the Obsidian Dossier
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            window.open(waUrl, '_blank', 'noopener,noreferrer');
            setIsTransmitting(false);
            setIsTransmitted(true);
          },
        }
      );
    } else {
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsTransmitting(false);
        setIsTransmitted(true);
      }, 350);
    }
  };

  return (
    <div 
      ref={pageContainerRef}
      className="page-wrap min-h-screen bg-white text-slate-900 relative overflow-hidden pt-32 sm:pt-36 pb-28 select-none"
    >
      {/* ──────────────────────────────────────────────────
          SUBTLE ARCHITECTURAL GRID BACKDROP & AMBIENT SCANLINE
         ────────────────────────────────────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_15%,#000_45%,transparent_100%)] opacity-45"
        aria-hidden="true"
      />

      {/* TOP 2PX STUDIO BLUE AMBIENT PROGRESS SCANLINE */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-20"
        aria-hidden="true" 
      />

      {/* SUBTLE AMBIENT STUDIO LIGHTING */}
      <div 
        className="absolute top-12 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/[0.035] blur-[140px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ══════════════════════════════════════════════════════
            SECTION 1: KINETIC EDITORIAL HERO
           ══════════════════════════════════════════════════════ */}
        <header className="pb-12 border-b border-slate-200/80 text-left">
          <div className="contact-hero-item inline-flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4285F4] font-bold">
              DIRECT ENGINEERING DESK · VOOO LABS
            </span>
          </div>

          <h1 className="contact-hero-item text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-slate-950 leading-[1.08] max-w-3xl">
            Design Your System Scope in Three Steps.
          </h1>

          <p className="contact-hero-item mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Configure what your business needs below. Watch your technical blueprint assemble in real time—then transmit it straight to Vrushabh on WhatsApp.
          </p>
        </header>


        {/* ══════════════════════════════════════════════════════
            SECTION 2: 12-COLUMN ASYMMETRIC KINETIC CONFIGURATOR
           ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-10">
          
          {/* ──────────────────────────────────────────────────
              LEFT COLUMN: 3-STAGE KINETIC FLOW (lg:col-span-7)
             ────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* STEP PROGRESS RAIL */}
            <div className="pb-6 border-b border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-semibold">
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">
                  ARCHITECTURAL CONFIGURATION
                </span>
                <span className="text-[#4285F4]">
                  STEP {activeStep} OF 3
                </span>
              </div>

              {/* LIVE STEP RAIL CONNECTOR */}
              <div className="relative h-1 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  ref={stepRailProgressRef}
                  className="absolute top-0 left-0 bottom-0 w-full bg-[#4285F4] origin-left scale-x-0"
                />
              </div>

              {/* 3 CLICKABLE STEP BUTTONS */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { step: 1 as const, label: '01 · Select System' },
                  { step: 2 as const, label: '02 · Context & Goal' },
                  { step: 3 as const, label: '03 · Direct Handshake' },
                ].map((item) => {
                  const isActive = activeStep === item.step;
                  const isDone = activeStep > item.step;

                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => handleNextStep(item.step)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-mono text-left transition-all cursor-pointer truncate ${
                        isActive
                          ? 'bg-[#0A0F1E] text-white font-bold shadow-xs'
                          : isDone
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'bg-[#F8F9FC] text-slate-500 hover:text-slate-900 border border-slate-200/80'
                      }`}
                    >
                      <span className="truncate block">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* VALIDATION ALERT */}
            {validationError && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP CONTAINER (ANIMATED WITH GSAP ON STEP CHANGE) */}
            <div ref={stepContainerRef}>
              
              {/* ─────────────────────────────────────────
                  STEP 01: CHOOSE CORE SYSTEM
                 ───────────────────────────────────────── */}
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                        Choose Your Core System Architecture
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Select the primary deliverable your business requires.
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 shrink-0">
                      {currentSpec.code}
                    </span>
                  </div>

                  {/* 4 TACTILE INTERACTIVE CARDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SYSTEMS.map((sys) => {
                      const isSelected = selectedSystem === sys.id;
                      const IconComp = sys.spec.icon;

                      return (
                        <button
                          key={sys.id}
                          type="button"
                          onClick={() => {
                            setSelectedSystem(sys.id);
                            setIsTransmitted(false);
                          }}
                          className={`p-5 rounded-[18px] text-left transition-all duration-300 cursor-pointer relative group flex flex-col justify-between hover:-translate-y-0.5 ${
                            isSelected
                              ? 'bg-white border-2 border-[#4285F4] shadow-md ring-2 ring-[#4285F4]/10'
                              : 'bg-[#F8F9FC] border border-slate-200/90 hover:border-slate-300 hover:bg-white text-slate-800'
                          }`}
                        >
                          {/* TOP CARD ROW */}
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#4285F4]' : 'text-slate-400'}`}>
                                {sys.spec.badge}
                              </span>
                              <div 
                                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                                  isSelected ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
                                }`}
                              >
                                <IconComp size={16} />
                              </div>
                            </div>

                            <h3 className="text-base font-bold text-slate-950 leading-snug mb-1.5">
                              {sys.label}
                            </h3>

                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                              {sys.spec.description}
                            </p>
                          </div>

                          {/* BOTTOM STATUS ACCENT */}
                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono">
                            <span className={isSelected ? 'text-blue-600 font-bold' : 'text-slate-400'}>
                              {isSelected ? 'ACTIVE SELECTION' : 'TAP TO SELECT'}
                            </span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* ADVANCE TO STEP 2 */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-200/80">
                    <span className="text-xs text-slate-500 font-mono">
                      Selected: <strong className="text-slate-900 font-semibold">{selectedSystem}</strong>
                    </span>

                    <button
                      type="button"
                      onClick={() => handleNextStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-98"
                    >
                      <span>Next: Operational Context</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>
              )}


              {/* ─────────────────────────────────────────
                  STEP 02: OPERATIONAL CONTEXT & BOTTLENECK
                 ───────────────────────────────────────── */}
              {activeStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Operational Context & Key Bottleneck
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Tell us what problem this architecture solves for your daily operations.
                    </p>
                  </div>

                  {/* STARTING POINT PILLS */}
                  <div className="space-y-2.5">
                    <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block">
                      Current Starting Point
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {STAGES.map((stg) => {
                        const isSelected = selectedStage === stg;
                        return (
                          <button
                            key={stg}
                            type="button"
                            onClick={() => setSelectedStage(stg)}
                            className={`p-3 rounded-xl text-left text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#0A0F1E] text-white font-bold shadow-xs'
                                : 'bg-[#F8F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                            }`}
                          >
                            <span className="block leading-snug">{stg}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* OPEN BOTTOM-HAIRLINE EDITORIAL INPUT FOR GOAL */}
                  <div className="space-y-2.5 pt-2">
                    <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block">
                      Specific Bottleneck or System Goal
                    </label>
                    <div className="relative border-b border-slate-200/90 py-3 focus-within:border-slate-950 transition-colors">
                      <input
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="e.g. Need dedicated portal for 50 distributors to place daily orders without WhatsApp chaos"
                        className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                      />
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
                    </div>
                  </div>

                  {/* SUGGESTED INSPIRATION PILLS */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      QUICK EXAMPLES (TAP TO USE):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_GOALS[selectedSystem].map((ex, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setGoal(ex)}
                          className="text-left text-xs text-slate-600 bg-[#F8F9FC] hover:bg-white hover:text-slate-950 border border-slate-200/80 hover:border-slate-300 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                        >
                          <span>{ex}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NAVIGATION CONTROLS */}
                  <div className="pt-6 flex items-center justify-between border-t border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => handleNextStep(1)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back: System Choice</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-98"
                    >
                      <span>Next: Your Details</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>
              )}


              {/* ─────────────────────────────────────────
                  STEP 03: DIRECT HANDSHAKE (ZERO BOXES)
                 ───────────────────────────────────────── */}
              {activeStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Direct Lead Architect Handshake
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Enter your details. Your live blueprint will be formatted and transmitted straight to Vrushabh on WhatsApp.
                    </p>
                  </div>

                  {/* 3 CRISP OPEN BOTTOM-HAIRLINE INPUTS */}
                  <div className="space-y-6 pt-2">
                    
                    {/* INPUT 1: NAME */}
                    <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                      <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        placeholder="e.g. Rahul Patil / Vikram Mehta"
                        className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                      />
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
                    </div>

                    {/* INPUT 2: BUSINESS / COMPANY NAME */}
                    <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                      <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                        Business / Company Entity (Optional)
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Patil Precision Tools LLP"
                        className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                      />
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
                    </div>

                    {/* INPUT 3: WHATSAPP NUMBER */}
                    <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                      <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        placeholder="+91 98765 43210"
                        className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium font-mono"
                      />
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
                    </div>

                  </div>

                  {/* NAVIGATION CONTROLS */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => handleNextStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back: Context</span>
                    </button>

                    <div className="w-full sm:w-auto">
                      <LiquidButton
                        onClick={handleTransmit}
                        variant="primary"
                        rounded="pill"
                        size="lg"
                        magnetic={true}
                        className="w-full sm:w-auto text-center"
                      >
                        <span>Transmit Blueprint to WhatsApp</span>
                        <ArrowRight size={16} />
                      </LiquidButton>
                    </div>
                  </div>

                </div>
              )}

            </div>


            {/* ──────────────────────────────────────────────────
                STUDIO AI CONCIERGE BANNER TRIGGER
               ────────────────────────────────────────────────── */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FC] p-4 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  Instant answers on pricing, timelines, or IP ownership:
                </span>
              </div>
              <button
                type="button"
                onClick={openStudioAi}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-slate-300/80 bg-white hover:bg-slate-50 text-xs font-mono text-slate-800 transition-colors shadow-2xs cursor-pointer shrink-0"
              >
                <Sparkles size={12} className="text-blue-600" />
                <span>Ask Studio AI</span>
                <span className="text-[10px] text-slate-400 bg-slate-100 border border-slate-200 px-1 py-0.2 rounded font-sans">⌘K</span>
              </button>
            </div>

          </div>


          {/* ──────────────────────────────────────────────────
              RIGHT COLUMN: HIGH-CONTRAST OBSIDIAN LIVE DOSSIER (lg:col-span-5)
             ────────────────────────────────────────────────── */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[22px] bg-[#0A0F1E] text-white border border-white/[0.1] shadow-[0_24px_60px_rgba(10,15,30,0.18)] p-6 sm:p-8 relative overflow-hidden text-left">
              
              {/* TOP GSAP TRANSMISSION PROGRESS BAR */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-slate-800 overflow-hidden">
                <div 
                  ref={progressBarRef}
                  className="w-full h-full bg-[#4285F4] origin-left scale-x-0"
                />
              </div>

              {/* AMBIENT STUDIO BLUE TOP GLOW */}
              <div 
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/15 blur-[75px] pointer-events-none"
                aria-hidden="true" 
              />

              {/* TOP TELEMETRY HEADER ROW */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4285F4]" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4285F4] font-bold">
                    LIVE SYSTEM DOSSIER
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  STEP 0{activeStep} / 03
                </span>
              </div>

              {/* SPECIFICATION BODY */}
              {!isTransmitted ? (
                <div ref={specBodyRef} className="space-y-5 text-xs text-slate-300">
                  
                  {/* PREPARED FOR (LIVE MIRRORED AS USER TYPES) */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      PREPARED FOR:
                    </span>
                    <div className="text-base font-bold text-white truncate">
                      {companyName.trim() ? companyName : (name.trim() ? name : 'Your Business Entity')}
                    </div>
                    {name.trim() && companyName.trim() && (
                      <span className="font-mono text-[11px] text-slate-400 block truncate">
                        Attn: {name}
                      </span>
                    )}
                  </div>

                  {/* SELECTED ARCHITECTURE */}
                  <div className="border-l-2 border-[#4285F4] pl-4 py-1.5 my-4 space-y-1 bg-white/[0.02] rounded-r-lg">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 block font-semibold">
                      ACTIVE ARCHITECTURE:
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-bold text-white">{selectedSystem}</span>
                      <span className="font-mono text-[10px] text-blue-400 font-semibold">{currentSpec.code}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Stage: <span className="text-slate-200">{selectedStage}</span>
                    </div>
                  </div>

                  {/* STACK & OPERATIONAL FOCUS */}
                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                        TARGET STACK:
                      </span>
                      <span className="font-mono text-[11px] text-slate-200 leading-relaxed block">
                        {currentSpec.stack}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                        CORE DELIVERABLE:
                      </span>
                      <span className="text-xs text-slate-300 leading-relaxed block font-normal">
                        {currentSpec.coreFocus}
                      </span>
                    </div>
                  </div>

                  {/* STUDIO TRANSPARENCY COMMITMENTS */}
                  <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] py-2.5 my-4 text-[11px]">
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Build Milestones:</span>
                      <span className="font-mono font-semibold text-slate-200">40% Kickoff · 30% · 30%</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Source Code:</span>
                      <span className="font-bold text-white">100% Client-Owned Repo</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Cloud & Domain:</span>
                      <span className="font-mono text-slate-200">Direct Account at Actual Cost</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Lead Architect:</span>
                      <span className="font-mono text-blue-400 font-bold">{FOUNDER.name}</span>
                    </div>
                  </div>

                  {/* PRIMARY ACTION BUTTON */}
                  <div className="pt-2">
                    <LiquidButton
                      onClick={handleTransmit}
                      variant="white"
                      rounded="pill"
                      size="lg"
                      magnetic={true}
                      className="w-full text-center"
                    >
                      <span>Transmit Blueprint on WhatsApp</span>
                      <ArrowRight size={16} />
                    </LiquidButton>
                  </div>

                  {/* ZERO TYPING DIRECT BYPASS */}
                  <div className="pt-1 text-center">
                    <a 
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 underline underline-offset-4"
                    >
                      <MessageSquare size={12} />
                      <span>Prefer zero typing? Open direct WhatsApp chat →</span>
                    </a>
                  </div>

                </div>
              ) : (
                /* TRANSMITTED CONFIRMATION STATE */
                <div className="space-y-4 py-4 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span>Blueprint Transmitted to WhatsApp</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Your architecture parameters have been formatted and transmitted directly to VOOO LABS engineering desk. Vrushabh will review the parameters and reply with direct scoping.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsTransmitted(false)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/20 text-xs font-mono font-medium text-slate-200 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Modify Scope Parameters</span>
                    </button>

                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-blue-400 hover:underline"
                    >
                      Re-open WhatsApp Chat →
                    </a>
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
