import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Laptop, 
  Cpu, 
  Smartphone, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  PhoneCall,
  Clock,
  Layers,
  Folder,
  Brain,
  Phone,
  HardDrive,
  Lock,
  Music,
  BarChart2,
  MessageSquare,
  CreditCard,
  Check,
  GraduationCap,
  Briefcase,
  Heart,
  AlertTriangle,
  FileCheck2,
  Users,
  Shield,
  Activity,
  Receipt,
  Search,
  BellRing
} from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { SERVICES } from '../../content/services';
import { PRODUCTS, getProduct, formatPrice, STATUS_META } from '../../content/products';
import { FOUNDER, whatsappLink, mailtoLink } from '../../content/company';

export default function SolutionsHub() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [smaranMode, setSmaranMode] = useState<'student' | 'pro' | 'elder'>('student');
  const [isDialing, setIsDialing] = useState(false);
  const [dialSeconds, setDialSeconds] = useState(0);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      if (hash === 'vooo-files' || hash === 'smaran-ai' || hash === 'workspace') {
        setActiveTab('mobile-apps');
      } else if (hash === 'callmind') {
        setActiveTab('software');
      } else if (SERVICES.some((s) => s.slug === hash)) {
        setActiveTab(hash);
      }
      
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  // SIM Call simulation timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isDialing) {
      interval = setInterval(() => {
        setDialSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setDialSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isDialing]);

  const displayedServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.slug === activeTab);

  // Products data
  const voooFilesProd = getProduct('vooo-files')!;
  const smaranProd = getProduct('smaran-ai')!;
  const callmindProd = getProduct('callmind')!;

  return (
    <div className="w-full" id="products-top">
      
      {/* ═══════════════════════════════════════════════════════
          1. HERO HEADER (Honest, Clear & Human-Centric)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-20 px-6 sm:px-12 bg-white flex flex-col items-center text-center overflow-hidden border-b border-slate-100">
        
        {/* SUBTLE AMBIENT GLOW */}
        <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-radial from-blue-500/8 via-purple-500/4 to-transparent blur-[90px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* BADGE */}
          <FadeIn delay={0} y={15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.04] border border-slate-200/80 px-4 py-1.5 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 pulse-dot" />
              <span className="font-sans font-medium text-xs sm:text-sm text-slate-800 tracking-wide">
                Custom Software & Digital Product Studio
              </span>
            </div>
          </FadeIn>

          {/* MAIN HEADING */}
          <FadeIn delay={0.1} y={25}>
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl font-bold text-[#0A0F1E] leading-[1.05] tracking-tight mb-6">
              Solutions & Software <br className="hidden sm:inline" />
              <span className="shimmer-text">Built Specifically for Your Business.</span>
            </h1>
          </FadeIn>

          {/* SUBTITLE */}
          <FadeIn delay={0.2} y={15}>
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              We design and build custom Web Apps, high-converting Websites, Sales CRM Systems, and native Android Apps tailored to solve real operational bottlenecks.
            </p>
          </FadeIn>

          {/* VERTICAL SELECTOR PILLS */}
          <FadeIn delay={0.3} y={10} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/70 max-w-3xl mx-auto shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-white text-[#0A0F1E] shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                All Solutions
              </button>

              {SERVICES.map((service) => {
                const IconComp = service.icon;
                const isActive = activeTab === service.slug;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveTab(service.slug)}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <IconComp size={16} style={{ color: isActive ? service.accentColor : undefined }} />
                    <span>{service.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. SIMPLIFIED, HONEST VERTICAL SHOWCASES
          ═══════════════════════════════════════════════════════ */}
      <div className="w-full flex flex-col gap-20 py-16 sm:py-20 max-w-6xl mx-auto px-6 sm:px-12">
        {displayedServices.map((service) => {
          const IconComp = service.icon;

          return (
            <section 
              id={service.slug} 
              key={service.id}
              className="scroll-mt-32 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all"
            >
              {/* TOP SUBTLE ACCENT */}
              <div 
                className="absolute top-0 inset-x-0 h-1"
                style={{ backgroundColor: service.accentColor }}
              />

              {/* ─────────────────────────────────────────────────────────────
                  VERTICAL TITLE BAR
                  ───────────────────────────────────────────────────────────── */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: `${service.accentColor}12`, color: service.accentColor }}
                  >
                    <IconComp size={28} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-slate-200/80 bg-slate-50 text-slate-700">
                      <span>{service.badge}</span>
                    </div>
                    <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0F1E] leading-tight">
                      {service.title}
                    </h2>
                    <p className="font-sans font-normal text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/contact?service=${service.slug}`}
                  className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white px-6 py-3 font-sans font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-all duration-200 hover:shadow-md flex-shrink-0 active:scale-98"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  PROBLEM & SOLUTION SUMMARY (NO GICHMID / JARGON)
                  ───────────────────────────────────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 border-b border-slate-100">
                
                {/* 1. WHY TRADITIONAL SPREADSHEETS HURT */}
                <div className="rounded-2xl p-6 sm:p-8 bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-red-600 mb-3">
                      <AlertTriangle size={18} />
                      <span className="font-sans font-bold text-xs uppercase tracking-wider">
                        Common Business Problems
                      </span>
                    </div>
                    <h3 className="font-clash font-bold text-xl text-[#0A0F1E] mb-2 leading-snug">
                      {service.whyYouNeedThis.heading}
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                      {service.whyYouNeedThis.subheading}
                    </p>

                    <div className="flex flex-col gap-3.5">
                      {service.whyYouNeedThis.points.map((pt, pIdx) => (
                        <div key={pIdx} className="bg-white rounded-xl p-3.5 border border-slate-200/60 shadow-2xs">
                          <span className="font-sans font-semibold text-xs sm:text-sm text-[#0A0F1E] block mb-1">
                            {pt.title}
                          </span>
                          <span className="font-sans font-normal text-xs text-slate-500 block leading-relaxed mb-2">
                            {pt.description}
                          </span>
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                            <span>How we solve it:</span>
                            <span>{pt.impact}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. HOW WE BUILD YOUR SOLUTION */}
                <div className="rounded-2xl p-6 sm:p-8 bg-blue-50/30 border border-blue-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                      <ShieldCheck size={18} />
                      <span className="font-sans font-bold text-xs uppercase tracking-wider">
                        What You Get
                      </span>
                    </div>
                    <h3 className="font-clash font-bold text-xl text-[#0A0F1E] mb-2 leading-snug">
                      {service.howWeHelp.heading}
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                      {service.howWeHelp.subheading}
                    </p>

                    <div className="flex flex-col gap-3.5">
                      {service.howWeHelp.features.map((feat, fIdx) => (
                        <div key={fIdx} className="bg-white rounded-xl p-3.5 border border-blue-100 shadow-2xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-sans font-semibold text-xs sm:text-sm text-[#0A0F1E]">
                              {feat.title}
                            </span>
                            <span className="font-sans text-[11px] text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded font-medium border border-blue-200/60">
                              {feat.tech}
                            </span>
                          </div>
                          <span className="font-sans font-normal text-xs text-slate-600 block leading-relaxed">
                            {feat.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DIRECT ROI STRIP */}
                  <div className="mt-6 pt-5 border-t border-blue-100/80">
                    <span className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider block mb-3">
                      Direct Business ROI:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {service.roiBenefits.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white rounded-xl p-2.5 border border-blue-100 shadow-2xs">
                          <span className="font-clash font-bold text-lg sm:text-xl text-blue-600 block leading-none mb-1">
                            {m.value}
                          </span>
                          <span className="font-sans font-medium text-[10px] text-slate-600 block leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* ─────────────────────────────────────────────────────────────
                  EMBEDDED CLIENT SHOWCASES (CLEAR & BUSINESS-FOCUSED)
                  ───────────────────────────────────────────────────────────── */}

              {/* 🌐 1. WEB APPS CLIENT PORTAL PREVIEW */}
              {service.id === 'web-apps' && (
                <div className="py-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="font-sans font-bold text-xs text-blue-600 uppercase tracking-wider block mb-1">
                        Live System Preview
                      </span>
                      <h3 className="font-clash font-bold text-2xl text-[#0A0F1E]">
                        Custom Business Portal & Client Management Dashboard
                      </h3>
                    </div>
                    <span className="font-sans text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-medium">
                      Built for Your Team
                    </span>
                  </div>

                  {/* HONEST CLIENT PORTAL INTERFACE */}
                  <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                        <span className="ml-2 font-sans text-xs text-slate-400">admin.yourbusiness.com · Business Portal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                        <span className="font-sans text-xs text-emerald-400 font-medium">Connected & Active</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-4">
                        <div className="flex items-center justify-between text-slate-400 text-xs mb-1 font-medium">
                          <span>Today's Customer Orders</span>
                          <Receipt size={16} className="text-blue-400" />
                        </div>
                        <span className="font-clash font-bold text-2xl text-white">48 Orders</span>
                        <span className="font-sans text-[11px] text-emerald-400 mt-1 block">All PDF invoices sent on WhatsApp</span>
                      </div>

                      <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-4">
                        <div className="flex items-center justify-between text-slate-400 text-xs mb-1 font-medium">
                          <span>Pending Client Inquiries</span>
                          <Users size={16} className="text-purple-400" />
                        </div>
                        <span className="font-clash font-bold text-2xl text-purple-300">12 Active Leads</span>
                        <span className="font-sans text-[11px] text-slate-400 mt-1 block">Assigned to sales staff</span>
                      </div>

                      <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-4">
                        <div className="flex items-center justify-between text-slate-400 text-xs mb-1 font-medium">
                          <span>Payment Collections</span>
                          <CreditCard size={16} className="text-emerald-400" />
                        </div>
                        <span className="font-clash font-bold text-2xl text-emerald-400">₹1,45,000</span>
                        <span className="font-sans text-[11px] text-slate-400 mt-1 block">Auto-reconciliation active</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-800/50 border border-slate-700 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="font-sans font-bold text-sm text-white block">Complete Database & Source Code Ownership</span>
                        <p className="font-sans font-normal text-xs text-slate-400 mt-0.5">
                          No monthly software lock-ins. You own the full system, customer database, and intellectual property.
                        </p>
                      </div>
                      <Link
                        to="/contact?service=web-apps"
                        className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 font-sans font-semibold text-xs flex-shrink-0 transition-colors"
                      >
                        Get a Custom Web App →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* 💻 2. WEBSITES VISUAL SHOWCASE */}
              {service.id === 'websites' && (
                <div className="py-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="font-sans font-bold text-xs text-purple-600 uppercase tracking-wider block mb-1">
                        Conversion & Aesthetics
                      </span>
                      <h3 className="font-clash font-bold text-2xl text-[#0A0F1E]">
                        Websites Built to Bring In Real Business Inquiries
                      </h3>
                    </div>
                    <a
                      href={FOUNDER.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-purple-700 hover:text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5 font-medium"
                    >
                      <span>Founder Portfolio</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-purple-500/[0.04] via-pink-500/[0.02] to-white border border-purple-200/80 p-6 sm:p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>Google Search & Mobile Ready</span>
                        </div>
                        <h4 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-3">
                          Turn Casual Visitors into WhatsApp Inquiries
                        </h4>
                        <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                          We combine fast-loading mobile pages, clear bilingual messaging (मराठी & English), and prominent WhatsApp buttons so potential clients can reach you instantly.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {['Sub-1s Mobile Load Time', '1-Tap WhatsApp Button', 'Bilingual Marathi & English', 'Google Local Map Integration'].map((tag) => (
                            <span key={tag} className="font-sans text-xs bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-700 font-medium shadow-2xs">
                              ✓ {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to="/contact?service=websites"
                          className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 font-sans font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-transform hover:scale-102"
                        >
                          <span>Get High-Converting Website</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>

                      {/* FEATURE HIGHLIGHT CARD */}
                      <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-md flex flex-col justify-between">
                        <div>
                          <h5 className="font-clash font-bold text-lg text-[#0A0F1E] mb-3">
                            What Every Website Package Includes:
                          </h5>
                          <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-700">
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span><strong>Custom Domain & SSL Security:</strong> Secure https:// setup configured for your brand.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span><strong>1-Click WhatsApp & Phone Button:</strong> Direct customer lead routing without tedious forms.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span><strong>Bilingual Copywriting (मराठी & English):</strong> Connects with both local and corporate clients.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span><strong>Sub-Second Speed (100/100 Core Web Vitals):</strong> Zero lag on 4G/5G mobile networks.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Complete Code Ownership</span>
                          <span className="text-emerald-600 font-semibold">✓ 0 Monthly Lock-in</span>
                        </div>
                      </div>
                    </div>

                    {/* 🚀 DEDICATED SEO · AEO · GEO RANKING ENGINE STRIP */}
                    <div className="mt-8 pt-8 border-t border-purple-100">
                      <div className="flex items-center gap-2 text-indigo-700 mb-2">
                        <Sparkles size={18} />
                        <span className="font-sans font-bold text-xs uppercase tracking-wider">
                          Search & AI Discovery Power-Up (गुगल व AI रँकिंग)
                        </span>
                      </div>
                      <h4 className="font-clash font-bold text-xl sm:text-2xl text-[#0A0F1E] mb-2">
                        SEO · AEO · GEO — Triple-Layer AI & Search Visibility
                      </h4>
                      <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 max-w-3xl mb-6 leading-relaxed">
                        We don't just build a website and leave it invisible. We optimize your business across traditional search engines, conversational AI bots, and local map discovery:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        {/* 1. SEO */}
                        <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-2xs">
                          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-clash font-bold text-sm mb-3">
                            SEO
                          </div>
                          <h5 className="font-clash font-bold text-base text-[#0A0F1E] mb-1">
                            Google Search (SEO)
                          </h5>
                          <span className="font-sans font-medium text-xs text-blue-600 block mb-2">
                            गुगल पहिल्या पानावर रँकिंग
                          </span>
                          <p className="font-sans font-normal text-xs text-slate-600 leading-relaxed">
                            On-page keywords, structured JSON-LD schema, and blazing speed to rank your business on Google's 1st page when clients search for your services.
                          </p>
                        </div>

                        {/* 2. AEO */}
                        <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-2xs">
                          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center font-clash font-bold text-sm mb-3">
                            AEO
                          </div>
                          <h5 className="font-clash font-bold text-base text-[#0A0F1E] mb-1">
                            AI Engine Optimization (AEO)
                          </h5>
                          <span className="font-sans font-medium text-xs text-purple-600 block mb-2">
                            ChatGPT व AI इंजिन शिफारस
                          </span>
                          <p className="font-sans font-normal text-xs text-slate-600 leading-relaxed">
                            When potential clients ask <strong>ChatGPT, Perplexity, Gemini, or Claude</strong> for top businesses in your industry, AI engines cite and recommend your brand.
                          </p>
                        </div>

                        {/* 3. GEO */}
                        <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-2xs">
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-clash font-bold text-sm mb-3">
                            GEO
                          </div>
                          <h5 className="font-clash font-bold text-base text-[#0A0F1E] mb-1">
                            Generative & Map GEO
                          </h5>
                          <span className="font-sans font-medium text-xs text-emerald-600 block mb-2">
                            गुगल मॅप्स व स्थानिक ग्राहक शोध
                          </span>
                          <p className="font-sans font-normal text-xs text-slate-600 leading-relaxed">
                            Google Maps pin optimization, 5-star review integration, and geo-targeted keywords so nearby local clients discover your office or shop instantly.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ⚙️ 3. SOFTWARE SYSTEMS EMBEDDED PRODUCT: CALLMIND CRM */}
              {service.id === 'software' && (
                <div id="callmind" className="py-10 scroll-mt-28">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                        <span>Live Flagship B2B Suite</span>
                      </div>
                      <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E]">
                        CallMind CRM — SIM Telecalling & Lead Platform
                      </h3>
                    </div>

                    <a
                      href="https://callmind-crm-app.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-2.5 font-sans font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm hover:scale-102 transition-all flex-shrink-0"
                    >
                      <span>Open Live App</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* CALLMIND SHOWCASE */}
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-500/[0.04] via-white to-teal-500/[0.02] border border-emerald-200/90 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* LEFT SPECS (7 COLS) */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <h4 className="font-clash font-bold text-xl sm:text-2xl text-[#0A0F1E] mb-3">
                        A SIM Telecalling CRM Built for Indian Agencies & Sales Teams
                      </h4>
                      <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                        Auto-capture leads from Facebook Ads, Instagram, Google Forms, and spreadsheets in 2 seconds. Dial with 1-click from your mobile SIM, send instant WhatsApp follow-ups, and track daily call quotas with zero cloud audio storage.
                      </p>

                      {/* FEATURE LIST */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                        {[
                          { title: '2-Second Ad Lead Ingress', desc: 'Direct push from Facebook & Instagram Ads' },
                          { title: '1-Click Mobile SIM Dialing', desc: 'Zero VoIP charges, dials from your phone SIM' },
                          { title: 'Marathi, Hindi & English UI', desc: 'Callers can use the app in their own language' },
                          { title: 'Offline Auto-Sync', desc: 'Saves calls and notes even when network drops' },
                          { title: 'Automated GST Invoices', desc: 'CGST/SGST tax invoices for tax input credit' },
                          { title: 'Zero Cloud Audio Storage', desc: '100% private, compliant customer calls' },
                        ].map((f, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                            <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-sans font-semibold text-xs sm:text-sm text-[#0A0F1E] block">{f.title}</span>
                              <span className="font-sans font-normal text-xs text-slate-500 block">{f.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* PRICING & ACTION */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/70 w-full">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-clash font-bold text-2xl text-emerald-600">₹699</span>
                          <span className="font-sans text-xs text-slate-600 font-medium">/ seat / month (billed monthly)</span>
                        </div>
                        <a
                          href="https://callmind-crm-app.onrender.com/signup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-[#0A0F1E] hover:bg-emerald-600 text-white px-5 py-2 font-sans font-semibold text-xs transition-colors"
                        >
                          Start 5-Day Free Trial →
                        </a>
                      </div>
                    </div>

                    {/* RIGHT INTERACTIVE PHONE MOCKUP (5 COLS) */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-[280px] sm:w-[300px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 relative">
                        <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                        
                        <div className="rounded-[28px] bg-white p-4 text-left">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                                CM
                              </div>
                              <span className="font-clash font-bold text-xs text-slate-900">CallMind CRM</span>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                          </div>

                          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 mb-3">
                            <div className="flex items-center justify-between text-[10px] text-emerald-800 font-bold mb-1">
                              <span>NEW INBOUND LEAD</span>
                              <span className="font-mono">JUST NOW</span>
                            </div>
                            <span className="font-sans font-bold text-xs text-[#0A0F1E] block">Suresh Jadhav</span>
                            <span className="font-sans text-[11px] text-slate-600">FB Ad · 3 BHK Inquiry, Pune</span>
                          </div>

                          {/* INTERACTIVE CALL BUTTON */}
                          <div className="flex gap-2 mb-3">
                            <button 
                              type="button"
                              onClick={() => setIsDialing(!isDialing)}
                              className={`flex-1 rounded-xl py-2 font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
                                isDialing 
                                  ? 'bg-red-600 text-white animate-pulse' 
                                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                              }`}
                            >
                              <PhoneCall size={13} />
                              <span>{isDialing ? `Calling (${dialSeconds}s)` : 'Dial SIM 1'}</span>
                            </button>
                            
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-2 font-sans font-semibold text-xs flex items-center justify-center gap-1.5"
                            >
                              <MessageSquare size={13} />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                            <div className="flex justify-between text-[11px] text-slate-600 mb-1.5">
                              <span className="font-medium">Daily Telecall Target</span>
                              <span className="font-bold text-slate-900">42 / 60 Calls</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="w-[70%] h-full bg-emerald-500 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* 📱 4. MOBILE APPS: VOOO FILES & SMARAN AI */}
              {service.id === 'mobile-apps' && (
                <div className="py-10 flex flex-col gap-12">
                  
                  {/* APP 1: VOOO FILES */}
                  <div id="vooo-files" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-blue-500/[0.04] via-white to-blue-500/[0.02] border border-blue-200/90 p-6 sm:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* SPECS (7 COLS) */}
                      <div className="lg:col-span-7 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                            <Folder size={16} />
                          </div>
                          <span className="font-sans font-bold text-xs text-blue-600 uppercase tracking-wider">
                            Android Storage Manager
                          </span>
                          <span className="font-sans text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">
                            Alpha Phase
                          </span>
                        </div>

                        <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E] mb-3">
                          VOOO Files — Storage, Media & Fingerprint Vault
                        </h3>
                        <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                          A native Android storage management app with a fingerprint secret vault for confidential documents, duplicate photo cleaner, archive extractor, and lightweight media player.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full mb-6">
                          {voooFilesProd.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                              <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0" />
                              <span className="font-sans text-xs text-slate-800 font-medium">{feat}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          to="/contact#waitlist"
                          className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 font-sans font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-transform hover:scale-102"
                        >
                          <span>Join VOOO Files Alpha Waitlist</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* PHONE MOCKUP (5 COLS) */}
                      <div className="lg:col-span-5 flex justify-center">
                        <div className="w-[270px] sm:w-[290px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800">
                          <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                          <div className="rounded-[28px] bg-[#F8F9FD] p-4 text-left">
                            <span className="font-clash font-bold text-sm text-[#0A0F1E] block mb-2">Storage Overview</span>
                            <div className="w-full h-3 bg-slate-200 rounded-full flex overflow-hidden mb-3">
                              <div className="w-[45%] bg-blue-500 h-full" />
                              <div className="w-[25%] bg-purple-500 h-full" />
                              <div className="w-[15%] bg-orange-500 h-full" />
                            </div>
                            <div className="flex justify-between text-xs text-slate-600 mb-4 font-medium">
                              <span>68.4 GB Used</span>
                              <span className="font-bold text-slate-800">128 GB Total</span>
                            </div>

                            <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-2xs mb-2 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Lock size={14} className="text-purple-600" />
                                <span className="font-sans font-semibold text-xs text-slate-800">Biometric Vault</span>
                              </div>
                              <span className="font-sans text-xs text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md font-medium">Locked</span>
                            </div>

                            <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-2xs flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Sparkles size={14} className="text-amber-500" />
                                <span className="font-sans font-semibold text-xs text-slate-800">Duplicate Cleaner</span>
                              </div>
                              <span className="font-sans text-xs text-slate-600">1.2 GB Freeable</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* APP 2: SMARAN AI */}
                  <div id="smaran-ai" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-purple-500/[0.04] via-white to-orange-500/[0.02] border border-purple-200/90 p-6 sm:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* SPECS (7 COLS) */}
                      <div className="lg:col-span-7 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                            <Brain size={16} />
                          </div>
                          <span className="font-sans font-bold text-xs text-purple-600 uppercase tracking-wider">
                            Smart Memory & Reminder Alarms
                          </span>
                          <span className="font-sans text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full font-medium">
                            Architecture Phase
                          </span>
                        </div>

                        <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E] mb-3">
                          SMARAN AI — Reminders That Never Get Missed
                        </h3>
                        <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                          Reminders that break through silent mode with visual strobe alarms, auto-purging sensitive notes, and specialized UX presets for Students, Sales Professionals, and Elders.
                        </p>

                        {/* INTERACTIVE MODE SELECTOR */}
                        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200/80 mb-6 w-full max-w-md">
                          {[
                            { key: 'student', label: 'Student Mode', icon: GraduationCap },
                            { key: 'pro', label: 'Professional', icon: Briefcase },
                            { key: 'elder', label: 'Elder Mode', icon: Heart },
                          ].map((mode) => {
                            const IconC = mode.icon;
                            const isSelected = smaranMode === mode.key;
                            return (
                              <button
                                key={mode.key}
                                type="button"
                                onClick={() => setSmaranMode(mode.key as any)}
                                className={`flex-1 py-2 px-2 rounded-lg font-sans font-medium text-xs flex items-center justify-center gap-1.5 transition-all ${
                                  isSelected 
                                    ? 'bg-white text-purple-700 shadow-sm font-semibold' 
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                              >
                                <IconC size={14} />
                                <span>{mode.label}</span>
                              </button>
                            );
                          })}
                        </div>

                        <Link
                          to="/contact#waitlist"
                          className="rounded-full bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 font-sans font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-transform hover:scale-102"
                        >
                          <span>Get Early Access to SMARAN AI</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* PHONE MOCKUP (5 COLS) */}
                      <div className="lg:col-span-5 flex justify-center">
                        <div className="w-[270px] sm:w-[290px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800">
                          <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                          <div className="rounded-[28px] bg-white p-4 text-left">
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                              <span className="font-clash font-bold text-xs text-purple-700 uppercase">
                                {smaranMode === 'student' ? '🎓 Exam & Assignment Mode' : smaranMode === 'pro' ? '💼 Client Pipeline Mode' : '❤️ Medicine & Family Mode'}
                              </span>
                              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            </div>

                            {smaranMode === 'student' && (
                              <div className="space-y-2 text-xs font-sans">
                                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                                  <span className="font-bold text-purple-900 block">Math Assignment Submission</span>
                                  <span className="text-[11px] text-purple-600">Today · 4:00 PM (Override Silent)</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                                  <span className="font-semibold block">Campus Library Return</span>
                                  <span className="text-[11px] text-slate-500">Tomorrow · 11:00 AM</span>
                                </div>
                              </div>
                            )}

                            {smaranMode === 'pro' && (
                              <div className="space-y-2 text-xs font-sans">
                                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                                  <span className="font-bold text-blue-900 block">Follow up: Sharma Real Estate</span>
                                  <span className="text-[11px] text-blue-600">3:30 PM · Auto-Purge Notes</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                                  <span className="font-semibold block">Quarterly GST Filing Review</span>
                                  <span className="text-[11px] text-slate-500">Friday · 5:00 PM</span>
                                </div>
                              </div>
                            )}

                            {smaranMode === 'elder' && (
                              <div className="space-y-2 text-xs font-sans">
                                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                                  <span className="font-bold text-emerald-900 text-sm block">दुपारचे औषध (Blood Pressure)</span>
                                  <span className="text-[11px] text-emerald-700 font-semibold">2:00 PM · मोठा आवाज व फ्लॅश</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                                  <span className="font-semibold block">Evening Walk with Family</span>
                                  <span className="text-[11px] text-slate-500">6:30 PM · Family Alert</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  BOTTOM ACTION STRIP (Clean & Direct)
                  ───────────────────────────────────────────────────────────── */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-500/[0.04] via-purple-500/[0.04] to-orange-500/[0.04] rounded-2xl p-6 border border-slate-200/60">
                <div>
                  <h4 className="font-clash font-bold text-lg text-[#0A0F1E]">
                    Need a custom {service.shortTitle} built for your business?
                  </h4>
                  <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 mt-0.5">
                    We deliver clean architecture, clear milestones, and complete source code ownership.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center rounded-full border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-5 py-2.5 font-sans font-semibold text-xs sm:text-sm transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall size={14} />
                    <span>WhatsApp</span>
                  </a>
                  <Link
                    to={`/contact?service=${service.slug}`}
                    className="flex-1 sm:flex-none text-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-6 py-2.5 font-sans font-semibold text-xs sm:text-sm text-white hover:scale-102 transition-transform shadow-xs"
                  >
                    Get a Quote →
                  </Link>
                </div>
              </div>

            </section>
          );
        })}
      </div>

    </div>
  );
}
