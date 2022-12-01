import React from 'react'
import Cat from '../Comp/Cat'
import Slider from '../Comp/Slider';
import Featured from '../Comp/Featured';
import Navbar from '../Comp/Navbar'
import Footer from '../Comp/Footer';

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Slider/>
    <Featured/>
    <Cat/> 
    <Footer/>
    </div>
  )
}

export default Home
