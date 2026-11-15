import React, { useState } from 'react';
import { ChevronDown, ArrowUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION, FOUNDER } from '../../content/company';

export default function Slide3_FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'What kind of software and digital solutions does VOOO LABS build?',
      a: 'We design and engineer bespoke Web Applications, High-Performance Brand & Corporate Platforms, and Custom Business Software & Portals (CRM/ERP) tailored directly to your operational workflows.',
    },
    {
      q: 'How does a custom software or web development project work?',
      a: 'We begin with an architectural scoping session to map data schemas and user journeys. Following technical approval, we run deterministic weekly sprints with live staging URLs so you review real software from day one.',
    },
    {
      q: 'Who owns the source code and business data?',
      a: 'You hold 100% intellectual property ownership of your source code, databases, design assets, and cloud credentials upon final milestone signoff. There is zero vendor lock-in or proprietary licensing fee.',
    },
    {
      q: `Where is ${COMPANY.brandName} based?`,
      a: `${COMPANY.brandName} is headquartered in ${LOCATION.region}, ${LOCATION.country} with operating hubs in ${LOCATION.hubs.join(', ')}. We engineer solutions locally and ship software for clients globally.`,
    },
    {
      q: 'How are project fees and milestones structured?',
      a: 'Pricing is scoped deterministically based on architectural complexity, system integrations, and delivery speed. We deliver fixed milestone-based proposals with clear deliverables and zero surprise invoices.',
    },
    {
      q: 'Do you build native mobile applications?',
      a: 'No. VOOO LABS focuses exclusively on high-performance Custom Web Applications, Enterprise Business Portals, and High-Speed Web Platforms. Every web platform we engineer is fully responsive and optimized for mobile devices, but we do not develop native app store applications.',
    },
    {
      q: 'Who will be working on my project?',
      a: `Direct engineering. You collaborate directly with ${FOUNDER.name} and our lead software architects. No account managers, sales reps, or outsourced handoffs.`,
    },
    {
      q: 'Is client business confidentiality protected?',
      a: 'Strictly. We execute mutual Non-Disclosure Agreements (NDAs) prior to discussing proprietary algorithms, customer data schemas, or commercial workflows.',
    },
    {
      q: 'Do you offer post-launch support and infrastructure monitoring?',
      a: 'Yes. Every production deployment includes a comprehensive post-launch warranty period followed by optional ongoing maintenance, feature expansion, and edge monitoring agreements.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BACK TO TOP ANCHOR */}
        <FadeIn delay={0} y={10}>
          <a 
            href="#contact-form-section" 
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-4 hover:text-blue-600 transition-colors"
          >
            <ArrowUp size={12} />
            <span>Jump to Project Form</span>
          </a>
        </FadeIn>

        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn delay={0.05} y={15}>
            <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Common <span className="shimmer-text font-bold">Questions</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              Everything you need to know about our engineering standards, pricing, and handover process.
            </p>
          </FadeIn>
        </div>

        {/* ACCORDIONS LIST */}
        <div className="w-full space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <FadeIn key={idx} delay={idx * 0.03} y={15} className="w-full">
                <div 
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-500 shadow-sm ring-1 ring-blue-500/20 bg-white' 
                      : 'border-slate-200/80 bg-[#FAFAFD] hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* ACCORDION TRIGGER */}
                  <button 
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-semibold text-slate-400 mt-1">
                        {indexStr}
                      </span>
                      <h3 className={`font-clash font-semibold text-base sm:text-lg transition-colors ${
                        isOpen ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600 border-blue-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {/* ACCORDION CONTENT */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100">
                          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pt-4">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
