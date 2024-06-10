import "../Design/App.css";
import Header from "./Header";
import Intro from "./Intro";
import Trends from "./Trends";
import Rlgame from "./relatedgame";
import Development from "./Development";
import OurProjects from "./OurProjects";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import SCFooter from "./SCFooter";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Header />
          <Intro />
          <Trends />
          <Rlgame />
        </div>

        <Development />

        <div className="container">
          <OurProjects />
          <Subscribe />
        </div>

        <Footer />
        <SCFooter />
      </div>
    </div>
  );
}

export default App;

// rfce
