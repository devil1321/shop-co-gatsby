import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriceSlider = () => {
  return (
    <div className='category__price-slider'>
      <div className="category__price-slider-nav">
        <h3>Price</h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="category__price-slider-slider">
      <input type="range" min="0" max="100" value="50"/>
      </div>
    </div>
  )
}

export default PriceSlider
