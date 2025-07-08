import React, { useContext, useState } from "react";
import { DiscountContext } from "../../../../context/discountContext";

export const PromoCodeWrapper = () => {
    const { setDiscount } = useContext(DiscountContext);

    const [promoCode, setPromoCode] = useState('');

    const applyPromoCode = () => {
        if (promoCode === 'ilovereact') {
            setDiscount(true);
            setPromoCode('');
        } else {
            setDiscount(false);
            setPromoCode('');
        }
    };

    return (
        <div className="promo-code-wrapper">
            <div className="info">
                <div className="title">You Have A Promo Code?</div>
                <div className="description">
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <div className="promo-code">
                <input 
                    className="input js-promo-code" 
                    type="text" 
                    name="promo-code" 
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                />
                <div className="button-wrapper">
                    <button 
                        onClick={applyPromoCode}
                        className="button js-promo-button" 
                    >
                            <img src="./icons/white-arrow.svg" alt="Arrow" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="find-us">
                <div className="find-us-text">Find us here:</div>
                <div className="find-us-links">
                    <div className="find-us-link">
                        <a href="#">FB</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#">TW</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#">INS</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#">PT</a>
                    </div>
                </div>
            </div>
        </div>
    )
};