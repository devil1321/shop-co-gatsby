import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DressStyle = () => {
  return (
    <div className='category__dress-style'>
      <div className="category__dress-style-nav">
        <h3>Dress Style</h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="category__dress-style-categories">
        <div className="category__dress-style-category">
            <p>Casual</p>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="category__dress-style-category">
            <p>Formal</p>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="category__dress-style-category">
            <p>Party</p>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="category__dress-style-category">
            <p>Gym</p>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  )
}

export default DressStyle
