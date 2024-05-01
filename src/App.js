import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Clothing from './Pages/Clothing';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Register from './Pages/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Clothing/>} />
        <Route path='/mobiles' element={<ShopCategory category="smartphones"/>} />
        <Route path='/clothing' element={<ShopCategory category="home-decoration"/>} />
        <Route path='/grocery' element={<ShopCategory category="groceries"/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
