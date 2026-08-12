import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import FixedBottomBar from './components/shared/FixedBottomBar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } }
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
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
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/roadmap" element={<PageWrapper><RoadmapPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
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
