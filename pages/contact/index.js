import React from "react";
// import Navbar from '../header/Navbar'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import {TiSocialYoutube} from "react-icons/ti"
function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="contact-main-container" id="contact">
        <h1>contact me</h1>
      </div>
      <div className="contact-me">
        <div className="contact-first-child">
          {/* <form > */}
          <input placeholder="Enter your first name" />
          <input placeholder="Enter your last name" />
          <input placeholder="Enter your email" />
          <input placeholder="Enter your phone number" />
          <textarea placeholder="Enter your massage" />
          <button className="contact-button">send me</button>
          {/* </form> */}
        </div>
        <div className="contact-second-child">
        <h2><span >r</span>upali <span>s</span>harma</h2>
          <h3>
            Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis
            eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
            leo. Amet volutpat consequat mauris nunc congue.
          </h3>
          <div className="number"><h3>+910000000000</h3></div>
          
          <div className="contact-social-media">
            {/* <h1>970932346</h1> */}
            <h1><BsFacebook className="facebook" /></h1>
            <h1><AiFillInstagram className="instagram" /></h1>
            <h1><AiFillTwitterCircle className="twitter" /></h1>
            <h1><TiSocialYoutube className="youtube"/></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
