import React from 'react'
import mainImg from '../assets/Dine-at-Dome-home.jpg'
import styles from './Main.css'
import Navbar from './Navbar'

const Main = () => {
  return (
    <>
    <div>
        <Navbar/>
        <img className='img' src={mainImg} alt="" /> 
    </div>
     
    </>
  )
}

export default Main
