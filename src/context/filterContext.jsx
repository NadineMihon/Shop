import { createContext, useState } from "react";

export const FilterContext = createContext({
    filters: null,
    setFilters: () => {},
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

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    )
}