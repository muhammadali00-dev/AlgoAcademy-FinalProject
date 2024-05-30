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
      <div className="Maindiv">
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
          <div className="topicon">
            <DevelopIcon
              Icon={Mobile}
              SystemModel={"Mobile Game Development"}
            />
            <DevelopIcon Icon={Pc} SystemModel={"PC Game Development"} />
            <DevelopIcon Icon={Ps4} SystemModel={"PS4 Game Development"} />
            <DevelopIcon Icon={VR} SystemModel={"AR/VR Solutions"} />
          </div>

          <div className="bottomicon">
            <DevelopIcon Icon={AR} SystemModel={"AR/ VR design"} />
            <DevelopIcon Icon={ThreeD} SystemModel={"3D Modelings"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;

