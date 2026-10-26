import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, MessageSquare, Check, X, ChevronDown, Sparkles, Building, Globe, HelpCircle } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide7_ROIKickoff() {
  const [businessName, setBusinessName] = useState('');
  const [websiteCity, setWebsiteCity] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `Hello VOOO LABS, I would like a Free 2026 AI Visibility Audit for my business:%0A• Business Name: ${encodeURIComponent(businessName || 'My Business')}%0A• Website / City: ${encodeURIComponent(websiteCity || 'Maharashtra')}%0APlease check our ChatGPT, Perplexity, and Google AI Overview presence.`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${query}`, '_blank');
  };

  const faqs = [
    {
      q: 'How long does it take for ChatGPT & Perplexity to start recommending my business?',
      a: 'AI crawler ingestion cycles (OpenAI GPTBot and PerplexityBot) typically index entity schemas and cross-reference citations within 3 to 6 weeks, after which generative recommendations become visible.'
    },
    {
      q: 'Do I have to pay monthly fees to OpenAI, Perplexity, or Google?',
      a: 'No. AI search citations are purely organic editorial answers. Once your business entity authority and sub-0.4s code are structured, you pay ₹0 monthly recurring ad fees.'
    },
    {
      q: 'Can you optimize my existing website or do I need a new build?',
      a: 'We can inject JSON-LD schemas and entity structures into your existing website, or migrate your frontend to our sub-0.4s headless React architecture if your current site is too slow for AI crawlers.'
    },
    {
      q: 'How do we know when ChatGPT or Google AI recommends our business?',
      a: 'We provide before-and-after query verification screenshots across multiple high-intent prompts, plus inbound WhatsApp referral tracking so you see exactly which inquiries originated from AI search.'
    }
  ];

  return (
    <section 
      id="audit-kickoff"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-28"
      aria-label="ROI Financial Comparison and Free AI Audit Kickoff"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-purple-600 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>06 / FINANCIAL REALITY & PERMANENT AI EQUITY</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT SIDE: FINANCIAL REALITY (RENTED ADS VS OWNED ASSET) */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F1E] tracking-tight leading-[1.15]">
                Stop Paying Monthly Rent On Ads. <span className="shimmer-text">Build Owned AI Search Equity.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                When you run Google Ads, the minute you stop paying ₹50,000 every month, all your traffic and leads vanish overnight. AI search optimization is like buying commercial land: you build permanent entity authority that recommends your business 24/7 with zero ongoing ad spend.
              </p>
            </FadeIn>

            {/* FINANCIAL COMPARISON TABLE */}
            <FadeIn delay={0.25} y={20}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                
                {/* RENTED ADS (NEGATIVE) */}
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs font-mono uppercase">
                    <X className="w-4 h-4 stroke-[2.5]" />
                    <span>Rented Google / Meta Ads</span>
                  </div>
                  <div className="font-clash font-bold text-xl text-slate-900">₹30,000 – ₹1L+ / mo</div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Zero permanent equity. Clicks vanish the instant your daily credit card balance is drained.
                  </p>
                </div>

                {/* OWNED AI EQUITY (POSITIVE) */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 border-2 border-emerald-500/60 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-mono uppercase">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>VOOO LABS AI Search Equity</span>
                  </div>
                  <div className="font-clash font-bold text-xl text-emerald-700">₹0 / month Recurring</div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    100% owned asset. ChatGPT, Perplexity, and Google cite your brand organically forever.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.32} y={20}>
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cites your brand at the exact moment of high-intent purchase decisions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes clickable direct link to your website with 1-tap WhatsApp chat</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed 100% source code and entity data ownership</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: INTERACTIVE FREE AI AUDIT SCANNER & FAQS */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.22} y={20}>
              
              {/* INTERACTIVE SCANNER BOX */}
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-5 text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500" />
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2 border border-purple-200/80">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free 2026 AI Search Visibility Audit</span>
                  </div>

                  <h3 className="font-clash font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    Does ChatGPT Recommend Your Company Today?
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Enter your business details below. We will test your business across ChatGPT, Perplexity, and Google AI Overviews and send you a detailed audit report on WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleAuditSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business or Company Name
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Engineering Works or Dr. Sharma Clinic"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Website URL or Primary City
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={websiteCity}
                        onChange={(e) => setWebsiteCity(e.target.value)}
                        placeholder="e.g. apexengineering.in or Pune, Maharashtra"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Run AI Audit & Send Report on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200">
                  <span>✓ 100% Free · No Obligation</span>
                  <span>✓ Delivered directly to your phone</span>
                </div>

              </div>

              {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
              <div className="pt-2 space-y-2 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                  <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                  <span>Frequently Asked Questions</span>
                </div>

                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-clash font-bold text-slate-800 hover:text-purple-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? 'rotate-180 text-purple-600' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-2"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
