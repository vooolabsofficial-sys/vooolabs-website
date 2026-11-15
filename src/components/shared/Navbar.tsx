import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { whatsappLink } from '../../content/company';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null);
  const isMobileMenuOpen = openedAtPath === location.pathname;

  const closeMenu = () => {
    setOpenedAtPath(null);
  };
  
  const toggleMenu = () =>
    setOpenedAtPath(isMobileMenuOpen ? null : location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/seo-ai', label: 'SEO & AI Growth' },
    { path: '/about', label: 'About Studio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-5 inset-x-0 z-[1000] flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full border p-2 pl-5 transition-[background-color,border-color,box-shadow] duration-200 backdrop-blur-xl ${
            isScrolled
              ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white/95 border-slate-200/90'
              : 'shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-white/80 border-slate-200/60'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* BRAND LOGO — LOCKED PERMANENTLY TO CRAZY BLOCKS FONT */}
          <Link to="/" className="flex items-baseline group select-none py-1 transition-transform duration-200 hover:scale-[1.02]" aria-label="VOOO LABS Home">
            <span className="shimmer-text font-crazyblocks text-2xl sm:text-[1.85rem] tracking-wider leading-none">VOOO</span>
            <span className="font-crazyblocks text-xl sm:text-[1.5rem] text-slate-900 ml-2 tracking-wider leading-none">LABS</span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-100/60 border border-slate-200/60 relative backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full font-sans font-semibold text-[13.5px] tracking-[-0.01em] transition-all duration-200 select-none z-10 ${
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
                        className="absolute inset-0 bg-white rounded-full border border-blue-100 shadow-[0_2px_8px_rgba(59,130,246,0.12)] z-[-1]"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      )}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-950 hover:bg-blue-600 text-white font-sans font-medium text-[13px] px-5 py-2.5 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group whitespace-nowrap select-none"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0" />
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-full border border-slate-200 bg-white/80 flex items-center justify-center text-slate-800 hover:bg-slate-100 active:scale-95 transition-all shadow-xs"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={19} />
            </button>
          </div>

        </motion.nav>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9500] flex flex-col justify-between bg-white/95 backdrop-blur-2xl p-6 sm:p-8 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between w-full max-w-lg mx-auto flex-shrink-0">
              <Link to="/" onClick={closeMenu} className="flex items-baseline select-none" aria-label="VOOO LABS Home">
                <span className="shimmer-text font-crazyblocks text-2xl sm:text-3xl tracking-wider leading-none">VOOO</span>
                <span className="font-crazyblocks text-xl sm:text-2xl text-slate-800 ml-2 tracking-wider leading-none">LABS</span>
              </Link>
              <button
                onClick={closeMenu}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 text-center my-auto py-6 w-full max-w-sm mx-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-sans font-semibold text-xl py-2 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="w-full max-w-sm mx-auto flex-shrink-0 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full rounded-full bg-slate-950 hover:bg-blue-600 text-white font-sans font-semibold text-sm py-3.5 flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>See what your project will cost</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-sans font-medium text-sm py-3 flex items-center justify-center gap-2 transition-all"
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
