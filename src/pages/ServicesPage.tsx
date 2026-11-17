import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesDirectory from '../components/services/ServicesDirectory';
import ServicesDeliveryRail from '../components/services/ServicesDeliveryRail';
import ServicesClosingBand from '../components/services/ServicesClosingBand';

export default function ServicesPage() {
  useEffect(() => {
    // Handle smooth hash scrolling for any legacy or incoming deep-links
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        let element = document.querySelector(hash);
        if (!element && hash === '#software') {
          element = document.querySelector('#custom-software');
        } else if (!element && hash === '#ai-growth') {
          element = document.querySelector('#google-presence');
        }
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900">
      <ServicesHero />
      <ServicesDirectory />
      <ServicesDeliveryRail />
      <ServicesClosingBand />
    </div>
  );
}
