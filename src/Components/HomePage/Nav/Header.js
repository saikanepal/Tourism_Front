import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Expenditure", link: "/" },
    { name: "Trekking", link: "/" },
    { name: "About us", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#D9D9D9] text-[#362800] font-jomolhari py-4 md:px-10 px-15 ">
        {/* logo section */}
        <div className="font-normal text-5xl  cursor-pointer flex items-center gap-1">
          <span>Logo</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <RxCross2 /> : <CiMenuBurger />}
        </div>
        {/* links items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  :bg-white duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-normal">
              <a
                href={link.link}
                className="text-xl hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
