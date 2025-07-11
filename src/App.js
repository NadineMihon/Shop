import React, { useContext } from 'react';
import './styles/base/commons.css';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import './styles/pages/cart.css'
import { Header } from './components/Header';
import { Cover } from './components/Cover';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ProductsProvider } from './context/productsContext';
import { FilterProvider } from './context/filterContext';
import { CartAndFavoritesProvider } from './context/cartAndFavoritesContext';
import { FilteredProductsProvider } from './context/filteredProductsContext';
import { PageProvider } from './context/pageContext';

function App() {
  return (
    <PageProvider>
      <ProductsProvider>
        <FilterProvider>
          <FilteredProductsProvider>
            <CartAndFavoritesProvider>
                <div className="App">
                  <Header />
                  <Cover />
                  <Main />
                  <Footer />
                </div>
            </CartAndFavoritesProvider>
          </FilteredProductsProvider>
        </FilterProvider>
      </ProductsProvider>
    </PageProvider>
  );
}

export default App;
