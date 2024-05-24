import React from 'react'
import Image from './SubComponent/Image'
import Video from './SubComponent/Video'

const Gallery = () => {
  return (
    <div className='flex justify-center items-center mb-20'>
      <div className='w-4/5 flex  justify-around flex-wrap justify-center items-center mt-10 gap-20'>
        <h1
          className="text-center w-full text-custom-yellow text-5xl font-light"
        >
          Gallery
        </h1>
        <div className='flex-1 max-w-[500px] flex flex-col items-center justify-center'>
        <h2 className='mb-5 text-2xl'>Photos</h2>
        <Image/>
        </div>
        <div className='flex-1 max-w-[500px] flex flex-col items-center justify-center'>
        <h2 className='mb-5 text-2xl '>Videos</h2>
        <Video/>
        </div>
        <div className='w-full h-1 bg-gray-200'></div>
    </div>
    </div>
  )
}

export default Gallery