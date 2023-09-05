import React from 'react'
import Filters from './filters.component'
import PriceSlider from './price-slider.component'
import Colors from './colors.component'
import Sizes from './sizes.component'
import DressStyle from './dress-style.component'

const Aside = () => {
  return (
    <div className='category__aside'>
      <div className="catergory__aside-nav">
        <h3>Filters</h3>
        <div className="category__aside-settings-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <Filters />
      <PriceSlider />
      <Colors />
      <Sizes />
      <DressStyle />
      <button>Apply Filter</button>
    </div>
  )
}

export default Aside
