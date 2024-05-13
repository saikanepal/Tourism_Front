
import HeroSectionSub from "./HeroSection";
import Header from "../HomePage/Nav/Header.js";
import React from 'react'
import InfoByRegion from "./InfoByRegion/InfoByRegion";
import TrekkingAll from "./TrekkingAll/TrekkingAll";
export default function SubComponent() {
    return (
        <div>
            <Header />
            <InfoByRegion />
            <TrekkingAll />
            <HeroSectionSub />
        </div>
    )

}
