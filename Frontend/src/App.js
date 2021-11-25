import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/Theme';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Guide from './pages/Guide';
import Prediction from './pages/Prediction';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/guide" component={Guide} />
          <Route path="/prediction" component={Prediction} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}
export default App;
