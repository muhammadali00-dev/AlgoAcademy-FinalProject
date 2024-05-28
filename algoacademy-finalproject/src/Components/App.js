import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Design/App.css";
import Header from "./Header";
import Trends from "./Trends";

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
      </div>
    </BrowserRouter>
  );
}

export default App;

// rafce
