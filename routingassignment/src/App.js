import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/E-cart-Application/Home';
import Products from './components/E-cart-Application/Products';
import Cart from './components/E-cart-Application/Cart';
import Nav from './components/E-cart-Application/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;

