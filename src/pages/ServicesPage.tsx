import React, { useEffect } from 'react';
import Slide1_Overview from '../components/services/Slide1_Overview';
import Slide2_CustomSoftware from '../components/services/Slide2_CustomSoftware';
import Slide3_CustomWebApps from '../components/services/Slide3_CustomWebApps';
import Slide4_Websites from '../components/services/Slide4_Websites';
import Slide5_GooglePresence from '../components/services/Slide5_GooglePresence';

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash scrolling if user lands with #custom-software, #web-apps, etc.
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900">
      <Slide1_Overview />
      <Slide2_CustomSoftware />
      <Slide3_CustomWebApps />
      <Slide4_Websites />
      <Slide5_GooglePresence />
    </div>
  );
}
