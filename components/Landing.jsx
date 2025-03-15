import React from 'react'
import HeroSection from './hero'
import Services from './services'
import Stats from './stats'
import HowItWorks from './howItWorks'
import Testemonials from './testemonials'
import FactsAndQueries from './faq'
import ReadyToStart from './readyToStart'

const Landing = () => {
    
  return (
    <>
        <HeroSection/>
        <Services/>
        <Stats/>
        <HowItWorks/>
        <Testemonials/>
        <FactsAndQueries/>
        <ReadyToStart/>
    </>
  )
}

export default Landing
