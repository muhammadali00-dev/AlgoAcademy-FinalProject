import React from "react";
import { Link } from "react-router-dom";
import "../Design/Header.css";
import Logo from "../Images/LOGO.svg";
import joystick from "../Images/joy_stick.svg";
import Homeline from "../Images/HomeLine.svg";
import Cry from "../Images/cry.svg";
import Unity from "../Images/unity.svg";
import Unreal from "../Images/unreal.svg";

function Header() {
  return (
    <div className="Headermain">
      <div className="navbar">
        <img src={Logo} className="headlogo"></img>
        <div className="links">
          <Link to="/" className="linkHome">
            Home
          </Link>
          <Link to="/">About us</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">News</Link>
          <Link to="/" className="btn-contact">
            Contact us
          </Link>
          <img src={Homeline} className="Homeline"></img>
        </div>
      </div>

      <img src={joystick} className="joystick"></img>
      <img src={Cry} className="Cry"></img>
      <img src={Unity} className="Unity"></img>
      <img src={Unreal} className="Unreal"></img>

      <div className="header-info">
        <p id="D3">3D game Dev</p>
        <h1 id="wh1">
          Work that we <br /> produce for our <br /> clients
        </h1>
        <p id="hdrtext">
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
          standard.
        </p>
        <p id="btn-detail">Get more details</p>
      </div>
    </div>
  );
}

export default Header;
