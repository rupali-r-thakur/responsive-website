import React from "react";
// import style from "../styles../about.module.css"
// import Navbar from '../header/Navbar'
import Image from "next/image";

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="about-main-container" id="about" >
        <h1>About us</h1>
      </div>
      <div className="about-us">
        <div className="about-first-child">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <h3>Ullamco laboris nisi ut aliquip ex ea commodo consequat</h3>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit</h3>
          <h3>Ullamco laboris nisi ut aliquip ex ea commodo consequat</h3>
        </div>
        <div className="about-second-child">
          <h3>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </h3>
          <button>clicked</button>
        </div>
      </div>
      <div className="about-image">
        {/* <Image/> */}
        {/* <Image src="../public/aboutImage.png" height="300" width="500"></Image> */}
       <h1></h1>
      </div>
    </>
  );
}

export default About;
