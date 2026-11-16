import React from 'react';
import Slide1_Hero from '../components/home/Slide1_Hero';
import Slide2_Marquee from '../components/home/Slide2_Marquee';
import Slide2_ValueStrip from '../components/home/Slide2_ValueStrip';
import Slide3_SolutionExplorer from '../components/home/Slide3_SolutionExplorer';
import Slide4_ClosingCTA from '../components/home/Slide4_ClosingCTA';

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Slide1_Hero />
      <Slide2_Marquee />
      <Slide2_ValueStrip />
      <Slide3_SolutionExplorer />
      <Slide4_ClosingCTA />
    </div>
  );
}
