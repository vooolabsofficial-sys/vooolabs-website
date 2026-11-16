import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, Check, X, ChevronDown, Sparkles, Building, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide7_ROIKickoff() {
  const [businessName, setBusinessName] = useState('');
  const [websiteCity, setWebsiteCity] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `Hello VOOO LABS, I would like a Free AI Search Visibility Audit for my business:%0A• Business Name: ${encodeURIComponent(businessName || 'My Business')}%0A• Website / City: ${encodeURIComponent(websiteCity || 'Maharashtra')}%0APlease check our ChatGPT, Perplexity, and Google presence.`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${query}`, '_blank');
  };

  const faqs = [
    {
      q: 'How long does it take for ChatGPT & Google AI to start recommending my business?',
      a: 'Search crawlers typically index structured business data within 3 to 6 weeks, after which conversational citations and recommendations become visible.'
    },
    {
      q: 'Do I have to pay monthly fees to OpenAI, Perplexity, or Google for AI citations?',
      a: 'No. AI search citations are purely organic answers. Once your business profile structure and fast website are in place, you pay ₹0 monthly recurring citation fees.'
    },
    {
      q: 'Can you optimize my existing website or do I need a new build?',
      a: 'We can structure your existing website for AI search engines, or build you an all-inclusive high-speed website if your current platform is too slow or outdated.'
    },
    {
      q: 'How does AI Platform Ads setup work?',
      a: 'We configure targeted campaigns on emerging conversational and AI search networks, create dedicated high-converting landing pages, and route all leads directly to your sales WhatsApp.'
    }
  ];

  return (
    <section 
      id="audit-kickoff"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80 scroll-mt-28"
      aria-label="Financial Comparison and Free AI Audit Kickoff"
    >
      {/* AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-medium text-purple-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>06 / PERMANENT AI EQUITY • OWNED DISCOVERY</span>
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT SIDE: FINANCIAL REALITY */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={0.12} y={20}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                Stop Paying Monthly Rent On Ads. <span className="shimmer-text">Build Owned AI Search Equity.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="text-base leading-relaxed text-slate-600">
                When you rent pay-per-click ads, the moment your budget runs out, all traffic disappears overnight. AI search optimization builds permanent digital authority: ChatGPT, Google Gemini, and Google Maps recommend your business 24/7 with zero ongoing click fees.
              </p>
            </FadeIn>

            {/* FINANCIAL COMPARISON TABLE */}
            <FadeIn delay={0.25} y={20}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                
                {/* RENTED ADS (NEGATIVE) */}
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs font-mono uppercase">
                    <X className="w-4 h-4 stroke-[2.5]" />
                    <span>Rented Ad Spend</span>
                  </div>
                  <div className="font-sans font-semibold text-xl text-slate-900">₹30,000 – ₹1L+ / mo</div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Zero permanent equity. Inquiries vanish the instant your daily credit card balance runs out.
                  </p>
                </div>

                {/* OWNED AI EQUITY (POSITIVE) */}
                <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-mono uppercase">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Owned AI Search Equity</span>
                  </div>
                  <div className="font-sans font-semibold text-xl text-emerald-800">₹0 / month Ongoing</div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    100% client-owned asset. ChatGPT, Perplexity, and Google cite your brand organically.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.32} y={20}>
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recommends your business at the exact moment of high-intent purchase queries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes clickable direct link to your website with 1-tap WhatsApp chat</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% client code and entity data ownership with zero lock-in</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <span>See what your project will cost</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: INTERACTIVE FREE AI AUDIT SCANNER & FAQS */}
          <div className="lg:col-span-6 space-y-5">
            <FadeIn delay={0.22} y={20}>
              
              {/* INTERACTIVE SCANNER BOX */}
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-5 text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500" />
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-2 border border-purple-200 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free AI Search Visibility Audit</span>
                  </div>

                  <h3 className="font-clash font-semibold text-xl sm:text-2xl text-slate-900 leading-tight">
                    Does ChatGPT Recommend Your Business Today?
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Enter your business details below. We review your business presence across ChatGPT, Perplexity, and Google and share an honest audit report on WhatsApp.
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
                        placeholder="e.g. Acme Industrial Works"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/30"
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
                        placeholder="e.g. acmeindustrial.in or Pune, Maharashtra"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/30"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-3d-base btn-3d-primary w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discover what you're missing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200 font-sans">
                  <span>✓ 100% Free · No Obligation</span>
                  <span>✓ Honest feedback direct to your WhatsApp</span>
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
                    className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-sans font-semibold text-slate-900 hover:text-purple-600 transition-colors cursor-pointer"
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
                          className="px-4 pb-4 text-xs text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-2"
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
