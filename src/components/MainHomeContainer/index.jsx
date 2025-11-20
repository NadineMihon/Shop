import React from "react";
import { CollectionsPreviewWrapper } from "./components/CollectionsPreviewWrapper";
import { FeaturedProductsWrapper } from "./components/FeaturedProductsWrapper";

export const MainHomeContainer = () => {
    return (
        <div className="home-wrapper">
            <CollectionsPreviewWrapper />
            <FeaturedProductsWrapper />
        </div>
    )
};