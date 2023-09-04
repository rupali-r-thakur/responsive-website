import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {TiSocialYoutube} from "react-icons/ti"
import Home from "../home";

function Navbar() {
  const [showIcon, setShowIcon]=useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2><span >r</span>upali <span>s</span>harma</h2>
        </div>
        <div className={showIcon ?"menu-link mobile-menu-link":"menu-link"}>
          <ul>
            <Link href="#home">
              <li>Home</li>
            </Link>
            <Link href="#about">
              <li>About</li>
            </Link>
            <Link href="#contact">
              <li>Contact</li>
            </Link>
            <Link href="#blog">
              <li>Blog</li>
            </Link>
            <Link href="#services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <Link href="/facebook">
              <li>
                <BsFacebook className="facebook" />
              </li>
            </Link>
            <Link href="/instragram">
              <li>
                {" "}
                <AiFillInstagram className="instagram" />
              </li>
            </Link>
            <Link href="/tweeter">
              <li>
                <AiFillTwitterCircle className="twitter" />
              </li>

            </Link>
            <Link href="/youtube">
              <li><TiSocialYoutube className="youtube" /></li>
            </Link>
          </ul>
          <div className="mobile-version-menu">
            <Link href="#" onClick={()=>{setShowIcon(!showIcon)}}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
