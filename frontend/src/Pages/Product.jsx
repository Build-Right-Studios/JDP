import React from 'react'
import Hero from '../components/Products/Hero.jsx'
import OilPage from '../components/Products/OilPage.jsx'
import GreenBar from '../components/AboutUs/GreenBar.jsx'


function Product() {
  return (
    <div>
      <Hero name="PRODUCTS"></Hero>
      <GreenBar></GreenBar>
      <OilPage></OilPage>
    </div>
  )
}

export default Product;
