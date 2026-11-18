import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Minus, 
  Inbox, 
  Users, 
  LayoutDashboard 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { DuotoneCheckIcon } from '../components/shared/StudioIcons';

const EASING = [0.22, 1, 0.36, 1] as const;

type StageType = 'intake' | 'execution' | 'command';

interface StepFlow {
  num: string;
  stage: string;
  heading: string;
  detail: string;
}

const STAGE_FLOWS: Record<StageType, StepFlow[]> = {
  intake: [
    {
      num: '01',
      stage: 'Intake & Leads',
      heading: 'Central Inquiry & Order Capture',
      detail: 'Every website, WhatsApp, and phone inquiry enters one structured queue—zero missed follow-ups.',
    },
    {
      num: '02',
      stage: 'Routing',
      heading: 'Automatic Staff Assignment',
      detail: 'Leads and orders route automatically to the right branch or sales executive.',
    },
    {
      num: '03',
      stage: 'Follow-Up',
      heading: 'Quotation & Follow-Up Reminders',
      detail: 'Track pending quotes, scheduled callbacks, and customer commitments cleanly.',
    },
    {
      num: '04',
      stage: 'Conversion',
      heading: 'Instant Handover to Operations',
      detail: 'Approved orders convert directly into active execution tasks without re-typing data.',
    },
  ],
  execution: [
    {
      num: '01',
      stage: 'Task Routing',
      heading: 'Clear Stage-by-Stage Task Ownership',
      detail: 'Every team member sees their assigned jobs, deadlines, and priority order.',
    },
    {
      num: '02',
      stage: 'Real-Time Logs',
      heading: 'Stock, Material & Vendor Logs',
      detail: 'Record inward stock, material usage, and dispatch updates in real time.',
    },
    {
      num: '03',
      stage: 'Audit Trail',
      heading: 'Timestamped Action Accountability',
      detail: 'Every status change, edit, and handover is logged automatically by user and time.',
    },
    {
      num: '04',
      stage: 'Milestone Alerts',
      heading: 'Automated WhatsApp Status Alerts',
      detail: 'Notify internal teams or customers automatically when key milestones complete.',
    },
  ],
  command: [
    {
      num: '01',
      stage: 'Multi-Branch Hub',
      heading: 'Live Multi-Branch Visibility',
      detail: 'Monitor active orders, pending tasks, and branch performance from one screen.',
    },
    {
      num: '02',
      stage: 'Approvals',
      heading: 'Bottleneck & Approval Alerts',
      detail: 'Spot delayed jobs and approve discounts, purchases, or exceptions in one click.',
    },
    {
      num: '03',
      stage: 'Access Control',
      heading: 'Strict Role-Based Data Privacy',
      detail: 'Ensure staff see only their assigned scope while owners retain complete visibility.',
    },
    {
      num: '04',
      stage: 'Financial Health',
      heading: 'Clean Audit & Exportable Reports',
      detail: 'Generate accurate operational and financial summaries anytime without spreadsheet errors.',
    },
  ],
};

const CAPABILITIES = [
  {
    num: '01',
    title: 'Workflow-Exact System Design',
    desc: 'Engineered around your exact approval chains, pricing rules, and daily steps—never bloated with unused ERP modules.',
  },
  {
    num: '02',
    title: 'Lead, Order & Pipeline Tracking',
    desc: 'Manage every inquiry from initial contact and quotation through execution, dispatch, and repeat business.',
  },
  {
    num: '03',
    title: 'Inventory, Stock & Dispatch Control',
    desc: 'Track live stock levels across branches or godowns with low-stock alerts and vendor histories.',
  },
  {
    num: '04',
    title: 'Multi-Branch & Role-Based Permissions',
    desc: 'Granular access control for owners, branch managers, accounts, and field staff.',
  },
  {
    num: '05',
    title: 'Automated WhatsApp & Internal Notifications',
    desc: 'Trigger instant reminders for pending approvals, overdue follow-ups, and completed dispatches.',
  },
  {
    num: '06',
    title: 'Private Cloud Database & 100% Ownership',
    desc: 'Dedicated production database, private GitHub repository, and complete source code ownership in your name.',
  },
];

const COMPARISONS = [
  {
    dimension: 'Daily Coordination',
    traditional: 'Hunting across 10 Excel sheets, missed calls, and scattered WhatsApp forwards.',
    customSoftware: 'One central system where every team update is recorded and visible live.',
  },
  {
    dimension: 'Workflow Fit',
    traditional: 'Bending your day-to-day operations to fit rigid, cluttered SaaS templates.',
    customSoftware: 'Software shaped strictly around how your business and team actually operate.',
  },
  {
    dimension: 'Team Accountability',
    traditional: 'Verbal follow-ups, finger-pointing, and unclear task ownership.',
    customSoftware: 'Timestamped logs showing exactly who updated what, when, and from where.',
  },
  {
    dimension: 'Long-Term Control',
    traditional: 'Escalating per-user monthly software rent and restrictive proprietary lock-in.',
    customSoftware: 'One-time custom build with 100% source code, GitHub repo, and database ownership.',
  },
];

const SECTORS = [
  {
    title: 'Manufacturers & Distributors',
    desc: 'Dealer orders, production stages, stock/godown tracking, and dispatch records.',
  },
  {
    title: 'Multi-Branch Retail & Franchises',
    desc: 'Centralized branch visibility, inter-branch stock transfers, and daily reconciliation.',
  },
  {
    title: 'Service, Construction & Field Teams',
    desc: 'Job/site allocation, material requests, vendor payouts, and milestone sign-offs.',
  },
  {
    title: 'Institutes & Healthcare Operations',
    desc: 'Counseling/intake pipelines, staff accountability, fee/billing logs, and admin reporting.',
  },
];

export default function BusinessSoftwareServicePage() {
  const [activeStage, setActiveStage] = useState<StageType>('intake');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Custom Business Software for our internal operations.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: ASYMMETRIC EDITORIAL HERO + SWITCHER
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-16 bg-white border-b border-slate-200/80 relative overflow-hidden text-left"
        aria-label="03 Custom Business Software Overview"
      >
        {/* SUBTLE AMBIENT STUDIO GLOW */}
        <div 
          className="absolute top-0 left-1/3 w-[550px] h-[550px] rounded-full bg-emerald-500/[0.04] blur-[140px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* BREADCRUMB BACK LINK */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="mb-6"
          >
            <Link 
              to="/services" 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>All Services</span>
            </Link>
          </motion.div>

          {/* 12-COLUMN ASYMMETRIC SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN (lg:col-span-7): EDITORIAL HEADLINE & VALUE */}
            <div className="lg:col-span-7">
              {/* STUDIO PHILOSOPHY TAG */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04, ease: EASING }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
              >
                <span className="font-bold text-slate-950">First make it work,</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                <span className="font-medium text-slate-600">then make it</span>
                <span className="font-extrabold text-blue-600">beautiful.</span>
              </motion.div>

              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
              >
                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
                  03 / CUSTOM BUSINESS SOFTWARE
                </span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-2xl"
              >
                <span>Internal Operations Software</span>
                <span className="shimmer-text block mt-1">Shaped Around How Your Team Actually Works.</span>
              </motion.h1>

              {/* SUBHEADLINE */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
                className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
              >
                Stop running critical business operations on fragile spreadsheets, scattered WhatsApp groups, and rigid off-the-shelf software. We engineer tailored internal systems for leads, orders, inventory, approvals, and multi-branch visibility—100% owned by your company.
              </motion.p>

              {/* ACTION ROW */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <LiquidButton
                  to="/contact?service=software"
                  variant="gradient"
                  rounded="pill"
                  size="lg"
                  magnetic={true}
                >
                  <span>See what your project will cost</span>
                  <ArrowRight size={16} />
                </LiquidButton>

                <LiquidButton
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  variant="secondary"
                  rounded="pill"
                  size="lg"
                  magnetic={true}
                >
                  <span>Discuss on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </LiquidButton>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (lg:col-span-5): INTERACTIVE OPERATIONS FLOW SWITCHER */}
            <div className="lg:col-span-5 lg:border-l lg:border-slate-200/80 lg:pl-10 w-full pt-4 lg:pt-0">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 block">
                HOW ONE OPERATION FLOWS END-TO-END
              </span>
              
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Select an operational stage to see how work moves cleanly without manual chasing:
              </p>

              {/* 3 INTERACTIVE UNDERLINE TABS */}
              <div className="mt-4 flex items-center gap-5 border-b border-slate-200/80 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => setActiveStage('intake')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeStage === 'intake'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Inbox size={14} className={activeStage === 'intake' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>01 Intake & Leads</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStage('execution')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeStage === 'execution'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users size={14} className={activeStage === 'execution' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>02 Team Execution</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStage('command')}
                  className={`pb-2.5 inline-flex items-center gap-1.5 transition-colors relative cursor-pointer font-medium ${
                    activeStage === 'command'
                      ? 'text-slate-950 font-bold border-b-2 border-blue-600 -mb-[1px]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <LayoutDashboard size={14} className={activeStage === 'command' ? 'text-blue-600' : 'text-slate-400'} />
                  <span>03 Owner Command</span>
                </button>
              </div>

              {/* 4-ROW VERTICAL HAIRLINE EXPERIENCE LIST */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASING }}
                  className="mt-4 divide-y divide-slate-200/80 border-b border-slate-200/80"
                >
                  {STAGE_FLOWS[activeStage].map((step) => (
                    <div key={step.num} className="py-3.5 flex items-start gap-3.5">
                      <span className="font-mono text-xs font-bold text-blue-600 shrink-0 mt-0.5 w-6">
                        {step.num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                            {step.stage}
                          </span>
                          <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-950 truncate">
                            {step.heading}
                          </h4>
                        </div>
                        <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: 6-POINT OPERATIONAL ARCHITECTURE GRID
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="Core Custom Business Software Capabilities"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            OPERATIONAL ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight max-w-2xl">
            Built Around Your Exact Rules—Zero Bloated Menus.
          </h2>

          {/* 6-ITEM 2-COLUMN OPEN HAIRLINE GRID */}
          <div className="mt-10 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 divide-y divide-slate-200/80">
            {CAPABILITIES.map((item, idx) => (
              <div 
                key={item.num}
                className={`py-6 md:px-6 ${
                  idx % 2 === 0 ? 'md:pl-0' : 'md:pr-0 md:border-l md:border-slate-200/80'
                } flex flex-col justify-start`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {item.num}
                  </span>
                  <DuotoneCheckIcon size={16} accentColor="#4285F4" />
                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3: DARK CONTRAST COMPARISON BAND
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-20 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Why Custom Business Software Wins"
      >
        {/* AMBIENT GLOW BACKDROP */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2.5">
            WHY CUSTOM SOFTWARE WINS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Replace Spreadsheet Chaos with One Reliable Source of Truth.
          </h2>

          {/* 4 CRISP HAIRLINE COMPARISON ROWS */}
          <div className="mt-10 border-t border-white/15 divide-y divide-white/15">
            {/* TABLE HEADER */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4">Spreadsheets & Generic SaaS</div>
              <div className="md:col-span-5 text-blue-400 font-bold">VOOO LABS Custom Software</div>
            </div>

            {/* ROWS */}
            {COMPARISONS.map((row, idx) => (
              <div 
                key={idx} 
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-3 font-bold text-sm sm:text-base text-white leading-snug">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                  <Minus size={15} className="text-slate-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-2 font-medium">
                  <Check size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>{row.customSoftware}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: HIGH-FIT SECTORS + NEXT-SYSTEM BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#F8F9FC] border-t border-slate-200/80 py-16 sm:py-20 select-none text-left relative overflow-hidden"
        aria-label="Built for Complex Operations"
      >
        {/* TOP 2PX STUDIO BRAND PROGRESS LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: EASING }}
          className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            BUILT FOR COMPLEX OPERATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Engineered for High-Execution Operational Businesses.
          </h2>

          {/* 4 OPEN COLUMNS */}
          <div className="mt-8 border-y border-slate-200/80 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 grid grid-cols-1 md:grid-cols-4">
            {SECTORS.map((sector, idx) => (
              <div 
                key={idx}
                className="py-6 md:py-7 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-start"
              >
                <span className="font-mono text-xs font-bold text-blue-600 mb-2 tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          {/* NEXT-SYSTEM BRIDGE */}
          <div className="mt-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/80">
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Want your business discovered on Google Search, Google Maps, and ChatGPT/AI Search?
            </p>
            <Link 
              to="/seo-ai" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>Explore 04 Google SEO, AI Search & Ads</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 5: CLOSING CONVERSION BAND
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#0A0F1E] text-white py-16 sm:py-24 px-6 relative overflow-hidden select-none border-t border-slate-800 text-left"
        aria-label="Start Your Custom Business Software Project"
      >
        {/* AMBIENT GLOW BACKDROP */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            {/* STUDIO PHILOSOPHY TAG */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none">
              <span className="font-bold text-white">First make it work,</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-300">then make it</span>
              <span className="font-extrabold text-blue-400">beautiful.</span>
            </div>

            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
              NEXT STEPS FOR YOUR BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Ready to Replace Manual Follow-Ups <br className="hidden sm:inline" />
              <span className="shimmer-text">with Custom Business Software?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <LiquidButton
              to="/contact?service=software"
              variant="gradient"
              rounded="pill"
              size="lg"
              magnetic={true}
              className="whitespace-nowrap"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </LiquidButton>

            <Link
              to="/services"
              className="text-sm font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors px-2 py-2"
            >
              <ArrowLeft size={15} />
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
