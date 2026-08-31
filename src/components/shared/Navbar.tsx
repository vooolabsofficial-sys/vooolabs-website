import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Smartphone, 
  Cpu, 
  Search, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPANY, FOUNDER } from '../../content/company';

const NAV_SERVICES = [
  {
    id: 'websites',
    title: 'Websites & Portals',
    desc: 'High-speed, conversion-focused web design',
    icon: Globe,
    accent: '#3B82F6',
    link: '/services#websites',
  },
  {
    id: 'software',
    title: 'Custom Software',
    desc: 'Internal automation & operations tools',
    icon: Cpu,
    accent: '#8B5CF6',
    link: '/services#software',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    desc: 'Lightweight Android & iOS apps',
    icon: Smartphone,
    accent: '#F97316',
    link: '/services#mobile-apps',
  },
  {
    id: 'seo-ai',
    title: 'SEO & AI Search Discovery',
    desc: 'Rank on Google, Maps, & ChatGPT',
    icon: Search,
    accent: '#10B981',
    link: '/seo-ai',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    { path: '/services', label: 'Services', isDropdown: true },
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

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isServicesActive = location.pathname.startsWith('/services') || location.pathname.startsWith('/products');
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
                      isServicesActive || isDropdownOpen
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
                        className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[520px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 z-50 overflow-hidden"
                      >
                        <div className="flex items-center justify-between px-2 pb-2.5 mb-2.5 border-b border-slate-100">
                          <span className="font-kanit font-semibold text-xs text-slate-400 uppercase tracking-wider">
                            Our Digital Services
                          </span>
                          <Link
                            to="/services"
                            onClick={() => setIsDropdownOpen(false)}
                            className="font-kanit font-medium text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                          >
                            <span>View All Services</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {NAV_SERVICES.map((s) => {
                            const IconComp = s.icon;
                            return (
                              <Link
                                key={s.id}
                                to={s.link}
                                onClick={() => setIsDropdownOpen(false)}
                                className="group/card rounded-2xl p-3 border border-black/[0.04] bg-slate-50/60 hover:bg-white hover:border-black/15 hover:shadow-sm transition-all duration-200 flex items-start gap-3 text-left"
                              >
                                <div
                                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs group-hover/card:scale-105 transition-transform"
                                  style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                                >
                                  <IconComp size={18} />
                                </div>
                                <div className="min-w-0">
                                  <span className="font-clash font-semibold text-xs text-[#0A0F1E] group-hover/card:text-blue-600 transition-colors block">
                                    {s.title}
                                  </span>
                                  <p className="font-kanit font-light text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                    {s.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
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
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
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

              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                Services & Solutions
              </NavLink>

              <NavLink
                to="/seo-ai"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                SEO & AI Growth
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-clash font-semibold text-2xl py-2 transition-colors ${
                    isActive ? 'g-text' : 'text-[#0A0F1E] hover:text-blue-600'
                  }`
                }
              >
                About Studio
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
