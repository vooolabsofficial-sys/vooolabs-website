import React, { useEffect } from 'react';
import Slide1_ContactHero from '../components/contact/Slide1_ContactHero';
import Slide2_Form from '../components/contact/Slide2_Form';
import Slide3_FAQ from '../components/contact/Slide3_FAQ';
import Slide4_Connect from '../components/contact/Slide4_Connect';
import Slide5_Location from '../components/contact/Slide5_Location';

export default function ContactPage() {
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
      <Slide1_ContactHero />
      <Slide2_Form />
      <Slide3_FAQ />
      <Slide4_Connect />
      <Slide5_Location />
    </div>
  );
}
