import React, { createContext, useState } from "react";

export const DiscountContext = createContext({
    discount: false,
    setDiscount: () => {}
});

export const DiscountProvider = ({ children }) => {
    const [discount, setDiscount] = useState(false);

    return (
        <DiscountContext.Provider value={{ discount, setDiscount }}>
            {children}
        </DiscountContext.Provider>
    )
};