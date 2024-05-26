import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Design/App.css";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
      </div>

      <Routes>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
