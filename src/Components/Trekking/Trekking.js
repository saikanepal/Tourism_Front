import React from "react";
import Card from "./Card";
import cardData from "./CardData/data";
import trekking from "../../Assets/Data/Trekking";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Trekking = () => {

  
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[95%] lg:w-4/5 mx-0 items-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-center w-full mb-20 text-custom-yellow text-5xl font-light mt-10"
        >
          Trekking
        </motion.h1>
        {Object.entries(trekking.trekking)
          .slice(0, 3)
          .map((data, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{once:true}}
            >
             
              <Card cardData={data} key={index} />
            </motion.div>
          ))}

<div className='flex justify-center'><motion.button initial={{scale:1,backgroundColor:"white",color:"#F29C0F"}} whileHover={{scale:1.1,backgroundColor:"#F29C0F",color:"white"}} className='flex gap-2 text-xl items-center bg-custom-gold px-3 py-2 my-10 text-center rounded-3xl text-white text-normal'><div onClick={() => { window.location.href = '/trekking'}}>View More</div><FaAngleRight /></motion.button></div>
    </div>
      </div>
 
  );
};

export default Trekking;
