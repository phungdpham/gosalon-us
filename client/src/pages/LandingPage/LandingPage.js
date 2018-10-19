import React from "react";
// import LandingPage from "./pages/LandingPage";
import Header from "../../components/Header";
import Spotlight from "../../components/Spotlight";
import Gallery from "../../components/Gallery/Gallery";
import MainContainer from "../../components/MainContainer/MainContainer";
import Jumpotron from "../../components/Jumpotron";
import Navbar from "../../components/Navbar";




const LandingPage = () => (
    <div>
        <Jumpotron>
            <Navbar />
            <Spotlight />
        </Jumpotron>

        {/* <MainContainer>
            <Gallery />
        </MainContainer> */}
    </div>
);

export default LandingPage;
