import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import OilPage from './Pages/OilPage.jsx'
import Spices from './Pages/Spices.jsx'
import Ghee from './Pages/Ghee.jsx'
import Flour from './Pages/Flour.jsx'
import Navbar from './components/navbar.jsx'
import WelcomeSection from './components/Welcome.jsx'
import Hero from './components/AboutUs/hero.jsx'
import GreenBar from './components/AboutUs/GreenBar.jsx'
import OurMission from './components/AboutUs/OurMission.jsx'
import Gallery from './components/AboutUs/Gallery.jsx'
import Faq from './components/AboutUs/Faq.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
   <Hero></Hero>
   <GreenBar></GreenBar>
   <OurMission  ></OurMission>
   <Gallery></Gallery>
   <Faq></Faq>
    <Footer></Footer>
     <Navbar></Navbar>
     

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop/oil" element={<OilPage />}></Route>
      <Route path="/shop/spices" element={<Spices />}></Route>
      <Route path="/shop/ghee" element={<Ghee />}></Route>
      <Route path="/shop/flour" element={<Flour />}></Route>
      <Route path="/contact" element={<Contact />} />

    </Routes>
   
    </>
  )
}

export default App
