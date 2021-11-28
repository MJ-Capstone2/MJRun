import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/Theme';

import Home from "./pages/user/Home";
import Login from "./pages/admin/Login";
import Guide from './pages/user/Guide';
import Prediction from './pages/user/Prediction';
import Admin from './pages/admin/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/guide" component={Guide} />
          <Route path="/prediction" component={Prediction} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/upload" component={Admin} />
          <Route exact path="/admin/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}
export default App;
