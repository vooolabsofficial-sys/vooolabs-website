import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Check, ArrowRight, MessageSquare, Bell, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_MobileApps() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Mobile App project for my business/idea.")}`;

  return (
    <section 
      id="mobile-apps"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Native Mobile App Development — VOOO LABS"
    >
      {/* REFINED AMBIENT GLOWS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 text-left">
            02 / Mobile Engineering
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: SOPHISTICATED LIGHT-MODE SMARTPHONE MOCKUP (STUDIO LEVEL) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <FadeIn delay={0.25} y={20} className="w-full max-w-sm">
              <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-lg shadow-slate-200/50 text-left">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400">device.render / mobile-viewport</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                    60 FPS Native
                  </span>
                </div>

                {/* Smartphone Minimalist Titanium Frame */}
                <div className="relative mx-auto w-full aspect-[9/17.5] rounded-[36px] p-2.5 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300/80 shadow-md flex flex-col justify-between">
                  
                  {/* Outer Bezel Inset */}
                  <div className="w-full h-full rounded-[28px] bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-inner">
                    
                    {/* Dynamic Island Header */}
                    <div>
                      <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                        <span className="font-bold text-slate-700">9:41</span>
                        <div className="w-16 h-3.5 rounded-full bg-slate-900 flex items-center justify-end px-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="font-semibold text-slate-600">5G · 100%</span>
                      </div>

                      {/* In-App Header */}
                      <div className="mt-3 flex items-center justify-between pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                            V
                          </div>
                          <span className="text-xs font-bold text-slate-800">Your Mobile App</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
                          LIVE SYNC
                        </span>
                      </div>

                      {/* App Main Feature Card */}
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">Native Performance</div>
                        <div className="text-base font-clash font-bold text-purple-700 mt-0.5">Instant Mobile Flow</div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                          Zero lag, buttery smooth 60fps transitions on real Android & iOS phones.
                        </p>
                      </div>
                    </div>

                    {/* Realistic Push Notification Bubble */}
                    <div className="my-auto p-3 rounded-xl bg-white border border-purple-200/90 shadow-sm">
                      <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold text-purple-700">
                        <Bell size={12} className="text-purple-600" />
                        <span>Instant Push Notification</span>
                      </div>
                      <p className="text-[11px] text-slate-700 font-medium leading-snug">
                        "Your custom order was confirmed. Live updates dispatched to all devices."
                      </p>
                    </div>

                    {/* Play Store Verified Pipeline Bottom Strip */}
                    <div>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="flex items-center gap-1 text-slate-700 font-medium">
                          <ShieldCheck size={13} className="text-emerald-500" />
                          Google Play Verified
                        </span>
                        <span className="text-purple-600 font-bold">100% Owned</span>
                      </div>

                      {/* Bottom Home Indicator */}
                      <div className="w-full pt-3 flex justify-center">
                        <div className="w-20 h-1 rounded-full bg-slate-300" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Notes */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-purple-600 font-semibold">
                    <Zap size={13} />
                    Android & iOS Ready
                  </span>
                  <span>Zero Agency Lock-In</span>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: VALUE PROPOSITION */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Your Vision Delivered Directly Into <span className="shimmer-text">Customers' Hands.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you have an innovative app idea, want a dedicated mobile channel for your customers, or need an internal app for ground operations — we engineer native mobile applications that feel lightning-fast, intuitive, and modern.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">From Idea to Verified Google Play Store Live</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      We handle the entire pipeline: UI/UX design, secure code architecture, testing on real physical devices, and official store submission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Fluid 60 FPS Native Performance</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Lightweight, responsive, and buttery-smooth touch interactions. No slow web wrappers that frustrate users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E]">Direct Engagement & Push Alerts</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Send instant updates, reminders, and milestone notifications directly to your users' lock screens with zero SMS cost.
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
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Build Your Mobile App</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Android & iOS Ready</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
