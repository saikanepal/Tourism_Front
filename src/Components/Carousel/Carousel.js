import React from 'react'

import { CiClock2 } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
const Caroussel = ({imageCarousel}) => {
//  console.log(imageCarousel)
 const firstCaro=Object.values(imageCarousel[1])[0]
 const secondCaro=Object.values(imageCarousel[1])[1]
 const thirdCaro=Object.values(imageCarousel[1])[2]
 const selfMap=[1,2,3]
const navigate=useNavigate()
 const handleBookNow=(val)=>{
  console.log("hello")
  navigate(`/trekking/${imageCarousel[0]}/${Object.keys(imageCarousel[1])[val]}`)
 }

  return (
   
        
    
        <Carousel autoPlay={true} onClickItem={(i)=>handleBookNow(i)} className='md:w-full' showStatus={false}>
              
          {selfMap.map((n,i)=>{
            return (
              <div className='relative '>
              <div className='h-96 w-full overflow-hidden rounded relative'><img src='https://s3-alpha-sig.figma.com/img/4ceb/9d1a/4afedd7d550156e598108e8e66fa69f4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IeHg7gHoeqcnN8JkKfpp404JecvNItxRM1~7~PDvD0smuZSOd4OuNF5fHHBbLvugSho3S0QcrtkZrw1Ez9iGiEbIoTpAOa9uR~DLAtXDk0MZgjQkLcpJ8lKjrY6TK2W~7Anll9ycBhkJ5HVQczEoUz2T8K9~56kcU7MThWvoFU1xDsJPFAZo6XE1KeHtijY83qaSw3IFQbSFNF3DZEwuiqIZja2Hg4pVoJ3cb0MM5MudO4Y60ivZHouBmmL0qXfIkORuPZ9yBfIGm4VpVfQS5YFFXZqbTNbhJEr7Q9bq1-NA8G79JzVP~E~9n0nmsN0yWaQ2~FiQSK-Awi0zxaLhoA__' className='absolute  left-0'/></div>
              <p className="absolute top-0 left-0 w-full h-full m-0 flex grid justify-items-end flex-col text-right">
                <p className=' text-bold text-white pr-10 pt-5 '>{Object.keys(imageCarousel[1])[i]}</p>
                {/* <div className='flex items-end'>
                <button className=' mb-10 mr-10 text-sm border-custom-yellow bg-custom-gold text-white rounded-3xl h-10 px-6'>Book Now</button>
                </div> */}
              </p>
              {/* <div className='absolute bottom-10 left-10 z-10 text-white hidden sm:hidden lg:block '> 
                <div className=' flex'><CiClock2 /> <p className='text-sm ml-2'>5 Days</p></div>
                
              </div> */}
              </div>
            )
          })}
              

              
        
                
                
            </Carousel>
 
  )
}

export default Caroussel