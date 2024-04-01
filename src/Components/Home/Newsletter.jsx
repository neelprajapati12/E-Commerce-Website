import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div className="container">
        <input type="email" placeholder='Your email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
