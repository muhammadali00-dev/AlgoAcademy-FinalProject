import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Design/App.css";
import Header from "./Header";
import Trends from "./Trends";
import Rlgame from "./relatedgame";
import Development from "./Development";
import OurProjects from "./OurProjects";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import SCFooter from "./SCFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Routes>

        <Trends />
        <Rlgame />
        <Development />
        <OurProjects />
        <Subscribe />
        <Footer />
        <SCFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

// rfce
