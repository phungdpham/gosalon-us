import React from "react";

import spotlightImage from "../assets/images/spotlight/spotlight-1.jpg";

const styles = {
    backgroundImage: {
        backgroundImage: `url(${spotlightImage})`,
        opacity: 0.6
    }
  }

const Header = props => (
    <div className="header-transparent" 
        style={styles.backgroundImage}
        id="header-main">
        {props.children}
    </div>
);

export default Header;