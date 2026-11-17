import { useEffect } from 'react';
import Slide1_Overview from '../components/services/Slide1_Overview';
import Slide4_Websites from '../components/services/Slide4_Websites';
import Slide3_CustomWebApps from '../components/services/Slide3_CustomWebApps';
import Slide2_CustomSoftware from '../components/services/Slide2_CustomSoftware';
import Slide5_GooglePresence from '../components/services/Slide5_GooglePresence';

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash scrolling for any direct links (#websites, #web-apps, #custom-software, #software, #google-presence, #ai-growth)
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        let element = document.querySelector(hash);
        if (!element && hash === '#software') {
          element = document.querySelector('#custom-software');
        } else if (!element && hash === '#custom-software') {
          element = document.querySelector('#software');
        } else if (!element && hash === '#ai-growth') {
          element = document.querySelector('#google-presence');
        } else if (!element && hash === '#google-presence') {
          element = document.querySelector('#ai-growth');
        }
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
      <Slide4_Websites />
      <Slide3_CustomWebApps />
      <Slide2_CustomSoftware />
      <Slide5_GooglePresence />
    </div>
  );
}
