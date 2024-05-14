import React from 'react'

const NavBar = ({activeSection,scrollToSection}) => {


  return (
    <div className='sticky top-16 items-center justify-center bg-white h-14 hidden lg:flex'>
        <div className='w-4/5 '>
        <ul className='w-full flex justify-between flex-1'>
            <li className={`${activeSection===('section-1')?'text-custom-gold ':''} px-3 py-2`} onClick={()=>{scrollToSection(0)}}>Overview</li>
            <li className={`${activeSection===('section-2')?'text-custom-gold ':''} px-3 py-2`} onClick={()=>{scrollToSection(1)}}>Itenerary</li>
            <li className={`${activeSection===('section-3')?'text-custom-gold ':''} px-3 py-2`} onClick={()=>{scrollToSection(2)}}>Map</li>
            <li className={`${activeSection===('section-4')?'text-custom-gold ':''} px-3 py-2`} onClick={()=>{scrollToSection(3)}}>Cost Includes</li>
            <li className={`${activeSection===('section-5')?'text-custom-gold':''} px-3 py-2`} onClick={()=>{scrollToSection(4)}}>Cost Excludes</li>
            <li className={`${activeSection===('section-6')?'text-custom-gold':''} px-3 py-2`} onClick={()=>{scrollToSection(5)}}>Fixed Dates</li>
            <li className={`${activeSection===('section-7')?'text-custom-gold':''} px-3 py-2`} onClick={()=>{scrollToSection(6)}}>Gear List</li>
            <li className={`${activeSection===('section-8')?'text-custom-gold':''} px-3 py-2`} onClick={()=>{scrollToSection(7)}}>Images</li>
            <li className={`${activeSection===('section-9')?'text-custom-gold':''} px-3 py-2`} onClick={()=>{scrollToSection(8)}}>Reviews</li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar