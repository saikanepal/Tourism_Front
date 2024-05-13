import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { CiClock2 } from 'react-icons/ci';
import image1 from '../../../../Assets/banner.png'
import {motion} from 'framer-motion'
const InnerCarosel = ({imageCarosel}) => {
    const caroeol=[image1,image1]
    const images=Object.values(imageCarosel[1])
    const [hoverAnimate,setHoverAnimate]=useState(false)
    const arrow = {
        initial: {  opacity:0},
        animate: {  opacity:1},
      }
    const arrow2={
        initial: {  y:0 },
        animate: {  y:-40 },
    }
  return (
    <div className='w-full' onMouseEnter={()=>setHoverAnimate(true)} onMouseLeave={()=>setHoverAnimate(false)}>

        <Carousel autoPlay={true}>
                {images.map((i,n)=>{
                    
                    return <div className='w-full'>
                    <div className='h-96 w-full overflow-hidden rounded relative'><img src={image1 && i.photos} className='absolute -top-32 left-0 -z-20' /><div className={`absolute inset-0 bg-black bg-opacity-20 -z-10 ${!hoverAnimate && 'opacity-0'} duration-500 transition-opacity`}></div></div>
                    <motion.p 
                    initial="initial"
                    animate="initial"
                    whileHover="animate"
                    className="absolute top-0 left-0 w-full h-full m-0 flex flex-col justify-center">
                        <motion.p
                        
                        variants={arrow2}  className=' grow flex justify-center items-end font-bold text-white pb-10 text-2xl'>{Object.keys(imageCarosel[1])[n]}</motion.p>
                        <motion.p 
                        variants={arrow} className={`grow  text-white font-light transition-all duration-1000 eas`}>{i.description}</motion.p>
                       
              </motion.p>
                </div>
                })}
               
    </Carousel>
    </div>
  )
}

export default InnerCarosel