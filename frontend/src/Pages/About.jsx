import React from 'react'
// import WelcomeSection from '../components/Welcome.jsx'
import Hero from '../components/AboutUs/hero.jsx'
import GreenBar from '../components/AboutUs/GreenBar.jsx'
import OurMission from '../components/AboutUs/OurMission.jsx'
import Gallery from '../components/AboutUs/Gallery.jsx'
import Faq from '../components/AboutUs/Faq.jsx'

function About() {
  return (
    <div>
      <Hero name= "ABOUT US"></Hero>
      <GreenBar></GreenBar>
      <OurMission  ></OurMission>
      <Gallery></Gallery>
      <Faq></Faq>
    </div>
  )
}

export default About