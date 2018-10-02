import React from "react";
import GalImage1 from "../assets/images/gallery/spotlight1-1.jpg";
import GalImage2 from "../assets/images/gallery/spotlight2-1.jpg";
import GalImage3 from "../assets/images/gallery/spotlight3-1.jpg";


const styles = {
    galerySize: {
        width: `50%`,
        height: `50%`
    }
}

const Gallery = () => (
    <section className="slice slice-lg pt-md mx-5">

        <ul className="nav nav-pills nav-fill flex-column flex-sm-row" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link mb-sm-3 active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pedicures</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mb-sm-3" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Manicures</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mb-sm-3" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Facials</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={GalImage1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage3} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>    </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={GalImage1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage3} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>    </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={GalImage1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={GalImage3} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>    </div>
        </div>






    </section>
);

export default Gallery;

