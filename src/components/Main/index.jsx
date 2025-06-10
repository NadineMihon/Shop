import React from "react";
import { Cover } from "./components/Cover";
import { Shop } from "./components/Shop";
import { Newsletter } from "./components/Newsletter";

export const Main = () => {

    return (
        <main className="main">
            <Cover />
            <Shop />
            <Newsletter />
        </main>
    )

};