import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY } from '../../content/company';
import { useScrollChoreography } from '../../hooks/useScrollChoreography';

interface PageContextSpec {
  label: string;
  waLabel: string;
  waText: string;
  selectedService?: string;
}

function getPageContext(pathname: string): PageContextSpec {
  if (pathname === '/services/websites') {
    return {
      label: '01 · Business Websites',
      waLabel: 'Discuss Website',
      waText: 'Hi Vrushabh, I want to discuss building a high-speed business website with VOOO LABS.',
      selectedService: 'Business Websites',
    };
  }
  if (pathname === '/services/web-apps') {
    return {
      label: '02 · Custom Web Apps',
      waLabel: 'Discuss Web App',
      waText: 'Hi Vrushabh, I want to discuss building a custom web app or client portal with VOOO LABS.',
      selectedService: 'Custom Web Apps & Portals',
    };
  }
  if (pathname === '/services/business-software') {
    return {
      label: '03 · Business Software',
      waLabel: 'Discuss Software',
      waText: 'Hi Vrushabh, I want to discuss custom business software for internal operations with VOOO LABS.',
      selectedService: 'Custom Business Software',
    };
  }
  if (pathname === '/services') {
    return {
      label: 'Core Systems Overview',
      waLabel: 'Discuss Architecture',
      waText: 'Hi Vrushabh, I would like to review the 4 Core Systems for my business.',
      selectedService: 'Business Websites',
    };
  }
  if (pathname === '/seo-ai/google-seo') {
    return {
      label: '04.1 · Technical Google SEO',
      waLabel: 'Ask About SEO',
      waText: 'Hi Vrushabh, I want to discuss technical Google SEO and crawl architecture for my business.',
      selectedService: 'Google SEO, AI Search & Ads',
    };
  }
  if (pathname === '/seo-ai/ai-search') {
    return {
      label: '04.2 · ChatGPT & AI Search',
      waLabel: 'Ask About AEO',
      waText: 'Hi Vrushabh, I want to discuss AI Search optimization (AEO), JSON-LD schema, and llms.txt.',
      selectedService: 'Google SEO, AI Search & Ads',
    };
  }
  if (pathname === '/seo-ai/google-maps') {
    return {
      label: '04.3 · Google Maps Local',
      waLabel: 'Discuss Maps',
      waText: 'Hi Vrushabh, I want to discuss Google Maps 3-Pack and local presence optimization.',
      selectedService: 'Google SEO, AI Search & Ads',
    };
  }
  if (pathname === '/seo-ai/google-ads') {
    return {
      label: '04.4 · Targeted Google Ads',
      waLabel: 'Discuss Ads',
      waText: 'Hi Vrushabh, I want to discuss targeted Google Search Ads and attributed landing pages.',
      selectedService: 'Google SEO, AI Search & Ads',
    };
  }
  if (pathname === '/seo-ai') {
    return {
      label: '04 · Google SEO, AI & Ads',
      waLabel: 'Ask About Discovery',
      waText: 'Hi Vrushabh, I want to discuss search visibility, AI engines, and Google Ads with VOOO LABS.',
      selectedService: 'Google SEO, AI Search & Ads',
    };
  }
  if (pathname === '/about') {
    return {
      label: 'Studio Manifesto · Vrushabh Shinde',
      waLabel: 'Chat with Founder',
      waText: 'Hi Vrushabh, I read your studio manifesto and would like to connect directly.',
    };
  }
  if (pathname === '/contact') {
    return {
      label: 'Live Project Blueprint',
      waLabel: 'Direct WhatsApp',
      waText: 'Hi Vrushabh, I am configuring a project blueprint and would like to connect on WhatsApp.',
    };
  }
  if (pathname.startsWith('/legal')) {
    return {
      label: '100% Client Code Ownership & IP',
      waLabel: 'Legal Inquiries',
      waText: 'Hi Vrushabh, I have a question regarding code ownership and contract terms.',
    };
  }
  return {
    label: 'VOOO LABS · Engineering Studio',
    waLabel: 'Chat on WhatsApp',
    waText: 'Hi VOOO LABS, I would like to discuss building an engineering-first website or software system.',
  };
}

export default function FixedBottomBar() {
  const location = useLocation();
  const { showBottomDock, scrollProgress } = useScrollChoreography();

  const ctx = getPageContext(location.pathname);
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(ctx.waText)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 sm:bottom-5 inset-x-0 z-[9000] flex justify-center px-3 sm:px-4 pointer-events-none select-none">
      <motion.div
        initial={{ y: 96, opacity: 0 }}
        animate={{
          y: showBottomDock ? 0 : 96,
          opacity: showBottomDock ? 1 : 0,
        }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: showBottomDock ? 'auto' : 'none' }}
        className="relative pointer-events-auto flex items-center justify-between gap-3 sm:gap-5 rounded-full border border-slate-200/90 bg-white/95 px-3.5 sm:px-5 py-2 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl max-w-[95vw] sm:max-w-2xl overflow-hidden"
      >
        {/* 2PX LIVE SCROLL PROGRESS BEAM ALONG TOP EDGE */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#4285F4] to-[#7C3AED] transition-all duration-150 ease-out origin-left"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* LEFT: DYNAMIC PAGE CONTEXT & TOP TRIGGER */}
        <div className="flex items-center gap-2.5 min-w-0">
          {/* STUDIO BLUE STATUS DOT */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4285F4]" />
          </div>

          {/* DYNAMIC JETBRAINS MONO PAGE LABEL */}
          <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-800 truncate max-w-[130px] sm:max-w-[220px]">
            {ctx.label}
          </span>

          {/* BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top of page"
            className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-slate-400 hover:text-blue-600 transition-colors cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-slate-100/70"
          >
            <ArrowUp size={11} />
            <span>Top</span>
          </button>
        </div>

        {/* RIGHT: CONTEXT-AWARE WHATSAPP + BLUEPRINT CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* CONTEXT-AWARE WHATSAPP PILL */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Discuss on WhatsApp: ${ctx.waLabel}`}
            className="hidden md:inline-flex items-center gap-1.5 font-sans font-medium text-xs text-slate-700 hover:text-emerald-600 px-2.5 py-1 rounded-full hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200/60 transition-all duration-200"
          >
            <MessageSquare size={13} className="text-emerald-500" />
            <span>{ctx.waLabel}</span>
          </a>

          {/* PRIMARY ACTION PILL WITH LIVE ROUTE STATE */}
          <Link
            to="/contact"
            state={ctx.selectedService ? { selectedService: ctx.selectedService } : undefined}
            aria-label="Configure project blueprint"
            className="btn-liquid-base btn-liquid-primary rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white border-[#0A0F1E] hover:border-[#4285F4] px-3.5 sm:px-4 py-1.5 font-sans font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-all whitespace-nowrap"
          >
            <span>Project Blueprint</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
