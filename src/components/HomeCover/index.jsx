import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";

export const HomeCover = () => {
    const { setPage } = useContext(PageContext);

    return (
        <div className="home-cover-wrapper">
            <div className="home-cover">
                <div className="find-us">
                    <div className="find-us-links">
                        <div className="find-us-link">
                            <a href="#">FB</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="#">TW</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="#">INS</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="#">PT</a>
                        </div>
                    </div>
                </div>
                <div className="page-number"><span className="active">1</span>/3</div>
                <div className="advertising-section">
                    <div className="image-wrapper">
                        <div className="image"></div>
                        <div className="decor-section">
                            <div className="decor">
                                <img src="./icons/home-cover-decor.svg" alt="Decor Icon" />
                            </div>
                            <div className="controls-section">
                                <div className="controls">
                                    <div className="scroll-controls">
                                        <div className="title">Scroll Down</div>
                                        <div className="vertical-line">
                                            <img src="./icons/vertical-line.svg" alt="Vertical Line" />
                                        </div>
                                    </div>
                                    <div className="navigation-controls">
                                        <div className="scale">
                                            <div className="scale-item active">
                                                <img src="./icons/scale-item-active.svg" alt="Scale Icon" />
                                            </div>
                                            <div className="scale-item">
                                                <img src="./icons/scale-item.svg" alt="Scale Icon" />
                                            </div>
                                            <div className="scale-item">
                                                <img src="./icons/scale-item.svg" alt="Scale Icon" />
                                            </div>
                                        </div>
                                        <div className="navigation">
                                            <div className="arrow">
                                                <img src="./icons/arrow-left.svg" alt="Arrow Icon" />
                                            </div>
                                            <div className="arrow">
                                                <img src="./icons/arrow-right.svg" alt="Arrow Icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="advertising">
                            <div className="description">
                                <div className="subtitle"><span className="bold">NEW</span> COLLECTION</div>
                                <div className="title">Meet New Fashion Week</div>
                            </div>
                            <div
                                className="button-wrapper"
                                onClick={() => setPage('Shop')}
                            >
                                <button className="button">Shop Now</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};