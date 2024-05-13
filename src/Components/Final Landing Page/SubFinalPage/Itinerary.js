import React from 'react'

const Itinerary = ({sectionsRef}) => {
    
  return (
    <div id='section-2' className='flex justify-center mt-10' ref={(section) => (sectionsRef.current[1] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Itinerary</p></h2>
            <div>
                <p className='flex items-center'><div className='px-5 py-2 bg-custom-gold mr-10'>Day 1</div><div>Location</div></p>
                <div className='h-1 bg-gray-200 mt-5 mb-5'></div>
            </div>         

            <div>
                <p className='flex items-center'><div className='px-5 py-2 bg-custom-gold mr-10'>Day 1</div><div>Location</div></p>
                <div className='h-1 bg-gray-200 mt-5'></div>
            </div>        
            </div>
       </div>
    </div>
  )
}

export default Itinerary