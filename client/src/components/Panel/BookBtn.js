import React from "react";

export const BookBtn = props => (
  <div>
    <button className="btn btn-sm btn-outline-light float-right ml-5"  {...props} >
      {props.children}
    </button>
  </div>
);
