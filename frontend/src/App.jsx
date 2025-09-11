import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import OilPage from './Pages/OilPage.jsx'
import Spices from './Pages/Spices.jsx'
import Ghee from './Pages/Ghee.jsx'
import Flour from './Pages/Flour.jsx'
import Navbar from './components/navbar.jsx'
import Contact from './Pages/Contact.jsx'
 


function App() {

  return (
    <>
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
