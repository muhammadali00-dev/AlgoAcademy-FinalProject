import React from "react";
import "../Design/Intro.css";
import joystick from "../Images/joy_stick.svg";
import Cry from "../Images/cry.svg";
import Unity from "../Images/unity.svg";
import Unreal from "../Images/unreal.svg";

function Intro() {
  return (
    <div className="Intro">
      <div className="Intro-left">
        <span className="Tree-D">3D game Dev</span>
        <h1 id="wh1">
          Work that we <br /> produce for our <br /> clients
        </h1>
        <p className="hdrtext">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the industry's <br />
          standard.
        </p>
        <p className="btn-detail">Get more details</p>
      </div>

      <div className="Intro-right">
        <img src={joystick} className="joystick"></img>
        <img src={Cry} className="Cry"></img>
        <img src={Unity} className="Unity"></img>
        <img src={Unreal} className="Unreal"></img>
      </div>
    </div>
  );
}

export default Intro;
