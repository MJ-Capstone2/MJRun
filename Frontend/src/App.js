import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/Theme';

import Home from "./pages/Home";
import Race from "./pages/Race";
import Rank from "./pages/Rank";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/race" component={Race} />
          <Route path="/rank" component={Rank} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
