import React from "react";


const styles = {
    backgroundColor:  {
        backgroundColor: `#6C3483`,
        opacity: 1
        }
    }

const Navbar = () => (
    <div className="navbar navbar-main navbar-expand-lg navbar-fixed-top"  style={styles.backgroundColor}>
        <div className="container">
            <a className ="navbar-brand mr-lg-5 text-white">BEAUTY NAILS SPA</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbar-main-collapse"
                aria-controls="navbar-main-collapse"
                aria-expanded="false"
                aria-label="Toggle Navigation">
                    <span className="navbar-togger-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-main-collapse">
                <ul className="navbar-nav align-items-lg-center">
                    <li className="nav-item mx-2 text-white">Home</li>
                    {/* <li className="nav-item mx-2 text-white">Services</li>
                    <li className="nav-item mx-2 text-white">Gallery</li> */}
                    <li className="nav-item mx-2 text-white">Special</li>
                    <li className="nav-item mx-2 text-white">Location</li>

                </ul>
                <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                    <li className="nav-item mr-0">
                        <a href="google.com" target="_blank" className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex mx-2">
                            <span className="btn-inner--icon"><i className="fas fa-shopping-cart"></i></span>
                            <span className="btn-inner--text">Call Us</span>
                        </a>
                        <a href="google.com" target="_blank" className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
                            <span className="btn-inner--icon"><i className="fas fa-shopping-cart"></i></span>
                            <span className="btn-inner--text">Book Appointment</span>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Navbar;