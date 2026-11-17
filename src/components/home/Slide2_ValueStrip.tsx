import React from 'react';
import { motion } from 'framer-motion';
import { Server, SlidersHorizontal, Code2, UserCheck } from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1] as const;

interface DifferentiatorItem {
  index: string;
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
}

const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    index: '01',
    icon: Server,
    title: 'End-to-End Technical Setup',
    description: 'Domain registration, DNS routing, SSL security, and cloud deployment configured cleanly before handover.',
    accent: '#4285F4',
  },
  {
    index: '02',
    icon: SlidersHorizontal,
    title: 'Built Around Your Workflow',
    description: 'Custom architecture shaped around how your team actually operates—never forced into rigid templates.',
    accent: '#10B981',
  },
  {
    index: '03',
    icon: Code2,
    title: 'Full Repository & Code Handover',
    description: 'Complete source code transferred directly to your own GitHub and cloud accounts with zero vendor lock-in.',
    accent: '#7C3AED',
  },
  {
    index: '04',
    icon: UserCheck,
    title: 'Direct Lead Architect Access',
    description: 'Work directly with the engineer building your system—clear communication from initial scope to launch.',
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
        {/* HEADER */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Built Around Your Workflow. <br className="hidden sm:inline" />
            <span className="text-blue-600">Owned by You.</span>
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

                {/* TITLE */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug tracking-tight">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
