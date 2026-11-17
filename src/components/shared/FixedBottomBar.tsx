import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { COMPANY, SOCIALS, whatsappLink } from '../../content/company';

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-4 sm:bottom-5 inset-x-0 z-[9000] flex md:hidden justify-center px-3 sm:px-4 pointer-events-none">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-3 sm:gap-4 rounded-full border border-white/10 bg-[#080B14]/90 px-4 py-2 sm:py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl select-none whitespace-nowrap max-w-[95vw] overflow-x-auto no-scrollbar text-white"
      >
        {/* BRAND STATUS & LOGO */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </div>
          <span className="font-crazyblocks font-bold text-xs sm:text-sm text-white tracking-wider">VOOO LABS</span>
        </div>

        {/* DIVIDER */}
        <div className="w-[1px] h-3.5 bg-white/10 flex-shrink-0" />

        {/* EMAIL */}
        <a
          href={`mailto:${COMPANY.email}`}
          className="font-sans text-[11px] sm:text-xs text-slate-300 hover:text-blue-400 transition-colors font-medium"
        >
          {COMPANY.email}
        </a>

        {/* DIVIDER */}
        <div className="w-[1px] h-3.5 bg-white/10 flex-shrink-0" />

        {/* SOCIALS */}
        <div className="flex items-center gap-1.5">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] active:scale-95 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={13} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-white/25 hover:bg-white/[0.08] active:scale-95 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={13} />
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-white/25 hover:bg-white/[0.08] active:scale-95 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={13} />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-[1px] h-3.5 bg-white/10 flex-shrink-0" />

        {/* PRIMARY OUTCOME CTA */}
        <Link
          to="/contact"
          className="btn-liquid-base btn-liquid-primary rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white px-4 py-1.5 font-medium text-[11px] sm:text-xs inline-flex items-center gap-1.5"
        >
          <span>See project cost</span>
          <ArrowRight size={12} />
        </Link>
      </motion.div>
    </div>
  );
}
