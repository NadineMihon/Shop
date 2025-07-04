import React, { useContext } from "react";
import { Product } from "./components/Product";
import { FilteredProductsContext } from "../../../../../../context/filteredProductsContext";
import { FilterContext } from "../../../../../../context/filterContext";
import { Pagination } from "./components/Pagination";

export const ProductsWrapper = () => {
    const { sort, setSort, setPagination } = useContext(FilterContext);

    const { products, pageCount, currentPage, productsCount, goToPage } = useContext(FilteredProductsContext);

    const handleCombinedChange = (e) => {
        setSort(e.target.value);
        setPagination(prev => ({
            ...prev,
            currentPage: 1
        }));;
    };

    return (
        <div className="products-wrapper js-products-wrapper">
            <div className="sort-and-count">
                <div className="products-count">
                    There are <span className="bold">{productsCount}</span> products in this category
                </div>
                <div className="sort">
                    <select 
                        className="input"
                        value={sort || 'default'}
                        onChange={handleCombinedChange}
                    >
                        <option value='default'>By relevance</option>
                        <option value='name'>From A to Z</option>
                        <option value='price'>From Low to High</option>
                    </select>
                </div>
            </div>
            <div className="products">
                {
                products.map((product) => <Product key={product.id} product={product} />)
                }    
            </div>
            {
                productsCount > 0 && <Pagination 
                    currentPage={currentPage}
                    pageCount={pageCount}
                    goToPage={goToPage} 
                /> 
            }

        </div>
    )
};