import React, { useContext } from "react";
import { Product } from '../../../MainShopContainer/components/Shop/components/ProductsWrapper/components/Product/index'
import { FilteredProductsContext } from '../../../../context/filteredProductsContext';
import { PageContext } from '../../../../context/pageContext';

export const FeaturedProductsWrapper = () => {
    const { products } = useContext(FilteredProductsContext);
    const { setPage } = useContext(PageContext);

    return (
        <div className="featured-products-wrapper">
            <div className="container">
                <div className="featured-products">
                    <div className="section-name">
                        <div className="subtitle"><span className="bold">NEW</span> COLLECTIONS</div>
                        <div className="title">Featured Products</div>
                    </div>
                    <div className="products-wrapper">
                        <div className="category-wrapper">
                            <div className="category-item active">All</div>
                            <div className="category-item">Men</div>
                            <div className="category-item">Women</div>
                            <div className="category-item">Accessories</div>
                            <div className="category-item">New Arrivals</div>
                        </div>
                        <div className="products">
                            {
                                products.map((product) => <Product key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button 
                        className="button"
                        onClick={() => setPage('Shop')}
                    >
                            See All Products
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
        </div>
    )
};