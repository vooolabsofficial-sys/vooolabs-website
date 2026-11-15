import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Check, ArrowRight, MessageSquare, Zap, ShieldCheck, Monitor, Smartphone, CheckCircle2, Lock } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_Websites() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a new Website project for my business.")}`;

  return (
    <section 
      id="websites"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="High-Impact Websites — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-sky-600 uppercase mb-3 text-left">
            03 / Web Platform & Inquiries
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                High-Impact Websites That <span className="shimmer-text">Convert Visitors</span> into Clients.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Your website is your 24/7 digital storefront. We design clean, ultra-fast websites that establish instant credibility, look stunning on every device, and turn visits into direct customer calls and WhatsApp inquiries.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Sub-Second Mobile Load Times</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Loads in under 0.4 seconds on mobile data networks. Zero visitor bounce caused by sluggish pages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Direct WhatsApp & One-Tap Calling</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Strategically engineered call-to-actions make it effortless for interested clients to initiate immediate contact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">100% Unrestricted Asset Ownership</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Full ownership of your source code, domain names, DNS, and hosting accounts upon project completion.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGER */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Your New Website</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Fixed Milestone Pricing</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: WEBSITE SHOWCASE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2">https://brand-domain.com</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-sky-50 text-sky-700 border border-sky-200">
                    Lighthouse 99/100
                  </span>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Mobile Load Speed</div>
                    <div className="text-lg font-clash font-bold text-sky-600 mt-0.5">&lt; 0.4s FCP</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Instant Visual Render</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Conversion Engine</div>
                    <div className="text-lg font-clash font-bold text-emerald-600 mt-0.5">1-Tap WhatsApp</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">Zero Lost Leads</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-5">
                  <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                        <Monitor size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Editorial Swiss Typography & Layout</div>
                        <div className="text-[11px] text-slate-500">Crisp contrast, zero cheap stock feel</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                      Clean
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Zap size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">SEO & AI Search Discoverability</div>
                        <div className="text-[11px] text-slate-500">Structured Schema.org JSON-LD included</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Ranked
                    </span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Lock size={13} className="text-emerald-600" />
                    Automated Free SSL / TLS
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    100% Client Owned
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
