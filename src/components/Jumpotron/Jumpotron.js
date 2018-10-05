import React from "react";
import jumpotronImage from "../assets/images/jumpotron/jumpotron1-3.jpg";



const Jumpotron = props => (
<div class="jumbotron jumbotron-fluid">
    <span className="mask opacity-8">
        <img className="d-block w-100" src={jumpotronImage}></img>
    </span>
  <div class="container">
    <h1 class="display-4 text-center text-dark">Book Appointment</h1>
  </div>
</div>
)

export default Jumpotron;