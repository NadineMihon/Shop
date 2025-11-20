import React, { useContext } from "react";
import { PageContext } from "../../../../context/pageContext";

export const CollectionsPreviewWrapper = () => {
    const { setPage } = useContext(PageContext);

    return (
        <div className="collections-preview-wrapper">
            <div className="container">
                <div className="collections-preview">
                    <div className="left-preview-wrapper">
                        <div className="products-count">
                            <div className="quantity">
                                <div className="number">2587</div>
                                <div className="plus">+</div>
                            </div>
                            <div className="title">Products for you</div>
                        </div>
                        <div className="category-preview">
                            <div className="image"></div>
                            <div className="name">ACCESSORIES</div>
                            <div className="advertising-wrapper">
                                <div className="advertising">
                                    <div className="description">
                                        <div className="subtitle"><span className="bold">NEW</span> ACCESSORIES</div>
                                        <div className="title">Fashion For This Summer</div>
                                    </div>
                                    <div
                                        className="link-wrapper"
                                        onClick={() => setPage('Shop')}
                                    >
                                        <div className="link-line">
                                            <img src="./icons/link-line-icon.svg" alt="Line Icon" />
                                        </div>
                                        <div className="link-name">Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sale-banner">
                            <img
                                className="banner-icon"
                                src="./icons/sale-banner.svg"
                                alt="Sale Banner"
                                onClick={() => setPage('Shop')}
                            />
                        </div>
                    </div>
                    <div className="right-preview-wrapper">
                        <div className="category-preview men">
                            <div className="image"></div>
                            <div className="name">SWEATERS</div>
                            <div className="advertising-wrapper">
                                <div className="advertising">
                                    <div className="description">
                                        <div className="subtitle"><span className="bold">MEN</span> COLLECTION</div>
                                        <div className="title">New Autumn Arrivals 2020</div>
                                    </div>
                                    <div
                                        className="link-wrapper"
                                        onClick={() => setPage('Shop')}
                                    >
                                        <div className="link-line">
                                            <img src="./icons/link-line-icon.svg" alt="Line Icon" />
                                        </div>
                                        <div className="link-name">Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category-preview women">
                            <div className="image"></div>
                            <div className="name">DRESSES</div>
                            <div className="advertising-wrapper">
                                <div className="advertising">
                                    <div className="description">
                                        <div className="subtitle"><span className="bold">WOMEN</span> COLLECTION</div>
                                        <div className="title">Trendy Look For Every Day</div>
                                    </div>
                                    <div
                                        className="link-wrapper"
                                        onClick={() => setPage('Shop')}
                                    >
                                        <div className="link-line">
                                            <img src="./icons/link-line-icon.svg" alt="Line Icon" />
                                        </div>
                                        <div className="link-name">Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clients">
                            <div className="quantity">
                                <div className="number">5649</div>
                                <div className="plus">+</div>
                            </div>
                            <div className="title">Satisfied clients</div>
                        </div>
                        <div className="right-decor">
                            <img src="./icons/home-cover-decor.svg" alt="Decor" />
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button className="button">View All Collections</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="top-decor">
                <img src="./icons/home-cover-decor.svg" alt="Decor" />
            </div>
        </div>
    )
};