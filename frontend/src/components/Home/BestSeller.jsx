import React from 'react'
import BestSellerCard from './BestSellerCard'
import img1 from '../../images/oil.jpg'

function BestSeller() {
    return (
        <div className='my-4 bg-gray-50'>
            <h2 className="text-5xl font-extrabold text-center mb-8 font-['Poppins']">BEST SELLERS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-2 mx-auto place-items-center'>
                <BestSellerCard color = "#b45309" title = "SUN FLOWER OIL" image={img1} description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."/>
                <BestSellerCard color = "#fcbf49" title = "SUN FLOWER OIL" image={img1} description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."/>
                <BestSellerCard color = "#d90429" title = "SUN FLOWER OIL" image={img1} description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."/>
            </div>
        </div>
    )
}

export default BestSeller