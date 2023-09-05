import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { CategoryComponents } from '../components/category'

const CategoryPage = () => {
  return (
    <GlobalComponents.Layout title="Category" className='category' meta={[]}>
        <GlobalComponents.Breadcrumb paths={["Home","Casual"]} />
        <div className="category__inner-wrapper">
          <CategoryComponents.Aside />
          <CategoryComponents.Products />
        </div>
        <HomeComponents.Contact text="STAY UPTO DATE ABOUT OUR LATEST OFFERS" />
    </GlobalComponents.Layout>
  )
}

export default CategoryPage
