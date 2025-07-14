import React from "react";
import { OrderWrapper } from "./components/OrderWrapper";
import { PromoCodeWrapper } from "./components/PromoCodeWrapper";
import { DiscountProvider } from "../../context/discountContext";

export const MainCartContainer = () => {
    return (
        <div className="container">
            <div className="cart">
                <DiscountProvider>
                    <OrderWrapper />
                    <PromoCodeWrapper />
                </DiscountProvider>
            </div>
        </div>
    )
};