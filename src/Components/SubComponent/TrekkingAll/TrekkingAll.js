import React from 'react'
import trekking from '../../../Assets/Data/Trekking'
import { regionImage } from '../../../Assets/Data/Region'
import Caroussel from '../../Carousel/Carousel'
import { useNavigate, useLocation } from 'react-router-dom'
import expeditions from '../../../Assets/Data/Expedition'
import { FaAngleRight } from "react-icons/fa";
import InnerCarosel from './InnerCarosel/InnerCarosel'

const TrekkingAll = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const handleClick = (data) => {
        console.log(data)
        navigate(`${location.pathname}/${data[0]}`)
    }
  return (
    <div className='flex justify-center '>
        <div className='w-4/5 flex flex-col mt-10'>
        
            {
                Object.entries(location.pathname==='/trekking'?trekking.trekking:expeditions.expeditions).map((data,i)=>{
                    return <div className={` w-full flex justify-center lg:justify-between mb-10`} >
                                <div className='w-full lg:w-2/5 flex gap-3 justify-center lg:justify-start pb-20 lg:pb-0 h-full '>
                                    {/* <h3>{regionImage[i]}</h3> */}
                                    {/* <img src={exp} className='w-32 h-32'/> */}
                                    <div className='flex items-center lg:items-start flex-col text-center lg:text-left mr-0 lg:mr-14 '>
                                        <h1 className='text-4xl text-bold text-custom-gold h-[150px] pt-5 '>{data[0]}</h1>
                                        <div className='flex flex-col gap-10 items-center lg:items-start'>
                                        <p>{Object.values(data[1])[0].overview}</p>
                                   
                                   <button className='flex justify-center items-center gap-2 text-center text-sm bg-custom-yellow text-white hover:bg-custom-gold px-3 py-2 rounded-3xl w-32' onClick={(e)=>{e.preventDefault();handleClick(data);}}><div >View More</div> <FaAngleRight /></button>
                                        </div>
                                        
                                    </div>
                                </div>
            
            
            {/* change size here */}


                                <div className='hidden lg:block w-3/5'>        
                                <div className='flex justify-center itemse-center w-full'><InnerCarosel imageCarosel={data}/></div>
                                </div>
                    </div>
                })
            }
           
        </div>
    </div>
  )
}

export default TrekkingAll