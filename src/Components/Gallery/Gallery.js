import React, { useEffect, useState } from "react";
import bgImage from "../../Assets/banner.png";
import { FaCircle } from "react-icons/fa";
import images from "./images";
import Footer from "../Footer/Footer";
import Header from "../HomePage/Nav/Header";
import useFetch from "../../Hooks/useFetch";

const Gallery = () => {
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
        <div className="flex gap-5 items-center text-[#FFB133]">
          <FaCircle />
          <h1 className="font-bold text-4xl my-14">
            Journey through captivating moments.
          </h1>
        </div>


        {/* Images  */}

        {/* Replace gallery data with state varaible and reconstuct mapping  */}
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
      </div>
      <Footer />
    </div >
  );
};

export default Gallery;
