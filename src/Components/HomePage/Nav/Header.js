import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import "./Header.css";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation()
  console.log(location, "loca")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Expedition", link: "/expedition" },
    { name: "Trekking", link: "/trekking" },
    { name: "About us", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div
      className={`shadow-md z-20 w-full fixed top-0 left-0 bg-gray-400 bg-opacity-30 `}
    >
      <div
        className={`  flex justify-center
        ${scrolling ? "bg-[#CA8F30]  text-white" : "bg-opacity-0  "}`}
      //   className="
      // md:flex items-center justify-between  bg-[#D9D9D9] bg-opacity-25 text-[#362800] font-jomolhari py-4 md:px-10 px-15 "
      >
        {/* logo section */}

        <div className="w-4/5 md:flex items-center justify-between py-4 ">
          <div className=" logo font-normal text-5xl  cursor-pointer flex items-center gap-1">
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
            className={` resNav md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  :bg-white duration-500 ease-in  text-black lg:font-bold ${open ? "top-12" : "top-[-490px] text-white font-bold"
              }`}
          //   style={{
          //     padding: "1rem",
          //     borderRadius: "0.5rem",
          //     maxWidth: "100%",
          //     margin: "0 auto",
          //     color: "#362800",
          //     "@media (maxWidth: 420px)": {
          //       backgroundColor: "white",
          //       color: "red",
          //       height: "screen",
          //     },
          //   }}
          // className={` resNav md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-5] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  :bg-white duration-500 ease-in ${
          //   open ? "top-12" : "top-[-490px]"
          // }`}
          >
            {Links.map((link, index) => (
              <li key={index} className={`${!scrolling?location.pathname == link.link ? 'text-custom-yellow' : '':location.pathname == link.link ? 'text-white' : 'text-orange-950'} md:ml-6 md:my-0 my-7 font-normal`}>
                <Link
                  to={link.link}
                  className={` md:text-sm lg:text-xl ${scrolling?"hover:text-white":"hover:text-custom-yellow"}`}

                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
