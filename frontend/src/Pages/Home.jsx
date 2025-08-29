import React from 'react'
import HeroSection from '../components/Hero'
import Categories from '../components/Categories'
import Welcome from '../components/Welcome'
import HumareKhass from '../components/HumareKhass'

function Home() {
    return (
        <div>
            <HeroSection />
            <Welcome />
            <Categories />
            <HumareKhass />
        </div>
    )
}

export default Home