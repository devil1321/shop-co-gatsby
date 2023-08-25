import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='nav'>
      <h1 className="nav__logo">SHOP.CO</h1>
      <div className="nav__menu">
        <div className="nav__menu-item">
          <div>Shop</div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="nav__menu-item">
          <Link to="#">On Sale</Link>
        </div>
        <div className="nav__menu-item">
          <Link to="#">New Arrivals</Link>
        </div>
        <div className="nav__menu-item">
          <Link to="#">Brands</Link>
        </div>
      </div>
      <div className="nav__search">
        <input type="text" placeholder='Search for products...'/>
        <div className="nav__matches">

        </div>
      </div>
      <div className="nav__menu-icons">
        <FontAwesomeIcon icon={faShoppingBag} />
        <FontAwesomeIcon icon={faPerson} />
      </div>
    </div>
  )
}

export default Nav
