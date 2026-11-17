import React from 'react';
import { motion } from 'framer-motion';
import { Server, Key, Code2, SlidersHorizontal } from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1] as const;

interface DifferentiatorItem {
  index: string;
  icon: React.ElementType;
  titleBold: string;
  titleNormal?: string;
  titleAccent?: string;
  accentColorClass?: string;
  descriptionPrefix: string;
  descriptionHighlight: string;
  descriptionSuffix: string;
  accent: string;
}

const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    index: '01',
    icon: Server,
    titleBold: 'End-to-End',
    titleNormal: 'Launch Setup',
    descriptionPrefix: 'Domain registration, DNS routing, SSL, and ',
    descriptionHighlight: '24/7 cloud hosting',
    descriptionSuffix: ' configured completely before handover.',
    accent: '#4285F4',
  },
  {
    index: '02',
    icon: Key,
    titleBold: 'One-Time Build,',
    titleAccent: '₹0 Per-User Rent',
    accentColorClass: 'text-emerald-600',
    descriptionPrefix: 'No recurring monthly seat fees per employee; your custom system runs with ',
    descriptionHighlight: 'zero subscription lock-in',
    descriptionSuffix: '.',
    accent: '#10B981',
  },
  {
    index: '03',
    icon: Code2,
    titleBold: 'Full Repository',
    titleNormal: '& Data Handover',
    descriptionPrefix: '',
    descriptionHighlight: 'Complete source code',
    descriptionSuffix: ' transferred directly to your own GitHub and cloud accounts on day one.',
    accent: '#7C3AED',
  },
  {
    index: '04',
    icon: SlidersHorizontal,
    titleBold: 'Tailored for',
    titleAccent: 'Real Operations',
    accentColorClass: 'text-orange-600',
    descriptionPrefix: '',
    descriptionHighlight: 'Direct WhatsApp lead routing',
    descriptionSuffix: ', custom GST billing, and AI-ready search structure built around how you work.',
    accent: '#F97316',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING,
    },
  },
};

export default function Slide2_ValueStrip() {
  return (
    <section 
      className="bg-[#F8F9FC] py-20 sm:py-24 px-6 border-b border-slate-200/80 relative select-none overflow-hidden"
      aria-label="Why Businesses Switch to VOOO LABS"
    >
      {/* TOP 2PX STUDIO BLUE PROGRESS LINE SCALING IN ON VIEWPORT ENTER */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: EASING }}
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 origin-left z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* HEADER WITH DELIBERATE BOLD / LIGHT CONTRAST */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASING }}
          className="text-left sm:text-center mb-14 sm:mb-16"
        >
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2.5">
            WHY BUSINESSES SWITCH TO VOOO LABS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            <span className="font-light text-slate-500">Built Around Your</span>{' '}
            <span className="font-extrabold text-slate-950">Workflow.</span>{' '}
            <br className="hidden sm:inline" />
            <span className="font-light text-slate-400">100% Owned by</span>{' '}
            <span className="font-extrabold text-blue-600">You.</span>
          </h2>
        </motion.div>

        {/* 4 OPEN TYPOGRAPHIC COLUMNS (NO BOX CARDS, CRISP 1PX DIVIDERS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 border-y border-slate-200/90"
        >
          {DIFFERENTIATORS.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={item.index} 
                variants={itemVariants}
                className="py-8 sm:px-6 lg:px-8 flex flex-col justify-start text-left group transition-colors"
              >
                {/* NUMERAL + ICON HEADER */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                    {item.index}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                  >
                    <IconComp size={16} />
                  </div>
                </div>

                {/* TITLE WITH DELIBERATE BOLD / NORMAL / COLOR ACCENT */}
                <h3 className="text-base sm:text-lg mb-2.5 leading-snug tracking-tight">
                  <span className="font-extrabold text-slate-950">{item.titleBold}</span>{' '}
                  {item.titleNormal && (
                    <span className="font-normal text-slate-700">{item.titleNormal}</span>
                  )}
                  {item.titleAccent && (
                    <span className={`font-extrabold ${item.accentColorClass || 'text-blue-600'}`}>{item.titleAccent}</span>
                  )}
                </h3>

                {/* DESCRIPTION WITH SUBTLE EMPHASIS */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.descriptionPrefix}
                  <span className="font-medium text-slate-900">{item.descriptionHighlight}</span>
                  {item.descriptionSuffix}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
