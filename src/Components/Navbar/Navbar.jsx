import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
  
  const[menu,setmenu]=useState("all");
  const {gettotalitems}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* <img className='nav-img' src={logo} alt='' /> */}
        <p>Dart-Mart</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("all")}}><Link style={{textDecoration:'none'}} to='/'>All Products</Link>{menu==="all"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("clothing")}}><Link style={{textDecoration:'none'}} to='/clothing'>Clothing</Link>{menu==="clothing"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mobiles")}}><Link style={{textDecoration:'none'}} to='/mobiles'>Mobiles</Link>{menu==="mobiles"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("grocery")}}><Link style={{textDecoration:'none'}} to='/grocery'>Grocery</Link>{menu==="grocery"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img className='nav-img' src={logo} alt='' /></Link>
        <div className="nav-cart-count">{gettotalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
