import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION, FOUNDER } from '../../content/company';
import { getProduct, STATUS_META, formatPrice } from '../../content/products';

export default function Slide3_FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /**
   * Answers here point at the roadmap and the product list rather than naming
   * dates of their own. The version this replaces promised a Play Store beta
   * "in late 2025" and an Android launch "in 2025", and was still saying so
   * most of a year after both dates passed.
   */
  const files = getProduct('vooo-files')!;
  const smaran = getProduct('smaran-ai')!;
  const callmind = getProduct('callmind')!;
  const callmindPrice = formatPrice(callmind);

  const faqs = [
    {
      q: `When will ${files.name} launch?`,
      a: `${files.name} is in ${STATUS_META[files.status].label.toLowerCase()}. The vault and the media player are the parts still being finished. The roadmap page has the current stage — we would rather point you there than name a date here and let it go stale.`,
    },
    {
      q: `Is ${smaran.name} available?`,
      a: `Not yet. ${smaran.name} is ${STATUS_META[smaran.status].label.toLowerCase()} — the architecture is being worked out and nothing is installable. Join the waitlist on the contact form and you will hear when that changes.`,
    },
    {
      q: `How can I try ${callmind.name}?`,
      a: `${callmind.name} is in ${STATUS_META[callmind.status].label.toLowerCase()}. If you run a small business, sell, or freelance in India, request access through the contact form with "Beta" selected and we will get back to you.`,
    },
    {
      q: 'Are the apps free?',
      a: `${files.name} is free. ${callmind.name} has a free trial, and paid plans start at ${callmindPrice ?? 'a price listed on the product page'}, plus GST. ${smaran.name} is not priced yet.`,
    },
    {
      q: `Where is ${COMPANY.brandName} based?`,
      a: `${COMPANY.brandName} is run from ${LOCATION.region}, ${LOCATION.country}. The software is built here and used anywhere.`,
    },
    {
      q: 'Will there be iOS apps?',
      a: 'Android comes first, because that is where the people these apps are built for actually are. iOS and web are on the roadmap, not scheduled.',
    },
    {
      q: 'Who builds these apps?',
      a: `${COMPANY.brandName} is a solo studio. ${FOUNDER.name} writes the code, designs the screens, and answers this inbox.`,
    },
    {
      q: 'How can I partner with you?',
      a: `Select "Partnership" on the contact form, or write to ${COMPANY.email} directly.`,
    },
    {
      q: 'Is my data safe?',
      a: 'This site runs no trackers and sets no cookies. Our apps keep what they can on your device, encrypt vaults locally, and never sell data. The Privacy Policy sets out exactly what each app touches and why.',
    },
    {
      q: 'How do I stay updated?',
      a: 'Join the waitlist on the home page or the contact page. Progress also goes up on GitHub and LinkedIn.',
    },
  ];

  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* BACK ANCHOR */}
        <FadeIn delay={0} y={15}>
          <a 
            href="#" 
            className="inline-flex items-center gap-1 font-kanit font-medium text-xs text-slate-400 uppercase tracking-wider mb-5 hover:text-slate-600"
          >
            <ArrowUp size={10} /> Back to Top
          </a>
        </FadeIn>

        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0.05} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              Common <span className="shimmer-text">Questions</span>
            </h2>
          </FadeIn>
        </div>

        {/* Accordions */}
        <div className="w-full flex flex-col mt-2 z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05} y={20} className="w-full mb-3">
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white select-none ${
                    isOpen 
                      ? 'border-blue-500/30 shadow-[0_4px_20px_rgba(66,133,244,0.06)]' 
                      : 'border-black/5'
                  }`}
                >
                  
                  {/* ACCORDION HEADER BUTTON */}
                  <button 
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex justify-between items-center p-5 sm:p-6 cursor-pointer hover:bg-slate-50 transition-colors text-left min-h-[52px]"
                  >
                    <span className="font-kanit font-medium text-sm sm:text-base text-slate-800 text-left pr-4 leading-tight">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-slate-400 flex-shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* ACCORDION ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 font-kanit font-light text-xs sm:text-sm text-slate-500 leading-relaxed text-left">
                          {faq.a}
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
