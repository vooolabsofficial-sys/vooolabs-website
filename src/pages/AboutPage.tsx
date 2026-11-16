import React, { useEffect } from 'react';
import Slide1_AboutHero from '../components/about/Slide1_AboutHero';
import Slide2_GoogleVerification from '../components/about/Slide2_GoogleVerification';
import Slide3_GoogleStats from '../components/about/Slide3_GoogleStats';
import Slide4_Principles from '../components/about/Slide4_Principles';
import Slide5_Timeline from '../components/about/Slide5_Timeline';
import Slide6_FounderHubs from '../components/about/Slide6_FounderHubs';

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
      <Slide2_GoogleVerification />
      <Slide3_GoogleStats />
      <Slide4_Principles />
      <Slide5_Timeline />
      <Slide6_FounderHubs />
    </div>
  );
}
