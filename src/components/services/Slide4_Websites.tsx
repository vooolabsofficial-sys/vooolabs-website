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
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="High-Impact Websites — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

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
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
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
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Sub-Second Mobile Load Times</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Loads in under 0.4 seconds on mobile data networks. Zero visitor bounce caused by sluggish pages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">1-Tap Direct WhatsApp & Call Ingress</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      No lengthy, abandoned contact forms. High-intent visitors reach out to your phone with a single tap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">100% Unrestricted Code & Asset Handover</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      You own the complete source code, domain registration, and hosting setup. Zero monthly agency lock-in.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Launch Your Website</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Sub-0.4s Mobile Latency</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: HIGH-END BROWSER & CORE WEB VITALS CARD */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Browser Window Chrome */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <Lock size={10} className="text-emerald-500" />
                    <span>https://yourbusiness.com</span>
                  </div>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live Edge CDN
                  </span>
                </div>

                {/* Simulated Website Hero Card with 1-Tap Trigger */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 mb-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="font-semibold text-slate-800">Your High-Converting Web Platform</span>
                    <span className="text-[10px] font-mono text-sky-600 font-bold">100% Mobile Ready</span>
                  </div>
                  <div className="font-clash text-lg font-bold text-slate-900 leading-snug">
                    Modern digital presence designed to build authority & capture ready-to-buy leads.
                  </div>

                  {/* 1-Tap Lead Trigger Simulation */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold shadow-xs">
                      <span>WhatsApp Direct Inquiry</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">1-Tap Ingress (No Forms)</span>
                  </div>
                </div>

                {/* Real Core Web Vitals Benchmark Strip */}
                <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Lighthouse</div>
                    <div className="text-xl font-clash font-bold text-emerald-600 mt-0.5">99/100</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Google Score</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Load Time</div>
                    <div className="text-xl font-clash font-bold text-sky-600 mt-0.5">0.38s</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Sub-Second FCP</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Bounce Rate</div>
                    <div className="text-xl font-clash font-bold text-slate-900 mt-0.5">Zero</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Instant Mobile Open</div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Monitor size={13} className="text-sky-500" />
                    Responsive on Mobile & Desktop
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    100% Source Handover
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
