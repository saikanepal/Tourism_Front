import Image from "../../Assets/banner.png"
import React from 'react'
import trekking from "../../Assets/Data/Trekking"
import expeditions from "../../Assets/Data/Expedition"
import { useLocation, useParams } from "react-router-dom"
import InnerSubImage from "../../Assets/InnerSubImage.jpg"
import HeroSectionInner from "./HeroSectionInner"
import { TbTrekking } from "react-icons/tb";

const InnerSub = () => {
    const location = useLocation();
    const splitValue = location.pathname.split("/")

    const trekOrExpedition = decodeURIComponent(splitValue[1]) === "trekking" ? trekking : expeditions
    const trekOrExpenditureLocation = Object.values(trekOrExpedition)
    const trekOrExpenditureCamp = trekOrExpenditureLocation[0][decodeURIComponent(splitValue[2])]


    return (
        <>


            {/* WORKING ON DYNAMIC HERO SECTION  */}
            <HeroSectionInner />

            <div className="w-4/5 h-96">
                <h1 className="text-3xl">Region Overview</h1>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 rounded overflow-hidden shadow-lg mb-10">
                {Object.keys(trekOrExpenditureCamp).map(trek => (
                    <>
                        <div className="flex flex-col relative justify-center items-center">
                            <img className="bg-opacity-90" src={Image || trek.photos} alt="Sunset in the mountains" />
                            <h1 className="text-xl sm:text-3xl text-white absolute">{Object.values(trek)}</h1>
                        </div>
                    </>
                ))}
            </div >
        </>
    )
}

export default InnerSub

