import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  ShieldCheck, 
  Server,
  Cpu, 
  Layers, 
  Globe,
  Sparkles,
  Search,
  MessageSquare,
  Send,
  Building2,
  User,
  Phone
} from 'lucide-react';
import { COMPANY, FOUNDER } from '../content/company';
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
    stack: 'Custom React / Vite + Edge CDN Acceleration',
    coreFocus: 'Sub-Second Speed, Search Schema & Direct WhatsApp Conversions',
    handover: '100% GitHub Codebase + Direct Cloudflare Account Handover',
  },
  'Custom Web Apps & Portals': {
    code: 'SYS-02/APP',
    badge: '02',
    icon: Layers,
    description: '1-tap browser portals for clients, students, or bookings with zero app store friction.',
    stack: '1-Tap Progressive Web App + Mobile OTP + PostgreSQL Database',
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

  // Auto-detect service from route state or URL search parameters
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
  const specBodyRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Entrance GSAP Hero Choreography
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-fade-in',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Morphing animation on specification changes
  useEffect(() => {
    if (!specBodyRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        specBodyRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
      );
    }, specBodyRef);

    return () => ctx.revert();
  }, [selectedSystem, selectedStage, companyName]);

  const currentSpec = SYSTEM_SPECS[selectedSystem];

  // Direct fast WhatsApp fallback with selected system
  const directWhatsAppLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello VOOO LABS, I want to discuss ${selectedSystem} for our business.`
  )}`;

  // Submit Handler: Validates inputs, triggers GSAP progress animation and opens WhatsApp
  const handleTransmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please provide your name so Vrushabh knows who to address.');
      const nameInput = document.getElementById('client-name-input');
      nameInput?.focus();
      return;
    }

    if (!phone.trim()) {
      setValidationError('Please provide your WhatsApp or phone number.');
      const phoneInput = document.getElementById('client-phone-input');
      phoneInput?.focus();
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

*TRANSPARENCY COMMITMENTS*
• 40% Kickoff (Live Frontend) · 30% Backend · 30% Handover
• 100% Client-Owned GitHub Repository
• Direct Client Account at Actual Provider Cost

Ready to discuss scope, timeline, and exact infrastructure parameters.`
    );

    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waText}`;

    // Animate GSAP progress bar on the specification card
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.45,
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
      className="page-wrap min-h-screen bg-white text-slate-900 relative pt-32 sm:pt-36 pb-24"
    >
      {/* TOP 2PX STUDIO BLUE ACCENT BAR */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#4285F4] via-[#7C3AED] to-[#F97316] origin-left z-20"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* ══════════════════════════════════════════════════════
            SECTION 1: CLEAN EDITORIAL HEADER (SHARP & BREATHABLE)
           ══════════════════════════════════════════════════════ */}
        <header className="pb-10 border-b border-slate-200 text-left">
          <div className="contact-fade-in inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4285F4] font-bold">
              DIRECT ENGINEERING DESK · VOOO LABS
            </span>
          </div>

          <h1 className="contact-fade-in text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15] max-w-3xl">
            Design Your Project Scope.
          </h1>

          <p className="contact-fade-in mt-3.5 max-w-2xl text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Select what your business needs below. Watch your technical specification update in real time, then transmit it directly to our engineering desk on WhatsApp.
          </p>
        </header>


        {/* ══════════════════════════════════════════════════════
            SECTION 2: CRISP 12-COLUMN ARCHITECTURAL WORKSPACE
           ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-10">
          
          {/* ──────────────────────────────────────────────────
              LEFT COLUMN: SPACIOUS, UN-CRAMPED SPECIFICATION FORM (lg:col-span-7)
             ────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* VALIDATION ERROR ALERT */}
            {validationError && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-mono font-medium flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: SELECT CORE SYSTEM */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    STEP 01 / ARCHITECTURE
                  </span>
                  <h2 className="text-xl font-bold text-slate-950 tracking-tight">
                    Select Your Core System Deliverable
                  </h2>
                </div>
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 shrink-0">
                  {currentSpec.code}
                </span>
              </div>

              {/* 4 CRISP SYSTEM CARDS (ELEVATED WHITE / SOFT BLUE ACCENTS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
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
                      className={`p-5 rounded-[16px] text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/60 border-2 border-[#4285F4] shadow-sm'
                          : 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#4285F4]' : 'text-slate-400'}`}>
                            {sys.spec.badge}
                          </span>
                          <div 
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-[#4285F4] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <IconComp size={16} />
                          </div>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-950 leading-snug mb-1.5">
                          {sys.label}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {sys.spec.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono">
                        <span className={isSelected ? 'text-[#4285F4] font-bold' : 'text-slate-400'}>
                          {isSelected ? 'SELECTED' : 'CLICK TO SELECT'}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>


            {/* STEP 2: OPERATIONAL CONTEXT & GOAL */}
            <section className="space-y-5 pt-4 border-t border-slate-200">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  STEP 02 / OPERATIONAL CONTEXT
                </span>
                <h2 className="text-xl font-bold text-slate-950 tracking-tight">
                  Current Stage & Operational Objective
                </h2>
              </div>

              {/* STAGE SELECTOR PILLS */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block">
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
                        className={`p-3 rounded-xl text-left text-xs transition-all cursor-pointer font-medium ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : 'bg-[#F8F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span className="block leading-snug">{stg}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SPECIFIC OPERATIONAL GOAL INPUT */}
              <div className="space-y-2 pt-2">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block">
                  Key Operational Goal or Bottleneck (Optional)
                </label>
                <div className="relative border-b-2 border-slate-200 py-2.5 focus-within:border-blue-600 transition-colors">
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="e.g. Need dedicated portal for 50 distributors to place daily orders"
                    className="text-base text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none w-full font-medium"
                  />
                </div>
              </div>

              {/* QUICK SUGGESTION EXAMPLES */}
              <div className="space-y-1.5 pt-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  QUICK EXAMPLES (CLICK TO APPLY):
                </span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_GOALS[selectedSystem].map((ex, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setGoal(ex)}
                      className="text-left text-xs text-slate-700 bg-[#F8F9FC] hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                    >
                      <span>{ex}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>


            {/* STEP 3: DIRECT HANDSHAKE INPUTS */}
            <section className="space-y-5 pt-4 border-t border-slate-200">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  STEP 03 / DIRECT HANDSHAKE
                </span>
                <h2 className="text-xl font-bold text-slate-950 tracking-tight">
                  Your Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Your parameters will be structured into a clean blueprint and sent to Vrushabh on WhatsApp.
                </p>
              </div>

              <div className="space-y-5 pt-1">
                
                {/* NAME INPUT */}
                <div className="relative border-b-2 border-slate-200 py-2.5 focus-within:border-blue-600 transition-colors">
                  <label className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    Your Full Name *
                  </label>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-slate-400 shrink-0" />
                    <input
                      id="client-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (validationError) setValidationError('');
                      }}
                      placeholder="e.g. Rahul Patil / Vikram Mehta"
                      className="text-base text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none w-full font-medium"
                    />
                  </div>
                </div>

                {/* COMPANY NAME INPUT */}
                <div className="relative border-b-2 border-slate-200 py-2.5 focus-within:border-blue-600 transition-colors">
                  <label className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    Business / Company Name (Optional)
                  </label>
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Patil Precision Tools LLP"
                      className="text-base text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none w-full font-medium"
                    />
                  </div>
                </div>

                {/* WHATSAPP NUMBER INPUT */}
                <div className="relative border-b-2 border-slate-200 py-2.5 focus-within:border-blue-600 transition-colors">
                  <label className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    WhatsApp or Phone Number *
                  </label>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400 shrink-0" />
                    <input
                      id="client-phone-input"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (validationError) setValidationError('');
                      }}
                      placeholder="+91 98765 43210"
                      className="text-base text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none w-full font-medium font-mono"
                    />
                  </div>
                </div>

              </div>

              {/* TRANSMIT BUTTON ON MOBILE */}
              <div className="lg:hidden pt-4">
                <button
                  type="button"
                  onClick={handleTransmit}
                  disabled={isTransmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(66,133,244,0.35)] cursor-pointer active:scale-98 disabled:opacity-70"
                >
                  <Send size={16} />
                  <span>Transmit Blueprint on WhatsApp</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </section>


            {/* STUDIO AI BANNER TRIGGER */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FC] p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  Instant answers on pricing, timelines, or IP ownership:
                </span>
              </div>
              <button
                type="button"
                onClick={openStudioAi}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs font-mono text-slate-800 transition-colors shadow-2xs cursor-pointer shrink-0"
              >
                <Sparkles size={12} className="text-blue-600" />
                <span>Ask Studio AI</span>
                <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-1 py-0.2 rounded font-sans">⌘K</span>
              </button>
            </div>

          </div>


          {/* ──────────────────────────────────────────────────
              RIGHT COLUMN: CRISP ARCHITECTURAL LIVE SPECIFICATION CARD (lg:col-span-5)
             ────────────────────────────────────────────────── */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[20px] bg-[#F8F9FC] border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.04)] p-6 sm:p-7 relative overflow-hidden text-left">
              
              {/* TOP TRANSMISSION PROGRESS BAR */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-slate-200 overflow-hidden">
                <div 
                  ref={progressBarRef}
                  className="w-full h-full bg-[#4285F4] origin-left scale-x-0"
                />
              </div>

              {/* TOP STATUS HEADER */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold">
                    LIVE SYSTEM SPECIFICATION
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  READY
                </span>
              </div>

              {/* SPECIFICATION CONTENT */}
              {!isTransmitted ? (
                <div ref={specBodyRef} className="space-y-5 text-xs text-slate-700">
                  
                  {/* PREPARED FOR (LIVE MIRRORED) */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      PREPARED FOR:
                    </span>
                    <div className="text-base font-bold text-slate-950 truncate">
                      {companyName.trim() ? companyName : (name.trim() ? name : 'Your Business Entity')}
                    </div>
                    {name.trim() && companyName.trim() && (
                      <span className="font-mono text-xs text-slate-500 block truncate">
                        Attn: {name}
                      </span>
                    )}
                  </div>

                  {/* ACTIVE ARCHITECTURE CALLOUT */}
                  <div className="border-l-3 border-[#4285F4] pl-3.5 py-2 my-4 bg-white rounded-r-xl border border-slate-200/80 shadow-2xs space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-600 block font-bold">
                      ACTIVE ARCHITECTURE:
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-950">{selectedSystem}</span>
                      <span className="font-mono text-xs text-blue-600 font-semibold">{currentSpec.code}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      Starting Point: <strong className="text-slate-800">{selectedStage}</strong>
                    </div>
                  </div>

                  {/* STACK & DELIVERABLE */}
                  <div className="space-y-3 pt-1 text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                        TARGET STACK:
                      </span>
                      <span className="font-mono text-xs text-slate-900 leading-relaxed block font-medium">
                        {currentSpec.stack}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                        CORE DELIVERABLE:
                      </span>
                      <span className="text-xs text-slate-700 leading-relaxed block font-normal">
                        {currentSpec.coreFocus}
                      </span>
                    </div>
                  </div>

                  {/* TRANSPARENCY COMMITMENTS */}
                  <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 py-2.5 my-4 text-xs bg-white px-3.5 rounded-xl border">
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-500 font-medium">Build Milestones:</span>
                      <span className="font-mono font-semibold text-slate-900">40% · 30% · 30%</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-500 font-medium">Source Code:</span>
                      <span className="font-bold text-slate-950">100% Client-Owned Repo</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-500 font-medium">Cloud & Domain:</span>
                      <span className="font-mono text-slate-900">Direct Account at Actual Cost</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-500 font-medium">Lead Architect:</span>
                      <span className="font-mono text-blue-600 font-bold">{FOUNDER.name}</span>
                    </div>
                  </div>

                  {/* SIGNATURE STUDIO BLUE TRANSMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleTransmit}
                      disabled={isTransmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(66,133,244,0.35)] hover:shadow-[0_6px_22px_rgba(66,133,244,0.45)] cursor-pointer active:scale-98 disabled:opacity-70"
                    >
                      <Send size={15} />
                      <span>Transmit Blueprint on WhatsApp</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  {/* ZERO-TYPING DIRECT BYPASS */}
                  <div className="pt-1 text-center">
                    <a 
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
                    >
                      <MessageSquare size={13} />
                      <span>Prefer zero typing? Chat directly on WhatsApp →</span>
                    </a>
                  </div>

                </div>
              ) : (
                /* TRANSMITTED CONFIRMATION STATE */
                <div className="space-y-4 py-4 text-left">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span>Blueprint Transmitted to WhatsApp</span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Your architecture parameters have been formatted and opened directly in WhatsApp. Vrushabh will review the scope and reply with a breakdown.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsTransmitted(false)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-xs font-mono font-medium text-slate-800 hover:bg-white transition-colors cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Modify Scope Parameters</span>
                    </button>

                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-blue-600 hover:underline"
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
