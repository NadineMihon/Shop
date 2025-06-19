import React, { createContext, useState, useEffect } from "react";

export const CartAndFavoritesContext = createContext({});

export const CartAndFavoritesProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const productsInBasket = localStorage.getItem('cart');
        return productsInBasket ? JSON.parse(productsInBasket) : [];
    });

    const [favorites, setFavorites] = useState(() => {
        const productsInFavorites = localStorage.getItem('favorites');
        return productsInFavorites ? JSON.parse(productsInFavorites) : [];
    });


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [cart, favorites]);

    const addToCart = (product) => {
        setCart(prev => {
            const productInBasket = prev.find(item => item.id === product.id);

            if(productInBasket) {
                return prev.map(item => item.id === product.id ? 
                    { ...item, quantity: item.quantity + 1 } : item
                );
            }

        return [...prev, { ...product, quantity: 1 }];
        })
    };

    const toggleProductInFavorites = (product) => {
        setFavorites(prev => 
            prev.some(item => item.id === product.id)
                ? prev.filter(item => item.id !== product.id) 
                : [...prev, product]
        );
    };

    const isFavorite = (productId) => favorites.some(item => item.id === productId);

    const countInBasket = cart.reduce((sum, item) => sum + item.quantity, 0);

    const countInFavorites = favorites.length;

    return (
        <CartAndFavoritesContext.Provider value={{ 
            addToCart, countInBasket, toggleProductInFavorites, isFavorite, countInFavorites
        }}>
            {children}
        </CartAndFavoritesContext.Provider>
    )
};