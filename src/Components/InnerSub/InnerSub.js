import Image from "../../Assets/banner.png"
import React, { useRef } from 'react'
import trekking from "../../Assets/Data/Trekking"
import expeditions from "../../Assets/Data/Expedition"
import { useLocation, useNavigate } from "react-router-dom"
import InnerSubImage from "../../Assets/InnerSubImage.jpg"
import { TbTrekking } from "react-icons/tb";

const InnerSub = () => {
    const myRef = useRef(null)
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }
    }
    const navigate=useNavigate()
    const location = useLocation();
    const splitValue = location.pathname.split("/")

    const trekOrExpedition = decodeURIComponent(splitValue[1]) === "trekking" ? trekking : expeditions
    const trekOrExpenditureLocation = Object.values(trekOrExpedition)
    const trekOrExpenditureCamp = trekOrExpenditureLocation[0][decodeURIComponent(splitValue[2])]
    const regionOrHeight = decodeURIComponent(splitValue[2])

    const handleNextPage=(trek)=>{
        // navigate('/')
        console.log(Object.values(trek))
    }
    return (
        <>
            {/*DYNAMIC HERO SECTION  */}
            <div className="relative h-screen flex justify-center items-center">
                <img
                    src={InnerSubImage}
                    alt="Background"
                    className="absolute w-full h-screen inset-0 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-60"></div>
                <div className="relative z-10 text-white text-center">
                    <div className="flex gap-2 sm:gap-5 justify-center items-center">
                        <h1 className="text-lg sm:text-2xl">{splitValue[1] === "trekking" ? "Trekking" : "Expedition"}</h1>
                        <TbTrekking size={20} />
                    </div>
                    <p className="text-[#FFB133] font-bold text-3xl sm:text-5xl mt-4">{regionOrHeight}</p>
                    <h1 className="mt-8 opacity-70">Embark on an unforgettable journey through Nepal, where every experience is a treasure.</h1>
                    <button onClick={() => scrollToRef(myRef)} className="border-[#CA8F30] mt-8 font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-md mx-auto py-1 px-10">
                        Explore Now
                    </button>
                </div>
            </div>

            {/* REGION OVERVIEW  */}
            <div className="w-4/5 h-96">
                <h1 className="text-3xl">Region Overview</h1>
            </div>

            {/* IMAGES  */}

            <div ref={myRef} className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 rounded overflow-hidden shadow-lg mb-10">
                {Object.keys(trekOrExpenditureCamp).map(trek => (
                    <>{
                        console.log(trek,"trek")
                    }
                        <div className="flex flex-col relative justify-center items-center" onClick={(e)=>{e.preventDefault();handleNextPage(trek)}}>
                            <img className="opacity-95 " src={Image || trek.photos} alt="Sunset in the mountains" />
                            <h1 className="text-xl lg:text-3xl text-white absolute">{Object.values(trek)}</h1>
                        </div>
                    </>
                ))}
            </div >
        </>
    )
}

export default InnerSub

