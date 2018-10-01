import React from "react";
import spotlightImage from "../assets/images/spotlight/spotlight-1.jpg";

const styles = {
    backgroundImage: {
        backgroundImage: `url(${spotlightImage})`,
        opacity: 0.3
    }
  }

const Spotlight = () => (
        <section 
            className="slice slice-lg pb-300 bg-cover bg-size--cover"
            style={styles.backgroundImage}
        >
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center" >
                                <h2 className="heading display-4 text-white mb-2">Welcome to Ahh Nails</h2>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <p className="lead text-white lh-180">
                                        Beauty Nails is the premier destination for nail services in Orlando, Fl. Our goal is to pamper all the ladies
                                        with manicures and pedicures with the highest quality service. We have become a perfect destination for those seeking
                                        peace and chamr.. Our innovative spa chairs and instruments are sterilized after every use to ensure your safety.
                                        Rest assured that you will be in good hands with excellent service and comfort in a relaxing environment at Beauty Nails.
                                        </p>
                                        {/* <a href="https://www.youtube.com/watch?v=mqpwDJpI3Rc" className="btn btn-white btn-icon-only btn-zoom--hover rounded-circle mt-4" data-fancybox>
                                            <span className="btn-inner--icon"><i className="fas fa-play"></i></span>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
)


export default Spotlight;