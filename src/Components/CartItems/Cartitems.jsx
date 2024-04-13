import React, { useContext } from 'react'
import '../CartItems/Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove from '../Assets/trash.png'
const Cartitems = () => {
    const {all_products,cartitems,removefromcart,gettotalcatamount}=useContext(ShopContext);
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
              const priceNumeric = parseFloat(e.new_price.replace(/[^\d.]/g, '')); 
              console.log("Price:", e.new_price, typeof e.new_price);
              console.log("Quantity:", cartitems[e.id], typeof cartitems[e.id]);
              const totalPrice = priceNumeric * cartitems[e.id]; 
                return  <div>
                <div className="cartitems-format cartitems-main">
                <img className='img' src={e.images[0]} alt='/'/>
                <p>{e.title}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                <p>${totalPrice}</p>
                <img className='remove-icon' src={remove} onClick={()=>{removefromcart(e.id)}} alt='/'/>
            </div>
            <hr/>
            </div>
        }
        return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-totalitems">
                <p>SubTotal</p>
                <p>${gettotalcatamount()}</p>
              </div>
              <hr />
              <div className="cartitems-totalitems">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-totalitems">
                <h3>Total</h3>
                <h3>${gettotalcatamount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promo">
              <p>If you have a Promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type='text' placeholder='promo code'/>
                {/* <button>SUBMIT</button> */}
              </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Cartitems