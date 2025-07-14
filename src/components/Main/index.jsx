import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { Cover } from "../Cover"
import { MainShopContainer } from "../MainShopContainer";
import { MainCartContainer } from "../MainCartContainer";

export const Main = () => {
    const { page } = useContext(PageContext);

    return (
        <main className="main">
            <Cover />
            {
                page === 'shop' ? <MainShopContainer /> : <MainCartContainer />
            }
        </main>
    )
};