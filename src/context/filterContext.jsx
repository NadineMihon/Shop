import { createContext, useContext, useEffect, useState } from "react";
import { PageContext } from "./pageContext";

export const FilterContext = createContext({
    filters: null,
    sort: null,
    pagination: null,
    setFilters: () => {},
    setSort: () => {},
    setPagination: () => {}
});

export const FilterProvider = ({ children }) => {
    const { page } = useContext(PageContext);

    const [currentProductsPerPage, setCurrentProductsPerPage] = useState(12); 

    useEffect(() => {
        setCurrentProductsPerPage(page === 'Home' ? 8 : 12);
    }, [page]);

    const [filters, setFilters] = useState({
        searchValue: '',
        category: 'All',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: []
    });

    const [sort, setSort] = useState(null);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        productsPerPage: currentProductsPerPage,
        productsCount: 0
    });

    useEffect(() => {
        setPagination(prev => ({
            ...prev,
            productsPerPage: currentProductsPerPage
        }));
    }, [currentProductsPerPage]);

    return (
        <FilterContext.Provider value={{ filters, setFilters, sort, setSort, pagination, setPagination }}>
            {children}
        </FilterContext.Provider>
    )
};