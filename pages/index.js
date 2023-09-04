import React from 'react'
import Navbar from './header/Navbar'
import Home from './home'
import About from './about'
import Contact from './contact'
import Blog from './blog/Blog'
import Services from './services'

function index() {
  return (
    <>
    <Navbar />
    <Home />
    {/* <Blog /> */}
    <About />
    <Contact />
    <Services />
    </>
  )
}

export default index