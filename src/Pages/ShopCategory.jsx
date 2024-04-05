import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Items'
import dropdown from '../Components/Assets/dropdown.png'
import banner from '../Components/Assets/banner.png'

const ShopCategory = (props) => {

  const {all_products}=useContext(ShopContext);
  return (
    <div className='shopcat'>
      <img className='banner-img' src={banner} alt='/'/>
      <div className="shopcat-indexsort">
        <p><span>Showing 1-10 </span>out of 30</p>
        <div className="shopcat-sort">
          Sort by <img className='dropdown_img' src={dropdown} alt='/'/>
        </div>
      </div>
      <div className="shopcat-products">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.title} image={item.images[0]} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcat-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
