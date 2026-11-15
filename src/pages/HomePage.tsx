import React from 'react';
import Slide1_Hero from '../components/home/Slide1_Hero';
import Slide2_Marquee from '../components/home/Slide2_Marquee';
import Slide3_CapabilitiesBento from '../components/home/Slide3_CapabilitiesBento';
import Slide4_WhatWeBuild from '../components/home/Slide4_WhatWeBuild';
import Slide5_Innovation from '../components/home/Slide5_Innovation';
import Slide6_CTA from '../components/home/Slide6_CTA';

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Slide1_Hero />
      <Slide2_Marquee />
      <Slide3_CapabilitiesBento />
      <Slide4_WhatWeBuild />
      <Slide5_Innovation />
      <Slide6_CTA />
    </div>
  );
}
