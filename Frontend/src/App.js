import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/Theme';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Guide from './pages/Guide';
import Prediction from './pages/Prediction';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/guide" component={Guide} />
          <Route path="/prediction" component={Prediction} />
          <Route path="/guide" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
