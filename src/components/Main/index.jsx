import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { Cover } from "../Cover"
import { MainShopContainer } from "../MainShopContainer";
import { MainCartContainer } from "../MainCartContainer";
import { MainWishlistContainer } from "../MainWishlistContainer";
import { MainAboutContainer } from "../MainAboutContainer";
import { Newsletter } from "./components/Newsletter";
import { CustomerServices } from "./components/CustomerServices";
import { Brands } from "./components/Brands";

export const Main = () => {
    const { page } = useContext(PageContext);

    return (
        <main className="main">
            <Cover />
            {
                page === 'Shop' && <MainShopContainer /> 
                
            }
            {
                page === 'Cart' && <MainCartContainer />
            }
            {
                page === 'Wishlist' && <MainWishlistContainer />
            }
            {
                page === 'About' && <><MainAboutContainer /> <CustomerServices /></>

            }
            {
                page !== 'Cart' && <Newsletter />
            }
            {
                page === 'About' && <Brands />
            }
        </main>
    )
};