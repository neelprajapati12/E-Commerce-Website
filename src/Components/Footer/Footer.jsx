import React from 'react'
import './Footer.css'
import insta from '../Footer/instagram-logo.png'
import twitter from '../Footer/twitter.png'
import whatsapp from '../Footer/whatsapp.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-name">
      {/* <img src={arrow} alt="" /> */}
      <h1>DART-MART</h1>
      </div>
      <div className="footer-links">
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="footer-sm">
      <ul>
            <div className='footer-img'>
                <img className='footer-img' src={insta} alt="" />
            </div>
            <div className='footer-img'>
                <img className='footer-img' src={twitter} alt="" />
            </div>
            <div className='footer-img'>
                <img className='footer-img' src={whatsapp} alt="" />
            </div>
        </ul>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright &#169; 2024 - All rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
