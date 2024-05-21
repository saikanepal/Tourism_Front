import React from 'react'

import { CiClock2 } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
const Caroussel = ({imageCarousel}) => {
//  console.log(imageCarousel)
 const firstCaro=Object.values(imageCarousel[1])[0]
 const secondCaro=Object.values(imageCarousel[1])[1]
 const thirdCaro=Object.values(imageCarousel[1])[2]
const navigate=useNavigate()
 const handleBookNow=(val)=>{
  console.log("hello")
  navigate(`/trekking/${imageCarousel[0]}/${Object.keys(imageCarousel[1])[val]}`)
 }

  return (
    <div className='w-full max-w-lg'  >
        {/* <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} alt='image1' /></div> */}
    
        <Carousel autoPlay={true} onClickItem={(i)=>handleBookNow(i)}>
              <div className='relative ' >
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={firstCaro?.photos} className='absolute -top-10 left-0' /></div>
              <p className="absolute top-0 left-0 w-full h-full m-0 flex grid justify-items-end flex-col text-right">
                <p className=' text-bold text-white pr-10 pt-5 '>{Object.keys(imageCarousel[1])[0]}</p>
                <div className='flex items-end'>
                <button className=' mb-10 mr-10 text-sm border-custom-yellow bg-custom-gold text-white rounded-3xl h-10 px-6 z-30'>Book Now</button>
                </div>
              </p>
              <div className='absolute bottom-10 left-10 z-10 text-white hidden sm:hidden lg:block '> 
                <div className=' flex'><CiClock2 /> <p className='text-sm ml-2'>5 Days</p></div>
                <div className='text-sm px-7'>Rating...</div>
              </div>
              </div>
          
              <div className='relative '>
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={secondCaro?.photos} className='absolute -top-20 left-0'/></div>
              <p className="absolute top-0 left-0 w-full h-full m-0 flex grid justify-items-end flex-col text-right">
                <p className=' text-bold text-white pr-10 pt-5 '>{Object.keys(imageCarousel[1])[1]}</p>
                <div className='flex items-end'>
                <button className=' mb-10 mr-10 text-sm border-custom-yellow bg-custom-gold text-white rounded-3xl h-10 px-6'>Book Now</button>
                </div>
              </p>
              <div className='absolute bottom-10 left-10 z-10 text-white hidden sm:hidden lg:block '> 
                <div className=' flex'><CiClock2 /> <p className='text-sm ml-2'>5 Days</p></div>
                <div className='text-sm px-7'>Rating...</div>
              </div>
              </div>

              <div className='relative'>
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={thirdCaro?.photos} className='absolute -top-10 left-0'/></div>
              <p className="absolute top-0 left-0 w-full h-full m-0 flex grid justify-items-end flex-col text-right">
                <p className=' text-bold text-white pr-10 pt-5 '>{Object.keys(imageCarousel[1])[2]}</p>
                <div className='flex items-end'>
                <button className=' mb-10 mr-10 text-sm border-custom-yellow bg-custom-gold text-white rounded-3xl h-10 px-6'>Book Now</button>
                </div>
              </p>
              <div className='absolute bottom-10 left-10 z-10 text-white hidden sm:hidden lg:block '> 
                <div className=' flex'><CiClock2 /> <p className='text-sm ml-2'>5 Days</p></div>
                <div className='text-sm px-7'>Rating...</div>
              </div>
              </div>
        
                
                
            </Carousel>
    </div>
  )
}

export default Caroussel