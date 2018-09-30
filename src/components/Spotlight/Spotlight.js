import React from "react";
import spotlightImage from "../assets/images/spotlight/spotlight-1.jpg";

const styles = {
    backgroundImage: {
        backgroundImage: `url(${spotlightImage})`
    }
}

const Spotlight = () => (
        <section 
            className="slice slice-lg pb-200 bg-cover bg-size bg-size--cover"
            style={styles.backgroundImage}
        >
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pt-lg-xl pb-lg-md text-center">
                                <h2 className="heading display-4 text-white mb-2">Welcome to Ahh Nails</h2>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <p className="lead text-white lh-180">A purposeful event the will gather on one single stage the most important figures in the digital environment.</p>
                                        <a href="https://www.youtube.com/watch?v=mqpwDJpI3Rc" className="btn btn-white btn-icon-only btn-zoom--hover rounded-circle mt-4" data-fancybox>
                                            <span className="btn-inner--icon"><i className="fas fa-play"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
)


export default Spotlight;