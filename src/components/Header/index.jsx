import React, { useContext } from "react"
import { CartAndFavoritesContext } from "../../context/cartAndFavoritesContext";

export const Header = () => {
    const { countInBasket, countInFavorites } = useContext(CartAndFavoritesContext);
    
    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className="logo">
                        <img src="/icons/logo.svg" alt="logo"/>
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-item">Home</div>
                    <div className="menu-item">
                        Pages
                        <div className="arrow">
                            <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                            <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                        </div>
                    </div>
                    <div className="menu-item active">
                        Shop
                        <div className="arrow">
                            <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                            <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                        </div>
                    </div>
                    <div className="menu-item">Blog</div>
                    <div className="menu-item">Contact</div>
                </div>
            </div>
            <div className="right-side">
                <div className="header-icon">
                    <img src="/icons/search.svg" alt="search" />
                </div>
                <div className="header-icon">
                    <img src="/icons/profile.svg" alt="profile" />
                </div>
                <div className="header-icon">
                    <img src="/icons/favorites.svg" alt="favorites" className="favorite-icon" />
                    <div className="counter js-favorites-counter">{countInFavorites}</div>
                </div>
                <div className="header-icon">
                    <img src="/icons/cart.svg" alt="cart" />
                    <div className="counter js-basket-counter">{countInBasket}</div>
                </div>
            </div>
        </header>
    )
};