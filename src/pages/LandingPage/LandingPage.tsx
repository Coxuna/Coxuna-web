import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './main/Main'
import WhyChooseUs from './WhyChooseCouxuna/WhyChooseUs'
import Section from './section/Section'
import Community from './community/Community'
import Footer from './Footer/Footer'

const LandingPage: React.FC = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <WhyChooseUs/>
        <Section/>
        <Community/>
        <Footer/>
    </>
  )
}

export default LandingPage