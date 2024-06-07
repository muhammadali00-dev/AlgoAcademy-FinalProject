import React from "react";
import "../Design/Subscribe.css";

function Subscribe() {
  return (
    <div className="SubMain">
      <div className="SubTitle">
        <h1 className="SubH1">Lorem Ipsum</h1>
        <p className="SubP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry.
        </p>
      </div>

      <div className="SubNews">
        <div className="NewsTitle">
          <h2 className="NewsH2">Stay in the loop</h2>
          <p className="NewsP">
            Subscribe to receive the latest <br /> news and updates about TDA.  
          </p>
        </div>

        <div className="Inputdiv">
          <input type="email" placeholder="Enter email address"></input>
          <button type="submit">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
