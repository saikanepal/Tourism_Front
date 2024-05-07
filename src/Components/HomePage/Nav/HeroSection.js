import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { PiMouseLeftClickDuotone } from "react-icons/pi";
import './CarouselArrow.css'
function CarouselItem(props) {
  return (
    <div
      className={` ${props.banner}  bg-banner-1 h-screen xl:h-screen bg-cover bg-center text-left flex  justify-start `}
    >
      <div className="w-1/2 flex justify-center ">
        <div className="w-2/3  mt-auto mb-auto xl:ml-20">
          <p
            className="text-5xl mb-3 font-
Skie font-bold text-white"
          >
            Explore, Elevate, Engage
          </p>

          <Link
            to="#"
            className=" inline-block  mt-7 bg-secondary font-normal font-jomolhari text-xl text-[#CA8F30]   border-[#CA8F30] border-2 rounded-3xl  px-4 py-3 hover:bg-[#CA8F30] hover:text-white"
          >
            Learn More{" "}
            <span className="ml-2 mx-auto font-bold text-[28px] ">&#62;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div>
      <Carousel
        // showThumbs={false}
        swipeable={true}
        // emulateTouch={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={1000}
        infiniteLoop={true}
        autoPlay={true}

      >
        <CarouselItem banner=" bg-banner-1" />
        <CarouselItem banner="bg-banner-2" />
        <CarouselItem banner="bg-banner-3" />
      </Carousel>
    </div>
  );
}

export default HeroSection;
