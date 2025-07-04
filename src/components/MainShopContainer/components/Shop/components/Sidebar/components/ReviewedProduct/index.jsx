import React from "react";

export const ReviewedProduct = ({ product }) => {
    
    return (
        <div className="product">
            <div className="image">
                <img 
                    className="product-image"
                    src={product.image} 
                    alt="Product image" 
                />
            </div>
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                    <div className="current-price">${product.price}</div>
                    {product.oldPrice && (
                        <div className="old-price">${product.oldPrice}</div>
                    )}
                </div>
            </div>
        </div>
    )
};