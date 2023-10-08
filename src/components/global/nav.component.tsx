import { Link } from 'gatsby'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faClose,faHamburger, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  const menuRef = useRef() as MutableRefObject<HTMLDivElement>
  const searchRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMenu = () =>{
    if(!menuRef.current.classList.contains('nav__menu--open')){
      menuRef.current.classList.add('nav__menu--open')
    }else{
      menuRef.current.classList.remove('nav__menu--open')
    }
  }

  const handleSearchOpen = () =>{
    searchRef.current.classList.add('nav__search--open')
    console.log('open')
  }
  const handleSearchClose = () =>{
    searchRef.current.classList.remove('nav__search--open')
  }
  
  return (
    <div className='nav'>
      <FontAwesomeIcon icon={faHamburger} className='nav__hamburger' onClick={()=>handleMenu()}/>
      <Link to="/">
        <h1 className="nav__logo">SHOP.CO</h1>
      </Link>
      <div className="nav__menu" ref={menuRef}>
        <div className="nav__menu-item">
          <Link to="/">
            <div>Shop</div>
          </Link>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="nav__menu-item">
          <Link to="/category">On Sale</Link>
        </div>
        <div className="nav__menu-item">
          <Link to="/category">New Arrivals</Link>
        </div>
        <div className="nav__menu-item">
          <Link to="/category">Brands</Link>
        </div>
      </div>
      <div className="nav__search" ref={searchRef}>
        <input type="text" placeholder='Search for products...'/>
        <FontAwesomeIcon icon={faClose}  className='nav__search-cross' onClick={()=>handleSearchClose()}/>
        <div className="nav__matches">

        </div>
      </div>
      <div className="nav__menu-icons">
        <FontAwesomeIcon icon={faSearch} className='nav__search-icon' onClick={()=>handleSearchOpen()} />
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
        <FontAwesomeIcon icon={faPerson} />
      </div>
    </div>
  )
}

export default Nav
