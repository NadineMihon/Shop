import React from "react";

export const Newsletter = () => {

    return (
        <div className="newsletter-wrapper">
            <div className="container">
                <div className="newsletter">
                    <div className="newsletter-info">
                        <div className="title">Newsletter</div>
                        <div className="description">
                            Be the first to hear about deals, offers and upcoming collections.
                        </div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="email" className="input" placeholder="Enter your email" />
                        <div className="button-wrapper">
                            <button className="button">Subscribe</button>
                            <div className="vertical-line"></div>
                        </div>
                    </div>
                    <div className="decor">
                        <img src="./icons/aside-decor.svg" alt="Decor" />
                    </div>
                </div>
            </div>
        </div>
    )
};