import React from "react";
import { Cover } from "../Cover";
import { Shop } from "./components/Shop";
import { Newsletter } from "./components/Newsletter";

export const MainShopContainer = () => {

    return (
        <main className="main">
            <Shop />
            <Newsletter />
        </main>
    )
};