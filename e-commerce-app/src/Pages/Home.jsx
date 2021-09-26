import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import BestSeller from '../Components/BestSeller/BestSeller'
import Advertisement from '../Components/Advertisement/Advertisement'
import Services from '../Components/EServices/Services'
function Home() {
    return (
        <>
            <Navbar />
            <Carousel/>
            <BestSeller/>
            <Advertisement />
            <Services />
        </>
    )
}

export default Home
