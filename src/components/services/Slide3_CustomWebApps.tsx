import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Check, ArrowRight, MessageSquare, ShieldCheck, Zap, Sparkles, CheckCircle2, Server, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_CustomWebApps() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Custom Web Application / SaaS project for my business.")}`;

  return (
    <section 
      id="web-apps"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Custom Web Applications & SaaS — VOOO LABS"
    >
      {/* REFINED AMBIENT GLOWS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-left">
            02 / Cloud Platforms & SaaS
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Modern Web Applications <span className="shimmer-text">Engineered for Scale</span> & Speed.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                We design and engineer bespoke web applications, interactive customer portals, and high-performance SaaS dashboards using React, Next.js, and serverless edge databases.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Sub-Second Global Response Times</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Optimized React & Next.js architectures with edge caching, automated asset compression, and sub-400ms interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Multi-Tenant & Role-Based Access</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Strict security boundaries, encrypted session tokens, and granular permission matrices for staff and customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">100% Cross-Device Responsiveness</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Flawlessly rendered across desktop monitors, tablets, and mobile browser viewports with zero layout shifts.
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
                  <span>Discuss Web App Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Source Code & IP Handover</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: WEB APP INTERFACE PREVIEW */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-6 sm:p-7 shadow-md text-left relative overflow-hidden">
                
                {/* Browser Window Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2">portal.client-platform.internal</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-50 text-purple-700 border border-purple-200">
                    Active Cloud Session
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Edge API Latency</div>
                    <div className="text-lg font-clash font-bold text-slate-900 mt-0.5">84 ms</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Global Edge CDN</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Auth Vault</div>
                    <div className="text-lg font-clash font-bold text-purple-600 mt-0.5">Zero-Trust</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">JWT Session Encrypted</div>
                  </div>
                </div>

                {/* Application Modules */}
                <div className="space-y-2.5 mb-5">
                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                        <Layout size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Dynamic Data Flow Engine</div>
                        <div className="text-[11px] text-slate-500">Server-side rendering & optimistic UI</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      HTTP/3
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Server size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">PostgreSQL Data Pipeline</div>
                        <div className="text-[11px] text-slate-500">Automated multi-region replication</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Synchronized
                    </span>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Globe size={13} className="text-purple-600" />
                    Responsive Desktop & Mobile Web
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Production Ready
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
