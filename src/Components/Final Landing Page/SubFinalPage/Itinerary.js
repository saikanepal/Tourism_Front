import React from 'react'

const Itinerary = ({sectionsRef,feedData}) => {
    const iti=feedData[1].itinerary
    console.log("iti",iti)
  return (
    <div id='section-2' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[1] = section)}>
       <div className='w-4/5 '>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Itinerary</p></h2>
            {iti.map((data,i)=>(
              <div >
              <p className='flex items-center'><div className='px-5 py-2 bg-custom-gold mr-10'>Day {i+1}</div><div>{data}</div></p>
              <div className='h-1 bg-gray-200 mt-5 mb-5'></div>
          </div>    
            ))}     

            </div>
       </div>
    </div>
  )
}

export default Itinerary