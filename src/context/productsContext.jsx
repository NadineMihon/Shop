import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        import('../data/products.json')
        .then(data => {
            setProducts(data.default);
        });
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
};