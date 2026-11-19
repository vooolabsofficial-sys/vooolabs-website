import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { COMPANY, LOCATION, whatsappLink } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';

export type PolicyKey = 'terms' | 'refunds' | 'ip-ownership' | 'privacy';

interface PolicyTab {
  key: PolicyKey;
  path: string;
  shortLabel: string;
  fullTitle: string;
}

const POLICY_TABS: PolicyTab[] = [
  {
    key: 'terms',
    path: '/legal/terms',
    shortLabel: 'Terms of Service',
    fullTitle: 'Terms of Service',
  },
  {
    key: 'privacy',
    path: '/legal/privacy',
    shortLabel: 'Privacy Policy',
    fullTitle: 'Privacy Policy',
  },
  {
    key: 'refunds',
    path: '/legal/refunds',
    shortLabel: 'Refund Policy',
    fullTitle: 'Refund Policy',
  },
  {
    key: 'ip-ownership',
    path: '/legal/ip-ownership',
    shortLabel: 'Code Ownership',
    fullTitle: 'Code Ownership',
  },
];

interface LegalPolicyPageProps {
  activePolicy?: PolicyKey;
}

export default function LegalPolicyPage({ activePolicy }: LegalPolicyPageProps) {
  const location = useLocation();
  const { doc } = useParams<{ doc: string }>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Resolve current active policy from prop, path, or URL param (defaulting to 'terms')
  let currentKey: PolicyKey = activePolicy || 'terms';

  if (!activePolicy) {
    const pathname = location.pathname;
    if (pathname.includes('/legal/refunds') || doc === 'refunds') {
      currentKey = 'refunds';
    } else if (pathname.includes('/legal/ip-ownership') || doc === 'ip-ownership') {
      currentKey = 'ip-ownership';
    } else if (pathname.includes('/legal/privacy') || doc === 'privacy') {
      currentKey = 'privacy';
    } else {
      currentKey = 'terms';
    }
  }

  // Always scroll to top upon policy or route transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, currentKey]);

  // Subtle GSAP entrance choreography: calm, executive and editorial
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.editorial-reveal',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentKey]);

  const whatsappInquiryUrl = `${whatsappLink}?text=${encodeURIComponent(
    `Hello VOOO LABS, I am reviewing your ${POLICY_TABS.find((t) => t.key === currentKey)?.shortLabel || 'legal policies'} and would like to clarify a scope or ownership question.`
  )}`;

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none relative overflow-hidden">
      {/* 2PX STUDIO BRAND PROGRESS GRADIENT LINE */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-20"
        aria-hidden="true"
      />

      {/* SUBTLE AMBIENT STUDIO GLOW */}
      <div
        className="absolute top-0 left-1/3 w-[650px] h-[650px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-4xl mx-auto px-6 pt-32 sm:pt-40 pb-24 text-left"
      >
        {/* BACK TO HOME LINK */}
        <div className="editorial-reveal mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-500 hover:text-blue-600 tracking-wider uppercase transition-colors"
          >
            <span aria-hidden="true">←</span> Back to {COMPANY.brandName}
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════
            4-POLICY ROUTE NAVIGATION BAR
           ══════════════════════════════════════════════════════ */}
        <div className="editorial-reveal mb-12">
          <nav
            aria-label="Legal & Trust Policies"
            className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#F8F9FC] border border-slate-200/90 overflow-x-auto no-scrollbar shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
          >
            {POLICY_TABS.map((tab) => {
              const isActive = tab.key === currentKey;
              return (
                <Link
                  key={tab.key}
                  to={tab.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] inline-flex items-center rounded-xl font-sans text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-slate-950 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                  }`}
                >
                  {tab.shortLabel}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ══════════════════════════════════════════════════════
            POLICY 1: SCOPE, MILESTONES & DELIVERY TERMS (/legal/terms)
           ══════════════════════════════════════════════════════ */}
        {currentKey === 'terms' && (
          <article aria-labelledby="policy-title">
            {/* HEADER */}
            <header className="editorial-reveal pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
                  SERVICE & DELIVERY TERMS · VOOO LABS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">
                  EFFECTIVE: 2026 · GOVERNING LAW: MAHARASHTRA, INDIA
                </span>
              </div>

              <h1
                id="policy-title"
                className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.15]"
              >
                <span>Terms of</span>
                <span className="shimmer-text block mt-1">Service.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Standard commercial engagement terms defining our written project blueprint lock,
                structured 3-milestone build schedule, revision boundaries, and client input timelines.
              </p>
            </header>

            {/* CLAUSES ACCORDION / DIVIDER CONTAINER */}
            <div className="editorial-reveal divide-y divide-slate-200/80 border-y border-slate-200/80">
              
              {/* CLAUSE 01 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Written Blueprint & Scope Lock
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Every engagement with {COMPANY.legalName} begins with an agreed written project
                    specification—the Project Blueprint. This document specifies exact pages, user
                    roles, data models, workflows, third-party integrations, and performance benchmarks
                    before engineering commences.
                  </p>
                  <p>
                    Any feature, page, integration, or workflow modification requested outside the
                    approved written blueprint is treated as a separate <strong>Change Request</strong>.
                    Change Requests are estimated and approved in writing with independent timelines and
                    quotations prior to implementation.
                  </p>
                  <div className="p-4 rounded-xl bg-[#F8F9FC] border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-950">Deterministic Pricing Guarantee:</strong> We
                    never bill unapproved hours or surprise overages. If an architectural requirement
                    was not captured in the signed blueprint, it will never be secretly added to an invoice.
                  </div>
                </div>
              </section>

              {/* CLAUSE 02 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Structured 3-Milestone Build & Payment Schedule (40% — 30% — 30%)
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-8">
                  <p>
                    To ensure total commercial transparency and mitigate delivery risk for both parties,
                    all custom engineering projects follow a strict three-phase milestone cadence:
                  </p>

                  <div className="grid grid-cols-1 gap-3.5 my-2">
                    {/* MILESTONE 1 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FC] border border-slate-200/80">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                          Milestone 01 · 40% Kickoff Advance
                        </span>
                        <span className="font-mono text-xs font-semibold text-slate-500">
                          Initial Phase
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-950 text-base mb-1.5">
                        Kickoff & Interactive Live Frontend Prototype
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Work commences upon receipt of the 40% advance. VOOO LABS designs and deploys
                        an interactive <strong>Live Frontend Prototype</strong> on a private staging URL.
                        The client inspects the actual UI, typography, layouts, and interaction ergonomics
                        in the browser before backend wiring begins.
                      </p>
                    </div>

                    {/* MILESTONE 2 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FC] border border-slate-200/80">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-wider">
                          Milestone 02 · 30% Mid-Build
                        </span>
                        <span className="font-mono text-xs font-semibold text-slate-500">
                          Core Engineering
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-950 text-base mb-1.5">
                        Backend Architecture, Database Schemas & Integrations
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upon client sign-off of the frontend prototype, backend services, database
                        schemas with row-level security, administrative control dashboards, and external
                        integrations (WhatsApp Cloud API, payment gateways, transactional email) are engineered.
                      </p>
                    </div>

                    {/* MILESTONE 3 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FC] border border-slate-200/80">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-wider">
                          Milestone 03 · 30% Final Settlement
                        </span>
                        <span className="font-mono text-xs font-semibold text-slate-500">
                          Handover & Launch
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-950 text-base mb-1.5">
                        Full QA Testing, Production Deployment & GitHub Transfer
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Following thorough cross-browser verification and client acceptance on staging,
                        the remaining 30% balance is settled. Upon invoice clearance, VOOO LABS deploys
                        the build to production domains and transfers the private GitHub repository.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CLAUSE 03 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Two-Round Frontend Revision Policy (Anti-Scope-Creep Protection)
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    To maintain engineering velocity and prevent endless iterative loops, each client
                    receives up to <strong>two (2) consolidated revision rounds</strong> following the
                    delivery of the Live Frontend Prototype on our private staging environment.
                  </p>
                  <p>
                    Feedback must be submitted as a consolidated punch-list (covering typography, copy,
                    visual hierarchy, spacing, or component placement).
                  </p>
                  <p>
                    Requests for structural layout reversals or full redesigns after the frontend prototype
                    has been approved and backend construction has begun are treated as out-of-scope Change
                    Requests, billed separately at standard studio engineering rates.
                  </p>
                </div>
              </section>

              {/* CLAUSE 04 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Client Content, Access & Timeline Responsibility
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Project delivery schedules depend directly upon timely inputs from the client. This
                    includes brand assets, product catalogs, copywriting, domain registrar credentials,
                    and third-party API credentials (such as Google Maps or WhatsApp Business API).
                  </p>
                  <p>
                    Delays in receiving required client inputs, feedback, or milestone sign-offs automatically
                    pause and extend the estimated production launch date on a day-for-day basis, without
                    financial penalty or breach of timeline on the part of {COMPANY.legalName}.
                  </p>
                  <p>
                    For official contract notices, terms clarification, or governance queries, contact our legal desk directly at{' '}
                    <a href={`mailto:${COMPANY.legalEmail}`} className="font-semibold text-slate-900 hover:text-blue-600 underline decoration-slate-300">
                      {COMPANY.legalEmail}
                    </a>.
                  </p>
                </div>
              </section>

            </div>
          </article>
        )}

        {/* ══════════════════════════════════════════════════════
            POLICY 2: MILESTONE & REFUND POLICY (/legal/refunds)
           ══════════════════════════════════════════════════════ */}
        {currentKey === 'refunds' && (
          <article aria-labelledby="policy-title">
            {/* HEADER */}
            <header className="editorial-reveal pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
                  COMMERCIAL SETTLEMENT ARCHITECTURE · VOOO LABS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">
                  EFFECTIVE: 2026 · GOVERNING LAW: MAHARASHTRA, INDIA
                </span>
              </div>

              <h1
                id="policy-title"
                className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.15]"
              >
                <span>Refund</span>
                <span className="shimmer-text block mt-1">Policy.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Clear milestone review protocols, non-refundable advance allocations, a strict
                5-business-day sign-off rule, and equitable exit settlements.
              </p>
            </header>

            {/* CLAUSES CONTAINER */}
            <div className="editorial-reveal divide-y divide-slate-200/80 border-y border-slate-200/80">
              
              {/* CLAUSE 01 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Non-Refundable 40% Kickoff & Frontend Advance
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Custom web platforms and software engineering require dedicated architectural planning,
                    technical specification writing, and manual frontend implementation from day one.
                  </p>
                  <p>
                    Once project kickoff has begun or the <strong>Live Frontend Prototype</strong> has been
                    initiated/delivered on our private staging environment, the{' '}
                    <strong>40% kickoff advance is strictly non-refundable</strong>. This payment compensates
                    for reserved developer allocation, proprietary design architecture, and custom code already
                    authored.
                  </p>
                </div>
              </section>

              {/* CLAUSE 02 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    5-Business-Day Milestone Sign-Off Rule
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Whenever {COMPANY.legalName} delivers a milestone (Live Frontend Prototype, Backend Module,
                    or Final Staging Build) for client review, the client has{' '}
                    <strong>five (5) business days</strong> to review the build and provide consolidated written
                    feedback.
                  </p>
                  <p>
                    If no written feedback, change requests, or formal communications are received within
                    five (5) business days of milestone delivery, the deliverable is deemed formally accepted
                    and approved. This allows the studio to advance developer scheduling and progress toward
                    subsequent milestones without open-ended delays.
                  </p>
                  <div className="p-4 rounded-xl bg-[#F8F9FC] border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-950">Active Communication Notice:</strong> If your team
                    needs extra time for internal stakeholder review, notifying us in writing within the 5-day
                    window will pause the countdown by mutual consent.
                  </div>
                </div>
              </section>

              {/* CLAUSE 03 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Mid-Project Cancellation & Completed Work Settlement
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Either party may pause or terminate an active project upon written notice. If the client
                    elects to cancel or pause the project mid-way:
                  </p>
                  <ul className="list-disc list-outside space-y-2 pl-5 text-slate-700 text-xs sm:text-sm">
                    <li>All payments previously made for completed and approved milestones are non-refundable.</li>
                    <li>
                      Any work completed beyond the last paid milestone (e.g. partial backend services or
                      staging configurations) will be calculated at actual pro-rata studio rates and must be
                      settled before partial source files or design exports are provided.
                    </li>
                    <li>
                      Upon settlement of outstanding balances, the client receives all source assets and
                      code completed up to that juncture.
                    </li>
                  </ul>
                </div>
              </section>

              {/* CLAUSE 04 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Studio-Initiated Cancellation Protection
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    In the exceptional event that {COMPANY.legalName} is unable to initiate or complete an
                    agreed scope due to studio capacity constraints, acute technical incompatibilities, or
                    unforeseen operational events:
                  </p>
                  <p>
                    Any unearned portion of advance fees for uninitiated or uncompleted milestones will be
                    refunded transparently to the client&apos;s originating bank account within{' '}
                    <strong>ten (10) business days</strong>. Any completed code or artifacts will remain with
                    the client.
                  </p>
                  <p>
                    For billing reconciliations, invoice queries, or milestone settlement documentation, contact our accounts desk directly at{' '}
                    <a href={`mailto:${COMPANY.billingEmail}`} className="font-semibold text-slate-900 hover:text-blue-600 underline decoration-slate-300">
                      {COMPANY.billingEmail}
                    </a>.
                  </p>
                </div>
              </section>

            </div>
          </article>
        )}

        {/* ══════════════════════════════════════════════════════
            POLICY 3: 100% CODE & IP OWNERSHIP (/legal/ip-ownership)
           ══════════════════════════════════════════════════════ */}
        {currentKey === 'ip-ownership' && (
          <article aria-labelledby="policy-title">
            {/* HEADER */}
            <header className="editorial-reveal pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
                  INTELLECTUAL PROPERTY GUARANTEE · VOOO LABS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">
                  EFFECTIVE: 2026 · GOVERNING LAW: MAHARASHTRA, INDIA
                </span>
              </div>

              <h1
                id="policy-title"
                className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.15]"
              >
                <span>Code</span>
                <span className="shimmer-text block mt-1">Ownership.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Unconditional intellectual property transfer, zero vendor lock-in, direct infrastructure
                billing at actuals, and full private GitHub repository handover.
              </p>
            </header>

            {/* CLAUSES CONTAINER */}
            <div className="editorial-reveal divide-y divide-slate-200/80 border-y border-slate-200/80">
              
              {/* CLAUSE 01 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Staging Protection Prior to Final Settlement
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    During the design, development, and active staging demonstration phases, all custom frontend
                    components, backend microservices, database schemas, and proprietary design architecture
                    remain the intellectual property of {COMPANY.legalName}, hosted on private studio infrastructure.
                  </p>
                  <p>
                    Clients have full access to inspect and test the system via private staging URLs throughout
                    development, while production deployment and root repository transfer occur at final settlement.
                  </p>
                </div>
              </section>

              {/* CLAUSE 02 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Full 100% Source Code Transfer Upon Final Payment
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    Immediately upon clearance of the Milestone 03 final invoice (100% project settlement),{' '}
                    {COMPANY.legalName} transfers <strong>complete, unrestricted, and irrevocable legal ownership</strong>{' '}
                    of all custom source code, database migration scripts, configuration files, and design assets
                    to your registered entity.
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FC] border border-slate-200/80 space-y-2">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      What Handover Includes:
                    </span>
                    <ul className="list-disc list-outside space-y-1.5 pl-5 text-xs sm:text-sm text-slate-700">
                      <li>
                        <strong>Private GitHub Repository Transfer:</strong> Full commit history, automated CI/CD workflows,
                        and production Dockerfiles/build scripts.
                      </li>
                      <li>
                        <strong>Database Schemas & Migrations:</strong> Seed data, security rules, and documented entity
                        relationship diagrams.
                      </li>
                      <li>
                        <strong>Zero Licensing Retainers:</strong> Zero proprietary runtime royalties, zero recurring code
                        fees, and zero lock-in to our studio.
                      </li>
                      <li>
                        <strong>Freedom to Modify & Host:</strong> Your in-house developers or external agencies can edit,
                        extend, or host the code anywhere in perpetuity.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CLAUSE 03 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Direct Client Ownership of Domain, Cloud & Third-Party APIs (At Actuals)
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    We believe businesses must control their own digital foundation. Your domain name (via
                    Cloudflare, GoDaddy, Namecheap), cloud hosting (Vercel, AWS, Supabase, Firebase), and
                    transactional API accounts (WhatsApp Cloud API, Resend, Google Cloud Console) are registered
                    directly under your own company name and payment method.
                  </p>
                  <p>
                    Infrastructure costs are billed directly to your corporate card by the respective providers at{' '}
                    <strong>actual wholesale costs</strong>. VOOO LABS adds zero markup, zero intermediary fee,
                    and zero hosting ransom.
                  </p>
                </div>
              </section>

              {/* CLAUSE 04 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Standard Open-Source Dependencies
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    All systems engineered by {COMPANY.legalName} build upon trusted, enterprise-grade open-source
                    technologies (such as React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and GSAP).
                  </p>
                  <p>
                    These foundational libraries remain governed by their respective standard MIT, Apache 2.0, or
                    BSD open-source licenses. This guarantees maximum flexibility, enterprise security auditing,
                    and seamless portability across any modern cloud environment.
                  </p>
                </div>
              </section>

            </div>
          </article>
        )}

        {/* ══════════════════════════════════════════════════════
            POLICY 4: DATA PRIVACY, BUSINESS NDA & JURISDICTION (/legal/privacy)
           ══════════════════════════════════════════════════════ */}
        {currentKey === 'privacy' && (
          <article aria-labelledby="policy-title">
            {/* HEADER */}
            <header className="editorial-reveal pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
                  CONFIDENTIALITY & DATA PROTECTION · VOOO LABS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">
                  EFFECTIVE: 2026 · GOVERNING LAW: MAHARASHTRA, INDIA
                </span>
              </div>

              <h1
                id="policy-title"
                className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.15]"
              >
                <span>Privacy</span>
                <span className="shimmer-text block mt-1">Policy.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Mutual business confidentiality, NDA commitments, minimal DPDP-compliant visitor data
                collection, credential rotation, and legal jurisdiction.
              </p>
            </header>

            {/* CLAUSES CONTAINER */}
            <div className="editorial-reveal divide-y divide-slate-200/80 border-y border-slate-200/80">
              
              {/* CLAUSE 01 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Strict Business Confidentiality & Mutual NDA Protection
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    All customer lists, pricing logic, internal operating workflows, business specifications,
                    trade data, and intellectual property shared with {COMPANY.legalName} during discovery,
                    estimation, or active engineering are treated as strictly confidential.
                  </p>
                  <p>
                    We routinely execute mutual Non-Disclosure Agreements (NDAs) before reviewing sensitive
                    corporate assets. Client records and source data are never shared, traded, publicized, or
                    monetized with any third party.
                  </p>
                </div>
              </section>

              {/* CLAUSE 02 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Minimal Inquiry Data Collection (Indian DPDP Alignment)
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    On our studio website (<code>vooolabs.in</code>), we collect only information that you voluntarily
                    provide through our Project Blueprint Configurator or direct WhatsApp inquiry channel: your name,
                    organization name, contact telephone/WhatsApp, and project scope requirements.
                  </p>
                  <p>
                    This information is collected exclusively to prepare custom proposals and communicate regarding
                    your engineering request, fully aligned with India&apos;s Digital Personal Data Protection (DPDP) Act.
                  </p>
                  <div className="p-4 rounded-xl bg-[#F8F9FC] border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-950">Zero Invasive Trackers:</strong> We do not run third-party
                    advertising trackers, invasive marketing cookies, or cross-site user fingerprinting on this site.
                  </div>
                </div>
              </section>

              {/* CLAUSE 03 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Credential Hygiene & Post-Handover Access Control
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    During system configuration, any temporary API keys, domain DNS access, or cloud service credentials
                    shared with our team are handled strictly through encrypted channels exclusively for setup and deployment.
                  </p>
                  <p>
                    Upon production launch and repository handover, VOOO LABS provides a standard credential rotation
                    runbook and revokes temporary studio access, ensuring that your organization retains sole administrative
                    control over all production systems.
                  </p>
                </div>
              </section>

              {/* CLAUSE 04 */}
              <section className="py-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Third-Party Infrastructure Disclaimer & Legal Jurisdiction
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-8">
                  <p>
                    {COMPANY.legalName} constructs digital systems leveraging leading cloud infrastructure providers
                    (such as Google Cloud, AWS, Vercel, Meta/WhatsApp, and standard domain registrars). We are not liable
                    for upstream service disruptions, provider API rate limits, third-party pricing revisions, or network
                    outages outside our direct engineering control.
                  </p>
                  <p>
                    All proposals, engineering statements, and commercial engagements with {COMPANY.legalName} are
                    governed by and construed in accordance with the laws of India. Any legal proceedings or disputes
                    arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in{' '}
                    <strong>{LOCATION.region}, India</strong>.
                  </p>
                  <p>
                    For privacy inquiries, data subject rights, mutual NDA requests, or compliance notices under the DPDP Act, contact our Grievance Officer & Legal Counsel directly at{' '}
                    <a href={`mailto:${COMPANY.legalEmail}`} className="font-semibold text-slate-900 hover:text-blue-600 underline decoration-slate-300">
                      {COMPANY.legalEmail}
                    </a>.
                  </p>
                </div>
              </section>

            </div>
          </article>
        )}

        {/* ══════════════════════════════════════════════════════
            CALM CLOSING CTA BLOCK (EDITORIAL / ZERO-HYPE)
           ══════════════════════════════════════════════════════ */}
        <div className="editorial-reveal mt-16 pt-10 border-t border-slate-200/80">
          <div className="rounded-2xl bg-[#F8F9FC] border border-slate-200/80 p-8 sm:p-10 relative overflow-hidden">
            <div
              className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              aria-hidden="true"
            />
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                TRANSPARENT COLLABORATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
                Have Questions About Scope or Ownership?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Every project blueprint is accompanied by a transparent proposal and mutual NDA before work
                begins. We are always happy to clarify any clause, milestone, or technical requirement before you commit.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <LiquidButton
                  to="/contact"
                  variant="primary"
                  rounded="pill"
                  size="md"
                >
                  Configure Project Blueprint
                </LiquidButton>
                <LiquidButton
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  rounded="pill"
                  size="md"
                >
                  Discuss on WhatsApp
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
