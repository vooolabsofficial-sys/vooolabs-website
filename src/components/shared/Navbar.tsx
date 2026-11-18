import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { whatsappLink } from '../../content/company';
import LiquidButton from './LiquidButton';
import { useScrollChoreography } from '../../hooks/useScrollChoreography';

interface SubRouteItem {
  path: string;
  code: string;
  label: string;
  sub: string;
}

const SERVICES_SUB_ITEMS: SubRouteItem[] = [
  { path: '/services', code: 'ALL', label: 'All 4 Core Systems', sub: 'Architecture & Delivery Overview' },
  { path: '/services/websites', code: '01', label: 'Business Websites', sub: 'Sub-second speed & conversion' },
  { path: '/services/web-apps', code: '02', label: 'Custom Web Apps & Portals', sub: '1-tap browser auth & database' },
  { path: '/services/business-software', code: '03', label: 'Custom Business Software', sub: 'Internal CRM, billing & stock ops' },
];

const SEO_AI_SUB_ITEMS: SubRouteItem[] = [
  { path: '/seo-ai', code: 'ALL', label: '4 Discovery Channels', sub: 'Search, AI & Ads Architecture' },
  { path: '/seo-ai/google-seo', code: '01', label: 'Technical Google SEO', sub: 'Clean crawlability & service intent' },
  { path: '/seo-ai/ai-search', code: '02', label: 'ChatGPT & AI Search (AEO)', sub: 'JSON-LD schema & llms.txt citation' },
  { path: '/seo-ai/google-maps', code: '03', label: 'Google Maps & Local', sub: '3-Pack authority & review signals' },
  { path: '/seo-ai/google-ads', code: '04', label: 'Targeted Google Ads', sub: 'High-intent search landing systems' },
];

export default function Navbar() {
  const location = useLocation();
  const { showTopNav, scrollY } = useScrollChoreography();

  const [activeDropdown, setActiveDropdown] = useState<'services' | 'seo-ai' | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSeoOpen, setMobileSeoOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Dropdown hover timing
  const handleDropdownEnter = (menu: 'services' | 'seo-ai') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');
  const isSeoActive = location.pathname.startsWith('/seo-ai');

  return (
    <>
      <header className="fixed top-4 sm:top-5 inset-x-0 z-[1000] flex justify-center px-3 sm:px-4 pointer-events-none select-none">
        <motion.nav
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: showTopNav ? 0 : -104,
            opacity: showTopNav ? 1 : 0,
          }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: showTopNav ? 'auto' : 'none' }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full border p-2 pl-5 transition-[background-color,border-color,box-shadow] duration-200 backdrop-blur-xl ${
            scrollY > 30
              ? 'shadow-[0_8px_30px_rgba(15,23,42,0.06)] bg-white/95 border-slate-200/90'
              : 'shadow-[0_4px_20px_rgba(15,23,42,0.04)] bg-white/90 border-slate-200/70'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* BRAND LOGO — LOCKED PERMANENTLY TO CRAZYBLOCKS + SHIMMER TEXT */}
          <Link
            to="/"
            className="flex items-baseline group select-none py-1 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="VOOO LABS Home"
          >
            <span className="shimmer-text font-crazyblocks text-2xl sm:text-[1.85rem] tracking-wider leading-none">
              VOOO
            </span>
            <span className="font-crazyblocks text-xl sm:text-[1.5rem] text-slate-900 ml-2 tracking-wider leading-none">
              LABS
            </span>
          </Link>

          {/* DESKTOP NAV LINKS CONTAINER */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/60 border border-slate-200/60 relative backdrop-blur-sm">
            
            {/* 1. HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-full font-sans font-semibold text-[13px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-blue-600 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                    />
                  )}
                  <span>Home</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                  )}
                </>
              )}
            </NavLink>

            {/* 2. SERVICES (WITH DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/services"
                className={`relative px-3.5 py-1.5 rounded-full font-sans font-semibold text-[13px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                  isServicesActive
                    ? 'text-blue-600 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {isServicesActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                    transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                  />
                )}
                <span>Services</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}
                />
                {isServicesActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                )}
              </Link>

              {/* SERVICES DROPDOWN PANEL */}
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                  >
                    <div className="w-80 bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-[20px] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-2">
                      <div className="px-3 py-1.5 mb-1 flex items-center justify-between border-b border-slate-100">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          Core Systems Architecture
                        </span>
                        <span className="font-mono text-[10px] text-blue-600 font-semibold">
                          4 Deliverables
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        {SERVICES_SUB_ITEMS.map((item) => {
                          const isCurrent = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`p-2.5 rounded-[14px] transition-all text-left flex items-start gap-3 group ${
                                isCurrent
                                  ? 'bg-blue-50/70 border border-blue-100/80 text-blue-700'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <span
                                className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-md mt-0.5 shrink-0 ${
                                  isCurrent
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                                }`}
                              >
                                {item.code}
                              </span>
                              <div className="flex flex-col">
                                <span className="font-sans font-semibold text-[13px] leading-snug group-hover:text-blue-600 transition-colors">
                                  {item.label}
                                </span>
                                <span className="font-sans text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                                  {item.sub}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. SEO & AI SEARCH (WITH DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('seo-ai')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/seo-ai"
                className={`relative px-3.5 py-1.5 rounded-full font-sans font-semibold text-[13px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                  isSeoActive
                    ? 'text-blue-600 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {isSeoActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                    transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                  />
                )}
                <span>SEO & AI</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeDropdown === 'seo-ai' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}
                />
                {isSeoActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                )}
              </Link>

              {/* SEO & AI DROPDOWN PANEL */}
              <AnimatePresence>
                {activeDropdown === 'seo-ai' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                  >
                    <div className="w-80 bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-[20px] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-2">
                      <div className="px-3 py-1.5 mb-1 flex items-center justify-between border-b border-slate-100">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          Organic Discovery Channels
                        </span>
                        <span className="font-mono text-[10px] text-blue-600 font-semibold">
                          Google + AI
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        {SEO_AI_SUB_ITEMS.map((item) => {
                          const isCurrent = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`p-2.5 rounded-[14px] transition-all text-left flex items-start gap-3 group ${
                                isCurrent
                                  ? 'bg-blue-50/70 border border-blue-100/80 text-blue-700'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <span
                                className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-md mt-0.5 shrink-0 ${
                                  isCurrent
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                                }`}
                              >
                                {item.code}
                              </span>
                              <div className="flex flex-col">
                                <span className="font-sans font-semibold text-[13px] leading-snug group-hover:text-blue-600 transition-colors">
                                  {item.label}
                                </span>
                                <span className="font-sans text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                                  {item.sub}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-full font-sans font-semibold text-[13px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-blue-600 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                    />
                  )}
                  <span>About</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                  )}
                </>
              )}
            </NavLink>

            {/* 5. CONTACT */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-full font-sans font-semibold text-[13px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-blue-600 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                    />
                  )}
                  <span>Contact</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                  )}
                </>
              )}
            </NavLink>

          </div>

          {/* CTA & MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:inline-block">
              <LiquidButton
                to="/contact"
                variant="primary"
                rounded="pill"
                size="sm"
                className="font-medium text-[13px] px-5 py-2.5 whitespace-nowrap"
              >
                <span>See project cost</span>
                <ArrowRight size={13} className="flex-shrink-0" />
              </LiquidButton>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-liquid-base btn-liquid-secondary md:hidden w-10 h-10 rounded-full border border-slate-200 bg-white/90 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={19} />
            </button>
          </div>

        </motion.nav>
      </header>

      {/* MOBILE FULLSCREEN ACCORDION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9500] flex flex-col justify-between bg-white/98 backdrop-blur-2xl p-6 sm:p-8 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between w-full max-w-lg mx-auto flex-shrink-0">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline select-none"
                aria-label="VOOO LABS Home"
              >
                <span className="shimmer-text font-crazyblocks text-2xl sm:text-3xl tracking-wider leading-none">
                  VOOO
                </span>
                <span className="font-crazyblocks text-xl sm:text-2xl text-slate-800 ml-2 tracking-wider leading-none">
                  LABS
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X size={19} />
              </button>
            </div>

            {/* ACCORDION LINKS */}
            <div className="flex flex-col gap-2 py-6 w-full max-w-sm mx-auto my-auto overflow-y-auto no-scrollbar">
              
              {/* HOME */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans font-semibold text-lg py-2.5 px-3 rounded-xl transition-colors text-left ${
                  location.pathname === '/' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-900'
                }`}
              >
                Home
              </Link>

              {/* SERVICES ACCORDION */}
              <div className="flex flex-col border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 font-sans font-semibold text-lg text-slate-900 text-left"
                >
                  <span className={isServicesActive ? 'text-blue-600' : ''}>Core Services</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-2 pb-2 flex flex-col gap-1 overflow-hidden"
                    >
                      {SERVICES_SUB_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/60 text-left"
                        >
                          <span className="font-sans text-xs font-semibold text-slate-800">
                            {item.label}
                          </span>
                          <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                            {item.code}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SEO & AI ACCORDION */}
              <div className="flex flex-col border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileSeoOpen(!mobileSeoOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 font-sans font-semibold text-lg text-slate-900 text-left"
                >
                  <span className={isSeoActive ? 'text-blue-600' : ''}>Google SEO & AI</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 ${
                      mobileSeoOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSeoOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-2 pb-2 flex flex-col gap-1 overflow-hidden"
                    >
                      {SEO_AI_SUB_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/60 text-left"
                        >
                          <span className="font-sans text-xs font-semibold text-slate-800">
                            {item.label}
                          </span>
                          <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                            {item.code}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ABOUT */}
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans font-semibold text-lg py-2.5 px-3 rounded-xl transition-colors text-left ${
                  location.pathname === '/about' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-900'
                }`}
              >
                About Studio
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans font-semibold text-lg py-2.5 px-3 rounded-xl transition-colors text-left ${
                  location.pathname === '/contact' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-900'
                }`}
              >
                Start Blueprint
              </Link>
            </div>

            {/* BOTTOM ACTIONS */}
            <div className="w-full max-w-sm mx-auto flex-shrink-0 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-liquid-base btn-liquid-primary w-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium text-sm py-3.5 flex items-center justify-center gap-2 shadow-md"
              >
                <span>See what your project will cost</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-liquid-base btn-liquid-secondary w-full rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm py-3 flex items-center justify-center gap-2"
              >
                <MessageSquare size={15} className="text-emerald-600" />
                <span>Discuss your project</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
