import React from 'react'
import BestSellerCard from './BestSellerCard'
import img1 from '../../images/oil.png'

function BestSeller() {
    return (
        <div className="mt-20">
  <h2 className="text-5xl font-extrabold text-center mt-8 mb-8 font-['Poppins']">
    Best Sellers
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
    <BestSellerCard
      color="#b45309"
      title="SUN FLOWER OIL"
      image={img1}
      description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."
    />
    <BestSellerCard
      color="#fcbf49"
      title="SUN FLOWER OIL"
      image={img1}
      description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."
    />
    <BestSellerCard
      color="#d90429"
      title="SUN FLOWER OIL"
      image={img1}
      description="Enjoy the goodness of our freshly produced, cold-pressed Sunflower Oil—packed with natural nutrients and authentic flavor. 100% chemical-free, it’s the healthy choice for your everyday cooking."
    />
  </div>
</div>

    )
}

export default BestSeller