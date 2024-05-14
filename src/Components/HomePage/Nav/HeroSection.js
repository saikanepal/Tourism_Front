import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { PiMouseLeftClickDuotone } from "react-icons/pi";
import "./CarouselArrow.css";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
function CarouselItem(props) {
  return (
    <div
      className={` ${props.banner}  bg-banner-1  h-screen xl:h-screen bg-cover bg-center text-left flex  justify-start `}
    >
      <div className="  sm:w-full lg:w-3/5 xl:1/3 flex  justify-center lg:justify-start ">
        <div className="w-2/3  mt-auto mb-auto ">
          <p className=" heroText text-5xl mb-3 font-poppins font-bold text-white">
            Explore, Elevate, Engage
          </p>

          <Link
            to="#"
            className=" flex w-1/3    justify-around learnButton   mt-7 bg-secondary font-normal font-poppins  sm:text-base md:text-xl text-[#CA8F30]   border-[#CA8F30] border-2 rounded-3xl  px-4 py-3 hover:bg-[#CA8F30] hover:text-white pl-1"
          >
            Learn More{" "}
            <span className="  font-bold md:text-[18px] lg:text-[28px]  ">
              <IoIosArrowForward />
            </span>
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
        interval={4000}
        // infiniteLoop={true}
        // autoPlay={true}
      >
        <CarouselItem banner=" bg-banner-1 Section_top1 h-screen" />
        <CarouselItem banner="bg-banner-2 Section_top2 h-screen " />
        <CarouselItem banner="bg-banner-3 Section_top3 h-screen " />
      </Carousel>

      {/* <div class="Section_top">
        <div class="content">
          <h1>
            <span>Developer</span>
          </h1>
          <a href="#">Welcome</a>
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
