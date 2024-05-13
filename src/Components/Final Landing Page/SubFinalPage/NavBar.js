import React from 'react'

const NavBar = ({activeSection}) => {
   console.log(activeSection,"active")
  return (
    <div className='sticky top-0 flex items-center justify-center bg-white h-14'>
        <div className='w-4/5 '>
        <ul className='w-full flex justify-between flex-1'>
            <li className={`${activeSection===('section-1')?'text-custom-gold':''}`}>Overview</li>
            <li className={`${activeSection===('section-2')?'text-custom-gold':''}`}>Itenerary</li>
            <li className={`${activeSection===('section-3')?'text-custom-gold':''}`}>Map</li>
            <li>Cost Includes</li>
            <li>Cost Excludes</li>
            <li>Fixed Dates</li>
            <li>Gear List</li>
            <li>Images</li>
            <li>Reviews</li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar