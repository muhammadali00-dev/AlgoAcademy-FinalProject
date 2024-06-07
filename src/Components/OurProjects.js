import React from "react";
import "../Design/OurProjects.css";
import ProjectImg1 from "../Images/ProjectImg1.png";
import ProjectImg2 from "../Images/ProjectImg2.png";
import ProjectImg3 from "../Images/ProjectImg3.png";
import ProjectImg4 from "../Images/ProjectImg4.png";
import ProjectImg5 from "../Images/ProjectImg5.png";
import ProjectImg6 from "../Images/ProjectImg6.png";
import SeeAll from "./SeeAll";
import "../Design/Trends.css";

function OurProjects() {
  return (
    <div className="ProjectMain">
      <div className="ProjectTitle">
        <h1 className="ProjectH1">Our Recent Projects</h1>
        <p className="ProjectP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br /> industry.
        </p>
      </div>
      <div className="ProjectImgs">
        <img src={ProjectImg1} id="PImg1"></img>
        <img src={ProjectImg2} id="PImg2"></img>
        <img src={ProjectImg3} id="PImg3"></img>
            
        <img src={ProjectImg4} id="PImg4"></img>
        <img src={ProjectImg5} id="PImg5"></img>
        <img src={ProjectImg6} id="PImg6"></img>
      </div>
      <div className="Seeall">
        <SeeAll />
      </div>
    </div>
  );
}

export default OurProjects;
