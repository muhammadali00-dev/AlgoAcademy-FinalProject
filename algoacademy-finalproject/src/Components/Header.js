import React from "react";
import { Link } from "react-router-dom";
import "../Design/Header.css";
import Logo from "../Images/LOGO.svg";
import joystick from "../Images/joy_stick.png";

function Header() {
  return (
    <div className="maindiv">
      <img src={Logo} className="headlogo"></img>

      <div className="bothlink">
        <div className="links">
          <Link to="#">Home</Link>
          <Link to="#">About us</Link>
          <Link to="#">Portfolio</Link>
          <Link to="#">News</Link>
        </div>
        <div className="contactlink">
          <Link to="#" className="btn-contact">
            Contact us
          </Link>
        </div>
      </div>

      <img src={joystick} className="joystick"></img>
    </div>
  );
}

export default Header;
