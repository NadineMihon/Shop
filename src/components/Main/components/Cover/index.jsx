import React from "react";

export const Cover = () => {

    return (
        <div className="cover-wrapper">
            <div className="cover">
                <div className="page-name-wrapper">
                    <div className="decor-and-page-name">
                        <div className="decor">
                            <img src="/icons/header-decor.svg" alt="Decor" />
                        </div>
                        <div className="page-name">
                            <div className="title">Shop</div>
                            <div className="menu">
                                <div className="menu-item">Home</div>
                                <div className="menu-item active">Shop</div>
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