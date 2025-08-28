import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import HumareKhass from './components/HumareKhass.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
      <HumareKhass />
  </BrowserRouter>,
)
