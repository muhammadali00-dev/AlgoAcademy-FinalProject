import React from "react";
import { Link } from "react-router-dom";
import "../Design/Header.css";
import Logo from "../Images/cs-goLogo.svg";

function Header() {
  return (
    <div>
      <img src={Logo} className="cslg"></img>
      <Link to="#">Home</Link>
      <Link to="#">About us</Link>
      <Link to="#">Portfolio</Link>
      <Link to="#">News</Link>
      <Link to="#">Contact us</Link>
    </div>
  );
}

export default Header;
