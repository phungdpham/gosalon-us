import React from "react";

export const CardBody = props => (
    <div className="card-body">
            <ul className="list-group list-group-lush">
                {props.services.map(serviceName => (
                    <li className="list-group-item" key={serviceName.id}>
                        {serviceName.service}
                    </li>
                ))}
            </ul>
    </div>
);