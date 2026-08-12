import React, { useEffect } from 'react';
import Slide1_AboutHero from '../components/about/Slide1_AboutHero';
import Slide2_Story from '../components/about/Slide2_Story';
import Slide3_Values from '../components/about/Slide3_Values';
import Slide4_TechStack from '../components/about/Slide4_TechStack';
import Slide5_Founder from '../components/about/Slide5_Founder';

export default function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
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
      <Slide1_AboutHero />
      <Slide2_Story />
      <Slide3_Values />
      <Slide4_TechStack />
      <Slide5_Founder />
    </div>
  );
}
