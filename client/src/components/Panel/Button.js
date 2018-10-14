import React from "react";

export const Button = props => (
  <button {...props} style={{ marginTop: 5 , marginBottom: 10 }} className="btn btn-warning">
    <span>{props.children}</span>
  </button>
);
