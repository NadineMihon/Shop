import { createContext, useContext, useState, useEffect } from "react";
import { FilterContext } from "./filterContext";
import { ProductsContext } from "./productsContext";

export const FilteredProductsContext = createContext([]);

export const FilteredProductsProvider = ({ children }) => {
    const products = useContext(ProductsContext);
    const { filters, setFilters } = useContext(FilterContext);

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
    
        setFilteredProducts(updatedProducts);
      
    }, [filters, products]);

    return (
        <FilteredProductsContext.Provider value={filteredProducts}>
            {children}
        </FilteredProductsContext.Provider>
    )
};