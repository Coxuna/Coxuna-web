import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './main/Main'
import WhyChooseUs from './WhyChooseCouxuna/WhyChooseUs'
import Section from './section/Section'

const LandingPage: React.FC = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <WhyChooseUs/>
        <Section/>
    </>
  )
}

export default LandingPage