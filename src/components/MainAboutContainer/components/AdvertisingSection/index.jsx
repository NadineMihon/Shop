import React, { useContext } from "react";
import { PageContext } from "../../../../context/pageContext";

export const AdvertisingSection = () => {
    const { setPage } = useContext(PageContext);

    return (
        <div className="advertising-wrapper">
            <div className="advertising-section">
                <div className="image"></div>
                <div className="container">
                    <div className="advertising">
                        <div className="description">
                            <div className="subtitle"><span className="bold">DEAL</span> OF THE WEEK</div>
                            <div className="title">Multi-Brand Store Of Clothes</div>
                            <div className="info">
                                We follow fashion trends and have been working for you for more than 20 years. 
                                A selection of the best, interesting, and most importantly, 
                                boring outfits for different occasions.
                            </div>   
                        </div>
                        <div 
                            className="button-wrapper"
                            onClick={() => setPage('Shop')}
                        >
                                <button className="button">Shop Now</button>
                                <div className="vertical-line"></div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
};