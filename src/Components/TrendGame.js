import "../Design/Trends.css";
import Fire from "../Images/Fire.svg";
import "./Trends";

function trendgame(props) {
  let { gameimg } = props;
  return (
    <div className="img-follow">
      <img src={gameimg} className="gameimg"></img>
      <div className="follownum">
        <img src={Fire}></img>
        <p id="FolloP">40 Followers</p>
      </div>
    </div>
  );
}

export default trendgame;
