import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Clothing from './Pages/Clothing';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Clothing/>} />
        <Route path='/mobiles' element={<ShopCategory category="smartphones"/>} />
        <Route path='/clothing' element={<ShopCategory category="home-decoration"/>} />
        <Route path='/grocery' element={<ShopCategory category="groceries"/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
