import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

type ServiceCategory =
  | 'Business Website'
  | 'Custom Web App'
  | 'Business Software'
  | 'Google SEO, AI & Ads'
  | 'Other / Not Sure Yet';

const SERVICE_PILLS: ServiceCategory[] = [
  'Business Website',
  'Custom Web App',
  'Business Software',
  'Google SEO, AI & Ads',
  'Other / Not Sure Yet',
];

export default function ContactPage() {
  const location = useLocation();

  // Smart initial service preselection from router state or query param
  const getInitialService = (): ServiceCategory => {
    const stateService = (location.state as { selectedService?: string })?.selectedService;
    if (stateService) {
      if (stateService.includes('Website')) return 'Business Website';
      if (stateService.includes('Web App') || stateService.includes('Portal')) return 'Custom Web App';
      if (stateService.includes('Software')) return 'Business Software';
      if (stateService.includes('SEO') || stateService.includes('Search') || stateService.includes('Ads')) return 'Google SEO, AI & Ads';
    }
    const params = new URLSearchParams(location.search);
    const query = params.get('service');
    if (query === 'websites') return 'Business Website';
    if (query === 'web-apps') return 'Custom Web App';
    if (query === 'software') return 'Business Software';
    if (query === 'seo-ai' || query === 'ai-growth' || query === 'seo') return 'Google SEO, AI & Ads';
    return 'Business Website';
  };

  const [selectedService, setSelectedService] = useState<ServiceCategory>(getInitialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtle, calm entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Copy email helper
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(COMPANY.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  // Direct WhatsApp chat link for the left card
  const directWhatsAppUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello Vrushabh, I would like to discuss ${selectedService} for our business.`
  )}`;

  // Form submit handler: prepares clean message & opens WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
`Hello Vrushabh (VOOO LABS),

I would like to discuss a project:
• Service: ${selectedService}
• Name: ${name.trim()}
• Phone / WhatsApp: ${phone.trim()}
${company.trim() ? `• Business / Entity: ${company.trim()}\n` : ''}${details.trim() ? `• Project Details: ${details.trim()}\n` : ''}
Looking forward to discussing scope and next steps.`;

    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    setLastWaUrl(waUrl);
    setIsSubmitted(true);

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Mailto fallback link
  const mailtoUrl = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedService} — ${company.trim() || name.trim() || 'VOOO LABS'}`
  )}&body=${encodeURIComponent(
`Hello Vrushabh (VOOO LABS),

I would like to discuss a project:
• Service: ${selectedService}
• Name: ${name.trim()}
• Phone / WhatsApp: ${phone.trim()}
${company.trim() ? `• Business / Entity: ${company.trim()}\n` : ''}${details.trim() ? `• Project Details: ${details.trim()}\n` : ''}
Looking forward to your reply.`
  )}`;

  return (
    <div ref={pageRef} className="page-wrap min-h-screen bg-white text-slate-900 pt-32 sm:pt-40 pb-24 relative overflow-hidden select-none">
      
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ══════════════════════════════════════════════════════
            1. SIMPLE, WELCOMING HEADER
           ══════════════════════════════════════════════════════ */}
        <header className="contact-reveal max-w-3xl pb-12 border-b border-slate-200/80 text-left">
          
          {/* STUDIO PHILOSOPHY TAG */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
            <span className="font-bold text-slate-950">First make it work,</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-600">then make it</span>
            <span className="font-extrabold text-blue-600">beautiful.</span>
          </div>

          {/* EYEBROW */}
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            CONTACT VOOO LABS · DIRECT STUDIO DESK
          </span>

          {/* H1 HEADLINE WITH VIBRANT SHIMMER ACCENT */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12]">
            <span>Let’s Talk About</span>{' '}
            <span className="shimmer-text">Your Project.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have a website, web portal, or business software requirement? Reach out directly on WhatsApp or send a message below—we review every inquiry personally.
          </p>
        </header>


        {/* ══════════════════════════════════════════════════════
            2. CLEAN 12-COLUMN SPLIT
           ══════════════════════════════════════════════════════ */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* ──────────────────────────────────────────────────
              LEFT COLUMN: DIRECT CONTACT INFORMATION (lg:col-span-5)
             ────────────────────────────────────────────────── */}
          <aside className="contact-reveal lg:col-span-5 space-y-8">
            
            {/* DIRECT WHATSAPP CARD */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#F8F9FC] p-6 space-y-4 shadow-2xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Direct WhatsApp Desk</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Prefer a quick conversation? Message us directly on WhatsApp and share what you want to build.
              </p>
              <div>
                <LiquidButton
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  rounded="pill"
                  size="md"
                  magnetic={true}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={14} />
                </LiquidButton>
              </div>
            </div>

            {/* STUDIO DETAILS LIST */}
            <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 text-sm">
              
              {/* EMAIL */}
              <div className="py-4 space-y-1.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-slate-950 hover:text-blue-600 transition-colors truncate"
                  >
                    {COMPANY.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-950 transition-colors cursor-pointer shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LOCATIONS */}
              <div className="py-4 space-y-1.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  STUDIO HUBS
                </span>
                <div className="flex items-start gap-2.5 text-slate-800">
                  <MapPin size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">
                    Pune · Nashik · Satara · Kolhapur, Maharashtra
                  </span>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="py-4 space-y-1.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  DESK HOURS
                </span>
                <div className="flex items-start gap-2.5 text-slate-800">
                  <Clock size={16} className="text-purple-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">
                    Monday – Saturday · 10:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              {/* TRANSPARENT COMMITMENTS */}
              <div className="py-4 space-y-1.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  TRANSPARENCY COMMITMENT
                </span>
                <div className="flex items-start gap-2.5 text-slate-800">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed text-xs">
                    40% Kickoff Advance (Live Frontend Preview) · 100% Source Code Ownership
                  </span>
                </div>
              </div>

            </div>

          </aside>


          {/* ──────────────────────────────────────────────────
              RIGHT COLUMN: SINGLE, CLEAN CONTACT FORM CARD (lg:col-span-7)
             ────────────────────────────────────────────────── */}
          <div className="contact-reveal lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. SERVICE SELECTION PILLS */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-slate-950 block">
                      What are you looking to build?
                    </label>
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      Select One
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_PILLS.map((pill) => {
                      const isSelected = selectedService === pill;
                      return (
                        <button
                          key={pill}
                          type="button"
                          onClick={() => setSelectedService(pill)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer border ${
                            isSelected
                              ? 'bg-[#0A0F1E] text-white border-[#0A0F1E] shadow-sm'
                              : 'bg-[#F8F9FC] text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-white hover:text-slate-950'
                          }`}
                        >
                          {pill}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. FORM FIELDS */}
                <div className="space-y-4 pt-2">
                  
                  {/* ROW 1: NAME & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900 block">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900 block">
                        Phone / WhatsApp Number <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* ROW 2: COMPANY / BUSINESS NAME */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 block">
                      Company / Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your business or organization name"
                      className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all"
                    />
                  </div>

                  {/* ROW 3: PROJECT DETAILS */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 block">
                      Project Details <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell us briefly about your website, software, or marketing requirement..."
                      className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all resize-y leading-relaxed"
                    />
                  </div>

                </div>

                {/* 3. SUBMIT ACTION & CONFIRMATION */}
                <div className="space-y-3 pt-2">
                  <LiquidButton
                    type="submit"
                    variant="primary"
                    rounded="pill"
                    size="lg"
                    magnetic={true}
                    className="w-full justify-center text-center"
                  >
                    <span>Send Message via WhatsApp</span>
                    <ArrowRight size={16} />
                  </LiquidButton>

                  <div className="text-center pt-1">
                    <a
                      href={mailtoUrl}
                      className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors inline-block"
                    >
                      Or send via Email instead →
                    </a>
                  </div>

                  {/* CONFIRMATION BANNER */}
                  {isSubmitted && (
                    <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span className="font-medium">Message prepared — WhatsApp should open automatically.</span>
                      </div>
                      {lastWaUrl && (
                        <a
                          href={lastWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-700 hover:text-emerald-800 underline shrink-0"
                        >
                          Click to open WhatsApp →
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
