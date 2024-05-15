import React, { useEffect, useState } from "react";
import Image from "../../Assets/Carousel/Annapurna1.jpg";
import bgImage from "../../Assets/banner.png";
import { FaCircle } from "react-icons/fa";
import galleryData from "./galleryData";
import Footer from "../Footer/Footer";

const Gallery = () => {
  return (
    <div>
      {/* HERO SECTION  */}
      <div className="relative h-screen flex justify-center items-center">
        <img
          src={bgImage}
          alt="Background"
          className="absolute w-full h-screen inset-0 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-60"></div>
        <div className="relative z-10 text-white text-center">
          <div className="flex gap-2 sm:gap-5 justify-center items-center">
            <h1 className="text-[#FFB133] font-bold text-3xl sm:text-5xl">
              Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        <div className="flex gap-5 items-center text-[#FFB133]">
          <FaCircle />
          <h1 className="font-bold text-4xl my-20">
            Journey through captivating moments.
          </h1>
        </div>

        {/* Images  */}
        {/* <div className="overflow-x-auto h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 max-h-96 justify-center items-center mb-10">
            {galleryData.slice(0, 6).map((data) => (
              <div key={data.regionName} className="flex flex-col relative justify-center items-start">
                <img
                  className="opacity-95 rounded-lg w-[368px] h-[456px]"
                  src={Image}
                  alt={data.regionName}
                />
                <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                  {data.regionName}
                </h1>
                <p className="text-[#939393] mt-5 mb-10">{data.description}</p>
              </div>
            ))}
            {galleryData.slice(6).map((data) => (
              <div key={data.regionName} className="flex flex-col relative justify-center items-start">
                <img
                  className="opacity-95 rounded-lg w-[368px] h-[456px]"
                  src={Image}
                  alt={data.regionName}
                />
                <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                  {data.regionName}
                </h1>
                <p className="text-[#939393] mt-5 mb-10">{data.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="max-h-96 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 justify-center items-center mb-10">
            {galleryData.map((data, index) => (
              <div key={data.regionName} className="flex flex-col relative justify-center items-start">
                <img
                  className="opacity-95 rounded-lg w-[368px] h-[456px]"
                  src={Image}
                  alt={data.regionName}
                />
                <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                  {data.regionName}
                </h1>
                <p className="text-[#939393] mt-5 mb-10">{data.description}</p>
                {index === 5 && <div className="h-1"></div>}
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
