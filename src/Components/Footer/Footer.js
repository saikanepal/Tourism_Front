import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#AD7820]">
                <div className="container px-6 py-16 mx-auto">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-[#383838] xl:text-2xl">Logo</h1>
                        </div>

                        {/* QUICK LINKS  */}
                        <div>
                            <p className="font-bold text-[#383838]">Quick Link</p>
                            <div className="flex flex-col items-start mt-5 font-bold text-[#4F3100] space-y-2">
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Home</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">About Us</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Popular Destination</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Travel Packages</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Local Guides</Link>
                            </div>
                        </div>


                        {/* SERVICES  */}
                        <div>
                            <p className="font-bold text-[#383838] dark:text-white">Services</p>
                            <div className="flex flex-col items-start mt-5 space-y-2 font-bold text-[#4F3100]">
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Trekking</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Adventure Sports</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Tours</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Local Guides</Link>
                                <Link to="/" className=" transition-colors duration-300 hover:underline hover:text-white">Cuisine Travel</Link>
                            </div>
                        </div>

                        {/* HELP AND SUPPORT  */}

                        <div>
                            <p className="font-bold text-[#383838] dark:text-white">Help and Support</p>
                            <div className="flex flex-col items-start my-5 space-y-2 font-bold text-[#4F3100]">
                                <Link to="/" className="transition-colors duration-300 hover:underline hover:text-white">FAQs</Link>
                                <Link to="/" className="transition-colors duration-300 hover:underline hover:text-white">Contact Us</Link>
                            </div>
                            <div className="flex gap-5 mt-auto font-bold text-[#4F3100]">
                                <a href="https://www.facebook.com" target='_blank'><FaFacebook size={25} /></a>
                                <a href="https://www.instagram.com" target='_blank'><FaInstagram size={25} /></a>
                                <a href="https://www.linkedin.com" target='_blank'><FaLinkedinIn size={25} /></a>
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