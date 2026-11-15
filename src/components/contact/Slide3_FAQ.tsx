import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
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
      a: 'We design and engineer all-inclusive Business Websites, Custom Web Applications & Client Portals, and Custom Business Software (billing systems, inventory managers, and staff workflows) tailored directly to your business.',
    },
    {
      q: 'How does a project engagement work?',
      a: 'We begin with an honest requirements and workflow review. Following technical alignment, we provide a fixed all-inclusive price and transparent milestone schedule, with weekly interactive staging previews on your smartphone and PC.',
    },
    {
      q: 'Who owns the source code, hosting, and business data?',
      a: 'You hold 100% intellectual property ownership of your source code, database, domain, and cloud hosting accounts upon final milestone handover. There are zero per-user monthly SaaS fees or vendor lock-in.',
    },
    {
      q: `Where is ${COMPANY.brandName} based?`,
      a: `${COMPANY.brandName} is headquartered in ${LOCATION.region}, ${LOCATION.country} with operating hubs in ${LOCATION.hubs.join(', ')}. We serve growing businesses locally and across India.`,
    },
    {
      q: 'How are project pricing and milestones structured?',
      a: 'Pricing is scoped deterministically based on clear business deliverables. We provide transparent, all-inclusive quotes covering design, domain, hosting, and build with zero hidden costs.',
    },
    {
      q: 'Who will be working on my project?',
      a: `Direct engineering. You collaborate directly with ${FOUNDER.name} (Founder & Lead Software Architect). No account managers, sales reps, or junior outsourced staff.`,
    },
    {
      q: 'Is client business confidentiality protected?',
      a: 'Strictly. We execute mutual Non-Disclosure Agreements (NDAs) prior to reviewing proprietary business workflows, internal numbers, or customer records.',
    },
    {
      q: 'Do you offer post-launch support and hosting maintenance?',
      a: 'Yes. Every project includes 24/7 cloud hosting setup and post-launch verification, followed by ongoing support agreements if desired.',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 px-6 sm:px-8 select-none antialiased border-b border-zinc-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BACK TO TOP ANCHOR */}
        <FadeIn delay={0} y={10}>
          <a 
            href="#contact-form-section" 
            className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4 hover:text-zinc-900 transition-colors"
          >
            <ArrowUp size={12} />
            <span>Jump to Project Form</span>
          </a>
        </FadeIn>

        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn delay={0.05} y={15}>
            <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-zinc-950 mb-3 tracking-tight leading-snug">
              Common Questions
            </h2>
            <p className="font-sans text-base text-zinc-600 font-normal leading-relaxed">
              Everything you need to know about our engineering standards, pricing, and 100% handover process.
            </p>
          </FadeIn>
        </div>

        {/* ACCORDIONS LIST */}
        <div className="w-full space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <FadeIn key={idx} delay={idx * 0.03} y={15} className="w-full">
                <div 
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-zinc-950 bg-white shadow-2xs' 
                      : 'border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white'
                  }`}
                >
                  {/* ACCORDION TRIGGER */}
                  <button 
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-semibold text-zinc-400 mt-0.5">
                        {indexStr}
                      </span>
                      <h3 className={`font-sans font-bold text-sm sm:text-base transition-colors ${
                        isOpen ? 'text-zinc-950' : 'text-zinc-800 hover:text-zinc-950'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-zinc-950 text-white border-zinc-950' : 'bg-white text-zinc-500 border-zinc-200'
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
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-zinc-100">
                          <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed pt-3">
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
