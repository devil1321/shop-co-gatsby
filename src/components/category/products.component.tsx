import React from 'react'
import { GlobalComponents } from '../global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { State } from '../../controller/reducers/root.reducer'
import Pagination from './pagination.component'

const Products = () => {

  const { products } = useSelector((state:State) => state.shop)

  const handleAside = () =>{
    const aside = document.querySelector('.category__aside') as HTMLDivElement
    if(!aside?.classList.contains('aside--open')){
      aside.style.display = 'block'
      aside.classList.add('aside--open')
    }else{
      aside.style.display = 'none'
      aside.classList.remove('aside--open')
    }
  }

  return (
    <div className='category__products'>
      <div className="category__products-header">
        <h3>Casual</h3>
        <div className="category__products-header-text">
            <p>Showing 1-10 of 100 Products</p>
        </div>
        <div className="category__products-header-menu" onClick={()=>handleAside()}>
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
