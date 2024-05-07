import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import MountainPic from "../../../Assets/pictures/Mountain.webp"

const DiscoverSection = () => {
    return (
        <>
            <div class='relative'>
                <div class='flex flex-col md:flex-row md:w-4/5 m-auto py-10 md:py-20 gap-10 md:gap-20 relative'>
                    <div class='w-full md:w-[50%]'>
                        <img alt="image" class="w-full rounded-lg shadow-lg" src="https://i.pinimg.com/564x/a9/32/c4/a932c489a664e371ae851ca0cea41018.jpg" />
                    </div>
                    <div class='flex flex-col gap-8 md:w-[50%]'>
                        <h1 class="text-3xl md:text-5xl font-semibold">Discover <span class='text-[#CA8F30]'>Nepal</span></h1>
                        <div class='flex flex-col gap-4'>
                            <p>Welcome to <span class='text-[#CA8F30]'>SummitTrekkers</span>, where adventure awaits around every corner. As avid travelers
                                ourselves, we're here to ignite your wanderlust and create unforgettable memories.</p>
                            <p>From majestic mountains to vibrant cities, our handpicked destinations promise to captivate your
                                heart and soul. Let's embark on a journey together, where every experience is a story waiting to be
                                told. Discover the world with SummitTrekkers today!</p>
                        </div>
                        <button class="border-[#CA8F30] font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-3xl w-full md:w-36 py-2 px-2">
                            Learn More
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    <img src={MountainPic} alt='Mountain Pic' style={{ height: '180px' }} class='absolute -bottom-10 right-5 md:-bottom-20 md:right-10' />
                </div>
                <div class="w-[200px] h-[200px] bg-[#e8d2b0] rounded-full flex items-center justify-center absolute -top-10 right-0 md:-top-[50%] md:-right-[50%] "></div>
            </div>

        </>
    );
};

export default DiscoverSection;


{/* <div className='relative'>
                <div className='flex w-4/5 m-auto py-20 gap-20 relative'>
                    <div className='w-[700px]'>
                        <img alt="image" className="max-w-full rounded-lg shadow-lg" src="https://i.pinimg.com/564x/a9/32/c4/a932c489a664e371ae851ca0cea41018.jpg" />
                    </div>
                    <div className='flex flex-col gap-14 text-[#393939]'>
                        <h1 className="text-5xl font-semibold">Discover <span className='text-[#CA8F30]'>Nepal</span> </h1>
                        <div className='flex flex-col gap-4'>
                            <p> Welcome to <span className='text-[#CA8F30]'>SummitTrekkers</span>, where adventure awaits around every corner. As avid travelers
                                ourselves, we're here to ignite your wanderlust and create unforgettable memories. </p>
                            <p>From majestic mountains to vibrant cities, our handpicked destinations promise to captivate your
                                heart and soul. Let's embark on a journey together, where every experience is a story waiting to be
                                told. Discover the world with SummitTrekkers today!</p>
                        </div>
                        <button className="border-[#CA8F30] font-semibold flex justify-center items-center border-2 border-solid text-[#CA8F30] hover:bg-[#CA8F30] hover:text-white rounded-3xl w-36 py-2 px-2">
                            Learn More
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    <img src={MountainPic} alt='Mountain Pic' style={{ height: '180px' }} className='absolute -bottom-20 right-10' />
                </div >
                <div className="w-[427px] h-[427px] bg-[#e8d2b0] rounded-full flex items-center justify-center absolute -top-[213px] -right-[213px] "></div>
                {/* <div className="w-[427px] h-[427px] bg-[#e8d2b0] rounded-full flex items-center justify-center absolute top-[122px] -left-[279px] "></div> */}
{/*</div> */ }