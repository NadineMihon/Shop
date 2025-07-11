import React, { createContext, useEffect, useState } from "react";

export const PageContext = createContext({
    page: '',
    setPage: () => {}
});

export const PageProvider = ({ children }) => {
    const [page, setPage] = useState(() => {
        return localStorage.getItem('currentPage') || 'shop';
    });

    useEffect(() => {
        localStorage.setItem('currentPage', page);
    }, [page]);

    return (
        <PageContext.Provider value={{ page, setPage }}>
           {children} 
        </PageContext.Provider>
    )
};