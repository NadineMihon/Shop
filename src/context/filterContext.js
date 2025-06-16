import { createContext } from "react";

export const FilterContext = createContext({
    filters: {
        searchValue: '',
        category: 'All',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: []
    },
    
    setFilters: () => {},
});