import React, { useContext } from 'react'
import './CSS/Product.css'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';

const Product = () => {
    const {all_products}=useContext(ShopContext);
    const {productId}=useParams();
    const product =all_products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
    </div>
  )
}

export default Product
