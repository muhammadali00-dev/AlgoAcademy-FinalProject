import React from "react";
import "../Design/Footer.css";
import Logo from "../Images/LOGO.svg";
import Facebook from "../Images/Facebook.svg";
import Instagram from "../Images/Instagram.svg";
import Twitter from "../Images/Twitter.svg";
import In from "../Images/IN.svg";

function Footer() {
  return (
    <div className="FooterMain">
      <div className="FooterLogo">
        <img src={Logo} />
        <p className="LogoInfo">
          Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry.
        </p>
        <p>@Logo</p>
      </div>

      <div className="Fabout">
        <h4>About us</h4>
        <div className="Pcontainer">
          <p>Zeux</p>
          <p>Portfolio</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
      </div>

      <div className="FooterContact">
        <h4>Contact us</h4>
        <p className="ContactInfo">
          Lorem Ipsum is simply dummy text <br />
          of the printing and typesetting <br /> industry.
        </p>
        <a href="tel:+90889097890">+908 89097 890</a>
      </div>

      <div className="FooterIcons">
        <img src={Facebook} />  
        <img src={Instagram} />
        <img src={Twitter} />
        <img src={In} />
      </div>
    </div>
  );
}

export default Footer;
