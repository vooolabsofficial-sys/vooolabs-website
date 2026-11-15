import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import FixedBottomBar from './components/shared/FixedBottomBar';

// Route-level code splitting using React.lazy() for optimal loading speed and minimal initial bundle
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SeoAiPage = React.lazy(() => import('./pages/SeoAiPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

import type { Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }
};

// Sleek minimal loading fallback
function MinimalLoadingFallback() {
  return (
    <div 
      className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden"
      role="status"
      aria-label="Loading page"
    >
      <div className="w-10 h-10 rounded-2xl bg-slate-900/5 border border-slate-200/80 flex items-center justify-center relative shadow-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping absolute opacity-75" />
        <span className="w-2 h-2 rounded-full bg-blue-600 relative" />
      </div>
      <div className="mt-4 flex items-center gap-1.5">
        <span className="font-crazyblocks text-sm text-slate-900 tracking-wider">VOOO</span>
        <span className="font-crazyblocks text-xs text-slate-500 tracking-wider">LABS</span>
      </div>
    </div>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pb-24 overflow-x-hidden w-full">
      <Suspense fallback={<MinimalLoadingFallback />}>
        {children}
      </Suspense>
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  // Scroll to top and set dynamic document title on path change
  useEffect(() => {
    window.scrollTo(0, 0);

    const path = location.pathname;
    let title = 'VOOO LABS — Enterprise-Grade Websites, Web Apps & Business Software';

    if (path === '/services') {
      title = 'Services & Capabilities — VOOO LABS';
    } else if (path === '/seo-ai') {
      title = 'AI Search & Organic Discovery (AEO/GEO) — VOOO LABS';
    } else if (path === '/about') {
      title = 'About Studio & Lead Architect — VOOO LABS';
    } else if (path === '/contact') {
      title = 'Start Your Project & Inquire — VOOO LABS';
    } else if (path === '/legal/privacy') {
      title = 'Privacy Policy — VOOO LABS';
    } else if (path === '/legal/terms') {
      title = 'Terms of Service — VOOO LABS';
    } else if (path === '/legal/ip-ownership') {
      title = 'Code Ownership & IP Guarantee — VOOO LABS';
    } else if (path === '/legal/refunds') {
      title = 'Milestone & Refund Policy — VOOO LABS';
    } else if (path.startsWith('/legal')) {
      title = 'Legal & Terms — VOOO LABS';
    } else if (path !== '/') {
      title = 'Page Not Found (404) — VOOO LABS';
    }

    document.title = title;
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/seo-ai" element={<PageWrapper><SeoAiPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="/legal/:doc" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Initialize Lenis smooth scroll with clean rAF cleanup and reduced-motion detection
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <FixedBottomBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
