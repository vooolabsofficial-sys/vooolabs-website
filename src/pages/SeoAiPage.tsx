import React, { useEffect } from 'react';
import Slide1_HeroShift from '../components/seo-ai/Slide1_HeroShift';
import Slide2_ChatGPTLive from '../components/seo-ai/Slide2_ChatGPTLive';
import Slide3_PerplexityLive from '../components/seo-ai/Slide3_PerplexityLive';
import Slide4_GoogleAILive from '../components/seo-ai/Slide4_GoogleAILive';
import Slide5_GoogleMapsLive from '../components/seo-ai/Slide5_GoogleMapsLive';
import Slide6_TechnicalLive from '../components/seo-ai/Slide6_TechnicalLive';
import Slide7_ROIKickoff from '../components/seo-ai/Slide7_ROIKickoff';

export default function SeoAiPage() {
  useEffect(() => {
    // Handle hash scrolling if a visitor navigates directly e.g. /seo-ai#chatgpt-live
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
      {/* 01: Hero & 3D Generative Search Paradigm */}
      <Slide1_HeroShift />

      {/* 02: ChatGPT 4o & SearchGPT Live Interface */}
      <Slide2_ChatGPTLive />

      {/* 03: Perplexity Pro Deep Research & Synthesis Live Interface */}
      <Slide3_PerplexityLive />

      {/* 04: Google AI Overviews (SGE) & Search SERP Live Interface */}
      <Slide4_GoogleAILive />

      {/* 05: Google Maps 3-Pack & Local Voice Search Live Interface */}
      <Slide5_GoogleMapsLive />

      {/* 06: Technical Bot Ingestion & Core Web Vitals Sub-0.4s Speed */}
      <Slide6_TechnicalLive />

      {/* 07: Owned AI Equity vs Rented Ads + Free WhatsApp AI Audit Claim Terminal */}
      <Slide7_ROIKickoff />
    </div>
  );
}
