import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Clothing from './Pages/Clothing';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Clothing/>} />
        <Route path='/mobiles' element={<Clothing/>} />
        <Route path='/clothing' element={<Cart/>} />
        <Route path='/grocery' element={<Clothing/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
