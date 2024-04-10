import React, { useContext } from 'react'
import '../CartItems/Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove from '../Assets/trash.png'
const Cartitems = () => {
    const {all_products,cartitems,removefromcart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
       <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       </div>
       <hr/>
       <div>
        {all_products.map((e)=>{
            if(cartitems[e.id]>0){
                return  <div>
                <div className="cartitems-format cartitems-main">
                <img className='img' src={e.images[0]} alt='/'/>
                <p>{e.title}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                <p>${e.new_price*cartitems[e.id]}</p>
                <img className='remove-icon' src={remove} onClick={()=>{removefromcart(e.id)}} alt='/'/>
            </div>
            <hr/>
            </div>
        }
        })}
       </div>
    </div>
  )
}

export default Cartitems