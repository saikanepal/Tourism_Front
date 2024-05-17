import React from 'react'
import { TiTick } from "react-icons/ti";
const CostIncludes = ({sectionsRef,feedData}) => {
  return (
    <div id='section-4' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[3] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Cost Includes</p></h2>
            {feedData.map((data,i)=>(
              <div >
              <p className='flex items-center justify-between'><div className='px-5 py-2 mr-10'>{data}</div><div className='text-3xl text-green-500'><TiTick /></div></p>
              <div className='h-1 bg-gray-200 mt-5 mb-5'></div>
          </div>    
            ))}   
            </div>
       </div>
    </div>
  )
}

export default CostIncludes