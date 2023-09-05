import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sizes = () => {

  const handleSize = (e:any) =>{
    const sizes = document.querySelectorAll('.filters__sizes')
    sizes.forEach(s => s.classList.remove('active'))
    e.target.classList.add('active')
  }

  return (
    <React.Fragment>
      <div className="category__sizes-nav">
        <h3>Size</h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className='category__sizes'>
        <div className="category__size active" onClick={(e)=>handleSize(e)}>XX-Small</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>X-Small</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>Small</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>Medium</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>Large</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>X-Large</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>XX-Large</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>3X-Large</div>
        <div className="category__size" onClick={(e)=>handleSize(e)}>4X-Large</div>
      </div>
    </React.Fragment>
  )
}

export default Sizes
