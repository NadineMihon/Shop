import React, { useContext } from 'react';
import './styles/base/commons.css';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import './styles/pages/cart.css'
import './styles/pages/wishlist.css'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { AppProviders } from './context/appProviders';

function App() {
  return (
    <AppProviders>          
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProviders>
  )
};

export default App;