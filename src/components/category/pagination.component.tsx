import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pagination = () => {

  return (
    <div className='category__pagination'>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Previous</p>
      </button>
      <div className="category__pagination-pages">
        <div className="category__pagination-page active">1</div>
        <div className="category__pagination-page">2</div>
        <div className="category__pagination-page">3</div>
        <div className="category__pagination-page">...</div>
        <div className="category__pagination-page">8</div>
        <div className="category__pagination-page">9</div>
        <div className="category__pagination-page">10</div>
      </div>
      <button>
        <p>Next</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  )
}

export default Pagination
