import React from "react";
import spotlightImage from "../assets/images/spotlight/jumpotron1-2.jpg";

const styles = {
    backgroundImage: {
        backgroundImage: `url(${spotlightImage})`,
        width: `100%`,
        height: `auto`,
        opacity: 1
    },
    transbox: {
        background: `#6C3483`,
        opacity: 0.7,
        marginTop: `30px`,
        marginBottom: `30px`
        
    }
  }

const Spotlight = () => (
        <section 
            className="slice slice-lg pb-200 bg-cover bg-size--cover"
        >
        <span className="mask opacity-8">
            <img className="d-block w-100" src={spotlightImage} alt="Second slide"></img>
        </span>
            <div className="container " >
                    <div className="row mt-1" style={styles.transbox}>
                        <div className="col-lg-12 my-5">
                            <div className="text-center" >
                                <h2 className="heading display-4 text-white mb-2">Welcome to Ahh Nails</h2>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <p className="lead text-white lh-180">
                                        Beauty Nails is the premier destination for nail services in Orlando, Florida. Our goal is to pamper all the ladies
                                        with manicures and pedicures with the highest quality service.
                                        Rest assured that you will be in good hands with excellent service and comfort in a relaxing environment at Beauty Nails.
                                        </p>
                                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                                            <li className="nav-item mr-0">
                                                <a href="google.com" target="_blank" className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex mx-2">
                                                    <span className="btn-inner--icon"><i className="fas fa-shopping-cart"></i></span>
                                                    <span className="btn-inner--text">Call Us</span>
                                                </a>
                                                <a href="/appointment" target="_blank" className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
                                                    <span className="btn-inner--icon"><i className="fas fa-shopping-cart"></i></span>
                                                    <span className="btn-inner--text">Book Appointment</span>
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
)


export default Spotlight;