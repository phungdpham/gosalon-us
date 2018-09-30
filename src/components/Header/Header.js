import React from "react";

const Header = props => (
    <div className="header-transparent" id="header-main">
        {props.children}
    </div>
);

export default Header;