import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Layers, Cpu, Search, ArrowRight } from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';
import { DuotoneCheckIcon, DuotoneProblemIcon, DuotoneSolutionIcon } from '../shared/StudioIcons';

const EASING = [0.16, 1, 0.3, 1] as const;

interface Pillar {
  title: string;
  description: string;
}

interface ChapterData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  serviceParam: string;
  serviceState: string;
  route: string;
  icon: React.ElementType;
  accent: string;
  bottleneck: string;
  solution: string;
  pillars: Pillar[];
  adoptionExamples: Record<string, string>;
}

const INDUSTRIES = [
  { id: 'manufacturing', label: 'Manufacturing & Trade' },
  { id: 'healthcare', label: 'Clinics & Healthcare' },
  { id: 'education', label: 'Institutes & Education' },
  { id: 'realestate', label: 'Real Estate & Retail' },
  { id: 'b2b', label: 'B2B Services' },
] as const;

const CHAPTERS: ChapterData[] = [
  {
    id: 'websites',
    index: '01',
    title: 'Business Websites',
    subtitle: 'Turn visitors into direct inquiries',
    serviceParam: 'websites',
    serviceState: 'Business Websites',
    route: '/services/websites',
    icon: Laptop,
    accent: '#4285F4',
    bottleneck:
      'Generic template websites load slowly on mobile, bury key details, and lose high-intent visitors within seconds.',
    solution:
      'We engineer fast, clarity-first web platforms built to earn immediate buyer trust and route inquiries straight to your WhatsApp and phone.',
    pillars: [
      {
        title: 'Clarity-First Brand Architecture',
        description: 'Structured so any visitor understands your credibility and offerings within seconds.',
      },
      {
        title: 'Mobile-Speed & Conversion Engineering',
        description: 'Built clean from scratch for fast mobile browsing and frictionless inquiries.',
      },
      {
        title: 'Complete Technical Infrastructure',
        description: 'Domain registration, DNS routing, SSL security, and 24/7 cloud deployment handled end-to-end.',
      },
      {
        title: '100% Source Code Ownership',
        description: 'Full codebase and repository transferred directly to your accounts.',
      },
    ],
    adoptionExamples: {
      manufacturing:
        'Showcase ISO certifications, detailed machinery catalog specs, and route bulk quotation requests directly to sales executives.',
      healthcare:
        'Publish doctor credentials, treatment specializations, and enable 1-tap WhatsApp consultation scheduling for local patients.',
      education:
        'Present accredited curricula, fee breakdowns, and virtual tour walk-throughs that convert visiting parents into campus inquiries.',
      realestate:
        'Highlight RERA credentials, high-res floor plans, and capture site visit bookings with automated location maps.',
      b2b:
        'Demonstrate verified case studies, client ROI testimonials, and pre-qualify corporate RFP inquiries with upfront scope details.',
    },
  },
  {
    id: 'web-apps',
    index: '02',
    title: 'Custom Web Apps & Portals',
    subtitle: 'Self-service logins & live tracking',
    serviceParam: 'web-apps',
    serviceState: 'Custom Web Apps & Portals',
    route: '/services/web-apps',
    icon: Layers,
    accent: '#7C3AED',
    bottleneck:
      'Teams waste hours every day answering repetitive status calls, sending manual PDFs, and managing disconnected booking requests.',
    solution:
      'We build dedicated customer and staff login portals where bookings, project progress, and documents update live in one place.',
    pillars: [
      {
        title: 'Dedicated Client & Admin Logins',
        description: 'Secure, role-based access tailored separately for your team and your customers.',
      },
      {
        title: 'Self-Service Tracking & Bookings',
        description: 'Live schedules, status updates, and document access that eliminate repetitive calls.',
      },
      {
        title: 'Reliable Cloud Data Architecture',
        description: 'Built to handle growing users and daily transactions smoothly.',
      },
      {
        title: 'Automated Status Alerts',
        description: 'Instant WhatsApp and email updates triggered automatically by real user actions.',
      },
    ],
    adoptionExamples: {
      manufacturing:
        'Dealers and distributors log in to place bulk reorders, track dispatch timelines, and download stamped shipment bills.',
      healthcare:
        'Patients access prescription histories, view lab test results securely, and reschedule upcoming appointments online.',
      education:
        'Students and parents access live attendance records, semester grade reports, and submit assignment files in one portal.',
      realestate:
        'Property buyers track stage-wise construction milestones, view verified payment receipts, and submit snagging lists directly.',
      b2b:
        'Retainer clients review weekly deliverables, submit design feedback, and download monthly service activity logs securely.',
    },
  },
  {
    id: 'software',
    index: '03',
    title: 'Custom Business Software',
    subtitle: 'Unified operations & GST billing',
    serviceParam: 'software',
    serviceState: 'Custom Business Software',
    route: '/services/business-software',
    icon: Cpu,
    accent: '#10B981',
    bottleneck:
      'Outgrowing spreadsheets leads to stock mismatches, delayed GST invoices, missed follow-ups, and zero real-time visibility for owners.',
    solution:
      'We engineer unified internal operations, inventory, and GST billing software shaped precisely around your company’s daily workflow.',
    pillars: [
      {
        title: 'Workflow-Exact System Design',
        description: 'Engineered around how your staff, branches, and approvals actually operate.',
      },
      {
        title: 'Automated GST Invoicing & Ledgers',
        description: 'Accurate tax billing, order logs, and payment tracking without spreadsheet errors.',
      },
      {
        title: 'Real-Time Owner Command View',
        description: 'Live visibility into daily sales, pending orders, and team accountability from anywhere.',
      },
      {
        title: 'Full GitHub & Cloud Handover',
        description: 'Complete intellectual property and system control retained by your company.',
      },
    ],
    adoptionExamples: {
      manufacturing:
        'Track raw material inventory across warehouses, generate multi-tier GST delivery challans, and automate vendor payables.',
      healthcare:
        'Manage patient OPD queues, reconcile multi-doctor commission payouts, and issue computerized GST medicine bills.',
      education:
        'Automate multi-installment student fee collection, track hostel bed occupancy, and reconcile monthly staff payroll.',
      realestate:
        'Sync inventory across offline stores, handle POS barcode billing, and reconcile channel partner brokerage payouts in real time.',
      b2b:
        'Log billable engineer hours against project milestones, generate recurring tax invoices, and reconcile outstanding client ledgers.',
    },
  },
  {
    id: 'ai-growth',
    index: '04',
    title: 'Google SEO, AI Search & Ads',
    subtitle: 'ChatGPT, Google AI & local discovery',
    serviceParam: 'seo-ai',
    serviceState: 'Google SEO, AI Search & Ads',
    route: '/seo-ai',
    icon: Search,
    accent: '#F97316',
    bottleneck:
      'Buyers now ask ChatGPT, Google AI, and Google Maps who to hire—leaving businesses with unstructured sites invisible while ad budgets leak.',
    solution:
      'We structure your digital authority for AI recommendations and run focused search campaigns built to capture ready-to-buy customers.',
    pillars: [
      {
        title: 'ChatGPT & Google AI Visibility',
        description: 'Machine-readable business structuring so AI search engines cite and recommend you.',
      },
      {
        title: 'Google Maps & Local Search Authority',
        description: 'High-trust regional and city presence where local buyers look first.',
      },
      {
        title: 'High-Intent Search & AI Campaigns',
        description: 'Precision ad targeting focused on buyers actively searching for your service.',
      },
      {
        title: 'Dedicated Conversion Landing Pages',
        description: 'Fast, focused pages engineered to turn ad clicks into direct calls and WhatsApp leads.',
      },
    ],
    adoptionExamples: {
      manufacturing:
        'Rank as the verified OEM manufacturer in ChatGPT and Google AI Overviews for high-value industrial component procurement.',
      healthcare:
        'Establish top-tier Google Maps local pack presence and AI search citations for trusted medical specialists in your city.',
      education:
        'Capture admission-intent searches on Google and Meta right during annual board exam result and enrollment cycles.',
      realestate:
        'Target high-intent home buyers and investors searching for premium residential and commercial spaces in your target micro-market.',
      b2b:
        'Position your consultancy as the verified authority when corporate founders search AI platforms for niche engineering partners.',
    },
  },
];

export default function Slide3_SolutionExplorer() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState<string>('manufacturing');

  const activeChapter = CHAPTERS[activeChapterIndex];

  return (
    <section 
      className="bg-white py-20 sm:py-24 px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Capabilities and Real-World Fit"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER (LEFT-ALIGNED INSIDE max-w-6xl mx-auto px-6) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASING }}
          className="text-left mb-14 sm:mb-16"
        >
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            CAPABILITIES & REAL-WORLD FIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Four Core Systems. Built to Solve Real Bottlenecks.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-3 font-normal leading-relaxed">
            Every growing business hits digital friction—slow sites, manual follow-ups, spreadsheet chaos, or invisibility on AI search. We engineer the exact system to replace it.
          </p>
        </motion.div>

        {/* ASYMMETRIC 2-COLUMN LAYOUT (lg:col-span-4 RAIL / lg:col-span-8 WORKSPACE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN (lg:col-span-4 — LIQUID 4-SYSTEM CHAPTER RAIL)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-slate-200/80 border-y border-slate-200/80">
            {CHAPTERS.map((chapter, idx) => {
              const isActive = idx === activeChapterIndex;
              const ChapterIcon = chapter.icon;

              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`group relative text-left py-5 px-4 transition-all duration-200 flex items-start gap-4 outline-none ${
                    isActive ? 'text-slate-900 bg-blue-50/40' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/60'
                  }`}
                >
                  {/* LIQUID-SMOOTH SHARED-ELEMENT STUDIO BLUE ACTIVE BAR */}
                  {isActive && (
                    <motion.div
                      layoutId="capability-active-bar"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full"
                    />
                  )}

                  {/* CHAPTER ICON CONTAINER */}
                  <div 
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                    style={{ 
                      backgroundColor: isActive ? `${chapter.accent}16` : '#F1F5F9',
                      color: isActive ? chapter.accent : '#64748B'
                    }}
                  >
                    <ChapterIcon size={18} />
                  </div>

                  {/* CHAPTER TITLES */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                        {chapter.index}
                      </span>
                      <span className="text-xs font-medium text-slate-500 truncate">
                        {chapter.subtitle}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-bold tracking-tight leading-snug truncate ${
                      isActive ? 'text-slate-950' : 'text-slate-700'
                    }`}>
                      {chapter.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN (lg:col-span-8 — SINGLE ARCHITECTURAL WORKSPACE)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8">
            <div className="rounded-[24px] bg-[#F8F9FC] border border-slate-200/80 p-7 sm:p-10 shadow-2xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASING }}
                >
                  {/* LAYER A: THE REAL PROBLEM TODAY VS. THE VOOO LABS SOLUTION */}
                  <div className="space-y-4 mb-8">
                    <div className="border-l-2 border-slate-300 pl-4 py-0.5">
                      <div className="flex items-center gap-2 mb-1">
                        <DuotoneProblemIcon size={15} />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                          The Bottleneck Today
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {activeChapter.bottleneck}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#4285F4] pl-4 py-0.5">
                      <div className="flex items-center gap-2 mb-1">
                        <DuotoneSolutionIcon size={15} accentColor={activeChapter.accent} />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                          The VOOO LABS Solution
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
                        {activeChapter.solution}
                      </p>
                    </div>
                  </div>

                  {/* LAYER B: 4 ENGINEERED PILLARS (2x2 TYPOGRAPHIC GRID, ZERO BOXES) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8 pt-6 border-t border-slate-200/80">
                    {activeChapter.pillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <DuotoneCheckIcon size={20} accentColor={activeChapter.accent} className="shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">
                            {pillar.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* LAYER C: INTERACTIVE CROSS-INDUSTRY ADOPTION STRIP */}
                  <div className="border-t border-slate-200/80 pt-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 block mb-3.5">
                      HOW DIFFERENT BUSINESSES ADOPT THIS
                    </span>

                    {/* 5 TACTILE INDUSTRY PILLS */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {INDUSTRIES.map((ind) => {
                        const isSelected = activeIndustry === ind.id;
                        return (
                          <button
                            key={ind.id}
                            type="button"
                            onClick={() => setActiveIndustry(ind.id)}
                            className={`px-3 py-1.5 rounded-[12px] text-xs font-medium transition-all duration-200 outline-none ${
                              isSelected
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            {ind.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* ADOPTION EXAMPLE DISPLAY */}
                    <div className="bg-white rounded-[14px] border border-slate-200/80 p-4">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${activeChapter.id}-${activeIndustry}`}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2, ease: EASING }}
                          className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium"
                        >
                          <span className="font-bold text-blue-600">
                            {INDUSTRIES.find((i) => i.id === activeIndustry)?.label}:{' '}
                          </span>
                          {activeChapter.adoptionExamples[activeIndustry]}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* BOTTOM ACTION ROW */}
                  <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <LiquidButton
                        to={`/contact?service=${activeChapter.serviceParam}`}
                        state={{ selectedService: activeChapter.serviceState }}
                        variant="primary"
                        rounded="pill"
                        size="md"
                        magnetic={true}
                      >
                        <span>Discuss Project Blueprint</span>
                        <ArrowRight size={16} />
                      </LiquidButton>

                      <LiquidButton
                        to={activeChapter.route}
                        variant="secondary"
                        rounded="pill"
                        size="md"
                        magnetic={true}
                      >
                        <span>Explore Architecture Spec</span>
                      </LiquidButton>
                    </div>

                    <span className="font-mono text-xs text-slate-500">
                      Direct scoping · 100% source code ownership
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
