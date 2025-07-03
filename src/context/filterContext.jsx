import { createContext, useState } from "react";

export const FilterContext = createContext({
    filters: null,
    sort: null,
    pagination: null,
    setFilters: () => {},
    setSort: () => {},
    setPagination: () => {}
});

export const FilterProvider = ({ children }) => {
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
        productsPerPage: 12,
        productsCount: 0
    });

    return (
        <FilterContext.Provider value={{ filters, setFilters, sort, setSort, pagination, setPagination }}>
            {children}
        </FilterContext.Provider>
    )
}