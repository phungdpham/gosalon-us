import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "././components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Appointment from "./pages/AppointmentPage/Main";
import Main from "./pages/CalendarPage/Main";
import Confirmation from "./pages/AppointmentPage/Confirmation";
import Login from "./pages/SignUpPage/SignIn";
// import Portal from "./pages/PortalPage/PortalPage";



const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/login/user=phungpham" component={Main} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/login" component={Login} />
      </Switch>


    </div>
  </Router>
);

export default App;
