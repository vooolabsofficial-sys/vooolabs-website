import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ delay: 0, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ left: '50%' }}
        className={`fixed top-5 z-[1000] flex items-center justify-between w-[92%] max-w-4xl rounded-full border p-2 pl-5 transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white/95 border-black/10'
            : 'shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-white/60 border-black/5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* LOGO with V Monogram */}
        <Link to="/" className="flex items-center gap-2.5 group select-none" aria-label="VOOO LABS Home">
          {/* V Monogram Icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-baseline">
            <span className="shimmer-text font-clash font-bold text-xl sm:text-2xl leading-none">VOOO</span>
            <span className="font-kanit font-light text-xl sm:text-2xl text-slate-600 ml-1 leading-none">LABS</span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS with sliding pill */}
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
                  {/* Animated sliding pill behind active link */}
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
          ))}
        </div>

        {/* RIGHT CTA BUTTON */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-6 py-2.5 font-kanit font-medium text-sm text-white transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(66,133,244,0.3)] hover:shadow-[0_6px_20px_rgba(66,133,244,0.4)]"
          >
            Say Hello →
          </Link>
          
          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full hover:bg-black/5 text-slate-700 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[990] flex flex-col justify-center bg-white/98 backdrop-blur-2xl px-8"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-clash text-3xl font-semibold transition-colors duration-200 block py-2 ${
                        isActive ? 'g-text' : 'text-slate-800 hover:text-blue-500'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-8 py-3.5 font-kanit font-semibold text-base text-white shadow-lg"
                >
                  Say Hello →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
