import React from "react";

const AppointmentNav = () => (
    <div>
        <div className="btn-group btn-group-nav shadow" role="group" aria-label="Basic example">
            <div className="btn-group" role="group">
                <a href="shop-cart.html" className="btn btn-secondary btn-icon active">
                    <span className="btn-inner--text d-none d-md-inline-block">Services</span>
                </a>
                <a href="shop-checkout-customer.html" className="btn btn-secondary btn-icon">
                    <span className="btn-inner--text d-none d-md-inline-block">Visit Time</span>
                </a>
                <a href="shop-checkout-shipping.html" className="btn btn-secondary btn-icon">
                    <span className="btn-inner--text d-none d-md-inline-block">Your Information</span>
                </a>
                <a href="shop-checkout-payment.html" className="btn btn-secondary btn-icon">
                    <span className="btn-inner--text d-none d-md-inline-block">Confirmation</span>
                </a>
            </div>
        </div>
    </div>
)

export default AppointmentNav;