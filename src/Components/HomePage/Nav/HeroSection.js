import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./CarouselArrow.css";
import "./style.css";

function CarouselItem({ imageUrl }) {
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("hello")
  }
  return (
    
    <div
      className="h-screen xl:h-screen bg-cover bg-center text-left flex justify-start  "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="sm:w-full lg:w-3/5 xl:1/3 flex justify-center lg:justify-center">
        <div className="w-2/3 mt-auto mb-auto">
          <p className="heroText text-5xl mb-3 font-poppins font-bold text-white hover:text-red-400 ">
            Explore, Elevate, Engage
          </p>

          <Link
            to="/expedition"
            className="flex w-1/3 justify-around items-center learnButton mt-7 bg-secondary font-semibold font-poppins sm:text-base md:text-xl text-[#CA8F30] border-[#CA8F30] border-2 rounded-3xl px-4 py-3 hover:bg-[#CA8F30] hover:text-white pl-1 z-10"
          >
            Learn More{" "}
            <span className="font-bold md:text-[18px] lg:text-[28px]">
              <IoIosArrowForward />
            </span>
          </Link>
          <button className="bg-red-400 hover:bg-black "> hello world</button>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/Image/getImage"
        );
        const data = await response.json();
        setImages(data.images);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel-container relative">
      <Carousel
        swipeable={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        infiniteLoop={true}
        autoPlay={true}
        // stopOnHover={false}
        animationHandler="fade"
      >
        {images.map((image, index) => (
          <CarouselItem key={image._id} imageUrl={image.img} />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroSection;
