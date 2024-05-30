import React from "react";
import Arrow from "../Images/Arrow.svg";

function DevelopIcon(props) {
  let { Icon, SystemModel } = props;
  return (
    <div>
      <img src={Icon} />
      <p>{SystemModel}</p>
      <img src={Arrow} />
    </div>
  );
}

export default DevelopIcon;
