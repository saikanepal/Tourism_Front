import React from 'react'
import trekking from '../../../Assets/Data/Trekking'
import {regionImage} from '../../../Assets/Data/Region'
import Caroussel from '../../Carousel/Carousel'


import { FaAngleRight } from "react-icons/fa";
const TrekkingAll = () => {
  return (
    <div className='flex justify-center '>
        <div className='w-4/5 flex flex-col'>
        
            {
                Object.entries(trekking.trekking).map((data,i)=>{
                    return <div className={`w-full flex items-center justify-between ${(i%2)?'flex-row-reverse':''}`}>
                                <div className='grow flex gap-3'>
                                    {/* <h3>{regionImage[i]}</h3> */}
                                    {/* <img src={exp} className='w-32 h-32'/> */}
                                    <div className='flex justify-center flex-col items-center gap-10 '>
                                        <h1 className='text-4xl text-bold text-custom-gold'>{data[0]}</h1>
                                        {/* <p>{Object.values(data[1])[0].overview}</p> */}
                                        <button className='flex justify-center items-center gap-2 text-center text-sm bg-custom-yellow text-white hover:bg-custom-gold px-3 py-2 rounded-3xl w-32'><div >View More</div> <FaAngleRight /></button>
                                    </div>
                                </div>
            
            
            {/* change size here */}


                                <div className='w-1/2 flex justify-center items-center'>        
                                <Caroussel imageCarousel={data}/>
                                </div>
                    </div>
                })
            }
           
        </div>
    </div>
  )
}

export default TrekkingAll