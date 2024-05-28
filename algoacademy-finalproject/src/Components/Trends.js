import "../Design/Trends.css";
import TrendGame from "./TrendGame";
import TrendGame1 from "../Images/TrendGame1.png";
import TrendGame2 from "../Images/TrendGame2.png";
import TrendGame3 from "../Images/TrendGame3.png";
import TrendGame4 from "../Images/TrendGame4.png";

function Trends() {
  return (
    <div className="Trendmain">
      <div className="trendHead">
        <h2 className="TrendH2">Currently Trending Games</h2>
        <p className="seeP">SEE ALL</p>
      </div>

      <div className="trendgames">
        <TrendGame gameimg={TrendGame1} />
        <TrendGame gameimg={TrendGame2} />
        <TrendGame gameimg={TrendGame3} />
        <TrendGame gameimg={TrendGame4} />
      </div>

      <h5>a</h5>
    </div>
  );
}

export default Trends;
