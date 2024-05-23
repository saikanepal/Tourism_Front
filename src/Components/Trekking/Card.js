import React from 'react'
import Caroussel from '../Carousel/Carousel'
import { useNavigate } from 'react-router-dom'
import {animate, motion} from 'framer-motion';
import { FaAngleRight } from "react-icons/fa6";
const Card = ({cardData,trekking}) => {
    const navigate=useNavigate()
   const description=Object.values(cardData[1])[0].overview
   const handleClick=(cardData)=>{
    navigate(`/trekking/${cardData[0]}`)
  }
  const animateArrow={
    initial:{x:0},
    animate:{x:10}
  }
  return (
    <div>
        <div className='flex justify-between text-lg font-light mb-10 min-h-96 mt-10  flex-col-reverse sm:flex-col lg:flex-row gap-0 lg:gap-32'>
        <div className='w-full text-center lg:text-left lg:w-[50%] '>
            <div className='text-4xl font-light h-1/3 py-3'>{cardData[0]}</div>
            <div className=' h-full gap-10 flex flex-col'>
            <div className=''>{description}</div>
            <div className='flex justify-center mr-0 mb-10 lg:mr-16'>
                <motion.button initial='initial' whileHover='animate' className='flex items-center text-base border border-solid border-custom-yellow rounded-3xl px-4  py-2 text-custom-yellow hover:bg-custom-yellow hover:text-white transition duration-300 ease-in-out' onClick={e=>{e.preventDefault();handleClick(cardData)}}><div>Learn More</div><motion.div variants={animateArrow}><FaAngleRight/></motion.div></motion.button>
            </div>
            </div>
        </div>
        <Caroussel imageCarousel={cardData}/>
        
    </div>
    <div className='w-full h-1 bg-gray-200'></div>
    </div>
  )
}

export default Card