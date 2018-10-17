import React from "react";
//importing components
import { PanelGroup, Panel, PanelHeading, PanelBody, BookBtn } from "../../components/Panel";


const ServiceList = props => (
    <div>
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
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
                          </span>
                        <span className="float-right mx-4 mt-1">30</span>


                    </li>
                    <li className="list-group-item">
                        <span className="float-left mt-1" ><h6>Acrylic Pink And White</h6></span>
                        <span>
                            <BookBtn 
                                name="service"
                                value="Acrylic Pink And White"
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
                          </span>
                        <span className="float-right mx-4 mt-1">55</span>


                    </li>
                    <li className="list-group-item">
                        <span className="float-left mt-1"><h6>Dip It</h6></span>
                        <span>
                            <BookBtn 
                                name="service"
                                value="Dip It"
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
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
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
                        </span>
                        <span className="float-right mx-4 mt-1">20</span>


                    </li>
                    <li className="list-group-item">
                        <span className="float-left mt-1"><h6>French</h6></span>
                        <span>
                            <BookBtn 
                                name="service"
                                value="French"
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
                          </span>
                        <span className="float-right mx-4 mt-1">8</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left mt-1"><h6>Basic Polish Change</h6></span>
                        <span>
                            <BookBtn 
                                name="service"
                                value="Basic Polish Change"
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
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
                            >Select
                            </BookBtn>                         
                          </span>
                        <span className="float-right mx-4 mt-1">15</span>

                    </li>
                    <li className="list-group-item">
                    <span className="float-left mt-1"><h6>Champagne Pedicure</h6></span>
                        <span>
                            <BookBtn 
                                name="service"
                                value="Champagne Pedicure"
                                onClick={props.stateInfo.handleSelectService}
                            >Select
                            </BookBtn>                         
                          </span>
                        <span className="float-right mx-4 mt-1">10</span>

                    </li>
                </ul>
            </PanelBody>
        </Panel>
    </PanelGroup>

        {/* <PanelGroup>
            <Panel>
                <PanelHeading><h3>Nails Enhancements</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="float-left mt-2" >Acrylic Full Set</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Acrylic Full Set"
                                    onClick={props.stateInfo.handleSelectService}
                                    />                            
                            </span>
                            <span className="float-right mx-5 mt-2">30</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left mt-2">Acrylic Pink And White</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Acrylic Pink And White"
                                    />                          
                            </span>
                            <span className="float-right mx-5 mt-2">55</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left mt-2">Dip It</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Dip It"
                                    onClick={this.handleSelectService}
                                    />                           
                            </span>
                            <span className="float-right mx-5 mt-2">40</span>

                        </li>
                    </ul>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelHeading><h3>Manicure</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="float-left mt-2">Basic Manicure</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Basic Manicure"
                                    />                           
                            </span>
                            <span className="float-right mx-5 mt-2">20</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left mt-2">French</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="French"
                                    />  
                            </span>
                            <span className="float-right mx-5 mt-2">8</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left mt-2">Basic Polish Change</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Basic Polish Change"
                                />
                            </span>
                            <span className="float-right mx-5 mt-2">8</span>


                        </li>
                    </ul>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelHeading><h3>Pedicure</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <span className="float-left mt-2">Cosmo Pedicure</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Cosmo Pedicure"
                                    />                       
                            </span>
                            <span className="float-right mx-5 mt-2">15</span>

                        </li>
                        <li className="list-group-item">
                        <span className="float-left mt-2">Champagne Pedicure</span>
                            <span>
                                <BookBtn 
                                    name="service"
                                    value="Champagne Pedicure"
                                    />                          
                            </span>
                            <span className="float-right mx-5 mt-2">10</span>

                        </li>
                    </ul>
                </PanelBody>
            </Panel>
        </PanelGroup> */}
    </div>
)

export default ServiceList;
