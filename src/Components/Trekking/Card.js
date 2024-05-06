import React from 'react'
import Caroussel from '../Carousel/Carousel'

const Card = ({cardData}) => {
    const abc='56 48 16 12'
  return (
    <div>
        <div className='flex justify-between text-lg font-light mb-10 min-h-96 mt-10 items-center'>
        <div className='flex-1 space-y-10'>
            <div className='text-4xl font-light '>{cardData.name}</div>
            <div className='mr-16'>{cardData.desc}</div>
            <div className='flex justify-center mr-16'>
                <button className='text-base border border-solid border-custom-yellow rounded-3xl px-4 py-2 text-custom-yellow hover:bg-custom-yellow hover:text-white transition duration-300 ease-in-out'>Learn More</button>
            </div>
        </div>
        <div className='flex-1'><Caroussel/></div>
        
    </div>
    <div className='w-full h-1 bg-black'></div>
    </div>
  )
}

export default Card