import HeroSectionSub from "./HeroSection";
import Header from "../HomePage/Nav/Header.js";
import React from "react";

import ContactForm from "../InnerSub/ContactForm/ContactForm.js";

import InfoByRegion from "./InfoByRegion/InfoByRegion";
import TrekkingAll from "./TrekkingAll/TrekkingAll";
export default function SubComponent() {
  return (
    <div>
      {/*         SubComponent
        <Header/>

            <HeroSectionSub /> */}
      <ContactForm />
      <InfoByRegion />
      <TrekkingAll />
      <HeroSectionSub />
    </div>
  );
}
