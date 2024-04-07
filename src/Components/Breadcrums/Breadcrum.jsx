import React from 'react'
import './Breadcrum.css'
import arrow_icon from'../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME<img className='img' src={arrow_icon} alt='/'/> SHOP<img  className='img' src={arrow_icon} alt='/'/> {product.category}<img  className='img' src={arrow_icon} alt='/'/> {product.title}
    </div>
  )
}

export default Breadcrum
