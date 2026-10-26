import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import FixedBottomBar from './components/shared/FixedBottomBar';

// Lazy-loaded routes for optimal loading speed and minimal initial bundle
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const SeoAiPage = React.lazy(() => import('./pages/SeoAiPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const RoadmapPage = React.lazy(() => import('./pages/RoadmapPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

import type { Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } }
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        {children}
      </Suspense>
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  // Scroll to top on path change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/products/:id" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/seo-ai" element={<PageWrapper><SeoAiPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/roadmap" element={<PageWrapper><RoadmapPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="/legal/:doc" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FixedBottomBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
