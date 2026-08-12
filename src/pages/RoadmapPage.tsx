import React from 'react';
import Slide1_RoadmapHero from '../components/roadmap/Slide1_RoadmapHero';
import Slide2_Timeline from '../components/roadmap/Slide2_Timeline';
import Slide3_AppRoadmaps from '../components/roadmap/Slide3_AppRoadmaps';
import Slide4_Vision2030 from '../components/roadmap/Slide4_Vision2030';
import Slide5_OpenDev from '../components/roadmap/Slide5_OpenDev';

export default function RoadmapPage() {
  return (
    <div className="page-wrap">
      <Slide1_RoadmapHero />
      <Slide2_Timeline />
      <Slide3_AppRoadmaps />
      <Slide4_Vision2030 />
      <Slide5_OpenDev />
    </div>
  );
}
