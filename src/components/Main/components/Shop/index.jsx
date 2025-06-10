import React from "react";
import { Sidebar } from "./components/Sidebar";
import { ProductsWrapper } from "./components/ProductsWrapper";

export const Shop = () => {

    return (
        <div className="container">
            <div className="shop">
                <Sidebar />
                <ProductsWrapper />
            </div>
        </div>
    )
}