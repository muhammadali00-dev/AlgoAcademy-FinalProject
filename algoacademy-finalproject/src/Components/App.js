import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Design/App.css";
import Header from "./Header";
import Trends from "./Trends";
import Rlgame from "./relatedgame";
import Development from "./Development";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Routes>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Routes>

        <Trends></Trends>
        <Rlgame></Rlgame>
        <Development></Development>
      </div>
    </BrowserRouter>
  );
}

export default App;

// rfce
