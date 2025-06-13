import React, { useState, useEffect } from 'react';
import './styles/base/commons.css';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ProductsContext } from './context/productsContext';
import { CartAndFavoritesContext} from './context/cartAndFavoritesContext';
import { FilterContext } from './context/filterContext';
import { FilteredProductsContext } from './context/filteredProductsContext';

function App() {
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    searchValue: '',
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    const productsInBasket = localStorage.getItem('cart');
    return productsInBasket ? JSON.parse(productsInBasket) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const productsInFavorites = localStorage.getItem('favorites');
    return productsInFavorites ? JSON.parse(productsInFavorites) : [];
  });

  useEffect(() => {
      import('./data/products.json')
      .then(data => {
        setProducts(data.default);
        setFilteredProducts(data.default);
      });
  }, []);

  useEffect(() => {
    if (filters.searchValue.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter( product => product.name.toLowerCase().includes(filters.searchValue.toLowerCase()));
      setFilteredProducts(filtered);
    }
  }, [filters, products]);

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
    <ProductsContext.Provider value={products}>
      <FilteredProductsContext.Provider value={filteredProducts}>
        <CartAndFavoritesContext.Provider value={{ 
          addToCart, countInBasket, toggleProductInFavorites, isFavorite, countInFavorites
        }}>
          <FilterContext.Provider value={{ filters, setFilters }}>
            <div className="App">
              <Header />
              <Main />
              <Footer />
            </div>
          </FilterContext.Provider>
        </CartAndFavoritesContext.Provider>
      </FilteredProductsContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
