import React, { Component } from "react";
import $ from 'jquery';
import 'fullcalendar';

//Import components
import { Container, Row, Col } from "../../components/Grid";
import Topbar from "../../components/Topbar";
import { Panel, PanelHeading, PanelBody } from "../../components/Panel";
import { Card, CardTitle, CardBody } from "../../components/Card";

import API from "../../utils/API";

//Import JSX Component
// import Calendar from "./Calendar";

class Main extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <Container fluid>
                    <Row>
                        <Col size="md-8">
                            <Calendar />
                        </Col>
                        <Col size="md-4">
                            <Panel>
                                <PanelHeading><h3 className="my-3">Pending Booking</h3></PanelHeading>
                                <PanelBody>
                                    <AppointmentBooked />
                                </PanelBody>
                            </Panel>
                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
};

class Calendar extends Component {
    render() {
        return <div id="calendar"></div>;
    }
    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            dayClick: function() {
                alert("Need a function to go to a specific date")
            }
        })
    }
};

class AppointmentBooked extends Component {
    state = {
        service: "",
        time: "",
        date: "",
        name: "",
        phone: "",
        appointments: []
    };

    componentDidMount() {
        this.loadAppointments();
    }

    loadAppointments = () => {
        API.getAppointments()
            .then(res =>
                this.setState({
                    appointments: res.data,

                }))
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div>
            <Card>
                <CardTitle>
                    <h5>
                        <span className="float-left">Pedicure</span>
                        <span className="float-right ml-5">2:15PM</span>
                        <span className="float-right">Tue 10-15</span>
                    </h5>
                </CardTitle>

                <CardBody>
                    <p>
                        <span>
                            <a className="btn btn-sm btn-outline-light float-left">View</a>
                        </span>
                        <span>
                            <a className="btn btn-sm btn-warning  text-white float-right">Confirm</a>
                        </span>

                        <span>
                            <a className="btn btn-sm btn-outline-light float-left ml-3">Change</a>
                        </span>
                    </p>



                </CardBody>

            </Card>


            {/* <h4>Draggable Events</h4>
              <div className='fc-event'>My Event 1</div>
              <div className='fc-event'>My Event 2</div>
              <div className='fc-event'>My Event 3</div>
              <div className='fc-event'>My Event 4</div>
              <div className='fc-event'>My Event 5</div>
              <p>
                  <input type='checkbox' id='drop-remove' />
                  <label for='drop-remove'>remove after drop</label>
              </p> */}
        </div>;
    }
    componentDidMount() {
        $('#external-events .fc-event').each(function () {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    }
}


export default Main;

