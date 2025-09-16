import React, { useState, useEffect } from 'react'
import Hero from '../components/Products/Hero.jsx'
import OilPage from '../components/Products/OilPage.jsx'
import GreenBar from '../components/AboutUs/GreenBar.jsx'
import ProductItem from '../components/Products/ProductItem.jsx'

function Product() {

  // Array of products with just names
  const products = [
    {
      _id: 1,
      name: "Cold Pressed Sunflower Oil",
      image: "https://i0.wp.com/kumarmetal.com/wp-content/uploads/2022/04/sunflower-oil-properties-and-manufacture-1.png?fit=1200%2C675&ssl=1",
    },
    {
      _id: 2,
      name: "Pure Mustard Oil",
      image: "https://wockhardthospitals.com/wp-content/uploads/2021/04/Mustard-Oil.jpg",
    },
    {
      _id: 3,
      name: "Organic Wheat Flour",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/organic-wheat-flour-3te-1kg-2022114078-5m48giir.jpg",
    },
    {
      _id: 4,
      name: "Natural Ghee",
      image: "https://goodfood.ae/cdn/shop/files/Bilona_Cow_Ghee.jpg?v=1722433739",
    },
    {
      _id: 5,
      name: "Fresh Coconut Oil",
      image: "https://www.ishtaorganics.in/cdn/shop/files/Fireflycoconutoilin2bottlesonein500mlanotherin1lwithacoconutinsideandwhiebackgrou.jpg?v=1712694482",
    },
  ];

  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    // Initially show all products
    setFilterProducts(products);
  }, []);

  return (
    <div>
      {/* <Hero name="PRODUCTS"></Hero> */}
      {/* <GreenBar></GreenBar> */}
      {/* <OilPage></OilPage> */}
      {/* Grid of Products */}
      <div className='gap-1 sm:gap-10 p-10 border-t'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index} // Use unique `_id` instead of index
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Product;
