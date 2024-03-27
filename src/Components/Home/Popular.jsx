import React from 'react'
import './Popular.css';
import Items from '../Items/Items';
import fridge from '../Home/fridge.png'

const Popular = () => {
  return (
    <div className='recent'>
      <h1>RECENTLY BOUGHT</h1>
      <hr/>
      <div className="recent-items">
        <Items image={fridge} name="WhirlPool Fridge" new_price=" ₹50,000" old_price=" ₹60,000"/>
        <Items image={fridge} name="WhirlPool Fridge" new_price=" ₹50,000" old_price=" ₹60,000"/>
        <Items image={fridge} name="WhirlPool Fridge" new_price=" ₹50,000" old_price=" ₹60,000"/>
        <Items image={fridge} name="WhirlPool Fridge" new_price=" ₹50,000" old_price=" ₹60,000"/>
      </div>
    </div>
  )
}

export default Popular
