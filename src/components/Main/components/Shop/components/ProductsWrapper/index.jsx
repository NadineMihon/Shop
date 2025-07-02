import React, { useContext } from "react";
import { Product } from "./components/Product";
import { FilteredProductsContext } from "../../../../../../context/filteredProductsContext";
import { FilterContext } from "../../../../../../context/filterContext";

export const ProductsWrapper = () => {
    const { sort, setSort } = useContext(FilterContext);

    const filteredProducts = useContext(FilteredProductsContext);

    return (
        <div className="products-wrapper js-products-wrapper">
            <div className="sort-and-count">
                <div className="products-count">
                    There are <span className="bold">{filteredProducts.length}</span> products in this category
                </div>
                <div className="sort">
                    <select 
                        className="input"
                        value={sort || 'default'}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value='default'>By relevance</option>
                        <option value='name'>From A to Z</option>
                        <option value='price'>From Low to High</option>
                    </select>
                </div>
            </div>
            <div className="products">
                {
                filteredProducts.map((product) => <Product key={product.id} product={product} />)
                }    
            </div>
            <div className="pagination" id="pagination">
                <div className="button-left js-button-left">
                    <img src="./icons/arrow-left.svg" alt="Arrow left" />
                </div>
                <div className="pages js-pages">
                    <div className="page">1</div>
                    <div className="page">2</div>
                    <div className="page">3</div>
                </div>
                <div className="button-right js-button-right">
                    <img src="./icons/arrow-right.svg" alt="Arrow right" />
                </div>
            </div>
        </div>
    )
};