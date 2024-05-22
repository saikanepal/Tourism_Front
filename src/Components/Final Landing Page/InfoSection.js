import { LuMountain } from "react-icons/lu";
import { CiWarning,CiLocationArrow1 } from "react-icons/ci";
import { TbHourglassHigh,TbBrandFacebook } from "react-icons/tb";
import { FaThumbsUp,FaWalking,FaTwitter,FaInstagram } from "react-icons/fa";
import { MdGroups2,MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {useState} from 'react';


export default function InfoSection(props) {
    console.log(props,"props")
  
    return (
         <div className="w-4/5 flex flex-col flex-wrap justify-between lg:flex-row mt-4 mb-10 gap-10">
        <div className="flex flex-col items-start">
    <div className="flex mb-4 w-full justify-between">
    {/* <div className="w-1/2"> */}
    <div className="bg-yellow-400 p-2 hover:bg-yellow-500 text-center text-white" style={{ backgroundColor: '#CA8F30', minWidth: '150px' }}>
        <span className="inline-block min-w-0 truncate">
            Max Elevation
        </span>
    </div>
{/* </div> */}

        <div className="flex items-center ml-10 gap-5">
            <IconContext.Provider value={{ color: '#CA8F30' }}> <LuMountain className="w-6 h-6 mr-2" /> </IconContext.Provider> 
            <div>{props.data.elevation}</div>
        </div>
    </div>
    <div className="flex mb-4 w-full justify-between"> 
    {/* <div className="w-1/2"> */}
    <div className="bg-yellow-400 p-2 hover:bg-yellow-500 text-center text-white" style={{ backgroundColor: '#CA8F30', minWidth: '150px' }}>
        <span className="inline-block min-w-0 truncate">
            Difficulty
        </span>
    </div>
{/* </div> */}


        <div className="flex items-center ml-10 gap-5">
            <IconContext.Provider value={{ color: '#CA8F30' }}> <CiWarning className="w-6 h-6 mr-2" />  </IconContext.Provider>
            <div>{props.Difficulty}</div>
        </div>
    </div>
    <div className="flex mb-4 w-full justify-between"> 
    {/* <div className="w-1/2"> */}
    <div className="bg-yellow-400 p-2 hover:bg-yellow-500 text-center text-white" style={{ backgroundColor: '#CA8F30', minWidth: '150px' }}>
        <span className="inline-block min-w-0 truncate">
            Time
        </span>
    </div>
{/* </div> */}
        <div className="flex items-center ml-10 gap-5">
            <IconContext.Provider value={{ color: '#CA8F30' }}><TbHourglassHigh className="w-6 h-6 mr-2" />  </IconContext.Provider>
            <div>{props.data.Time}</div>
        </div>
    </div>

    <div className="flex mb-4 w-full justify-between"> 
    {/* <div className="w-1/2"> */}
    <div className="bg-yellow-400 p-2 hover:bg-yellow-500 text-center text-white" style={{ backgroundColor: '#CA8F30', minWidth: '150px' }}>
        <span className="inline-block min-w-0 truncate">
            Region
        </span>
    </div>
{/* </div> */}
        <div className="flex items-center ml-10 gap-5">
            <IconContext.Provider value={{ color: '#CA8F30' }}><CiLocationArrow1 className="w-6 h-6 mr-2" />  </IconContext.Provider>
            <div className="whitespace-nowrap">{props.data.Region}</div>
        </div>
    </div>
</div> 
            
 


       <div className="flex">
    <div className="mb-4 w-full">
        <div className="flex justify-between"> 
            <div className="bg-transparent p-2 text-center text-black mt-2 mb-8">
                <div className="flex items-center">
                    <IconContext.Provider value={{ color: '#CA8F30'}}><FaThumbsUp className="w-6 h-6 mr-2" /></IconContext.Provider> 
                    Best Season
                </div>
            </div>
            <div className="bg-transparent p-2  text-black mt-2 mb-8 ml-4">
            {props.data.GroupSize}
            </div>
        </div>

        <div className="flex justify-between"> 
            <div className="bg-transparent p-2 text-center text-black mt-2 mb-8">
                <div className="flex items-center">
                    <IconContext.Provider value={{ color: '#CA8F30'}}><MdGroups2 className="w-6 h-6 mr-2" /></IconContext.Provider>
                    Group Size
                </div>
            </div>
            <div className="bg-transparent p-2   text-black mt-2 mb-8 ml-4">
            {props.data.GroupSize}
            </div>
        </div>

        <div className="flex justify-between"> 
            <div className="bg-transparent p-2 text-center text-black mt-2 mb-8">
                <div className="flex items-center">
                    <IconContext.Provider value={{ color: '#CA8F30'}}><FaWalking className="w-6 h-6 mr-2" /></IconContext.Provider> 
                    Walking per Day
                </div>
            </div>
            <div className="bg-transparent p-2 text-left text-black mt-2 mb-8 ml-4">
            {props.data.GroupSize}
            </div>
        </div>
    </div>
</div>


         <div className="flex flex-col ml-4">
    
    <div className="mb-4">
    <div className="flex flex-wrap">
    <div className="bg-transparent p-2 text-center text-black">
        <div className="flex items-center">
        <IconContext.Provider value={{ color: '#CA8F30'}}> <MdEmail className="w-6 h-6 mr-2" /> </IconContext.Provider> 
            Email
        </div>
    </div>
    <div className="bg-transparent p-2 text-left text-black ml-4">
        example@example.com
    </div>
    
</div>
<hr className="my-2 border-gray-300 w-auto sm:w-auto md:w-auto"/> 



        

        <div className="flex flex-wrap">
            <div className="bg-transparent p-2 text-center text-black">
                <div className="flex items-center">
                <IconContext.Provider value={{ color: '#CA8F30'}}><FaPhone className="w-6 h-6 mr-2" />  </IconContext.Provider>
                    Phone Number
                </div>
            </div>
            <div className="bg-transparent p-2 text-left text-black ml-4">
                123-456-7890
            </div>
        </div>
        <hr className="my-2 border-gray-300" />
    </div>
    <div className="flex">
    <div className="mb-4 flex justify-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" style={{ backgroundColor: '#CA8F30' }} onClick={null}>
            Book Now
            
        </button>
    </div>
    
    <div className="flex ml-auto">
    <IconContext.Provider value={{ color: '#CA8F30'}}><Link to="/"><TbBrandFacebook className="w-8 h-8 mr-4" /></Link> </IconContext.Provider>
    <IconContext.Provider value={{ color: '#CA8F30'}}><Link to="/"><FaTwitter className="w-8 h-8 mr-4" /></Link> </IconContext.Provider>
    <IconContext.Provider value={{ color: '#CA8F30'}}><Link to="/"><FaInstagram className="w-8 h-8 mr-4" /></Link> </IconContext.Provider>
       
    </div>
    </div>
</div> 


    </div>
    
    
  
    
    
);
}