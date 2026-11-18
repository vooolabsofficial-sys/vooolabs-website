import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { whatsappLink } from '../../content/company';
import LiquidButton from './LiquidButton';
import { useScrollChoreography } from '../../hooks/useScrollChoreography';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services', isParent: true },
  { path: '/seo-ai', label: 'AI Search & Ads', isParent: true },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const { showTopNav, scrollY } = useScrollChoreography();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
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
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Smart parent route active detector
  const checkIsActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/services') return location.pathname.startsWith('/services');
    if (path === '/seo-ai') return location.pathname.startsWith('/seo-ai');
    return location.pathname === path;
  };

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

          {/* DESKTOP NAV LINKS CONTAINER — 100% CLEAN DROPDOWN-FREE FLOATING PILL */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-100/60 border border-slate-200/60 relative backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.path);
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full font-sans font-semibold text-[13.5px] tracking-[-0.01em] transition-all duration-200 select-none z-10 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-600 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.14)] z-[-1]"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                    />
                  )}
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                  )}
                </NavLink>
              );
            })}
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
                <span>Discuss Project</span>
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

      {/* MOBILE FULLSCREEN DRAWER */}
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

            {/* DIRECT NAV LINKS */}
            <div className="flex flex-col gap-3 py-8 w-full max-w-sm mx-auto my-auto text-center">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans font-semibold text-2xl py-2.5 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* BOTTOM ACTIONS */}
            <div className="w-full max-w-sm mx-auto flex-shrink-0 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-liquid-base btn-liquid-primary w-full rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white font-medium text-sm py-3.5 flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Discuss Project</span>
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
