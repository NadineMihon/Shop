import React, { createContext, useState } from "react";

export const PageContext = createContext({
    page: 'cart',
    setPage: () => {}
});

export const PageProvider = ({ children }) => {
    const [page, setPage] = useState();

    return (
        <PageContext.Provider value={{ page, setPage }}>
           {children} 
        </PageContext.Provider>
    )
};