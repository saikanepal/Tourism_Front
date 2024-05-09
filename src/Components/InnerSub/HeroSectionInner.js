import React from 'react'
import InnerSubImage from "../../Assets/InnerSubImage.jpg"
import { useLocation } from 'react-router-dom';
import { TbTrekking } from "react-icons/tb";

const HeroSectionInner = () => {
    const location = useLocation();
    const splitValue = location.pathname.split("/")

    const trekOrExpedition = decodeURIComponent(splitValue[1]) === "trekking" ? "Trekking" : "Expedition"
    const regionOrHeight = decodeURIComponent(splitValue[2])


    return (
        <div>
            <div className="relative h-screen flex justify-center items-center">
                <img
                    src={InnerSubImage}
                    alt="Background"
                    className="absolute w-full h-screen inset-0 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
                <div className="relative z-10 text-white text-center">
                    <div className="flex gap-5 justify-center items-center">
                        <h1 className="text-2xl">{trekOrExpedition}</h1>
                        <TbTrekking size={20} />
                    </div>
                    <p className="text-[#FFB133] font-bold text-5xl mt-4">{regionOrHeight}</p>
                    <button className="border-[#CA8F30] font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-3xl w-full md:w-36 py-3 px-2">
                        Learn More
                        <MdArrowForwardIos />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HeroSectionInner