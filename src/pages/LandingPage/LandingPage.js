import React from "react";
// import LandingPage from "./pages/LandingPage";
import Header from "../../components/Header";
import Spotlight from "../../components/Spotlight";
import Gallery from "../../components/Gallery/Gallery";



const LandingPage = () => (
    <div>
      {/* <Header> */}
        <Spotlight />
        <Gallery />
      {/* </Header> */}
    </div>
);

export default LandingPage;
