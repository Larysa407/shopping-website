import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Favorite } from './pages/favorite/Favorite';
import ProductList from './components/ProductList';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='favorite' element={<Favorite />}/>
      </Routes>
    </Router>
  );
}

export default App;
