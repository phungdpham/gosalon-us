import React, { Component } from "react";
// import LandingPage from "./pages/LandingPage";
import Jumpotron from "../../components/Jumpotron/Jumpotron";
import ApptHeader from "../../components/AppointmentHeader/ApptHeader";
import Navbar from "../../components/Navbar";
// import MainContainer from "../../components/MainContainer";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardTitle, CardBody } from "../../components/Card";
import Wrapper from "../../components/Wrapper";
//Import JSX Component
import ServiceList from "./ServiceList";

class Appointments extends Component {
    state = {
        service: "",
        date: "",
        time: "",
        name: "",
        phoneNum: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };


    render() {
        return (
            <div>
                <Jumpotron>
                    <Navbar />
                    <ApptHeader />
                </Jumpotron>
                <Container>
                    <Row>
                        <Col size="md-6">
                            {/* <AppointmentNav /> */}
                            {/* <Wrapper> */}
                            <ServiceList />
                            {/* </Wrapper> */}
                        </Col>
                        <Col size="md-6">
                            <Card>
                                <CardTitle>Your Appointment Detail</CardTitle>
                                <CardBody>
                                    <form>
                                        {/* <Input

                                        /> */}
                                    </form>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
                                    }

}

export default Appointments;