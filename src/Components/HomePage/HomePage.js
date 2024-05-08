import React from "react";

import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Expedition from './Expeditions/expeditions-cards.js'
import DiscoverSection from './Discover/DiscoverSection'
import Trekking from '../Trekking/Trekking'

export default function HomePage() {
    return (

        <div className='font-jomolhari font-semibold text-gray-800'>
            <HeroSection />
            <Header />
            <Expedition />
            <DiscoverSection />
            <Trekking/>
        </div>
    );
}