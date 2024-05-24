import React, { useEffect } from "react";
import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Expedition from "./Expeditions/expeditions-cards.js";
import DiscoverSection from "./Discover/DiscoverSection";
import Footer from "../Footer/Footer.js";
import Trekking from "../Trekking/Trekking";
import Review from "./Review/Review";

export default function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
    console.log("hello")
  },[])
  return (
    <div className="font-Poppins text-gray-800">
      <HeroSection />
      <Header />
      <DiscoverSection />
      <Expedition />
      <Trekking />
      <Review />
      <Footer />
    </div>
  );
}
