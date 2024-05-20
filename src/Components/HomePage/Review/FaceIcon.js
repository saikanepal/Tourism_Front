import React from 'react'
import { FaFaceGrinBeam, FaFaceGrinHearts, FaFaceMehBlank, FaFaceSadCry, FaFaceSadTear, FaFaceTired } from "react-icons/fa6";
const FaceIcon = ({rating}) => {

  return (
    <div className='flex items-center'>
        {rating===5 && <FaFaceGrinHearts className='text-5xl mr-4 text-orange-600'/>}
        {rating===4 && <FaFaceGrinBeam className='text-5xl mr-4 text-orange-500'/>}
        {rating===3 && <FaFaceTired className='text-5xl mr-4 text-orange-400'/>}
        {rating===2 && <FaFaceMehBlank className='text-5xl mr-4 text-orange-300'/>}
        {rating===1 && <FaFaceSadTear className='text-5xl mr-4 text-orange-200'/>}
        {rating===0 && <FaFaceSadCry className='text-5xl mr-4 text-orange-100'/>}
    </div>
  )
}

export default FaceIcon