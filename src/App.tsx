import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import FixedBottomBar from './components/shared/FixedBottomBar';
import BrandPreloader from './components/shared/BrandPreloader';
import TopRouteProgressBar from './components/shared/TopRouteProgressBar';

// Route-level code splitting using React.lazy() for optimal loading speed and minimal initial bundle
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const WebsiteServicePage = React.lazy(() => import('./pages/WebsiteServicePage'));
const WebAppsServicePage = React.lazy(() => import('./pages/WebAppsServicePage'));
const BusinessSoftwareServicePage = React.lazy(() => import('./pages/BusinessSoftwareServicePage'));
const SeoAiPage = React.lazy(() => import('./pages/SeoAiPage'));
const GoogleSeoPage = React.lazy(() => import('./pages/GoogleSeoPage'));
const AiSearchPage = React.lazy(() => import('./pages/AiSearchPage'));
const GoogleMapsPage = React.lazy(() => import('./pages/GoogleMapsPage'));
const GoogleAdsPage = React.lazy(() => import('./pages/GoogleAdsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const LegalPolicyPage = React.lazy(() => import('./pages/LegalPolicyPage'));
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
      className="min-h-[70vh] bg-white flex flex-col items-center justify-center relative overflow-hidden select-none"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex items-baseline justify-center mb-3">
        <span className="font-crazyblocks text-3xl text-[#4285F4] tracking-wider leading-none">V</span>
        <span className="font-crazyblocks text-3xl text-[#5B5BD6] tracking-wider leading-none">O</span>
        <span className="font-crazyblocks text-3xl text-[#7C3AED] tracking-wider leading-none">O</span>
        <span className="font-crazyblocks text-3xl text-[#F97316] tracking-wider leading-none">O</span>
        <span 
          className="font-crazyblocks text-2xl ml-2 tracking-wider leading-none font-bold"
          style={{
            background: 'linear-gradient(135deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          LABS
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" style={{ animationDelay: '300ms' }} />
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
    } else if (path === '/services/websites') {
      title = 'Business Websites — VOOO LABS';
    } else if (path === '/services/web-apps') {
      title = 'Custom Web Apps & Portals — VOOO LABS';
    } else if (path === '/services/business-software') {
      title = 'Custom Business Software — VOOO LABS';
    } else if (path === '/seo-ai') {
      title = 'Google SEO, AI Search & Ads — VOOO LABS';
    } else if (path === '/seo-ai/google-seo') {
      title = 'Technical Google SEO & Service Intent Architecture — VOOO LABS';
    } else if (path === '/seo-ai/ai-search') {
      title = 'ChatGPT, Google AI & Machine-Readable Schema (AEO) — VOOO LABS';
    } else if (path === '/seo-ai/google-maps') {
      title = 'Google Maps & Local Presence Optimization — VOOO LABS';
    } else if (path === '/seo-ai/google-ads') {
      title = 'Targeted Google Search Ads & Landing Systems — VOOO LABS';
    } else if (path === '/about') {
      title = 'About Studio & Lead Architect — VOOO LABS';
    } else if (path === '/contact') {
      title = 'Start Your Project & Inquire — VOOO LABS';
    } else if (path === '/legal/privacy') {
      title = 'Data Privacy, Business NDA & Jurisdiction — VOOO LABS';
    } else if (path === '/legal/terms') {
      title = 'Scope, Milestones & Delivery Terms — VOOO LABS';
    } else if (path === '/legal/ip-ownership') {
      title = '100% Source Code & IP Ownership Guarantee — VOOO LABS';
    } else if (path === '/legal/refunds') {
      title = 'Milestone Sign-Off & Refund Policy — VOOO LABS';
    } else if (path.startsWith('/legal')) {
      title = 'Legal & Trust Architecture — VOOO LABS';
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
        <Route path="/services/websites" element={<PageWrapper><WebsiteServicePage /></PageWrapper>} />
        <Route path="/services/web-apps" element={<PageWrapper><WebAppsServicePage /></PageWrapper>} />
        <Route path="/services/business-software" element={<PageWrapper><BusinessSoftwareServicePage /></PageWrapper>} />
        <Route path="/services/:slug" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/seo-ai" element={<PageWrapper><SeoAiPage /></PageWrapper>} />
        <Route path="/seo-ai/google-seo" element={<PageWrapper><GoogleSeoPage /></PageWrapper>} />
        <Route path="/seo-ai/ai-search" element={<PageWrapper><AiSearchPage /></PageWrapper>} />
        <Route path="/seo-ai/google-maps" element={<PageWrapper><GoogleMapsPage /></PageWrapper>} />
        <Route path="/seo-ai/google-ads" element={<PageWrapper><GoogleAdsPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper><LegalPolicyPage activePolicy="terms" /></PageWrapper>} />
        <Route path="/legal/terms" element={<PageWrapper><LegalPolicyPage activePolicy="terms" /></PageWrapper>} />
        <Route path="/legal/refunds" element={<PageWrapper><LegalPolicyPage activePolicy="refunds" /></PageWrapper>} />
        <Route path="/legal/ip-ownership" element={<PageWrapper><LegalPolicyPage activePolicy="ip-ownership" /></PageWrapper>} />
        <Route path="/legal/privacy" element={<PageWrapper><LegalPolicyPage activePolicy="privacy" /></PageWrapper>} />
        <Route path="/legal/:doc" element={<PageWrapper><LegalPolicyPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

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
      {showPreloader && (
        <BrandPreloader onComplete={() => setShowPreloader(false)} />
      )}
      <TopRouteProgressBar />
      <Navbar />
      <FixedBottomBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
