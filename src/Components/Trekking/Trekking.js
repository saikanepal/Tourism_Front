import React from 'react'
import Card from './Card'
import cardData from './CardData/data'
const Trekking = () => {
    
  return (
    <div className='flex justify-center'>
    <div className='w-4/5 mx-0 items-center'>
        <h1 className='text-center w-full mb-10 text-custom-yellow text-5xl font-light'>Trekking</h1>
        {cardData.map((data)=>(
            <Card cardData={data}/>
        ))}
    </div>
    </div>
  )
}

export default Trekking