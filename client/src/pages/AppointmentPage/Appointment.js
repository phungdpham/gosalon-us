import React from "react";
// import LandingPage from "./pages/LandingPage";
import Service from "../../components/Service/Service";
import Jumpotron from "../../components/Jumpotron/Jumpotron";
import ApptHeader from "../../components/AppointmentHeader/ApptHeader";
import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
import { Container, Row, Col } from "../../components/Grid"
import CardContainer from "../../components/Service/CardContainer";

const Appointment = () => (
    <div>
        <Jumpotron>
            <Navbar />
            <ApptHeader />
        </Jumpotron>
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Service />
                </Col>
            </Row>
            {/* <Service /> */}
        </Container>
    </div>
);

export default Appointment;
