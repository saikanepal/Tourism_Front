import React from "react";

import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";

export default function HomePage() {
  return (
    <div className=" text-red-400">
      <HeroSection />
      <Header />
      <p>hello world</p>
    </div>
  );
}
