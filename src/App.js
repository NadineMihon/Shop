import React, { useContext } from 'react';
import './styles/base/commons.css';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import { Header } from './components/Header';
import { Cover } from './components/Cover';
import { MainShopContainer } from './components/MainShopContainer';
import { MainCartContainer } from './components/MainCartContainer';
import { Footer } from './components/Footer';
import { ProductsProvider } from './context/productsContext';
import { FilterProvider } from './context/filterContext';
import { CartAndFavoritesProvider } from './context/cartAndFavoritesContext';
import { FilteredProductsProvider } from './context/filteredProductsContext';
import { PageContext, PageProvider } from './context/pageContext';

function App() {
  const { page }  = useContext(PageContext);

  return (
    <PageProvider>
      <ProductsProvider>
        <FilterProvider>
          <FilteredProductsProvider>
            <CartAndFavoritesProvider>
                <div className="App">
                  <Header />
                  <Cover />
                  {
                    page === 'shop' ? <MainShopContainer /> : <MainCartContainer />
                  }
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
