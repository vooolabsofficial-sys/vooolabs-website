import React, { useState, useEffect } from 'react';
import { Mail, PhoneCall, AlertCircle, Loader2, Send, ArrowRight, CheckCircle2, Check } from 'lucide-react';
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

interface ScopeOption {
  kind: EnquiryKind;
  title: string;
  subtitle: string;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    kind: 'Business Website',
    title: 'Business Website',
    subtitle: 'All-inclusive design, domain, hosting, SSL & WhatsApp',
  },
  {
    kind: 'Custom Web App',
    title: 'Custom Web App',
    subtitle: 'Client portals, member dashboards & web applications',
  },
  {
    kind: 'Billing & Staff Software',
    title: 'Billing & Staff Software',
    subtitle: 'Custom GST invoicing, team management & operations',
  },
  {
    kind: 'AI Search & AI Ads',
    title: 'AI Search & AI Ads',
    subtitle: 'Google presence, ChatGPT/Perplexity discovery & ads',
  },
];

const BUDGET_OPTIONS = [
  'Under ₹50k',
  '₹50k – ₹1.5L',
  '₹1.5L – ₹5L',
  '₹5L+ Enterprise',
  'Undetermined',
];

const getInitialScopes = (search: string): EnquiryKind[] => {
  const params = new URLSearchParams(search);
  const serviceParam = params.get('service');
  if (serviceParam === 'websites') return ['Business Website'];
  if (serviceParam === 'web-apps') return ['Custom Web App'];
  if (serviceParam === 'software') return ['Billing & Staff Software'];
  if (serviceParam === 'seo-ai') return ['AI Search & AI Ads'];
  return ['Business Website'];
};

export default function Slide2_Form() {
  const location = useLocation();
  const [selectedScopes, setSelectedScopes] = useState<EnquiryKind[]>(() =>
    getInitialScopes(location.search)
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

  const toggleScope = (scope: EnquiryKind) => {
    setSelectedScopes((prev) => {
      if (prev.includes(scope)) {
        // Keep at least one selected
        return prev.length > 1 ? prev.filter((s) => s !== scope) : prev;
      } else {
        return [...prev, scope];
      }
    });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);
  const isNameValid = formData.name.trim().length >= 2;
  const isMessageValid = formData.message.trim().length >= 8;
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !isFormValid) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setIsSending(true);
    const scopeKind: EnquiryKind =
      selectedScopes.length === 1 ? selectedScopes[0] : 'Multiple Services';

    const formattedMessage = [
      `Selected Services: ${selectedScopes.join(', ')}`,
      `Investment Range: ${selectedBudget}`,
      `\nProject Requirements:`,
      formData.message.trim(),
    ].join('\n');

    const outcome = await submitEnquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formattedMessage,
      kind: scopeKind,
      budget: selectedBudget,
      honeypot: honeypot,
      source: 'Contact Page Inquiry',
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
      className="bg-zinc-50 py-20 sm:py-28 px-4 sm:px-6 relative select-none antialiased border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* LEFT COLUMN: DIRECT CHANNELS & STUDIO DETAILS */}
        <div className="lg:col-span-5 flex flex-col gap-5 w-full order-2 lg:order-1">
          
          {/* CARD 1: WHATSAPP DIRECT PIPELINE */}
          <FadeIn delay={0} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs hover:border-zinc-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <PhoneCall size={18} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h4 className="font-sans font-bold text-base text-zinc-950">
                      Direct WhatsApp Channel
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-zinc-600 mb-4 leading-relaxed">
                    Direct line for quick scoping, pricing questions, and same-day project discussions.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-sans font-semibold text-xs hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsappIcon size={14} />
                    <span>Open 1-Tap WhatsApp Chat</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CARD 2: DIRECT EMAIL */}
          <FadeIn delay={0.06} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs hover:border-zinc-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h4 className="font-sans font-bold text-base text-zinc-950 mb-1">
                    Direct Studio Email
                  </h4>
                  <p className="font-mono text-xs text-zinc-700 mb-3 truncate font-semibold">
                    {COMPANY.email}
                  </p>
                  <p className="font-sans text-xs text-zinc-500 leading-normal">
                    Send detailed RFPs, specifications, or existing website links directly to our studio inbox.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CARD 3: FOUNDER SPEC & GUARANTEE */}
          <FadeIn delay={0.12} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs text-left">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-zinc-200">
                <div className="w-11 h-11 rounded-xl bg-zinc-950 flex items-center justify-center text-white font-sans font-bold text-sm flex-shrink-0">
                  {FOUNDER.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-zinc-950 leading-tight">
                    {FOUNDER.name}
                  </h4>
                  <p className="font-mono text-xs text-zinc-500 mt-0.5">
                    {FOUNDER.role}
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal mb-5">
                Every project begins with a direct requirements review. We provide transparent fixed milestones, all-inclusive pricing, and 100% client code and hosting ownership.
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
                    className="w-8 h-8 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-white hover:border-zinc-300 transition-colors"
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
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xs text-left font-mono text-xs flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                Studio Hubs & Jurisdiction
              </span>
              <span className="font-sans font-semibold text-zinc-900 text-xs">
                {LOCATION.hubs.join(' · ')}, {LOCATION.region}, {LOCATION.country}
              </span>
            </div>
          </FadeIn>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE SCOPE SELECTOR & ONBOARDING FORM */}
        <div className="lg:col-span-7 w-full order-1 lg:order-2">
          <FadeIn delay={0.08} y={20}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10 shadow-2xs text-left relative">
              
              {/* ACCENT HEADER */}
              <div className="mb-8 pb-6 border-b border-zinc-200">
                <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                  PROJECT SCOPE & INQUIRY
                </span>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-zinc-950 mb-2 tracking-tight">
                  Start Your Project
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  Tell us what you want to build. Every inquiry goes straight to the founder. We review your requirements first and share an honest plan, transparent cost estimate, and realistic delivery schedule.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {isSubmittedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center mb-4 shadow-2xs">
                    <CheckCircle2 size={24} className="text-emerald-400" />
                  </div>
                  <h4 className="font-sans font-bold text-2xl text-zinc-950 mb-2">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out to VOOO LABS. Every inquiry goes straight to the founder. We review your requirements first and share an honest plan, transparent cost estimate, and realistic delivery schedule.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmittedSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-sans font-medium text-xs transition-colors"
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

                  {/* STEP 1: INTERACTIVE MULTI-SELECT SCOPE PILLS */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                        1. Select What You Need (Click to Toggle)
                      </label>
                      <span className="font-mono text-[10px] text-zinc-400">
                        {selectedScopes.length} selected
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SCOPE_OPTIONS.map((opt) => {
                        const isSelected = selectedScopes.includes(opt.kind);
                        return (
                          <button
                            type="button"
                            key={opt.kind}
                            onClick={() => toggleScope(opt.kind)}
                            className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                              isSelected
                                ? 'border-zinc-950 bg-zinc-900 text-white shadow-2xs'
                                : 'border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-white hover:border-zinc-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-sans font-bold text-xs">
                                {opt.title}
                              </span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-white text-zinc-950' : 'border border-zinc-300 bg-white'
                              }`}>
                                {isSelected && <Check size={11} strokeWidth={3} />}
                              </div>
                            </div>
                            <span className={`font-sans text-[11px] leading-tight ${
                              isSelected ? 'text-zinc-300' : 'text-zinc-500'
                            }`}>
                              {opt.subtitle}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: BUDGET BRACKET SELECTOR */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-semibold text-zinc-700 uppercase tracking-wider">
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
                            className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-150 ${
                              isSelected
                                ? 'bg-zinc-950 text-white font-semibold'
                                : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200 border border-zinc-200'
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
                        <label htmlFor="name-input" className="font-sans font-medium text-xs text-zinc-700">
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
                        placeholder="e.g. Rahul Patil"
                        required
                        className={`w-full rounded-xl border px-3.5 py-2.5 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none transition-all duration-150 ${
                          touched.name && !isNameValid
                            ? 'border-rose-300 focus:border-rose-500'
                            : 'border-zinc-200 focus:bg-white focus:border-zinc-950'
                        }`}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="email-input" className="font-sans font-medium text-xs text-zinc-700">
                          Email Address *
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
                        className={`w-full rounded-xl border px-3.5 py-2.5 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none transition-all duration-150 ${
                          touched.email && !isEmailValid
                            ? 'border-rose-300 focus:border-rose-500'
                            : 'border-zinc-200 focus:bg-white focus:border-zinc-950'
                        }`}
                      />
                    </div>
                  </div>

                  {/* STEP 4: PROJECT DETAILS & REQUIREMENTS */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message-input" className="font-sans font-medium text-xs text-zinc-700">
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
                      placeholder="Describe what your business does and what you need (e.g. new website, GST billing software, staff management, Google search visibility)..."
                      required
                      rows={4}
                      className={`w-full rounded-xl border px-3.5 py-3 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none resize-none min-h-[110px] transition-all duration-150 ${
                        touched.message && !isMessageValid
                          ? 'border-rose-300 focus:border-rose-500'
                          : 'border-zinc-200 focus:bg-white focus:border-zinc-950'
                      }`}
                    />
                  </div>

                  {/* SUBMISSION BUTTON */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="rounded-xl bg-zinc-950 hover:bg-zinc-800 py-3 sm:py-3.5 font-sans font-semibold text-xs sm:text-sm text-white transition-all duration-150 shadow-2xs disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Inquiry to Founder…</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Project Inquiry to Founder →</span>
                      </>
                    )}
                  </button>

                  <p className="font-sans text-[11px] text-zinc-500 text-center leading-normal">
                    Strict privacy guaranteed. 100% intellectual property rights belong to your business upon delivery.
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
              <span className="font-sans font-bold text-xs sm:text-sm text-zinc-950">
                {result.ok ? 'Inquiry Transmitted' : 'Action Required'}
              </span>
              <span className="font-sans text-[11px] text-zinc-600 mt-0.5 leading-normal">
                {resultCopy(result)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
