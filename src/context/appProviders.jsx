import React from "react";
import { PageProvider } from "./pageContext";
import { ProductsProvider } from "./productsContext";
import { FilterProvider } from "./filterContext";
import { FilteredProductsProvider } from "./filteredProductsContext";
import { CartAndFavoritesProvider } from "./cartAndFavoritesContext";

export const AppProviders = ({ children }) => {
    return (
        <PageProvider>
            <ProductsProvider>
                <FilterProvider>
                    <FilteredProductsProvider>
                        <CartAndFavoritesProvider>
                            {children}
                        </CartAndFavoritesProvider>
                    </FilteredProductsProvider>
                </FilterProvider>
            </ProductsProvider>
        </PageProvider>
    )
};