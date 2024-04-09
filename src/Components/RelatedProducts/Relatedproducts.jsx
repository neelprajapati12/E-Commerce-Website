import React from 'react'
import '../RelatedProducts/Relatedproducts.css'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Items from '../Items/Items';

const Relatedproducts = (props) => {
  const {all_products}=useContext(ShopContext);
  const {product}=props;


  return (
    <div className='relatedprod'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedprod-item">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.title} image={item.images[0]} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Relatedproducts
