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
import bannerImage from '../../images/homebanner.png';

function Home() {
    return (
        <div>
            <div className="w-full"> 
                <img 
                    src={bannerImage} 
                    alt="Home Banner" 
                    className="w-full h-auto object-cover" 
                />
            </div>

            <GreenBar />
            <Categories />
            <OurStore />
            <BestSeller/>
            <Comments />
        </div>
    );
}

export default Home;