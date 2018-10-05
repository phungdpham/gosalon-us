import React from "react";

const Header = props => (
    <header className="header-account-page bg-gradient-primary d-flex align-items-end" id="header-main">
        <div className="container">
            {props.children}
        </div>
    </header>
);

export default Header;