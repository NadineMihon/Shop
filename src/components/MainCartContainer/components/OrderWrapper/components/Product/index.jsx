import React, { useContext } from "react";
import { CartAndFavoritesContext } from "../../../../../../context/cartAndFavoritesContext";

export const Product = ({ product }) => {
    const { addToCart, reduceProductQuantity, deleteProduct } = useContext(CartAndFavoritesContext);

    return (
        <div className="product">
            <div className="photo">
                <img
                    className="product-image" 
                    src={product.image}
                    alt="Product image"
                />
            </div>
            <div className="info">
                <div className="title">{product.name}</div>
                <div className="price-wrapper">
                    <div className="price-and-quantity">
                        <div className="price">
                            {
                                product.oldPrice && <div className="old-price">{`$${product.oldPrice}`}</div>   
                            }
                            <div className="current-price">{`$${product.price}`}</div>
                        </div>
                        <div className="quantity">
                            <div
                                onClick={() => reduceProductQuantity(product)}
                                className="count-reduction-button"
                            >
                                -
                            </div>
                            <div className="count">{product.quantity}</div>
                            <div
                                onClick={() => addToCart(product)} 
                                className="count-increase-button"
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className="total-price">{`$${(product.price * product.quantity).toFixed(2)}`}</div>
                </div>
                <div
                    onClick={() => deleteProduct(product)}
                    className="close"
                >
                        <img src="./icons/close-icon.svg" alt="Close" />
                </div>
            </div>
        </div>
    )
};