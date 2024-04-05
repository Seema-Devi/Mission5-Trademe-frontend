import React from 'react'
import './footer.css'
import footer_logo from '../assets/footer-logo.png'


const Footer = () => {
  return (
    <div className='footer'>
      
      <ul className="footer-links">
      <div className="footer-logo">
       <p><img src={footer_logo} alt="" /></p>
      </div>
        <li>About us</li>
        <li>Career</li>
        <li>Privacy policy</li>
        <li>Contact us</li>
      </ul>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
