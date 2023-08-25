import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'gatsby';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__col">
        <h2 className='footer__col-title'>SHOP.CO</h2>
        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className="footer__icons">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
      <div className="footer__col">
        <h2 className='footer__col-title'>COMPANY</h2>
        <Link to="#">About</Link>
        <Link to="#">Features</Link>
        <Link to="#">Works</Link>
        <Link to="#">Career</Link>
      </div>
      <div className="footer__col">
        <h2 className='footer__col-title'>HELP</h2>
        <Link to="#">Customer Support</Link>
        <Link to="#">Delivery Details</Link>
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Privacy Policy</Link>
      </div>
      <div className="footer__col">
        <h2 className='footer__col-title'>FAQ</h2>
        <Link to="#">Account</Link>
        <Link to="#">Manage Deliveries</Link>
        <Link to="#">Orders</Link>
        <Link to="#">Payments</Link>
      </div>
      <div className="footer__col">
        <h2 className='footer__col-title'>RESOURCES</h2>
        <Link to="#">Free eBooks</Link>
        <Link to="#">Development Tutorial</Link>
        <Link to="#">How to - Blog</Link>
        <Link to="#">Youtube Playlist</Link>
      </div>
    </div>
  )
}

export default Footer
