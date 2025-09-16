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


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/oil" element={<OilPage />}></Route>
        <Route path="/product/spices" element={<Spices />}></Route>
        <Route path="/product/ghee" element={<Ghee />}></Route>
        <Route path="/product/flour" element={<Flour />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
