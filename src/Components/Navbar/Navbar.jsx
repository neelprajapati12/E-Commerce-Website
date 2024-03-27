import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';


const Navbar = () => {
  
  const[menu,setmenu]=useState("clothing");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* <img className='nav-img' src={logo} alt='' /> */}
        <p>Dart-Mart</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("clothing")}}>Clothing{menu==="clothing"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mobiles")}}>Mobiles{menu==="mobiles"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("homea")}}>Home Appliances{menu==="homea"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("grocery")}}>Grocery{menu==="grocery"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img className='nav-img' src={logo} alt='' />
        <div className="nav-cart-count">1</div>
      </div>
    </div>
  )
}

export default Navbar
