import React from 'react'
// import HeroSection from '../components/Hero'
import Categories from '../components/Home/Categories';
// import Welcome from '../components/Welcome'
// import HumareKhass from '../components/HumareKhass'
import GreenBar from '../components/AboutUs/GreenBar';
import BestSeller from '../components/Home/BestSeller';
import OurStore from '../components/Home/OurStore';
import Comments from '../components/Home/Comments';
import bannerImage from '../images/homebanner.png';

function Home() {
    return (
        <div>
            <div className="w-full h-[90vh]"> 
                <img 
                    src={bannerImage} 
                    className="w-full h-[90vh] object-cover" 
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