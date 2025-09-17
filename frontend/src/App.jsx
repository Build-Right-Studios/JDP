import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import OilPage from './Pages/OilPage.jsx'
import Spices from './Pages/Spices.jsx'
import Ghee from './Pages/Ghee.jsx'
import Flour from './Pages/Flour.jsx'
import Navbar from './components/Navbar.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Product from './Pages/Product.jsx'
import ProductData from './Pages/ProductData.jsx'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/oils" element={<OilPage />} />
        <Route path="/products/spices" element={<Spices />} />
        <Route path="/products/ghee" element={<Ghee />} />
        <Route path="/products/flours" element={<Flour />} />

        {/* product details inside category */}
        <Route path="/product/:productId" element={<ProductData />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
