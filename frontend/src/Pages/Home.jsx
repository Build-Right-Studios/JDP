import React from 'react'
// import HeroSection from '../components/Hero'
import Categories from '../components/Home/Categories'
// import Welcome from '../components/Welcome'
// import HumareKhass from '../components/HumareKhass'
import Hero from '../components/AboutUs/hero'
import GreenBar from '../components/AboutUs/GreenBar'
import BestSeller from '../components/Home/BestSeller'
import OurStore from '../components/Home/OurStore'
import Comments from '../components/Home/Comments'

function Home() {
    return (
        <div>
            <Hero name ="HOME"/>
            <GreenBar />
            <Categories />
            <OurStore />
            <BestSeller/>
            <Comments />
        </div>
    )
}

export default Home