import React from 'react'
import Image from './SubComponent/Image'
import Video from './SubComponent/Video'

const Gallery = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around flex-wrap'>
        <Image/>
        <Video/>
    </div>
  )
}

export default Gallery