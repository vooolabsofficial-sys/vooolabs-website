import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, MapPin, Check, PhoneCall, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from '../shared/BrandIcons';
import {
  COMPANY,
  LOCATION,
  SOCIALS,
  FOUNDER,
  RESPONSE_COPY,
  whatsappLink,
} from '../../content/company';
import {
  submitEnquiry,
  resultCopy,
  type EnquiryKind,
  type SubmitResult,
} from '../../lib/contact';

const TABS: EnquiryKind[] = ['General', 'Partnership', 'Beta', 'Press', 'Other'];

export default function Slide2_Form() {
  const [activeTab, setActiveTab] = useState<EnquiryKind>('General');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [isSending, setIsSending] = useState(false);

  /**
   * `/contact#waitlist` preselects the Beta tab.
   *
   * This listens for `hashchange` as well as running on mount: a link to
   * `#waitlist` from elsewhere on the contact page changes the hash without
   * remounting anything, so a mount-only effect ignored it. The old code
   * claimed in a comment to handle both and only ever handled mount.
   */
  useEffect(() => {
    const applyHash = () => {
      if (window.location.hash !== '#waitlist') return;
      setActiveTab('Beta');
      document
        .getElementById('contact-form-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const handleLeftCardClick = (tabName: EnquiryKind) => {
    setActiveTab(tabName);
    document.getElementById('name-input')?.focus();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    const outcome = await submitEnquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      kind: activeTab,
      source: 'Contact form',
    });
    setIsSending(false);
    setResult(outcome);

    if (outcome.ok) setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact-form-section" 
      className="snap-section bg-[#F8F9FC] flex items-center px-6 sm:px-16 py-20 relative select-none"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: INFO CARDS */}
        <div className="flex flex-col gap-4 w-full order-2 lg:order-1">
          
          {/* Card 1: General */}
          <FadeIn delay={0} y={15}>
            <div className="rounded-2xl border border-black/5 bg-white p-6 flex items-start gap-4 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:border-blue-500/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/5 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E] mb-1">General Inquiries</h4>
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 mb-3 truncate">{COMPANY.email}</p>
                <button 
                  onClick={() => handleLeftCardClick('General')}
                  className="font-kanit font-semibold text-xs text-blue-600 hover:text-blue-700 transition-colors py-0.5 border-b border-blue-500/20"
                >
                  Send Email →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: WhatsApp Quick Contact */}
          <FadeIn delay={0.08} y={15}>
            <div className="rounded-2xl border border-black/5 bg-white p-6 flex items-start gap-4 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:border-emerald-500/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/5 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <PhoneCall size={18} />
              </div>
              <div className="flex-1">
                <h4 className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E] mb-1">WhatsApp Quick Chat</h4>
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 mb-3">{RESPONSE_COPY}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-kanit font-semibold text-xs text-emerald-600 hover:text-emerald-700 transition-colors py-0.5 border-b border-emerald-500/20 inline-block"
                >
                  Open WhatsApp Chat →
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Beta Testing */}
          <FadeIn delay={0.16} y={15}>
            <div className="rounded-2xl border border-black/5 bg-white p-6 flex items-start gap-4 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:border-orange-500/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-500/5 flex items-center justify-center text-orange-500 flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="flex-1">
                <h4 className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E] mb-1">Beta Testing</h4>
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 mb-3">Get early access to our premium utilities.</p>
                <button 
                  onClick={() => handleLeftCardClick('Beta')}
                  className="font-kanit font-semibold text-xs text-orange-600 hover:text-orange-700 transition-colors py-0.5 border-b border-orange-500/20"
                >
                  Join Beta Waitlist
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Location */}
          <FadeIn delay={0.24} y={15}>
            <div className="rounded-2xl border border-black/5 bg-white p-6 flex items-start gap-4 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:border-purple-500/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/5 flex items-center justify-center text-purple-500 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="flex-1">
                <h4 className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E] mb-1">Hub Locations</h4>
                <p className="font-kanit text-slate-600 text-xs sm:text-sm">{LOCATION.hubs.join(' · ')}</p>
                <p className="font-kanit font-light text-xs text-slate-500 leading-normal">
                  {LOCATION.region}, {LOCATION.country}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* SOCIAL ROW - 44px (w-11 h-11) */}
          <FadeIn delay={0.32} y={15} className="mt-2">
            <div className="flex items-center gap-3">
              {[
                { icon: <GithubIcon size={18} />, link: SOCIALS.github, label: 'GitHub', external: true },
                { icon: <LinkedinIcon size={18} />, link: SOCIALS.linkedin, label: 'LinkedIn', external: true },
                { icon: <TwitterIcon size={18} />, link: SOCIALS.twitter, label: 'Twitter', external: true },
                { icon: <InstagramIcon size={18} />, link: FOUNDER.instagram, label: "Founder's Instagram", external: true },
                { icon: <PhoneCall size={18} />, link: whatsappLink, label: 'WhatsApp', external: true },
                { icon: <Mail size={18} />, link: `mailto:${COMPANY.email}`, label: 'Email', external: false },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.link}
                  {...(soc.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={soc.label}
                  className="w-11 h-11 rounded-2xl border border-black/5 bg-white flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500/20 hover:shadow-[0_8px_20px_rgba(66,133,244,0.15)] transition-all duration-200"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="order-1 lg:order-2 w-full flex justify-end">
          <FadeIn delay={0.2} x={40} className="w-full">
            <form 
              onSubmit={handleFormSubmit}
              className="rounded-[32px] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-10 relative overflow-hidden flex flex-col w-full text-left"
            >
              
              {/* ACCENT LINE */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500" />

              <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E] mb-1">
                Send a Message
              </h3>
              <p className="font-kanit font-light text-xs sm:text-sm text-slate-400 mb-8">
                {RESPONSE_COPY}
              </p>

              {/* FORM FIELDS */}
              <div className="flex flex-col gap-5">
                
                {/* NAME */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="font-kanit font-medium text-xs sm:text-sm text-slate-700">Name</label>
                  <input
                    type="text"
                    id="name-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-black/5 px-4 py-3 sm:py-3.5 font-kanit font-light text-sm sm:text-base text-[#0A0F1E] bg-white outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 min-h-[44px]"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="font-kanit font-medium text-xs sm:text-sm text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    required
                    className="w-full rounded-xl border border-black/5 px-4 py-3 sm:py-3.5 font-kanit font-light text-sm sm:text-base text-[#0A0F1E] bg-white outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 min-h-[44px]"
                  />
                </div>

                {/* INQUIRY TABS */}
                <div className="flex flex-col gap-2">
                  <span className="font-kanit font-medium text-xs sm:text-sm text-slate-700">Inquiry Type</span>
                  <div className="flex flex-wrap gap-1.5 bg-slate-50 border border-black/[0.03] p-1.5 rounded-2xl w-full">
                    {TABS.map((tab) => (
                      <button
                        type="button"
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 min-w-[65px] text-center py-2 px-1.5 rounded-xl font-kanit font-medium text-xs sm:text-xs select-none transition-all duration-300 min-h-[38px] ${
                          activeTab === tab
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-black/5'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message-input" className="font-kanit font-medium text-xs sm:text-sm text-slate-700">Message</label>
                  <textarea
                    id="message-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What would you like to build or inquire about?"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-black/5 px-4 py-3 sm:py-3.5 font-kanit font-light text-sm sm:text-base text-[#0A0F1E] bg-white outline-none resize-none min-h-[120px] transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 py-4 font-kanit font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.99] shadow-[0_4px_14px_rgba(66,133,244,0.3)] mt-2 min-h-[44px] disabled:opacity-70"
                >
                  {isSending ? 'Sending…' : 'Send Message →'}
                </button>

              </div>

            </form>
          </FadeIn>
        </div>

      </div>

      {/*
        Result toast. Reports what actually happened rather than always saying
        "Message Sent!" -- when the transport is the visitor's own mail client,
        nothing has been sent until they press send in it.
      */}
      <AnimatePresence>
        {result && (
          <motion.div
            key="enquiry-result"
            role="status"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`fixed bottom-24 right-6 z-[8000] flex items-center gap-3 rounded-2xl border bg-white p-4 pr-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] cursor-default max-w-sm ${
              result.ok ? 'border-emerald-500/20' : 'border-amber-500/30'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                result.ok
                  ? 'bg-emerald-500/10 text-emerald-600'
                  : 'bg-amber-500/10 text-amber-600'
              }`}
            >
              {result.ok ? <Check size={16} /> : <AlertCircle size={16} />}
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-clash font-semibold text-xs sm:text-sm text-slate-800">
                {result.ok ? 'Almost there' : 'That did not go through'}
              </span>
              <span className="font-kanit font-light text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                {resultCopy(result)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
