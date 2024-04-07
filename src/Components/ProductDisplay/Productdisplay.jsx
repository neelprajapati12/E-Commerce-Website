import React from 'react'
import '../ProductDisplay/Productdisplay.css'
import star from'../Assets/star.png'
import star_dull from'../Assets/star_dull.png'


const Productdisplay = (props) => {
    const {product}=props;
  return (
    <div className='productdisplay'>
      <div className="productleft">
        <div className="product-img-list">
            <img src={product.images[0]} alt='/' />
            <img src={product.images[0]} alt='/' />
            <img src={product.images[0]} alt='/' />
            <img src={product.images[0]} alt='/' />
        </div>
        <div className="product-img">
            <img className='product-main-img' src={product.images[0]} alt='/'/>
        </div>
      </div>
      <div className="productright">
        <h1>{product.title}</h1>
        <div className="product-right-star">
            <img src={star} alt='/'/>
            <img src={star} alt='/'/>
            <img src={star} alt='/'/>
            <img src={star} alt='/'/>
            <img src={star_dull} alt='/'/>
            <p>(100)</p>
        </div>
        <div className="product-prices">
            <div className="product-price-old">
                {product.old_price}
            </div>
            <div className="product-price-new">
                {product.new_price}
            </div>
        </div>
        <div className="product-desc">
            {product.description}
        </div>
        {/* <div className="product-size">
            <h1>Select</h1>
        </div> */}
        <button>ADD TO CART</button>
        <p className='product-category'>
            <span>Category :</span>
            afevwevawvasdvsdv
        </p>
        <p  className='product-category'>
            <span>Tags :</span>
            afevwevawvasdvsdv
        </p>
      </div>
    </div>
  )
}

export default Productdisplay
