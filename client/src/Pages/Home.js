import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'

import Products from '../Components/Products'
import Topbar from '../Components/Topbar'

const Home = () => {
  return (
    <div>
      <Topbar/>
        <Navbar/>
    <Hero/>
    <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
        
    </div>
  )
}

export default Home