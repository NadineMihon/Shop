import './styles/base/commons.scss';
import './styles/base/reset.css';
import './styles/components/footer.css';
import './styles/components/header.css';
import './styles/pages/shop.css';
import './styles/pages/cart.css'
import './styles/pages/wishlist.css'
import './styles/pages/about.css'
import './styles/pages/home.scss'
import './styles/components/customer-services.css'
import './styles/components/brands.css'
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