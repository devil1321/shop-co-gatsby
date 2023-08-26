import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface PathProps{
  paths:string[]
}

const Path:React.FC<PathProps> = ({paths}) => {
  return (
    <div className='path'>
      {paths.map(path =>  <div className='path__path'>
                            <span>{path}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </div>)}
    </div>
  )
}

export default Path
