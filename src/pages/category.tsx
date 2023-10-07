import React, { useEffect } from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { CategoryComponents } from '../components/category'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ShopActions from '../controller/action-creators/shop.action-creators'

const CategoryPage = () => {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  useEffect(()=>{
    shopActions.handleSetProducts()
  },[])

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
