import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import Signup from '../pages/Signup';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

const Routers = () => {
  return <Routes>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
  </Routes>
} 

export default Routers