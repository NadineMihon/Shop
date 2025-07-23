import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { Cover } from "../Cover"
import { MainShopContainer } from "../MainShopContainer";
import { MainCartContainer } from "../MainCartContainer";
import { MainWishlistContainer } from "../MainWishlistContainer";
import { Newsletter } from "../MainShopContainer/components/Newsletter";

export const Main = () => {
    const { page } = useContext(PageContext);

    return (
        <main className="main">
            <Cover />
            {
                page === 'shop' && <MainShopContainer /> 
                
            }
            {
                page === 'cart' && <MainCartContainer />
            }
            {
                page === 'wishlist' && <MainWishlistContainer />
            }
            {
                page !== 'cart' && <Newsletter />
            }
        </main>
    )
};