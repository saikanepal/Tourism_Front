import { useState } from "react";
import annapurna1 from '../../../../Assets/Carousel/Annapurna1.jpg'
import { useNavigate } from "react-router-dom";
import {animate, color, motion} from 'framer-motion';

const Video = () => {
  const navigate=useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    navigate('/gallery');
  }
  const opacityAnimation={
    initial:{opacity:1},
    hover:{opacity:0.7}
  }
  const buttonAnimation={
    initial:{border:"2px solid transparent",color:"black",backgroundColor:'transparent'},
    hover:{border:"2px solid white",color:"white",backgroundColor:'#ca8f30'}
  }
  return (
    <motion.div initial='initial' whileHover='hover' className="w-full min-w-80 h-72 overflow-hidden rounded relative bg-black" onClick={handleClick}>
      <motion.img variants={opacityAnimation}  src={annapurna1} className="object-cover"/>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"><motion.button variants={buttonAnimation} className=" px-5 py-2 rounded-2xl">Go</motion.button></div>
    </motion.div>
  )
}

export default Video