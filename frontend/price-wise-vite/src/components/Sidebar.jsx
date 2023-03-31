import React from 'react'
import NavbarButton from './NavbarButton';
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs"

function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <div className={` h-screen p-5 pt-8 ${open ? `w-72` : `w-20`} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-black text-navbar-focus rounded-full absolute right-3 top-6 border-3 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            <div className="bg-green-400 p-3 pb-5">
                PRICE WISE
            </div>
            <div className="flex bg-red-500 flex-col p-5 pt-8 pl-1 h-4/6 m-2 ml-1">
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