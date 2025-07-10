import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";

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
                                {page === 'shop' ? 'Shop' : 'Cart'}
                            </div>
                            <div className="menu">
                                <div className="menu-item">Home</div>
                                <div
                                    onClick={() => setPage('shop')} 
                                    className={`menu-item ${page === 'shop' ? 'active' : ''}`}
                                >
                                    Shop
                                </div>
                                    {
                                        page === 'cart' && <div className="menu-item active">Cart</div>
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