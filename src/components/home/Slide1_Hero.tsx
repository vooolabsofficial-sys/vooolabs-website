import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

type PreviewTab = 'website' | 'software' | 'ai-search';

export default function Slide1_Hero() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('website');
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to see how custom software and web development can help my business.")}`;

  return (
    <section 
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80"
      aria-label="Hero — VOOO LABS Introduction"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[20%] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[95px] sm:h-[110px]" />

      {/* MAIN ASYMMETRIC 60/40 SPLIT HERO */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT 60%: EDITORIAL HEADLINE & VALUE PROPOSITION */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* EYEBROW BADGE */}
            <FadeIn delay={0.02} y={15}>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/90 px-4 py-1.5 text-slate-700 font-mono text-xs tracking-wider uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>SOFTWARE & DIGITAL ENGINEERING STUDIO • {LOCATION.hubs.join(' • ').toUpperCase()}</span>
              </div>
            </FadeIn>

            {/* HEADLINE */}
            <FadeIn delay={0.08} y={20}>
              <h1 className="font-clash text-4xl sm:text-5xl lg:text-[3.85rem] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Enterprise-Grade Websites, Web Apps & Business Software—<span className="text-slate-900">Now Practical for Every Business.</span>
              </h1>
            </FadeIn>

            {/* SUBHEADLINE */}
            <FadeIn delay={0.16} y={18}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                What used to cost lakhs is now within reach. In the AI era, we build custom websites, client portals, and internal business software for small, mid-sized, and growing companies—complete with domain, 24/7 hosting, and 100% ownership.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.24} y={15}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-blue-600 text-white px-7 py-3.5 font-sans font-semibold text-sm sm:text-base inline-flex items-center gap-2"
                >
                  <span>See what your project will cost</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-secondary rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 px-6 py-3.5 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 inline-flex items-center gap-2"
                >
                  <MessageSquare size={16} className="text-emerald-600" />
                  <span>See how it can help your business</span>
                </a>
              </div>
            </FadeIn>

            {/* VALUE COMMITMENT PILLS */}
            <FadeIn delay={0.3} y={12}>
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  100% Client Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-blue-600" />
                  Domain & 24/7 Hosting Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-purple-600" />
                  ₹0 Monthly Software Rent
                </span>
              </div>
            </FadeIn>

          </div>

          {/* RIGHT 40%: INTERACTIVE STUDIO SPEC PREVIEW WINDOW */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.18} y={20}>
              <div className="rounded-3xl border border-slate-200/80 bg-[#FAFAFD] p-5 sm:p-6 shadow-xs text-left relative overflow-hidden">
                
                {/* WINDOW CHROME BAR */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="ml-1 text-slate-700 font-semibold">vooo.spec.preview</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-emerald-700 border border-slate-200">
                    Live Blueprint
                  </span>
                </div>

                {/* 3 SPEC TABS */}
                <div className="grid grid-cols-3 gap-1.5 mb-4 p-1 rounded-xl bg-slate-200/60 font-mono text-xs">
                  <button
                    onClick={() => setActiveTab('website')}
                    className={`py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeTab === 'website'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Website
                  </button>
                  <button
                    onClick={() => setActiveTab('software')}
                    className={`py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeTab === 'software'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Software
                  </button>
                  <button
                    onClick={() => setActiveTab('ai-search')}
                    className={`py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeTab === 'ai-search'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    AI Search
                  </button>
                </div>

                {/* TAB CONTENT: MINIMAL ARCHITECTURAL WIREFRAME */}
                {activeTab === 'website' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-sky-600 font-bold mb-1">
                        All-Inclusive Business Website
                      </div>
                      <div className="font-clash font-bold text-sm text-slate-900 mb-1">
                        High-Converting Digital Storefront
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Tailored design with domain, 24/7 cloud hosting, SSL certificate, and direct WhatsApp lead triggers.
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px] text-slate-600 p-3 rounded-2xl bg-white border border-slate-200/80">
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>Domain Setup & DNS:</span>
                        <span className="text-emerald-600 font-bold">CONFIGURED</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>24/7 Cloud Hosting & SSL:</span>
                        <span className="text-emerald-600 font-bold">INCLUDED</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span>Lead Channel:</span>
                        <span className="text-blue-600 font-bold">1-TAP WHATSAPP</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'software' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold mb-1">
                        Operations & Invoicing Software
                      </div>
                      <div className="font-clash font-bold text-sm text-slate-900 mb-1">
                        Custom Business Dashboard
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        1-Click GST tax invoicing, inquiry pipeline, and staff task assignment with zero monthly per-seat fees.
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px] text-slate-600 p-3 rounded-2xl bg-white border border-slate-200/80">
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>Monthly Per-Seat Fee:</span>
                        <span className="text-emerald-600 font-bold">₹0 FOREVER</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>GST Invoicing Engine:</span>
                        <span className="text-emerald-600 font-bold">1-CLICK PDF</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span>Daily Reports:</span>
                        <span className="text-purple-600 font-bold">AUTO WHATSAPP</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'ai-search' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-purple-600 font-bold mb-1">
                        AI Search & Ad Setup (SEO, AEO, GEO)
                      </div>
                      <div className="font-clash font-bold text-sm text-slate-900 mb-1">
                        Modern Discovery System
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Recommended on ChatGPT, Gemini, and Google Maps—plus full setup for targeted AI search ad campaigns.
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px] text-slate-600 p-3 rounded-2xl bg-white border border-slate-200/80">
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>ChatGPT & Gemini:</span>
                        <span className="text-purple-600 font-bold">RECOMMENDED</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-200">
                        <span>Google Maps 3-Pack:</span>
                        <span className="text-emerald-600 font-bold">PIN OPTIMIZED</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span>AI Search Ads:</span>
                        <span className="text-amber-600 font-bold">CONVERSION SETUP</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SPEC FOOTER STATUS */}
                <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Architecture: 100% Client Handover</span>
                  <span className="text-emerald-600 font-bold">Zero Vendor Lock-in</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* MINIMAL BOTTOM 4-SERVICE ROW */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 mt-6 mb-4">
        <div className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-left">
          <Link to="/services#websites" className="p-2.5 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
              <Globe size={15} />
            </div>
            <div className="min-w-0">
              <div className="font-clash font-bold text-xs text-slate-900 group-hover:text-sky-600 truncate">01 / Business Websites</div>
              <div className="text-[11px] text-slate-500 truncate">Domain, 24/7 Hosting & Leads</div>
            </div>
          </Link>

          <Link to="/services#web-apps" className="p-2.5 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
              <Laptop size={15} />
            </div>
            <div className="min-w-0">
              <div className="font-clash font-bold text-xs text-slate-900 group-hover:text-blue-600 truncate">02 / Custom Web Apps</div>
              <div className="text-[11px] text-slate-500 truncate">Portals & Booking Systems</div>
            </div>
          </Link>

          <Link to="/services#custom-software" className="p-2.5 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <Cpu size={15} />
            </div>
            <div className="min-w-0">
              <div className="font-clash font-bold text-xs text-slate-900 group-hover:text-emerald-600 truncate">03 / Business Software</div>
              <div className="text-[11px] text-slate-500 truncate">GST Invoicing & Operations</div>
            </div>
          </Link>

          <Link to="/seo-ai" className="p-2.5 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
              <Sparkles size={15} />
            </div>
            <div className="min-w-0">
              <div className="font-clash font-bold text-xs text-slate-900 group-hover:text-purple-600 truncate">04 / AI Search & Growth</div>
              <div className="text-[11px] text-slate-500 truncate">Google SEO, AEO & Maps</div>
            </div>
          </Link>
        </div>
      </div>

      {/* FOOTER TICKER */}
      <div className="relative z-20 px-6 sm:px-12 pb-5 flex justify-between items-end gap-6 w-full max-w-7xl mx-auto border-t border-slate-100 pt-4">
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed">
            GROUNDED ENGINEERING • 100% CODE & DATA OWNERSHIP
          </div>
        </FadeIn>
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-[11px] text-slate-500 text-right">
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
