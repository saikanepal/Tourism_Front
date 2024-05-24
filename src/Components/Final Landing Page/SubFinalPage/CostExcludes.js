import React from 'react'
import {ImCross} from 'react-icons/im'
import {motion} from 'framer-motion'
const CostExcludes = ({sectionsRef,feedData}) => {
  return (
    <div id='section-5' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[4] = section)}>
       <div className='w-4/5'>
            <div className=''>
            <h2 className='flex items-center mb-5'><div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div><p className='text-2xl font-bold text-black'>Cost Excludes</p></h2>
            {feedData?feedData.map((data,i)=>(
              <motion.div key={i} initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0}} transition={{delay:(i+0.01)/10, duration:0.4}} viewport={{once:true}}>
              <div className='flex items-center justify-between'><div className='px-5 py-2 mr-10'>{data}</div><div className='text-lg text-red-500'><ImCross/></div></div>
              <div className='h-1 bg-gray-200 mt-5 mb-5'></div>
          </motion.div>    
            )):"Cost Excludes Not Found"}  
            </div>
       </div>
    </div>
  )
}

export default CostExcludes