import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export const useSort = () => {
    const { sort, setSort } = useContext(FilterContext);

    const sortProducts = (products) => {
        if (!sort) return products;

        return [...products].sort((a, b) => {
            if (sort === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sort === 'price') {
                return a.price - b.price;
            }
            return 0;
        });
    };

    return {
        sort,
        setSort,
        sortProducts
    };
};