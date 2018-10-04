import React from "react";

const CardContainer = props => (
    <div className="container" >
        <div className="row mt-1">
            <div className="col-lg-12 my-5">
                {props.children}
            </div>
        </div>
    </div>

);

export default CardContainer;