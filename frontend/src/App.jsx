import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import WelcomeSection from './components/welcome.jsx'
import OilPage from './Pages/OilPage.jsx'
import Spices from './Pages/Spices.jsx'
import Ghee from './Pages/Ghee.jsx'
import Flour from './Pages/Flour.jsx'

import HumareKhass from './components/HumareKhass.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/welcome" element={<WelcomeSection />}></Route>
      <Route path="/shop/oil" element={<OilPage />}></Route>
      <Route path="/shop/spices" element={<Spices />}></Route>
      <Route path="/shop/ghee" element={<Ghee />}></Route>
      <Route path="/shop/flour" element={<Flour />}></Route>
      <Route path="/shop/flour" element={<Flour />}></Route>
      <Route path="/humare-khass" element={<HumareKhass />}></Route>
    </Routes>
    </>
  )
}

export default App
