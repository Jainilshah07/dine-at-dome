import React from 'react'
import Hero from './Hero'
import Main from './Main'
import Navbar from './Navbar'
import Work from './Work'

const Home = () => {
  return (
    <>
      <Main/>
      <br /><br /><br />
      <h2>Where to Dine at Dome?</h2>
      <h3>Find the Dine at Dome experience near you:</h3>
      <Hero/>
      <Work/>
      
    </>
  )
}

export default Home
