import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Sparkles, X, ArrowRight, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '../../content/company';

export function openStudioAi() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-studio-ai'));
  }
}

interface CuratedQA {
  id: string;
  question: string;
  keywords: string[];
  badge: string;
  answer: string;
  keyPoints: string[];
  routeLink: string;
  routeLabel: string;
}

const CURATED_KNOWLEDGE: CuratedQA[] = [
  {
    id: 'milestones',
    question: 'How does the 40% advance and Live Frontend Prototype work?',
    keywords: ['advance', 'prototype', 'milestone', 'payment', '40%', 'schedule', '30%', '40-30-30'],
    badge: 'Scope & Milestone Architecture',
    answer:
      'Every custom engagement follows a transparent 3-milestone structure: 40% Kickoff Advance, 30% Mid-Build, and 30% Final Handover. Upon receiving the 40% advance, we design and host an interactive Live Frontend Prototype on a private staging link so you can test real browser UI, layouts, and click-through flows before backend engineering begins.',
    keyPoints: [
      'Interactive Live Frontend Prototype delivered early on private staging',
      'Backend wiring and database models only begin after your prototype sign-off',
      'The 40% advance is non-refundable once work begins as it funds dedicated custom UI engineering',
    ],
    routeLink: '/legal/terms',
    routeLabel: 'View Scope & Milestone Terms',
  },
  {
    id: 'ownership',
    question: 'Who owns the source code and database after completion?',
    keywords: ['owner', 'ownership', 'ip', 'code', 'github', 'copyright', 'license', 'who owns', 'repository'],
    badge: '100% Client IP Guarantee',
    answer:
      'You do — 100% unconditionally. Upon clearance of the final 30% milestone invoice, VOOO LABS transfers primary ownership of the private GitHub repository (with full commit history, build scripts, and Dockerfiles) and database schemas directly to your organization. There are zero ongoing licensing royalties, zero code rental fees, and zero vendor lock-in.',
    keyPoints: [
      'Complete private GitHub repository transfer to your company account',
      'Full copyright over all custom code, schemas, and design assets',
      'Freedom to host anywhere or have your in-house engineers extend the code in perpetuity',
    ],
    routeLink: '/legal/ip-ownership',
    routeLabel: 'Read Code Ownership Policy',
  },
  {
    id: 'billing',
    question: 'How are domain and cloud hosting costs billed?',
    keywords: ['domain', 'cloud', 'host', 'hosting', 'bill', 'billing', 'server', 'cost', 'aws', 'vercel', 'supabase'],
    badge: 'Direct At-Cost Cloud Setup',
    answer:
      'Domain names (Cloudflare, GoDaddy), cloud hosting (Vercel, AWS, Supabase), and official communication accounts (WhatsApp Cloud API, Google Cloud) are registered directly in your corporate name and payment method. Infrastructure costs are billed by providers at actual wholesale rates with zero middleman markup from VOOO LABS.',
    keyPoints: [
      'Accounts registered directly under your company email and card',
      'Zero markup or middleman fees added by VOOO LABS',
      'No hosting hostage situations — you retain root administrative control',
    ],
    routeLink: '/legal/ip-ownership',
    routeLabel: 'Inspect Infrastructure Handover Terms',
  },
  {
    id: 'differences',
    question: 'What is the difference between a Website, Web App, and Custom Software?',
    keywords: ['difference', 'website', 'web app', 'software', 'pwa', 'app store', 'custom software', 'portal'],
    badge: 'System Selection Guide',
    answer:
      'Websites are public-facing conversion flagships built for high-speed visitor discovery and SEO. Web Apps are interactive, browser-based portals (client dashboards, quotation builders, booking systems) that run on phones and laptops without App Store downloads or 30% commission cuts. Custom Business Software consists of internal tools that replace messy spreadsheets (ERP/CRM, inventory tracking, automated billing, and operations dashboards).',
    keyPoints: [
      'Business Websites: Brand authority, sub-second speed, Google & AI SEO',
      'Web Apps: Interactive portals running in any browser with zero app-store download friction',
      'Custom Software: Operational internal engines with PostgreSQL row-level security',
    ],
    routeLink: '/services',
    routeLabel: 'Explore All 4 Core Systems',
  },
  {
    id: 'seo_ai',
    question: 'How do you help my business appear on Google, Maps, and ChatGPT?',
    keywords: ['seo', 'google', 'maps', 'chatgpt', 'aeo', 'ranking', 'ads', 'ai search', 'visibility', 'search'],
    badge: '4-Channel Discovery Architecture',
    answer:
      'We engineer a four-channel discovery system: (1) Technical Google SEO with semantic schema and sub-second load times; (2) Answer Engine Optimization (AEO) using JSON-LD @graph and llms.txt protocols so ChatGPT and Perplexity cite you accurately; (3) Google Maps local authority with 1-tap WhatsApp review funnels; and (4) Targeted Google Search Ads paired with single-action landing pages with direct WhatsApp source attribution.',
    keyPoints: [
      'Technical SEO with programmatic JSON-LD for rich snippets',
      'Machine-readable llms.txt files for AI engine citation',
      'WhatsApp review automation to build authoritative local proof',
    ],
    routeLink: '/seo-ai',
    routeLabel: 'Explore Search & AI Capabilities',
  },
  {
    id: 'revisions',
    question: 'How many frontend revision rounds are included?',
    keywords: ['revision', 'round', 'change', 'revisions', 'scope creep', 'edits', 'feedback'],
    badge: 'Revision Protocols',
    answer:
      'Following delivery of the Live Frontend Prototype on our private staging link, each project includes up to two (2) consolidated revision rounds for UI, typography, color palette, or copy refinements. Feedback must be shared in a unified punch-list. Structural layout reversals after prototype sign-off are billed separately as Change Requests at standard studio engineering rates.',
    keyPoints: [
      'Two (2) consolidated revision cycles on the interactive staging prototype',
      'Structured punch-lists keep engineering velocity fast and predictable',
      'Post-approval architectural reversals handled via transparent Change Requests',
    ],
    routeLink: '/legal/terms',
    routeLabel: 'Review Scope Lock & Revision Policy',
  },
  {
    id: 'why_vooo',
    question: 'Why is VOOO LABS more practical than traditional agencies?',
    keywords: ['agency', 'traditional', 'why vooo', 'benefit', 'compare', 'retainer', 'freelancer', 'advantage'],
    badge: 'Studio vs Agency Comparison',
    answer:
      'Traditional agencies resell bloated WordPress templates, outsource work to junior subcontractors, charge monthly retainers just to keep your site online, and lock you into proprietary hosting. VOOO LABS operates as an elite architecture studio led by Vrushabh Shinde: you work directly with software architects, receive clean TypeScript/React code with 100% IP ownership, and pay direct at-cost cloud hosting.',
    keyPoints: [
      'Direct collaboration with lead architect Vrushabh Shinde (no account manager game of telephone)',
      '100% custom TypeScript/React engineering (zero bloated page-builder plugins)',
      'Zero ongoing software rental fees — complete freedom and portability',
    ],
    routeLink: '/about',
    routeLabel: 'Read the Studio Manifesto',
  },
  {
    id: 'start_project',
    question: 'How do I start a project with Vrushabh?',
    keywords: ['start', 'contact', 'hire', 'vrushabh', 'inquire', 'quote', 'blueprint', 'estimate', 'pricing'],
    badge: 'Direct Kickoff Protocol',
    answer:
      'You can start by configuring your interactive Project Blueprint on our Contact page to choose your system, stage, and requirements. Vrushabh will review your technical specifications and respond with an exact architectural roadmap, deterministic quotation, and mutual NDA within 24 hours. You can also message him directly on WhatsApp.',
    keyPoints: [
      'Generate a real-time architectural blueprint on vooolabs.in/contact',
      'Receive a written technical specification and deterministic price quote',
      'Mutual NDA executed prior to reviewing proprietary business records',
    ],
    routeLink: '/contact',
    routeLabel: 'Configure Project Blueprint',
  },
];

export default function StudioAiModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQa, setSelectedQa] = useState<CuratedQA | null>(null);

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K & Custom Open Event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-studio-ai', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-studio-ai', handleCustomOpen);
    };
  }, [isOpen]);

  // Reset state on modal close
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSelectedQa(null);
    }
  }, [isOpen]);

  // Grounded Search & Match Engine
  const matchedQa = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();

    // Check exact or keyword match
    const found = CURATED_KNOWLEDGE.find((item) => {
      if (item.question.toLowerCase().includes(q)) return true;
      return item.keywords.some((k) => q.includes(k) || k.includes(q));
    });

    return found || null;
  }, [searchQuery]);

  const activeDisplay = selectedQa || matchedQa;

  const currentQuestionForWhatsapp = activeDisplay ? activeDisplay.question : searchQuery;
  const whatsappUrl = `${whatsappLink}?text=${encodeURIComponent(
    currentQuestionForWhatsapp
      ? `Hello Vrushabh, I am reviewing VOOO LABS studio policies and would like to ask: "${currentQuestionForWhatsapp}"`
      : 'Hello Vrushabh, I am reviewing VOOO LABS studio specifications and have a technical project inquiry.'
  )}`;

  const chatGptVerifyUrl = `https://chatgpt.com/?q=${encodeURIComponent(
    'Summarize VOOO LABS services and client ownership terms from https://vooolabs.in/llms-full.txt'
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="studio-ai-title"
        >
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* MODAL CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-[20px] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] text-left"
          >
            {/* TOP 2PX BRAND GRADIENT */}
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />

            {/* HEADER */}
            <div className="px-6 py-4 border-b border-slate-200/80 flex items-center justify-between bg-[#F8F9FC]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h2 id="studio-ai-title" className="font-bold text-slate-950 text-sm tracking-tight">
                    VOOO LABS · Studio AI Concierge
                  </h2>
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    Grounded in llms-full.txt · Zero Hallucination
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center font-mono text-[10px] text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                  ESC to close
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* SEARCH / ASK INPUT */}
            <div className="p-4 sm:p-5 border-b border-slate-200/80 bg-white">
              <div className="relative flex items-center">
                <Search size={17} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (selectedQa) setSelectedQa(null);
                  }}
                  placeholder="Ask about 40-30-30 milestones, code ownership, tech stack, cloud billing..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-[#F8F9FC] text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedQa(null);
                    }}
                    className="absolute right-3 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* BODY CONTENT (SCROLLABLE) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-left">
              {/* IF AN ANSWER IS ACTIVE */}
              {activeDisplay ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                      {activeDisplay.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQa(null);
                        setSearchQuery('');
                      }}
                      className="text-xs text-slate-500 hover:text-blue-600 font-medium"
                    >
                      ← Back to all questions
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                    {activeDisplay.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeDisplay.answer}
                  </p>

                  {/* KEY VERIFIED TAKEAWAYS */}
                  <div className="p-4 rounded-xl bg-[#F8F9FC] border border-slate-200/90 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-slate-700 uppercase tracking-wider block">
                      Verified Studio Architecture:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {activeDisplay.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={activeDisplay.routeLink}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <span>{activeDisplay.routeLabel}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ) : (
                /* 8 CURATED ONE-TAP QUESTIONS */
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Verified Knowledge Base (Select Any Question)
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">8 Curated Spec Answers</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {CURATED_KNOWLEDGE.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedQa(item)}
                        className="p-3 sm:p-3.5 rounded-xl border border-slate-200/80 bg-white hover:bg-[#F8F9FC] hover:border-blue-400 text-left transition-all duration-150 group cursor-pointer flex items-center justify-between gap-3 shadow-2xs"
                      >
                        <div className="space-y-0.5">
                          <span className="font-mono text-[10px] text-blue-600 font-semibold uppercase tracking-wider block">
                            {item.badge}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-950 leading-snug">
                            {item.question}
                          </span>
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DUAL ACTION FOOTER */}
            <div className="px-6 py-4 border-t border-slate-200/80 bg-[#F8F9FC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={chatGptVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-950 font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Verify in ChatGPT</span>
                <ExternalLink size={12} className="text-slate-400" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
              >
                <MessageSquare size={13} />
                <span>Ask Vrushabh on WhatsApp →</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
