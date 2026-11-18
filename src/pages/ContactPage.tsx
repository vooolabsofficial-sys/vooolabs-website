import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  RotateCcw, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  Globe 
} from 'lucide-react';
import { COMPANY, FOUNDER } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

type SystemType = 
  | 'Business Websites'
  | 'Custom Web Apps & Portals'
  | 'Custom Business Software'
  | 'Google SEO, AI Search & Ads';

type StageType = 
  | 'Starting New Project'
  | 'Upgrading Existing Website / System'
  | 'Replacing Spreadsheets & Manual Work';

interface SystemSpec {
  code: string;
  stack: string;
  coreFocus: string;
  handover: string;
}

const SYSTEM_SPECS: Record<SystemType, SystemSpec> = {
  'Business Websites': {
    code: 'SYS-01/WEB',
    stack: 'Custom React / Vite + Edge CDN Acceleration',
    coreFocus: 'Sub-Second Speed, Search Schema & Form-Free WhatsApp Attribution',
    handover: '100% GitHub Code + Direct Domain/Cloud Setup at Actual Cost',
  },
  'Custom Web Apps & Portals': {
    code: 'SYS-02/APP',
    stack: '1-Tap Browser Web App + OTP Mobile Auth + PostgreSQL',
    coreFocus: 'Zero Play Store Friction + Client & Admin Role Dashboards',
    handover: 'Private Cloud Database + Full Repository Ownership',
  },
  'Custom Business Software': {
    code: 'SYS-03/OPS',
    stack: 'Role-Based Internal Operations System + Automated Alerts',
    coreFocus: 'Live Pipeline, Stock Control & Automated WhatsApp Invoicing',
    handover: 'Dedicated Company Database + 100% Proprietary IP Handover',
  },
  'Google SEO, AI Search & Ads': {
    code: 'SYS-04/DISC',
    stack: 'Technical SEO + JSON-LD / llms.txt + Ad Landing Pages',
    coreFocus: 'Google, Maps, ChatGPT Citation & WhatsApp Click Tracking',
    handover: '100% Ad Account, Search Console & Code Ownership in Your Name',
  },
};

const SYSTEMS: { id: SystemType; label: string; tag: string }[] = [
  { id: 'Business Websites', label: 'Business Websites', tag: '01 / High-Speed Brand & Conversion' },
  { id: 'Custom Web Apps & Portals', label: 'Custom Web Apps & Portals', tag: '02 / Browser Web App with Zero Friction' },
  { id: 'Custom Business Software', label: 'Custom Business Software', tag: '03 / Internal Billing, CRM & Stock Ops' },
  { id: 'Google SEO, AI Search & Ads', label: 'Google SEO, AI Search & Ads', tag: '04 / Technical SEO, AEO & Attributed Ads' },
];

const STAGES: StageType[] = [
  'Starting New Project',
  'Upgrading Existing Website / System',
  'Replacing Spreadsheets & Manual Work',
];

export default function ContactPage() {
  const location = useLocation();

  // Smart auto-detection from route state or URL params
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
  const [selectedStage, setSelectedStage] = useState<StageType>('Starting New Project');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const specBodyRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP entrance on mount
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
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

  // GSAP morph on specification changes
  useEffect(() => {
    if (!specBodyRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        specBodyRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    }, specBodyRef);

    return () => ctx.revert();
  }, [selectedSystem, selectedStage]);

  const currentSpec = SYSTEM_SPECS[selectedSystem];

  // Submit Handler: triggers GSAP progress animation and opens WhatsApp
  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTransmitting) return;

    setIsTransmitting(true);

    const clientDisplay = companyName.trim() 
      ? `${companyName.trim()} (${name.trim() || 'Principal'})`
      : name.trim() || 'Direct Inquirer';

    const waText = encodeURIComponent(
`Hello VOOO LABS Engineering Desk,

*PROJECT BLUEPRINT SPECIFICATION*
• Client / Entity: ${clientDisplay}
• Phone / WhatsApp: ${phone.trim() || 'Not Provided'}
• Architecture: ${selectedSystem} (${currentSpec.code})
• Current Stage: ${selectedStage}
• Primary Goal: ${goal.trim() || 'Direct Technical Consultation Request'}

*TECHNICAL PARAMETERS*
• Target Stack: ${currentSpec.stack}
• Core Focus: ${currentSpec.coreFocus}
• Handover Model: ${currentSpec.handover}

Ready to discuss scope, timeline, and exact infrastructure costs.`
    );

    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waText}`;

    // Animate GSAP progress bar
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

  // Direct fast WhatsApp fallback
  const directWhatsAppLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello VOOO LABS, I want to discuss ${selectedSystem} for our business.`
  )}`;

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
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 text-left"
      >
        
        {/* ══════════════════════════════════════════════════════
            SECTION 1: EDITORIAL HEADER
           ══════════════════════════════════════════════════════ */}
        <header className="contact-reveal max-w-3xl pb-12 border-b border-slate-200/80">
          {/* STUDIO PHILOSOPHY TAG */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
            <span className="font-bold text-slate-950">First make it work,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">then make it</span>
            <span className="font-extrabold text-blue-600">beautiful.</span>
          </div>

          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4285F4] font-semibold block mb-2.5">
            PROJECT BLUEPRINT & ESTIMATE
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.1]">
            <span>Configure Your Requirement.</span>
            <span className="shimmer-text block mt-1">Receive a Clear Scope.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Select what you want to build below. Your live architectural brief updates automatically—ready to transmit directly to our engineering desk.
          </p>
        </header>


        {/* ══════════════════════════════════════════════════════
            SECTION 2: 12-COLUMN INTERACTIVE SPLIT
           ══════════════════════════════════════════════════════ */}
        <div className="contact-reveal pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ──────────────────────────────────────────────────
              LEFT COLUMN: TACTILE SELECTION + BOTTOM-HAIRLINE INPUTS
             ────────────────────────────────────────────────── */}
          <form onSubmit={handleTransmit} className="lg:col-span-7 space-y-10">
            
            {/* STEP 01: SELECT SYSTEM */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-bold">
                  STEP 01 — SELECT SYSTEM ARCHITECTURE
                </span>
                <span className="font-mono text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                  {currentSpec.code}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SYSTEMS.map((sys) => {
                  const isSelected = selectedSystem === sys.id;
                  return (
                    <button
                      key={sys.id}
                      type="button"
                      onClick={() => {
                        setSelectedSystem(sys.id);
                        setIsTransmitted(false);
                      }}
                      className={`p-4 rounded-[14px] text-left transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#0A0F1E] text-white shadow-sm'
                          : 'bg-[#F8F9FC] text-slate-800 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                          {sys.label}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#4285F4] shrink-0" aria-hidden="true" />
                        )}
                      </div>
                      <p className={`text-[11px] leading-relaxed font-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {sys.tag}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>


            {/* STEP 02: CURRENT STARTING POINT */}
            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-bold block">
                STEP 02 — CURRENT STARTING POINT
              </span>

              <div className="flex flex-wrap gap-2.5">
                {STAGES.map((st) => {
                  const isSelected = selectedStage === st;
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => {
                        setSelectedStage(st);
                        setIsTransmitted(false);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A0F1E] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
                      }`}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>


            {/* STEP 03: OPEN BOTTOM-HAIRLINE INPUTS (ZERO TRADITIONAL BOXES) */}
            <div className="space-y-6 pt-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-bold block">
                STEP 03 — YOUR DETAILS & OBJECTIVE
              </span>

              {/* INPUT 1: NAME */}
              <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Patil"
                  className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                />
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
              </div>

              {/* INPUT 2: COMPANY NAME (LIVE MIRRORED) */}
              <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Industrial Valves Pvt Ltd"
                  className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                />
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
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
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium font-mono"
                />
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
              </div>

              {/* INPUT 4: GOAL OR BOTTLENECK */}
              <div className="relative border-b border-slate-200/90 py-3.5 focus-within:border-slate-950 transition-colors">
                <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold block mb-1">
                  Key Operational Goal or Bottleneck (Optional)
                </label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Need dedicated portal for 50 distributors to place daily orders"
                  className="text-base sm:text-lg text-slate-900 bg-transparent placeholder:text-slate-300 focus:outline-none w-full font-medium"
                />
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#4285F4] origin-left scale-x-0 focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none" />
              </div>
            </div>

            {/* TRANSMIT BUTTON ON MOBILE */}
            <div className="lg:hidden pt-4">
              <LiquidButton
                type="submit"
                variant="primary"
                rounded="pill"
                size="lg"
                magnetic={true}
                className="w-full text-center"
              >
                <span>Transmit Blueprint on WhatsApp</span>
                <ArrowRight size={16} />
              </LiquidButton>
            </div>

          </form>


          {/* ──────────────────────────────────────────────────
              RIGHT COLUMN: LIVE ARCHITECTURAL SPECIFICATION SHEET
             ────────────────────────────────────────────────── */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="border-t-2 border-[#0A0F1E] bg-[#F8F9FC] border border-slate-200/90 rounded-b-[18px] p-6 sm:p-7 space-y-6 shadow-xs relative overflow-hidden">
              
              {/* GSAP TRANSMISSION PROGRESS BAR */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-slate-200 overflow-hidden">
                <div 
                  ref={progressBarRef}
                  className="w-full h-full bg-[#4285F4] origin-left scale-x-0"
                />
              </div>

              {/* TOP SPEC HEADER ROW */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#4285F4] font-bold">
                  LIVE SYSTEM SPECIFICATION
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>READY TO TRANSMIT</span>
                </div>
              </div>

              {/* SPECIFICATION BODY */}
              {!isTransmitted ? (
                <div ref={specBodyRef} className="space-y-5 text-xs text-slate-700">
                  
                  {/* PREPARED FOR (LIVE MIRRORED) */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      PREPARED FOR:
                    </span>
                    <div className="text-sm font-bold text-slate-950 truncate">
                      {companyName.trim() ? companyName : (name.trim() ? name : 'Your Business Entity')}
                    </div>
                    {name.trim() && companyName.trim() && (
                      <span className="font-mono text-[11px] text-slate-500 block truncate">
                        Attn: {name}
                      </span>
                    )}
                  </div>

                  {/* ARCHITECTURAL DELIVERABLE */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      SELECTED ARCHITECTURE:
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-950">{selectedSystem}</span>
                      <span className="font-mono text-[10px] text-blue-600 font-semibold">{currentSpec.code}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 block">
                      Stage: {selectedStage}
                    </span>
                  </div>

                  {/* STACK & FOCUS */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/80">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                        TARGET STACK:
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {currentSpec.stack}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                        CORE FOCUS:
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed font-normal block">
                        {currentSpec.coreFocus}
                      </span>
                    </div>
                  </div>

                  {/* INFRASTRUCTURE & OWNERSHIP POLICY */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-1.5 bg-white p-3 rounded-lg border border-slate-200/70">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Source Code:</span>
                      <span className="font-bold text-slate-900">100% Client-Owned Repo</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Cloud & Domain:</span>
                      <span className="font-bold text-slate-900">Direct Account at Actual Cost</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Engineer Desk:</span>
                      <span className="font-mono text-blue-600 font-bold">{FOUNDER.name}</span>
                    </div>
                  </div>

                  {/* TRANSMIT BUTTON */}
                  <div className="pt-2">
                    <LiquidButton
                      onClick={handleTransmit}
                      variant="primary"
                      rounded="pill"
                      size="lg"
                      magnetic={true}
                      className="w-full text-center"
                    >
                      <span>Transmit Blueprint on WhatsApp</span>
                      <ArrowRight size={16} />
                    </LiquidButton>
                  </div>

                  {/* QUICK ALTERNATIVE */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 border-t border-slate-200/80">
                    <span>Direct WhatsApp Inquiry:</span>
                    <a 
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:text-blue-700 underline"
                    >
                      Skip inputs & chat directly →
                    </a>
                  </div>

                </div>
              ) : (
                /* TRANSMITTED CONFIRMATION STATE */
                <div className="space-y-4 py-4 text-left">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span>Blueprint Transmitted Successfully</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your live specification has been formatted and opened directly in WhatsApp. Our engineering desk will review the parameters and reply with a clear breakdown.
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsTransmitted(false)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200/80 text-xs font-mono font-medium text-slate-700 hover:bg-white transition-colors cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Modify Blueprint</span>
                    </button>

                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      Re-open WhatsApp →
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
