import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './main/Main'
import WhyChooseUs from './WhyChooseCouxuna/WhyChooseUs'
import Section from './section/Section'
import Community from './community/Community'

const LandingPage: React.FC = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <WhyChooseUs/>
        <Section/>
        <Community/>
    </>
  )
}

export default LandingPage