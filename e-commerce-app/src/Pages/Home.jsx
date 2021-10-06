import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import BestSeller from '../Components/BestSeller/BestSeller'
import Advertisement from '../Components/Advertisement/Advertisement'
import Services from '../Components/EServices/Services'
import Featured from '../Components/Featured/Featured'
import Footer from '../Components/Footer/Footer'
function Home() {
    return (
        <>
            <Navbar />
            <Carousel/>
            <BestSeller/>
            <Advertisement height={"600px"} width={"1920px"}/>
            <Services />
            <Featured />
            <Footer/>
        </>
    )
}

export default Home
