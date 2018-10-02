import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "././components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
