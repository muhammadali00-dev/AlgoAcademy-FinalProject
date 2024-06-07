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
    <div className="App container">
      <Header />
      <main className="container">
        <Intro />
        <Trends />
        <Rlgame />
        <Development />
        <OurProjects />
        <Subscribe />
      </main>

      <Footer />
      <SCFooter />
    </div>
  );
}

export default App;

// rfce
