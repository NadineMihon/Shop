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

    const [filter, setFilter] = useState(false);

    const [filteredFavorites, setFilteredFavorites] = useState(favorites);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [cart, favorites]);

    const addToCart = (product) => {
        setCart(prev => {
            const productInBasket = prev.find(item => item.id === product.id);

            if (productInBasket) {
                return prev.map(item => item.id === product.id ? 
                    { ...item, quantity: item.quantity + 1 } : item
                );
            }

        return [...prev, { ...product, quantity: 1 }];
        })
    };

    const reduceProductQuantity = (product) => {
        setCart(prev => {
            const productInBasket = prev.find(item => item.id === product.id);
            if (!productInBasket) return prev;

            if (productInBasket.quantity === 1) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return prev.map(item => item.id === product.id ?
                    { ...item, quantity: item.quantity - 1 } : item
                );
            }

        });
    };

    const deleteProduct = (product) => {
        setCart(prev => {
            const productInBasket = prev.find(item => item.id === product.id);
            if (!productInBasket) return prev;

            return prev.filter(item => item.id !== product.id);
        });
    };

    const toggleProductInFavorites = (product) => {
        const statuses = ['IN STOCK', 'SOLD', 'TO ORDER'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        setFavorites(prev => 
            prev.some(item => item.id === product.id)
                ? prev.filter(item => item.id !== product.id) 
                : [...prev, { ...product, status: randomStatus }]
        );
    };

    const deleteProductInFavorites = (product) => {
        setFavorites(prev => {
            const productInFavorites = prev.find(item => item.id === product.id);
            if (!productInFavorites) return prev;

            return prev.filter(item => item.id !== product.id);
        });
    };

    const handleFilterChange = (e) => {
        const isChecked = e.currentTarget.checked;
    
        setFilter(isChecked ? true : false);
    };

    useEffect(() => {
        let updatedProducts = [...favorites];

        if (filter) {
            updatedProducts = updatedProducts.filter(product =>
                product.status === 'IN STOCK'
            )
        }

        setFilteredFavorites(updatedProducts);
    }, [filter, favorites]);

    const isFavorite = (productId) => favorites.some(item => item.id === productId);

    const countInBasket = cart.reduce((sum, item) => sum + item.quantity, 0);

    const countInFavorites = favorites.length;

    return (
        <CartAndFavoritesContext.Provider value={{ 
            addToCart, 
            countInBasket, 
            toggleProductInFavorites, 
            isFavorite, 
            countInFavorites, 
            cart,
            favorites,
            filteredFavorites,
            setFavorites,
            handleFilterChange,
            deleteProductInFavorites, 
            reduceProductQuantity, 
            deleteProduct
        }}>
            {children}
        </CartAndFavoritesContext.Provider>
    )
};