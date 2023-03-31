import React from 'react'
import Sidebar from './Sidebar'
import DashBoard from './DashBoard'

function MainPage() {
    return (

        <div className='flex'>
            <Sidebar />
            <DashBoard />
        </div>
    )
}

export default MainPage