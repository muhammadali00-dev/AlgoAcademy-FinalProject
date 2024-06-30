import React, { useState } from "react";
import "../Design/Header.css";
import GameLogo from "../Images/GameLogo.png";

function Header() {
  const [toggleMenu, settoggleMenu] = useState(true);

  return (
    <div className="navbar">
      <img src={GameLogo} className="headlogo"></img>
      <div className="all-Links">
        {toggleMenu ? (
          <div className="link">
            {/* <i class="fa-solid fa-xmark"></i> */}
            <a href="/" className="linkHome">
              Home
            </a>
            <a href="/About">About us</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/News">News</a>
            <a href="/Contact" className="btn-contact">
              Contact us
            </a>
          </div>
        ) : null}

        <div className="toggleMenu" onClick={() => settoggleMenu(!toggleMenu)}>
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
export default Header;
