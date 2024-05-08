import React from "react";

import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Expedition from './Expeditions/expeditions-cards.js'

export default function HomePage() {
    return (

            <div className=' text-red-400'>
                <HeroSection />
                <Header />
                <Expedition />
            </div>
            );
}
