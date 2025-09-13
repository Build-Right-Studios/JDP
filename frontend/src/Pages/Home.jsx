import React from 'react'
import HeroSection from '../components/Hero'
import Categories from '../components/Categories'
import Welcome from '../components/Welcome'
import HumareKhass from '../components/HumareKhass'
import Hero from '../components/AboutUs/hero'
import GreenBar from '../components/AboutUs/GreenBar'
import BestSeller from '../components/Home/BestSeller'

function Home() {
    return (
        <div>
            <Hero name ="HOME"/>
            <GreenBar />
            <BestSeller/>
        </div>
    )
}

export default Home