import React, { useContext } from "react";
import { FavoritesWrapper } from "./components/FavoritesWrapper";
import { CartAndFavoritesContext } from "../../context/cartAndFavoritesContext";

export const MainWishlistContainer = () => {
    const { favorites, setFavorites } = useContext(CartAndFavoritesContext);
    
    return (
        <div className="container">
            <div className="wishlist-wrapper">
                <FavoritesWrapper />
                {
                    favorites.length ? (
                        <div className="button-and-sort">
                            <div className="button-wrapper">
                                <button 
                                    className="button"
                                    onClick={() => setFavorites([])}
                                >
                                    Clear Wishlist
                                </button>
                                <div className="vertical-line"></div>
                            </div>
                            <div className="sort-wrapper">
                                <input className="sort-checkbox" type="checkbox" id="sort" name="sort" />
                                <label className="sort-name" htmlFor="sort">Show in stock only</label>
                            </div>
                        </div>   
                    )
                        : <div className="empty">The wishlist is empty</div>
                }
            </div>
        </div>
    )
};