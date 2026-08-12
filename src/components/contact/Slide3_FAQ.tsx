import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';

export default function Slide3_FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'When will VOOO Files launch?',
      a: 'VOOO Files is currently 70% complete. We are actively refining the Secure Vault and Media Player interfaces. We expect to launch the open beta on the Google Play Store in late 2025.',
    },
    {
      q: 'Is SMARAN AI available?',
      a: 'SMARAN AI is currently in the architectural planning stage. We are prototyping the alarm override engines and family sync algorithms. You can join the beta waitlist via the contact form to get early access.',
    },
    {
      q: 'How can I try CallMind?',
      a: 'CallMind CRM is in private beta testing. If you are a sales representative, small business owner, or freelancer in India, you can request beta access using the contact form, selecting "Beta" as your inquiry type.',
    },
    {
      q: 'Are the apps free?',
      a: 'VOOO Files will be 100% free to use. SMARAN AI and CallMind will operate on a freemium model. CallMind plans will start at an affordable ₹499/month built specifically for Indian professionals.',
    },
    {
      q: 'Where is VOOO LABS based?',
      a: 'VOOO LABS is founded and operated in Maharashtra, India. Although based in a rural setting, our software is designed, engineered, and shipped to serve users globally.',
    },
    {
      q: 'Will there be iOS apps?',
      a: 'Yes. Our immediate priority is Android launch in 2025. However, cross-platform extensions for iOS and Web are officially scheduled on the roadmap for early-to-mid 2026.',
    },
    {
      q: 'Who builds these apps?',
      a: 'VOOO LABS is currently a solo-builder studio founded by Vrushabh Santosh Shinde. Every single line of code, UI screen, and feature release is managed directly by him.',
    },
    {
      q: 'How can I partner with you?',
      a: 'We are open to strategic collaborations, API integrations, and developer relations. Please select the "Partnership" tab on our contact form or write directly to vooolabsofficial@gmail.com.',
    },
    {
      q: 'Is my data safe?',
      a: 'Absolutely. We commit to a 100% privacy-first model: zero trackers, local biometric security vaults, locally encrypted file directories, and automated purges for sensitive temporary inputs.',
    },
    {
      q: 'How do I stay updated?',
      a: 'You can join the email beta waitlist on our Home page or Contact page. You can also follow our official developer updates on GitHub and LinkedIn.',
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
