import React, { useEffect } from 'react';
import Slide1_ProductsHero from '../components/products/Slide1_ProductsHero';
import Slide2_VoooFiles from '../components/products/Slide2_VoooFiles';
import Slide3_SmaranAI from '../components/products/Slide3_SmaranAI';
import Slide4_CallMind from '../components/products/Slide4_CallMind';
import Slide5_ComingSoon from '../components/products/Slide5_ComingSoon';

export default function ProductsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Delay slightly to allow page animation and layout to finish
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="page-wrap">
      <Slide1_ProductsHero />
      <Slide2_VoooFiles />
      <Slide3_SmaranAI />
      <Slide4_CallMind />
      <Slide5_ComingSoon />
    </div>
  );
}
