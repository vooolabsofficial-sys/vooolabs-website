import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, MapPin, Check, PhoneCall, AlertCircle, Loader2, Sparkles, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  WhatsappIcon,
} from '../shared/BrandIcons';
import {
  COMPANY,
  LOCATION,
  SOCIALS,
  FOUNDER,
  whatsappLink,
} from '../../content/company';
import {
  submitEnquiry,
  resultCopy,
  type EnquiryKind,
  type SubmitResult,
} from '../../lib/contact';
import { useLocation } from 'react-router-dom';

const PROJECT_SCOPES: { kind: EnquiryKind; label: string; badge: string }[] = [
  { kind: 'Web App', label: 'Web Application', badge: 'React / Next.js' },
  { kind: 'Website', label: 'High-Speed Web Platform', badge: '<0.4s Speed' },
  { kind: 'Software CRM', label: 'Custom Business Software', badge: 'Portals & ERP' },
  { kind: 'SEO & AI', label: 'Technical SEO & AEO', badge: 'AI Discovery' },
  { kind: 'Architecture Consulting', label: 'Architecture Review', badge: 'Code Audit' },
  { kind: 'Partnership', label: 'Strategic Retainer', badge: 'Dedicated' },
  { kind: 'General', label: 'General Inquiry', badge: 'Direct' },
];

const BUDGET_OPTIONS = [
  '₹25k – ₹50k',
  '₹50k – ₹1.5L',
  '₹1.5L – ₹5L',
  '₹5L+ Enterprise',
  'Undetermined',
];

const getInitialScope = (search: string, hash: string): EnquiryKind => {
  const params = new URLSearchParams(search);
  const serviceParam = params.get('service');
  if (serviceParam === 'web-apps') return 'Web App';
  if (serviceParam === 'websites') return 'Website';
  if (serviceParam === 'software') return 'Software CRM';
  if (serviceParam === 'seo-ai') return 'SEO & AI';
  if (hash === '#consulting') return 'Architecture Consulting';
  return 'Web App';
};

export default function Slide2_Form() {
  const location = useLocation();
  const [selectedScope, setSelectedScope] = useState<EnquiryKind>(() => 
    getInitialScope(location.search, location.hash)
  );
  const [selectedBudget, setSelectedBudget] = useState<string>('₹50k – ₹1.5L');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (location.search || location.hash) {
      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search, location.hash]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);
  const isNameValid = formData.name.trim().length >= 2;
  const isMessageValid = formData.message.trim().length >= 8;
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const handleScopeSelect = (scope: EnquiryKind) => {
    setSelectedScope(scope);
    document.getElementById('name-input')?.focus();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !isFormValid) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setIsSending(true);
    const outcome = await submitEnquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      kind: selectedScope,
      budget: selectedBudget,
      honeypot: honeypot,
      source: 'Start Your Project Form',
    });
    setIsSending(false);
    setResult(outcome);

    if (outcome.ok) {
      setIsSubmittedSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    }
  };

  return (
    <section 
      id="contact-form-section" 
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 relative select-none antialiased border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* LEFT COLUMN: TECHNICAL DIRECTORY & CHANNELS */}
        <div className="lg:col-span-5 flex flex-col gap-5 w-full order-2 lg:order-1">
          
          {/* CARD 1: WHATSAPP DIRECT PIPELINE */}
          <FadeIn delay={0} y={15}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <PhoneCall size={19} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h4 className="font-clash font-semibold text-lg text-slate-900">
                      WhatsApp Direct Channel
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-slate-600 mb-4 leading-relaxed">
                    Direct line for quick scoping, budget inquiries, and immediate project kickoffs.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-sans font-medium text-xs hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsappIcon size={14} />
                    <span>Open 1-Tap WhatsApp Chat</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CARD 2: FORMAL INQUIRIES */}
          <FadeIn delay={0.06} y={15}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail size={19} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h4 className="font-clash font-semibold text-lg text-slate-900 mb-1">
                    Formal Inquiries & RFPs
                  </h4>
                  <p className="font-sans text-xs text-slate-600 mb-3 truncate font-mono">
                    {COMPANY.email}
                  </p>
                  <button 
                    type="button"
                    onClick={() => handleScopeSelect('General')}
                    className="font-sans font-medium text-xs text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Use Onboarding Form Beside</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CARD 3: STUDIO LEADERSHIP & GUARANTEE */}
          <FadeIn delay={0.12} y={15}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm text-left">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-clash font-bold text-sm flex-shrink-0 shadow-xs">
                  {FOUNDER.initials}
                </div>
                <div>
                  <h4 className="font-clash font-semibold text-base text-slate-900 leading-none mb-1">
                    {FOUNDER.name}
                  </h4>
                  <p className="font-mono text-xs text-blue-600 font-semibold leading-none">
                    {FOUNDER.role}
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal mb-5">
                Every project begins with direct architectural review. We provide transparent fixed milestones, zero hidden costs, and complete code handover.
              </p>

              {/* SOCIAL HANDLES */}
              <div className="flex items-center gap-2">
                {[
                  { icon: <GithubIcon size={14} />, href: FOUNDER.github, label: 'GitHub' },
                  { icon: <LinkedinIcon size={14} />, href: FOUNDER.linkedin, label: 'LinkedIn' },
                  { icon: <TwitterIcon size={14} />, href: SOCIALS.twitter, label: 'Twitter' },
                  { icon: <InstagramIcon size={14} />, href: FOUNDER.instagram, label: 'Instagram' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white hover:border-slate-300 shadow-2xs transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CARD 4: LOCATION ATTRIBUTION */}
          <FadeIn delay={0.18} y={15}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Studio Headquarters
                </span>
                <span className="font-sans text-xs font-semibold text-slate-800">
                  {LOCATION.hubs.join(' · ')}, {LOCATION.region}, {LOCATION.country}
                </span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* RIGHT COLUMN: HIGH-CONVERSION PROJECT ONBOARDING FORM */}
        <div className="lg:col-span-7 w-full order-1 lg:order-2">
          <FadeIn delay={0.08} y={20}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-10 shadow-sm text-left relative overflow-hidden">
              
              {/* ACCENT HEADER */}
              <div className="mb-8 pb-6 border-b border-slate-100">
                <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                  PROJECT SCOPING PORTAL
                </span>
                <h3 className="font-clash font-semibold text-2xl sm:text-3xl text-slate-900 mb-2">
                  Start Your Project
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
                  Tell us what you want to engineer. We review technical specifications and provide milestone estimates within 24 hours.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {isSubmittedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-clash font-semibold text-2xl text-slate-900 mb-2">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out to VOOO LABS. Our lead software architect will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmittedSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-medium text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  
                  {/* HONEYPOT ANTI-SPAM TRAP */}
                  <input
                    type="text"
                    name="website_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden absolute -left-[9999px] -top-[9999px]"
                    aria-hidden="true"
                  />

                  {/* STEP 1: INTERACTIVE PROJECT SCOPE SELECTOR */}
                  <div className="flex flex-col gap-2.5">
                    <label className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      1. Select Project Domain & Scope
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PROJECT_SCOPES.map((scope) => {
                        const isSelected = selectedScope === scope.kind;
                        return (
                          <button
                            type="button"
                            key={scope.kind}
                            onClick={() => setSelectedScope(scope.kind)}
                            className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[72px] ${
                              isSelected
                                ? 'border-blue-600 bg-blue-50 shadow-xs ring-1 ring-blue-500/20'
                                : 'border-slate-200 bg-[#FAFAFD] hover:bg-white hover:border-slate-300'
                            }`}
                          >
                            <span className={`font-sans font-semibold text-xs leading-tight mb-1 ${
                              isSelected ? 'text-blue-700' : 'text-slate-800'
                            }`}>
                              {scope.label}
                            </span>
                            <span className="font-mono text-[10px] text-slate-500">
                              {scope.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: BUDGET BRACKET SELECTOR */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      2. Estimated Investment Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_OPTIONS.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => setSelectedBudget(budget)}
                            className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                              isSelected
                                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                                : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200'
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 3: CONTACT INFORMATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* NAME */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="name-input" className="font-sans font-medium text-xs text-slate-700">
                          Your Name *
                        </label>
                        {touched.name && !isNameValid && (
                          <span className="font-mono text-[10px] text-rose-500">Name is required</span>
                        )}
                      </div>
                      <input
                        type="text"
                        id="name-input"
                        value={formData.name}
                        onBlur={() => setTouched({ ...touched, name: true })}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className={`w-full rounded-2xl border px-4 py-3 font-sans text-xs sm:text-sm text-slate-900 bg-[#FAFAFD] placeholder:text-slate-400 outline-none transition-all duration-200 ${
                          touched.name && !isNameValid
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="email-input" className="font-sans font-medium text-xs text-slate-700">
                          Work / Business Email *
                        </label>
                        {touched.email && !isEmailValid && (
                          <span className="font-mono text-[10px] text-rose-500">Valid email required</span>
                        )}
                      </div>
                      <input
                        type="email"
                        id="email-input"
                        value={formData.email}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        required
                        className={`w-full rounded-2xl border px-4 py-3 font-sans text-xs sm:text-sm text-slate-900 bg-[#FAFAFD] placeholder:text-slate-400 outline-none transition-all duration-200 ${
                          touched.email && !isEmailValid
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                  </div>

                  {/* STEP 4: PROJECT DETAILS & REQUIREMENTS */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message-input" className="font-sans font-medium text-xs text-slate-700">
                        Project Scope & Requirements *
                      </label>
                      {touched.message && !isMessageValid && (
                        <span className="font-mono text-[10px] text-rose-500">Min 8 characters required</span>
                      )}
                    </div>
                    <textarea
                      id="message-input"
                      value={formData.message}
                      onBlur={() => setTouched({ ...touched, message: true })}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are looking to build (e.g. target users, core features, existing systems, preferred launch timeline)..."
                      required
                      rows={4}
                      className={`w-full rounded-2xl border px-4 py-3.5 font-sans text-xs sm:text-sm text-slate-900 bg-[#FAFAFD] placeholder:text-slate-400 outline-none resize-none min-h-[120px] transition-all duration-200 ${
                        touched.message && !isMessageValid
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                  </div>

                  {/* SUBMISSION BUTTON */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="rounded-full bg-slate-900 hover:bg-blue-600 py-3.5 sm:py-4 font-sans font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Transmitting Scope Brief…</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Project Brief →</span>
                      </>
                    )}
                  </button>

                  <p className="font-sans text-[11px] text-slate-500 text-center leading-normal">
                    We execute strict NDAs upon request. 100% intellectual property rights belong to your organization.
                  </p>

                </form>
              )}

            </div>
          </FadeIn>
        </div>

      </div>

      {/* RESULT TOAST NOTIFICATION */}
      <AnimatePresence>
        {result && (
          <motion.div
            key="enquiry-result"
            role="status"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`fixed bottom-24 right-6 z-[8000] flex items-center gap-3 rounded-2xl border bg-white p-4 pr-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] cursor-default max-w-sm ${
              result.ok ? 'border-emerald-200' : 'border-amber-200'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                result.ok
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  : 'bg-amber-50 text-amber-600 border border-amber-200'
              }`}
            >
              {result.ok ? <Check size={16} /> : <AlertCircle size={16} />}
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-clash font-semibold text-xs sm:text-sm text-slate-900">
                {result.ok ? 'Inquiry Transmitted' : 'Action Required'}
              </span>
              <span className="font-sans text-[11px] text-slate-600 mt-0.5 leading-normal">
                {resultCopy(result)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
