import React from 'react'
import BrowseItem from './browse-item.component'

const Browse:React.FC<{title:string}> = ({title}) => {
  return (
    <div className='home__browse'>
      <h2>{title}</h2>
      <div className="home__browse-items">
        <BrowseItem title="Casual" imgName="feature-1" width="sm" />
        <BrowseItem title="Formal" imgName="feature-2" width="lg" />
        <BrowseItem title="Party" imgName="feature-3" width="lg" />
        <BrowseItem title="Gym" imgName="feature-4" width="sm" />
      </div>
    </div>
  )
}

export default Browse
