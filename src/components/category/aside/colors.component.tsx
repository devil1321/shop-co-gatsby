import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Colors = () => {

  const handleActive = (e:any) =>{
    const colors = document.querySelectorAll('.filters__color')
    colors.forEach(c => c.classList.remove('active'))
    e.target.classList.add('active')
  }

  return (
    <div className="category__colors">
      <div className="category__color active" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <div className="category__color" onClick={(e)=>handleActive(e)}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  )
}

export default Colors
