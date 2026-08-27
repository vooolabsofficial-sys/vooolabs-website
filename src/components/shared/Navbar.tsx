import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ExternalLink, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../content/services';
import { FOUNDER } from '../../content/company';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null);
  const isMobileMenuOpen = openedAtPath === location.pathname;

  const closeMenu = () => {
    setOpenedAtPath(null);
    setIsMobileSolutionsOpen(false);
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
    setIsDropdownOpen(false);
    closeMenu();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        setIsDropdownOpen(false);
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

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Solutions & Products', isDropdown: true },
    { path: '/about', label: 'Studio & Founder' },
    { path: '/roadmap', label: 'Roadmap' },
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
        <Link to="/" className="flex items-center gap-2.5 group select-none" aria-label="VOOO LABS Home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-baseline">
            <span className="shimmer-text font-clash font-bold text-xl sm:text-2xl leading-none">VOOO</span>
            <span className="font-kanit font-light text-xl sm:text-2xl text-slate-600 ml-1 leading-none">LABS</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isProductsActive = location.pathname.startsWith('/products');
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-full font-kanit font-medium text-sm transition-all duration-200 select-none z-10 inline-flex items-center gap-1.5 ${
                      isProductsActive || isDropdownOpen
                        ? 'text-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
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
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                        />
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[580px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 z-50 overflow-hidden"
                      >
                        <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-slate-100">
                          <span className="font-kanit font-semibold text-xs text-slate-400 uppercase tracking-wider">
                            Services & Flagship Products
                          </span>
                          <Link
                            to="/products"
                            onClick={() => setIsDropdownOpen(false)}
                            className="font-kanit font-medium text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                          >
                            <span>View All Solutions</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {SERVICES.map((service) => {
                            const IconComp = service.icon;
                            return (
                              <Link
                                key={service.id}
                                to={`/products#${service.slug}`}
                                onClick={() => setIsDropdownOpen(false)}
                                className="group/card rounded-2xl p-3.5 border border-black/[0.04] bg-slate-50/60 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200 flex items-start gap-3 text-left"
                              >
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs group-hover/card:scale-105 transition-transform"
                                  style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}
                                >
                                  <IconComp size={20} />
                                </div>
                                <div className="min-w-0">
                                  <span className="font-clash font-semibold text-sm text-[#0A0F1E] group-hover/card:text-blue-600 transition-colors">
                                    {service.shortTitle}
                                  </span>
                                  <p className="font-kanit font-light text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                                    {service.tagline}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between px-2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 rounded-2xl p-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-kanit font-medium text-xs text-slate-700">
                              Creative Technologist & SaaS Portfolio
                            </span>
                          </div>
                          <a
                            href={FOUNDER.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-kanit font-semibold text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
                          >
                            <span>Explore {FOUNDER.name}</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-full font-kanit font-medium text-sm transition-all duration-200 select-none z-10 ${
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
                    {link.label}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-5 sm:px-6 py-2.5 font-kanit font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-[0_4px_14px_rgba(66,133,244,0.3)] hover:shadow-[0_6px_20px_rgba(66,133,244,0.4)]"
          >
            <span>Start Project</span>
            <ArrowRight size={14} />
          </Link>
          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-full hover:bg-black/5 text-slate-700 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>
    </header>

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
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="VOOO LABS Home">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex items-baseline">
                  <span className="shimmer-text font-clash font-bold text-xl leading-none">VOOO</span>
                  <span className="font-kanit font-light text-xl text-slate-600 ml-1 leading-none">LABS</span>
                </div>
              </Link>
              <button
                onClick={closeMenu}
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:bg-black/5 active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3 text-center my-auto py-6 w-full max-w-sm mx-auto">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="font-clash font-semibold text-2xl py-2 text-[#0A0F1E] inline-flex items-center gap-2"
                >
                  <span>Solutions & Verticals</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileSolutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2 w-full pt-2 pb-3 overflow-hidden"
                    >
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/products#${s.slug}`}
                          onClick={closeMenu}
                          className="rounded-xl bg-slate-50 border border-black/5 p-2.5 text-left flex items-center justify-between font-kanit text-sm font-medium text-slate-700 hover:text-blue-600"
                        >
                          <span>{s.title}</span>
                          <ArrowRight size={14} className="text-slate-400" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                Studio & Founder
              </NavLink>

              <NavLink
                to="/roadmap"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                Roadmap
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                Contact
              </NavLink>

              <a
                href={FOUNDER.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 border border-purple-500/20 p-3 font-kanit font-medium text-xs text-purple-700 flex items-center justify-center gap-2"
              >
                <span>Founder's Portfolio ({FOUNDER.name})</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="w-full max-w-lg mx-auto flex-shrink-0 pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 py-3.5 font-kanit font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-md active:scale-98"
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
