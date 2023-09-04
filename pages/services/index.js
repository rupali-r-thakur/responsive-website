import React from "react";
// import Navbar from '../header/Navbar'
import { RiComputerLine } from "react-icons/ri";
import {BiCodeAlt} from "react-icons/bi";

function Services() {
  const services = [
    {
      icon: <BiCodeAlt className="icon" />,
      name: "web development",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <BiCodeAlt className="icon" />,
      name: "app development",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <RiComputerLine className="icon" />,
      name: "ui/ux design",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <RiComputerLine className="icon" />,
      name: "graphic design",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <RiComputerLine className="icon" />,
      name: "branding",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  console.log(services);
  return (
    <>
      {/* <Navbar /> */}
      {/* <h1>this is my service page</h1> */}
      <div className="service-main-container" id="services">
        <h1>services</h1>
      </div>
      <div className="card-main-container">
     
        <div className="card">
          <div className="card-icon">{services[0].icon}</div>
          <div className="card-name">
            <h2>{services[0].name}</h2>
            <p>{services[0].intro}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">{services[1].icon}</div>
          <div className="card-name">
            <h2>{services[1].name}</h2>
            <p>{services[1].intro}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">{services[2].icon}</div>
          <div className="card-name">
            <h2>{services[2].name}</h2>
            <p>{services[2].intro}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">{services[3].icon}</div>
          <div className="card-name">
            <h2>{services[3].name}</h2>
            <p>{services[3].intro}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">{services[4].icon}</div>
          <div className="card-name">
            <h2>{services[4].name}</h2>
            <p>{services[4].intro}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
