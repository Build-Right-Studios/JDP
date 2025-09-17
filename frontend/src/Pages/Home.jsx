import React from 'react'
import Categories from '../components/Home/Categories';
import GreenBar from '../components/AboutUs/GreenBar';
import BestSeller from '../components/Home/BestSeller';
import OurStore from '../components/Home/OurStore';
import Comments from '../components/Home/Comments';
import bannerImage from '../images/homebanner.png';

function Home() {
    return (
        <div>
            <div className="w-full lg:w-full"> 
                <img 
                    src={bannerImage} 
                    className="w-screen lg:h-[90vh] h-[30vh] object-fill" 
                />
            </div>
            <Categories />
            <OurStore />
            <GreenBar />
            <BestSeller/>
            <Comments />
        </div>
    );
}

export default Home;