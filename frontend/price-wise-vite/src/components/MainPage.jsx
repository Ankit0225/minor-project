import React from 'react'
import Sidebar from './Sidebar'
import DashBoard from './DashBoard'

function MainPage() {
    return (

        <div className='flex bg-black'>
            <Sidebar />
            <DashBoard />
        </div>
    )
}

export default MainPage