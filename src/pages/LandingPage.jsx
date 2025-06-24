import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Coaching from '../components/Coaching'
import Services from '../components/Services'
import About from '../components/About'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-20'>
      <Hero/>
      <About/>
      <Coaching/>
      <Services/>
      </div>
    </div>
  )
}

export default LandingPage