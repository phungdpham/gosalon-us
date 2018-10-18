import React, { Component } from "react";
import axios from "axios";
import Jumpotron from "../../components/Jumpotron";
import { Input, FormBtn } from "../../components/Form";
import { Container, Row, Col } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import { Card, CardTitle, CardBody } from "../../components/Card";
import { pipeline } from "stream";
import API from "../../utils/API";



class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.username);
        API.login({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                if (res.data) {
                    console.log('successful log in')
                    this.setState({
                        redirectTo: "/login"
                    })
                } else {
                    console.log("Log-in error");
                }
            })
            .catch(err => {
                console.log("Sign In sever error: ");
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumpotron>
                    <Container fluid>
                        <Row>
                            <Col size="md-4" />
                            <Col size="md-4">
                                <Card>
                                    <CardTitle><h3>Salon Portal Login</h3></CardTitle>
                                    <CardBody>
                                        <form>

                                            <Input
                                                value={this.state.username}
                                                name="username"
                                                onChange={this.handleInputChange}
                                                placeholder="User Name"
                                            />

                                            <Input
                                                value={this.state.username}
                                                name="password"
                                                onChange={this.handleInputChange}
                                                placeholder="Enter your password"

                                            />
                                            <FormBtn
                                                disabled={!this.state.username && this.state.password}
                                                onClick={this.handleSubmit}
                                            >Book
                                            </FormBtn>
                                        </form>

                                    </CardBody>
                                </Card>

                            </Col>
                            <Col size="md-4" />
                        </Row>

                    </Container>
                </Jumpotron>
            </div>
        )
    }

}

export default Login;