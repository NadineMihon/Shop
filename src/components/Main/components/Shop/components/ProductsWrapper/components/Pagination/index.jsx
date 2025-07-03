import React from "react";
import { Page } from "./Page";

export const Pagination = ({ currentPage, pageCount, goToPage }) => {
    return (
        <div className="pagination" id="pagination">
                <div 
                    className="button-left js-button-left"
                    onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                >
                    <img src="./icons/arrow-left.svg" alt="Arrow left" />
                </div>
                <div className="pages js-pages">
                    {Array.from({ length: pageCount }, (_, i) => (
                        <Page
                            key={i + 1}
                            number={i + 1} 
                            isActive={currentPage === i + 1}
                            goToPage={goToPage}
                        />
                    ))}
                </div>
                <div 
                    className="button-right js-button-right"
                    onClick={() => currentPage < pageCount && goToPage(currentPage + 1)}
                >
                    <img src="./icons/arrow-right.svg" alt="Arrow right" />
                </div>
            </div>
    )

};