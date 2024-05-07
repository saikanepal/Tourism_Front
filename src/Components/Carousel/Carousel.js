import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Caroussel = ({imageCarousel}) => {
 
  return (
    <div className=''>
        {/* <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} alt='image1' /></div> */}

        <Carousel autoPlay={true}>
              <div className='relative'>
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={imageCarousel[0]} className='absolute -top-10 left-0' /></div>
              <p className="absolute top-0 left-0 w-full h-full m-0">
                <p className='text-right mr-10 mt-5 text-bold text-white'>Annapurna Base Camp</p>
              </p>
              </div>
          
              <div className='relative'>
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={imageCarousel[1]} className='absolute -top-20 left-0'/></div>
              <p className="absolute top-0 left-0 w-full h-full m-0">
                <p className='text-right mr-10 mt-5 text-bold text-white'>Annapurna Base Camp</p>
              </p>
              </div>

              <div className='relative'>
              <div className='h-96 w-full overflow-hidden rounded-2xl relative'><img src={imageCarousel[1]} className='absolute -top-10 left-0'/></div>
              <p className="absolute top-0 left-0 w-full h-full m-0">
                <p className='text-right mr-10 mt-5 text-bold text-white'>Annapurna Base Camp</p>
              </p>
              </div>
        
                
                
            </Carousel>
    </div>
  )
}

export default Caroussel