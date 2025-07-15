import React, { useContext } from "react";
import { CartAndFavoritesContext } from "../../../../../../context/cartAndFavoritesContext";

export const Product = ({ product }) => {
    const { addToCart } = useContext(CartAndFavoritesContext);
    return(
        <div className="favorites-item">
            <div className="photo">
                <img src={product.image} className="product-image" alt="Product Image" />
            </div>
            <div className="info">
                <div className="title">{product.name}</div>
                <div className="description">
                    <div className="status-and-price">
                        <div className="status-wrapper">
                            <div className="article">
                                <div className="title">Article:</div>
                                <div className="number">{`000845DZ${product.id}`}</div>
                            </div>
                            <div className="status">
                                <div className="title">Status:</div>
                                <div className="value">IN STOCK</div>
                            </div>
                        </div>
                        <div className="price-wrapper">
                            {
                                product.oldPrice && <div className="old-price">{`$${product.oldPrice}`}</div>
                            }
                            <div className="current-price">{`$${product.price}`}</div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <div className="cart-icon">
                            <img src="../icons/cart.svg" alt="Cart Icon" />
                        </div>
                        <div 
                            className="title"
                            onClick={() => addToCart(product)}
                        >
                            Add To Cart
                        </div>
                    </div>
                </div>
                <div className="close">
                    <img src="../icons/close-icon.svg" alt="Close Icon" />
                </div>
            </div>
        </div>
    )
}