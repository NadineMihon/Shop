import React from "react";
import { AboutCompany } from "./components/AboutCompany";
import { AdvertisingSection } from "./components/AdvertisingSection";

export const MainAboutContainer = () => {
    return (
        <div className="about-wrapper">
            <AboutCompany />
            <AdvertisingSection />
        </div>
    )
}