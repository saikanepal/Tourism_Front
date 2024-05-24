import React, { useEffect, useRef } from 'react'
import trekking from "../../Assets/Data/Trekking"
import expeditions from "../../Assets/Data/Expedition"
import { useLocation, useNavigate } from "react-router-dom"
import InnerSubImage from "../../Assets/Carousel/mountain.jpg"
import { TbTrekking } from "react-icons/tb";
import {AnimatePresence, motion} from 'framer-motion'
import Header from "../HomePage/Nav/Header"
import Footer from '../Footer/Footer'

const InnerSub = () => {
    const myRef = useRef(null)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
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

    const handleNextPage=(trek,data)=>{
        navigate(`${location.pathname}/${data.data}`)
        console.log(data.data)
    }

    const animateBox={
        initial:{opacity:1,scale:1},
        animate:{opacity:0.7,scale:1.1}
    }
    return (
        <>
            <Header/>
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
                    <h1 className="mt-8 mx-7 opacity-70">Embark on an unforgettable journey through Nepal, where every experience is a treasure.</h1>
                    <AnimatePresence>
                    <motion.button whileHover={{scale:1.1}} initial={{scale:1}}  onClick={() => scrollToRef(myRef)} className="border-[#CA8F30] mt-8 font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-md mx-auto py-1 px-10">
                        Explore Now
                    </motion.button>
                    </AnimatePresence>
                </div>
            </div>

            {/* REGION OVERVIEW  */}
            <div className="w-4/5 h-96">
                <h1 className="text-3xl">Region Overview</h1>
            </div>

            {/* IMAGES  */}

            <div ref={myRef} className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 rounded overflow-hidden shadow-lg mb-10">
                {Object.values(trekOrExpenditureCamp).map((trek,i) => (
                    
                        <motion.div initial='initial' key={i} whileHover='animate' className="flex flex-col relative justify-center items-center bg-black" onClick={(e)=>{e.preventDefault();handleNextPage(trek,{data:Object.keys(trekOrExpenditureCamp)[i]})}}>
                        <div className="overflow-hidden relative h-96 " >
                            <motion.img 
                            variants={animateBox}
                            transition={{type:'just'}}
                            src={trek.photos}
                            alt="Sunset in the mountains"
                                className="w-full h-96 object-cover object-center opacity-95"
                            />
                        </div>
                            
                            <h1 className="text-xl lg:text-3xl text-white absolute">{Object.keys(trekOrExpenditureCamp)[i]}</h1>
                        </motion.div>
                    
                ))}
            </div >
            <Footer/>
        </>
    )
}

export default InnerSub

