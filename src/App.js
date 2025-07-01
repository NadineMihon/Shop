import React from 'react';
import './styles/base/commons.css';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ProductsProvider } from './context/productsContext';
import { FilterProvider } from './context/filterContext';
import { CartAndFavoritesProvider } from './context/cartAndFavoritesContext';
import { FilteredProductsProvider } from './context/filteredProductsContext';

function App() {

  return (
    <ProductsProvider>
      <FilterProvider>
        <FilteredProductsProvider>
          <CartAndFavoritesProvider>
              <div className="App">
                <Header />
                <Main />
                <Footer />
              </div>
          </CartAndFavoritesProvider>
        </FilteredProductsProvider>
      </FilterProvider>
    </ProductsProvider>
  );
}

export default App;
