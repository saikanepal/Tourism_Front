import React, { useEffect, useState } from "react";
import bgImage from "../../Assets/banner.png";
import { FaCircle } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../HomePage/Nav/Header";
import useFetch from "../../Hooks/useFetch";
import { IoImagesSharp } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";

const Gallery = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { isLoading, error, sendRequest, onCloseError } = useFetch();

  return (
    // <h1>Hello</h1>
    <div>
      <Header />
      {/* HERO SECTION  */}
      <div className="h-screen flex justify-center items-center">
        <img
          src={bgImage}
          alt="Background"
          className="absolute w-full h-screen inset-0 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-60"></div>
        <div className="z-10 text-white text-center">
          <div className="flex gap-2 sm:gap-5 justify-center items-center">
            <h1 className="text-[#FFB133] tracking-wide font-bold text-3xl sm:text-5xl">
              Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto mb-20">
        <div className="flex items-center ">
          <div className="flex-1 flex gap-5 items-center text-[#FFB133]">
            <FaCircle />
            <h1 className="font-bold text-sm sm:text-2xl lg:text-4xl my-14">
              Journey through captivating moments.
            </h1>
          </div>

          {/* Toggle Button  */}
          <IoImagesSharp
            style={{ fontSize: '30px' }}
            className="hidden lg:inline" // This will hide the smaller size on small screens
          />
          <IoImagesSharp
            style={{ fontSize: '15px' }}
            className="lg:hidden" // This will hide the larger size on large screens
          />

          <label className="relative inline-flex cursor-pointer items-center mx-3">
            <input id="switch" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}
              className="peer sr-only" />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-[#FFB133] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FFB133] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
            <h1></h1>
          </label>
          <BiSolidVideos
            style={{ fontSize: '30px' }}
            className="hidden lg:inline" // This will hide the smaller size on small screens
          />
          <BiSolidVideos
            style={{ fontSize: '15px' }}
            className="lg:hidden" // This will hide the larger size on large screens
          />
        </div>


        {/* Images  */}

        {!isChecked
          ?
          <ImageComponent />
          :
          <VideoComponent />
        }
      </div>
      <Footer />
    </div >
  );
};

export default Gallery;