import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Minus 
} from 'lucide-react';
import { COMPANY } from '../content/company';
import LiquidButton from '../components/shared/LiquidButton';
import { DuotoneCheckIcon } from '../components/shared/StudioIcons';
import WebAppPortalVisualizer from '../components/services/WebAppPortalVisualizer';

const EASING = [0.22, 1, 0.36, 1] as const;

const CAPABILITIES = [
  {
    num: '01',
    title: 'Zero-Download Browser & Home-Screen Access',
    desc: 'Opens immediately from a link on Android, iPhone, or laptop—no Play Store hurdles.',
  },
  {
    num: '02',
    title: '1-Tap OTP & Role-Based Authentication',
    desc: 'Frictionless logins with strict access boundaries for users, staff, and administrators.',
  },
  {
    num: '03',
    title: 'Self-Service Bookings & Live Status Tracking',
    desc: 'Replace repetitive status phone calls with self-service actions and real-time progress.',
  },
  {
    num: '04',
    title: 'Organized Receipts, Reports & Resource Vault',
    desc: "Keep invoices, fee receipts, diagnostic reports, and study modules neatly inside each user's login.",
  },
  {
    num: '05',
    title: 'Automated WhatsApp & Email Notifications',
    desc: 'Trigger instant confirmations and reminders automatically whenever a status changes.',
  },
  {
    num: '06',
    title: 'Cloud Database & 100% Source Code Ownership',
    desc: 'Production database, custom domain setup, and complete repository ownership in your name.',
  },
];

const COMPARISONS = [
  {
    dimension: 'Customer Onboarding',
    traditional: 'Forcing users to download a 50MB Play Store app or fill scattered forms.',
    webApp: 'Users open your web app in 1 tap from WhatsApp or browser—zero friction.',
  },
  {
    dimension: 'Feature Updates',
    traditional: 'Waiting days for app store review approval with users stuck on outdated versions.',
    webApp: 'Push improvements once and every user receives the live version instantaneously.',
  },
  {
    dimension: 'Daily Coordination',
    traditional: 'Scattered PDFs, missed queries, and manual tracking buried across WhatsApp chats.',
    webApp: "Every booking, receipt, and status update lives cleanly inside the user's login.",
  },
  {
    dimension: 'Platform Ownership',
    traditional: 'Rigid off-the-shelf SaaS subscriptions with unpredictable per-user monthly rent.',
    webApp: 'Custom architecture shaped around your exact workflow—100% owned by your company.',
  },
];

const SECTORS = [
  {
    title: 'Coaching Classes & Academies',
    desc: 'Student portals, batch timetables, study materials, test updates, and fee receipt records.',
  },
  {
    title: 'Clinics, Labs & Wellness Centers',
    desc: 'Online slot booking, digital report downloads, prescription history, and visit reminders.',
  },
  {
    title: 'Service & Repair Businesses',
    desc: 'Customer service request portals, live job status tracking, and digital invoice access.',
  },
  {
    title: 'Clubs, Communities & Memberships',
    desc: 'Member logins, event registrations, digital ID/passes, and announcement feeds.',
  },
];

export default function WebAppsServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss a Custom Web App or Portal for my business.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: ASYMMETRIC EDITORIAL HERO + GSAP VISUALIZER
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-16 bg-white border-b border-slate-200/80 relative overflow-hidden text-left"
        aria-label="02 Custom Web Apps and Portals Overview"
      >
        {/* SUBTLE AMBIENT STUDIO GLOW */}
        <div 
          className="absolute top-0 left-1/3 w-[550px] h-[550px] rounded-full bg-purple-500/[0.04] blur-[140px] pointer-events-none z-0" 
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
            
            {/* LEFT COLUMN (lg:col-span-6): EDITORIAL HEADLINE & VALUE */}
            <div className="lg:col-span-6">
              {/* STUDIO PHILOSOPHY TAG */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04, ease: EASING }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-tight mb-3 select-none"
              >
                <span className="font-bold text-slate-950">Runs anywhere,</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                <span className="font-medium text-slate-600">zero app store</span>
                <span className="font-extrabold text-blue-600">friction.</span>
              </motion.div>

              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: EASING }}
              >
                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
                  02 / CUSTOM WEB APPS & PORTALS
                </span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-2xl"
              >
                <span>Custom Web Apps Your Users Open in One Tap—</span>
                <span className="shimmer-text block mt-1">No App Store Friction.</span>
              </motion.h1>

              {/* TIGHT SCANNABLE SUBHEADLINE */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
                className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
              >
                Modern businesses don't need bulky Play Store apps that customers hesitate to download. We engineer fast web apps where clients log in instantly, while your team runs operations from one dashboard.
              </motion.p>

              {/* ACTION ROW */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <LiquidButton
                  to="/contact?service=web-apps"
                  variant="primary"
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
                  variant="whatsapp"
                  rounded="pill"
                  size="lg"
                  magnetic={true}
                >
                  <span>Discuss on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </LiquidButton>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (lg:col-span-6): GSAP WEB APP PORTAL VISUALIZER */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
              <WebAppPortalVisualizer />
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: 6-POINT USER-FIRST ARCHITECTURE GRID
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="What We Build Into Every Custom Web App"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            USER-FIRST ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight max-w-2xl">
            Engineered for Effortless User Adoption and Complete Business Control.
          </h2>

          {/* 6-ITEM 2-COLUMN OPEN HAIRLINE GRID (1 BOLD TITLE + 1 CRISP SENTENCE) */}
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
        aria-label="Why Businesses Choose Custom Web Apps"
      >
        {/* AMBIENT GLOW BACKDROP */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2.5">
            WHY BUSINESSES CHOOSE WEB APPS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            All the Power of a Dedicated App—Without App Store Bottlenecks.
          </h2>

          {/* 4 CRISP HAIRLINE COMPARISON ROWS */}
          <div className="mt-10 border-t border-white/15 divide-y divide-white/15">
            {/* TABLE HEADER */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4">Native Store Apps / WhatsApp Chaos</div>
              <div className="md:col-span-5 text-blue-400 font-bold">VOOO LABS Custom Web App</div>
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
                  <span>{row.webApp}</span>
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
        aria-label="Proven Custom Web App Formats"
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
            PROVEN WEB APP FORMATS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Engineered for High-Adoption Commercial Sectors.
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
              Need deeper internal operations, inventory, or multi-branch workflow software for your internal team?
            </p>
            <Link 
              to="/services/business-software" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>Explore 03 Custom Business Software</span>
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
        aria-label="Start Your Custom Web App Project"
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
              <span className="font-bold text-white">Modern cloud systems,</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-300">zero 30%</span>
              <span className="font-extrabold text-blue-400">fees.</span>
            </div>

            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
              NEXT STEPS FOR YOUR BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Ready to Launch a Custom Web App <br className="hidden sm:inline" />
              <span className="shimmer-text">Built Around Your Users?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <LiquidButton
              to="/contact?service=web-apps"
              variant="white"
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
