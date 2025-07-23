import React, { useContext } from "react";
import { FavoritesWrapper } from "./components/FavoritesWrapper";
import { CartAndFavoritesContext } from "../../context/cartAndFavoritesContext";

export const MainWishlistContainer = () => {
    const { favorites, filteredFavorites, setFavorites, handleFilterChange } = useContext(CartAndFavoritesContext);
    
    return (
        <div className="container">
            <div className="wishlist-wrapper">
                <FavoritesWrapper />
                {
                    !filteredFavorites.length && favorites.length
                        ? <div className="empty">The selected products are missing</div>
                        : <></>
                }
                {
                    favorites.length ? (
                        <div className="button-and-filter">
                            <div className="button-wrapper">
                                <button 
                                    className="button"
                                    onClick={() => setFavorites([])}
                                >
                                    Clear Wishlist
                                </button>
                                <div className="vertical-line"></div>
                            </div>
                            <div className="filter-wrapper">
                                <input
                                    onClick={(e) => handleFilterChange(e)} 
                                    className="filter-checkbox" 
                                    type="checkbox" id="filter" 
                                    name="filter"
                                />
                                <label className="filter-name" htmlFor="filter">Show in stock only</label>
                            </div>
                        </div>   
                    )
                        : <div className="empty">The wishlist is empty</div>
                }

            </div>
        </div>
    )
};