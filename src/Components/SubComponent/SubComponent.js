import HeroSectionSub from "./HeroSection";
import Header from "../HomePage/Nav/Header.js";
import React from "react";
import InfoByRegion from "./InfoByRegion/InfoByRegion";
import TrekkingAll from "./TrekkingAll/TrekkingAll";
import ContactForm from "../InnerSub/ContactForm/ContactForm.js";
import { useLocation } from "react-router-dom";

export default function SubComponent() {
  const location=useLocation()
  const trekkingOrExpedition=location.pathname.split('/')[1]
  const ViewData=trekkingOrExpedition==='trekking'?'Trekking':'Expedition'
  return (
    <div>
     <Header />
     {/* <ContactForm /> */}
     <HeroSectionSub data={ViewData}/>
            <InfoByRegion />
            <TrekkingAll />
            
      
    </div>
  );
}
