import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import mountain from './footer2.svg'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#AD7820]">
                <div className="container w-4/5 px-6 py-10 sm:py-16 mx-auto">
                    <div className="grid grid-cols-2 gap-y-10 gap-x-10 sm:grid-cols-5">
                    <div className="sm:col-span-2">
      <h1 className="max-w-lg text-xl font-semibold tracking-tight text-[#383838] xl:text-2xl">Logo</h1>
      
    </div>

                        {/* QUICK LINKS  */}
                        <div className='text-sm sm:text-base'>
                            <p className="font-bold text-[#383838]">Quick Link</p>
                            <div className="flex flex-col items-start mt-2 font-bold text-[#4F3100] space-y-2">
                                <Link to="/" className=" sm:transition-colors duration-300 hover:text-white">Home</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">About Us</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Popular Destination</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Travel Packages</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Local Guides</Link>
                            </div>
                        </div>


                        {/* SERVICES  */}
                        <div className='text-sm sm:text-base'>
                            <p className="font-bold text-[#383838] ">Services</p>
                            <div className="flex flex-col items-start mt-2 space-y-2 font-bold text-[#4F3100]">
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Trekking</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Adventure Sports</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Tours</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Local Guides</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:text-white">Cuisine Travel</Link>
                            </div>
                        </div>

                        {/* HELP AND SUPPORT  */}

                        <div className='text-sm sm:text-base'>
                            <p className="font-bold text-[#383838] ">Support</p>
                            <div className="flex flex-col items-start my-3 space-y-2 font-bold text-[#4F3100]">
                                <Link to="/" className="transition-colors duration-300 hover:text-white">FAQs</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-white">Contact Us</Link>
                            </div>
                            <div className="flex gap-1 md:gap-5 mt-auto font-bold text-[#4F3100]">
                                <a href="https://www.facebook.com" target='_blank'><FaFacebook className='transition-colors duration-300 hover:text-blue-900' size={25} /></a>
                                <a href="https://www.instagram.com" target='_blank' className='transition-colors duration-300 hover:text-orange-900'><FaInstagram size={25} /></a>
                                <a href="https://www.linkedin.com" target='_blank' className='transition-colors duration-300 hover:text-blue-900'><FaLinkedinIn size={25} /></a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-[#4F3100] md:my-12" />
                </div>
            </footer >
        </div >
    )
}

export default Footer