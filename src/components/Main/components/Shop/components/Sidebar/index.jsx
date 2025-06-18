import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../../../../context/filterContext";
import { ProductsContext } from "../../../../../../context/productsContext";
import { ReviewedProduct } from "./components/ReviewedProduct";

export const Sidebar = () => {
    const { filters, setFilters } = useContext(FilterContext);
    const products = useContext(ProductsContext);

    const [activeCategory, setActiveCategory] = useState(filters.category);
    const [selectedColors, setSelectedColors] = useState(filters.colors || []);
    const [priceValue, setPriceValue] = useState(filters.price);
    const [randomProducts, setRandomProducts] = useState([]);

    const handleSearchChange = (e) => {
        setFilters({ ...filters, searchValue: e.currentTarget.value });
    };

    const handleCategoryChange = (e) => {
        const clickedCategory = e.currentTarget.dataset.category;
        const currentCategory = activeCategory === clickedCategory ? 'All' : clickedCategory;

        setActiveCategory(currentCategory);
    };
    
    const handlePriceChange = (type, value) => {
        setPriceValue(prev => ({
            ...prev,
            [type]: Number(value)
        }));
    };

    const handleColorsChange = (e) => {
        const currentColor = e.currentTarget.dataset.color;
        const isChecked = e.currentTarget.checked;

        setSelectedColors(prev => 
            isChecked
                ? [...prev, currentColor]
                : prev.filter(color => color !== currentColor)
        );
    };

    const applyFilter = () => {
        setFilters({
            searchValue: filters.searchValue,
            category: activeCategory,
            price: priceValue,
            colors: selectedColors
        });
    };    
    
    useEffect(() => {
        setActiveCategory(filters.category);
        setSelectedColors(filters.colors || []);
    }, [filters]);

    useEffect(() => {
        if (products && products.length > 0) {
            const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
            setRandomProducts(shuffledProducts.slice(0, 3));
        }
    }, [products]);

    return (
        <div className="sidebar">
            <div className="search">
                <label>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={filters.searchValue}
                        onChange={handleSearchChange} 
                        className="search-row input" 
                        id="search-row" 
                    />
                    <img src="/icons/search.svg" alt="Search" className="search-icon" />
                </label>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Categories</div>
                <div className="sidebar-content">
                    <ul className="custom-list">
                        <li 
                            className={`item js-category ${activeCategory === 'All' ? 'active' : ''}`}
                            data-category="All" 
                            onClick={handleCategoryChange}
                        >
                            All
                        </li>
                        <li 
                            className={`item js-category ${activeCategory === 'Men' ? 'active' : ''}`} 
                            data-category="Men" 
                            onClick={handleCategoryChange}
                        >
                            Men
                        </li>
                        <li 
                            className={`item js-category ${activeCategory === 'Women' ? 'active' : ''}`}
                            data-category="Women" 
                            onClick={handleCategoryChange}
                        >
                            Women
                        </li>
                        <li 
                            className={`item js-category ${activeCategory === 'Accessories' ? 'active' : ''}`} 
                            data-category="Accessories" 
                            onClick={handleCategoryChange}
                        >
                            Accessories
                        </li>
                        <li 
                            className={`item js-category ${activeCategory === 'New Arrivals' ? 'active' : ''}`} 
                            data-category="New Arrivals" 
                            onClick={handleCategoryChange}
                        >
                            New Arrivals
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Price</div>
                <div className="sidebar-content">
                    <div className="price-bar">
                        <input 
                            type="text" 
                            placeholder="0" 
                            className="input js-min-price" 
                            onChange={(e) => handlePriceChange('minPrice', e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="200" 
                            className="input js-max-price"
                            onChange={(e) => handlePriceChange('maxPrice', e.target.value)} 
                        />
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Colors</div>
                <div className="sidebar-content">
                    <div className="colors">
                        <div className="color js-color">
                            <input 
                                type="checkbox" 
                                className="color-checkbox" 
                                id="black" 
                                name="black" 
                                data-color="Black"
                                onClick={handleColorsChange} 
                            />
                            <label htmlFor="black" className="color-name">Black</label>
                        </div>
                        <div className="color js-color">
                            <input 
                                type="checkbox" 
                                className="color-checkbox" 
                                id="blue" 
                                name="blue" 
                                data-color="Blue" 
                                onClick={handleColorsChange} 
                            />
                            <label htmlFor="blue" className="color-name">Blue</label>
                        </div>
                        <div className="color js-color">
                            <input 
                                type="checkbox" 
                                className="color-checkbox" 
                                id="red" 
                                name="red" 
                                data-color="Red"
                                onClick={handleColorsChange}  
                            />
                            <label htmlFor="red" className="color-name">Red</label>
                        </div>
                        <div className="color js-color">
                            <input 
                                type="checkbox" 
                                className="color-checkbox" 
                                id="yellow" 
                                name="yellow" 
                                data-color="Yellow" 
                                onClick={handleColorsChange} 
                            />
                            <label htmlFor="yellow" className="color-name">Yellow</label>
                        </div>
                        <div className="color js-color">
                            <input 
                                type="checkbox" 
                                className="color-checkbox" 
                                id="green" 
                                name="green" 
                                data-color="Green"
                                onClick={handleColorsChange}  
                            />
                            <label htmlFor="green" className="color-name">Green</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button" id="apply-filter" onClick={applyFilter}>Apply Filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Reviewed By You</div>
                <div className="sidebar-content">
                    <div className="reviewed-products js-reviewed-products">
                        {
                            randomProducts.map((product) => <ReviewedProduct key={product.id} product={product} />)
                        }
                    </div>
                </div>
            </div>
            <div className="banner">
                <a href="#">
                    <img src="/images/banner-sale.svg" alt="Season sale" />
                </a>
            </div>
        </div>   
    )
};