import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Prediction from "./pages/Prediction";
import Rank from "./pages/Rank";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/prediction" component={Prediction} />
        <Route path="/info" component={Info} />
        <Route path="/rank" component={Rank} />
      </Routes>
    </Router>
  );
}
export default App;
