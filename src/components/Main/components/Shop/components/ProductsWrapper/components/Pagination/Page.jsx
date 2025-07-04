import React from "react";

export const Page = ({ number, isActive, goToPage }) => {
    return (
        <div
            className={`page ${isActive ? 'active' : ''}`}
            onClick={() => goToPage(number)}
        >
            {number}
        </div>
    )
};