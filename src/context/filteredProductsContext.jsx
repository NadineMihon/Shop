import { createContext, useContext, useState, useEffect } from "react";
import { FilterContext } from "./filterContext";
import { ProductsContext } from "./productsContext";
import { useSort } from "../hooks/useSort";

export const FilteredProductsContext = createContext([]);

export const FilteredProductsProvider = ({ children }) => {
    const products = useContext(ProductsContext);
    const { filters, setFilters, sort, setSort } = useContext(FilterContext);

    const { sortProducts } = useSort();

    const [filteredProducts, setFilteredProducts] = useState(products);
    
    useEffect(() => {
        let updatedProducts = [...products];
    
        if (filters.searchValue.trim()) {
          updatedProducts = updatedProducts.filter(product =>
            product.name.toLowerCase().includes(filters.searchValue.toLowerCase())
          );
        }
    
        if (filters.category && filters.category !== 'All') {
          updatedProducts = updatedProducts.filter(product =>
            product.categories.includes(filters.category)
          );
        }
    
        if (filters.colors.length) {
          updatedProducts = updatedProducts.filter(product =>
            filters.colors.includes(product.color)
          );
        }
    
        if (filters.price.minPrice || filters.price.maxPrice) {
          if (filters.price.minPrice && filters.price.maxPrice) {
            updatedProducts = updatedProducts.filter(product =>
              (product.price >= filters.price.minPrice) && (product.price <= filters.price.maxPrice)
            );
          } else if (filters.price.minPrice) {
            updatedProducts = updatedProducts.filter(product => 
              product.price >= filters.price.minPrice
            );
          } else if (filters.price.maxPrice) {
            updatedProducts = updatedProducts.filter(product =>
              product.price <= filters.price.maxPrice
            );
          }
        }

        const sortedProducts = sortProducts(updatedProducts);
    
        setFilteredProducts(prev => {
          return JSON.stringify(prev) !== JSON.stringify(sortedProducts)
            ? sortedProducts
            : prev;
        });
      
    }, [filters, sort, products]);

    return (
        <FilteredProductsContext.Provider value={filteredProducts}>
            {children}
        </FilteredProductsContext.Provider>
    )
};