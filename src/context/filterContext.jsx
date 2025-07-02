import { createContext, useState } from "react";

export const FilterContext = createContext({
    filters: null,
    sort: null,
    setFilters: () => {},
    setSort: () => {}
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

    return (
        <FilterContext.Provider value={{ filters, setFilters, sort, setSort }}>
            {children}
        </FilterContext.Provider>
    )
}