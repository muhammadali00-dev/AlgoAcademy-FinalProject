import React from "react";
import "../Design/relatedgame.css";
import Points from "../Images/backpoints.svg";
import Spiderman from "../Images/Spiderman.png";

function Relatedgame() {
  return (
    <div className="RlMain">
      <h1 className="RlH1">
        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
        industry.
      </h1>
      <div className="littleinfo">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br /> industry. Lorem Ipsum has been the industry's standard dummy
          text <br /> ever since the 1500s,
        </p>
      </div>
      <div className="images">
        <img src={Spiderman} className="spider"></img>
        <img src={Points} className="points"></img>
      </div>
    </div>
  );
}

export default Relatedgame;
