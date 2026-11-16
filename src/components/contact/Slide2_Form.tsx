import React, { useState, useEffect } from 'react';
import { Mail, PhoneCall, Copy, Check, Loader2, Send, ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { WhatsappIcon } from '../shared/BrandIcons';
import { COMPANY, LOCATION, whatsappLink } from '../../content/company';
import { useLocation } from 'react-router-dom';

const SCOPE_OPTIONS = [
  'All-Inclusive Business Website',
  'Custom Web App / Client Portal',
  'Custom Business Software (Billing / CRM)',
  'AI Search Visibility & AI Ads (ChatGPT / Google)',
  'Not Sure — Help Me Choose',
] as const;

type ScopeType = typeof SCOPE_OPTIONS[number];

const getInitialScopes = (search: string): ScopeType[] => {
  const params = new URLSearchParams(search);
  const service = params.get('service');
  if (service === 'websites') return ['All-Inclusive Business Website'];
  if (service === 'web-apps') return ['Custom Web App / Client Portal'];
  if (service === 'software') return ['Custom Business Software (Billing / CRM)'];
  if (service === 'ai-growth' || service === 'seo-ai') return ['AI Search Visibility & AI Ads (ChatGPT / Google)'];
  return ['All-Inclusive Business Website'];
};

export default function Slide2_Form() {
  const location = useLocation();

  const [selectedScopes, setSelectedScopes] = useState<ScopeType[]>(() =>
    getInitialScopes(location.search)
  );

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (location.search || location.hash) {
      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search, location.hash]);

  const toggleScope = (scope: ScopeType) => {
    setSelectedScopes((prev) => {
      if (prev.includes(scope)) {
        return prev.length > 1 ? prev.filter((s) => s !== scope) : prev;
      } else {
        return [...prev, scope];
      }
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  // Validation
  const isNameValid = formData.name.trim().length >= 2;
  const isPhoneValid = formData.phone.trim().length >= 7;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email.trim());
  const isMessageValid = formData.message.trim().length >= 5;
  const isFormValid = isNameValid && isPhoneValid && isEmailValid && isMessageValid;

  // Build clean formatted WhatsApp message
  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Project Inquiry for VOOO LABS*`,
      `• *Name:* ${formData.name || 'Not provided'}`,
      formData.company ? `• *Company:* ${formData.company}` : null,
      `• *Phone:* ${formData.phone || 'Not provided'}`,
      `• *Email:* ${formData.email || 'Not provided'}`,
      formData.location ? `• *City:* ${formData.location}` : null,
      `• *Services Needed:* ${selectedScopes.join(', ')}`,
      formData.message ? `\n*Project Details:*\n${formData.message}` : null,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSendViaWhatsApp = () => {
    const text = buildWhatsAppMessage();
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !isFormValid) {
      setTouched({ name: true, phone: true, email: true, message: true });
      return;
    }

    if (honeypot.trim().length > 0) {
      setIsSuccess(true);
      return;
    }

    setIsSending(true);
    setSubmitError(null);

    const payload = {
      name: formData.name.trim(),
      company: formData.company.trim() || 'Not specified',
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      location: formData.location.trim() || 'Not specified',
      selected_services: selectedScopes.join(', '),
      requirements: formData.message.trim(),
      _subject: `New VOOO LABS Inquiry — ${selectedScopes[0] || 'Project Scoping'}`,
      _template: 'table',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          location: '',
          message: '',
        });
        setTouched({ name: false, phone: false, email: false, message: false });
      } else {
        throw new Error('Network error during form submission');
      }
    } catch {
      setSubmitError(
        'Unable to send via email right now. Please use the direct WhatsApp button below—your entered details are saved.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section 
      id="contact-form-section" 
      className="bg-zinc-50 py-20 lg:py-28 px-6 sm:px-8 relative select-none antialiased border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* LEFT COLUMN: DIRECT STUDIO CHANNELS (5 COLS) */}
        <div className="lg:col-span-5 flex flex-col gap-5 w-full order-2 lg:order-1 text-left">
          
          {/* EMAIL CHANNEL WITH 1-CLICK COPY */}
          <FadeIn delay={0} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-800 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                    Direct Studio Email
                  </span>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-950 truncate mb-3">
                    {COMPANY.email}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-white text-zinc-700 text-xs font-mono font-medium transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* DIRECT WHATSAPP INSTANT CHANNEL */}
          <FadeIn delay={0.06} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <PhoneCall size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h4 className="font-sans font-bold text-base text-zinc-950">
                      Direct WhatsApp Channel
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-zinc-600 mb-4 leading-relaxed">
                    Direct line for fast scoping, pricing questions, and same-day project kickoff discussions.
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I'm reaching out about a project for my business.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-base btn-3d-emerald inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-sans font-semibold text-xs hover:bg-emerald-100"
                  >
                    <WhatsappIcon size={14} />
                    <span>Open Instant WhatsApp Chat</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* OPERATING HUBS */}
          <FadeIn delay={0.12} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                Studio Hubs & Coverage
              </span>
              <h4 className="font-sans font-bold text-sm text-zinc-950 mb-1">
                {LOCATION.hubs.join(' • ')}
              </h4>
              <p className="font-sans text-xs text-zinc-600">
                Independent studio in Maharashtra, serving growing businesses across India with 100% remote delivery and in-person reviews.
              </p>
            </div>
          </FadeIn>

          {/* WHAT HAPPENS NEXT: 3 HONEST STEPS */}
          <FadeIn delay={0.18} y={15}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-semibold">
                WHAT HAPPENS NEXT (3 HONEST STEPS)
              </span>
              <ol className="space-y-3 font-sans text-xs text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-zinc-950 text-xs mt-0.5">01</span>
                  <span><strong>We review your business requirements & current workflow:</strong> We examine what you are looking to build and your operational goals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-zinc-950 text-xs mt-0.5">02</span>
                  <span><strong>We prepare a clear feature scope, cost estimate, and realistic timeline:</strong> Transparent, all-inclusive deliverables with zero hidden extras.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-zinc-950 text-xs mt-0.5">03</span>
                  <span><strong>We walk you through the plan:</strong> Direct technical consultation—zero sales pressure or obligation.</span>
                </li>
              </ol>
            </div>
          </FadeIn>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM (7 COLS) */}
        <div className="lg:col-span-7 w-full order-1 lg:order-2 text-left">
          <FadeIn delay={0.08} y={20}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10 shadow-2xs relative">
              
              {/* ACCENT HEADER */}
              <div className="mb-8 pb-6 border-b border-zinc-200">
                <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
                  PROJECT SPECIFICATION FORM
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-2 tracking-tight leading-snug">
                  Start Your Project
                </h3>
                <p className="font-sans text-base text-zinc-600 font-normal leading-relaxed">
                  Every inquiry goes directly to the founder. Select what you need, share your requirements, and get an honest roadmap and cost estimate.
                </p>
              </div>

              {/* SUCCESS CONFIRMATION STATE */}
              {isSuccess ? (
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
                    Your project details have been transmitted directly to <strong>{COMPANY.email}</strong>. The founder will review your requirements and respond with an honest plan and transparent cost estimate.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-3d-base btn-3d-emerald px-5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-sans font-semibold text-xs inline-flex items-center justify-center gap-2"
                    >
                      <WhatsappIcon size={14} />
                      <span>Message on WhatsApp for Immediate Priority</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-3d-base btn-3d-primary px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-sans font-medium text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  
                  {/* HONEYPOT ANTI-SPAM TRAP */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden absolute -left-[9999px] -top-[9999px]"
                    aria-hidden="true"
                  />

                  {/* 1. MULTI-SELECT SCOPE PILLS */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                        1. Select What You Need (Click to Toggle)
                      </label>
                      <span className="font-mono text-[10px] text-zinc-400">
                        {selectedScopes.length} selected
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {SCOPE_OPTIONS.map((scope) => {
                        const isSelected = selectedScopes.includes(scope);
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => toggleScope(scope)}
                            className={`px-3 py-2 rounded-xl border text-left font-sans text-xs transition-all duration-150 flex items-center gap-2 ${
                              isSelected
                                ? 'border-zinc-950 bg-zinc-950 text-white font-semibold shadow-2xs'
                                : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-white hover:border-zinc-300'
                            }`}
                          >
                            <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'bg-white text-zinc-950' : 'border border-zinc-300 bg-white'
                            }`}>
                              {isSelected && <Check size={10} strokeWidth={3} />}
                            </div>
                            <span>{scope}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. FORM FIELDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* YOUR NAME */}
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

                    {/* BUSINESS / COMPANY NAME */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company-input" className="font-sans font-medium text-xs text-zinc-700">
                        Business / Company Name <span className="text-zinc-400 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Patil Logistics & Trading"
                        className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-zinc-950 transition-all duration-150"
                      />
                    </div>

                    {/* PHONE / WHATSAPP NUMBER */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="phone-input" className="font-sans font-medium text-xs text-zinc-700">
                          Phone / WhatsApp Number *
                        </label>
                        {touched.phone && !isPhoneValid && (
                          <span className="font-mono text-[10px] text-rose-500">Valid number required</span>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone-input"
                        value={formData.phone}
                        onBlur={() => setTouched({ ...touched, phone: true })}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className={`w-full rounded-xl border px-3.5 py-2.5 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none transition-all duration-150 ${
                          touched.phone && !isPhoneValid
                            ? 'border-rose-300 focus:border-rose-500'
                            : 'border-zinc-200 focus:bg-white focus:border-zinc-950'
                        }`}
                      />
                    </div>

                    {/* EMAIL ADDRESS */}
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

                  {/* CITY / LOCATION */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location-input" className="font-sans font-medium text-xs text-zinc-700">
                      City / Location <span className="text-zinc-400 text-[11px]">(Optional, e.g., Pune, Nashik, Satara)</span>
                    </label>
                    <input
                      type="text"
                      id="location-input"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Pune, Maharashtra"
                      className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-zinc-950 transition-all duration-150"
                    />
                  </div>

                  {/* TELL US ABOUT YOUR PROJECT OR WORKFLOW */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message-input" className="font-sans font-medium text-xs text-zinc-700">
                        Tell us about your project or current workflow *
                      </label>
                      {touched.message && !isMessageValid && (
                        <span className="font-mono text-[10px] text-rose-500">Min 5 characters required</span>
                      )}
                    </div>
                    <textarea
                      id="message-input"
                      value={formData.message}
                      onBlur={() => setTouched({ ...touched, message: true })}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what your business does and what you need (e.g., website for customer inquiries, internal software to replace Excel, Google presence, preferred timeline)..."
                      required
                      rows={4}
                      className={`w-full rounded-xl border px-3.5 py-3 font-sans text-xs sm:text-sm text-zinc-900 bg-zinc-50 placeholder:text-zinc-400 outline-none resize-none min-h-[110px] transition-all duration-150 ${
                        touched.message && !isMessageValid
                          ? 'border-rose-300 focus:border-rose-500'
                          : 'border-zinc-200 focus:bg-white focus:border-zinc-950'
                      }`}
                    />
                  </div>

                  {/* SUBMISSION ERROR STATE WITH 1-CLICK WHATSAPP FALLBACK */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-amber-700 flex-shrink-0" />
                        <span>{submitError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-xs flex items-center justify-center gap-1.5 flex-shrink-0"
                      >
                        <WhatsappIcon size={13} />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  )}

                  {/* PRIMARY & SECONDARY ACTIONS */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {/* PRIMARY ACTION */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-3d-base btn-3d-primary flex-1 rounded-xl bg-zinc-950 hover:bg-zinc-800 py-3.5 px-6 font-sans font-semibold text-xs sm:text-sm text-white disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending your requirements...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>See what your project will cost →</span>
                        </>
                      )}
                    </button>

                    {/* SECONDARY INSTANT WHATSAPP OPTION */}
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="btn-3d-base btn-3d-secondary rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 py-3.5 px-5 font-sans font-semibold text-xs sm:text-sm text-zinc-800 flex items-center justify-center gap-2 flex-shrink-0"
                    >
                      <WhatsappIcon size={14} />
                      <span>Send details via WhatsApp instead</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-zinc-500 font-mono text-[11px] text-center pt-1">
                    <ShieldCheck size={13} className="text-emerald-600 flex-shrink-0" />
                    <span>Transmitted to {COMPANY.email} • 100% Client Privacy Guaranteed</span>
                  </div>

                </form>
              )}

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
