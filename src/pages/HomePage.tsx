import React from 'react';
import Slide1_Hero from '../components/home/Slide1_Hero';
import Slide2_Marquee from '../components/home/Slide2_Marquee';
import Slide2_ProductBento from '../components/home/Slide2_ProductBento';
import Slide3_WhatWeBuild from '../components/home/Slide3_WhatWeBuild';
import Slide4_Innovation from '../components/home/Slide4_Innovation';
import Slide5_CTA from '../components/home/Slide5_CTA';

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Slide1_Hero />
      <Slide2_Marquee />
      <Slide2_ProductBento />
      <Slide3_WhatWeBuild />
      <Slide4_Innovation />
      <Slide5_CTA />
    </div>
  );
}
