import React, { useContext } from "react";
import { CartAndFavoritesContext } from "../../../../context/cartAndFavoritesContext";
import { Product } from "./components/Product";

export const FavoritesWrapper = () => {
    const { favorites } = useContext(CartAndFavoritesContext);

    return (
        <div className="favorites-wrapper">
            <div className="favorites-items">
                {
                   favorites.map((product) => <Product key={product.id} product={product} />) 
                }
            </div>
        </div>
    )
}