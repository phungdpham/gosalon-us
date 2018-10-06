import React from "react";
import "./ListGroup.css";

const ListGroup = ({ children }) => {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    );
  };


export default ListGroup;

