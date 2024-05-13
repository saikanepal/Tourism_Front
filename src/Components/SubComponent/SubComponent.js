import HeroSectionSub from "./HeroSection";
import Header from "../HomePage/Nav/Header.js";
import React from "react";
import InfoByRegion from "./InfoByRegion/InfoByRegion";
import TrekkingAll from "./TrekkingAll/TrekkingAll";
import ContactForm from "../InnerSub/ContactForm/ContactForm.js";

export default function SubComponent() {
  return (
    <div>
     <Header />
     {/* <ContactForm /> */}
     <HeroSectionSub />
            <InfoByRegion />
            <TrekkingAll />
            
      
    </div>
  );
}
