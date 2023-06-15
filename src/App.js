import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Favorite } from './pages/favorite/Favorite';
import ProductList from './components/ProductList';
import ProductsProvider from './context/productsContext';

function App() {

  return (
    <Router>
      <ProductsProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='favorite' element={<Favorite />}/>
      </Routes>
      </ProductsProvider>
    </Router>
  );
}

export default App;
