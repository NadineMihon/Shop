import React, { useContext } from "react";
import { CartAndFavoritesContext } from "../../../../../../../../context/cartAndFavoritesContext";

export const Product = ({ product }) => {
    const { addToCart, toggleProductInFavorites, isFavorite } = useContext(CartAndFavoritesContext);

    const buyProduct = () => {
        addToCart(product);
    };

    return (
        <div className="product">
            <div className="photo">
                <div className="top-bar">
                    <div className="labels">
                        {product.isNew && (
                            <div className="label new">NEW</div>
                        )}
                        {product.isSale && (
                            <div className="label sale">SALE</div>
                        )}
                    </div>
                    <div className="favorites">
                        <img
                            onClick={() => toggleProductInFavorites(product)} 
                            className="favorites-icon" 
                            src={isFavorite(product.id)
                                ? '/icons/favorites-red.svg'
                                : '/icons/favorites.svg'} 
                            alt="Favorites icon" />
                    </div>
                </div>
                <img className="product-image" src={product.image} alt="Product image" />
            </div>
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                    <div className="current-price">${product.price}</div>
                    {product.oldPrice && (
                        <div className="old-price">${product.oldPrice}</div>
                    )}

                </div>
            </div>
            <div className="button-wrapper">
                <button className="button" id="apply-filter" onClick={buyProduct}>Add To Cart</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}