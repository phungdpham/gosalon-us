import React from "react";
//importing components
import { PanelGroup, Panel, PanelHeading, PanelBody, BookBtn } from "../../components/Panel";


const ServiceList = props => (
    <div>
        <PanelGroup>
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
                                    onClick={props.stateInfo.handleBookService}
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
                                    onClick={this.handleBookService}
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
        </PanelGroup>
    </div>
)

export default ServiceList;
