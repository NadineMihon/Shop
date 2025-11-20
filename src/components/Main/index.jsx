import React, { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import { Cover } from "../Cover";
import { HomeCover } from "../HomeCover";
import { MainShopContainer } from "../MainShopContainer";
import { MainCartContainer } from "../MainCartContainer";
import { MainWishlistContainer } from "../MainWishlistContainer";
import { MainAboutContainer } from "../MainAboutContainer";
import { MainHomeContainer } from "../MainHomeContainer";
import { Newsletter } from "./components/Newsletter";
import { CustomerServices } from "./components/CustomerServices";
import { Brands } from "./components/Brands";

export const Main = () => {
    const { page } = useContext(PageContext);

    return (
        <main className="main">
            {
                page !== 'Home' ? <Cover /> : <><HomeCover /> <MainHomeContainer /></>
            }
            
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
                (page !== 'Cart' && page !== 'Home')
                    && <Newsletter />
            }
            {
                page === 'About' && <Brands />
            }
        </main>
    )
};