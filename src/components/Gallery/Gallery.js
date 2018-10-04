import React from "react";
import GalImage1 from "../assets/images/gallery/spotlight1-1.jpg";
import GalImage2 from "../assets/images/gallery/spotlight2-1.jpg";
import GalImage3 from "../assets/images/gallery/spotlight3-1.jpg";


// const styles = {
//     galerySize: {
//         width: `50%`,
//         height: `50%`
//     }
// }

const Gallery = () => (
    <section className="slice slice-lg pt-md mx-5">
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
        </div>
    </section>
);

export default Gallery;

