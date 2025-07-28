import React from "react";

export const AboutCompany = () => {
    return (
        <div className="container">
            <div className="about-company">
                <div className="left-side">
                    <div className="short-description">
                        <div className="title">All About Company</div>
                        <div className="info">Official representative of the world-famous clothing
                            brand Fashionee in Europe and the world.
                        </div>
                    </div>
                    <div className="company-info">
                        <div className="title">The Beginning Of Our Journey</div>
                        <div className="description">
                            <div className="year-wrapper">
                                <div className="year">2010</div>
                                <div className="vertical-line">
                                    <img src="./icons/vertical-line.svg" />
                                </div>
                            </div>                         
                            <div className="info">
                                In 2010, our company celebrated its 10th anniversary - these are the years of acquired 
                                experience of trading around the world. Join us among our clients! 
                                You can buy only original things from us. 
                                We offer products of your favorite brands - clothes, shoes, accessories, 
                                textiles and much more - quality products for every taste and age from Europe.
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
                    <div className="left-decor">
                        <img src="./icons/about-decor.svg" alt="Decor" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="products-count">
                        <div className="quantity">
                            <div className="number">2587</div>
                            <div className="plus">+</div>         
                        </div>
                        <div className="title">Products for you</div>
                    </div>
                    <div className="company-info">
                        <div className="title">Who Are We Now?</div>
                        <div className="description">
                            <div className="year-wrapper">
                                <div className="year">2020</div>
                                <div className="vertical-line">
                                    <img src="./icons/vertical-line.svg" />
                                </div>
                            </div>                        
                            <div className="info">
                                We now have a team of more than 1,000 skilled workers and about 167 clothing brands 
                                that cooperate with us. Ordering in our store is a saving of time 
                                and effort to find what you need; assistance of experienced consultants in choosing a model.
                                Our specialists will help you specify your European size, 
                                tell you about fabrics and materials.
                            </div>
                        </div>
                    </div>
                    <div className="right-decor">
                        <img src="./icons/about-decor.svg" alt="Decor" />
                    </div>
                </div>
            </div>   
        </div>
        
    )
};