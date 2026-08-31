import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    closeMenu();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', onKeyDown);
      };
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
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
        {/* BRAND LOGO — LOCKED PERMANENTLY TO CRAZY BLOCKS FONT (#5) */}
        <Link to="/" className="flex items-baseline group select-none py-1" aria-label="VOOO LABS Home">
          <span className="shimmer-text font-crazyblocks text-2xl sm:text-[1.8rem] tracking-wider leading-none">VOOO</span>
          <span className="font-crazyblocks text-xl sm:text-[1.45rem] text-slate-800 ml-2 tracking-wider leading-none">LABS</span>
        </Link>

        {/* DESKTOP NAV LINKS (CLEAN, DIRECT — NO SUB-DROPDOWNS) */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full font-kanit font-medium text-sm transition-all duration-200 select-none z-10 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-500/10 rounded-full z-[-1]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white font-sans font-semibold text-xs px-4 py-2 transition-colors shadow-2xs"
          >
            <span>Start a Project</span>
            <ArrowRight size={13} />
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:bg-black/5 active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={18} />
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
              {/* BRAND LOGO — LOCKED PERMANENTLY TO CRAZY BLOCKS FONT (#5) */}
              <Link to="/" onClick={closeMenu} className="flex items-baseline select-none" aria-label="VOOO LABS Home">
                <span className="shimmer-text font-crazyblocks text-2xl sm:text-3xl tracking-wider leading-none">VOOO</span>
                <span className="font-crazyblocks text-xl sm:text-2xl text-slate-800 ml-2 tracking-wider leading-none">LABS</span>
              </Link>
              <button
                onClick={closeMenu}
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:bg-black/5 active:scale-95 transition-all"
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
                    `font-clash font-semibold text-2xl py-2 transition-colors ${
                      isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="w-full max-w-sm mx-auto flex-shrink-0 pt-4 border-t border-black/5">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-sans font-semibold text-sm py-3.5 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
