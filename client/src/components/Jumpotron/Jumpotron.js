import React from "react";
import jumpotronImage from "../assets/images/jumpotron/jumpotron1-3.jpg";



const Jumpotron = props => (
  <div className="jumbotron-fluid">
      <span className="mask opacity-8">
          <img className="d-block w-100" src={jumpotronImage}></img>
      </span>
      {props.children}
  </div>
)

export default Jumpotron;