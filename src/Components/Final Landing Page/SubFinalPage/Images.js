import React from 'react';

const Images = ({ sectionsRef, feedData }) => {
  return (
    <div id='section-8' className='flex justify-center mt-10 lg:w-3/4' ref={(section) => (sectionsRef.current[7] = section)}>
       <div className='w-4/5'>
            <div className=''>
              <h2 className='flex items-center mb-5'>
                <div className='w-5 h-5 bg-custom-gold rounded-3xl mr-2'></div>
                <p className='text-2xl font-bold text-black'>Images</p>
              </h2>
              <div className='ml-5 flex flex-wrap'>
            {feedData ? feedData.map((imageComponent, index) => (
              <div key={index} className="mb-5 flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src={imageComponent} alt='...' className='h-64 w-auto max-w-full' />
              </div>
            )):"Feed Data Not Found"}
          </div>
            </div>
       </div>
    </div>
  );
};

export default Images;
