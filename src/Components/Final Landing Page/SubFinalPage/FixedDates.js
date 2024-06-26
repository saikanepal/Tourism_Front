import React from 'react'

const FixedDates = ({sectionsRef}) => {
  return (
    <div id='section-6' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[5] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Fixed Dates</p></h2>
            </div>
       </div>
    </div>
  )
}

export default FixedDates