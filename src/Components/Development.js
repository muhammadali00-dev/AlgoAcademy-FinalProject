import React from "react";
import "../Design/Development.css";
import DevelopIcon from "./DevelopIcon";

import Mobile from "../Images/Mobile.svg";
import Pc from "../Images/Pc.svg";
import Ps4 from "../Images/Ps4.svg";
import VR from "../Images/VR.svg";
import AR from "../Images/AR.svg";
import ThreeD from "../Images/3D-Modeling.svg";

function Development() {
  return (
    <div className="Backgorundiv">
      <div className="HedInfo">
        <h1 id="backH1">
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry.
        </h1>
        <p id="backP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> industry's standard dummy
          text ever since the 1500s,
        </p>
      </div>

      <div className="icons">
        <div className="icon">
          <DevelopIcon Icon={Mobile} SystemModel={"Mobile Game Development"} />
        </div>
        <div className="icon">
          <DevelopIcon Icon={Pc} SystemModel={"PC Game Development"} />
        </div>
        <div className="icon">
          <DevelopIcon Icon={Ps4} SystemModel={"PS4 Game Development"} />
        </div>
        <div className="icon">
          <DevelopIcon Icon={VR} SystemModel={"AR/VR Solutions"} />
        </div>
        <div className="icon">
          <DevelopIcon Icon={AR} SystemModel={"AR/ VR design"} />
        </div>
        <div className="icon">
          <DevelopIcon Icon={ThreeD} SystemModel={"3D Modelings"} />
        </div>
      </div>
    </div>
  );
}

export default Development;
