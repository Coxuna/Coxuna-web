import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './main/Main'
import WhyChooseUs from './WhyChooseCouxuna/WhyChooseUs'

const LandingPage: React.FC = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <WhyChooseUs/>
    </>
  )
}

export default LandingPage