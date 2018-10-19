import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";


// import LandingPage from "./pages/LandingPage"
import Jumpotron from "../../components/Jumpotron/Jumpotron"
import ApptHeader from "../../components/AppointmentHeader/ApptHeader";
import { PanelGroup, Panel, PanelHeading, PanelBody, BookBtn } from "../../components/Panel";
import Navbar from "../../components/Navbar";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardTitle, CardBody } from "../../components/Card";
import { FormBtn, Input } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import ModalConfirmed from "../../components/Modal";
//Import JSX Component
import ServiceList from "./ServiceList";



class Appointments extends Component {
    state = {
        service: "",
        date: "",
        time: "",
        name: "",
        phone: ""
    };

    handleSelectService = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveAppointment({
            service: this.state.service,
            date: this.state.date.format("L"),
            time: this.state.date.format("LT"),
            name: this.state.name,
            phone: this.state.phone
        })
    }

    handleDateChange = date => {
        this.setState({
            date: date
        })
    }
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
                            <ServiceList
                                stateInfo={this}
                            />
                        </Col>
                        <Col size="md-6">
                            <Card>
                                <CardTitle><h4><strong>Appointment Detail</strong></h4></CardTitle>
                                <CardBody>
                                    <Panel>
                                        <PanelBody>
                                            Booking ... <h5>{this.state.service}</h5>
                                        </PanelBody>
                                    </Panel>

                                    <form>
                                        <div className="form-group">
                                            <DatePicker
                                                selected={this.state.date}
                                                onChange={this.handleDateChange}
                                                placeholderText="Select Date and Time"
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                dateFormat="LLL"
                                                timeCaption="Time"
                                                minTime={moment().hours(9).minutes(0)}
                                                maxTime={moment().hours(19).minutes(30)}

                                                className="form-control form-control-emphasize"
                                            />
                                        </div>
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                        <Input
                                            value={this.state.phone}
                                            onChange={this.handleInputChange}
                                            name="phone"
                                            placeholder="Your phone number"
                                        />
                                        {/* <FormBtn
                                                disabled={!this.state.service && this.state.date && this.state.time && this.state.name && this.state.name}
                                                onClick={this.handleFormSubmit}
                                            >Confirm 
                                            </FormBtn> */}

                                    </form>
                                    <a className="btn btn-warning text-white" href="/confirmation">Book</a>


                                    
                                    

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }

}

export default Appointments;