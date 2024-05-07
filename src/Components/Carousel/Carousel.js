import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Caroussel = ({imageCarousel}) => {
 
  return (
    <div className=''>
        {/* <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} alt='image1' /></div> */}

        <Carousel>
                <div className='relative'>
                    <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} /></div>
                    <p className="legend absolute top-0 left-0 w-full h-full m-0">Legend 1</p>
                </div>
                <div>
                <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} /></div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <div className='h-80 w-full overflow-hidden'><img src={imageCarousel[0]} /></div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Caroussel