import React,{useState} from 'react'
import ReviewCard from '../../HomePage/Review/ReviewCard'

const Reviews = ({sectionsRef,feedData}) => {
  const [currentIndex,setCurrentIndex]=useState({
    page:1,
    perPage:4
  }
  )
  
  return (
    <div id='section-9' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[8] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Reviews</p></h2>
            <div className="  flex justify-between overflow-y-auto  no-scroll scrollable-container  mx-auto md:w-[60%] lg:w-full min-h-60 ">
            {" "}
            <ReviewCard from={feedData[0]} page={currentIndex.page} perPage={currentIndex.perPage} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
            
          </div>
          
            </div>
       </div>
    </div>
  )
}

export default Reviews