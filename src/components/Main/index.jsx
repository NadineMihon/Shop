import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { MainShopContainer } from "../MainShopContainer";
import { MainCartContainer } from "../MainCartContainer";

export const Main = () => {
    const { page } = useContext(PageContext);

    return (
        <>
            {
                page === 'shop' ? <MainShopContainer /> : <MainCartContainer />
            }
        </>
    )
};