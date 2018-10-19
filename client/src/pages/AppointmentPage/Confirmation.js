import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";


// import LandingPage from "./pages/LandingPage"
import Jumpotron from "../../components/Jumpotron/Jumpotron"
import ApptHeader from "../../components/AppointmentHeader/ApptHeader";
import Navbar from "../../components/Navbar";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardTitle, CardBody } from "../../components/Card";
//Import JSX Component
import ServiceList from "./ServiceList";


const Confirmation = () => (
            <div>
                <Jumpotron>
                    <Navbar />
                    <ApptHeader />
                </Jumpotron>
                <Container>
                    <Row>
                        <Col size="md-6">
                            <ServiceList
                                stateInfo={this}
                            />
                        </Col>
                        <Col size="md-6">
                            <Card>
                                <CardBody>
                                    <h5>Thank You for booking an Appointment with us</h5>
                                    <h6>See you Soon!</h6>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )

export default Confirmation;