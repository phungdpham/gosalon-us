import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Navbar from "././components/Navbar";
import Spotlight from "./components/Spotlight/Spotlight";



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Spotlight />
    </div>
  </Router>
);

export default App;
