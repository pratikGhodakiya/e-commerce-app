import './App.css';
import Cart from './components/Pages/Cart';
import LoginSignup from './components/Pages/LoginSignup';
import Product from './components/Pages/Product';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Navbar from './components/navabr/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men" />}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid" />}/>
        <Route path ="/product" element={<Product />} >
         <Route path=':productId' element={<Product />} /> 
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
  </BrowserRouter>      
    </div>
  );
}

export default App;
