import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Filters = () => {
  return (
    <div className='category__filters'>
      <div className="category__filter">
        <p>T-shirts</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="category__filter">
        <p>Shorts</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="category__filter">
        <p>Shirts</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="category__filter">
        <p>Hoodie</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="category__filter">
        <p>Jeans</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}

export default Filters
