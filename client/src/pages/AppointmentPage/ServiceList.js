import React from "react";
//importing components
import { PanelGroup, Panel, PanelHeading, PanelBody } from "../../components/Panel";


const ServiceList = () => (
    <div>
        <PanelGroup>
            <Panel>
                <PanelHeading><h3>Nails Enhancements</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="float-left">Acrylic Full Set</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">30</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left">Acrylic Pink And White</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">55</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left">Dip It</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">40</span>

                        </li>
                    </ul>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelHeading><h3>Manicure</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="float-left">Basic Manicure</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">20</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left">French</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">8</span>


                        </li>
                        <li className="list-group-item">
                            <span className="float-left">Basic Polish Change</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">8</span>


                        </li>
                    </ul>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelHeading><h3>Pedicure</h3></PanelHeading>
                <PanelBody>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <span className="float-left">Cosmo Pedicure</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">15</span>

                        </li>
                        <li className="list-group-item">
                        <span className="float-left">Champagne Pedicure</span>
                            <span>
                                <button type="button" className="btn btn-outline-warning float-right mx-5">Book</button>
                            </span>
                            <span className="float-right mx-5">10</span>

                        </li>
                    </ul>
                </PanelBody>
            </Panel>
        </PanelGroup>
    </div>
)

export default ServiceList;
