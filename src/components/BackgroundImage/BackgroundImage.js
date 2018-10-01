import React from "react";
import BackgroundImage from "react-background-image-loader";


export default (props) => {
    const { source } = props;
    const localImage = '../assets/images/background/';

    return(
        <BackgroundImage src={source} placeholderImage={localImage}>
            <div className="salonBackground">
            </div>
        </BackgroundImage>
    )
}

