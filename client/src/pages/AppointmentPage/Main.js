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
import { FormBtn, Input } from"../../components/Form";
import { List, ListItem } from "../../components/List";
import Span from "../../components/Span";
//Import JSX Component
// import ServiceList from "./ServiceList";



class Appointments extends Component {
    state = {
        service: "",
        date: "",
        time: moment(),
        name: "",
        phone: "",
    };

    handleBookService = event => {
        const { name, value } = event.target;
        this.setState({
            service: this.state.service
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
        if(this.state.service && this.state.date && this.state.time && this.state.name && this.state.phone) {
            API.saveAppointment({
                service: this.state.serviceBooked,
                date: this.state.date,
                time: this.state.time,
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    handleDateTimeChange = date => {
        this.setState({
            date: date,
            time: date
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
                        <PanelGroup>
                            <Panel>
                                <PanelHeading><h4><strong>Nails Enhancements</strong></h4></PanelHeading>
                                <PanelBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="float-left mt-1" ><h6>Acrylic Full Set</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Acrylic Full Set"
                                                    onClick={this.handleBookService}
                                                    />                            
                                            </span>
                                            <span className="float-right mx-4 mt-1">30</span>


                                        </li>
                                        <li className="list-group-item">
                                            <span className="float-left mt-1" ><h6>Acrylic Pink And White</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Acrylic Full Set"
                                                    onClick={this.handleBookService}
                                                    />                            
                                            </span>
                                            <span className="float-right mx-4 mt-1">55</span>


                                        </li>
                                        <li className="list-group-item">
                                            <span className="float-left mt-1"><h6>Dip It</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Dip It"
                                                    onClick={this.handleBookService}
                                                    />                           
                                            </span>
                                            <span className="float-right mx-4 mt-1">40</span>

                                        </li>
                                    </ul>
                                </PanelBody>
                            </Panel>
                            <Panel>
                                <PanelHeading><h4><strong>Manicure</strong></h4></PanelHeading>
                                <PanelBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="float-left mt-1"><h6>Basic Manicure</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Basic Manicure"
                                                    />                           
                                            </span>
                                            <span className="float-right mx-4 mt-1">20</span>


                                        </li>
                                        <li className="list-group-item">
                                            <span className="float-left mt-1"><h6>French</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="French"
                                                    />  
                                            </span>
                                            <span className="float-right mx-4 mt-1">8</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="float-left mt-1"><h6>Basic Polish Change</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Basic Polish Change"
                                                />
                                            </span>
                                            <span className="float-right mx-4 mt-1">8</span>


                                        </li>
                                    </ul>
                                </PanelBody>
                            </Panel>
                            <Panel>
                                <PanelHeading><h4><strong>Pedicure</strong></h4></PanelHeading>
                                <PanelBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                        <span className="float-left mt-1"><h6>Cosmo Pedicure</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Cosmo Pedicure"
                                                    />                       
                                            </span>
                                            <span className="float-right mx-4 mt-1">15</span>

                                        </li>
                                        <li className="list-group-item">
                                        <span className="float-left mt-1"><h6>Champagne Pedicure</h6></span>
                                            <span>
                                                <BookBtn 
                                                    name="service"
                                                    value="Champagne Pedicure"
                                                    />                          
                                            </span>
                                            <span className="float-right mx-4 mt-1">10</span>

                                        </li>
                                    </ul>
                                </PanelBody>
                            </Panel>
        </PanelGroup>
                            {/* <ServiceList /> */}
                        </Col>
                        <Col size="md-6">
                            <Card>
                                <CardTitle><h4><strong>Appointment Detail</strong></h4></CardTitle>
                                <CardBody>
                                    <Panel>
                                        <PanelBody>
                                            <h5>Selecting Service: {this.state.service}</h5>
                                        </PanelBody>
                                    </Panel>

                                        <form>
                                            <div className="form-group">
                                                <DatePicker 
                                                    selected={this.state.date}
                                                    onChange={this.handleDateTimeChange}
                                                    placeholderText="Select Date"
                                                    className="form-control form-control-emphasize"
                                                />  
                                            </div>
                                            <div className="form-group">
                                                <DatePicker 
                                                    selected={this.state.date}
                                                    onChange={this.HandleDateTimeChange}
                                                    placeholderText="Select Time"
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    dateFormat="LT"
                                                    timeCaption="Time"
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
                                                placeholder="Enter your phone number"
                                            />
                                            <FormBtn
                                                disabled={!this.state.service && this.state.date && this.state.time && this.state.name && this.state.name}
                                                onClick={this.handleFormSubmit}
                                            >Confirm </FormBtn>
                                            
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