import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Globe, 
  Cpu, 
  Search, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Users, 
  Bot, 
  FileText,
  Clock,
  Gauge,
  Check,
  Building,
  DollarSign
} from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_SolutionExplorer() {
  // Card 1 State: Website Speed comparison
  const [speedStack, setSpeedStack] = useState<'vooo' | 'wp'>('vooo');

  // Card 2 State: Web App Role switch
  const [activeRole, setActiveRole] = useState<'admin' | 'client'>('admin');

  // Card 3 State: Software Invoice preview
  const [invoiceStatus, setInvoiceStatus] = useState<'generated' | 'sent'>('generated');

  // Card 4 State: AI Engine switch
  const [aiEngine, setAiEngine] = useState<'chatgpt' | 'perplexity'>('chatgpt');

  return (
    <section 
      className="bg-[#FAFAFD] py-20 sm:py-28 px-4 sm:px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Core Engineering Capabilities"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              ENGINEERED DELIVERABLES • ZERO AI SLOP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              We Don't Resell Templates. <br />
              <span className="shimmer-text">We Engineer Systems.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
              Every deliverable is crafted from scratch with clean code, sub-second speeds, zero monthly software rent, and 100% client code ownership.
            </p>
          </FadeIn>
        </div>

        {/* 2X2 BESPOKE INTERACTIVE BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* ══════════════════════════════════════════════════════
              CARD 1: HIGH-PERFORMANCE WEBSITES (ALL-INCLUSIVE)
             ══════════════════════════════════════════════════════ */}
          <FadeIn delay={0.06} y={20} className="w-full flex">
            <div className="w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 text-left group">
              <div>
                {/* CARD TOP META */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center flex-shrink-0">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-purple-600 uppercase tracking-wider block">
                        01 / ALL-INCLUSIVE WEB
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-medium">
                        3 to 7 Days Delivery
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    Hosting Included
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-purple-600 transition-colors">
                  High-Conversion Business Websites
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Visual storytelling that converts visitors into paying customers. Domain registration, DNS, SSL, and high-speed 24/7 cloud hosting included.
                </p>

                {/* INTERACTIVE MINI WIDGET: LIGHTHOUSE & SPEED TESTER */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 mb-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Gauge size={13} className="text-purple-600" />
                      Speed Benchmark
                    </span>
                    {/* Toggle Stack */}
                    <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-[10px] font-mono">
                      <button
                        onClick={() => setSpeedStack('vooo')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          speedStack === 'vooo'
                            ? 'bg-white text-purple-600 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        VOOO Stack
                      </button>
                      <button
                        onClick={() => setSpeedStack('wp')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          speedStack === 'wp'
                            ? 'bg-white text-slate-900 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Typical WP
                      </button>
                    </div>
                  </div>

                  {/* SPEED DISPLAY */}
                  {speedStack === 'vooo' ? (
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="font-bold text-emerald-600 text-lg sm:text-xl block leading-tight">100</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">Performance</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="font-bold text-emerald-600 text-lg sm:text-xl block leading-tight">0.38s</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">Load Time</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="font-bold text-emerald-600 text-lg sm:text-xl block leading-tight">100</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">SEO & Security</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="p-2.5 rounded-xl bg-white border border-rose-200 shadow-2xs">
                        <span className="font-bold text-rose-500 text-lg sm:text-xl block leading-tight">46</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">Bloated Theme</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-amber-200 shadow-2xs">
                        <span className="font-bold text-amber-600 text-lg sm:text-xl block leading-tight">3.8s</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">High Drop-off</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-rose-200 shadow-2xs">
                        <span className="font-bold text-rose-500 text-lg sm:text-xl block leading-tight">Plugins</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase">Plugin Risk</span>
                      </div>
                    </div>
                  )}

                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <Zap size={11} /> Edge Cache Enabled
                    </span>
                    <span>1-Tap WhatsApp Lead Funnel</span>
                  </div>
                </div>

                {/* 3 CHECKMARKS */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Domain name, DNS setup & automated SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Sub-0.4s instant mobile loading on 4G & 5G</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>100% full source code ownership handed over</span>
                  </li>
                </ul>
              </div>

              {/* CARD BOTTOM CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services#websites"
                  className="font-mono text-xs font-semibold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
                >
                  <span>Inspect Website Scope</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact?scope=website"
                  className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-purple-600 text-white px-4 py-2 text-xs font-medium"
                >
                  Get Cost Estimate
                </Link>
              </div>
            </div>
          </FadeIn>


          {/* ══════════════════════════════════════════════════════
              CARD 2: CUSTOM WEB APPS & CLIENT PORTALS
             ══════════════════════════════════════════════════════ */}
          <FadeIn delay={0.12} y={20} className="w-full flex">
            <div className="w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 text-left group">
              <div>
                {/* CARD TOP META */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-blue-600 uppercase tracking-wider block">
                        02 / WEB APPS & PORTALS
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-medium">
                        2 to 3 Weeks Delivery
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                    Zero Per-Seat Fees
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                  Custom Client Portals & Dashboards
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Self-service client login portals, booking calendars, and staff management dashboards tailored around your exact workflow.
                </p>

                {/* INTERACTIVE MINI WIDGET: ROLE-BASED DASHBOARD PREVIEW */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 mb-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 font-semibold">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="ml-1 text-slate-700 font-mono text-[10px]">app.yourbrand.in</span>
                    </div>

                    {/* Role Switcher */}
                    <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-[10px] font-mono">
                      <button
                        onClick={() => setActiveRole('admin')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          activeRole === 'admin'
                            ? 'bg-white text-blue-600 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Admin View
                      </button>
                      <button
                        onClick={() => setActiveRole('client')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          activeRole === 'client'
                            ? 'bg-white text-blue-600 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Client View
                      </button>
                    </div>
                  </div>

                  {/* ROLE DISPLAY */}
                  {activeRole === 'admin' ? (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Active Users</span>
                        <span className="font-bold text-slate-900">142 Accounts (₹0 User Fees)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Database Latency</span>
                        <span className="font-bold text-emerald-600">28ms • Global Edge</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Security</span>
                        <span className="font-mono text-[11px] text-slate-700 font-medium">JWT Auth + Daily Backups</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Client Login</span>
                        <span className="font-bold text-blue-600">Secure Self-Service Active</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Project Files</span>
                        <span className="font-bold text-slate-900">100% Downloadable</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">Source Code</span>
                        <span className="font-mono text-[11px] text-emerald-600 font-semibold">Client Owned Repository</span>
                      </div>
                    </div>
                  )}

                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="flex items-center gap-1 text-blue-600 font-medium">
                      <ShieldCheck size={12} /> Permanent Handover
                    </span>
                    <span>No SaaS subscription lock-in</span>
                  </div>
                </div>

                {/* 3 CHECKMARKS */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Role-based staff and client authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Real-time database sync with sub-50ms latency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>₹0 monthly user license rent (unlike SaaS tools)</span>
                  </li>
                </ul>
              </div>

              {/* CARD BOTTOM CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services#web-apps"
                  className="font-mono text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                >
                  <span>Inspect Web App Scope</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact?scope=web-app"
                  className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 text-xs font-medium"
                >
                  Get Cost Estimate
                </Link>
              </div>
            </div>
          </FadeIn>


          {/* ══════════════════════════════════════════════════════
              CARD 3: BUSINESS OPERATIONS & AUTOMATED GST SOFTWARE
             ══════════════════════════════════════════════════════ */}
          <FadeIn delay={0.18} y={20} className="w-full flex">
            <div className="w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 text-left group">
              <div>
                {/* CARD TOP META */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-emerald-600 uppercase tracking-wider block">
                        03 / BUSINESS SOFTWARE
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-medium">
                        Fixed Milestone Delivery
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    ₹0 Monthly Software Rent
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">
                  Operations & Automated GST Invoicing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Replace chaotic spreadsheets and expensive software rentals with custom software built exclusively around your company's workflows.
                </p>

                {/* INTERACTIVE MINI WIDGET: DIGITAL GST INVOICE ENGINE */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 mb-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <FileText size={13} className="text-emerald-600" />
                      Live GST Invoice Engine
                    </span>
                    <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                      TAX VERIFIED
                    </span>
                  </div>

                  {/* INVOICE CARD */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-100">
                      <span className="font-mono font-bold text-slate-900">INV-2026-089</span>
                      <span className="font-mono text-[11px] text-slate-500">Auto-Generated</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Tax Breakdown</span>
                      <span className="font-mono text-[11px] font-medium text-slate-900">CGST (9%) + SGST (9%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                      <span className="font-semibold text-slate-800">Monthly Licensing Fee</span>
                      <span className="font-bold text-emerald-600 font-mono text-sm">₹0 / month (Forever)</span>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <Check size={12} /> Spreadsheets Eliminated
                    </span>
                    <span>1-Click PDF & WhatsApp Dispatch</span>
                  </div>
                </div>

                {/* 3 CHECKMARKS */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Automated 1-click GST tax invoices and client statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Real-time order tracking, payment logging & inventory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Zero per-user monthly rent — you own the platform entirely</span>
                  </li>
                </ul>
              </div>

              {/* CARD BOTTOM CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services#custom-software"
                  className="font-mono text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Inspect Software Scope</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact?scope=software"
                  className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-emerald-600 text-white px-4 py-2 text-xs font-medium"
                >
                  Get Cost Estimate
                </Link>
              </div>
            </div>
          </FadeIn>


          {/* ══════════════════════════════════════════════════════
              CARD 4: CHATGPT & GOOGLE AI SEARCH VISIBILITY
             ══════════════════════════════════════════════════════ */}
          <FadeIn delay={0.24} y={20} className="w-full flex">
            <div className="w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 text-left group">
              <div>
                {/* CARD TOP META */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0">
                      <Search size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-amber-600 uppercase tracking-wider block">
                        04 / AI SEARCH & ADS
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-medium">
                        Permanent Organic Equity
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    AEO & GEO Ready
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                  ChatGPT & Google AI Recommendations
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  When potential clients query ChatGPT, Perplexity, or Google, our structured schema ensures your business is cited and recommended as the authority.
                </p>

                {/* INTERACTIVE MINI WIDGET: AI CONVERSATION SIMULATOR */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 mb-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-500" />
                      AI Search Query Simulation
                    </span>
                    <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-[10px] font-mono">
                      <button
                        onClick={() => setAiEngine('chatgpt')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          aiEngine === 'chatgpt'
                            ? 'bg-white text-emerald-600 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        ChatGPT
                      </button>
                      <button
                        onClick={() => setAiEngine('perplexity')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                          aiEngine === 'perplexity'
                            ? 'bg-white text-blue-600 shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Perplexity
                      </button>
                    </div>
                  </div>

                  {/* CHAT BUBBLE SIMULATION */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-semibold flex-shrink-0">
                        Query
                      </span>
                      <p className="text-slate-700 italic">
                        "Who are verified web and software engineers in Maharashtra?"
                      </p>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                      <span className="font-mono text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold flex-shrink-0">
                        Answer
                      </span>
                      <p className="text-slate-800 font-medium">
                        "Recommended: <span className="text-slate-950 font-bold">Your Business Entity</span> — verified structured schema, high trust metrics, and direct founder leadership."
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="flex items-center gap-1 text-amber-600 font-medium">
                      <Bot size={12} /> Knowledge Graph Validated
                    </span>
                    <span>Google Maps 3-Pack Pin</span>
                  </div>
                </div>

                {/* 3 CHECKMARKS */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Structured Schema.org JSON-LD for AI search engines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Local Google Maps 3-Pack pin and business citation authority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>High-intent Google Ads with zero wasted agency overhead</span>
                  </li>
                </ul>
              </div>

              {/* CARD BOTTOM CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/seo-ai"
                  className="font-mono text-xs font-semibold text-amber-600 hover:text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>Inspect AI Search Scope</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact?scope=seo-ai"
                  className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-amber-600 text-white px-4 py-2 text-xs font-medium"
                >
                  Get Cost Estimate
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
