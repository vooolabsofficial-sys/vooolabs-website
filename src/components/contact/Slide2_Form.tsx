import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, HeartHandshake, MapPin, Check, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Slide2_Form() {
  const [activeTab, setActiveTab] = useState('General');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  // Monitor URL hash to switch tab on mount or hash change
  useEffect(() => {
    if (window.location.hash === '#waitlist') {
      setActiveTab('Beta');
      // Scroll to form section
      const formSec = document.getElementById('contact-form-section');
      if (formSec) {
        formSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleLeftCardClick = (tabName: string) => {
    setActiveTab(tabName);
    const formField = document.getElementById('name-input');
    if (formField) {
      formField.focus();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open default mail client with pre-filled message
    const subject = encodeURIComponent(`[${activeTab}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${activeTab}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:vooolabsofficial@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const tabs = ['General', 'Partnership', 'Beta', 'Press', 'Other'];

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
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 mb-3 truncate">vooolabsofficial@gmail.com</p>
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
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 mb-3">Direct line for fast responses: 7620236178</p>
                <a 
                  href="https://wa.me/917620236178"
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
                <p className="font-kanit text-slate-600 text-xs sm:text-sm">Pune · Nashik · Satara</p>
                <p className="font-kanit font-light text-xs text-slate-500 leading-normal">
                  Maharashtra, India · Serving worldwide
                </p>
              </div>
            </div>
          </FadeIn>

          {/* SOCIAL ROW - 44px (w-11 h-11) */}
          <FadeIn delay={0.32} y={15} className="mt-2">
            <div className="flex items-center gap-3">
              {[
                { icon: <GithubIcon size={18} />, link: 'https://github.com/vooolabs', label: 'GitHub' },
                { icon: <LinkedinIcon size={18} />, link: 'https://linkedin.com/company/vooolabs', label: 'LinkedIn' },
                { icon: <TwitterIcon size={18} />, link: 'https://twitter.com/vooolabs', label: 'Twitter' },
                { icon: <InstagramIcon size={18} />, link: 'https://instagram.com/vrushyxx', label: 'Instagram' },
                { icon: <PhoneCall size={18} />, link: 'https://wa.me/917620236178', label: 'WhatsApp' },
                { icon: <Mail size={18} />, link: 'mailto:vooolabsofficial@gmail.com', label: 'Email' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                We reply within 24 hours.
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
                    {tabs.map((tab) => (
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
                  className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 py-4 font-kanit font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.99] shadow-[0_4px_14px_rgba(66,133,244,0.3)] mt-2 min-h-[44px]"
                >
                  Send Message →
                </button>

              </div>

            </form>
          </FadeIn>
        </div>

      </div>

      {/* SUCCESS TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-[8000] flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-white p-4 pr-6 shadow-[0_8px_30px_rgba(16,185,129,0.15)] select-none cursor-default max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Check size={16} />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-clash font-semibold text-xs sm:text-sm text-slate-800">Message Sent!</span>
              <span className="font-kanit font-light text-[10px] sm:text-xs text-slate-400 mt-0.5 leading-normal">
                Thank you. We'll reply within 24 hours.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
