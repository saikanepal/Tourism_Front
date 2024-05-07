import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import MountainPic from "../../../Assets/pictures/Mountain.webp"

const DiscoverSection = () => {
    return (
        <>
            <div className='relative px-10 md:px-0 overflow-hidden '>
                <div className='flex flex-col items-center md:flex-row md:w-4/5 m-auto py-10 md:py-20 gap-10 md:gap-20 relative'>
                    <div className='w-[full] md:w-[403px]'>
                        <img alt="image" className="w-full rounded-lg shadow-lg" src="https://i.pinimg.com/564x/a9/32/c4/a932c489a664e371ae851ca0cea41018.jpg" />
                    </div>
                    <div className='flex flex-col items-center md:items-start md:w-[60%] gap-7 md:gap-12 text-[#393939]'>
                        <h1 className="text-3xl md:text-5xl font-semibold">Discover <span className='text-[#CA8F30]'>Nepal</span></h1>
                        <div className='flex flex-col gap-4'>
                            <p>Welcome to <span className='text-[#CA8F30]'>SummitTrekkers</span>, where adventure awaits around every corner. As avid travelers
                                ourselves, we're here to ignite your wanderlust and create unforgettable memories.</p>
                            <p>From majestic mountains to vibrant cities, our handpicked destinations promise to captivate your
                                heart and soul. Let's embark on a journey together, where every experience is a story waiting to be
                                told. Discover the world with SummitTrekkers today!</p>
                        </div>
                        <div className='w-full'>
                            <button className="border-[#CA8F30] font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-3xl w-full md:w-36 py-3 px-2">
                                Learn More
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    <img src={MountainPic} alt='Mountain Pic' style={{ height: '180px' }} className='hidden md:block md:absolute md:-bottom-14 md:right-8' />
                </div>
                <div className="hidden w-[427px] h-[427px] bg-[#e8d2b0] rounded-full md:block items-center justify-center absolute -top-[253px] -right-[253px]"></div>
                <div className="hidden w-[427px] h-[427px] bg-[#e8d2b0] rounded-full md:block items-center justify-center absolute -left-[300px] -bottom-[300px]"></div>
            </div>


        </>
    );
};

export default DiscoverSection;




