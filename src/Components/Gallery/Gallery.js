import React, { useEffect, useState } from "react";
import bgImage from "../../Assets/banner.png";
import { FaCircle } from "react-icons/fa";
import images from "./images";
import videos from "./videos";
import Footer from "../Footer/Footer";
import Header from "../HomePage/Nav/Header";
import useFetch from "../../Hooks/useFetch";
import { IoImagesSharp } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";



const Gallery = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const [galleryData, setGalleryData] = useState({})
  const { isLoading, error, sendRequest, onCloseError } = useFetch();
  async function fetchGalleryData() {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + '/',  // Gallery ko GET Api rakhne
        'GET',
        null,
        {
          'Content-Type': 'application/json',
        }

      );
      console.log(responseData.message);
      setGalleryData()

    } catch (error) {
      console.log('An error occurred in fetching gallery image', error.message);
    }

  }
  // useEffect(() => {
  //   fetchGalleryData()
  // }, [])

  return (
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
            <h1 className="font-bold text-4xl my-14">
              Journey through captivating moments.
            </h1>
          </div>

          {/* Toggle Button  */}
          <IoImagesSharp size={30} />
          <label className="relative inline-flex cursor-pointer items-center mx-3">
            <input id="switch" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}
              className="peer sr-only" />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-[#FFB133] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FFB133] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
            <h1></h1>
          </label>
          <BiSolidVideos size={30} />
        </div>


        {/* Images  */}

        {/* Replace gallery data with state varaible and reconstuct mapping  */}
        {!isChecked
          ?

          <div className="max-h-[1100px] sm:max-h-[1150px] overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center items-start mb-10">
              {images.map(data => (
                <div key={data.regionName} className="flex flex-col justify-center items-start">
                  <img
                    className="opacity-95 rounded-lg w-[368px] h-[400px]"
                    src={data.imageURL}
                    alt={data.regionName}
                  />
                  <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                    {data.regionName}
                  </h1>
                  <p className="text-[#939393] mt-5 mb-10">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
          :
          <div className="max-h-[1100px] sm:max-h-[1150px] overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center items-start mb-10">
              {videos.map(video => (
                <div key={video.title} className="flex flex-col justify-center items-start">
                  <video className="w-[368px] h-[400px] rounded-lg" controls>
                    <source src={video.videoURL} type="video/mp4" />
                  </video>
                  <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                    {video.title}
                  </h1>
                  <p className="text-[#939393] mt-5 mb-10">{video.description}</p>
                </div>
              ))}
            </div>
          </div>

        }
      </div>
      <Footer />
    </div >
  );
};

export default Gallery;
