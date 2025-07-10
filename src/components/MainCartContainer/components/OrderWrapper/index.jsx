import React, { useContext, useEffect, useState } from "react";
import { CartAndFavoritesContext } from "../../../../context/cartAndFavoritesContext";
import { Product } from "./components/Product";
import { DiscountContext } from "../../../../context/discountContext";


export const OrderWrapper = () => {
    const { cart, countInBasket } = useContext(CartAndFavoritesContext);
    const { discount } = useContext(DiscountContext);

    const [orderPrice, setOrderPrice] = useState(0);
    const [totalOrderPrice, setTotalOrderPrice] = useState(0);

    const delivery = orderPrice === 0 ? 0 : 15;
    const discountRate = 0.9;

    useEffect(() => {
        const updatedOrderPrice = cart.reduce(
            (sum, cartItem) => sum + (cartItem.price * cartItem.quantity),
            0
        );
        
        setOrderPrice(updatedOrderPrice);
    }, [cart]);

    useEffect(() => {
        const updatedTotalOrderPrice = discount 
            ? orderPrice * discountRate + delivery
            : orderPrice + delivery;

        setTotalOrderPrice(updatedTotalOrderPrice);
    }, [discount, orderPrice, discountRate, delivery]);

    const getOrderInfo = () => {
        const orderInfo = {
            productsCount: countInBasket,
            orderPrice: `$${orderPrice.toFixed(2)}`,
            discountForPromoCode: discount ? '10%' : 'No',
            delivery: `$${delivery}`,
            totalOrderPrice: `$${totalOrderPrice.toFixed(2)}`
        };

        console.log(orderInfo);
    };

    return (
        <div className="order-wrapper">
            <div className="product-list js-products">
                {
                    cart.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
            <div className="order">
                <div className="title">Your Order</div>
                <div className="order-price-wrapper">
                    <div className="price-row">
                        <div className="name">Order price</div>
                        <div className="price js-order-price">
                            {`$${orderPrice.toFixed(2)}`}
                        </div>
                    </div>
                    <div className="price-row">
                        <div className="name">Discount for promo code</div>
                        <div className="no-price js-discount">{discount ? '10%' : 'No'}</div>
                    </div>
                    <div className="price-row delimiter">
                        <div className="name">
                            Delivery <span className="additional">(Aug 02 at 16:00)</span>
                        </div>
                        <div className="price js-delivery-price">{`$${delivery}`}</div>
                    </div>
                    <div className="price-row total">
                        <div className="name">Total</div>
                        <div className="price js-total-order-price">{`$${totalOrderPrice.toFixed(2)}`}</div>
                    </div>
                    <div
                        onClick={() => getOrderInfo()} 
                        className="button-wrapper"
                    >
                            <button className="button">Checkout</button>
                            <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}