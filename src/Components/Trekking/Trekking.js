import React from 'react'
import Card from './Card'
import cardData from './CardData/data'
import trekking from '../../Assets/Data/Trekking';
import {motion} from 'framer-motion'
import Link from  'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Trekking = () => {
  return (
    <div className='flex justify-center'>
    <div className='w-4/5 mx-0 items-center'>
        <motion.h1 initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}}  transition={{duration:2}} className='text-center w-full mb-10 text-custom-yellow text-5xl font-light mt-10'>Trekking</motion.h1>
        {Object.entries(trekking.trekking).slice(0,3).map((data,index)=>(
            <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{delay:2,duration:1}}><Card cardData={data} key={index}/></motion.div>        
))}
        

        <div className='flex justify-center'><button className='flex gap-2 text-2xl items-center bg-custom-gold px-5 py-3 my-10 text-center rounded-3xl text-white text-normal'><div onClick={() => { window.location.href = '/trekking'}}>View More</div><FaAngleRight /></button></div>
    </div>
    </div>
  )
}

export default Trekking