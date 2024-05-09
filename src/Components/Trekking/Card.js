import React from 'react'
import Caroussel from '../Carousel/Carousel'

const Card = ({cardData,trekking}) => {
    const abc='56 48 16 12'
   const description=Object.values(cardData[1])[0].overview
  return (
    <div>
        <div className='flex justify-between text-lg font-light mb-10 min-h-96 mt-10 items-center flex-col sm:flex-col lg:flex-row'>
        <div className=' space-y-16'>
            <div className='text-4xl font-light '>{cardData[0]}</div>
            <div className='mr-16'>{description}</div>
            <div className='flex justify-center mr-16'>
                <button className='text-base border border-solid border-custom-yellow rounded-3xl px-4 py-2 text-custom-yellow hover:bg-custom-yellow hover:text-white transition duration-300 ease-in-out'>Learn More</button>
            </div>
        </div>
        <div className='w-full mt-10 sm:mt-10 lg:mt-0'><Caroussel imageCarousel={cardData}/></div>
        
    </div>
    <div className='w-full h-1 bg-black'></div>
    </div>
  )
}

export default Card