import React from "react";

import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Review from "./Review/Review";
import Expedition from "./Expeditions/expeditions-cards.js";
import DiscoverSection from "./Discover/DiscoverSection";

export default function HomePage() {
  return (
    <div className=" text-red-400">
      <HeroSection />
      <Header />
      <Expedition />
      <DiscoverSection />
      <Review />
    </div>
  );
}
