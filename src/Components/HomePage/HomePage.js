import React from "react";
import HeroSection from "./Nav/HeroSection";
import Header from "./Nav/Header";
import Expedition from './Expeditions/expeditions-cards.js'
import DiscoverSection from './Discover/DiscoverSection'
import Footer from "../Footer/Footer.js";

export default function HomePage() {
    return (
        <div className='font-Poppins'>
            <HeroSection />
            <Header />
            <DiscoverSection />
            <Expedition />
            <Footer />
        </div>
    );
}