import React from 'react'
import Preloader from './preloader/Preloader.jsx'
import MainPage from './MainPage.jsx';
import { useState, useEffect } from "react"

function MainPageLoader() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div className="bg-blue">
            {loading ? (<Preloader />) : (<MainPage />)}
        </div>
    )
}

export default MainPageLoader