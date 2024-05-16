import React from 'react'
const RouteMap = ({sectionsRef,feedData}) => {
  return (
    <div id='section-3' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[2] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Route Map</p></h2>
            <div className='ml-5'>
              <img src={feedData} alt='...' className='h-64'/>
            </div>
            </div>
       </div>
    </div>
  )
}

export default RouteMap