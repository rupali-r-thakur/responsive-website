import React from 'react'
// import Navbar from '../header/Navbar'
import Image from 'next/image'
// import Navbar from '../header/Navbar'

function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <div className='home-main-container'>
      <div className='home-first-child'>
      <h2>hello, my name is <span >r</span>upali <span>s</span>harma</h2>
<h1> i am a web developer</h1>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
<button className='home-button'>click</button>
      </div>
      <div className='home-second-child'>
        {/* <Image src='https://cdn.dribbble.com/users/17707/screenshots/2413754/attachments/467668/ro1.jpg?resize=400x300&vertical=center' height="500vh" width="300%"></Image> */}
      </div>
    </div>
    </>
  )
}

export default Home