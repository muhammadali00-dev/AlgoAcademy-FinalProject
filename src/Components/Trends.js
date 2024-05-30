import "../Design/Trends.css";
import SeeAll from "./SeeAll";
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
        <SeeAll />
      </div>

      <div className="trendgames">
        <TrendGame gameimg={TrendGame1} />
        <TrendGame gameimg={TrendGame2} />
        <TrendGame gameimg={TrendGame3} />
        <TrendGame gameimg={TrendGame4} />
      </div>
    </div>
  );
}

export default Trends;
