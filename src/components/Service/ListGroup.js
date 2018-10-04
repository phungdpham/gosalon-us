import React from "react";
// import services from "./services.json";


const ListGroup = props => (
    <div className="container" >
        <div className="row mt-1">
            <div className="col-lg-12 my-5">
                <div className="text-left" >
                    <h2 className="heading display-4 text-dark mb-2">Our Service</h2>
                        <ul className="list-group">
                            {props.services.map(groupList => (
                                <li className="list-group-item text-dark" key={groupList.id}>
                                    {groupList.group}
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    </div>

);

export default ListGroup;