import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { menuItems } from "../../constants/menuItems";

export const Cover = () => {
    const { page, setPage } = useContext(PageContext);

    return (
        <div className="cover-wrapper">
            <div className="cover">
                <div className="page-name-wrapper">
                    <div className="decor-and-page-name">
                        <div className="decor">
                            <img src="/icons/header-decor.svg" alt="Decor" />
                        </div>
                        <div className="page-name">
                            <div className="title">
                                {page}
                            </div>
                            <div className="menu">
                                <div className="menu-item">Home</div>
                                {
                                    menuItems.shop.includes(page) 
                                        ? (
                                            <>
                                                <div
                                                    onClick={() => setPage('Shop')} 
                                                    className={`menu-item ${page === 'Shop' ? 'active' : ''}`}
                                                >
                                                        Shop
                                                </div>  
                                                {
                                                    page === 'Cart' && (
                                                        <div className="menu-item active">Cart</div>
                                                    )
                                                }
                                                {
                                                    page === 'Wishlist' && (
                                                        <div className="menu-item active">Wishlist</div>
                                                    )
                                                }
                                            </>                                  
                                        )
                                        : <div className="menu-item active">{page}</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                </div>
                <div className="image"></div>
            </div>
        </div>
    )
};