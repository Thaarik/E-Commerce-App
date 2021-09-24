import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import BestSeller from '../Components/BestSeller/BestSeller'
function Home() {
    return (
        <>
            <Navbar />
            <Carousel/>
            <BestSeller/>
        </>
    )
}

export default Home
