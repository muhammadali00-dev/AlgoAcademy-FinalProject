import React from "react";
import "../Design/OurProjects.css";
import ProjectImg1 from "../Images/ProjectImg1.png";
import ProjectImg2 from "../Images/ProjectImg2.png";
// import ProjectImg3 from "../Images/ProjectImg3.png";
// import ProjectImg4 from "../Images/ProjectImg4.png";
// import ProjectImg5 from "../Images/ProjectImg5.png";
// import ProjectImg6 from "../Images/ProjectImg6.png";
import Gaming1 from "../Images/Gaming1.jpg";
import Gaming2 from "../Images/Gaming2.jpg";
import Gaming3 from "../Images/Gaming3.png";
import Gaming4 from "../Images/Gaming4.png";
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
        <img src={Gaming1} className="PImg1 imgs"></img>
        <img src={Gaming2} className="PImg2 imgs"></img>
        <img src={Gaming3} className="PImg3 imgs"></img>

        <img src={Gaming4} className="PImg4 imgs"></img>
        <img src={ProjectImg1} className="PImg5 imgs"></img>
        <img src={ProjectImg2} className="PImg6 imgs"></img>
      </div>
      <div className="Seeall">
        <SeeAll />
      </div>
    </div>
  );
}

export default OurProjects;
