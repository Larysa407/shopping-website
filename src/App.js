import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Favorite } from './pages/favorite/Favorite';
import { Home } from './pages/home/Home';

function App() {
  // const [products, setProducts] = useState([]);

  //   const fetchData = async () =>{
  //   const data = await axios.get("products.json")
  //   setProducts(data)
  // }

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='favorite' element={<Favorite />}/>
      </Routes>
    </Router>
  );
}

export default App;
