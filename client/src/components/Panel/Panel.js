import React from "react";

const style = {
    paddling: {
        paddingTop: "10px",
        paddingRight: "10px",
        paddingBottom: "10px",
        paddingLeft: "10px"
    }
}

export const Panel = props => (
    <div className="panel panel-default" style={style.paddling}>
        {props.children}
    </div>
);