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
import SearchPlacementVisualizer from '../components/seo/SearchPlacementVisualizer';

const EASING = [0.22, 1, 0.36, 1] as const;

const CAPABILITIES = [
  {
    num: '01',
    title: 'Technical SEO Code Foundation',
    desc: 'Clean semantic HTML, sitemaps, and edge-fast mobile delivery built directly into your codebase.',
  },
  {
    num: '02',
    title: 'AI Search & Schema Readiness (AEO)',
    desc: 'Structured JSON-LD schema so ChatGPT, Google AI Overviews, and Perplexity recommend your business.',
  },
  {
    num: '03',
    title: 'Google Maps & Local Authority',
    desc: 'Complete Google Business Profile optimization to capture high-intent regional and local searches.',
  },
  {
    num: '04',
    title: 'High-Intent Service Pages',
    desc: 'Conversion-focused pages built around specific buyer searches rather than generic keyword blogs.',
  },
  {
    num: '05',
    title: 'Targeted Search & AI Ads',
    desc: 'Precision ad execution paired with fast landing pages and direct WhatsApp/call attribution.',
  },
  {
    num: '06',
    title: '100% Account & Data Ownership',
    desc: 'Full ownership of your Search Console, Analytics, Business Profile, and ad accounts in your name.',
  },
];

const COMPARISONS = [
  {
    dimension: 'Foundation',
    traditional: 'Pasting keywords onto slow, broken templates with brittle plugins.',
    vooo: 'Technical SEO and AI schema engineered directly into fast, clean code.',
  },
  {
    dimension: 'AI Search Readiness',
    traditional: 'Ignoring how modern buyers now ask ChatGPT, Perplexity, and Google AI.',
    vooo: 'Structured entity data built for both search engines and AI answer engines.',
  },
  {
    dimension: 'Lead Capture',
    traditional: 'Sending paid clicks to cluttered homepages with leaky, tedious forms.',
    vooo: 'Focused landing flows with 1-tap WhatsApp, phone, and source attribution.',
  },
  {
    dimension: 'Account Control',
    traditional: 'Agencies holding your ad, pixel, or analytics accounts hostage.',
    vooo: '100% ownership of every profile, pixel, and campaign asset in your company name.',
  },
];

const SECTORS = [
  {
    title: 'B2B Manufacturers & Suppliers',
    desc: 'Capture industrial product searches, dealer inquiries, and ChatGPT vendor recommendations.',
  },
  {
    title: 'Hospitals, Clinics & Specialists',
    desc: 'Dominate local Google Maps searches and symptom/treatment queries with direct appointment routing.',
  },
  {
    title: 'Coaching Institutes & Colleges',
    desc: 'Rank for course and admission searches across Google and AI assistants during peak intake seasons.',
  },
  {
    title: 'Real Estate & Commercial Projects',
    desc: 'High-intent location search visibility and targeted ad landing pages for qualified site visits.',
  },
];

export default function SeoAiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello VOOO LABS, I want to discuss Google SEO, AI Search & Ads visibility for our business.'
  );

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 select-none">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: ASYMMETRIC EDITORIAL HERO + GSAP VISUALIZER
         ══════════════════════════════════════════════════════ */}
      <section 
        className="pt-32 sm:pt-36 pb-16 bg-white border-b border-slate-200/80 relative overflow-hidden text-left"
        aria-label="04 Google SEO, AI Search and Ads Overview"
      >
        {/* SUBTLE AMBIENT STUDIO GLOW */}
        <div 
          className="absolute top-0 left-1/3 w-[550px] h-[550px] rounded-full bg-orange-500/[0.04] blur-[140px] pointer-events-none z-0" 
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
                  04 / GOOGLE SEO, AI SEARCH & ADS
                </span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] max-w-2xl"
              >
                <span>Get Found and Recommended</span>
                <span className="shimmer-text block mt-1">Across Google, Maps & AI.</span>
              </motion.h1>

              {/* TIGHT SCANNABLE SUBHEADLINE */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
                className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
              >
                Modern buyers search across Google, check Maps proximity, and ask ChatGPT who to trust. We engineer technical SEO, AI readiness, and high-intent ads that bring direct inquiries.
              </motion.p>

              {/* ACTION ROW */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: EASING }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <LiquidButton
                  to="/contact?service=seo-ai"
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

            {/* RIGHT COLUMN (lg:col-span-6): GSAP INTERACTIVE PLACEMENT VISUALIZER */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
              <SearchPlacementVisualizer />
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2: 6-POINT VISIBILITY ARCHITECTURE GRID
         ══════════════════════════════════════════════════════ */}
      <section 
        className="py-16 sm:py-20 bg-white text-left"
        aria-label="Core Search and AI Visibility Capabilities"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            SEARCH & AI VISIBILITY ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight max-w-2xl">
            Engineered for Where Buyers Actually Search Today.
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
        aria-label="Why Technical Visibility Wins"
      >
        {/* AMBIENT GLOW BACKDROP */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2.5">
            WHY TECHNICAL VISIBILITY WINS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Focus on Real Buyer Inquiries—Not Vanity Click Reports.
          </h2>

          {/* 4 CRISP HAIRLINE COMPARISON ROWS */}
          <div className="mt-10 border-t border-white/15 divide-y divide-white/15">
            {/* TABLE HEADER */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4">Vanity Traffic Agencies</div>
              <div className="md:col-span-5 text-orange-400 font-bold">VOOO LABS Search & AI Engineering</div>
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
                  <Check size={16} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>{row.vooo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4: HIGH-FIT SECTORS + FULL-CIRCLE BRIDGE
         ══════════════════════════════════════════════════════ */}
      <section 
        className="bg-[#F8F9FC] border-t border-slate-200/80 py-16 sm:py-20 select-none text-left relative overflow-hidden"
        aria-label="Built for High-Intent Categories"
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
            BUILT FOR HIGH-INTENT CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Engineered for High-Intent Regional and Commercial Sectors.
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

          {/* FULL-CIRCLE NEXT-SYSTEM BRIDGE */}
          <div className="mt-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/80">
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Need a fast, conversion-engineered website foundation before scaling your SEO and AI visibility?
            </p>
            <Link 
              to="/services/websites" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>Explore 01 Business Websites</span>
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
        aria-label="Start Your Search and AI Visibility Project"
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
              Ready to Make Your Business Easy to Find <br className="hidden sm:inline" />
              <span className="shimmer-text">on Google and AI Search?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <LiquidButton
              to="/contact?service=seo-ai"
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
