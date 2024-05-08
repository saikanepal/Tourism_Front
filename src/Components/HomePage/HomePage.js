import React from "react";

import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Review from "./Review/Review";

export default function HomePage() {
  return (
    <div className=" text-red-400">
      <HeroSection />
      <Header />
      <Review />
    </div>
  );
}
