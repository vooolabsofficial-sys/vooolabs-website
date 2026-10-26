import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Phone, ArrowRight, ShieldCheck, Clock, Check, ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const FAQS = [
  {
    q: 'How does ChatGPT or Perplexity discover my business?',
    a: 'AI models search live public knowledge bases (Wikidata, Crunchbase, verified directories, and structured Schema.org JSON-LD). When we structure your brand entity and case studies properly, conversational LLMs extract and synthesize your business as the verified answer.'
  },
  {
    q: 'What is the practical difference between SEO and AEO/GEO?',
    a: '• SEO is for traditional users typing keywords on Google and scanning 10 blue links.\n• GEO is for users asking ChatGPT or Perplexity for direct recommendations.\n• AEO is for capturing Google AI Overviews (the top AI summary snapshot before any links).\nTogether, they ensure you win customers regardless of where they search.'
  },
  {
    q: 'Do I need to pay expensive monthly retainer fees for this?',
    a: 'No. Unlike traditional marketing agencies that lock you into ₹25,000 – ₹50,000 monthly retainers forever, VOOO LABS engineers the permanent technical architecture, entity schema, and speed from day one. You own a permanent asset with zero monthly software rent.'
  },
  {
    q: 'How quickly does Google and ChatGPT begin indexing my website?',
    a: 'Once submitted with our semantic Schema.org architecture, Google Search Console and AI crawler bots (GPTBot, PerplexityBot) begin indexing within 1 to 2 weeks. Organic search rankings and conversational AI citations typically mature over 4 to 8 weeks.'
  }
];

export default function Slide6_AuditKickoff() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [domainInput, setDomainInput] = useState('');

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hello VOOO LABS, I want to claim a Free 2026 AI Search & SEO Audit for my business${domainInput ? ` (Domain: ${domainInput})` : ''}.`)}`;
  const phoneCallUrl = `tel:+${COMPANY.whatsapp}`;

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  return (
    <section 
      id="audit-kickoff"
      className="snap-section min-h-screen bg-[#FAFAFC] flex flex-col justify-between relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Free 2026 AI Search Audit & Project Kickoff — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/4 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* KICKOFF HERO TERMINAL */}
        <FadeIn delay={0.1} y={20}>
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden mb-16">
            
            {/* Top Brand Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500" />

            <div className="max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200/80">
                <Sparkles size={13} />
                <span>Claim Your Free 2026 AI Search & SEO Audit</span>
              </div>

              <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0F1E] tracking-tight">
                Find Out Where Your Business Ranks on ChatGPT & Google AI.
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                Send us your website URL or business name. We'll run a complete diagnostic scan on how your brand currently appears across ChatGPT, Google AI Overviews, and Google Maps within 2 hours.
              </p>

              {/* Optional Domain Quick Input */}
              <div className="pt-2 max-w-md mx-auto">
                <div className="p-1.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter your website (e.g. yourcompany.com)"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-mono"
                  />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1 shadow-xs"
                  >
                    <span>Scan</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Claim Free AI Audit on WhatsApp</span>
                  <ArrowRight size={14} className="ml-0.5" />
                </a>

                <a
                  href={phoneCallUrl}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold text-sm border border-slate-200 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Phone size={15} className="text-blue-600" />
                  <span>Call +91 76202 36178</span>
                </a>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  100% Free Diagnostic Scan
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock size={14} className="text-blue-600" />
                  Report Ready in 2 Hours
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check size={14} className="text-purple-600" />
                  Direct Architect Review
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* FREQUENTLY ASKED QUESTIONS (AIRY & ACCESSIBLE) */}
        <FadeIn delay={0.2} y={20}>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-center mb-6">
              <h3 className="font-clash font-bold text-2xl text-slate-900">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Everything you need to know about generative search and AI citations.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="font-clash font-bold text-sm sm:text-base text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-purple-600' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 whitespace-pre-line">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
