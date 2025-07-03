import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export const usePagination = (products) => {
    const { pagination, setPagination } = useContext(FilterContext);

    const pageCount = Math.ceil(products.length / pagination.productsPerPage);
    const paginatedProducts = products.slice(
        (pagination.currentPage - 1) * pagination.productsPerPage,
        pagination.currentPage * pagination.productsPerPage
    );

    const goToPage = (page) => {
        setPagination(prev => ({ ...prev, currentPage: page}));
    };

    return {
        paginatedProducts,
        pageCount,
        currentPage: pagination.currentPage,
        goToPage
    }
};