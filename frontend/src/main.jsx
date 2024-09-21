import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Chatbot/>
      <Navbar/>
      <HeroSection/>
      <App/>
      
      <Footer/>
  </StrictMode>,
)
