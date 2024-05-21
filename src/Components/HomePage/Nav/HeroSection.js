import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./CarouselArrow.css";
import "./style.css";
import imageData from "./imageData";

function CarouselItem({ imageUrl }) {
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("hello")
  }
  return (
    
    <div
      className="h-screen xl:h-screen bg-cover bg-center text-left flex justify-start"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="sm:w-full lg:w-3/5 xl:1/3 flex justify-center lg:justify-center">
        <div className="w-2/3 mt-auto mb-auto">
          <p className="heroText text-5xl mb-3 font-poppins font-bold text-white">
            Explore, Elevate, Engage
          </p>

          <Link
            to="#"
            className="flex w-1/3 justify-around learnButton mt-7 bg-secondary font-normal font-poppins sm:text-base md:text-xl text-[#CA8F30] border-[#CA8F30] border-2 rounded-3xl px-4 py-3 hover:bg-[#CA8F30] hover:text-white pl-1"
          >
            Learn More{" "}
            <span className="font-bold md:text-[18px] lg:text-[28px]">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageKeys = Object.keys(imageData);

  return (
    <div>
      <Carousel
        swipeable={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={false}
        animationHandler="fade"
      >
        {imageKeys.map((key, index) => (
          <CarouselItem key={index} imageUrl={imageData[key]} />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroSection;
