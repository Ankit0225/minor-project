import React from 'react'
import NavbarButton from './NavbarButton'

const Sidebar = () => {
  return (
    <div className="side-container rounded-xl bg-left bg-gray-800 p-5 pl-1 m-4 ">
        <div className="profile m-2">
           <img src="data:image/jpeg;base64,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" alt="" srcset="" />
           <p className='text-center'>Hello User</p>
        </div>
        <div className="profile">
                <NavbarButton />
                <NavbarButton />
                <NavbarButton />
                <NavbarButton />
                <NavbarButton />
                <NavbarButton />
        </div>
    </div>
  )
}

export default Sidebar