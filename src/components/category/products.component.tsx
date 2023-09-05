import React from 'react'
import { GlobalComponents } from '../global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { products } from '../../products-context'
import Pagination from './pagination.component'

const Products = () => {
  return (
    <div className='category__products'>
      <div className="category__products-header">
        <h3>Casual</h3>
        <div className="category__products-header-text">
            <p>Showing 1-10 of 100 Products</p>
        </div>
        <div className="category__products-header-menu">
            <h3>Most Popular</h3>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <GlobalComponents.ProductSection data={products} title='' start={0} end={8} />
      <Pagination />
    </div>
  )
}

export default Products
