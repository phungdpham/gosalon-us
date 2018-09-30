import React from "react";
import logo1 from '../assets/images/logo/logo1.png';

//log if logo displayed
console.log(logo1);

const styles = {
    logo: {
        height: 50,
        width: 50
    }
}

const Navbar = () => (
    <div className="navbar navbar-main navbar-expand-lg navbar-fixed-top navbar-dark bg-dark" id="navbar-main">
        <div className="container">
            <a className ="navbar-brand mr-lg-5">
                <img 
                    alt="salon-logo" 
                    src={logo1}
                    style={styles.logo}>
                </img>
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbar-main-collapse"
                aria-controls="navbar-main-collapse"
                aria-expanded="false"
                aria-label="Toggle Navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbar-main-collapse">
                <ul className="navbar-nav align-items-lg-center">
                    <li className="nav-item mx-2">About Us</li>
                    <li className="nav-item mx-2">Services</li>
                    <li className="nav-item mx-2">Gallery</li>
                    <li className="nav-item mx-2">Promotion</li>
                    <li className="nav-item mx-2">Location</li>



                </ul>
                <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                    <li className="nav-item mr-0">
                        <a href="google.com" target="_blank" class="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
                            <span class="btn-inner--icon"><i class="fas fa-shopping-cart"></i></span>
                            <span class="btn-inner--text">Call Us</span>
                        </a>
                        <a href="google.com" target="_blank" class="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
                            <span class="btn-inner--icon"><i class="fas fa-shopping-cart"></i></span>
                            <span class="btn-inner--text">Book Appointment</span>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Navbar;